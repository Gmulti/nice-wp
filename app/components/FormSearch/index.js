import React, { Component } from 'react'

class FormSearch extends Component {
    render() {
        return (
            <section id="search-2" className="widget widget_search">
                <form role="search" method="get" className="search-form">
                    <label htmlFor="search-form-5bc8adafa48a8">
                        <span className="screen-reader-text">Search for:</span>
                    </label>
                    <input
                        type="search"
                        id="search-form-5bc8adafa48a8"
                        className="search-field"
                        placeholder="Search …"
                        defaultValue=""
                        name="s"
                    />
                    <button type="submit" className="search-submit">
                        <svg
                            className="icon icon-search"
                            aria-hidden="true"
                            role="img"
                        >
                            <use href="#icon-search" href="#icon-search" />
                        </svg>
                        <span className="screen-reader-text">Search</span>
                    </button>
                </form>
            </section>
        )
    }
}

export default FormSearch
