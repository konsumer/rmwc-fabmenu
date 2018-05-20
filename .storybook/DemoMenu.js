import React from 'react'
import { action } from '@storybook/addon-actions'
import { Fab } from 'rmwc/Fab'

const icons = ['move_to_inbox', 'trending_up', 'access_time', 'art_track', 'assignment']

const DemoMenu = (props) => icons.map((icon, i) => <Fab {...props} onClick={action(icon)} key={i}>{icon}</Fab>)

export default DemoMenu
