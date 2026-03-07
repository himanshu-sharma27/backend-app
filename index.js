import express from "express";
import expressLayouts from "express-ejs-layouts";
import session from "express-session";
// import {productRouter} from "./routes/productRoute.js";
import { storeRouter } from "./routes/storeRoute.js";
const app = express();
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(
  session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: false,
  }),
);

app.use("/", storeRouter);
// app.use("/auth", authRouter);
// app.use("/products", productRouter);
// app.use("/users", userRouter);

app.listen(5000, () => {
  console.log("Server Started");
});