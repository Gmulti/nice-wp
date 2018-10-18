import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Page extends Component {
    render() {
        const {
            match: {
                params: { id }
            }
        } = this.props

        return (
            <div>
                Page : {id}
                <p>
                    <Link to="/">Return to home</Link>
                </p>
            </div>
        )
    }
}

export default Page
