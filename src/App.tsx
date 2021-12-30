import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyles } from './ui-kit/global'
import { AppLayout } from './layouts/AppLayout/AppLayout.component'
import { Main } from './pages/Main/Main.page'
import { NotFound } from './pages/NotFound/NotFound.page'

const App: FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AppLayout>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}

export default App