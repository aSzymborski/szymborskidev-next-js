/* eslint-disable react/no-unescaped-entities */
import FormField from "@/components/molecules/FormField/FormField";
import TextareaField from "@/components/molecules/TextareaField/TextareaField";
import { useRouter } from "next/router";
import styles from "@/pages/contact/contact.module.scss";
import Head from "next/head";
import { useState } from "react";

export default function Contact() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        email: email,
        fullname: fullname,
        message: message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
    router.push("thanks");
  };
  return (
    <>
      <Head>
        <title>Contact SzymborskiDev</title>
        <meta property="og:title" content="Contact SzymborskiDev" key="title" />
      </Head>
      <main className={`${styles.main} ${styles.container}`}>
        <section className={styles.section}>
          <h1 className={styles.section_title}>
            Let's <span className={styles.section_title__span}>talk</span>
          </h1>
          <div className={styles.section_wrapper}>
            <p className={styles.section_text}>
              Get in touch via the form below, or by emailing
              <a
                href="mailto:asz93@icloud.com"
                className={`${styles.section_text__href} ${styles.effectZoom}`}
              >
                asz93@icloud.com
              </a>
            </p>
            <form className={styles.form} onSubmit={handleSubmit} method="POST">
              <input type="hidden" name="_subject" value="New email!" />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_autoresponse"
                value="Thank you for your message. I will write back as soon as I can"
              />
              <FormField
                type="text"
                name="fullname"
                placeholder="Enter your name"
                label="Name"
                value={fullname}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFullname(e.target.value)
                }
              />
              <FormField
                type="text"
                name="email"
                placeholder="Enter your email address"
                label="Email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
              <TextareaField
                label="Message"
                placeholder="Enter your message"
                name="message"
                value={message}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setMessage(e.target.value)
                }
              />
              <button
                type="submit"
                className={`${styles.section_button} ${styles.effectZoom}`}
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
