import figlet from "figlet";

const server = Bun.serve({
    port: 3000,
    fetch(req) {
        return new Response("Bun!");
    },
});

const body = figlet.textSync("wahyu!");
console.log(body);
console.log(`Listening on http://localhost:${server.port} ...`);