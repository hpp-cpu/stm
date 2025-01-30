import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListStudentComponent';
import AddEmployeeComponent from './components/AddStudentComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className= "container">
          <Switch>
              <Route exact path = "/" component = {ListStudentComponent}></Route>
              <Route path = "/employees" component = {ListStudentComponent}></Route>
              <Route path = "/add-employee" component = {AddStudentComponent} ></Route>
              <Route path = "/edit-employee/:id" component = {AddStudentComponent}></Route>
            </Switch>
        </div>
        <FooterComponent />
        </Router>
    </div>
  );
}

export default App;