import React, {Component} from 'react'

class Form extends Component {
    initialState = {
        date: '',
        amount: '',
        concept: '',
        type: '',
    }

    state = this.initialState

    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({
            [name]: value
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        const { date, amount, concept, type} = this.state;

        return (
            <form>
              <label htmlFor="date">Date</label>
              <input 
                type="text" 
                name="date"
                id="date"
                value={date}   
                onChange={this.handleChange} />
               <label htmlFor="amount">Amount</label> 
               <input 
                 type="text" 
                 name="amount"
                 id="amount"
                 value={amount}
                 onChange={this.handleChange} />
                <label htmlFor="concept">Concept</label> 
               <input 
                 type="text" 
                 name="concept"
                 id="concept"
                 value={concept}
                 onChange={this.handleChange} />
                 <label htmlFor="type">Type</label> 
               <input 
                 type="text" 
                 name="type"
                 id="type"
                 value={type}
                 onChange={this.handleChange} />
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        );
    }


}


export default Form;

