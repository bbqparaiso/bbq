import './App.css';
import Contacts from './components/Contacts/Contacts';
import CustomHeader from './components/CustomHeader/CustomHeader'
import Merch from './components/Merch/Merch';
import { Routes, Route } from 'react-router'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1 class="pageHeader">Paraíso BBQ</h1>
      </header> */}
      <CustomHeader />
      <Routes>
          <Route path="/" element={ <Contacts /> } />
          <Route path="/contacts-app" element={ <Contacts /> } />
          <Route path="/merch" element={ <Merch /> } />
          <Route path="*" element={ <Contacts /> } />
        </Routes>
      
      <footer class="App-footer" />
    </div>
  );
}

export default App;
