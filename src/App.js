import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Routes, Route } from 'react-router-dom'

import { Layout } from './components/Layout'
import { Home } from './pages/Home';
import { News } from './pages/News';
import { SingleNews } from './pages/SingleNews';
import { CreateNewsPost } from './pages/CreateNewsPost';
import { EditNewsPost } from './pages/EditNewsPost';
import { Features } from './pages/Features';
import { LoginPage } from './pages/LoginPage'
import { NotFoundPage } from './pages/NotFoundPage';

import { RequireAuth } from './hoc/RequireAuth'
import { AuthProvider } from './hoc/AuthProvider'

function App() {
  return (
    <>
    <AuthProvider>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="news" element={<News/>}/>
            <Route path="news/:id" element={<SingleNews/>}/>
            <Route path="news/new" element={
              <RequireAuth>
                <CreateNewsPost/>
              </RequireAuth>}/>
            <Route path="news/:id/edit" element={
              <RequireAuth>
                <EditNewsPost/>
              </RequireAuth>}/>
            <Route path="features" element={<Features/>}/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="*" element={<NotFoundPage/>} />
          </Route>
          
        </Routes>
    </AuthProvider>
      
    </>
  );
}

export default App;
