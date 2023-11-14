import React from 'react'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faCheckCircle);

export const TodoItem = ({ todo, onDelete }) => {

    return (
        <div>

            <div key={todo.sno}>
                <span>
                    {/* <i class="fa-regular fa-circle-check" style="color: #1d285d;"></i> */}
                    <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '8px', cursor:'pointer', color: '#1d285d' }}
                        onClick={() => onDelete(todo)}  />
                    {todo.title}

                </span>
            </div>
        </div>
    );
}