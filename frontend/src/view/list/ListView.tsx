import teamStyle from './List.module.css';
import { motion } from 'framer-motion';
import globalStyle from '../globalView.module.css';

function TeamView() {
	return (
		<div className={globalStyle.container}>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
			>
				<section className={teamStyle.inputContainer}>
					<br />
					<input className={teamStyle.inputField}></input>
				</section>
			</motion.div>
		</div>
	);
}

export default TeamView;
