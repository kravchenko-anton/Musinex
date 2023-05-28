import Field from '@/ui/Flield/field'
import { FC } from 'react'
import { Control } from 'react-hook-form'
import { View } from 'react-native'

const AuthForm:FC<{control: Control}> = (props) => {

	
	return <View className='w-3/4'>
	<Field control={props.control} name={'email'} placeholder={'Email'} />
	<Field control={props.control} name={'password'} placeholder={'Password'} />
	</View>
}

export default AuthForm