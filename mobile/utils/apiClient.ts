// Client responsible for data fetching
const apiURL = 'http://192.168.1.19:8888/.netlify/functions/';

interface ApiClientSettings {
  data?: any;
  token?: string;
  headers?: any;
  customConfig?: any;
}

async function apiClient<T>(
  endpoint: string,
  {
    data,
    token,
    headers: customHeaders,
    ...customConfig
  }: ApiClientSettings = {},
): Promise<T> {
  const config = {
    method: data ? 'POST' : 'GET',
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      'Content-Type': data ? 'application/json' : undefined,
      ...customHeaders,
    },
    ...customConfig,
  };
  return fetch(`${apiURL}/${endpoint}`, config).then(async (response) => {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(data);
    }
  });
}

export {apiClient};
