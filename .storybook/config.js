import { configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import { setDefaults } from '@storybook/addon-info'
import { Fab } from 'rmwc/Fab'

// configure addon-info
setDefaults({
  inline: true,
  header: false,
  propTablesExclude: [Fab]
})

setOptions({
  name: 'RMWC FabMenu',
  url: 'https://github.com/konsumer/rmwc-fabmenu',
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: false,
  addonPanelInRight: false,
  sortStoriesByKind: false,
  hierarchySeparator: null,
  hierarchyRootSeparator: null,
  sidebarAnimations: true,
  selectedAddonPanel: undefined,
  enableShortcuts: true
})

configure(() => {
  require('./style.css')
  require('../FabMenu.css')
  require('./FabMenu.story.js')
}, module)
