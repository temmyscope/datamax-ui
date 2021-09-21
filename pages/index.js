import React, { useEffect, useState } from "react";
import LeftSideBar from "../components/LeftSideBar";
import NavBar from "../components/NavBar";
import SeoHead from "../components/SeoHead";
import Main from "../components/Main";
import AdBar from "../components/AdBar";
import BottomBar from "../components/BottomBar";
import { Api } from "./api/book";
import Link from "next/link";

export default function Index() {

  const [books, setBooks] = useState([]);
  const [exemptedIndex, setIndex] = useState([]);
  const [loading, setLoading] = useState(false);

  const remove = (index) => {
    setLoading(true);
    setIndex([...exemptedIndex, index]);
    setLoading(false);
  }

  useEffect(async()=>{
    const books = await Api.get('external-books');
    setBooks(books.data);
  }, []);

  return (
    <React.Fragment>
      
      <SeoHead siteTitle="Welcome" description="" />
      
      <NavBar />

      <main className="main">

        <LeftSideBar />

        <Main>
          <div className="flex justify-center flex- capitalize w-full font-bold">
            List Of Ten Books
          </div>

          <hr className="w-full bg-black m-4" />

          <div className="flex justify-center flex-col items-center">
          {
            (books.length === 0) ?
            <p>No books are currently available</p>
            :
            books.map((book, index) => (
              exemptedIndex.includes(index)?
              <></> :
              <div className="card-book m-2 w-2/3" key={index}>
                <p className="text-lg text-black font-semibold">
                  {book.name}
                </p>
                <p className="text-gray-500 font-medium">
                  {book.authors.join(', ').trim()}
                </p>
                <div className="flex justify-evenly w-full">
                  {(loading === false)?
                  <button className="remove-button" onClick={(e) => remove(index)}>
                    Remove
                  </button>
                  :
                  <span>loading...</span>
                  }
                  <Link href={`/book?name=${book.name}`}>
                    <a className="update-button">
                    Update
                    </a>
                  </Link>
                </div>
              </div>
            ))
          }
          </div>
        </Main>

        <AdBar />
        
      </main>

      <BottomBar />

    </React.Fragment>
  );
}
