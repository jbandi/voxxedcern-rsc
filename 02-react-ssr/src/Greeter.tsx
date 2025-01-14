/* eslint-disable @typescript-eslint/no-unused-vars */
import {fetchDataFromApi, suspend_hack as suspend, useApiData} from "./useApiData.ts";
import styles from "./Greeter.module.css";

export function Greeter() {
  
  const messageText = 'Hello from Greeter Component';
  
  // DEMO 1
  // fetching with effect and state -> fetching only on the client
  // const messageText = useApiData();
  
  // DEMO 2
  // fetching with suspense -> fetching twice: on server and client
  // -> DEMO DOES NOT WORK PROPERLY FOR SSR!!!
  // -> suspense has a "global" cache -- in SSR we should have a request-scoped cache
  // -> a workaround for the demo is to `clear` the cache right after the fetch completed ... 
  // const messageText = suspend(fetchDataFromApi);

  console.log("Rendering Greeter with messageText", messageText);
  return (
    <div className={styles.wrapper}>
      <h2>Greeter Component</h2>
      <h1>{messageText}</h1>
    </div>
  );
}
