import './App.css'
import Footer from './components/Footer'
import Manager from './components/Manager'
import NavBar from './components/NavBar'

function App() {

  return (
   <>
   <NavBar/>
   <div className='min-h-[80vh]'>
   <Manager/>
   </div>
   <Footer/>
   </>
  )
}

export default App
