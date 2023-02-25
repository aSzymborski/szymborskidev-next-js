/* eslint-disable react/no-unescaped-entities */
import FormField from '@/components/molecules/FormField/FormField'
import TextareaField from '@/components/molecules/TextareaField/TextareaField'
import { useRouter } from 'next/router'
import styles from '@/pages/contact/contact.module.scss'

export default function Contact() {
    const router = useRouter()

    const handleSubmit = (e:React.SyntheticEvent) => {
        e.preventDefault()
        router.push("thanks")
    }
    return (
        <>
        <main className={`${styles.main} ${styles.container}`}>
            <section className={styles.section}>
                <h1 className={styles.section_title}>Let's <span className={styles.section_title__span}>talk</span></h1>
                <div className={styles.section_wrapper}>
                    <p className={styles.section_text}>
                    Get in touch via the form below, or by emailing
                    <a href="mailto:hello@szymborskidev.com" className={`${styles.section_text__href} ${styles.effectZoom}`}>hello@szymborskidev.com</a>
                    </p>
                    <form  className={styles.form} onSubmit={handleSubmit} action="https://formsubmit.co/b0c4221f22988ead5c93182cd8fab0d2" method="POST">
                        <input type="hidden" name="_subject" value="New email!" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input
                            type="hidden"
                            name="_autoresponse"
                            value="Thank you for your message. I will write back as soon as I can"
                        />
                        <FormField
                        type="text"
                        name='name'
                        placeholder='Enter your name'
                        label="Name"
                        />
                        <FormField
                        type="text"
                        name='email'
                        placeholder='Enter your email address'
                        label="Email"
                        />
                        <TextareaField
                        label="Message"
                        placeholder="Enter your message"
                        name="message"
                        />
                        <button type="submit" className={`${styles.section_button} ${styles.effectZoom}`}>Submit</button>
                    </form>
                </div>
            </section>
        </main>
        </>

    )

}