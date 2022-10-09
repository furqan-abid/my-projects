import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import { Link } from 'react-router-dom';

function Rendermovies({movies,isloading,errmess}) {
    var settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        autoplay: true,
        draggable:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: false,
              autoplay: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 2,
              autoplay: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: true
            }
          }
        ]
      };
    if(isloading){
        return(
        <h4>loading....</h4>
        )
    }
    else if(errmess){
        return(<h4>{errmess}</h4>)
    }
    return (
        <Container>
            <h4>{(movies[0].type)}</h4>
            <Content {...settings}>
                 {
                    movies.map((movie)=>{
                    return( 
                    <Link key={movie.id} to={`/detail/${movie.id}`}>   
                    <Wrap>
                        <img src={movie.CardImg} alt="image" />
                    </Wrap>
                    </Link>
                    )
                    })
                }
            </Content>           
        </Container>
    )
}

function Movies(props){
    return(
        <>
            <Rendermovies   movies={props.movies.filter((movie)=>movie.type==='original')}
                            isloading={props.isloading}
                             errmess={props.errmess}
            />
            <Rendermovies   movies={props.movies.filter((movie)=>movie.type==='popular')}
                            isloading={props.isloading}
                             errmess={props.errmess}
            />
           <Rendermovies   movies={props.movies.filter((movie)=>movie.type==='kidsTv')}
                            isloading={props.isloading}
                             errmess={props.errmess}
            />
            <Rendermovies   movies={props.movies.filter((movie)=>movie.type==='hollywood')}
                            isloading={props.isloading}
                             errmess={props.errmess}
            />
            <Rendermovies   movies={props.movies.filter((movie)=>movie.type==='trending')}
                            isloading={props.isloading}
                             errmess={props.errmess}
            />
           <Rendermovies   movies={props.movies.filter((movie)=>movie.type==='newTo')}
                            isloading={props.isloading}
                             errmess={props.errmess}
            />
        </>
    )
}



export default Movies

const Container=styled.div`
    letter-spacing: 1.5px;
    font-size: 20px;
    text-transform: uppercase;
    h4{
        padding: 0 12px;
        text-decoration: none;
        color: white;

    }
`

const Content=styled(Slider)`
    /* /* display: grid;
    width: 100%;
    padding: 30px 10px 26px;
    grid-template-columns: repeat(5,minmax(0,1fr));
    grid-gap: 25px;*/
    a{
        padding: 0px 15px;
    }
    .slick-prev:before,.slick-next:before{
        display: none;
    }
    .slick-list{
        overflow: initial;
    }
`
const Wrap=styled.div`
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    cursor: pointer;
    
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8)
    }

`