import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard lastName="Doe" firstName="Jane" age={45} hair="black"></PersonCard>
      <PersonCard lastName="Smith" firstName="John" age={88} hair="brown"></PersonCard>
      <PersonCard lastName="Fillmore" firstName="Millard" age={50} hair="brown"></PersonCard>
      <PersonCard lastName="Smith" firstName="Maria" age={62} hair="brown"></PersonCard>
    </div>
  );
}

export default App;
