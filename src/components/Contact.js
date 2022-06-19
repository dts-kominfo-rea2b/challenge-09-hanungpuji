// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const Contact = ({photo, name,phone,email}) => {
    return (
        <div className='devFlex'>
            <section className='sectionFlex'>
                <img className='photo' src = {photo}></img>
                <br/>
                <span>{name}</span><br/>
                <span>{phone}</span><br/>
                <span>{email}</span>
            </section>
        </div>
    )
}

export default Contact;