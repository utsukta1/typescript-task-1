import './App.css'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import MainPage from './views/MainPage/MainPage'
import Toggle from './views/Toggle/toggle'
import Navbar from './views/Navbar/Navbar'
import Task2 from './views/Task2/task2'
import Task3 from './views/Task3/task3'
import Task4 from './views/Task4/task4'
import Task5 from './views/Task5/task5'
import Task6 from './views/Task6/task6'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar />}>
      <Route index element={<MainPage />} />
      <Route path='toggle' element={<Toggle />} />
      <Route path='tasktwo' element={<Task2 />} />
      <Route path='taskthree' element={<Task3 />} />
      <Route path='taskfour' element={<Task4 />} />
      <Route path='taskfive' element={<Task5 />} />
      <Route path='tasksix' element={<Task6 />} />
    </Route>

  )
)
function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
