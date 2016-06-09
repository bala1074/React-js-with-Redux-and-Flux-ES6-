// https://jsbin.com/qubonu/1/edit?js,output
import React from 'react';
class App extends React.Component {
  constructor(){
    super();
  }
  render(){
    let rows = this.props.item.map( person => {
      return <PersonRow key={person.id} data={person} />
    })
    return <table>
      <tbody>{rows}</tbody>
    </table>
  }
}

const PersonRow = (props) => {
  return <tr>
    <td>{props.data.id}</td>
    <td>{props.data.name}</td>
  </tr>
}

export default App
