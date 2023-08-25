import './App.css'
import Header from './components/Header/Header'
import MainBlock from './components/Main/MainBlock'
import { Routes, Route } from 'react-router-dom'
import { filmData } from './mockData'
import { AboutFilm } from './components/about-film/about-film'
import FilmList from './components/FilmList/FilmList'

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
          {filmData.map(item => (
            <Route
              path={`${item.id}`}
              key={item.id}
              element={<AboutFilm item={item} />}
            />
          ))}

          <Route path='/' element={<MainBlock />} />
        </Routes>
    </div>
  )
}

export default App
