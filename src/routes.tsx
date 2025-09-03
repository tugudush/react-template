import { lazy } from 'react'

import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'

import SuspenseRoute from './components/suspenseRoute'

const HomePage = lazy(() => import('./pages/home'))
const ErrorPage = lazy(() => import('./pages/error'))

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <SuspenseRoute component={HomePage} />,
    },
    {
      path: '*',
      element: <SuspenseRoute component={ErrorPage} />,
    },
  ])
  return <RouterProvider router={router} />
}
