import UIcon from '@/ui/icon/defaultIcon/Icon'
import { getHexCode } from '@/utils/getColor'
import I18n from 'i18n-js'
import React, { FC, PropsWithChildren } from 'react'
import { Pressable, View, ViewStyle } from 'react-native'
import Title from '../title/title'
import { IButton } from './types/Ibutton'

const Button: FC<PropsWithChildren<IButton>> =
	({
		 children,
		 icon,
		 text,
		translate = false,
		 size = 'small',
		 variant = 'light',
		 width,
		 borderRadius = 10,
		 iconSize = 20,
		 center = false,
		 textSize,
		 ...rest
	 }) => {
		return (
			<Pressable
				style={[
					{
						backgroundColor: variant === 'primary' ? getHexCode('primary') : getHexCode('lightBlack'),
						borderRadius: borderRadius,
						padding: size === 'small' ? 5 : size === 'medium' ? 8 : 12,
					},
					rest.style as ViewStyle
				]}
				{...(!rest.style && rest)}
			>
				{!!(children && !(icon && text)) ? (
					children
				) : (
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							display: 'flex',
							justifyContent: icon ? 'space-between' : 'center',
							marginVertical: center ? 0 : 5,
							gap: size === 'small' ? 10 : size === 'medium' ? 10 : 10
						}}
					>
						<Title
							
							color={variant === 'primary' ? getHexCode('white') : getHexCode('white')}
							fontFamily={'Montserrat_700Bold'}
							size={
								textSize
									? textSize
									: size === 'small'
										? 15
										: size === 'medium'
											? 18
											: 20
							}
						>{translate	? I18n.t(text) :text }
						</Title>
						{icon && (
							<UIcon
								size={
									iconSize
										? iconSize
										: size === 'small'
											? 15
											: size === 'medium'
												? 18
												: 30
								}
								color={
									variant === 'light'
										? getHexCode('dark')
										: variant === 'primary'
											? getHexCode('white')
											: getHexCode('dark')
								}
								name={icon}
							/>
						)}
					</View>
				)}
			</Pressable>
		)
	}

export default Button
