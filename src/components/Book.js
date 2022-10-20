import { Link } from "react-router-dom";
import styled from "styled-components";

const LightBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 30%;
  margin: 40px 10px;
  background-color: #f0ece6;
  div {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  p {
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 80%;
    overflow: hidden;
    margin: 0;
  }
  a {
    width: 80%;
  }
  @media (max-width: 800px) {
    width: 45%;
    margin: 20px 10px;
  }
  @media (max-width: 400px) {
    width: 85%;
    margin: 20px 10px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
`;

export default function Book(props) {
  return (
    <>
      <LightBox>
        <div>
          <Link to={props.link}>
            <StyledImage src={props.image} alt={props.alt} />
          </Link>
        </div>
        <div>
          <p>{props.title}</p>
          <p>{props.collection[0]}</p>
        </div>
      </LightBox>
    </>
  );
}
