import './App.css';
import dataContact from './data/contacts.json';
import Contact from './components/Contact.js';
import Header from './components/Header.js';
// Uncomment untuk memuat daftar kontak
// import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header></Header>
      {dataContact.map((item) =>{
        return (
          <Contact data={item}></Contact>
        )
      })}
    </div>
  );
}

export default App;
