import React from "react";
import ReactDOM from "react-dom/client";

const holder = React.createElement(
  "h1",
  { style: { color: "red" } },
  "My First Line with changes"
);
const holder1 = React.createElement("h1", {}, "My Second Line");
const holder2 = React.createElement("h1", {}, "My Third Line");

const main = React.createElement("div", { id: "root" }, [
  holder,
  holder1,
  holder2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(main);
