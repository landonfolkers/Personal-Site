import React, { Component } from 'react'
import '../App.css'
import Header from './Header'
import Footer from './Footer'


class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <Header />
                <h2>Contact</h2>
                <Footer />
            </div>
        )
    }

}

export default Contact