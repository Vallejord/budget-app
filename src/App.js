import React, {Component} from 'react'
import Header from './Header.js'
import Main from './Main.js'
import Actions from './Actions.js'
import Table from './Table.js'


class App extends Component {
    render() {
        //operations seran los valores de las props
    
        const operations = [
            {
                date: "12/8",
                amount: 300,
                concept: "fafafa",
                type: "expense",
            },
            {
                date: "11/8",
                amount: 200,
                concept: "nesquik",
                type: "expense",
            },
            {
                date: "10/8",
                amount: 500,
                concept: "sueldo",
                type: "income",
            }
        ]
        return (
            <div className="container">
                <Header />
                <Main />
                <Actions />
                <Table operationsData={operations} />
            </div>

        )
    }
}

export default App;