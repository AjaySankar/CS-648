var contentNode = document.getElementById('root');
var component = <div className="grid-container">
    <div className="item1">
      <h1> Batman </h1>
    </div>
    <div className="item2">
      <img src= "./img/batman_headshot.jpg" alt="My HeadShot" width="200" height="200"></img>
    </div>
    <div className="item3">
      I have been Gotham's protector for decades, CEO of Wayne Enterprises, Patriarch of the Bat Family and veteran member of the Justice League.Unlike most superheroes, I do not possess any superpowers; I make use (to the best that he can) of intellect, detective skills, science and technology, wealth, physical prowess, and intimidation in his war on crime.
    </div>
    <div className="item4">
      <a href="https://github.com/AjaySankar/" target = "_blank" className="myButton">VIEW MY GITHUB REPO</a>
    </div>
  </div>;
ReactDOM.render(component, contentNode);