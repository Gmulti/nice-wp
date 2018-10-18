import React, { Component } from 'react'
import { PostFromPhp, PostFromApi } from '../../components'

class ViewStaticPostComposed extends Component {
    render() {
        const { id } = this.props
        return (
            <div>
                <PostFromPhp id={id} />
            </div>
        )
    }
}

export default ViewStaticPostComposed
