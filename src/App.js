import React from 'react'
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './component-style/style.css'

class App extends Component {
render() {
    return(
        <>
            <nav className="bg-dark d-flex align-items-center" >
                <p className="fw-bold text-light fs-4">My logo</p>
                <ul className="d-flex fs-6 text-light-emphasis gap-4">
                    <li className="li-element">home</li>
                    <li className="li-element">About</li>
                    <li className="li-element">contact</li>
                </ul>
        </nav>
        </>
    )
}
}
export default App