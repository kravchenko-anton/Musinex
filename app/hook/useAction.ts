import { rootAction } from '@/redux/root.action'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

export const useAction = () => {
	const dispatch = useDispatch()
	return bindActionCreators(rootAction, dispatch)
}
