import i18next from 'i18next';
import moment from 'moment';
import { initReactI18next } from 'react-i18next';

import { LanguageConst } from 'consts';
import uaJson from 'translations/ua.json';

export interface II18nService {
    t: (ns?: string) => i18next.TFunction;
    getInstance(): i18next.i18n;
    setLanguage(language: LanguageConst): void;
}

export default class I18nextService implements II18nService {
    private currentLang: LanguageConst;

    constructor(config: any) {
        this.currentLang = LanguageConst.En;
        const i18Config = this.prepareConfig(config);

        this.init(i18Config);
    }

    public t(ns?: string) {
        return i18next.getFixedT(this.currentLang, ns);
    }

    public getInstance() {
        return i18next;
    }

    public async setLanguage(language: LanguageConst) {
        await i18next.changeLanguage(language);
        this.setMomentLocale(language);
    }

    private async init(config: i18next.InitOptions) {
        await i18next.use(initReactI18next).init(config);
        this.setMomentLocale(config.lng);
    }

    private prepareConfig(config: any): i18next.InitOptions {
        const {
            isDevelopment,
            i18n: { langs, ns: namespaces },
            name,
        } = config;
        return {
            debug: isDevelopment,
            defaultNS: namespaces[0],
            fallbackLng: langs,
            initImmediate: false,
            interpolation: {
                defaultVariables: {
                    appName: name,
                    newLine: '\n',
                },
            },
            lng: this.currentLang,
            ns: namespaces,
            preload: langs,
            resources: {
                [LanguageConst.En]: uaJson,
            },
        };
    }

    private setMomentLocale(language: string = LanguageConst.En) {
        moment.locale(language);
    }
}
