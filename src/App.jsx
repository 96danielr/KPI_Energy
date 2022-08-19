
import { HashRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import {Home,Mp6,Mp7,EE,Gas,Costs} from "./pages"
import NavBar from './components/NavBar'


function App() {
  

  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        <Routes>
            <Route path='/' element={<Home />}/>

            <Route path='/Mp6' element={<Mp6 />}/>
            <Route path='/Mp7' element={<Mp7 />}/>
            <Route path='/EE' element={<EE />}/>
            <Route path='/Gas' element={<Gas />}/>
            <Route path='/Costs' element={<Costs />}/>
        </Routes>

      </HashRouter>
     
    </div>
  )
}

export default App
