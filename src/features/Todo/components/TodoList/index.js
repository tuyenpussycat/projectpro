import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';
TodoList.propTypes = {
    todoList: PropTypes.array,
    clickVao: PropTypes.func,
};
TodoList.defaultProps = {
    todoList: [],
    clickVao: null,
};

function TodoList({ todoList, clickVao }) {
    const Clickde = (a, idx) => {
        if (!clickVao) return;
        clickVao(a, idx);
    }
    return (

        <ul className='todoList'>
            {todoList.map((a, idx) => (
                <li key={a.id}
                    className={classnames({

                        completed: a.status === "completed"
                    })}
                    onClick={() => Clickde(a, idx)}
                >
                    {a.title}</li>
            ))}
        </ul>

    );
}

export default TodoList;