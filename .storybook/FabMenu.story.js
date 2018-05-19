import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'
import FabMenu from '../src/FabMenu'
import DemoMenu from '../.storybook/DemoMenu'

// these styles make menus go in corners, so you can see how they flow
const style = { shared: { position: 'fixed' } }
style.left = { ...style.shared, right: 10 }
style.right = { ...style.shared, top: 10, left: 10 }
style.up = { ...style.shared, bottom: 10, left: 10 }
style.down = { ...style.shared, top: 10, left: 10 }

const story = storiesOf('FabMenu', module)
addDecorator((story, context) => withInfo()(story)(context))

story.add('basic usage', () => <FabMenu theme='primary-bg' onClick={action('MENU')} style={style.right}>{DemoMenu()}</FabMenu>)
story.add('with mini menu items', () => <FabMenu theme='primary-bg' onClick={action('MENU')} style={style.right}>{DemoMenu({mini: true})}</FabMenu>)
story.add('direction: right', () => <FabMenu theme='primary-bg' onClick={action('MENU')} style={style.right} direction='right'>{DemoMenu()}</FabMenu>)
story.add('direction: left', () => <FabMenu theme='primary-bg' onClick={action('MENU')} style={style.left} direction='left'>{DemoMenu()}</FabMenu>)
story.add('direction: up', () => <FabMenu theme='primary-bg' onClick={action('MENU')} style={style.up} direction='up'>{DemoMenu()}</FabMenu>)
story.add('direction: down', () => <FabMenu theme='primary-bg' onClick={action('MENU')} style={style.down} direction='down'>{DemoMenu()}</FabMenu>)
