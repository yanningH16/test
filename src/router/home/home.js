import first from '../first/first'
import two from '../two/two'
// import money from '../money/money'
// import account from '../account/account'
// import complain from '../complain/complain'
const Home = (resolve) => {
  import('@/components/home/home').then((module) => {
    resolve(module)
  })
}
const defaultHome = []
const home = [{
  path: '/home',
  component: Home,
  name: 'home',
  children: [...defaultHome, ...first, ...two]
}]
export default home
