import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <header id="masthead" className="site-header" role="banner">
                <div className="custom-header">
                    <div className="custom-header-media">
                        <div id="wp-custom-header" className="wp-custom-header">
                            <img
                                src="http://nice-wp.local/wp-content/themes/twentyseventeen/assets/images/header.jpg"
                                width="2000"
                                height="1200"
                                alt="Nice WP"
                            />
                        </div>{' '}
                    </div>

                    <div className="site-branding">
                        <div className="wrap">
                            <div className="site-branding-text">
                                <p className="site-title">
                                    <a href="http://nice-wp.local/" rel="home">
                                        Nice WP
                                    </a>
                                </p>

                                <p className="site-description">
                                    Just another WordPress site
                                </p>
                                <Link to="/page/1">Link page => 1</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header
