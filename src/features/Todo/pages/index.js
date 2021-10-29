import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../components/TodoList';
import { Route, Switch, useRouteMatch } from 'react-router';
import ListPage from './ListPage';
import DetailPage from './DetailPage';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const match = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route path={match.path} component={ListPage} exact></Route>
                <Route path={`${match.path}/:todoId`} component={DetailPage}></Route>

            </Switch>
        </div>

    );
}

export default TodoFeature;