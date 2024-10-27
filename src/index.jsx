import React from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-0yzy0fm38bcyxh0o.us.auth0.com"
    clientId="fd1ojazhKh5z66nO9Av2YSHADvtFwjCw"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    
  >
    <App />
  </Auth0Provider>
);
