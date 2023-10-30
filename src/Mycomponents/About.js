import React from 'react'
import debasmitaImage from './Debasmita.jpeg';

export const About = () => {
    const cardStyle = {
        width: '18rem',
      };
    return (
        <div className='centered-align'>
        <div className="card" style={cardStyle}>
            <img src={debasmitaImage} className="card-img-top" alt="author"/>
                <div className="card-body">
                    <p className="card-text">Hi! I am <b>Debasmita Das</b>.
                    I am a <b>Junior Developer</b> working on the MERN stack. I also have the knowledge of Bootstrap.
                    If you like my App, hit it with 5 stars.Incase of any additional features, mail at the below email or contact in my socials.</p>
                </div>
        </div>
        </div>
    )
}