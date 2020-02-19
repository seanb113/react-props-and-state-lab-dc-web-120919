import React from 'react'
import getType from '../data/pets'
class Filters extends React.Component {
  
  handleClick = event => {
  // const 
  // setState
  }
  render() {
    // debugger
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select onChange={this.props.dropDown} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={this.props.fetching} className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
