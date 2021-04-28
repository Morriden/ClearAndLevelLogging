import * as React from "react"
import AboutUs from "../components/AboutUs"
import HeaderNotTransparent from "../components/HeaderNotTransparent"
import Layout from "../components/layout"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

// import Layout from "../components/layout"

const AboutUsPage = () => (
  <Layout pageTitle="aboutus">
    <HeaderNotTransparent />
    <AboutUs />
  </Layout>
)

export default AboutUsPage
