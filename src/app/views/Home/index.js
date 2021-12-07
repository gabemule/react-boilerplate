import React from 'react'
import { useDispatch } from 'react-redux'

// assets
import MyImage from '@/assets/img/dog.jpg'

// components
import { Bar, Button, Foo } from '@gabemule/react-boilerplate'

// InitialSetting store
import { setInitialSetting, useInitialSetting } from '@/store/InitialSetting'

const Home = () => {
  const dispatch = useDispatch()

  const { isInitialized } = useInitialSetting()

  return (
    <div className={'home'}>
      <Bar>
        <h1> Home </h1>
      </Bar>
      <Foo>
        <Button
          label={'Click Me'}
          onClick={() => {
            alert(`Clicked! Change isInitialized to: ${!isInitialized}`)
            dispatch(setInitialSetting(!isInitialized))
          }}
          primary={true}
          size={'large'}
        />
      </Foo>
      <Bar>
        <img alt={'home image'} src={MyImage} />
      </Bar>
    </div>
  )
}

export default Home
