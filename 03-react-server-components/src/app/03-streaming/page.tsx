import { Suspense } from "react";
import { Backend } from "./Backend";
import { Spinner } from "@/app/Spinner";
import styles from "@/app/component.module.css";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <div className={styles.wrapper}>
      <h3>Backend Data:</h3>
      <div className={styles.column}>
        <Suspense fallback={<Spinner />}>
          <Backend messageId={1} />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Backend messageId={2} />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Backend messageId={3} />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Backend messageId={5} />
        </Suspense>
      </div>
    </div>
  );
}
