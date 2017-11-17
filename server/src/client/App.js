import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import { fetchCurrentUser } from './actions';

const App = ({ route }) => {
    return (
        <div>
            <Header />
            {renderRoutes(route.routes)}
        </div>
    );
};

export default {
    component: App,
    loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};
// only want dispatch function from redux store, hence the destructure
// arrow function without curly braces has an implicit return