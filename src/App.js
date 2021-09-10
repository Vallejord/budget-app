import React, {Component} from 'react'
import Header from './Header.js'
import Main from './Main.js'
import Actions from './Actions.js'


class App extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <Main />
                <Actions />
            </div>

        )
    }
}

export default App;