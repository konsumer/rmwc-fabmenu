/* global ReactLayout, RMWC, ReactDOM, FabMenu */

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
        <article className='markdown-body'><p>A quick &amp; simple <code>&lt;Fab&gt;</code> menu for <a href='https://jamesmfriedman.github.io/rmwc/' rel='nofollow'>rmwc</a></p>
          <h2>
            <a id='user-content-installation' className='anchor' href='#installation' aria-hidden='true'><span aria-hidden='true' className='octicon octicon-link' /></a>installation</h2>
          <div className='highlight highlight-source-shell'><pre>npm i</pre></div>
          <p><a href='https://github.com/konsumer/rmwc-fabmenu'>rmwc-fabmenu</a> is a library for making a <code>&lt;Fab /&gt;</code> menu, like the sort you see on Google Inbox for composing a new email. It utilizes <a href='https://jamesmfriedman.github.io/rmwc/' rel='nofollow'>rmwc</a>, so it's useful if you are already including that in your app.</p>
          <h3>
            <a id='user-content-usage' className='anchor' href='#usage' aria-hidden='true'><span aria-hidden='true' className='octicon octicon-link' /></a>usage</h3>
          <div className='highlight highlight-source-js-jsx'><pre><span className='pl-k'>import</span><span className='pl-smi'> FabMenu</span><span className='pl-k'> from</span> <span className='pl-s'><span className='pl-pds'>'</span>rmwc-fabmenu<span className='pl-pds'>'</span></span>{'\n'}<span className='pl-k'>import</span> {'{'}<span className='pl-smi'> Fab</span> {'}'}<span className='pl-k'> from</span> <span className='pl-s'><span className='pl-pds'>'</span>rmwc/Fab<span className='pl-pds'>'</span></span>{'\n'}{'\n'}<span className='pl-k'>export default</span> ({'{'}<span className='pl-smi'>onClickSettings</span>,<span className='pl-smi'> onClickAdd</span>{'}'}) <span className='pl-k'>=&gt;</span> ({'\n'}{'  '}&lt;<span className='pl-ent'><span className='pl-c1'>FabMenu</span></span>&gt;{'\n'}{'    '}&lt;<span className='pl-ent'><span className='pl-c1'>Fab</span></span> <span className='pl-e'>mini</span> <span className='pl-e'>onClick</span><span className='pl-k'>=</span><span className='pl-pse'>{'{'}</span><span className='pl-s1'><span className='pl-smi'>onClickSettings</span></span><span className='pl-pse'>{'}'}</span>&gt;settings&lt;/<span className='pl-ent'><span className='pl-c1'>Fab</span></span>&gt;{'\n'}{'    '}&lt;<span className='pl-ent'><span className='pl-c1'>Fab</span></span> <span className='pl-e'>mini</span> <span className='pl-e'>onClick</span><span className='pl-k'>=</span><span className='pl-pse'>{'{'}</span><span className='pl-s1'><span className='pl-smi'>onClickAdd</span></span><span className='pl-pse'>{'}'}</span>&gt;add&lt;/<span className='pl-ent'><span className='pl-c1'>Fab</span></span>&gt;{'\n'}{'  '}&lt;/<span className='pl-ent'><span className='pl-c1'>FabMenu</span></span>&gt;{'\n'})</pre></div>
          <h4>
            <a id='user-content-props' className='anchor' href='#props' aria-hidden='true'><span aria-hidden='true' className='octicon octicon-link' /></a>props</h4>
          <pre><code>openIcon:{'   '}'edit'{'  '}- icon to show in button when the menu is open{'\n'}closedIcon: 'add'{'   '}- icon to show in button when it's closed{'\n'}direction:{'  '}'right' - direction: left, reight, top, bottom{'\n'}</code></pre>
        </article>
      </B>
    </V>
    <B center pad>
      <T use='overline'>Made with &hearts; by <a href='https://github.com/konsumer'>konsumer</a></T>
    </B>
  </V>
)

ReactDOM.render(<App />, document.getElementById('root'))
