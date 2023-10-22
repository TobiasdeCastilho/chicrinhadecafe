interface RequestOptions<T> {
  endpoint: string
  auth: string
  method?: string
  callback: (data: T) => null
  errorCallback: (data: any) => null
}

export const request = async <T>(options: RequestOptions<T>, data: {}) => {
  const body = JSON.stringify(data)

  fetch(options.endpoint, {
    method: options.method ?? 'POST',
    headers: new Headers({
      "Content-Type": "application/json",
      "Content-Length": body.length.toString(),
    }),
    body: JSON.stringify(data)
  })
    .catch(err => options.errorCallback(err))
    .then(async (response) => options.callback(await JSON.parse(response?.data) as T))
}