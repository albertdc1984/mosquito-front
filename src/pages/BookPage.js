import { useParams } from "react-router-dom";
import styled from "styled-components";
import booklist from "../books.json";
import ProductDetail from "../components/ProductDetail";

const BookContainer = styled.div`
  position: relative;

  .quadrat-blau {
    height: 15px;
    width: 15px;
    background-color: #232c77;
  }
  .quadrat-taronja {
    height: 15px;
    width: 15px;
    background-color: #ff7200;
  }
  .orange {
    color: #ff7200;
  }
  .blue {
    color: #232c77;
  }
`;

export default function BookPage() {
  const { productId } = useParams();
  const thisBook = booklist.find((book) => book.id === productId);

  return (
    <>
      <BookContainer>
        <ProductDetail
          background="light"
          image={`/covers/${thisBook.cover}.png`}
          title={thisBook.name}
          collection={thisBook.collection}
          prize={thisBook.prize}
          description={thisBook.description}
          author={thisBook.author}
          artist={thisBook.artist}
          format={thisBook.format}
          isbn={thisBook.isbn}
          pages={thisBook.pages}
          themes={thisBook.themes.join(", ")}
        ></ProductDetail>
      </BookContainer>
    </>
  );
}
