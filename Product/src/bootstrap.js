import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { createMemoryHistory, createBrowserHistory } from 'history';
 
let products = [{
  name:"levis",
  price:'1599'
},{  
  name:"Gap",
  price:'1399'
},{ 
  name:"Gucci",
  price:'2299'
},{  
  name:"CK",
  price:'1799'
},{ 
  name:"NYC",
  price:'499'
}]
const mount = (el,{props, onNavigate,onClick, defaultHistory, initialPath}) => {
    const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });
    // console.log(onSignIn);
    ReactDOM.render (
        <App productList={props?.productList?props.productList:products} onClick={onClick} setProductList={props?.setProductList} />,
        el
    );

    return {
        onParentNavigate({ pathname: nextPathname }) {
          const { pathname } = history.location;
    
          if (pathname !== nextPathname) {
            history.push(nextPathname);
          }
        },
      };
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_product-dev-root');

    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() });
    }
}

export {
    mount
}
