<img src="action.gif" align="right"/>

A quick & simple `<Fab>` menu for [rmwc](https://jamesmfriedman.github.io/rmwc/)

You can see it in action (and detailed docs) [here](http://konsumer.js.org/rmwc-fabmenu/).

## installation

```sh
npm i rmwc-fabmenu
```

This is a library for making a `<Fab />` menu, like the sort you see on Google Inbox for composing a new email. It utilizes [rmwc](https://jamesmfriedman.github.io/rmwc/), so it's useful if you are already including that in your app.

### usage

```jsx
import React from 'react'

import FabMenu from 'rmwc-fabmenu'
import 'rmwc-fabmenu/FabMenu.css'

import { Fab } from 'rmwc/Fab'

export default ({onClickSettings, onClickAdd}) => (
  <FabMenu>
    <Fab mini onClick={onClickSettings}>settings</Fab>
    <Fab mini onClick={onClickAdd}>add</Fab>
  </FabMenu>
)
```