import React, { Component } from 'react'
import { Fab } from 'rmwc/Fab'

const makeStyle = ({open, direction}) => {
  const s = {
    FabMenu: {
      position: 'relative',
      margin: '0 10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    trigger: {
      transform: 'rotate(90deg)'
    },
    menu: {
      position: 'absolute',
      display: 'flex'
    },
    MenuChild: {}
  }
  if (open) {
    s.trigger.transform = 'rotate(0)'
  }
  if (direction === 'right') {
    s.menu.left = 55
    s.MenuChild.marginLeft = 5
  }
  if (direction === 'left') {
    s.menu.right = 55
    s.MenuChild.marginRight = 5
    s.menu.direction = 'rtl'
  }
  if (direction === 'down') {
    s.menu.top = 82
    s.MenuChild.marginLeft = 5
    s.MenuChild.transform = 'rotate(-90deg)'
    s.menu.transform = 'rotate(90deg)'
  }
  if (direction === 'up') {
    s.menu.bottom = 82
    s.MenuChild.marginLeft = 5
    s.MenuChild.transform = 'rotate(90deg)'
    s.menu.transform = 'rotate(-90deg)'
  }
  return s
}

export default class FabMenu extends Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.style = makeStyle(props)
  }

  onMouseEnter (e) { this.setState({open: true}) }
  onMouseLeave (e) { this.setState({open: false}) }
  setOpen (open) { this.setState({open}) }

  render () {
    const { open } = this.state
    const { openIcon, closedIcon, className } = this.props
    const { onMouseEnter, onMouseLeave } = this
    const style = makeStyle({...this.props, ...this.state})
    return (
      <div style={{...style.FabMenu, ...this.props.style}} className={className || 'FabMenu'} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <Fab {...this.props} className='trigger' style={style.trigger}>{ open ? openIcon : closedIcon }</Fab>
        <div className='menu' style={style.menu}>
          {React.Children.map(this.props.children, el => React.cloneElement(el, {style: {...el.props.style, ...style.MenuChild}, exited: !open}))}
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
