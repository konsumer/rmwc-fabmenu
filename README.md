A quick & simple `<Fab>` menu for [rmwc](https://jamesmfriedman.github.io/rmwc/)


## installation

```sh
npm i
```

[rmwc-fabmenu](https://github.com/konsumer/rmwc-fabmenu) is a library for making a `<Fab />` menu, like the sort you see on Google Inbox for composing a new email. It utilizes [rmwc](https://jamesmfriedman.github.io/rmwc/), so it's useful if you are already including that in your app.

### usage

```jsx
import FabMenu from 'rmwc-fabmenu'
import { Fab } from 'rmwc/Fab'

export default ({onClickSettings, onClickAdd}) => (
  <FabMenu>
    <Fab mini onClick={onClickSettings}>settings</Fab>
    <Fab mini onClick={onClickAdd}>add</Fab>
  </FabMenu>
)
```


