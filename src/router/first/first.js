const First = () => import(/* webpackChunkName: "第一" */'@/components/first/first')
const one = [{
  path: 'first',
  component: First,
  name: 'first',
  meta: { title: 'first', isHasBar: true }
}]
export default one
