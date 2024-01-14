// import notFoundStyle from './NotFound.module.css'
import { motion } from 'framer-motion'
import globalStyle from '../globalView.module.css'

function NotFoundView() {
	return (
		<div className={globalStyle.container}>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
			>
				not found
			</motion.div>
		</div>
	)
}

export default NotFoundView
