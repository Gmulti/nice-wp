import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Home extends Component {
    render() {
        return (
            <div>
                Home
                <Link to="/page/23">Page 1</Link>
            </div>
        )
    }
}

export default Home
