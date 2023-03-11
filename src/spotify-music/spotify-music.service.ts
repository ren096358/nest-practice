import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class SpotifyMusicService {
  private clientId: string
  private clientSecret: string

  constructor(private configService: ConfigService) {
    this.clientId = this.configService.get('spotify.clientId')
    this.clientSecret = this.configService.get('spotify.clientSecret')
  }

  getConfig() {
    return {
      clientId: this.clientId,
      clientSecret: this.clientSecret,
    }
  }
}
