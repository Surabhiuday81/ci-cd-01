const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello from CI/CD pipeline 🚀",
  });
});

module.exports = app;

// Run server only if not in test mode
if (require.main === module) {
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}