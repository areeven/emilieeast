import hamburgerStyle from './Hamburger.module.css'
import React from 'react'

interface Props {
	open: boolean
	onClick: () => void
}

const Hamburger: React.FC<Props> = ({ open, onClick }) => {
	return (
		<button
			className={
				open ? hamburgerStyle.wrapperClosed : hamburgerStyle.wrapperOpened
			}
			onClick={onClick}
		>
			<div
				className={
					open ? hamburgerStyle.burgerOpened : hamburgerStyle.burgerClosed
				}
			/>
			<div
				className={
					open ? hamburgerStyle.burgerOpened : hamburgerStyle.burgerClosed
				}
			/>
			<div
				className={
					open ? hamburgerStyle.burgerOpened : hamburgerStyle.burgerClosed
				}
			/>
		</button>
	)
}

export default Hamburger
