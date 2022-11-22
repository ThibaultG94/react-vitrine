import React from 'react';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import ContactForm from '../components/ContactForm';
import SocialNetwork from '../components/SocialNetwork';
import Buttons from '../components/Buttons';

const Contact = () => {
	return (
		<div>
			<Mouse />
			<div className="contact">
				<Navigation />
				<Logo />
				<ContactForm />
				<div className="contact-infos">
					<div className="address">
						<div className="content">
							<h4>adresse</h4>
							<p>12 rue Laplace</p>
							<p>64200 Biarritz</p>
						</div>
					</div>
					<div className="phone">
						<div className="content">
							<h4>téléphone</h4>
							<div
								onClick={() =>
									navigator.clipboard.writeText('0642844284')
								}
								className="hover">
								<p
									style={{ cursor: 'pointer' }}
									className="clipboard"
									onClick={() => alert('Téléphone Copié !')}>
									0642844284
								</p>
							</div>
						</div>
					</div>
					<div className="email">
						<div className="content">
							<h4>email</h4>
							<div
								onClick={() =>
									navigator.clipboard.writeText(
										'fsagency@gmail.com'
									)
								}
								className="hover">
								<p
									style={{ cursor: 'pointer' }}
									className="clipboard"
									onClick={() => alert('Email Copié !')}>
									fsagency@gmail.com
								</p>
							</div>
						</div>
					</div>
					<SocialNetwork />
					<div className="credits">
						<p>FromScratch - 2022</p>
					</div>
				</div>
				<Buttons left={'/project-4'} />
			</div>
		</div>
	);
};

export default Contact;
