import React from 'react';
import Header from './components/layout/Header';
import Body from './components/layout/Body';
import Footer from './components/layout/Footer';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Projects from './components/sections/Projects';
import Profile from './components/sections/Profile';

const appRouter = createBrowserRouter([
  {
  path:"/",
  element : (
  <>
  <Header/>
  <Body/>
  </>
)},
 {
  path:"/projects",
  element: (
  <>
  <Header/>
  <Projects/>
  </>
)},
 {
  path:"/profile",
  element: (
  <>
  <Header/>
  <Profile/>
  </>
)}

])


function App() {

  return (
    <>
    <RouterProvider router={appRouter} />

    {/* <Footer/> */}
    </>
  )
}

export default App
