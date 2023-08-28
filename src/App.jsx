import Home from "./components/home";
// import Explore from "./components/Explore/explore";
import News from "./components/Explore/news";
import Explrbtn from "./components/explrbtn";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="w-screen">
        <Router>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/news" element={<News />} />
          </Routes>
          {/* {location.pathname !== '/news' && (
            <Link to="/news" element={<News />} >
              <Explore />
            </Link>
          )} */}
          <Explrbtn />
        </Router>
      </div>
    </>
  )
}

export default App
