import React, {lazy, Suspense, useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ProductApp from './components/ProductApp'
import ProductAnalysisApp from './components/ProductAnalysisApp'

// const ProductAppLazy = lazy(() => import ('./components/ProductApp'));
// const ProductAnalysisAppLazy = lazy(() => import ('./components/ProductAnalysisApp'));

const useStyles = makeStyles((theme) => ({
    '@global': {
        a: {
            textDecoration: 'none'
        }
    },
    homeContainer: {
        display: 'flex',
        height: '100vh'
    },
    chartContainer: {
        position: 'fixed',
        right: '10px',
        width: '30%'
    },
    productContainer: {
        width: '70%'
    }

}));

let products = [
    {
        name: "levis",
        price: '1599'
    },
    {
        name: "Gap",
        price: '1399'
    },
    {
        name: "Gucci",
        price: '2299'
    },
    {
        name: "CK",
        price: '1799'
    }, {
        name: "NYC",
        price: '499'
    }
]
const chartOptions = {
    options: {
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: [
                "levis",
                "Gap",
                "Gucci",
                "CK",
                "NYC"
            ]
        }
    },
    series: [
        {
            name: "series-1",
            data: [
                0,
                0,
                0,
                0,
                0
            ]
        }
    ]
}

function App() {
    const classes = useStyles();
    const [productList, setProductList] = useState(products);
    const [chartdata, setChartData] = useState(chartOptions)
    return (
        <div className={
            classes.homeContainer
        }>
            <BrowserRouter>

                <Switch>
                    <Route path="/">
                        <div className={
                            classes.productContainer
                        }>
                            <ProductApp productList={productList}
                                setProductList={setProductList}
                                setChartData={setChartData}
                                chartdata={chartdata}/>
                        </div>
                        <div className={
                            classes.chartContainer
                        }>
                            <ProductAnalysisApp productList={productList}
                                setProductList={setProductList}
                                chartdata={chartdata}/>
                        </div>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
