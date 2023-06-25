import React from 'react'

export interface IDropdownProps {
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	value: string
	setValue: React.Dispatch<React.SetStateAction<string>>
	onSelect: (value: string) => void
	options: {
		label: string
		value: string
	}[]
}