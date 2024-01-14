import { motion } from 'framer-motion';
// import contactStyle from './Contact.module.css';
import globalStyle from '../globalView.module.css';

function ContactView() {
	return (
		<div className={globalStyle.container}>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.2 }}
			>
				<h1>Contact</h1>
			</motion.div>
		</div>
	);
}

export default ContactView;
