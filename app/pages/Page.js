import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import StaticPost from '../components/StaticPost'
import PostFromPhp from '../components/PostFromPhp'
import PostFromApi from '../components/PostFromApi'

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
                <PostFromApi id={id} />
                <p>
                    <Link to="/">Return to home</Link>
                </p>
            </div>
        )
    }
}

export default Page
