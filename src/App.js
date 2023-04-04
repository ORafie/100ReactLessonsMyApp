import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Messages from './components/Messages/Messages';
import MyNews from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import MyFriends from './components/MyFriends/MyFriends';
import { Route, Routes } from 'react-router-dom';


const App = (props) => {
  console.log(props);

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar usersData={props.state.messagesPage.usersData}
      />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path="/" element={
            <Profile
              profilePage={props.state.profilePage}
              updatePostData={props.updatePostData}
              addPost={props.addPost}
            />}
          />
          <Route path="/profile" element={
            <Profile
              profilePage={props.state.profilePage}
              updatePostData={props.updatePostData}
              addPost={props.addPost}
            />}
          />
          <Route path="/messages" element={
            <Messages
              usersData={props.state.messagesPage.usersData}
              textData={props.state.messagesPage.textData}
            />}
          />
          <Route path='/news' element={
            <MyNews
              newsPage={props.state.newsPage}
              updateNewsData={props.updateNewsData}
              addNews={props.addNews}
              newsData={props.state.newsPage.newsData}
              newTextForNewsData={props.state.newsPage.newTextForNewsData}
            />}
          />
          <Route path='/music' element={<Music />}
          />
          <Route path='/settings' element={<Settings />}
          />
          <Route path='/myfriends' element={
            <MyFriends
              usersData={props.state.messagesPage.usersData}
            />}
          />
        </Routes>
      </div>
    </div >
  );
}

export default App;