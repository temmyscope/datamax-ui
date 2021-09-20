import React, { useEffect, useState } from "react";
import LeftSideBar from "../../components/LeftSideBar";
import NavBar from "../../components/NavBar";
import SeoHead from "../components/SeoHead";
import Main from "../../components/Main";
import AdBar from "../../components/AdBar";
import BottomBar from "../../components/BottomBar";
import { Api } from "./api/book";

const book = () => {

  const [states, setStates] = useState({search: "", books: [] });

  const update = () => {

  }

  useEffect(async()=>{
    const books = await Api.get('https://datamax-api.herokuapp.com/api/');
    setStates({ books: books });
  }, []);

  return (
    <React.Fragment>
      
      <SeoHead siteTitle="Welcome" description="" />
      
      <NavBar />

      <main className="main">

        <LeftSideBar />

        <Main>
          <div>
            <input className="" value={states.search} 
              onChange={(e) => setStates({...states, search: e.target.value})} 
            />
          </div>
        </Main>

        <AdBar />
        
      </main>

      <BottomBar />

    </React.Fragment>
  );
}

export { book }