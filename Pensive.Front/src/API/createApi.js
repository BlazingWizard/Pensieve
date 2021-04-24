import combineUrl from '../helpers/combineUrl';

function createApi(apiTypeUrl) {
  const request = async (method, url, body = null) => {
    const apiBaseUrl = process.env.REACT_APP_API_BASE;
    if (!apiBaseUrl) {
      throw Error('Environment param "REACT_APP_API_BASE" not found.');
    }
    const payload = body ? JSON.stringify(body) : null;
    const urlParts = [apiBaseUrl, apiTypeUrl, url];
    const response = await fetch(combineUrl(urlParts), {
      method,
      body: payload,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw Error('Something went wrong');
    }

    const responseText = await response.text();

    return new Promise((resolve) => {
      const convertedResponse = responseText
        ? JSON.parse(responseText)
        : responseText;
      resolve(convertedResponse);
    });
  };

  return {
    get: (url) => request('get', url),
    del: (url) => request('delete', url),
    put: (url, body) => request('put', url, body),
    post: (url, body) => request('post', url, body)
  };
}

export default createApi;
