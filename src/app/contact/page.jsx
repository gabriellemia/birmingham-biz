/* eslint-disable jsx-a11y/alt-text */
"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
// import svg from "../../public/birmingham_background.svg";

export default function ContactPage() {
	const form = useRef();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "Select...",
		message: "",
	});
	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [errors, setErrors] = useState({});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));

		setErrors((prevErrors) => {
			const newErrors = { ...prevErrors };
			if (name === "email" && value) {
				if (!/\S+@\S+\.\S+/.test(value)) {
					newErrors[name] = "Email address is invalid";
				} else {
					delete newErrors[name];
				}
			} else if (value) {
				delete newErrors[name];
			}
			return newErrors;
		});
	};

	const validateForm = () => {
		let formErrors = {};
		if (!formData.name) formErrors.name = "Name is required";
		if (!formData.email) {
			formErrors.email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			formErrors.email = "Email address is invalid";
		}
		if (formData.subject === "Select...")
			formErrors.subject = "Subject is required";
		if (!formData.message) formErrors.message = "Message is required";
		return formErrors;
	};

	const sendEmail = (e) => {
		e.preventDefault();

		const formErrors = validateForm();
		if (Object.keys(formErrors).length > 0) {
			setErrors(formErrors);
			return;
		}

		emailjs
			.sendForm("service_0dsfnbb", "contact_form", form.current, {
				publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
			})
			.then(
				() => {
					setSuccessMessage(
						<div className={styles.successMessage}>
							<Image
								src="/icons8-tick-48.png"
								alt="Success"
								width={24}
								height={24}
							/>
							<span>Message sent successfully!</span>
						</div>
					);
					setFormData({
						name: "",
						email: "",
						subject: "Select...",
						message: "",
					});
					setErrors({});
				},
				(error) => {
					setSuccessMessage("");
					setErrorMessage(
						<div className={styles.sendFail}>
							<Image
								src="/icons8-cross-40.png"
								alt="Error"
								width={24}
								height={24}
							/>
							<span>Failed to send message. Please try again later.</span>
						</div>
					);
					console.log("FAILED...", error.text);
				}
			);
	};

	return (
		<div className={styles.backgroundContainer} id="bgContainer">
			<div className={styles.contactForm}>
				<h1 className={styles.pageHeading}>Contact Us</h1>
				<p>
					Birmingham Business is an editorially-led magazine and we are keen to
					hear from you, though the inclusion of articles or comment columns
					cannot be guaranteed and is always at the Editor’s discretion.
				</p>
				{successMessage}
				<form ref={form} onSubmit={sendEmail} className={styles.formElement}>
					<label className={styles.labelField} htmlFor="name">
						Name
						<input
							className={styles.inputField}
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleInputChange}
							autocomplete="name"
						/>
						{errors.name && (
							<span className={styles.errorMessage}>{errors.name}</span>
						)}
					</label>
					<label className={styles.labelField} htmlFor="email">
						Email
						<input
							className={styles.inputField}
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleInputChange}
							autocomplete="email"
						/>
						{errors.email && (
							<span className={styles.errorMessage}>{errors.email}</span>
						)}
					</label>
					<label className={styles.labelField} htmlFor="subject">
						Subject
						<select
							className={styles.inputField}
							name="subject"
							id="subject"
							value={formData.subject}
							onChange={handleInputChange}
							aria-label="Select a subject"
							
						>
							<option value="dropdown">Select...</option>
							<option value="editor">Editor</option>
							<option value="webContent">Website Content</option>
							<option value="advert">Advertising</option>
							<option value="general">General Enquiries</option>
							<option value="other">Other</option>
						</select>
						{errors.subject && (
							<span className={styles.errorMessage}>{errors.subject}</span>
						)}
					</label>
					<label className={styles.labelField} from="message">
						Message
						<textarea
							className={styles.inputField}
							name="message"
							rows="10"
							cols="40"
							value={formData.message}
							onChange={handleInputChange}
						></textarea>
						{errors.message && (
							<span className={styles.errorMessage}>{errors.message}</span>
						)}
					</label>
					<div className={styles.buttonContainer}>
						<button className={styles.button} onClick={sendEmail} type="submit">
							Send
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
