import { mount } from 'products/productApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
 
export default (props) => {
    const ref = useRef(null);
    const history = useHistory();
    useEffect(() => {
      const { onParentNavigate } = mount(ref.current, {
        initialPath: history.location.pathname,
        onClick:(data)=>{
          let chartData=props.chartdata;
          props.productList.map((product,index)=>{
            if(data.name===product.name){
              chartData.series[0].data[index]=chartData.series[0].data[index]+1;
            }
          })
          props.setChartData(chartData)
          props.setProductList(data)
        },
        onNavigate: ({ pathname: nextPathname }) => {
          const { pathname } = history.location;
  
          if (pathname !== nextPathname) {
            history.push(nextPathname);
          }
        },
        props,
      });
      history.listen(onParentNavigate);
    },[props.chartData]);
  
    return <div ref={ref} />;
  };