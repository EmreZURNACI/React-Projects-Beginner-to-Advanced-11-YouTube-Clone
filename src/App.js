import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import VideoDetail from './Pages/VideoDetail'
import YoutubeLayout from './Pages/YoutubeLayout'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<YoutubeLayout />} >
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/VideoDetail/:id" element={<VideoDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
