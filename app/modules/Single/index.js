import React, { Component } from 'react'
import { PostFromPhp, PostFromApi } from '../../components'

class Single extends Component {
    render() {
        const { id } = this.props
        return (
            <div>
                <PostFromPhp id={id} />
            </div>
        )
    }
}

export default Single
