import '@/styles/contact.css';

export const Contact = () => {
    return (
        <div className="contact-container">
            <section className="contact-section">
                <h2>Contact</h2>
                <p>Feel free to send me a message about past or future projects!</p>
                <form className="contact-form">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message"></textarea>
                    <button type="submit">Submit</button>
                    <p id="contact-error">ERROR: all fields must be valid to continue!</p>
                </form>
            </section>
        </div>
    )
}