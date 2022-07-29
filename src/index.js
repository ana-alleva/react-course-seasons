import React from "react";
import ReactDom from "react-dom";

class App extends React.Component {
  // We have to create a constructor that overrides a React component constructor. So we have to call super props because if not there is going to be an error
  constructor(props) {
    super(props);

    //Inicializar state object
    this.state = { lat: null };
  }
  // React says we have to define a Render method.
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );
    return <div>Latitud: </div>;
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
