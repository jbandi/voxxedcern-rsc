import styles from "../component.module.css";
export function Simple() {
  const now = new Date().toLocaleTimeString();
  console.log("Rendering Simple Component");
  return (
    <div>
      <h1>Simple Component</h1>
      <div>{now}</div>
    </div>
  );
}
