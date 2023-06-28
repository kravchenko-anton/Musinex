import en from '@/utils/translate/en.json'

type TranslateTypeTrue = {
	translate: true
	data: {
		name: string
		title: keyof typeof en
		component: () => JSX.Element
	}[]
}

type TranslateTypeFalse = {
	translate: false
	data: {
		name: string
		title: string
		component: () => JSX.Element
	}[]
}


export type ITabs = (TranslateTypeTrue | TranslateTypeFalse)