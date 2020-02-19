import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    // debugger
    console.log(this.props.pets)
    return (<div className="ui cards">
    {this.props.pets.map(pet =>
    <Pet
    petObj={pet}
    adoption={this.props.adoption}/>)}


    </div>)
  }
}

export default PetBrowser
