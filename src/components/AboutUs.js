import React from 'react'
import styled from 'styled-components'

const AboutUs = () => {
    return (
        <div>
            <AboutUsContainer>
                <AboutUsContent>
                    <AboutUsItems>
                    <h1>Our Story. Color changes? What would you like to see here? Pictures?</h1>
                    <p>Story about the company creation and what its been through? Can be put to one side so a picture of yall can be on the other side? Or the building etc.</p>
                    </AboutUsItems>
                </AboutUsContent>
            </AboutUsContainer>
        </div>
    )
}

export default AboutUs

const AboutUsContainer = styled.div`
background: #C0C0C0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 5rem;
    position: relative;
    margin-top: -80px;
    color: #fff;
    border: solid red 2px;

    :before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 2;
        background: linear-gradient(
            180deg, 
            rgba(0,0,0,0.2) 0%, 
            rgba(0,0,0,0.6) 100%
            ),
            linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%),
    }
`

const AboutUsContent = styled.div`
    z-index: 3;
    height: calc(100vh - 80px);
    max-height: 100%;
    padding: 0rem calc((100vw - 1300px) / 2);
`

const AboutUsItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    text-align: center;
    height: 80vh;
    max-height: 100%;
    margin-top: 80px;
    color: #fff;
    line-height: 1.1;
    font-weight: bold;
    border: solid 2px black;
`
