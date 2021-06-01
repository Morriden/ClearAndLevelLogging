import React from 'react'
import styled from 'styled-components'
import placeholder from '../assets/images/placeholder.jpg'

const AboutUs = () => {
    return (
            <AboutUsContainer>
                <AboutUsContent>
                <h1>Our Story</h1>
                    <AboutUsItems>
                        <img src={placeholder} width="250" height="500"/>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet enim eget ex faucibus varius. Mauris dapibus vulputate tortor et pretium. Vestibulum luctus, nisl euismod pellentesque fringilla, tellus risus feugiat mauris, vel rutrum orci dolor nec orci. Donec volutpat mi felis, quis venenatis diam accumsan vitae. Proin ac molestie ligula, vitae laoreet orci. Vivamus faucibus accumsan fringilla. Phasellus vitae odio sed nibh tincidunt condimentum. Donec interdum tincidunt nibh vehicula rhoncus. Duis id elementum tellus. Maecenas sollicitudin purus et est ultricies suscipit. Nam blandit porta est consequat bibendum. Aenean venenatis tempor orci, ut aliquet risus accumsan quis. Praesent non mauris sit amet augue porta placerat in vitae massa. Ut malesuada nibh egestas massa sollicitudin, non cursus nulla vehicula. Sed pharetra venenatis convallis. </p>
                        <br></br>
                        <br></br>
                        <p> Vivamus tempor dapibus quam eget euismod. Sed vehicula mi tortor. Phasellus viverra ultricies ex vel dictum. Suspendisse id velit risus. Vivamus maximus, leo nec interdum egestas, est leo hendrerit purus, et varius urna lacus eu ligula. Aliquam pretium imperdiet congue. Vivamus faucibus odio risus, sit amet bibendum dolor volutpat non. Vivamus finibus lectus quis nisl sodales feugiat. Aliquam a interdum est. Mauris vel mauris quis erat luctus sagittis in non sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut sollicitudin sagittis nunc, eu maximus lacus sodales at.
                        </p>
                    </AboutUsItems>
                </AboutUsContent>
            </AboutUsContainer>
    )
}

export default AboutUs

const AboutUsContainer = styled.div`
    background: #C0C0C0;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    padding-bottom: 250px;
    /* padding: 3rem 5rem; */
    color: #fff;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px 10px;
        margin: auto;
    }
`

const AboutUsContent = styled.div`
    z-index: 3;
    height: 100%;
    padding: 0rem calc((100vw - 1300px) / 2);
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        padding-top: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const AboutUsItems = styled.div`
img {
    height: 300px;
    width: 250px;
    margin: 30px;
    float: left;
    border: solid white 5px;
    border-radius: 10px;
}
p {
    text-indent: 50px;
}
    text-align: center;
    height: 100%;
    margin-top: 50px;
    color: #fff;
    line-height: 1.1;
    font-weight: bold;
    font-size: 1.4em;
    background: #C0C0C0;
    overflow: auto;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
