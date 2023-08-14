import VideoYoutube from './VideoYoutube'

export const Hero = ({ movieId }: { movieId: string }) => {
  return (
    <div>
      <VideoYoutube videoId={movieId} height='600' />
    </div>
  )
}
