import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home/Home';
import Dashboard from './admin/Dashboard/Dashboard';
import ClientsList from './admin/Clients/ClientsList';
import ClientsNew from './admin/Clients/ClientsNew';
import ProductsList from './admin/Products/ProductsList';
import ProductsNew from './admin/Products/ProductsNew';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/admin' exact component={Dashboard} />
                <Route path='/admin/clientes' exact component={ClientsList} />
                <Route path='/admin/clientes/novo' exact component={ClientsNew} />
                <Route path='/admin/produtos' exact component={ProductsList} />
                <Route path='/admin/produtos/novo' exact component={ProductsNew} />
            </Switch>
        </BrowserRouter>
    )
}