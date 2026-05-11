const express = require("express");
const path = require("path");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

// Tetapkan EJS sebagai view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routing
app.use("/", routes);

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
