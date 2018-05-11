/* global ReactLayout, RMWC, ReactDOM, reactMarkdown, FabMenu */

const { Box, VBox } = ReactLayout
const {
  Toolbar,
  ToolbarRow,
  ToolbarTitle,
  Typography,
  Fab
} = RMWC

// some helpers to make code smaller
const withPad = Comp => props => {
  const s = props.pad ? { padding: props.pad === true ? 10 : props.pad } : {}
  const c = props.c || ''
  const f = props.f === true ? 1 : props.f
  return (<Comp className={c} flex={f} style={s} {...props} />)
}
const B = withPad(props => <Box {...props} />)
const V = withPad(props => <VBox {...props} />)
const T = withPad(({u, ...props}) => <Typography use={u} {...props} />)

// this is just to make editing faster
const ReactMarkdown = reactMarkdown
const Content = ({children}) => { console.log(children); return (<ReactMarkdown source={children} />) }

const App = () => (
  <V fit>
    <Toolbar>
      <ToolbarRow>
        <ToolbarTitle>
          <B alignItems='center'>
            <T pad u='headline3'>FabMenu</T>
          </B>
        </ToolbarTitle>
      </ToolbarRow>
    </Toolbar>
    <V f pad>
      <B aligItems='center'>
        <B aligItems='center'>
          <FabMenu>
            <Fab mini style={{backgroundColor: '#c62828'}}>delete</Fab>
            <Fab mini>settings</Fab>
          </FabMenu>
          <T u='headline3'>Demo</T>
          <FabMenu direction='left'>
            <Fab mini style={{backgroundColor: '#c62828'}}>delete</Fab>
            <Fab mini>settings</Fab>
          </FabMenu>

          <FabMenu direction='up' style={{position: 'absolute', 'bottom': 10, right: 0}}>
            <Fab mini style={{backgroundColor: '#c62828'}}>delete</Fab>
            <Fab mini>settings</Fab>
          </FabMenu>

          <FabMenu direction='down'>
            <Fab mini style={{backgroundColor: '#c62828'}}>delete</Fab>
            <Fab mini>settings</Fab>
          </FabMenu>
        </B>
      </B>
      <B>
        <T u='body1' />
      </B>
    </V>
    <B center pad>
      <T use='overline'>Made with &hearts; by <a href='https://github.com/konsumer'>konsumer</a></T>
    </B>
  </V>
)

ReactDOM.render(<App />, document.getElementById('root'))
