import { IsOpenType } from '@/animation/global'
import React from 'react'

export interface DropdownProps extends IsOpenType{
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	value: string
	setValue: React.Dispatch<React.SetStateAction<string>>
	onSelect: (value: string) => void
	options: {
		label: string
		value: string
	}[]
}