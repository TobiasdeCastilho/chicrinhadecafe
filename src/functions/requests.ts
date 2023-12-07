import { useAuth } from "@/stores/auth"

interface RequestOptions<T> {
  endpoint: string
  method?: string
  callback: (data: T) => void
  errorCallback?: (data: string) => void
}

type Response<T> = {
  status: true
  data: T
} | {
  status: false
  message: string
  logout: boolean
}

const server = { address: '127.0.0.1', port: 8080 }

export const request = async <T>(options: RequestOptions<T>, data: {}) => {
  const _body = JSON.stringify({ ...data })

  fetch(`http://${server.address}:${server.port}/${options.endpoint}`, {
    method: options.method ?? 'POST',
    headers: new Headers({
      "Content-Type": "application/json",
      "Content-Length": _body.length.toString(),
    }),
    body: _body
  })
    .catch(err => options.errorCallback?.(err))
    .then(async (res) => {
      const response = await res?.json() as Response<T>
      console.log(response, res)
      if (res?.status.toString().startsWith('2'))
        if (response.status)
          options.callback(response.data)
        else {
          options.errorCallback?.(response.message)
          if (response.logout)
            useAuth().logout()
        }
      else
        options.errorCallback?.(`${res?.status}::${res?.statusText}`)
    })
}