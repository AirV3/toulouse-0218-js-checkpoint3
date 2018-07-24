import React from 'react'

class Item extends React.Component {
  
  render() {
    const item = this.props.item
    return (
      <div>
        { item.map( oneItem => 
          <div className="PlayaList-item">
            <img src={oneItem.picture} alt={oneItem.name} />
            <div>{oneItem.name}</div>
            {/*<span className="icon-cancel-circle"></span>*/}
          </div>
        )}
      </div>
    )
  }
}

export default Item
