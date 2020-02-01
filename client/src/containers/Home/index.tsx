import React from "react";
import { useHistory } from "react-router-dom";
import Trips from "../../components/Trips";
import Copyright from "../../components/Copyright";

export default function NavTabs() {
  const history = useHistory();

  return (
    <>
      <Trips />
      <button
        onClick={() => {
          history.push("/login");
        }}
      >
        Logout
      </button>
      <Copyright />
    </>
  );
}
