export function routes(app: any) {
  //console.log("some");
  app.get("/t", (req, res) => {
    const date = new Date();
    const hours = (date.getHours() % 12) + 1; // London is UTC + 1hr;
    res.send(`
      <!doctype html>
      <head>
        <title>Time</title>
        <link rel="stylesheet" href="/style.css">
        <script src="/script.js"></script>
      </head>
      <body>
        <p>In London, the clock strikes:
          <span id="bongs">${"BONG ".repeat(hours)}</span></p>
        <button onClick="refresh(this)">Refresh</button>
      </body>
    </html>`);
  });

  app.get("/api", (req, res) => {
    const date = new Date();
    const hours = (date.getHours() % 12) + 1; // London is UTC + 1hr;
    res.json({ bongs: "BONG ".repeat(hours) });
  });
  app.get("/in", handler);
}
async function handler(req: any, res: any) {
  //const { query } = req;
  console.log(req.user);
  return res.send({ user: req.user });
}
