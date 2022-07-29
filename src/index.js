import React from "react";
import ReactDom from "react-dom";

class App extends React.Component {
  // We have to create a constructor that overrides a React component constructor. So we have to call super props because if not there is going to be an error
  constructor(props) {
    super(props);

    //Inicializar state object
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      position => { 
        // To update the state object we call the SET STATE
        this.setState ({ lat: position.coords.latitude});
       },
      (err) => console.log(err)
    );
  }
  // React says we have to define a Render method.
  render() {
    // here I make reference of the state object
    return <div>Latitud: {this.state.lat}</div>;
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
