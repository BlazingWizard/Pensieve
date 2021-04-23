function createApi(apiHostUrl) {
  const request = async (method, url, body = null) => {
    const response = await fetch(`${apiHostUrl}/${url}`, {
      method,
      body
    });

    if (!response.ok) {
      throw Error('Something went wrong');
    }

    return response.json();
  };

  return {
    get: (url) => request('get', url),
    del: (url) => request('delete', url),
    put: (url, body) => request('put', url, body),
    post: (url, body) => request('post', url, body)
  };
}

export default createApi;
