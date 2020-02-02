import React from "react";
import { useHistory } from "react-router-dom";
import Trips from "../../components/Trips";
import Copyright from "../../components/Copyright";
import { LayoutFull } from "../../components/Layout";

export default function NavTabs() {
  const history = useHistory();

  return (
    <LayoutFull>
      <Trips />
      <button
        onClick={() => {
          history.push("/login");
        }}
      >
        Logout
      </button>
      <Copyright />
    </LayoutFull>
  );
}
