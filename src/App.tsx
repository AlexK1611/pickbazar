import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyles } from './ui-kit/global'
import { AppLayout } from './layouts/AppLayout/AppLayout.component'
import { Main } from './pages/Main/Main.page'
import { Product } from 'pages/Product/Product.page'
import { NotFound } from './pages/NotFound/NotFound.page'
import { CheckoutRoute } from 'layouts/CheckoutRoute/CheckoutRoute.component'
import { Checkout } from 'pages/Checkout/Checkout.page'

const App: FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AppLayout>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/products/:id' element={<Product />} />
          <Route
            path='/checkout'
            element={
              <CheckoutRoute>
                <Checkout />
              </CheckoutRoute>
            }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}

export default App