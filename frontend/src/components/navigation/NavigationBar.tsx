import React, { useEffect, useState } from 'react'
import Mobile from './mobile/Mobile'
import useWindowDimensions from '../../shared/hooks/useWindowDimensions'
import { minWidthForPlatform } from '../../shared/data/WindowSizes'
import Desktop from './desktop/Desktop'

const NavigationBar: React.FC = (): JSX.Element => {
	const { width } = useWindowDimensions()
	const [isView, setIsView] = useState<boolean>()

	useEffect(() => {
		setIsView(width < Number(minWidthForPlatform.desktop.slice(0, -2)))
	})

	return <>{isView ? <Mobile /> : <Desktop />}</>
}

export default NavigationBar
