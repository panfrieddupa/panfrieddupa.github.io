import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import social from '../res/socials'

window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')) {
        form.reset()
    }
}

function ContactPage() {
    const [state, handleSubmit] = useForm('mdojnnel')
    if (state.succeeded) {
        return <div className='px-8 pt-12 pb-28'>
            <p className='p-8 bg-bt_dark_blue bg-opacity-30 text-bt_light_blue'>
                Message sent!
                <br />
                <a href='/' className='font-semibold hover:text-bt_pink'>Click here to return to the home page</a> or check out my other social media for more!
                </p>
                <div className='social-container flex justify-evenly py-12'>{
            social.map(socials =>
                <a href={socials.url} target='blank'>
                    <img src={socials.img} alt={socials.alt} className='social-icon w-14 md:w-20 hover:animate-spin' />
                </a>
            )
        }
        </div>
        </div>
    }
    return (
        <div className='w-full sm:w-8/12 md:w-7/12 mx-auto py-2'>
            <div className='mb-6 text-bt_dark_blue font-fira-sans bg-bt_pink py-4 text-center'>
            <h2 className='text-2xl md:text-4xl font-semibold'>Looking to reach out?</h2>
            <h3 className=''>Use the form below to send me a message!</h3>
        </div>

        <form onSubmit={handleSubmit}>

            <input type='text' name='_gotcha' className='hidden' />

            <div className='pb-4'>
                <label htmlFor='name' className='font-fira-code text-bt_light_blue text-md md:text-lg font-semibold'>
                    Your Name
                </label>
                <input id='name' className='w-full p-2' type='name' name='name' required />
                <ValidationError
                    prefix='Name'
                    field='name'
                    errors={state.errors} />
            </div>

            <div className='pb-4'>
                <label htmlFor='email' className='font-fira-code text-bt_light_blue text-md md:text-lg font-semibold'>
                    Your Email
                </label>
                <input id='email' className='w-full p-2' type='email' name='email' required />
                <ValidationError
                    prefix='Email'
                    field='email'
                    errors={state.errors} />
            </div>

            <div className='pb-4'>
            <label htmlFor='message' className='font-fira-code text-bt_light_blue text-md md:text-lg font-semibold'>
                    Your Message
                </label>
                <textarea id='message' className='w-full p-2 resize-none h-24' name='message' required />
                <ValidationError
                    prefix='Message'
                    field='message'
                    errors={state.errors} />
                    
            <button className='w-full py-2 bg-bt_dark_blue text-lg font-fira-code font-semibold text-bt_pink hover:bg-bt_pink hover:text-bt_dark_blue' type='submit' disabled={state.submitting}>
                Send Message
            </button>
            </div>

        </form>
        </div>
    )
}

export default ContactPage;