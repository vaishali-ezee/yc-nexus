import local from './local.config'
import development from './development.config'
import qa from './qa.config'
import stage from './stage.config'
import production from './production.config'

const config = {
  local,
  development,
  qa,
  stage,
  production,
}

export default (configEnv) => {
  return {
    ...config[configEnv],
  }
}
