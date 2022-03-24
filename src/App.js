import User from "./components/User";
import './App.css';

function App() {
  const test = 10;
  const isAuth = true;
  return (
    <div className="App">
      <h4>App Component</h4>  
      <User/>
      <hr/>
      <div>
        {
          isAuth ? <p>Kullanıcı Kayıtlı</p>
            : null
        }
      </div>
      <h4>{test}</h4>
      <h4>{"Fatih".toUpperCase()}</h4>
      {1 + 1}
    </div>
  );
}

export default App;
