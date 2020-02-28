import {name, version} from '../../package.json';

import envConfig from './env';
import {IAppConfig, IConfig} from './types';

const { NODE_ENV: mode } = process.env;

const isDevelopment = typeof mode === 'string' && mode === 'development';

const appConfig: IAppConfig = {
  isDevelopment,
  name,
  version,
};

const config: IConfig = Object.assign({}, appConfig, envConfig);

export default Object.freeze(config);
export * from './types';
