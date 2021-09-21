import React, { useEffect, useState } from "react";
import LeftSideBar from "../components/LeftSideBar";
import NavBar from "../components/NavBar";
import SeoHead from "../components/SeoHead";
import Main from "../components/Main";
import AdBar from "../components/AdBar";
import BottomBar from "../components/BottomBar";
import { Api } from "./api/book";
import { useRouter } from 'next/router'

const book = () => {

  const router = useRouter()
  const { name } = router.query;
  const [states, setStates] = useState({
    name: name, isbn: '', publisher: '', release_date: '', number_of_pages: '',
    authors: [], country: ''
  });

  const update = () => {

  }

  useEffect(async()=>{
    const book = await Api.get(`external-books?name=${name}`);
    setStates({ ...book.data[0] });
  }, [name]);

  return (
    <React.Fragment>
      
      <SeoHead siteTitle="Welcome" description="" />
      
      <NavBar />

      <main className="main">

        <LeftSideBar />

        <Main>
            <div className="flex justify-center items-center flex-col shadow w-full m-5">
            <input 
                className="input" value={states.name} type="text" 
              onChange={(e) => setStates({...states, name: e.target.value})} 
            />
            <input 
                className="input" value={states.isbn} type="text" 
              onChange={(e) => setStates({...states, isbn: e.target.value})} 
            />
            <input
                className="input" value={states.number_of_pages} type="text" 
              onChange={(e) => setStates({...states, number_of_pages: e.target.value})} 
            />
            <input
                className="input" value={states.publisher} type="text" 
              onChange={(e) => setStates({...states, publisher: e.target.value})} 
            />
            <input
                className="input" value={states.country} type="text" 
              onChange={(e) => setStates({...states, country: e.target.value})} 
            />
            <input
                className="input" value={states.release_date} type="text" 
              onChange={(e) => setStates({...states, release_date: e.target.value})} 
            />
            <button className="update-button m-5" onClick={() => update()}>
                Update Book
            </button>
            </div>
        </Main>

        <AdBar />
        
      </main>

      <BottomBar />

    </React.Fragment>
  );
}

export default book;