import { IContactSectionProps } from '.';
import styles from './ContactSection.module.scss';
import { FaGithub, FaGoogle, FaFilePdf, FaGlobe, FaLinkedin } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const ContactSection: React.FC<IContactSectionProps> = ({
	data = {
		headingCaption: 'Contact',
		linkList: []
	}
}) => {

	const icons = {
		'GITHUB': <FaGithub />,
		'GMAIL': <FaGoogle />,
		'RESUME': <FaFilePdf />,
		'WEBSITE': <FaGlobe />,
		'LINKEDIN': <FaLinkedin />
	};
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [message, setMessage] = useState<string>('');

	const handleSubmit = (e: any) => {
		e.preventDefault();
		setIsLoading(true);

		emailjs
			.sendForm(
				String(process.env.REACT_APP_EMAILJS_SERVICE_ID), 
				String(process.env.REACT_APP_EMAILJS_TEMPLATE_ID),
				e.target, 
				String(process.env.REACT_APP_EMAILJS_PUBLICE_KEY)
			)
			.then(() => {
				setIsSuccess(true);
				setMessage('Success! Thank you for reaching out.');
				setIsLoading(false);
			})
			.catch(() => {
				setIsSuccess(false);
				setMessage('Sorry, there was a failure in sending your message.');
				setIsLoading(false);
			});
	};

	return (
		<section className={styles.contactSectionContainer} id='contact'>
			<div className='section-container'>
				
				<div className={styles.contactSectionContent}>

					<h2 className={styles.headingCaption}>
						{data.headingCaption}
					</h2>

					{!isSuccess && (
						<form
							onSubmit={handleSubmit}
							className={styles.form}
						>
							
							<div className={styles.inputField}>
								<label 
									htmlFor='email_to'
									className={styles.label}
								>
									Email
								</label>

								<input 
									type='email'
									name='email_to'
									className={styles.input}
								/>
							</div>

							<div className={styles.inputField}>
								<label 
									htmlFor='subject'
									className={styles.label}
								>
									Subject
								</label>

								<input 
									type='text'
									name='subject'
									className={styles.input}
								/>
							</div>

							<div className={styles.textareaField}>
								<label 
									htmlFor='message'
									className={styles.label}
								>
									Message
								</label>

								<textarea 
									name='message'
									rows={5}
									className={styles.input}
								/>
							</div>

							{message && (
								<p className={styles.errorMessage}>
									{message}
								</p>
							)}

							<button
								type='submit'
								disabled={isLoading}
								className={styles.submitBtn}
							>
								{isLoading ? 'Sending...' : 'Submit'}
							</button>

						</form>
					)}

					{isSuccess && (
						<p className={styles.successMessage}>
							{message}
						</p>
					)}

					<ul className={styles.linkList}>
						{data.linkList.map((linkItem, key) => (
							<li
								key={key}
								className={styles.linkItem}
							>
								<a 
									href={linkItem.url}
									target='_blank'
									rel='noreferrer'
									className={styles.link}
								>
									<div className={styles.icon}>
										{icons[linkItem.type]}
									</div>

									<p className={styles.label}>
										{linkItem.label}
									</p>
								</a>
							</li>
						))}
					</ul>

				</div>

			</div>
		</section>
	);
};

export default ContactSection;