import { motion } from 'framer-motion';
// import aboutStyle from './About.module.css'
import globalStyle from '../globalView.module.css';

function AboutView() {
	return (
		<div className={globalStyle.container}>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
			>
				<h1>Om</h1>
				<p>Text</p>
			</motion.div>
		</div>
	);
}

export default AboutView;
