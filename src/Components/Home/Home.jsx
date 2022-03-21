import axios from "axios";
import { useEffect, useState } from "react";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from 'styled-components';

export const Home = () => {
  const [books, setBooks] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8080/books").then((res) => {
      setBooks(res.data)
      console.log(res.data)
    })
  }, [])

  // get all books when user lands on the page
  // populate them as mentioned below

  const Main = styled.div`
   background : black;
   display: grid;
   width: 80%
   grid-template-columns: 300px 300px 300px
    
  `;

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={
          "give handleSort function to this component, that sorts books"
        }
      />

      <Main className="mainContainer">
        {books.map((elems) => {
          <div key={elems.id}>
            <p>Id :{elems.id}</p>
            <img src={elems.imageUrl} alt="" />
            <p>Title :{elems.title}</p>
            <p>Price :{elems.price}</p>
            <p>Description :{elems.description}</p>
          </div>
        })}

        {/*         
            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to 
            show in books Card. */}

      </Main>
    </div>
  );
};
