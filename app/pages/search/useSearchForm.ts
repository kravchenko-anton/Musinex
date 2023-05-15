import { useDebounce } from '@/hook/useDebounde'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'

export const useSearchForm = () => {
	const { control, watch, reset } = useForm({
		mode: 'onChange',
		defaultValues: {
			searchTerm: ''
		}
	})
	
	const searchTerm = watch('searchTerm')
	const debouncedSearch = useDebounce(searchTerm, 500)
	
	return useMemo(() => ({ debouncedSearch, searchTerm, control }), [searchTerm])
}
