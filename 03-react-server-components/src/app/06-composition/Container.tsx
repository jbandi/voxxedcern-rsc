import Child from "./Child";
import Shared from "./Shared";
import styles from "@/app/component.module.css";

export default async function Container() {
  console.log("rendering Container");
  return (
    <div className={styles.container}>
      <h1>Container</h1>
      <p>Rendering on server</p>
      <Shared />
      <Child>
        <Shared />
      </Child>
    </div>
  );
}
