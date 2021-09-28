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
  const rows = props.operationData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.date}</td>
        <td>{row.amount}</td>
        <td>{row.concept}</td>
        <td>{row.type}</td>
        <td>
          <button onClick={() => props.removeOperation(index)}>Delete</button>
        </td>
      </tr>
    )
  })
  return (
    <tbody>{rows}</tbody>
  )
}

const Table = (props) => {
  const {operationData, removeOperation} = props

  return (
    <table>
      <TableHeader />
      <TableBody operationData={operationData} removeOperation={removeOperation} />
    </table>
  )
}

export default Table