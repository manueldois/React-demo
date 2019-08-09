import React from 'react'
import './Home.scss'
import logo from 'assets/logo.svg'

class Home extends React.Component {
    render() {
        return (
            <div className="page homePage">
                <h1>Homepage</h1>
                <img src={logo} alt='logo' />
            </div> 
        )
    }
}

export default Home