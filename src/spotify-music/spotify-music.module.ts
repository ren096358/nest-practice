import { Module } from '@nestjs/common'
import { SpotifyMusicService } from './spotify-music.service'

@Module({
  providers: [SpotifyMusicService],
  exports: [SpotifyMusicService],
})
export class SpotifyMusicModule {}
