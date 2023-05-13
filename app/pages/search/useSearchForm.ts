import { useDebounce } from '@/hook/useDebounde'
import { useForm } from 'react-hook-form'

export const useSearchForm = () => {
	const { control, watch, reset } = useForm({
		mode: 'onChange',
		defaultValues: {
			searchTerm: ''
		}
	})
	
	const searchTerm = watch('searchTerm')
	const debouncedSearch = useDebounce(searchTerm, 1000)
	
	return { debouncedSearch, searchTerm, control, reset }
}
