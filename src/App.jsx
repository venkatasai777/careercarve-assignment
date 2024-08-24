import './index.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className='landingPage'>
      <Navbar />
      <div>
        <Sidebar />
      </div>
    </div>
  )
}

export default App
