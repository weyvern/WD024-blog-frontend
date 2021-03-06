import { Routes, Route } from 'react-router-dom';
import AuthState from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import Register from './components/Register';
import Layout from './components/Layout';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import About from './components/About';
import SinglePost from './components/SinglePost';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <AuthState>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='post/:id' element={<SinglePost />} />
          <Route path='about' element={<About />} />
          <Route path='protected' element={<ProtectedRoute />}>
            <Route path='new-post' element={<CreatePost />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </AuthState>
  );
};

export default App;
