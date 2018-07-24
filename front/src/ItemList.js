import React from 'react'
import Item from './Item'

class ItemList extends React.Component {
  
  render() {
    const item = this.props.item
    return (
      <div>
        { 
          item.map( item => {
            <Item item={item}/>
          })
        }
      </div>
    )
  }
}

export default ItemList