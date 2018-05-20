import React from 'react'
import { action } from '@storybook/addon-actions'
import { Fab } from 'rmwc/Fab'
import icons from './icons.json'

const randomIcons = (new Array(3).fill()).map(() => icons[(Math.random() * icons.length) | 0])
const DemoMenu = (props) => randomIcons.map((icon, i) => <Fab {...props} onClick={action(icon)} key={i}>{icon}</Fab>)

export default DemoMenu
