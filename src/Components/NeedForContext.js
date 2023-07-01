function App() {
  const Happy = ({ hname }) => {
    return (
      <>
        <div>{hname} is Happy</div>
      </>
    );
  };
  const Smile = () => {
    return (
      <>
        <div>Smile</div>
        <Happy hname="vinu" />
      </>
    );
  };
  const Cry = () => {
    return (
      <>
        <div>Cry</div>
        <Smile />
      </>
    );
  };
  return (
    <div className="App">
      <header className="App-header">
        <Cry />
      </header>
    </div>
  );
}

export default App;
