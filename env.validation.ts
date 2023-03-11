import { plainToInstance, Transform } from 'class-transformer'
import { IsBoolean, IsString, validateSync } from 'class-validator'

class EnvironmentVariables {
  @IsString()
  SPOTIFY_CLIENT_ID: string

  @IsString()
  SPOTIFY_CLIENT_SECRET: string
}

function parseBoolean({ obj }) {
  switch (obj.SPOTIFY_BOOLEAN) {
    case 'true':
      return true
    case 'false':
      return false
    default:
      return obj.SPOTIFY_BOOLEAN
  }
}

export function validate(config: Record<string, unknown>) {
  const configInstance = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  })

  const errors = validateSync(configInstance, { skipMissingProperties: false })

  if (errors.length > 0) {
    throw Error(errors.toString())
  }
  return configInstance
}
