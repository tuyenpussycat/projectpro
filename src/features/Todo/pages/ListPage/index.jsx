import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useRouteMatch } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import TodoFrom from '../../components/TodoFrom';
ListPage.propTypes = {

};

function ListPage(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed',
        },
        {
            id: 3,
            title: 'Code',
            status: 'new',
        },
    ];
    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();
    const [todoList, setTodoList] = useState(initTodoList);
    const [filterStatus, setFilterStatus] = useState(() => {
        const params = queryString.parse(location.search);
        return params.status || "all";
    });
    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilterStatus(params.status || "all");

    }, [location.search]);
    const handleTodoClick = (a, idx) => {
        const newTodoList = [...todoList];

        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new'
        };
        setTodoList(newTodoList);
    }
    const handleShowAllClick = () => {
        // setFilterStatus('all');
        const queryParams = { status: 'all' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    }
    const handleShowCompletedClick = () => {
        // setFilterStatus('completed');
        const queryParams = { status: 'completed' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    }
    const handleShowNewClick = () => {
        // setFilterStatus('new');
        const queryParams = { status: 'new' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    }

    const renderedTodoList = todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status);
    const handleTodoFormSubmit = (value) => {
        console.log('From submit:', value);
        const newTodo = {
            id: todoList.length + 1,
            title: value.title,
            status: "new",
        };
        const newTodoList = [...todoList, newTodo];
        setTodoList(newTodoList)
    };

    return (
        <div>
            <h3>To do something</h3>
            <TodoFrom onSubmit={handleTodoFormSubmit}></TodoFrom>
            <h3>TodoList</h3>
            <TodoList todoList={renderedTodoList} clickVao={handleTodoClick} ></TodoList>

            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>ShowCompleted</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>

    );
}

export default ListPage;