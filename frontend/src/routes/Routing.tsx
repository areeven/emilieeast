import React, { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import RoutingPath from './RoutingPath';

const HomeView = React.lazy(() => import('../view/home/HomeView'));
const PortfolioView = React.lazy(
	() => import('../view/portfolio/PortfolioView'),
);
const BloggView = React.lazy(() => import('../view/blogg/BloggView'));
const ListView = React.lazy(() => import('../view/list/ListView'));
const AboutView = React.lazy(() => import('../view/process/AboutView'));
const ContactView = React.lazy(() => import('../view/contact/ContactView'));
const NotFoundView = React.lazy(() => import('../view/notfound/NotFoundView'));

function RoutePath(props: { children?: React.ReactChild }) {
	return (
		<BrowserRouter>
			{props.children}
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route
						path={RoutingPath.wildcardView}
						element={<Navigate to={RoutingPath.notFoundView} />}
					/>
					<Route path={RoutingPath.homeView} element={<HomeView />} />
					<Route path={RoutingPath.portfolioView} element={<PortfolioView />} />
					<Route path={RoutingPath.bloggView} element={<BloggView />} />
					<Route path={RoutingPath.listView} element={<ListView />} />
					<Route path={RoutingPath.aboutView} element={<AboutView />} />
					<Route path={RoutingPath.contactView} element={<ContactView />} />
					<Route path={RoutingPath.notFoundView} element={<NotFoundView />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}

export default RoutePath;
