import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import {Button} from './Button'

const services = ({ heading }) => {
    const data = useStaticQuery(graphql`
    query ServicesQuery {
        allServicesJson {
          edges {
            node {
              alt
              button
              title
              img {
                publicURL
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `)

    function getServices(data) {
        const servicesArray = []
        data.allServicesJson.edges.forEach((item, index) => {
            servicesArray.push(
                <ServicesCard key={index}>
                    <ServicesImg src={item.node.img.childImageSharp.fluid.src} 
                    fluid={item.node.img.childImageSharp.fluid}
                    />
                    <ServicesInfo>
                        <TextWrap>
                          <ServicesTitle>{item.node.title}</ServicesTitle>  
                        </TextWrap>
                        <Button to="#contactusPage" 
                            primary="true" 
                            round="true" 
                            css={`
                                position: absolute;
                                top: 420px;
                                font-size: 14px;
                            `}>
                            {item.node.button}
                        </Button>
                    </ServicesInfo>
                </ServicesCard>
            )
        })
        return servicesArray
    }

    return (
        <ServicesContainer id="servicesPage">
            <ServicesHeading>{heading}</ServicesHeading>
            <ServicesWrapper>{getServices(data)}</ServicesWrapper>
        </ServicesContainer>
    )
}

export default services

const ServicesContainer = styled.div`
    min-height: 100vh;
    min-width: 100%;
    padding: 5rem calc((100vw - 1800px) / 2);
    background-color: #C0C0C0;
`

const ServicesHeading = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
    color: #000;
`

const ServicesWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    grid-gap: 10px;
    justify-items: center;
    padding: 0 2rem;

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 868px) {
        grid-template-columns: 1fr;
    }
`

const ServicesCard = styled.div`
object-fit: contain;
    line-height: 2;
    width: 100%;
    height: 500px;
    position: relative;
    border-radius: 10px;
    transition: 0.2s ease;
`

const ServicesImg = styled(Img)`
    
    height: 100%;
    max-width: 100%;
    position: relative;
    border-radius: 10px;
    filter: brightness(70%);
    transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
        filter: brightness(100%);
    }
`

const ServicesInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 2rem;

    @media screen and (max-width: 280px) {
        padding: 0 1rem;
    }
`

const TextWrap = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 375px;
`

const ServicesTitle = styled.div`
    font-weight: 400;
    font-size: 1rem;
    margin-left: 0.5rem;
    color: #fff;
`

