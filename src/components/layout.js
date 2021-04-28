import * as React from "react"
import HeaderTransparent from "./HeaderTransparent"
import { GlobalStyle } from "./styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <>
    <GlobalStyle />
        <main>{children}</main>
    </>
  )
}

export default Layout
