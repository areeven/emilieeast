import { motion } from 'framer-motion';
import bloggStyle from './Blogg.module.css';
import globalStyle from '../globalView.module.css';

function BloggView() {
	return (
		<div className={bloggStyle.container}>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.2 }}
			>
				<h1>Blogg</h1>
				<input className={bloggStyle.subjectArea} placeholder="Subject" />
				<br />
				<textarea className={bloggStyle.textArea} placeholder="Posts" />
			</motion.div>
		</div>
	);
}

export default BloggView;
