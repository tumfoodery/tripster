import React from "react";
import { useHistory } from "react-router-dom";
import Trips from "../../components/Trips";
import Copyright from "../../components/Copyright";
import { LayoutFull } from "../../components/Layout";
import Button from "../../components/Button";

export default function NavTabs() {
  const history = useHistory();

  return (
    <LayoutFull>
      <Trips />
      <Button
        onClick={() => {
          history.push("/login");
        }}
      >
        Logout
      </Button>
      <Copyright />
    </LayoutFull>
  );
}
