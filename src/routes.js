import Home from './components/Home'
// import Signup from './components/Signup'
import Search from './components/Search'
import Curt from './components/Curt'
import LoginContainer from './containers/LoginContainer'

export const routes = [
  {
    isNavBar: true,
    isExact: true,
    isDefaultPage:true,
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    isNavBar: true,
    path: '/login',
    name: 'Login',
    isSignup: false,
    component: LoginContainer
  },
  {
    isNavBar: true,
    path: '/signup',
    name: 'Signup',
    isSignup: true,
    component: LoginContainer
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

