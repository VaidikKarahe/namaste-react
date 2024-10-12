const heading = React.createElement(
  "div",
  { id: "parent" }, // this is my attributes
  React.createElement(
    "div",
    { id: "chilf" }, // this is my attributes
    [React.createElement(
      "h1",
      { id: "heading" }, // this is my attributes
      "Namaste GOD from ReactJS"
    ),React.createElement(
        "h2",
        { id: "heading" }, // this is my attributes
        "Namaste GOD from ReactJS H2"
      )]
  )
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
