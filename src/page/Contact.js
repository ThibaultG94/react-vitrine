import React from 'react';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import ContactForm from '../components/ContactForm';

const Contact = () => {
	return (
		<div>
			<Mouse />
			<div className="contact">
				<Navigation />
				<Logo />
				<ContactForm />
			</div>
		</div>
	);
};

export default Contact;
