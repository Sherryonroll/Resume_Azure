import './assets/styles.css'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home/Home'

function App() {
  return (
    <div className="wrap-content">
      <Home />
      {/* <Router>
          <Routes>
            <Route path="/" element={<Home />}>
              <Home />
            </Route>
          </Routes>
        </Router> */}
    </div>
  )
}

export default App
