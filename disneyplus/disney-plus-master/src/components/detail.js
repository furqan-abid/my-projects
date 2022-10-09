import React from 'react'
import styled from 'styled-components'
import { useEffect } from 'react'

function Detail(props) {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (

        <Container>
            {
                props.movies.map((movie)=>{
                    return(
                        <>           
                        <Background>
                        <img src={movie.BackgroundImg} alt="img" />
                        {console.log(movie)}
                    </Background>
                    <Imagetitle>
                        <img src={movie.TitleImg} alt="" />
                    </Imagetitle>
                    <Controls>
                        <Playbutton>
                            <img src="/images/play-icon-black.png" alt="icon" />
                            <span>PLAY</span>
                        </Playbutton>
                        <Trailerbutton>
                            <img src="/images/play-icon-white.png" alt="icon" />
                            <span>TRAILER</span>
                        </Trailerbutton>
                        <Addbutton>
                            <span>+</span>
                        </Addbutton>
                        <Groupwatchbutton>
                            <img src="/images/group-icon.png" alt="" />
                        </Groupwatchbutton>
                    </Controls>
                    <Subtitle>
                        {movie.Genres}
                    </Subtitle>
                    <Description>
                        {movie.Description}
                    </Description>
                    </>
                     )
                })
            }
        </Container>
        
    )
}

export default Detail

const Container=styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    margin-top: 70px;
`
const Background=styled.div`
    opacity: 0.8;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const Imagetitle=styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    img{
        margin-top: 10px;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls=styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    margin: 24px 0px;
`
const Playbutton=styled.button`
    display: flex;
    align-items: center;
    margin: 0px 22px 0px 0px;
    padding: 0px 24px;
    height: 56px;
    background: rgb(249,249,249);
    font-size: 15px;
    border-radius: 4px;
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;
    &:hover{
        background: rgb(198,198,198)
    }
`
const Trailerbutton=styled(Playbutton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`
const Addbutton=styled.button`
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgb(0,0,0,0.6);
    cursor: pointer;
    margin-right: 16px;
    span{
        font-size: 30px;
        color: white;
    }
`
const Groupwatchbutton=styled(Addbutton)`
    background: rgb(0,0,0);
`

const  Subtitle=styled.p`
    color: rgb(249,249,249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`
const Description=styled.p`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249,249,249);
    width: 50%;
`




