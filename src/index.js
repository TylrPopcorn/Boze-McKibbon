//dependencies
// npm install react
// npm install react-router-dom
// npm install --save-dev sass  <-- SCSS
// npm install concurrently --save-dev      <--allows running multiple scripts at once
// npm install bootstrap

//------------------------------------
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// How to start project ]:
// npm run start

// HOW TO CREATE REACT-APP ]:
// npx create-react-app {project-name}
//----    ----    ----

//styles:
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; //Bootstrap JS
//
import "./styles/global.css";

//components:
import Homepage from "./Functions/Homepage";

//--
import Redirect from "./Functions/Redirect";

//START:
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      {/* ROUTES */}
      <Route path="/" element={<Homepage />} />

      {/* ----- Catch all unknown pages ----- */}
      <Route path="*" element={<Redirect />} />
      {/*----------------------------*/}
    </Routes>
  </BrowserRouter>
);
