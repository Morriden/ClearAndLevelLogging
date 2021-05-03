import React, { useState } from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { FaBars, FaTimes } from 'react-icons/fa'
import { menuData } from '../data/MenuData'
import { Button } from "./Button"

const HeaderTransparent = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <Nav >
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavLink to="/">Clear and Level Logging</NavLink>
      <NavMenu onClick={handleClick} click={click}>
        {menuData.map((item, index) => (
          <NavLink href={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavButton>
        <Button primary="true" round="true" href="#contactusPage">Contact Us</Button>
      </NavButton>
    </Nav>
  )
}

export default HeaderTransparent

const Nav = styled.nav`
  background: 'transparent';
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1500px) / 2);
  z-index: 100;
  position: relative;
`

const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-weight: bold;
font-size: 25px;
/* line-height: 1; */

@media screen and (max-width: 960px) {
  text-align: center;
  padding: 2rem;
  width: 100%;
  display: table;

  &:hover {
    color: #ff4040;
    transition: all 0.3s ease;
  }
}
`

const MobileIcon = styled.div`
  display: none;
  color: #fff;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.ul`
  display: flex;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: grid;
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end:2;
    flex-direction: column;
    width: 100%;
    height: 500px;
    position: absolute;
    top: ${({ click }) => (click ? "100%" : "-1000px") };
      opacity: 1;
      transition: all 0.2s ease;
      background-color: black;
  }
  
`

const NavButton = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: none;
  }
`
