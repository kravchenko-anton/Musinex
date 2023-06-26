import { isOpen } from '@/animation/global'
import React from 'react'

export interface IDropdownProps extends isOpen{
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	value: string
	setValue: React.Dispatch<React.SetStateAction<string>>
	onSelect: (value: string) => void
	options: {
		label: string
		value: string
	}[]
}