import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import booklist from "../books.json";
import Book from "../components/Book";

const SecondContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100vw;
`;

export default function Collection(p) {
  const { collection } = useParams();
  const collectionTitles = [
    "DUO Collection",
    "Illustrated History",
    "The Earth",
    "Drop Drown Book",
    "People's stories",
    "Eagle Eye",
    "In The Shoes Of",
    "Map Aventura",
    "Illustrated Tribute",
    "Uncovered",
    "The Secret Life",
    "Van Berhey",
    "Little Mosquito",
    "Around the World",
    "Art Reference",
    "Picture Books Serie",
  ];
  const [filteredBooks, setFilteredBooks] = useState([...booklist]);

  useEffect(() => {
    if (collection) {
      setFilteredBooks(
        booklist.filter((book) => {
          if (book.collection[1]) {
            return book.collection[1]
              .toLowerCase()
              .includes(collection.toLowerCase());
          } else {
            return book.collection[0]
              .toLowerCase()
              .includes(collection.toLowerCase());
          }
        })
      );
    }
  }, [collection]);

  return (
    <>
      <h1>
        {collectionTitles.filter((title) => {
          return title.toLowerCase().includes(collection.toLowerCase());
        })}
      </h1>
      {collection ? (
        filteredBooks.length !== 0 ? (
          <SecondContainer>
            {filteredBooks.map((book, i) => {
              return (
                <Book
                  key={i}
                  background="dark"
                  image={`/covers/${book.cover}.png`}
                  title={book.name}
                  collection={book.collection}
                  prize={book.prize}
                  link={`/llibres/${book.id}`}
                />
              );
            })}
          </SecondContainer>
        ) : (
          <SecondContainer>
            <p>No hem trobat cap coincidència</p>
          </SecondContainer>
        )
      ) : (
        <SecondContainer>
          {booklist.map((book, i) => {
            return (
              <Book
                key={i}
                background="dark"
                image={`/covers/${book.cover}.png`}
                title={book.name}
                collection={book.collection}
                link={`/llibres/${book.id}`}
              />
            );
          })}
        </SecondContainer>
      )}
    </>
  );
}
