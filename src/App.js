import './App.css';
import Navbar from './components/navbar/navbar';
import Aboutus from './components/aboutus/aboutus';
import Activities from "./components/activities/activities"
import Advicesupport from "./components/advicesupport/advicesupport"
import Educationwork from "./components/educationwork/educationwork"
import Newsevents from "./components/newsevents/newsevents"


import {Route, Routes} from "react-router-dom";
import CurrentPage from './currentpage';
import LoginPage from './components/loginpage/loginpage';
import Footer from './components/footer/footer';
import RegistrationPage from './components/registrationpage/registrationpage';
import Createdaccount from './components/registrationpage/createdaccount';
import Userwelcome from './components/registrationpage/userwelcome';

function App() {


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<CurrentPage />}/>
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/advicesupport" element={<Advicesupport />} />
        <Route path="/educationwork" element={<Educationwork />} />
        <Route path="/newsevents" element={<Newsevents />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/registrationpage"  element={<RegistrationPage />}/>
        <Route path="/createdaccount" element={<Createdaccount />} />
        <Route path="/registrationpage/userhomepage"  element={<Userwelcome />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
