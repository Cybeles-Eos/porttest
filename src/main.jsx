import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Nav from './components/header/nav.jsx'
import Project from './pages/projects/project.jsx'
import About from './pages/about/about.jsx'
import Home from './pages/home/home.jsx'


createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route index element={<Home />} />
        <Route path='/project' element={<Project/>} />
        <Route path='/about' element={<About />} />
      </Route>
    </Routes>
  </HashRouter>
)
