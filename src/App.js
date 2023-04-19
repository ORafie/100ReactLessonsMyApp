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

/*
<Routes>
  <Route path="/" element={
    <Profile
    profilePage={props.state.profilePage}
    dispatch={props.dispatch}
    />}
  />
  <Route path="/profile" element={
    <Profile
      profilePage={props.state.profilePage}
      dispatch={props.dispatch}
    />}
  />
  <Route path="/messages" element={
    <MessagesContainer
    messagesPage={props.state.messagesPage}
    usersData={props.state.messagesPage.usersData}
    textData={props.state.messagesPage.textData}
    dispatch={props.dispatch}
    newMessageForTextData={props.state.messagesPage.newMessageForTextData}
    />}
  />
  <Route path='/news' element={
    <MyNews
    newsPage={props.state.newsPage}
    newsData={props.state.newsPage.newsData}
    dispatch={props.dispatch}
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
*/
