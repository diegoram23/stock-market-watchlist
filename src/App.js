import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'


// pages
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';

// layouts
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} >
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='news' element={<News />} />
      
    </Route>
    
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App