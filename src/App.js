import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profive';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
    </div >
  );
}

export default App;
