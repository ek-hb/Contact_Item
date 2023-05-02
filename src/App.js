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

function App() {
  return (
    <Router>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/new-contact" element={<NewContact />} />
        <Route path="/update-contact" element={<UpdateContact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
