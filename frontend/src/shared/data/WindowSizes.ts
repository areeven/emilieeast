export interface WindowWidth {
	minWidthForPlatform: WindowWidthValues
}

interface WindowWidthValues {
	// mobile: string,
	tablet: string
	desktop: string
	qHd: string
	ultraWide: string
	ultraHd: string
}

export const minWidthForPlatform: WindowWidthValues = {
	tablet: '768px',
	desktop: '1366px',
	qHd: '1920px',
	ultraWide: '2560px',
	ultraHd: '3440px',
}
