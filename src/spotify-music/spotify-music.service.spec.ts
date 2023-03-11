import { ConfigModule } from '@nestjs/config'
import { Test, TestingModule } from '@nestjs/testing'
import { SpotifyMusicService } from './spotify-music.service'

describe('SpotifyMusicService', () => {
  let service: SpotifyMusicService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          ignoreEnvVars: true,
          ignoreEnvFile: true,
          load: [
            () => ({
              spotify: {
                clientId: 'mock-client-id',
                clientSecret: 'mock-client-secret',
              },
            }),
          ],
        }),
      ],
      providers: [SpotifyMusicService],
    }).compile()

    service = module.get<SpotifyMusicService>(SpotifyMusicService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  describe('getConfig', () => {
    it('should return mock config', () => {
      const expected = {
        clientId: 'mock-client-id',
        clientSecret: 'mock-client-secret',
      }
      expect(service.getConfig()).toEqual(expected)
    })
  })
})
