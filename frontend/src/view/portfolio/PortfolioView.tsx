import serviceStyle from './Portfolio.module.css';
import globalStyle from '../globalView.module.css';
import { motion } from 'framer-motion';

function PortfolioView() {
	return (
		<div className={globalStyle.container}>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
			>
				<article className={serviceStyle.articleSection}>
					<section className={serviceStyle.sectionOne}>
						<h1>
							<i>Nordic Retail Group</i>
						</h1>
					</section>
					<section className={serviceStyle.sectionOne}>
						<h1>
							<i>Delecsys</i>
						</h1>
					</section>
				</article>
			</motion.div>
		</div>
	);
}

export default PortfolioView;
