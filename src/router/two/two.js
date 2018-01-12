const Two = () => import(/* webpackChunkName: "第二" */'@/components/two/two')
const two = [{
  path: 'two',
  component: Two,
  name: 'two',
  meta: { title: 'two', isHasBar: true }
}]
export default two
