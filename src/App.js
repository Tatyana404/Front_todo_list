import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ToDoList from "pages/TodoList"

function App () {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ToDoList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
