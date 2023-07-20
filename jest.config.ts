import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: ['^.+\\.js$'],
  moduleDirectories: ['node_modules', 'src', __dirname],
}
export default config
