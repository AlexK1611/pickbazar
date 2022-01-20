import { FC } from 'react'

// libraries
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// styles
import { GlobalStyles } from './ui-kit/global'

// pages
import { LoginRedirect } from 'pages/LoginRedirect/LoginRedirect.component'
import { Main } from './pages/Main/Main.page'
import { Product } from 'pages/Product/Product.page'
import { NotFound } from './pages/NotFound/NotFound.page'
import { Checkout } from 'pages/Checkout/Checkout.page'
import { Order } from 'pages/Order/Order.page'

// layouts
import { AppLayout } from './layouts/AppLayout/AppLayout.component'
import { CheckoutRoute } from 'layouts/CheckoutRoute/CheckoutRoute.component'
import { OrderRoute } from 'layouts/OrderRoute/OrderRoute.component'

const App: FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AppLayout>
        <Routes>
          { /* TODO: Унифицируй этот компонент. Как создавать к примеру еще один путь для фейсбука - зачем?  */ }
          <Route path='/auth/google/callback' element={<LoginRedirect />} />
          <Route path='/' element={<Main />} />
          <Route path='/products/:id' element={<Product />} />
          <Route
            path='/checkout'
            element={<CheckoutRoute><Checkout /></CheckoutRoute>}
          />
          <Route
            path='/order'
            element={<OrderRoute><Order /></OrderRoute>}
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}

export default App