import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

document.addEventListener('DOMContentLoaded', () => {
    const selectorRender = document.querySelector('#root')

    ReactDOM.render(<App />, selectorRender)
})
