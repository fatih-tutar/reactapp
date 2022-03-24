import './App.css';

function App() {
  const test = 10;
  const isAuth = true;
  return (
    <div className="App">
      { 1 + 1 }
      <h4>{"Fatih".toUpperCase()}</h4>
      <h4>{test}</h4>
      <div>
        {
          isAuth ? <p>Kullanıcı Kayıtlı</p>
          : null
        }
      </div>
    </div>
  );
}

export default App;
