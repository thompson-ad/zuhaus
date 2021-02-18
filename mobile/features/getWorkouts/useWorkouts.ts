import * as React from 'react'
import { Workouts } from './interface'
import { apiClient } from '../../utils/apiClient'

interface GetWorkouts {
  data: Workouts[]
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  error: any
}

export const useWorkouts = () => {
  const [state, setState] = React.useState<GetWorkouts>({
    data: [{ title: '', data: [] }],
    isLoading: true,
    isSuccess: false,
    isError: false,
    error: null,
  })

  const fetch = React.useCallback(async () => {
    setState({ ...state, isLoading: true })
    try {
      const data = await apiClient<Workouts[]>('airtable')
      setState({ ...state, isLoading: false, isSuccess: true, data })
    } catch (error) {
      setState({ ...state, isLoading: false, isError: true, error })
    }
  }, [])

  React.useEffect(() => {
    fetch()
  }, [fetch])

  return {
    ...state,
    fetch,
  }
}
