import styled from "styled-components";
import editorial from "../img/editorial.png";
import group from "../img/Group.png";
import vector1 from "../img/Vector-1.png";
import vector2 from "../img/Vector-2.png";

const PageContainer = styled.div`
  width: 100vw;
`;
const HeaderContainer = styled.div`
  position: relative;
`;
const StyledImage = styled.img`
  width: 100vw;
`;
const StyledHeading = styled.h1`
  position: absolute;
  color: white;
  top: 20%;
  left: 10%;
`;
const MidContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const EditorialList = styled.ul`
  list-style: none;
  width: 40vw;
`;
const Premis = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #f0ebe5;
  width: 400px;
  margin-top: 20px;
  border-radius: 8px;
`;
const PremiLogo = styled.img`
  padding: 15px;
`;
const FinalContainer = styled.div`
  background-color: #f0ebe5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CommentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  div {
    width: 20%;
    border-style: solid;
    border-width: 0 0 1px 0;
    border-color: black;
    padding-bottom: 20px;
  }
  p {
    font-weight: 900;
    margin-bottom: 0;
  }
  span {
    width: 100%;
    margin: 0;
    padding: 0;
    color: #8e8f8e;
    font-size: 10px;
  }
`;
const DownloadPressKit = styled.a`
  color: white;
  text-decoration: none;
  background-color: #5eab99;
  border-radius: 8px;
  padding: 10px;
  margin: 20px;
  cursor: pointer;
`;
export default function Editorial() {
  return (
    <>
      <PageContainer>
        <HeaderContainer>
          <StyledImage src={editorial} alt="Editorial" />
          <StyledHeading>
            We're a small publishing house
            <br />
            based in Barcelona
          </StyledHeading>
        </HeaderContainer>
        <MidContainer>
          <EditorialList>
            <li>
              <h2>Qui som?</h2>
              <p>
                Headquartered in the heart of Asia, victionary connects creative
                talents and enthusiasts from all over the world through strong
                original concepts, intriguing graphic approaches, and innovative
                printing techniques.
              </p>
              <p>
                Today, we are all about providing fresh perspectives, timeless
                inspiration, and pure visual delight for the creative and the
                curious through the mighty power of print.
              </p>
              <p></p>
            </li>
            <li>
              <h2>D'on venim?</h2>
              <p>
                Founded by Victor Cheung in 2001, viction workshop ltd. began as
                a passion project that focused on producing design publications
                and has since expanded its portfolio to include a broader array
                of themed collections, art prints, travel guides, children’s
                books and games under two additional brands, VICTION-VICTION and
                CITIx60.
              </p>
            </li>
            <li>
              <h2>Què hem creat?</h2>
              <p>
                In shining the brightest light possible on the projects featured
                in our books and the people behind them, we believe that no
                detail is too small, and that our search for new printing
                techniques, materials, and applications is a calling we will
                always aspire to answer.
              </p>
              <p>
                Per col·laboracions, contacta amb
                <a href="mailto:colabs@mosquito.com"> colabs@mosquito.com</a>
              </p>
            </li>
          </EditorialList>
          <EditorialList>
            <h2>Premis</h2>
            <Premis>
              <PremiLogo src={group} />
              <p>WORLD ILLUSTRATION AWARDS 2020</p>
            </Premis>
            <Premis>
              <PremiLogo src={vector1} />
              <p>AWARS OF EXCELLENCE 2022</p>
            </Premis>
            <Premis>
              <PremiLogo src={vector2} />
              <p>BEST CHILDRENS BOOK ABOUT ECOLOGY 2021</p>
            </Premis>
          </EditorialList>
        </MidContainer>
        <FinalContainer>
          <h2>Què diuen de nosaltres?</h2>
          <CommentsContainer>
            <div>
              <p>"Nace Mosquito Books, nueva editorial de álbum ilustrado”</p>
              <span>El Periodico 2016</span>
            </div>
            <div>
              <p>
                "Los libros que te echan una mano: cuentos para explicar
                sencillo cosas complejas a tus nietos”
              </p>
              <span>El Periodico 2016</span>
            </div>
            <div>
              <p>"Nace Mosquito Books, nueva editorial de álbum ilustrado”</p>
              <span>El Periodico 2016</span>
            </div>
          </CommentsContainer>
          <DownloadPressKit to="#">
            Descarrega el nostre Press-kit
          </DownloadPressKit>
        </FinalContainer>
      </PageContainer>
    </>
  );
}
