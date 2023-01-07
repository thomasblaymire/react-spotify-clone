import useSWR from 'swr'
import fetcher from '../lib/fetcher'

export const usePlaylist = () => {
  const { data, error } = useSWR('/playlist', fetcher)
  return {
    playlists: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  }
}
