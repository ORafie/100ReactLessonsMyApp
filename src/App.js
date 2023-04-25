import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import MessagesContainer from './components/Messages/MessagesContainer';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import MyFriendsContainer from './components/MyFriends/MyFriendsContainer';
import { Route, Routes } from 'react-router-dom';
import MyNewsContainer from './components/News/NewsContainer';

const App = (props) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar /*state={props.store.getState()}*/ />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path="/" element={<Profile />}
          />
          <Route path="/profile" element={<Profile />}
          />
          <Route path="/messages" element={<MessagesContainer />}
          />
          <Route path='/news' element={<MyNewsContainer />}
          />
          <Route path='/music' element={<Music />}
          />
          <Route path='/settings' element={<Settings />}
          />
          <Route path='/myfriends' element={<MyFriendsContainer />}
          />
        </Routes>
      </div>
    </div >
  );
}

export default App;
