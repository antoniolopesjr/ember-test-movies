import Service from '@ember/service';

export default class LanguageService extends Service {
    //languages = ['en-US', 'pt-BR']
    currentLanguage = 'pt-BR';
    //var = window.console.log(this.currentLanguage);
    var= window.console.log(typeof this.currentLanguage);

    changeLanguage(){
      //  this.changeLanguage = this.currentLanguage;
      //this.currentLanguage.val(this.currentLanguage.val() == 'en-US' ? 'pt-BR' : 'en-US');
      if(this.currentLanguage == 'en-US'){
        this.currentLanguage = 'pt-BR'
      }
      else if(this.currentLanguage == 'pt-BR'){
        this.currentLanguage = 'en-US'
      }

      window.console.log(this.currentLanguage);
      window.console.log(typeof this.currentLanguage);
    }
}
