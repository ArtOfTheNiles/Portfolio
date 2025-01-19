import '@/styles/contact.css';

//TODO: wire up the form to send to database
//TODO: add a success message when form is submitted
//TODO: Error logic for invalid form fields
export const Contact = () => {
    return (
        <div className="contact-container">
            <section className="contact-section">
                <h2>Contact</h2>
                <p>I look forward to hearing about past, present and future projects. Let's make something great!</p>
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