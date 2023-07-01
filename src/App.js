import React from "react";
import PackageContext from "./Context";
import Provider from "./Provider";

const Smile = () => {
  return (
    <div>
      <PackageContext.Consumer>
        {(info) => (
          <div>
            <h1>Name of cricketer: {info.data.name}</h1>
            <h2>Age: {info.data.age}</h2>
            <button onClick={info.updateAge(50)}>Update age</button>
            <h2>Country: {info.data.country}</h2>
            <h2>Highest score: {info.data.highestScore}</h2>
          </div>
        )}
      </PackageContext.Consumer>
    </div>
  );
};

function App() {
  return (
    <>
      <div className="App">Hello</div>

      <Smile />
    </>
  );
}

export default App;
