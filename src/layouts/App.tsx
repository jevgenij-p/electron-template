import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import PageLayout from './PageLayout'
import Main from '../pages/main/Main'
import NotFound from '../pages/notfound/NotFound'
import LazyLoading from '../components/loading/LazyLoading'

const Home = React.lazy(() => import('../pages/home/Home'))
const Login = React.lazy(() => import('../pages/login/Login'))

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LazyLoading><Home /></LazyLoading>} />
        <Route path="login" element={<LazyLoading><Login /></LazyLoading>} />

        <Route path="*" element={<NotFound />} />
      </Route>
      <Route element={<PageLayout />}>
        <Route path="/main" element={<Main />} />
      </Route>
    </Routes>
  )
}