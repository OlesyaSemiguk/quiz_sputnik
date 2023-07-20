import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: ['^.+\\.js$'],
  moduleDirectories: ['src', 'node_modules'],
}
export default config
