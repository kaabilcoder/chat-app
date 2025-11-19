import express from "express";

const app = express();
const PORT=3001

app.get("/signup", (req, res) => {
       res.send("Sign Up");
});

app.get("/signin", (req, res) => {
       res.send("Hello world");
});

app.get("/chat", (req, res) => {
       res.send("Hello world");
});

app.listen(PORT, ()=> {
       console.log("http server is running at: ", PORT);
});