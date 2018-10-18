import React, { Component } from 'react'

class Page extends Component {
    render() {
        const {
            match: {
                params: { id }
            }
        } = this.props

        return <div>Page : {id}</div>
    }
}

export default Page
