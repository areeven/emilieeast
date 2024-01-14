import { motion } from 'framer-motion'

function ContactView() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1.2 }}
		>
			<h1>Contact</h1>
		</motion.div>
	)
}

export default ContactView
