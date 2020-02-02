var contentNode = document.getElementById('root');
var component = React.createElement("div", {
  className: "grid-container"
}, React.createElement("div", {
  className: "item1"
}, React.createElement("h1", null, " Batman ")), React.createElement("div", {
  className: "item2"
}, React.createElement("img", {
  src: "./img/batman_headshot.jpg",
  alt: "My HeadShot",
  width: "200",
  height: "200"
})), React.createElement("div", {
  className: "item3"
}, "I have been Gotham's protector for decades, CEO of Wayne Enterprises, Patriarch of the Bat Family and veteran member of the Justice League.Unlike most superheroes, I do not possess any superpowers; I make use (to the best that I can) of intellect, detective skills, science and technology, wealth, physical prowess, and intimidation in his war on crime."), React.createElement("div", {
  className: "item4"
}, React.createElement("a", {
  href: "https://github.com/AjaySankar/",
  target: "_blank",
  className: "myButton"
}, "VIEW MY GITHUB REPO")));
ReactDOM.render(component, contentNode);