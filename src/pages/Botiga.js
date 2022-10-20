import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import booklist from "../books.json";
import Book from "../components/Book";

const SecondContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100vw;
`;

export default function Botiga() {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");
  const locationKey = window.location.key;
  const [filteredBooks, setFilteredBooks] = useState([...booklist]);

  useEffect(() => {
    if (filter) {
      setFilteredBooks(
        booklist.filter((book) => {
          return (
            book.name.toLowerCase().includes(filter.toLowerCase()) ||
            book.collection[0].toLowerCase().includes(filter.toLowerCase()) ||
            book.description.toLowerCase().includes(filter.toLowerCase())
          );
        })
      );
    }
  }, [locationKey, filter]);

  return (
    <>
      {filter ? (
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
