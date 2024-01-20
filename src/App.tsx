import './App.css'
import Dropdown from './components/dropdown'

import classes from './temporary/supported-classes'

function App() {
  return (
    <Dropdown options={classes} />
  )
}

export default App
