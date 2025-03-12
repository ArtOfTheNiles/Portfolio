import React from 'react';
import '@/styles/contact.css';

//TODO: wire up the form to send to database
//TODO: add a success message when form is submitted
//TODO: Error logic for invalid form fields

function validateEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export const Contact = () => {
    const name = (document.getElementById('name') as HTMLInputElement);
    const email = (document.getElementById('email') as HTMLInputElement);
    const message = (document.getElementById('message') as HTMLInputElement);
    const emailError = document.getElementById('email-error');
    const submitError = document.getElementById('submit-error');
    const emptyNameError = document.getElementById('empty-name-error');
    const emptyEmailError = document.getElementById('empty-email-error');
    const emptyMessageError = document.getElementById('empty-message-error');

    const validateForm = () => {
        validateEmail(email.value) ? emailError?.classList.add('hidden') : emailError?.classList.remove('hidden');
        name.value === '' ? emptyNameError?.classList.remove('hidden') : emptyNameError?.classList.add('hidden');
        email.value === '' ? emptyEmailError?.classList.remove('hidden') : emptyEmailError?.classList.add('hidden');
        message.value === '' ? emptyMessageError?.classList.remove('hidden') : emptyMessageError?.classList.add('hidden');
    }

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.value === '' || email.value === '' || message.value === '' || !validateEmail(email.value)) {
            submitError?.classList.remove('hidden');
        } else {
            submitError?.classList.add('hidden');
        }
    }


    return (
        <div className="contact-container">
            <section id="contact" className="contact-section">
                <h2 className="section-title contact">Contact</h2>
                <p>I look forward to hearing about past, present and future projects. Let's make something great!</p>
                <form className="contact-form">
                    <label htmlFor="name">Name:</label>
                    <input type="text" 
                    id="name" 
                    name="name" 
                    defaultValue={'Winner-in-Chief'}
                    onMouseLeave={validateForm}
                    />
                        <p id="empty-name-error" className="error hidden">Please enter your name to continue!</p>
                    <label htmlFor="email">Email:</label>
                    <input type="email" 
                    id="email" 
                    name="email" 
                    defaultValue={'you@email.com'}
                    onMouseLeave={validateForm}
                    />
                        <p id="email-error" className="error hidden">Please enter a valid email address!</p>
                        <p id="empty-email-error" className="error hidden">Please enter your email to continue!</p>
                    <label htmlFor="message">Message:</label>
                    <textarea 
                    id="message" 
                    name="message" 
                    defaultValue={'Type your message here'}
                    onMouseLeave={validateForm}>
                    </textarea>
                        <p id="empty-message-error" className="error hidden">Please enter a message to continue!</p>
                    <button type="submit" onSubmit={submitForm}>Submit</button>
                        <p id="submit-error" className="error hidden">ERROR: all fields must be valid to continue!</p>
                </form>
            </section>
        </div>
    )
}