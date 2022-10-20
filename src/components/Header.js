import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import styled from "styled-components";
import logo from "../img/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
const StyledDivTwo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  svg {
    margin: 10px;
  }
  .shopping-cart-container {
    display: flex;
    align-items: center;
  }
  .shopping-cart {
    color: #bcdcd5;
  }
  .items-counter {
    color: #5fab9a;
  }
  .icon-container {
    cursor: pointer;
  }
`;
const StyledImg = styled.img`
  display: block;
  width: auto;
  height: auto;
`;
const StyledStyledListItemst = styled.ul`
  width: 30vw;
  display: flex;
  flex-direction: row;
  list-style: none;
`;
const StyledListItem = styled.li`
  margin: 5px;
  a {
    color: #8e8f8e;
    text-decoration: none;
  }
`;
const SearchContainer = styled.div`
  display: none;

  input {
    border-radius: 30px;
  }
`;

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const searchDisplay = () => {
    if (!showSearch) {
      setShowSearch(true);
    } else {
      setShowSearch(false);
    }
  };
  const navigate = useNavigate();
  const queryRef = useRef(null);

  const goSearch = (e) => {
    e.preventDefault();
    navigate(`/botiga?filter=${queryRef.current.value}`);
    setSearchActive(true);
  };

  return (
    <StyledHeader>
      <StyledDiv>
        <Link to="/index">
          <StyledImg src={logo} alt="Mosquito Books Barcelona" />
        </Link>
        <StyledStyledListItemst>
          <StyledListItem>
            <Link to="/botiga">Botiga</Link>
          </StyledListItem>
          <StyledListItem>
            <Link to="/editorial">Editorial</Link>
          </StyledListItem>
          <StyledListItem>
            <Link to="/contacte">Contacte</Link>
          </StyledListItem>
        </StyledStyledListItemst>
      </StyledDiv>
      <StyledDivTwo>
        <SearchContainer style={{ display: showSearch ? "block" : "none" }}>
          <input
            className="search-input"
            onChange={goSearch}
            type="text"
            ref={queryRef}
          ></input>
        </SearchContainer>
        {!searchActive ? (
          <div className="icon-container" onClick={searchDisplay}>
            <FontAwesomeIcon icon={solid("magnifying-glass")} />
          </div>
        ) : (
          <div className="icon-container">
            <FontAwesomeIcon icon={solid("magnifying-glass")} />
          </div>
        )}

        <div className="shopping-cart-container">
          <FontAwesomeIcon
            icon={solid("shopping-cart")}
            className="shopping-cart"
          />

          <span className="items-counter">(0)</span>
        </div>
      </StyledDivTwo>
    </StyledHeader>
  );
}
