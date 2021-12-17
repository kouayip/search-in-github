import { API_BASE_URL } from "@env";
import { ResponseError } from "../exception/ResponseError";

// the expected return type of your API response.
export type ApiResponse = Record<string, unknown>;

interface HttpResponse<T> extends Response {
  parsedBody?: T;
}

export async function handleResponse<T>(res: HttpResponse<T>): Promise<T> {
  if (res.ok) return res.json();
  return res.text().then((text) => {
    let error: ResponseError;
    try {
      const json = JSON.parse(text);
      error = new ResponseError(
        json.msg || `${res.status} ${res.statusText}`,
        json.code,
        res,
        text
      );
    } catch (e) {
      error = new ResponseError(
        `${res.status} ${res.statusText} ${text}`,
        res.status,
        res,
        text
      );
    }
    throw error;
  });
}

export async function http<T>(
  input: RequestInfo,
  init?: RequestInit | undefined
): Promise<T> {
  return fetch(input, init).then((res) => handleResponse<T>(res));
}

export const fetchAbsolute =
  (baseUrl: string) =>
  <T>(url: string, request?: RequestInit | undefined): Promise<T> =>
    url.startsWith("/")
      ? http<T>(baseUrl + url, request)
      : http<T>(url, request);

export const fetchApi = fetchAbsolute(API_BASE_URL);
