import React, {Component} from 'react' 

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Date</th>
        <th>Amount</th>
        <th>Concept</th>
        <th>Type</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const rows = props.operationsData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.date}</td>
        <td>{row.amount}</td>
        <td>{row.concept}</td>
        <td>{row.type}</td>
      </tr>
    )
  })
  return (
    <tbody>{rows}</tbody>
  )
}

class Table extends Component {
  render() {
    const {operationsData} = this.props
    return (
      <table>
        <TableHeader />
        <TableBody operationsData={operationsData} />
      </table>
    )
  }
}

export default Table