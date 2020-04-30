import Taro, { FunctionComponent } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { useDispatch } from '../../common/index'
import './index.scss'

import useEffect = Taro.useEffect

interface Props {
  testNum: number
}

const Index: FunctionComponent<Props> = (props) => {
  const dispatch = useDispatch()
  console.log('dispatch', dispatch)
  useEffect(() => {
    console.log('props', props)
  }, [props])

  return (
    <View className='index'>
      <Button className='add_btn' onClick={() => dispatch.test.addOne()}>+</Button>
      <Button className='dec_btn' onClick={() => dispatch.test.minusOne()}>-</Button>
      <View><Text>{props.testNum}</Text></View>
      <View><Text>Hello, World</Text></View>
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '首页'
}

export default connect(({ test = {} }) => {
  return test
})(Index)

