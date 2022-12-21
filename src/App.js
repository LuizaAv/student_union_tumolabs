import './App.css';
import Navbar from './components/navbar/navbar';
import Aboutus from './components/aboutus/aboutus';
import Activities from "./components/activities/activities"
import Advicesupport from "./components/advicesupport/advicesupport"
import Educationwork from "./components/educationwork/educationwork"
import Newsevents from "./components/newsevents/newsevents"


import {Route, Routes} from "react-router-dom";
import CurrentPage from './currentpage';
import Footer from './components/footer/footer';
import Userwelcome from './components/registrationpage/userwelcome';
import Regpage from './components/registrationpage/regpage';

function App() {


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<CurrentPage />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/advicesupport" element={<Advicesupport />} />
        <Route path="/educationwork" element={<Educationwork />} />
        <Route path="/newsevents" element={<Newsevents />} />
        <Route path="/registrationpage"  element={<Regpage />}/>
        <Route path="/registrationpage/userhomepage"  element={<Userwelcome />} />
        <Route path="/regpage" element={<Regpage/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
