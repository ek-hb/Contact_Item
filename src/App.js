import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//css
import "./App.css";

//Import
import ContactList from "./Pages/ComtactList/ComtactList";
import NewContact from "./Pages/NewContact/NewContact";
import UpdateContact from "./Pages/UpdateContact/UpdateContact";
import NotFound from "./Pages/NotFound/NotFound";
import Header from "./Component/Header/Header";
import Sidebar from "./Component/Sidebar/Sidebar";

//import hooks
import { useState } from "react";

function App() {
  const [stor, setStor] = useState([]);
  const handleNewContact = (NewContact) => {
    setStor((prevStore) => [...prevStore, NewContact]);
    console.log(stor);
  };
  const deleteContact = (id) => {
    setStor((prevStore) => prevStore.filter((contact) => contact.id !== id));
  };

  return (
    <Router>
      <Header />
      <Sidebar stor={stor} />
      <Routes>
        <Route
          path="/"
          element={<ContactList stor={stor} onDeleteContact={deleteContact} />}
        />
        <Route
          path="/new-contact"
          element={<NewContact onNewContact={handleNewContact} />}
        />
        <Route path="/update-contact" element={<UpdateContact stor={stor} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
