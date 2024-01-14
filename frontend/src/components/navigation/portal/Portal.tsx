import PortalLogo from './portal-logo.png'
import portalStyle from './Portal.module.css'

function Portal() {
	return (
		<div className={portalStyle.portal}>
			<a
				className={portalStyle.aLink}
				href="https://ww4.autotask.net/ClientPortal/Login.aspx?ci=801912"
				target="_blank"
				rel="noreferrer"
			>
				<img
					className={portalStyle.image}
					src={PortalLogo}
					alt="customer portal"
				/>
			</a>
			<h4 className={portalStyle.title}>Kundportal</h4>
		</div>
	)
}

export default Portal
