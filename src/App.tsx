import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyles } from './assets/styles/global'
import { BasicLayout } from './layouts/BasicLayout'
import Main from './pages/Main'
import Product from './pages/Product'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <BasicLayout>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/product' element={<Product />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BasicLayout>
    </BrowserRouter>
  )
}

export default App