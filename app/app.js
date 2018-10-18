import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Store from './services/store'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route } from 'react-router'
import Home from './pages/Home'
import Page from './pages/Page'
import All from './pages/All'

class App extends Component {
    render() {
        const store = Store.initStore()

        return (
            <Provider store={store}>
                <ConnectedRouter history={Store.history}>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/page/:id" component={Page} />
                            <Route path="*" component={All} />
                        </Switch>
                    </div>
                </ConnectedRouter>
            </Provider>
        )
    }
}

export default App
