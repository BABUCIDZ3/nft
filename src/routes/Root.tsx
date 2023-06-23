import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./header&footer/Header";
import Footer from "./header&footer/Footer"; 
export default function Root() {
  const [showUl, setShowUl] = useState(false);
  return (
    <>
      {showUl == true ? (
        <Header showUl={showUl} setShowUl={setShowUl} />
      ) : (
        <>
          <Header showUl={showUl} setShowUl={setShowUl} />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
}
