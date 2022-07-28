import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')) {
        form.reset()
    }
}

function ContactPage() {
    const [state, handleSubmit] = useForm('mdojnnel')
    if (state.succeeded) {
        return <p>Message sent!</p>
    }
    return (
        <div className='contact-form'>
            <div className='contact-header'>
            <h2>Looking to reach out?</h2>
            <h3>Use the form below to send me a message!</h3>
        </div>
        <form onSubmit={handleSubmit}>

            <input type='text' name='_gotcha' className='gotcha-hide' />

            <div className='contact-style'>
                <label htmlFor='name'>
                    Name
                </label>
                <input id='name' type='name' name='name' required />
                <ValidationError
                    prefix='Name'
                    field='name'
                    errors={state.errors} />
            </div>

            <div className='contact-style'>
                <label htmlFor='email'>
                    Email
                </label>
                <input id='email' type='email' name='email' required />
                <ValidationError
                    prefix='Email'
                    field='email'
                    errors={state.errors} />
            </div>

            <div className='contact-style'>
            <label htmlFor='message'>
                    Message
                </label>
                <textarea id='message' name='message' required />
                <ValidationError
                    prefix='Message'
                    field='message'
                    errors={state.errors} />
                    
            <button type='submit' disabled={state.submitting}>
                Send Message
            </button>
            </div>

        </form>
        </div>
    )
}

export default ContactPage;