// @ts-nocheck
import {getData} from "./db.ts";

const DELAY = 1000;

const server = Bun.serve({
  port: 4444,
  async fetch(request) {
    console.log(`${new Date().toLocaleTimeString()} Received request for ${request.url} ... `);
    await sleep();
    const data = await getData();

    console.log(`${new Date().toLocaleTimeString()} ... returning response: ${data}`);
    return new Response(data, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
      },
    });
  },
});

console.log(`API listening on localhost:${server.port}`);


function sleep() {
  return new Promise((resolve) => setTimeout(resolve, DELAY))
}
