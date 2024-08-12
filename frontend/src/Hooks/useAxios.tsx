import axios from "axios";
import { useEffect, useState } from "react";

export const useAxios = <T,>(
  url: string,
  httpMethod: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  body: T | null = null
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (
    url: string,
    httpMethod: "GET" | "POST" | "PUT" | "DELETE" = "GET",
    body: T | null = null
  ) => {
    try {
      const response = await axios(url, {
        method: httpMethod,
        data: body,
      });
      if (body !== null) {
        setData(response.data);
      }
      setLoading(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(err.message);
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url, httpMethod, body);
  }, [url]);

  return { data, loading, error, fetchData };
};
