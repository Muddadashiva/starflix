// src/App.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './Authentication/Landing';
import HomePage from './Pages/HomePage';
import MoviePage from './Pages/MoviePage';
import TvshowsPage from './Pages/TvshowsPage';
import Popular from './Pages/Popular';
import Profile from './Pages/Profile';
import Breadcrumbs from './Components/Breadcrumbs';
import Header from './Components/Header';
import Rating from './Components/Rating';
// import Search from './Components/Search';  


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing / Home */}
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<HomePage />} />

        {/* Movies Page */}
        <Route
          path="/movie"
          element={
            <>
              <Header />
              <Breadcrumbs title="Movies" />
              <MoviePage />
            </>
          }
        />

        {/* TV Shows Page */}
        <Route
          path="/shows"
          element={
            <>
              <Header />
              <Breadcrumbs title="TV Shows" />
              <TvshowsPage />
            </>
          }
        />

        {/* New & Popular Page */}
        <Route
          path="/popular"
          element={
            <>
              <Header />
              <Breadcrumbs title="New & Popular" />
              <Popular />
            </>
          }
        />
         <Route
          path="/profile"
          element={
            <>
              <Header />
              <Breadcrumbs title="DIGIT IT PROFILE" />
              <Profile/>
            </>
          }
        />

        {/* Rating Page */}
        <Route
         path="/rating/:id"  element={
          <>
        
         <Rating/>
         </>
         }
          />

        {/* Profile Page */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
