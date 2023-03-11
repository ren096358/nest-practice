import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { SpotifyMusicModule } from './spotify-music/spotify-music.module'
import spotifyConfig from './config/spotify.config'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [spotifyConfig],
      isGlobal: true,
    }),
    SpotifyMusicModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
