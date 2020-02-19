import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  fetchAllPets = ()=> {
    fetch("/api/pets")
    .then(r => r.json())
    .then(allPets=>{
      this.setState({
        pets: allPets
      })})
  }

  fetchFilteredPets = ()=>{
    const selectedType = this.state.filters.type
    fetch(`/api/pets?type=${selectedType}`)
    .then(r => r.json())
    .then(filteredPets=>{
      this.setState({
        pets: filteredPets
      })
    })

  }
  handleDropdown = (event) => {
    // console.log(this)
    this.setState({
      filters:{type: event.target.value}
    })
  }
  handleAdoption = (event)=>{
    let petID = event.target.id
    let petInstance = this.state.pets.map(pet=> {
      return pet.id === petID ? {...pet, isAdopted: true} : pet})
      this.setState({pets: petInstance})
    }
  
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters x={this.state} dropDown={this.handleDropdown} fetching={
                this.state.filters.type == "all" ? this.fetchAllPets : this.fetchFilteredPets}/>
            </div>
            <div className="twelve wide column">
    {this.state.pets === [] ? null : <PetBrowser pets={this.state.pets} adoption={this.handleAdoption}/>}  
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
