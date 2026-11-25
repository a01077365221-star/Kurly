import { Routes, Route, BrowserRouter } from 'react-router';
import './pages/css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Newpage from './pages/Newpage';
import Bestpage from './pages/Bestpage';
import Alddlepage from './pages/Alddlepage';
import Benefitpage from './pages/Benefitpage';
import Login from './pages/Login';
import Join from './pages/Join';

function App() {
  return (
    <>
      <BrowserRouter basename="/Kurly">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/new" element={<Newpage />} />
          <Route path="/best" element={<Bestpage />} />
          <Route path="/alddle" element={<Alddlepage />} />
          <Route path="/benefit" element={<Benefitpage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;