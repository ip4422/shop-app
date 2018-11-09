import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Search from './components/Search'
import Curt from './components/Curt'

export const routes = [
  {
    isNavBar: true,
    isExact: true,
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    isNavBar: true,
    path: '/search',
    name: 'Search',
    component: Search,
    isPrivate: true
  },
  {
    path: '/curt',
    name: 'Curt',
    component: Curt
  },
]

