import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <CTA>
                <CTAlogoOne src="/images/cta-logo-one.svg" />
                <Signup>
                    GET ALL THERE
                </Signup>
                <Description>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi veritatis, pariatur sed suscipit non repellat nam exercitationem delectus ipsa facilis!
                </Description>
                <CTAlogoTwo src="/images/cta-logo-two.png" />
            </CTA>

        </Container>
    )
}

export default Login

const Container=styled.div`
    height: calc(100vh - 70px);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    &:before{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        content: "";
        background-image: url('/images/login-background.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top;
        opacity: 0.8;
        z-index: -1;
    }
`

const CTA=styled.div`
    width: 40%;
    padding: 80px 40px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 5%;
`

const CTAlogoOne=styled.img`
`

const Signup=styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 8px 0px;
    text-align: center;
    letter-spacing: 1.5px;
    color: #f9f9f9;
    border-radius:4px;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    margin: 8px 0px 12px 0px;
    &:hover{
        background-color: #0483ee;
    }
`

const Description=styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`
const CTAlogoTwo=styled.img`
    width: 90%;
`