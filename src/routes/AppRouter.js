
import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddDashboardPage from '../components/AddDashboardPage';
import EditPage from '../components/EditPage';
import HelpPage from '../components/HelpPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            {/*// Potrzebujemy switcha, aby poprawnie uzyskać 404*/}
            <Switch>
                {/*// exact oznacza, ze tylko dla '/' czyli strony głównej wczyta się jedna rzecz, bo generalnei route nie dba co jest dalej po '/' */}
                <Route exact={true} path='/' component={ExpenseDashboardPage} />
                <Route path='/create' component={AddDashboardPage} />
                {/*Do edit, możemy za pomocą :id rpzekazać dynaminczie jakiś parametr w URL*/}
                <Route path='/edit/:id' component={EditPage} />
                <Route path='/help' component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;