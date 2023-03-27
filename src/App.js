import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import MyFriends from './components/MyFriends/MyFriends';
import { Route, BrowserRouter, Routes } from 'react-router-dom';


const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar usersData={props.state.messagesPage.usersData} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/profile" element={<Profile
              postData={props.state.profilePage.postData}
              addPost={props.addPost} />} />
            <Route path="/messages" element={<Messages usersData={props.state.messagesPage.usersData} textData={props.state.messagesPage.textData} />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/myfriends' element={<MyFriends usersData={props.state.messagesPage.usersData} />} />
          </Routes>
        </div>
      </div >
    </BrowserRouter>
  );
}

export default App;
