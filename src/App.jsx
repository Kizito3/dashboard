
import './App.css'
import Main from './components/main/Main'
import RightSide from './components/rightside/RightSide'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  return (
    <div className='App'>
      <div className="AppGlass">
        <Sidebar />
        <Main />
        <RightSide />
      </div>
    </div>
  )
}
export default App
