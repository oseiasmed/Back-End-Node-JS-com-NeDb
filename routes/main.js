module.exports = (app) => {
  app.get("/", (req, res) => {
    res.statusCode = 200;
    res.setHeader("content-Type", "text/html");
    res.end("<h1>Show, consegui</h1>");
  });
};
