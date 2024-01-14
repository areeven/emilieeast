import footerStyle from './Footer.module.css'

const Footer = () => {
	return (
		<div className={footerStyle.footerWindow}>
			<section className={footerStyle.sectionStyle}>
				<article className={footerStyle.articleStyleOne}>
					<h2>Emilie Öst</h2>
					<p>Bergmansgatan 4B</p>
					<p>431 30 Mölndal</p>
					<p>+46 763 45 61 91</p>
				</article>
				<article className={footerStyle.articleStyleThree}>
					<p className={footerStyle.emilie}>
						&copy; Designed by Emilie Öst 2022 - React with TypeScript
					</p>
				</article>
			</section>
		</div>
	)
}

export default Footer
