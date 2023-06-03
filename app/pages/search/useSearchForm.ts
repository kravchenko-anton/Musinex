import { useDebounce } from '@/hook/useDebounde'
import { useForm } from 'react-hook-form'

export const useSearchForm = () => {
	const { control, watch } = useForm({
		mode: 'onChange',
		defaultValues: {
			searchTerm: ''
		}
	})
	
	const searchTerm = watch('searchTerm')
	const debouncedSearch = useDebounce(searchTerm, 500)
	
	return {debouncedSearch, searchTerm, control }
}
