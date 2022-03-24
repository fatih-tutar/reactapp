import './App.css';
import User from "./components/User";
import Navbar from "./components/Navbar";
import Lists from "./components/Lists";

function App() {
  const test = 10;
  const isAuth = true;
  return (
    <div className="App">
      <Lists
        name="Fatih Tutar"
        salary="10000"
        department="Software"
      />
      <Lists
        name="Fatih Tutar"
        salary="10000"
        department="Software"
      />
      <hr/>
      <Navbar title="User App"/>
      <hr/>
      <h4 style= {{color:"blue",fontSize:"30px"}}>React CSS</h4>
      <alert className="alert alert-danger">We inclueded Bootstrap in our project.</alert>
      <hr/>
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
