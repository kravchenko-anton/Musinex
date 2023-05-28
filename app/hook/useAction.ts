import { rootAction } from '@/redux/rootAction'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

export const useAction = () => {
	const dispatch = useDispatch()
	return bindActionCreators(rootAction, dispatch)
}