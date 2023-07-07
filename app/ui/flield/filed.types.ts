import { UViewProps } from '@/types/component.types'
import { ITranslateTypes, WrapperProps } from '@/types/global'
import {
	Control,
	FieldPath,
	FieldValues,
	RegisterOptions
} from 'react-hook-form'
import { TextInputProps } from 'react-native'

export interface FieldProps<T extends FieldValues>
	extends Omit<
			TextInputProps,
			'onChange' | 'onChangeText' | 'value' | 'placeholder' | 'testID'
		>,
		WrapperProps<UViewProps['style']> {
	control: Control<T>
	name: FieldPath<T>
	placeholder: ITranslateTypes
	rules?: Omit<
		RegisterOptions<T, FieldPath<T>>,
		'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
	>
}
