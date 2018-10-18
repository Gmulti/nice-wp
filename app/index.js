import React from 'react'
import ReactDOM from 'react-dom'
import { Single, Sidebar } from './modules'

const modules = [
    {
        component: Single,
        active: true,
        selector: '#view-single-post',
        getProps: () => {
            return {
                id: document.querySelector('#view-single-post').dataset.id
            }
        }
    },
    {
        component: Sidebar,
        active: true,
        selector: 'aside#secondary'
    }
]

document.addEventListener('DOMContentLoaded', () => {
    modules.forEach(obj => {
        const selectorRender = document.querySelector(obj.selector)
        if (selectorRender && obj.active) {
            const ModuleComponent = obj.component
            let props = {}
            if (obj.getProps) {
                props = obj.getProps()
            }
            ReactDOM.render(<ModuleComponent {...props} />, selectorRender)
        }
    })
})
