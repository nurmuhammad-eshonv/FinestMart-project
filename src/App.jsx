// import React from "react";
// import Navbar from "./components/navbar/Navbar";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/home/Home";
// import Account from "./pages/account/Account";
// import Likes from "./pages/likes/Likes";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// function App() {
//   const [token, setToken] = useState("")
//   useEffect(() => {
//     if(localStorage.getItem("token")){
//       setToken(localStorage.getItem("token"))
//     }
//   }, []);
//   const navigate = useNavigate();
//   function ProtectedRoute({ isAuthenticated, children }) {
//     if (!isAuthenticated) {
//       navigate("/login");
//     }
//     return children;
//   }
//   return (
//     <div className="containerr">
//       <Navbar />

//       <Routes>
//         <Route path="/login" element={<Login />}></Route>
//         <Route path="/register" element={<Register />}></Route>
//         <Route
//           path="/"
//           element={
//             <ProtectedRoute isAuthenticated={true}>
//               <Home />
//             </ProtectedRoute>
//           }
//         />
//         <Route path="/" element={<Home />} />
//         <Route path="/account" element={<Account />} />
//         <Route path="/likes" element={<Likes />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Account from "./pages/account/Account";
import Likes from "./pages/likes/Likes";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isAuth, setIsAuth] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
      if (!location.pathname.includes("register")) {
        navigate("/login");
      }
    }
  }, [token, location.pathname]);

  // Determine if Navbar should be visible
  const showNavbar = location.pathname === "/" || location.pathname === "/account" || location.pathname === "/likes";

  return (
    <div className="containerr">
      {isAuth && showNavbar && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {isAuth ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="/likes" element={<Likes />} />
          </>
        ) : (
          <Route path="/" element={<Login />} /> 
        )}
      </Routes>
    </div>
  );
}

export default App;
