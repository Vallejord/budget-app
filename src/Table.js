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

const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>12/8</td>
        <td>$300</td>
        <td>fafafa</td>
        <td>expense</td>
      </tr>
    </tbody>
  )
}

class Table extends Component {
  render() {
    return (
      <table>
        <TableHeader />
        <TableBody />
      </table>
    )
  }
}

export default Table