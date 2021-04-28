import * as React from "react"
import Hero from "../components/Hero"
import Services from "../components/Services"
import HeaderTransparent from "../components/HeaderTransparent"
import AboutUs from "../components/AboutUs"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Email from "../components/Email"

const IndexPage = () => (
  <Layout pageTitle="home">
    <HeaderTransparent />
    <Hero />
    <Services heading="Our Services"/>
    <Email />
  </Layout>
)

export default IndexPage
