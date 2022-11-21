import React from 'react';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import ContactForm from '../components/ContactForm';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
	return (
		<div>
			<Mouse />
			<div className="contact">
				<Navigation />
				<Logo />
				<ContactForm />
				<div className="contact-infos">
					<div className="adress">
						<div className="content">
							<h4>adresse</h4>
							<p>12 rue Laplace</p>
							<p>64200 Biarritz</p>
						</div>
					</div>
					<div className="phone">
						<div className="content">
							<h4>téléphone</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
