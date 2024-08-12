import axios from "axios";

export const fetchData = async <T,>(url: string): Promise<T> => {
  const { data } = await axios.get<T>(url, {
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  console.log("data", data);
  return data;
};
