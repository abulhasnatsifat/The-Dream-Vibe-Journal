import Welcome from './components/Intro/Welcome';
import Home from './components/Home/Home';
import PostView from './components/PostView/PostView';
import PostCategory from './components/PostCategory/PostCategory';
import Newslater from './components/Newslater/Newslater';
import Story from './Pages/Story/Story';
import Profile from './Auth/Profile/Profile';
import Messages from './Auth/Messages/Messages';
import Notification from './Auth/Notification/Notification';
import Login from './Auth/Login/Login';
import Updated from './Auth/Updated/Updated';
import SignUp from './Auth/Sign_Up/Sign_Up';
import Search from './Pages/Search/Search';
import Services from './Pages/Services/Services';
import Feedback from './Pages/Feedback/Feedback';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/postview/:id" element={<PostView />} />
        <Route path="/postcategory" element={<PostCategory />} />
        <Route path="/newslater" element={<Newslater />} />
        <Route path="/feedback/:id" element={<Feedback />} />
        <Route path="/story" element={<Story />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/login" element={<Login />} />
        <Route path="/updated" element={<Updated />} />
    
        <Route path="/signup" element={<SignUp />} />
        <Route path="/search" element={<Search />} />
        <Route path="/services" element={<Services />} />
        <Route path="/feedback/:id" element={<Feedback />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;