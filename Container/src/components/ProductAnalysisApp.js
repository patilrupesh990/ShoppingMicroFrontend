import { mount } from 'productsAnalysis/productAnalysisApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default (props) => {
    const ref = useRef(null);
    const history = useHistory();
  
    useEffect(() => {
      const { onParentNavigate } = mount(ref.current,{
        initialPath: history.location.pathname,
        onNavigate: ({ pathname: nextPathname }) => {
          const { pathname } = history.location;
  
          if (pathname !== nextPathname) {
            history.push(nextPathname);
          }
        },
        props,
      });
      history.listen(onParentNavigate);
    },[props.productList,props.chartdata]);
  
    return <div ref={ref} />;
  };