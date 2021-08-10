import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {useSelector} from 'react-redux';


//components
import Links from "./components/Links"
import TodoList from "./components/TodoList";


function App() {
  const lists = useSelector(state => state.mainReducer.todoItems);
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Links />
          </Route>
          {lists.map((list, index) => 
            <Route key={index} path={`/${list.name}`}>
              <TodoList name={list.name} items={list}/>
            </Route>
          )}
        </Switch>
      </Router>
  );
}

export default App;
