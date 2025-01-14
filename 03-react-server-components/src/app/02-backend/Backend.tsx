import { readServerData } from "@/app/02-backend/serverData";

export async function Backend() {
  // const serverData = readServerData();

  // DEMO: async data fetching
  const serverData = await readServerData();

  const now = new Date().toLocaleTimeString();
  console.log("Rendering Backend Component");
  return (
    <div>
      <h1>{serverData}</h1>
      <p>{now}</p>
    </div>
  );
}
