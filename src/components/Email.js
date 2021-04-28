import React from 'react'
import styled from 'styled-components'
import EmailBg from '../assets/images/email1.jpg'
import { Button } from "./Button"

const Email = () => {
    return (
        <EmailContainer id="contactusPage">
            <EmailContent>
        <form action="#">
        <h1>Contact Dave (What should go here?)</h1>
            <FormWrapContactInfo>
                <label htmlFor="fullname"></label>
                    <input type="text" placeholder="Full Name"id="fullname" />
                <label htmlFor="phonenumber"></label>
                    <input type="number" placeholder="Phone Number" id="phonenumber" />
                    </FormWrapContactInfo>
                    <FormWrapEmailInfo>
                <label htmlFor="email"></label>
                    <input type="email" placeholder="Email Address" id="email" />
                <label htmlFor="subject"></label>
                    <input type="text" placeholder="Subject" id="subject" />
                
                <label htmlFor="message"></label>
                    <textarea type="text" id="message" placeholder="Message" className="message"/>
                    </FormWrapEmailInfo>
                
                <Button as="button" type="submit" primary="true" round="true" css={`
                height: 48px; 
                @media screen and (max-width: 768px) {
                    width: 100%;
                    min-width: 350px;
                }
                @media screen and (max-width: 400px) {
                    width: 100%;
                    min-width: 250px;
                }
                `}>
                    Contact Us
                </Button>
            
        </form>
        <form>
        <h1>Contact Willene(what should go here?)</h1>
        <FormWrapContactInfo>
                <label htmlFor="fullname"></label>
                    <input type="text" placeholder="Full Name"id="fullname" />
                <label htmlFor="phonenumber"></label>
                    <input type="number" placeholder="Phone Number" id="phonenumber" />
                    </FormWrapContactInfo>
                    <FormWrapEmailInfo>
                <label htmlFor="email"></label>
                    <input type="email" placeholder="Email Address" id="email" />
                <label htmlFor="subject"></label>
                    <input type="text" placeholder="Subject" id="subject" />
                
                <label htmlFor="message"></label>
                    <textarea type="text" id="message" placeholder="Message" className="message"/>
                    </FormWrapEmailInfo>
                
                <Button as="button" type="submit" primary="true" round="true" css={`
                height: 48px; 
                @media screen and (max-width: 768px) {
                    width: 100%;
                    min-width: 350px;
                }
                @media screen and (max-width: 400px) {
                    width: 100%;
                    min-width: 250px;
                }
                `}>
                    Contact Us
                </Button>
        </form>
        </EmailContent>
        </EmailContainer>
    )
}

export default Email

const EmailContainer = styled.div`
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.5) 35%,
        rgba(0, 0, 0, 0.1) 100%
        ),
        url(${EmailBg}) no-repeat center;
        background-size: cover;
        height: 900px;
        width: 100%;
        padding: 5rem calc((100vw - 1300px) / 2);
        color: rgb(206, 212, 221);
        display: flex;
        justify-content: center;
        align-items: center;

        @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 0 1rem;
        height: 100%;
    }
`

const EmailContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    h1 {
        text-align: center;
        margin-bottom: 1rem;
        font-size: clamp(1rem, 5vw, 1.5rem);
        padding: 0 1rem;
    }

    p {
        text-align: center;
        font-size: clamp(1rem, 2.5vw, 1.5rem);
        padding: 0 1rem;
        margin-bottom: 2rem;
    }

    form {
        z-index: 10;
    }

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 0 1rem;
        height: 100%;
    }
`

const FormWrapContactInfo = styled.div`
display: flex;
flex-direction: row;
padding: 10px;
    input {
        outline: none;
        width: 300px;
        height: 35px;
        background-color: rgb(206, 212, 221);
        color: black;
        padding-left: 0.4em;
        border: 2px solid black;
        margin: 2px;
    }

    .message {
        height: 200px;
        border: 2px solid black;
    }

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 0 1rem;

        input {
            margin-bottom: 1rem;
            width: 100%;
            margin-right: 0;
        }
    }
`

const FormWrapEmailInfo = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 10px;
    input {
        outline: none;
        width: 100%;
        height: 35px;
        background-color: rgb(206, 212, 221);
        color: black;
        padding-left: 0.4em;
        border: 2px solid black;
        margin: 3px;
    }

    .message {
        height: 200px;
        padding-left: 0.4em;
        border: 2px solid black;
        margin: 3px;
    }

    textarea {
        width: 100%;
        outline: none;
        background-color: rgb(206, 212, 221);
        color: black;
        padding-left: 0.4em;
        padding-top: 0.4em;
        margin: 3px;
    }

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 0 1rem;

        input {
            margin-bottom: 1rem;
            width: 100%;
            margin-right: 0;
        }
    }
`