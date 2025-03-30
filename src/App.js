import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import FormInput from './components/FormInput';
import TodoList from './components/TodoList';
function App() {
  return (
    <div>
      <h1>Counter</h1>
      <Counter />
      <h2>FormInput</h2>
      <FormInput />
      <h2>TodoList</h2>
      <TodoList /> 

        
    </div>
  );
}

export default App;
