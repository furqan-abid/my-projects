import React from 'react'
import ImgSlider from './slider'
import styled from 'styled-components'
import Veiwers from './veiwers'
import Movies from './movies'

function Home(props) {
    return (
        <Container>
            <ImgSlider/>
            <Veiwers/>
            <Movies movies={props.movies}
                    isloading={props.isloading}
                    errmess={props.errmess}
            />
        </Container>
    )
}

export default Home


const Container=styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    margin-top: 70px;
    &:after{
        background: url("/images/home-background.png") center center / cover
        no-repeat fixed;
        content: "";
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 1;
        z-index: -1;
    }
`