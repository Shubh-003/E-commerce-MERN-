import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import {Service} from "./pages/Service";
import {Login} from "./pages/Login";
import {Error} from "./pages/Error";
import {Registration} from "./pages/Registration";
import { Navbar} from "./components/Navbar";
import { Footer} from "./components/Footer";
import { Analytics} from "./components/Analytics";
import { Logout } from "./pages/Logout";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar />      {/* do it like this  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/service" element={<Service />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
};

export default App;


// 1. dedine route in app
// 2. create page ex about export it
// 3. import it into app ex.import { About } from "./pages/About";`

//component is that used everywhere we passed it as refrence


//NavLink to redirect page on click



// <Browser router> - stored the current location at browser bar url
// inside it we have routes




// ---------------------TERMINAL 1------------------------------------
//  To Run : > cd client
//           > npm run dev

// OPEN mongodbCompass: connect db : mongodbCompass

// THEN TO RUN SERVER AND CONNECT DB 
// --------------------- TERMINAL 2 ------------------------------------
// > CD MERN > node server.js
// DB connected