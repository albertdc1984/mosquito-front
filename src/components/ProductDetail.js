import { useState } from "react";
import styled from "styled-components";

const ElementContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const LightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45vw;
  background-color: #faf9f8;
  @media (max-width: 850px) {
    width: 100%;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledImage = styled.img`
  margin-top: 20px;
  width: 80%;
`;
const PersonalizingBox = styled.div`
  display: none;
`;
const StyledP = styled.p`
  position: absolute;
  top: 100px;
  left: 200px;
  color: #232c77;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: larger;
`;
const StyledPSub = styled.p`
  position: absolute;
  top: 150px;
  left: 200px;
  color: #232c77;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: small;
`;
const StyledPTwo = styled.p`
  position: absolute;
  top: 100px;
  left: 200px;
  color: #232c77;
  font-family: "Courier New", Courier, monospace;
  font-size: larger;
`;
const StyledPSubTwo = styled.p`
  position: absolute;
  top: 150px;
  left: 200px;
  color: #232c77;
  font-family: "Courier New", Courier, monospace;
  font-size: small;
`;
const DetailsBox = styled.div`
  width: 45vw;
  h1,
  .description-text {
    width: 60%;
    padding-bottom: 20px;
    border-style: solid;
    border-width: 0 0 1px 0;
    border-color: #d6d7d6;
  }
`;
const AddToCartBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const AddButton = styled.button`
  font-family: inherit;
  width: 45%;
  margin-right: 15px;
  color: white;
  padding: 10px;
  background-color: #5fab9a;
  border-style: none;
  border-radius: 6px;
`;
const AuthorsBox = styled.div`
  display: flex;
  flex-direction: row;
`;
export default function ProductDetail(props) {
  const [bookName, setBookName] = useState();
  const [secondLine, setSecondLine] = useState();
  const [fontSelect, setFontSlect] = useState("1");
  const [fontColor, setFontColor] = useState("blue");

  const handleChange = (e) => {
    setFontSlect(e.target.value);
  };
  const handleColor = (e) => {
    setFontColor(e.target.value);
  };
  return (
    <ElementContainer>
      <LightBox>
        <StyledDiv>
          <StyledImage src={props.image} alt={props.alt} />
        </StyledDiv>
        <div>
          <p>{props.collection}</p>
        </div>
      </LightBox>
      <DetailsBox>
        <h1>{props.title}</h1>
        <PersonalizingBox>
          <fieldset className="font-color-form" onChange={handleColor}>
            <legend>Tria el color de la font</legend>
            <select className="font-select" onChange={handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            <div>
              <input
                type="radio"
                id="font-blue"
                name="font-color"
                value="blue"
              />
              <label htmlFor="font-blue">
                <div className="quadrat-blau"></div>
              </label>

              <input
                type="radio"
                id="font-orange"
                name="font-color"
                value="orange"
              />
              <label htmlFor="font-orange">
                <div className="quadrat-taronja"></div>
              </label>
            </div>
            <div>
              <input
                type="text"
                name="book-name"
                className="book-name"
                onChange={(e) => setBookName(e.target.value)}
              />
              <input
                type="text"
                name="book-name"
                className="book-name"
                onChange={(e) => setSecondLine(e.target.value)}
              />
            </div>
          </fieldset>

          {fontSelect === "1" ? (
            <>
              <StyledP className={`editable-text ${fontColor}`}>
                {bookName}
              </StyledP>
              <StyledPSub className={`editable-text ${fontColor}`}>
                {secondLine}
              </StyledPSub>
            </>
          ) : (
            <>
              <StyledPTwo className={`editable-text ${fontColor}`}>
                {bookName}
              </StyledPTwo>
              <StyledPSubTwo className={`editable-text ${fontColor}`}>
                {secondLine}
              </StyledPSubTwo>
            </>
          )}
        </PersonalizingBox>
        <AddToCartBox>
          <AddButton>Afegir al carro</AddButton>
          <p>{props.prize}€</p>
        </AddToCartBox>
        <p className="description-text">{props.description}</p>{" "}
        <AuthorsBox>
          <div>
            <p>Autor i Il·lustrador/a</p>
            <p>Autor: {props.author}</p>
            <p>Il·lustrador/a: {props.artist}</p>
          </div>
          <div>
            <p>Detalls</p>
            <p>Format: {props.format}</p>
            <p>Pàgines: {props.pages}</p>
            <p>ISBN: {props.isbn}</p>
            <p>Temes: {props.themes}</p>
          </div>
        </AuthorsBox>
      </DetailsBox>
    </ElementContainer>
  );
}
