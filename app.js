const ItemStore = Object.assign({}, EventEmitter.prototype, {
  getItems: () => {
    return _items
  },
  emitChange: () => {
    this.emit('change')
  },
  addChangeListener: (callback) => {
    this.on('change', callback)
  },
  removeChangeListener: (callback) => {
    this.removeListener('change', callback)
  }
})

function _getState() {
  return {
    items: ItemStore.getItems()
  }
}
export class App extends Component {
    getInitialState (){
          return this._getState 
    }
    componentDidMount () {
    ItemStore.addChangeListener(this._onChange)
  }
  componentWillUnmount  () {
    ItemStore.removeChangeListener(this._onChange)
  }
  _onChange (){
    this.setState(this._getState )
  }
  onRemoveItem(id){
    // fire method to action helper 
  }
  render() {
    return this.state.items.map(item => (
      <ChildComponent item={item} removeItem={this.onRemoveItem} />
    ))
  }
});

export class ChildComponent extends Component {
  render() {
    return (
      <span>{this.props.item.name}</span>
      <button onClick={() => this.props.removeItem(this.props.id)}>Remove</button>
    )
  }
}