import homeStyle from './Home.module.css'
import { motion } from 'framer-motion'
import globalStyle from '../globalView.module.css'

const HomeView = () => {
	return (
		<div className={globalStyle.container}>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.2 }}
			>
				<article className={homeStyle.articleTwo}>
					<section className={homeStyle.sectionOpen}>
						<h1>Emilie Öst</h1>
						<p>
							Utbildad webbutvecklare, på Campus Mölndal spenderade jag ungefär
							ett och ett halvt år där jag fick lära mig att utveckla med
							JavaScript. Till en början standard html, css och JavaScript.
							Sedan fick jag lära mig React framework.
						</p>
						<br />
					</section>
					<br />
					<section className={homeStyle.sectionOpen}>
						<h1>Vem är jag</h1>
						<p>
							En ung tjej i sina bästa år, som strävar efter att hela tiden bli
							bättre. Jag älskar att lära mig nya saker och vill göra det jag
							älskar vilket är att skapa. Att bygga en hemsida är ett åtagande,
							något jag gärna lägger ner tid på. Att få till det bästa jag kan
							åstadkomma och uppnå resultat.
						</p>
						<br />
					</section>
					<br />
					<section className={homeStyle.sectionOpen}>
						<h1>Arbetslivserfarenhet</h1>
						<p>
							Jag har under de senaste åren arbetat som fullstack utvecklare hos
							Nordic Retail Group där jag fått lära mig jobba med Vue.js
							framework och sätta mig in i det. Jag började som en nyexad junior
							utvecklare helt utan arbetslivserfarenhet. Jag fick en fantastisk
							mentor som lärde mig otroligt mycket, sätt att tänka, planera och
							att alltid försöka bygga saker dynamiskt för bra återanvändning av
							komponenter. Vi arbetade två personer relativt länge på hemsidan{' '}
							<a href="https://se.enginio.io">Enginio</a>
							och använde oss av agilt arbetssätt tillsammans med GIT för att
							uppnå ett smidigt sätt att jobba ihop.
						</p>
						<br />
					</section>
				</article>
			</motion.div>
		</div>
	)
}

export default HomeView
