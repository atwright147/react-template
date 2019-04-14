import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import { DataLoader } from '../../../utils/DataLoader';
import * as listActions from '../../../actions/listActions';

import Home from '../../Home';
import List from '../../List';
import UserForm from '../../Forms/UserForm';
import AddressForm from '../../Forms/AddressForm';
import AnotherView from '../../AnotherView';
import NoMatch from '../../NoMatch';

const error = () => () => console.error('error');

const MainLayout = () => (
    <div>
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/list">List</Link>
                <Link to="/user-form">User Form</Link>
                <Link to="/address-form">Address Form</Link>
                <Link to="/another-view">Another View</Link>
                <Link to="/does-not-exist">A view that doesn&rsquo;t exist</Link>
            </nav>
        </header>
        <main>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/list" component={ DataLoader(List, listActions.updateListItems, error) } />
                <Route exact path="/user-form" component={UserForm} />
                <Route exact path="/address-form" component={AddressForm} />
                <Route exact path="/another-view" component={AnotherView} />
                <Route path="*" component={NoMatch} />
            </Switch>
        </main>
        <footer>
            Footer
        </footer>
    </div>
);

export default MainLayout;
