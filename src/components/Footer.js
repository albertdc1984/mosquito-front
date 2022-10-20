import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import mLogo from "../img/Logo Icon - Negativo.svg";

const StyledFooter = styled.footer`
  bottom: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e4f1ee;
  .logo-icon {
    margin: 20px;
  }
  .social-icons {
    margin: 20px 0 0 20px;
    font-size: 30px;
  }
`;
const ListsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;
`;
const LinkLists = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  div {
    margin-right: 50px;
  }
  p {
    margin: 25px 0 25px 0;
  }
`;
const ColleccionsDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
const StyledUl = styled.ul`
  list-style: none;
  margin: 0 25px 0 0;
  padding: 0;

  li {
    margin: 0 20px 20px 0;
  }
  a {
    text-decoration: none;
    color: black;
    font-style: normal;
    font-weight: 600;
  }
`;
const FooterLast = styled.div`
  width: 95%;

  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-style: solid;
  border-color: black;
  border-width: 1px 0 0 0;
  margin: 50px 0 25px 0;
  a {
    text-decoration: none;
    color: black;
    margin-left: 15px;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <ListsContainer>
        <div>
          <img src={mLogo} alt="Mosquito Books Logo" className="logo-icon" />
        </div>

        <LinkLists>
          <div>
            <p>Mosquito Books BCN</p>
            <StyledUl>
              <li>
                <Link to="/editorial">Editorial</Link>
              </li>
              <li>
                <Link to="/botiga">Botiga</Link>
              </li>
              <li>
                <Link to="/distribucio">Distribució</Link>
              </li>
              <li>
                <Link to="/contacte">Contacte</Link>
              </li>
            </StyledUl>
          </div>
          <div>
            <p>Descàrregues</p>
            <StyledUl>
              <li>
                <Link to="/premsa">Kit de premsa [↓]</Link>
              </li>
              <li>
                <Link to="/cataleg">Catàleg[↓]</Link>
              </li>
            </StyledUl>
          </div>

          <div>
            <p>Col·leccions</p>
            <ColleccionsDiv>
              <StyledUl>
                <li>
                  <Link to="/colleccio/duo">DUO Collection</Link>
                </li>
                <li>
                  <Link to="/colleccio/history">Illustrated History</Link>
                </li>
                <li>
                  <Link to="/colleccio/earth">The Earth</Link>
                </li>
                <li>
                  <Link to="/colleccio/drop">Drop Drown Book</Link>
                </li>
                <li>
                  <Link to="/colleccio/people">People's stories</Link>
                </li>
                <li>
                  <Link to="/colleccio/eagle">Eagle Eye</Link>
                </li>
                <li>
                  <Link to="/colleccio/shoes">In The Shoes Of</Link>
                </li>
                <li>
                  <Link to="/colleccio/map">Map Aventura</Link>
                </li>
              </StyledUl>
              <StyledUl>
                <li>
                  <Link to="/colleccio/tribute">Illustrated Tribute</Link>
                </li>
                <li>
                  <Link to="/colleccio/uncovered">Uncovered</Link>
                </li>
                <li>
                  <Link to="/colleccio/secret">The Secret Life</Link>
                </li>
                <li>
                  <Link to="/colleccio/berhey">Van Berhey</Link>
                </li>
                <li>
                  <Link to="/colleccio/little">Little Mosquito</Link>
                </li>
                <li>
                  <Link to="/colleccio/around">Around the World</Link>
                </li>
                <li>
                  <Link to="/colleccio/reference">Art Reference</Link>
                </li>
                <li>
                  <Link to="/colleccio/picture">Picture Books Serie</Link>
                </li>
              </StyledUl>
            </ColleccionsDiv>
          </div>
        </LinkLists>
        <div>
          <FontAwesomeIcon
            icon={brands("instagram")}
            className="social-icons"
          />
          <FontAwesomeIcon icon={brands("linkedin")} className="social-icons" />
        </div>
      </ListsContainer>
      <FooterLast>
        <div>Mosquito © 2022</div>
        <div>
          <Link to="/termes-i-condicions">Termes i condicions</Link>
          <Link to="/privacitat">Política de privacitat</Link>
          <Link to="avis-legal">Avís legal</Link>
        </div>
      </FooterLast>
    </StyledFooter>
  );
}
