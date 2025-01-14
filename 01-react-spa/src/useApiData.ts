import { useEffect, useState } from "react";


export async function fetchDataFromApi() {
  const response = await fetch("http://localhost:4444/api");
  const message = await response.json();
  return message.text;
}

export function useApiData() {
  const [data, setData] = useState("");
  useEffect(() => {
    async function fetchData() {
      const messageText = await fetchDataFromApi();
      setData(messageText);
    }
    fetchData();
  }, []);
  return data;
}

