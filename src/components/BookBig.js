import { Link } from "react-router-dom";
import styled from "styled-components";

const DarkBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  background-color: #dacebe;
  @media (max-width: 850px) {
    width: 100%;
  }
`;
const LightBox = styled.div`
  background-color: #f0ece6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
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

export default function BookBig(props) {
  const background = props.background;
  return (
    <>
      {background === "dark" ? (
        <DarkBox>
          <Link to={props.link}>
            <StyledDiv>
              <StyledImage src={props.image} alt={props.alt} />
            </StyledDiv>
          </Link>
          <div>
            <p>{props.title}</p>
            <p>{props.collection[0]}</p>
          </div>
        </DarkBox>
      ) : (
        <LightBox>
          <Link to={props.link}>
            <StyledDiv>
              <StyledImage src={props.image} alt={props.alt} />
            </StyledDiv>
          </Link>
          <div>
            <p>{props.title}</p>
            <p>{props.collection[0]}</p>
          </div>
        </LightBox>
      )}
    </>
  );
}
