import Header from './components/Header';
import EmployeeListContainer from './components/EmployeeListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <EmployeeListContainer />
      </div>
    </div>
  );
}

export default App;
