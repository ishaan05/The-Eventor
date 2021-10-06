import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron } from "reactstrap"
import LogoutIcon from '@mui/icons-material/Logout'
import './login.css'


export default class Logout extends Component {
    constructor(props){
        super(props)
        localStorage.removeItem("token");
    }
    render() {
        return (
            <div className="out">
                <Jumbotron>
                <h1 className="logout-user"> Logged Out Successfully!</h1>
                <Link to="/"><LogoutIcon  style={{ fontSize: 50 , marginTop: '20px' , marginLeft: '235px',   color: 'lightgreen' }}/></Link>
                </Jumbotron>
            </div>
        )
    }
}
