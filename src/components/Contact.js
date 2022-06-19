// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const Contact = (item) => {
    return (
        <div className='devFlex'>
            <section className='sectionFlex'>
                <img className='photo' src = {item.data.photo}></img>
                <br/>
                <span>{item.data.name}</span><br/>
                <span>{item.data.phone}</span><br/>
                <span>{item.data.email}</span>
            </section>
        </div>
    )
}

export default Contact;