import teamStyle from './Team.module.css'
import { motion } from 'framer-motion'
import PerImg from '../../shared/images/team/per.png'
import OliverImg from '../../shared/images/team/oliver.png'
import CarinaImg from '../../shared/images/team/carina.png'
import KarinImg from '../../shared/images/team/karin.png'
import ChristianImg from '../../shared/images/team/christian.png'
import AndersKImg from '../../shared/images/team/andersk.png'
import LarsImg from '../../shared/images/team/lars.png'
import FelixImg from '../../shared/images/team/felix.png'
import GlennImg from '../../shared/images/team/glenn.png'
import JenniferImg from '../../shared/images/team/jennifer.png'
import RobinImg from '../../shared/images/team/robin.png'
import EmilieImg from '../../shared/images/team/emilie.png'
import FelipeImg from '../../shared/images/team/felipe.png'
import Team from '../../shared/images/team/teamimage.png'
import globalStyle from '../globalView.module.css'

function TeamView() {
	const width = '180px'

	return (
		<div className={globalStyle.container}>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
			>
				<img src={Team} className={teamStyle.teamImage} alt="team view" />
				<section className={teamStyle.employees}>
					<div className={teamStyle.aboutMember}>
						<img src={AndersKImg} alt="anders k" width={width} />
						<p className={teamStyle.text}>Anders Klamer - VD & Kundansvarig</p>
					</div>
					<div className={teamStyle.aboutMember}>
						<img src={LarsImg} alt="lars" width={width} />
						<p className={teamStyle.text}>Lars Johansson - Senior IT-konsult</p>
					</div>
					<div className={teamStyle.aboutMember}>
						<img src={PerImg} alt="per" width={width} />
						<p className={teamStyle.text}>Per Desaix - Senior IT-konsult</p>
					</div>

					<div className={teamStyle.aboutMember}>
						<img src={ChristianImg} alt="christian" width={width} />
						<p className={teamStyle.text}>
							Christian Johansson - Senior IT-konsult
						</p>
					</div>

					<div className={teamStyle.aboutMember}>
						<img src={RobinImg} alt="robin" width={width} />
						<p className={teamStyle.text}>Robin Music - Senior IT-konsult</p>
					</div>

					<div className={teamStyle.aboutMember}>
						<img src={FelixImg} alt="felix" width={width} />
						<p className={teamStyle.text}>
							Felix Berglie - IT-tekniker med kundansvar
						</p>
					</div>

					<div className={teamStyle.aboutMember}>
						<img src={GlennImg} alt="glenn" width={width} />
						<p className={teamStyle.text}>
							Glenn Levin Klang - IT-tekniker med kundansvar
						</p>
					</div>

					<div className={teamStyle.aboutMember}>
						<img src={OliverImg} alt="oliver" width={width} />
						<p className={teamStyle.text}>
							Oliver Tidblom-Kjellberger - Operativ Chef/Digital
							Affärsutvecklare
						</p>
					</div>

					<div className={teamStyle.aboutMember}>
						<img src={CarinaImg} alt="carina" width={width} />
						<p className={teamStyle.text}>
							Carina Johannesson - Affärskoordinator
						</p>
					</div>

					<div className={teamStyle.aboutMember}>
						<img src={KarinImg} alt="karin" width={width} />
						<p className={teamStyle.text}>Karin Jarhäll - Ekonomiansvarig</p>
					</div>

					<div className={teamStyle.aboutMember}>
						<img src={JenniferImg} alt="jennifer" width={width} />
						<p className={teamStyle.text}>
							Jennifer Funmeo - Kundansvarig % Marknadsföring
						</p>
					</div>

					<div className={teamStyle.aboutMember}>
						<img src={EmilieImg} alt="emilie" width={width} />
						<p className={teamStyle.text}>Emilie Öst - Webbutvecklare</p>
					</div>

					<div className={teamStyle.aboutMember}>
						<img src={FelipeImg} alt="felipe" width={width} />
						<p className={teamStyle.text}>
							Felipe Nyberg - 'LIA' System- och programvaruutvecklare,
							projektledare
						</p>
					</div>
				</section>
			</motion.div>
		</div>
	)
}

export default TeamView
