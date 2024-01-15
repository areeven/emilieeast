import navigationStyle from './Desktop.module.css';
import { Link } from 'react-router-dom';
import RoutingPath from '../../../routes/RoutingPath';
import { FaBriefcase, FaList, FaBloggerB, FaInfo } from 'react-icons/fa';
import { MdHomeFilled, MdContactMail } from 'react-icons/md';
import Instagram from '../../../shared/images/links/instagram.png';
import LinkedIn from '../../../shared/images/links/linkedin.png';

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
						<p className={navigationStyle.paragraph}>portfolio</p>
					</li>
				</Link>
				<Link to={RoutingPath.bloggView}>
					<li className={navigationStyle.listItem}>
						<FaBloggerB />
						<p className={navigationStyle.paragraph}>blogg</p>
					</li>
				</Link>
				<Link to={RoutingPath.listView}>
					<li className={navigationStyle.listItem}>
						<FaList />
						<p className={navigationStyle.paragraph}>listor</p>
					</li>
				</Link>
				<Link to={RoutingPath.aboutView}>
					<li className={navigationStyle.listItem}>
						<FaInfo />
						<p className={navigationStyle.paragraph}>om</p>
					</li>
				</Link>
				<Link to={RoutingPath.contactView}>
					<li className={navigationStyle.listItem}>
						<MdContactMail />
						<p className={navigationStyle.paragraph}>kontakt</p>
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
	);
}

export default Desktop;
