const element = (
  <div className="bg-container">
    <h1 className="main-heading">Congratulations</h1>
    <div className="card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="person-image"
      />
      <h1 className="sub-heading">Kiran V</h1>
      <p className="para">
        Vishnu Institute of computer science and technology, Bhimavaram.
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="watch-image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
