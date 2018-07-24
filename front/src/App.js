import React, { Component } from 'react'
import Item from './Item'
import './PlayaList.css'
import logo from './mojito.ico'

// const items = [
//   {
//     name: 'Tongs',
//     picture: '/images/tongs.jpg'
//   },
//   {
//     name: 'Ballon de plage',
//     picture: '/images/ballon.jpg'
//   },
//   {
//     name: 'Raquettes de plage',
//     picture: '/images/raquettes.jpg'
//   },
//   {
//     name: 'Bouée grenouille',
//     picture: '/images/bouee-grenouille.jpg'
//   },
// ]

class App extends Component {
  state = {
    items: []
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch('/api/items', {
      method:'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(item => console.log(item))
  }

  handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name
    this.setState({
      [name]: value
    })
  }

  handleDelete = (id) => {
    fetch(`/api/items/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(result => {
      const items = [...this.state.items]
      const index = items.findIndex(item => {
        return item.id === id
      })
      items.splice(index, 1)
      this.setState({items: items})
    })
  }

  componentDidMount() {
    fetch('/api/items')
    .then( res => res.json())
    .then( items => { 
      this.setState({
        items: items
      })
      console.log(items)
    })
  }

  render() {
    return (
      <div className="PlayaList">

        <header className="PlayaList-header">
          <img src={logo} className="PlayaList-logo" alt="logo" />
          <h1 className="PlayaList-title">PlayaList</h1>
        </header>

        <div className="PlayaList-list">
          <form>
            <h5>Ajouter un item</h5>
            <div>
              <form onSubmit={this.handleSubmit}>
                <input name="name" placeholder="Nom" value={this.state.name} onChange={this.handleChange} />
                <input name="picture" placeholder="image" value={this.state.picture} onChange={this.handleChange} />
                <button type="submit" >
                  <span className="icon-checkmark" ></span>
                </button>
              </form>
            </div>
          </form>
        </div>

        <div className="PlayaList-list">
          <Item item={this.state.items} handleDelete={this.handleDelete} />
        </div>

      </div>
    )
  }
}

export default App
