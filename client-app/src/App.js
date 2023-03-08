
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Candidates from './Admin/Pages/Candidtes/Candidates';
import Home from "./Admin/Pages/Home/Home";
import Login from './Admin/Pages/Login/Login';
import Landing from './Candidate/Landing/Landing';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Landing />} />



            {/* admin routes  */}
            <Route path='admin'>
           
              <Route path='home' element={<Home />} />
              <Route path='candidates' element={<Candidates />} />
            </Route >

            {/* recruiter routes  */}
            <Route path='recruiter'>
              
            </Route >


          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
