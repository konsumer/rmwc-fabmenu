import React, { Component } from 'react'
import { Fab } from 'rmwc/Fab'

import './FabMenu.css'

export default class FabMenu extends Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }

  onMouseEnter (e) { this.setState({ open: true }) }
  onMouseLeave (e) { this.setState({ open: false }) }
  setOpen (open) { this.setState({ open }) }

  render () {
    const { open } = this.state
    const { openIcon, closedIcon, className, direction, style } = this.props
    const { onMouseEnter, onMouseLeave } = this
    const topClass = `FabMenu ${className || ''} ${open ? 'open' : 'closed'} ${direction}`
    return (
      <div style={style} className={topClass} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <Fab {...this.props} className='trigger'>{ open ? openIcon : closedIcon }</Fab>
        <div className='menu'>
          {React.Children.map(this.props.children, el => React.cloneElement(el, { exited: !open }))}
        </div>
      </div>
    )
  }
}

FabMenu.defaultProps = {
  openIcon: 'edit',
  closedIcon: 'add',
  direction: 'right'
}

module.exports = FabMenu
