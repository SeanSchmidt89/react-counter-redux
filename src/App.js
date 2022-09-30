import Counter from "./components/counter/Counter";
import Header from "./components/header/Header";
import Display from "./components/display/Display";
import Input from "./components/input/Input";
function App() {
  return (
    <div className="App">
      <Header />
      <Display />
      <Counter />
      <Input />
    </div>
  );
}

export default App;
