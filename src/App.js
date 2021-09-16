import React, {Component} from 'react'
import Header from './Header.js'
import Main from './Main.js'
import Actions from './Actions.js'
import Table from './Table.js'


class App extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Main />
                <Actions />
                <Table />
            </div>

        )
    }
}

export default App;