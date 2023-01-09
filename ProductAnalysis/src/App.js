import React, { useEffect } from 'react'
import ProductChart from './Components/ProductChart'

function App(props) {
  useEffect(()=>{

  },[props.productList])
  return (
   <ProductChart productList={props.productList} chartOptions={props.chartOptions}/>
  )
}

export default App