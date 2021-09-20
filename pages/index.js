import React, { useEffect, useState } from "react";
import LeftSideBar from "../components/LeftSideBar";
import NavBar from "../components/NavBar";
import SeoHead from "../components/SeoHead";
import Main from "../components/Main";
import AdBar from "../components/AdBar";
import BottomBar from "../components/BottomBar";
import { Api } from "./api/book";

export default function Index() {

  const [books, setBooks] = useState([]);

  const remove = () => {

  }

  useEffect(async()=>{
    const books = await Api.get('external-books');
    console.log(books);
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

          <div className="flex justify-center flex- capitalize w-full font-bold">
          {
            (books.length === 0) ?
            <p>No books are currently available</p>
            :
            books.map((book, index) => (
              <div className="book-card">
                <div className="text-center space-y-2 sm:text-center">
                  <p className="text-lg text-black font-semibold">
                    {book.name}
                  </p>
                  <p className="text-gray-500 font-medium">
                    {book.authors.join(', ').trim()}
                  </p>
                </div>
                <button className="button-remove">
                  Remove
                </button>
                <Link>
                  <a href={`/book/{book.id}`} className="button-update">
                  Update
                  </a>
                </Link>
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
