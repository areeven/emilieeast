import React, { Suspense } from 'react'
import myStyles from './global.module.css'
import Routing from './routes/Routing'

const NavigationBar = React.lazy(
	() => import('./components/navigation/NavigationBar'),
)
const Footer = React.lazy(() => import('./components/footer/Footer'))

function App() {
	return (
		<div className={myStyles.AppWindow}>
			<Suspense
				fallback={
					<div>
						<h2 className={myStyles.loading}>Loading...</h2>
					</div>
				}
			>
				<Routing>
					<NavigationBar />
				</Routing>
				<Footer />
			</Suspense>
		</div>
	)
}

export default App
