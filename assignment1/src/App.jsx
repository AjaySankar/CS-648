var contentNode = document.getElementById('root');
var component = <div className="grid-container">
    <div className="item1">
      <h1> Ajay Sankar </h1>
    </div>
    <div className="item2">
      <img src= "./img/headshot.jpg" alt="My HeadShot" width="200" height="200"></img>
    </div>
    <div className="item3">
      A 3 year experienced Senior software engineer with a demonstrated history of working in C++, Java, ES6, NPM, WebPack, Perl and Modern web development, header-bidding and programmatic advertising platform.
    </div>
    <div className="item4">
      <a href="https://github.com/AjaySankar/" target = "_blank" className="myButton">VIEW MY GITHUB REPO</a>
    </div>
  </div>;
ReactDOM.render(component, contentNode);