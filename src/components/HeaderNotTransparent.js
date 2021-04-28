import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import {FaBars} from 'react-icons/fa'
import { menuData } from '../data/MenuData'
import { Button } from "./Button"

const HeaderNotTransparent = () => {
  return (
    <Nav >
      <Bars />
      <NavLink to="/">Clear and Level Logging Inc.</NavLink>
      <NavMenu>
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

export default HeaderNotTransparent

const Nav = styled.nav`
  background: silver; //WE FOUND IT JESUS
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1500px) / 2);
  z-index: 100;
  position: relative;
  margin-right: 90px;
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
`

const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavButton = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
