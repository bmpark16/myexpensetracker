import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/signIn';
import Main from './pages/main';



function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<SignIn/>} />
          <Route path="/main" element={<Main />}/>
        </Routes>
      </HashRouter>
    </div>

  );
}

export default App;
