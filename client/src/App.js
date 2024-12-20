
import { BrowserRouter, Route, Router, Routes, Link, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import Navbars from './components/Navbars';
import Home from './components/Home';
import Profile from './components/Profile';
import About from './components/About';
import Protected from "./components/Protected";
import { useEffect, useState, createContext } from 'react';
import Login from './components/login1';
import SingUp from './components/singUp';
import CarouselFadeExample from './components/carousel';
import Tabla from './components/tabla';
import Yomcol from './components/yomcol';
import SignIn from './components/Login';
import StickyFooter from './components/newCode';
import Donations from './components/Donations';
import Contact from './components/contact';
import Messages from './components/Messages';
import Updates from './components/Updates';
import Manager from './components/manager';
import Community_list from './components/Community_list';
import axios from 'axios';
import YourMassge from './components/yourMassge';
import MazelTov from './components/MazelTov';
import UpdatesDisplay from './components/UpdatesDisplay';
import UpdatesHistory from './UpdatesHistory';

export const userContext = createContext([])

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.token);
  const [bage, setBage] = useState("");
  const [arrMassge, setArrMassge] = useState([])
  const [ProfileKey, setProfileKey] = useState(0);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("serverData")));
  // console.log(JSON.parse(localStorage.serverData));
  const [emailInpotLogin, setEmailInpotLogin] = useState();

  useEffect(() => {

    if (user) {
      axios.get(`http://localhost:5000/auth/app/${user.id}`)
        .then(response => {
          setBage(response.data.count);
          setArrMassge(response.data.body.filteredResults  )
        console.log("file: App.js:45  useEffect  response.data.body.filteredResults:", response.data.body.filteredResults)

        })
        .catch(error => {
          console.error(error);
          alert('Error');
        });
    }
    setIsLoggedIn(localStorage.token);

  }, []);
  // setTimeout(() => {
  //   if (user) {
  //     axios.get(`http://localhost:5000/auth/app/${user.id}`)
  //       .then(response => {
  //         setBage(response.data.count);
  //       })
  //       .catch(error => {
  //         console.error(error);
  //         alert('Error');
  //       });
  //   }
  // }, 1000);
  console.log(bage);
  const handleLogout = () => {
    localStorage.clear()
    setIsLoggedIn(false);
    setUser(null)
    window.location.href = "/"
  };

  const handleLogin = (res, poprs, email) => {
    console.log(poprs);
    setUser(poprs)
    setEmailInpotLogin(email)
    console.log(emailInpotLogin);
    if (res === true) setIsLoggedIn(true);

  };

  // const logIn = (res) => {
  //   setIsLoggedIn(res);
  // };



  // function App() {

  //   //   fetch("http://localhost:5000/",{"method"}).then((res) => res.text()).then((res) => {
  //   //     console.log(res);
  //   // })


  //   const [isLoggedIn, setIsloggedIn] = useState(false)
  //   const logIn = (res) => {
  //     setIsloggedIn(res);
  //     console.log(isLoggedIn);
  //   };

  const logOut = (res) => {
    // setIsloggedIn(res);
  };
  return (
    <div>
      <userContext.Provider
        value={{
          user,
          bage,
          setBage,
          isLoggedIn,
          ProfileKey,
          setProfileKey,
          // arrMassge
        }}
      >
        <BrowserRouter>
          <Navbars isLoggedIn={isLoggedIn} logOut={handleLogout} user={user} />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/login1" element={<Login logIn={logIn} />} ></Route> */}
            <Route path="/login" element={<SignIn handleLogin={handleLogin} />} />
            <Route path="/singUp" element={<SingUp />} />
            <Route path="/profile" element={<Protected isLoggedIn={isLoggedIn} >
              <Profile user={user} />

            </Protected>} />
            <Route path="/about" element={<About />} />
            <Route path="/carousel" element={< CarouselFadeExample />} />
            <Route path="/tabla" element={< Tabla />} />
            <Route path="/yomcol" element={<Yomcol />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/manager" element={<Manager user={user} />} />
            <Route path="/Messages" element={<Messages />} />
            <Route path="/Updates" element={<Updates />}>
    <Route path="UpdatesDisplay" element={<UpdatesDisplay />} />
    <Route path="UpdatesHistory" element={<UpdatesHistory />} /> 
    <Route path="MazelTov" element={<MazelTov />} />
  </Route>
            <Route path="/Donations" element={<Donations user={user} />} />
            <Route path="/newCode" element={<StickyFooter email={emailInpotLogin} />} />
            
          </Routes>
        </BrowserRouter>
      </userContext.Provider>
    </div>

  )
}

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   };

//   const handleLogin = (res) => {
//     if(res) setIsLoggedIn(true);
//   };

//   return (
//     <div>
//       <Navbars isLoggedIn={isLoggedIn} logOut={handleLogout} />
//       <Routes>
//       <Route exact path="/">
//         <Home isLoggedIn={isLoggedIn} />
//       </Route>
//       <Route path="/login">
//         <Login handleLogin={handleLogin} />
//       </Route>
//       <Route path="/profile">
//         <Profile isLoggedIn={isLoggedIn} />
//       </Route></Routes>
//     </div>
//   );
// }


export default App;
