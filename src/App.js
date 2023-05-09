import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {Routes, Route} from 'react-router-dom'

import {Layout} from './components/Layout'
import {Home} from './components/Home';
import {News} from './components/News';
import {Features} from './components/Features';
import {NotFoundPage} from './components/NotFoundPage';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="news" element={<News/>}/>
        <Route path="features" element={<Features/>}/>
        <Route path="*" element={<NotFoundPage/>} />
      </Route>
      
    </Routes>
    
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <Navibar/>
    //   </header>
    //   <main>
    //     <
    //   </main>
    // </div>
  );
}

export default App;
