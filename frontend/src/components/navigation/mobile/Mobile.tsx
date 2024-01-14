import { Link } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'
import mobileStyle from './Mobile.module.css'
import Portal from '../portal/Portal'
import { useRef, useState } from 'react'
import Hamburger from './hamburger/Hamburger'
import Instagram from '../../../shared/images/links/instagram.png'
import LinkedIn from '../../../shared/images/links/linkedin.png'

const Mobile = () => {
	const [open, setOpen] = useState(false)
	const onClick = () => setOpen(!open)
	const node = useRef<HTMLDivElement>(null)
	const close = () => setOpen(false)

	const showMenu = () => {
		if (open) {
			return (
				<nav className={mobileStyle.nav}>
					<Portal />
					<ul className={mobileStyle.ulItem}>
						<Link className={mobileStyle.LinkItem} to={RoutingPath.homeView}>
							<li className={mobileStyle.listItem} onClick={() => close()}>
								Hem
							</li>
						</Link>
						<Link
							className={mobileStyle.LinkItem}
							to={RoutingPath.portfolioView}
						>
							<li className={mobileStyle.listItem} onClick={() => close()}>
								Tjänster
							</li>
						</Link>
						<Link className={mobileStyle.LinkItem} to={RoutingPath.aboutView}>
							<li className={mobileStyle.listItem} onClick={() => close()}>
								Vår Process
							</li>
						</Link>
						<Link className={mobileStyle.LinkItem} to={RoutingPath.teamView}>
							<li className={mobileStyle.listItem} onClick={() => close()}>
								Team
							</li>
						</Link>
					</ul>
					<ul className={mobileStyle.ulElement}>
						<li className={mobileStyle.listStyle}>
							<a
								href="https://www.instagram.com/emilieinspo/"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src={Instagram}
									className={mobileStyle.instagram}
									alt="instagram"
								/>
							</a>
						</li>
						<li className={mobileStyle.listStyle}>
							<a
								href="https://www.linkedin.com/in/emilie-%C3%B6st-34a327204/"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src={LinkedIn}
									className={mobileStyle.linkedin}
									alt="linkedin"
								/>
							</a>
						</li>
					</ul>
				</nav>
			)
		}
	}

	return (
		<div ref={node}>
			{showMenu()}
			<Hamburger open={open} onClick={onClick} />
		</div>
	)
}

export default Mobile
