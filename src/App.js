import React, {Component} from 'react'
import Header from './Header.js'
import Main from './Main.js'
import Actions from './Actions.js'
import Table from './Table.js'


class App extends Component {

    state = {
        operations: [], 
    }

    removeOperation = (index) => {

        const {operations} = this.state;

        this.setState({
            operations: operations.filter((operation, i) => {
                return i !== index
            }),
        })
    }

    render() {

        const { operations } = this.state
        
        return (
            <div className="container">
                <Header />
                <Main />
                <Actions />
                <Table operationData={operations} removeOperation={this.removeOperation} />
            </div>

        )
    }
}

export default App;