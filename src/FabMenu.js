import React, { Component } from 'react'
import { Fab } from 'rmwc/Fab'
import PropTypes from 'prop-types'

class FabMenu extends Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }

  onMouseEnter (e) { this.setState({ open: true }) }
  onMouseLeave (e) { this.setState({ open: false }) }
  onTouchStart (e) { this.setState({ open: !this.state.open }) }

  render () {
    const { open } = this.state
    const { openIcon, closedIcon, className, direction, style, ...props } = this.props
    const { onMouseEnter, onMouseLeave, onTouchStart } = this
    const topClass = `FabMenu ${className || ''} ${open ? 'open' : 'closed'} ${direction}`
    return (
      <div style={style} className={topClass} onTouchStart={onTouchStart} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <Fab {...props} className='trigger'>{ open ? openIcon : closedIcon }</Fab>
        <div className='menu'>
          {React.Children.map(this.props.children, el => React.cloneElement(el, { exited: !open }))}
        </div>
      </div>
    )
  }
}

FabMenu.propTypes = {
  /** the material-icon used when the menu is open */
  openIcon: PropTypes.string,

  /** the material-icon ised when the menu is closed */
  closedIcon: PropTypes.string,

  /** the direction for the menu to flow */
  direction: PropTypes.oneOf(['right', 'left', 'up', 'down'])
}

FabMenu.defaultProps = {
  openIcon: 'edit',
  closedIcon: 'add',
  direction: 'right'
}

export default FabMenu
