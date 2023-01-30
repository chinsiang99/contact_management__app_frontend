import AddContact from './components/AddContact';
import './App.css';
import ContactList from './components/ContactList';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactDetail from './components/ContactDetail';
import DeleteContact from './components/DeleteContact';
import EditContact from './components/EditContact';
import { ContactsCrudContextProvider } from './context/ContactsCrudContext';

function App() {

  return (
    <div className=''>
      <Router>
        <Header/>
        <ContactsCrudContextProvider>
          <Routes>
            {/* use exact to make the route exact as it is because switch will find the nearest matching one without exact */}
            <Route path="/" 
              exact 
              element={<ContactList/>}
            />

            <Route path="/add" 
            exact
            element={<AddContact/>}
            />

            <Route path="/contact/:id" 
            exact
              element={<ContactDetail/>}
            />

            <Route path="/delete/:id" 
            exact
              element={<DeleteContact/>}
            />

            <Route path="/edit" 
            exact
              element={<EditContact/>}
            />

          </Routes>
        </ContactsCrudContextProvider>
      </Router>
    </div>
  );
}

export default App;
