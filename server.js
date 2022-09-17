import express from "express";

const app = express();

const routes = {
  index: "pages/index",
  projects: "pages/projects",
  login: "pages/login"
}

app.set("view engine", "ejs");

app.get("/", (req, res) => {

  const items = [
    {
      title: "D",
      message: "esse jeito"
    },
    {
      title: "E",
      message: "stranho"
    },
    {
      title: "M",
      message: "orrerei"
    },
    {
      title: "A",
      message: "qui"
    },
    {
      title: "I",
      message: "solado"
    },
    {
      title: "S",
      message: "ozinho"
    },
  ]

  res.render(routes.index, {about: items})

});

app.get("/projects", (req, res) => {
  res.render(routes.projects)
});

app.get("/login", (req, res) => {
  res.render(routes.login)
});

app.listen(3000)