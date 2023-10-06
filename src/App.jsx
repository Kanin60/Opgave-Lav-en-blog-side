import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { MainLayout } from "./layout/MainLayout";
import { Home } from "./pages/Home/Home";
import { AllBlogs } from './pages/AllBlogs/AllBlogs'
import { OneBlog } from './pages/OneBlog/OneBlog'
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";
import { Search } from "./pages/Search/Search";


function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='/blogs' element={<AllBlogs />} />
            <Route path='/search' element={<Search />} />
            <Route path='/details' element={<OneBlog />} />
            <Route path='/*' element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
