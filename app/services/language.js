import Service from '@ember/service';

export default class LanguageService extends Service {
    mainLanguage = 'en-US';
    currentLanguage = this.mainLanguage;

    changeLanguage(lang){
        this.changeLanguage = lang;
    }
}
