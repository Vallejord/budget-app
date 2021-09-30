import React, {Component} from 'react'
import Header from './Header.js'
import Main from './Main.js'
import Form from './Form'
import Actions from './Actions.js'
import Table from './Table.js'


class App extends Component {

    state = {
        operations: [], 
    }

    removeOperation = (index) => {

        const {operations} = this.state

        this.setState({
            operations: operations.filter((operation, i) => {
                return i !== index
            }),
        })
    }

    handleSubmit = (operation) => {
        this.setState({operations: [...this.state.operations, operation]})
    }

    render() {

        const { operations } = this.state
        
        return (
            <div className="container">
                <Header />
                <Main />
                <Actions />
                <Form handleSubmit={this.handleSubmit}  />
                <Table operationData={operations} removeOperation={this.removeOperation} />
            </div>

        )
    }
}

export default App;