import './App.css';
import Contacts from './components/Contacts/Contacts';
import CustomHeader from './components/CustomHeader/CustomHeader'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1 class="pageHeader">Paraíso BBQ</h1>
      </header> */}
      <CustomHeader />
      <Contacts />
      <footer class="App-footer" />
    </div>
  );
}

export default App;
