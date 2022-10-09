import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <Container>
            <img src="/images/logo.svg" alt="logo" />
            <Wrap>
                <li>English</li>
                <li>Subscriber Agreement</li>
                <li>Privacy Policy</li>
                <li>Your California Privacy</li>
                <li>Do Not sell My info</li>
                <li>Childrens Online Privacy Policy</li>
                <li>Closed Captioning</li>
                <li>Interest-Based-Ads</li>
                <li>Supported Devices</li>
                <li>Help</li>
                <li>Gift Disney<sup>+</sup></li>
                <li>About Us</li>
                <li>Disney<sup>+</sup> Partner Program</li>
                <li>Premier Access</li>
                <li>The Disney Bundle</li>
            </Wrap>
            <Copyright>
                © DisneyPlus-M.Furqan Abid. All Rights Reserved 
            </Copyright>
        </Container>
    )
}

export default Footer

const Container=styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #040714;
    img{
        margin-top: 40px;
        width: 200px;
    }
`
const Wrap=styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    align-items: center;
    justify-content: center;
    li{
        padding: 0.5rem;
        font-size: 0.9rem;
        margin: 0px 0.3rem 0px 0px;
        display: inline-block;
        cursor: pointer;
    }
`

const Copyright=styled.p`
    font-size: 22px;
    margin-top: -8px;
    margin-bottom: 50px;
`