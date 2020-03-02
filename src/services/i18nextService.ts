import i18next from 'i18next';
import moment from 'moment';
import {initReactI18next} from 'react-i18next';

import {IConfig} from 'configs';
import {LanguageConst, StorageConst} from 'consts';
import enJson from 'translations/en.json';
import uaJson from 'translations/ua.json';
import {IStorage} from "./Storage";

export default class I18nextService {
  private currentLang: LanguageConst;
  private readonly config: any;
  private storage: IStorage;

  constructor(config: IConfig, storage: IStorage) {
    this.currentLang = LanguageConst.UA;
    this.storage = storage;
    this.config = this.prepareConfig(config);
    const i18Config = this.config;

    I18nextService.init(i18Config);
  }

  public t(ns?: string) {
    return i18next.getFixedT(this.currentLang, ns);
  }

  public getInstance() {
    return i18next;
  }

  public async setLanguage(language: LanguageConst) {
    await i18next.changeLanguage(language);
    I18nextService.setMomentLocale(language);
    this.currentLang = language;
    this.storage.setInLocal({ [StorageConst.Language]: language });

    const i18Config = this.prepareConfig(this.config);

    I18nextService.init(i18Config);
  }

  private static async init(config: any) {
    await i18next.use(initReactI18next).init(config);
    I18nextService.setMomentLocale(config.lng);
  }

  private prepareConfig(config: IConfig): any{
    const {
      isDevelopment,
      name,
    } = config;

    return {
      debug: isDevelopment,
      fallbackLng: ['EN', 'UA'] ,
      initImmediate: false,
      interpolation: {
        defaultVariables: {
          appName: name,
          newLine: '\n',
        },
      },
      lng: this.currentLang,
      ns: null,
      preload: ['EN', 'UA'],
      resources: {
        [LanguageConst.UA]: uaJson,
        [LanguageConst.EN]: enJson,
      },
    };
  }

  private static setMomentLocale(language: string = LanguageConst.UA) {
    moment.locale(language);
  }
}
