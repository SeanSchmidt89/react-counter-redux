import Counter from "./components/counter/Counter";
import Header from "./components/header/Header";
import Display from "./components/display/Display";
import Input from "./components/input/Input";
import Toggle from "./components/toggle/Toggle";
import { useSelector } from "react-redux";

function App() {
  const toggle = useSelector((state) => state.showCounter);
  return (
    <div className="App">
      <Header />
      {toggle && <Display />}
      {toggle && <Counter />}
      {toggle && <Input />}
      <Toggle />
    </div>
  );
}

export default App;
