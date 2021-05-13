import combineUrl from '../helpers/combineUrl';

type TypeRestMethod = 'get' | 'put' | 'post' | 'delete';
interface RestMethods<BodyType> {
  get: <T>(url: string) => Promise<T>;
  del: <T>(url: string) => Promise<T>;
  put: <T>(url: string, body?: BodyType) => Promise<T>;
  post: <T>(url: string, body?: BodyType) => Promise<T>;
}

function createApi<BodyType>(apiTypeUrl: string): RestMethods<BodyType> {
  const request = async <T>(
    method: TypeRestMethod,
    url: string,
    body?: BodyType
  ) => {
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

    return new Promise<T>((resolve) => {
      const convertedResponse = responseText
        ? JSON.parse(responseText)
        : undefined;
      resolve(convertedResponse);
    });
  };

  return {
    get: (url: string) => request('get', url),
    del: (url: string) => request('delete', url),
    put: (url: string, body?: BodyType) => request('put', url, body),
    post: (url: string, body?: BodyType) => request('post', url, body)
  } as RestMethods<BodyType>;
}

export default createApi;
