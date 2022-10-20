import styled from "styled-components";
import BookBig from "../components/BookBig";
import booklist from "../books.json";
import Book from "../components/Book";

const FirstContainer = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: row;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`;
const SecondContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100vw;
`;

export default function Index() {
  const mainBooks = booklist.filter((book) => book.isMain);
  const regularBooks = booklist.filter((book) => !book.isMain);

  return (
    <>
      <FirstContainer>
        <BookBig
          background="light"
          image={`/covers/${mainBooks[0].cover}.png`}
          title={mainBooks[0].name}
          collection={mainBooks[0].collection}
          link={`/llibres/${mainBooks[0].id}`}
        ></BookBig>
        <BookBig
          background="dark"
          image={`/covers/${mainBooks[1].cover}.png`}
          title={mainBooks[1].name}
          collection={mainBooks[1].collection}
          link={`/llibres/${mainBooks[1].id}`}
        ></BookBig>
      </FirstContainer>
      <SecondContainer>
        {regularBooks.map((book, i) => {
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
    </>
  );
}
