import React from 'react';
import insta from './insta.png';
import github from './github.png';
import linkedIn from './link.png';
import { Link } from "react-router-dom";


export const Footer = () => {
    return (
        <>
            <footer className="bg-dark text-light py-3">
                <ul className='d-flex align-list'>
                    <li><Link  to='https://github.com/debasmitadas0106' target="_blank" rel="noreferrer"><img className="img-logo" src={github} alt="github logo"></img></Link></li>
                    <li><Link  to='https://www.instagram.com/coder__d/' target="_blank" rel="noreferrer"><img className="img-logo" src={insta} alt="insta logo"></img></Link></li>
                    <li><Link  to='https://www.linkedin.com/in/debasmitadas0106/' target="_blank" rel="noreferrer"><img className="img-logo" src={linkedIn} alt="linkedin logo"></img></Link></li>
                </ul>
                <p className="text-center">
                    &copy; MyTodosList.com by Debasmita Das
                </p>
            </footer>
        </>
    )
}
