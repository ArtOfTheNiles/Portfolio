import React from 'react';
import '@/styles/contact.css';

const placeholders = {
    name: 'Winner-in-Chief',
    email: 'you@email.com',
    message: 'Type your message here'
}

export const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = React.useState({
        name: false,
        email: false,
        message: false,
        submit: false,
        dummyText: false
    });
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    const validateName = () => {
        const isPlaceholder = formData.name === placeholders.name;
        const isEmpty = formData.name.trim() === '';

        setErrors(prev => ({
            ...prev,
            name: isEmpty,
            dummyText: isPlaceholder && !isEmpty
        }));
        setTimeout(() => {
            setErrors(prev => ({ ...prev, name: false }));
        }, 5000);
    }

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isPlaceholder = formData.email === placeholders.email;
        const isEmpty = formData.email.trim() === '';
        const isValidEmail = emailRegex.test(formData.email);

        setErrors(prev => ({
            ...prev,
            email: isEmpty && !isValidEmail,
            dummyText: isPlaceholder && !isEmpty
        }));
        setTimeout(() => {
            setErrors(prev => ({ ...prev, email: false }));
        }, 5000);
    }

    const validateMessage = () => {
        const isPlaceholder = formData.message === placeholders.message;
        const isEmpty = formData.message.trim() === '';

        setErrors(prev => ({
            ...prev,
            message: isEmpty,
            dummyText: isPlaceholder && !isEmpty
        }));
        setTimeout(() => {
            setErrors(prev => ({ ...prev, message: false }));
        }, 5000);
    }

    const validateForm = () => {
        validateName();
        validateEmail();
        validateMessage();
        return !errors.name && !errors.email && !errors.message && !errors.dummyText;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        if (errors[e.target.name as keyof typeof errors]) {
            setErrors(prev => ({
                ...prev,
                [e.target.name]: false,
                dummyText: false
            }));
        }
    };

    const submitForm = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) {
            setErrors(prev => ({ ...prev, submit: true }));
            setTimeout(() => {
                setErrors(prev => ({ ...prev, submit: false }));
            }, 5000);
            return;
        }

        setLoading(true);

        try {
            const scriptUrl = import.meta.env.VITE_CONTACT_SCRIPT;

            if (!scriptUrl) {
                throw new Error('Contact script environment variable is not defined.');
            }
            
            await fetch(scriptUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                body: JSON.stringify(formData),
                mode: 'no-cors'
            });
            
            setSuccess(true);
            
            setFormData({
                name: '',
                email: '',
                message: ''
            });
            
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrors(prev => ({ ...prev, submit: true }));

            setTimeout(() => {
                setErrors(prev => ({ ...prev, submit: false }));
            }, 5000);
        } finally {
            setLoading(false);
        }
    }


    return (
        <div className="contact-container">
            <section id="contact" className="contact-section">
                <h2 className="section-title contact">Contact</h2>
                <p>I look forward to hearing about past, present and future projects. Let's make something great!</p>
                { success && (
                    <div className="success-message">
                        <h3>Success!</h3>
                        <p>Thanks for your message! I'll reach out to you soon.</p>
                        <button className="form-submit-button" onClick={() => setSuccess(false)}>Send another message</button>
                    </div>
                )}
                { !success && (
                    <form className="contact-form" onSubmit={submitForm}>
                        <label htmlFor="name">Name:</label>
                        <input type="text"
                        id="name"
                        name="name"
                        placeholder={placeholders.name}
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={validateName}
                        />
                        { errors.name && 
                            <p id="empty-name-error" className="error">
                                Please enter your name to continue!
                            </p>
                        }
                        <label htmlFor="email">Email:</label>
                        <input type="email"
                        id="email"
                        name="email"
                        placeholder={placeholders.email}
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={validateEmail}
                        />
                        { errors.email &&
                            <p id="email-error" className="error">
                                Please enter a valid email address!
                            </p>
                        }
                        <label htmlFor="message">Message:</label>
                        <textarea
                        id="message"
                        name="message"
                        placeholder={placeholders.message}
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={validateMessage}>
                        </textarea>
                        { errors.message &&
                            <p id="empty-message-error" className="error">
                                Please enter a message to continue!
                            </p>
                        }
                        { errors.dummyText &&
                            <p id="dummy-text-error" className="error">
                                Hey, be sure to enter your own message to continue!
                            </p>
                        }
                        <button type="submit" className="form-submit-button" disabled={loading}>
                            { loading ? 'Sending...' : 'Submit'}
                        </button>
                        { errors.submit &&
                            <p id="submit-error" className="error">
                                Oops, there was an error submitting your message. Please try again later.
                            </p>
                        }
                    </form>
                )}
            </section>
        </div>
    )
}