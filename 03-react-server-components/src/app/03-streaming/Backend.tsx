import { queryFromDB } from "./serverData";
import { DemoHack } from "@/app/03-streaming/DemoHack";

export async function Backend({ messageId }: { messageId: number }) {
  const serverData = await queryFromDB(messageId);
  const now = new Date().toLocaleTimeString();

  return (
    <div>
      <h1>{serverData}</h1>
      <p>{now}</p>
      <DemoHack />
    </div>
  );
}
