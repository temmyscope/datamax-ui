import React from "react";
import LeftSideBar from "../components/LeftSideBar";
import NavBar from "../components/NavBar";
import SeoHead from "../components/SeoHead";
import Main from "../components/Main";
import AdBar from "../components/AdBar";
import BottomBar from "../components/BottomBar";
//import Footer from "../components/Footer";

export default function Index() {

  return (
    <React.Fragment>
      
      <SeoHead siteTitle="Welcome" description="" />
      
      <NavBar />

      <main className="main">

        <LeftSideBar />

        <Main>
          first text
        </Main>

        <AdBar />
        
      </main>

      <BottomBar />

    </React.Fragment>
  );
}
