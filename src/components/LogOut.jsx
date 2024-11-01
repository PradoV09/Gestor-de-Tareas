import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./styles/LogOut.css"

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      CERRAR SECCION
    </button>
  );
};

export default LogoutButton;
