const PORT = env.PORT || 3000;

require("http")
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "content-type": "text/html" });
      res.end(`
                <!DOCTYPE html>
                <head>
                    <link rel="shortcut icon" href="#" />
                </head>
                <body>
                    <script>
                        setTimeout(() => {
                            window.location.pathname = '/b';
                        }, 1000);
                    </script>
                </body>
            `);
    } else res.destroy();
  })
  .listen(PORT, () =>
    console.log(`Server running at http://localhost:${PORT}`)
  );
