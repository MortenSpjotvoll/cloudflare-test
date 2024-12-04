import React from "react";
import Top from "../views/home/Top";
import Values from "../views/home/Values";
import withRoot from "../withRoot";
import Biography from "../views/home/Biography";
import Footer from "../views/Footer";

function Index() {
  return (
    <React.Fragment>
      <Top />
      <Values />
      <Biography />
      <Footer />
    </React.Fragment>
  );
}

export default withRoot(Index);
