var contentNode = document.getElementById('root');
var component = React.createElement("div", {
  className: "grid-container"
}, React.createElement("div", {
  className: "item1"
}, React.createElement("h1", null, " Ajay Sankar ")), React.createElement("div", {
  className: "item2"
}, React.createElement("img", {
  src: "./img/headshot.jpg",
  alt: "My HeadShot",
  width: "200",
  height: "200"
})), React.createElement("div", {
  className: "item3"
}, "A 3 year experienced Senior software engineer with a demonstrated history of working in C++, Java, ES6, NPM, WebPack, Perl and Modern web development, header-bidding and programmatic advertising platform."), React.createElement("div", {
  className: "item4"
}, React.createElement("a", {
  href: "https://github.com/AjaySankar/",
  target: "_blank",
  className: "myButton"
}, "VIEW MY GITHUB REPO")));
ReactDOM.render(component, contentNode);