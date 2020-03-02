export interface II18nConfig {
  versions: {[langKey: string]: string};
  langs: string[];
  ns: string[];
}
export interface IEnvironmentConfig {
  i18n: II18nConfig;
}

export interface IAppConfig {
  isDevelopment: boolean;
  version: string;
  name: string;
}

export type IConfig = IEnvironmentConfig & IAppConfig;
