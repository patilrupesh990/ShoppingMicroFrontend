import React from 'react'
import Landing from './components/Landing'

function App(props) {
  return (
    <div>
      <Landing onClick={props.onClick} productList={props.productList} setProductList={props.setProductList}/>
    </div>
  )
}

export default App