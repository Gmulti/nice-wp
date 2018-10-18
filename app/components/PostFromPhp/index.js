import React, { Component } from 'react'

class PostFromPhp extends Component {
    state = {
        post: null
    }

    componentWillMount() {
        this.getPostFromPhp()
    }

    getPostFromPhp() {
        const { id } = this.props
        this.setState({ post: wpPostReact[id] });
    }

    render() {
        const { post } = this.state
        if (!post) {
            return false
        }

        const { post_title, post_content } = post

        return (
            <div>
                <h1>{post_title}</h1>
                <p dangerouslySetInnerHTML={{ __html: post_content }} />
            </div>
        )
    }
}

export default PostFromPhp
