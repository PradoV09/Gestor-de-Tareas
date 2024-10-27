// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importa BrowserRouter
import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from "./components/Login";
import Menu from "./components/Menu"; // Importa tu componente de menú

const App = () => {
  return (
    <Auth0Provider
      domain="dev-0yzy0fm38bcyxh0o.us.auth0.com"
      clientId="fd1ojazhKh5z66nO9Av2YSHADvtFwjCw"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Router>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<LoginButton />} />
            <Route path="/Menu/*" element={<Menu />} />
          </Routes>
        </div>
      </Router>
    </Auth0Provider>
  );
};

export default App;
