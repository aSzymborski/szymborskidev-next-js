/* eslint-disable react/no-unescaped-entities */
import FormField from "@/components/elements/fields/FormField/FormField";
import TextareaField from "@/components/elements/fields/TextareaField/TextareaField";
import { useRouter } from "next/router";
import styles from "./contactSection.module.scss";
import arrowicon from 'assets/arrow icon.svg'
import { useState } from "react";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";


export default function ContactSection() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
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
      setError(true)
      return;
    }
    router.push("thanks");
  };
  return (
    <>
      <section id='contact_section' className={`${styles.section} ${styles.container}`}>
        <h1 className={styles.section_title}>
          Let's talk about your project
        </h1>
        <div className={styles.section_wrapper}>
          <p className={styles.section_wrapper__text}>
            Get in touch via the form below, or by emailing
            <a
              href="mailto:asz93@icloud.com"
              className={`${styles.effectZoom}`}
            > asz93@icloud.com
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
              <FaAngleRight />
            </button>
            {error ? <span className={styles.errorText}>Something went wrong, use a different contact method.</span> : null}
          </form>
        </div>
      </section>
    </>
  );
}
