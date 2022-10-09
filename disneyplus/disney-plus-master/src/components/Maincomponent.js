import React, { Component } from 'react'
import Detail from './detail'
import Header from './Header'
import Home from './home'
import { Switch, Route, Redirect,withRouter } from 'react-router-dom'
import Login from './login'
import { fetchmovies,userLogin,userSignout } from '../redux/actionCreators'
import {connect} from 'react-redux'
import Footer from './footer'
const mapStateToProps=state=>{
    return{
        movies: state.movies,
        users: state.users
    }
}

const mapDispatchToProps=dispatch=>({
    fetchmovies:()=>{dispatch(fetchmovies())},
    userLogin:(name,email,photo)=>{dispatch(userLogin(name,email,photo))},
    userSignout:()=>{dispatch(userSignout())}
})

export class Maincomponent extends Component {
    componentDidMount(){
        this.props.fetchmovies();
    }
    render() {
        const Moviewithid=({match})=>{
            return(
                <Detail movies={this.props.movies.movies.filter((movie)=>movie.id===(match.params.id))}/>
                        
            )
        }
        return (
            <div>
                <Header userSignout={this.props.userSignout}
                        userLogin={this.props.userLogin}
                        username={this.props.users.name}
                        userphoto={this.props.users.photo}
                />
                {console.log(this.props.userLogin)}
                <Switch>
                <Route path='/login' component={()=><Login/>}/>
                <Route path='/home' component={()=><Home 
                                                        movies={this.props.movies.movies}
                                                        isloading={this.props.movies.isloading}
                                                        errmess={this.props.movies.errmess}
                />}/>
                {this.props.movies.movies&&
                <Route path='/detail/:id' component={Moviewithid}/>
                }
                <Redirect to='/home'/>
                </Switch>
                <Footer/>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Maincomponent))
