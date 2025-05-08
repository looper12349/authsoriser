import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { RecoilRoot } from 'recoil';
import { RouterProvider } from 'react-router-dom';
import router from './routes/AppRoutes';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  )
}

export default App
