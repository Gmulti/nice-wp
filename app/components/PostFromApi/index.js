import React, { Component } from 'react'
import WordPressApi from '../../services/wpapi'

class PostFromApi extends Component {
    state = {
        post: null
    }
    componentWillMount() {
        this.getPostFromApi()
    }

    getPostFromApi = async () => {
        const { id } = this.props
        const response = await WordPressApi.posts.getById(id)

        if (
            response.data &&
            response.data.status &&
            response.data.status !== 200
        ) {
            return
        }

        this.setState({
            post: response
        })
    }

    render() {
        const { post } = this.state

        if (!post) {
            return false
        }

        const { title, content } = post

        return (
            <div>
                <h1>{title.rendered}</h1>
                <p dangerouslySetInnerHTML={{ __html: content.rendered }} />
            </div>
        )
    }
}

export default PostFromApi
