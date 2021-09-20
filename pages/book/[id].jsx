import React, { useEffect, useState } from "react";
import LeftSideBar from "../../components/LeftSideBar";
import NavBar from "../../components/NavBar";
import SeoHead from "../../components/SeoHead";
import Main from "../../components/Main";
import AdBar from "../../components/AdBar";
import BottomBar from "../../components/BottomBar";
import { Api } from "../api/book";
import { useRouter } from 'next/router'

const book = () => {

  const [states, setStates] = useState({book: [] });
  const router = useRouter()
  const { id } = router.query;

  const update = () => {

  }

  useEffect(async()=>{
    const book = await Api.get(`v1/books/${id}`);
    setStates({ book: book.data });
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

            <button className="button-update" onClick={() => update()}>
                Update Book
            </button>
        </Main>

        <AdBar />
        
      </main>

      <BottomBar />

    </React.Fragment>
  );
}

export default book;