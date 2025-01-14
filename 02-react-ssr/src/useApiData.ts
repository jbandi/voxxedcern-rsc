import {useEffect, useState} from "react";
import {clear, suspend} from 'suspend-react';


export async function fetchDataFromApi() {
  console.log('fetching data from api ...');
  const response = await fetch("http://localhost:4444/api");
  const message = await response.json();
  console.log(" ... loaded message from api: ", message.text);

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

export function suspend_hack(func: Parameters<typeof suspend>[0]): any {
  let suspendReturn = suspend(func);
  // DEMO: workaround for "global" cache in `suspend-react`, which is not made for SSR ...
  if (typeof window === 'undefined') {
    console.log('clearing cache ...');
    clear();
  }
  return suspendReturn;
}