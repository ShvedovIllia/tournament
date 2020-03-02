import {LanguageConst} from 'consts';
import {IEnvironmentConfig} from './types';

const { I18_CONFIG: configJson } = process.env;

let i18nConfig;

try {
  i18nConfig = !configJson ? {} : JSON.parse(configJson);
} catch (e) {
  throw new Error(`I18nConfig Parse Error: ${e}`);
}

export default Object.freeze({
  i18n: {
    ...i18nConfig,
    langs: Object.values(LanguageConst),
  },
}) as IEnvironmentConfig;
