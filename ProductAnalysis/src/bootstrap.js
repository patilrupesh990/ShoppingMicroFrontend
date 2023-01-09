import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { createMemoryHistory, createBrowserHistory } from 'history';

const chartOptions = {
  options: {
      chart: {
          id: "basic-bar"
      },
      xaxis: {
          categories: ["levis","Gap","Gucci","CK","NYC"]
      }
  },
  series: [
      {
          name: "series-1",
          data: []
      }
  ]
}
const mount = (el,{props, onNavigate, defaultHistory, initialPath}) => {
    const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });
    ReactDOM.render (
      <App productList={props?.productList} chartOptions={props?.chartdata?props.chartdata:chartOptions}/>,
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
    const devRoot = document.querySelector('#_product-analysis-dev-root');

    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() });
    }
}

export {
    mount
}
