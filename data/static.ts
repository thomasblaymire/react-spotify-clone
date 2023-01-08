import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from 'react-icons/md'

interface NavMenuItem {
  name: string
  icon: any
  route: string
}

export const navMenu: NavMenuItem[] = [
  {
    name: 'Home',
    icon: MdHome,
    route: '/',
  },
  {
    name: 'Search',
    icon: MdSearch,
    route: '/search',
  },
  {
    name: 'Your Library',
    icon: MdLibraryMusic,
    route: '/library',
  },
]

export const musicMenu: NavMenuItem[] = [
  {
    name: 'Create Playlist',
    icon: MdPlaylistAdd,
    route: '/home',
  },
  {
    name: 'Favourites',
    icon: MdFavorite,
    route: '/library',
  },
]

export const colors = [
  'red',
  'green',
  'blue',
  'orange',
  'purple',
  'gray',
  'teal',
  'yellow',
]
