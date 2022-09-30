import Counter from "./components/counter/Counter";
import Header from "./components/header/Header";
import Display from "./components/display/Display";
import Input from "./components/input/Input";
import Toggle from "./components/toggle/Toggle";
function App() {
  return (
    <div className="App">
      <Header />
      <Display />
      <Counter />
      <Input />
      <Toggle />
    </div>
  );
}

export default App;
