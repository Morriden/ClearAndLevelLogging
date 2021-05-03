import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import {FaBars} from 'react-icons/fa'
import { menuData } from '../data/MenuData'
import { Button } from "./Button"

const HeaderTransparent = () => {
  return (
    <Nav >
      <PhoneMenu>
        <Bars />
        <NavLink to="/">Clear and Level Logging</NavLink>
      </PhoneMenu>
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

export default HeaderTransparent

const Nav = styled.nav`
  background: 'transparent'; //WE FOUND IT JESUS
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1500px) / 2);
  z-index: 100;
  position: relative;
  /* margin-right: 90px; */
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
/* width: 300px; */
border: red solid 3px;
`

const Bars = styled(FaBars)`
  /* position: absolute; */
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
    /* border: purple solid 3px; */
  }
`

const PhoneMenu = styled.div`
  @media screen and (max-width: 768px) {
    /* display: absolute; */
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    border: solid 3px purple;
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
