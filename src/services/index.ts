import config from 'configs';
import I18nextService from './i18nextService';
import {Storage} from './Storage';

export const storageService = new Storage();

export const i18nService = new I18nextService(config, storageService);

export * from './i18nextService';
