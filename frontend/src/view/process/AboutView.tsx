import { motion } from 'framer-motion'
// import aboutStyle from './About.module.css'
import globalStyle from '../globalView.module.css'

function AboutView() {
	return (
		<div className={globalStyle.container}>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
			>
				<h1>Vilka är Delecsys och vad gör vi?</h1>
				<p>
					Delecsys är en IT partner som arbetar med att hjälpa våra kunder få en
					problemfri IT vardag. Vi arbetar strategiskt och proaktivt med IT
					utifrån våra kunders bolagsmål, både på kort- och lång sikt. Syftet är
					att hitta möjligheter att effektivisera kunders verksamhet med hjälp
					av nya verktyg och lösningar. Vår ambition är att hjälpa till att
					omvandla utmaningar till möjligheter. Vi erbjuder en komplett IT
					avdelning med personlig service och engagemang. Vi arbetar aktivt med
					ca 100 kunder inom olika branscher, så som arkitektfirmor, privata-
					och regionala sjukvårdsgivare, konsultföretag, byggbolag, transport-
					och logistikbolag samt ekonomi- och redovisningsbyråer. Delecsys
					grundades 1997 och har idag ca 15 anställda. Vi finns i Göteborg,
					Stockholm och Malmö
				</p>
			</motion.div>
		</div>
	)
}

export default AboutView
