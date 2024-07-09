import { getFunction, postFunction } from "../services/api"

function App() {

  function btnGetFunctionClick(){
    getFunction()
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }

  function btnPostFunctionClick(){
    postFunction()
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }

  return (
    <div>
      <button onClick={btnGetFunctionClick}>FUNÇÃO GET</button>
      <button onClick={btnPostFunctionClick}>FUNÇÃO POST</button>
    </div>
  );
}

export default App;
