import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
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
                <ServicesCard key={index} item={item}>
                    <ServicesInfo>
                        <TextWrap>
                          <ServicesTitle>{item.node.title}</ServicesTitle>  
                        </TextWrap>
                        <Button to="#contactusPage" 
                            primary="true" 
                            round="true" 
                            css={`
                                border: solid 3px black;
                                background-color: silver;
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
    /* padding: 5rem calc((100vw - 1800px) / 2); */
    padding: 1.5rem;
    background-color: #acacac;
`

const ServicesHeading = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    text-decoration: underline;
    margin-bottom: 5rem;
    color: #100c08;
`

const ServicesWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    grid-gap: 20px;
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
    line-height: 2;
    width: 100%;
    height: 375px;
    position: relative;
    border-radius: 10px;
    transition: 0.2s ease;
    background-image: url(${props => props.item.node.img.childImageSharp.fluid.src});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    filter: brightness(85%);
    border-radius: 10px;
    transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
        filter: brightness(100%);
    }
`

const ServicesInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    height: 100%;

    @media screen and (max-width: 280px) {
        padding: 0 1rem;
    }
`

const TextWrap = styled.div`
    display: flex;
    align-items: center;
`
const ServicesTitle = styled.div`
    font-weight: 400;
    font-size: 1rem;
    width: 100%;
    padding: 3px;
    background-color: silver;
    border: solid black 3px;
    border-radius: 10px;
    color: black;
`
