import React, {useState, useEffect} from 'react'
import { FaBars, Fatimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"


const Navbar = () => {
    const [click, setClick] = useState|(false)
    const [scroll, setscroll] = useState|(false)

    const handleClick = () => setClick(!click)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setscroll(true)
        } else {
            setscroll(false)
        }
    }

    useEffect(() => {
        changeNav()
        window.addEventListener("scroll", changeNav)
    }, [])

    return (
        <>
            <IconContext.Provider value={{ color: "#141414" }}>
                <Nav active={scroll} click={click}>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon />
                            Explorer
                        </NavLogo>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar