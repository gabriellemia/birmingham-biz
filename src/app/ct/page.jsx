/* eslint-disable jsx-a11y/alt-text */
"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function ContactPage() {
	const defaultState = {
		name: "",
		email: "",
		subject: "Select...",
		message: "",
	};

	const [formData, setFormData] = useState(defaultState);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Add submit logic here
		console.log(formData);
		setFormData(defaultState);
	};

	return (
		<div className={styles.contactForm}>
			<h1 className={styles.pageHeading}>Contact Us</h1>
			<p>
				Birmingham Business is an editorially-led magazine and we are keen to
				hear from you, though the inclusion of articles or comment columns
				cannot be guaranteed and is always at the Editor’s discretion.
			</p>
			<form className={styles.formElement}>
				<label className={styles.labelField} htmlFor="name">
					Name
					<input
						className={styles.inputField}
						type="text"
						id="name"
						name="name"
					/>
				</label>
				<label className={styles.labelField} htmlFor="email">
					Email
					<input
						className={styles.inputField}
						type="email"
						id="email"
						name="email"
					></input>
				</label>
				<label className={styles.labelField} htmlFor="subject">
					Subject
					<select
						className={styles.inputField}
						name="subject"
						id="subject"
						onChange={handleChange}
					>
						<option value="dropdown">Select...</option>
						<option value="editor">Editor</option>
						<option value="webContent">Website Content</option>
						<option value="advert">Advertising</option>
						<option value="general">General Enquiries</option>
						<option value="other">Other</option>
					</select>
				</label>
				<label className={styles.labelField} from="message">
					Message
					<textarea
						className={styles.inputField}
						name="message"
						rows="10"
						cols="40"
					></textarea>
				</label>
				<div className={styles.buttonContainer}>
					<button className={styles.button}>Send</button>
				</div>
			</form>
			<div className={styles.imageContainer}>
				<Image
					src={"/birmingham_background.svg"}
					width={100}
					height={100}
					layout="fixed"
					className={styles.contactImage}
				/>
			</div>
		</div>
	);
}
