import GradientLayout from '../../components/gradient-layout'
import SongTable from '../../components/songs-table'
import { validateToken } from '../../lib/auth'
import { colors } from '../../data/static'
import prisma from '../../lib/prisma'

const getByColor = (id) => {
  return colors[id - 1] || colors[Math.floor(Math.random() * colors.length)]
}

const Playlist = ({ playlist }) => {
  const color = getByColor(playlist.id)
  return (
    <GradientLayout
      color={color}
      roundImage={false}
      title={playlist.name}
      subtitle="playlist"
      description={`${playlist.songs.length} songs`}
      image={`https://picsum.photos/400?random${playlist.id}`}
    >
      <SongTable songs={playlist.songs} />
    </GradientLayout>
  )
}

export const getServerSideProps = async ({ query, req }) => {
  let user
  try {
    user = validateToken(req.cookies.SPOTIFY_ACCESS_TOKEN)
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    }
  }

  const [playlist] = await prisma.playlist.findMany({
    where: {
      id: +query.id,
      userId: user.id,
    },
    include: {
      songs: {
        include: {
          artist: {
            select: {
              name: true,
              id: true,
            },
          },
        },
      },
    },
  })

  return {
    props: {
      playlist,
    },
  }
}

export default Playlist
