import navigationStyle from './Desktop.module.css'
import { Link } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'
import { FaNetworkWired, FaBriefcase } from 'react-icons/fa'
import { MdHomeFilled } from 'react-icons/md'
import { RiTeamFill } from 'react-icons/ri'
import Instagram from '../../../shared/images/links/instagram.png'
import LinkedIn from '../../../shared/images/links/linkedin.png'

function Desktop() {
	return (
		<nav className={navigationStyle.navigation}>
			<ul className={navigationStyle.listStyle}>
				<Link to={RoutingPath.homeView}>
					<li className={navigationStyle.listItem}>
						<MdHomeFilled />
						<p className={navigationStyle.paragraph}>hem</p>
					</li>
				</Link>
				<Link to={RoutingPath.portfolioView}>
					<li className={navigationStyle.listItem}>
						<FaBriefcase />
						<p className={navigationStyle.paragraph}>Portfolio</p>
					</li>
				</Link>
				<Link to={RoutingPath.aboutView}>
					<li className={navigationStyle.listItem}>
						<FaNetworkWired />
						<p className={navigationStyle.paragraph}>vår process</p>
					</li>
				</Link>
				<Link to={RoutingPath.teamView}>
					<li className={navigationStyle.listItem}>
						<RiTeamFill />
						<p className={navigationStyle.paragraph}>team</p>
					</li>
				</Link>
				<li>
					<a
						className={navigationStyle.listStyle}
						href="https://www.instagram.com/emilieinspo/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src={Instagram}
							className={navigationStyle.instagram}
							alt="instagram"
						/>
					</a>
				</li>
				<li>
					<a
						className={navigationStyle.listStyle}
						href="https://www.linkedin.com/in/emilie-%C3%B6st-34a327204/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src={LinkedIn}
							className={navigationStyle.linkedin}
							alt="linkedin"
						/>
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default Desktop
