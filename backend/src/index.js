import app from "./app.js";
import connectDB from "./db/db.js";
import dotenv from "dotenv";
import redisClient from "./utils/redis-client.js";
dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

connectDB()
  .then(() => {
    console.log("✅ MongoDB: Connected successfully");

    redisClient.on("connect", () => {
      console.log("✅ Redis: Connected successfully");
    });

    redisClient.on("error", (err) => {
      console.error("❌ Redis error:", err.message);
    });

    app.listen(port, () => {
      console.log(`Server started on PORT: ${port}`);
    });
  })
  .catch((err) => {
    console.error(`MongoDB Connection Error`, err);
    process.exit(1);
  });