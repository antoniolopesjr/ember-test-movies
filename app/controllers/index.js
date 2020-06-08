import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { later } from '@ember/runloop';


export default class IndexController extends Controller {

  languageEn = 'en-US';
  languagePt = 'pt-BR';

  @service('pagination-movies') pageTest;
  @service('language') langTest;
 
  @tracked currentLang = this.langTest.currentLanguage;
  @tracked loadingEvent = true;
  @tracked isPageNext = false;
  @tracked isPagePrev = false;

  queryParams = ['page']

  page = 1;

  loading = later(() => {

    this.loadingEvent = false;
  
  }, 2000);

  @action
  lookUpPagination(){
    if(this.page >= 2){
      this.isPageNext = false;
    }
    else if(this.page <= 12){
      this.isPagePrev = false;
    }
    else if(this.page == 12){
      this.isPageNext = true;
    }
    else if(this.page == 2){
      this.isPagePrev = true;
    }
  }

  
  @action
  previousPage() {
    if (this.page >= 2) {
      this.pageTest.previousPage();
      this.lookUpPagination();
      this.transitionToRoute({
        queryParams: {
          page: this.decrementProperty('page')
        }
      });
    } 
  }

  @action
  nextPage() {    
    if (this.page <= 11) {
      this.pageTest.nextPage();
      this.lookUpPagination();
      this.transitionToRoute({
        queryParams: {
          page: this.incrementProperty('page')
        }
      });
    } 
  }

  /*@action
  refreshModel() {
    this.refreshModel();
  }*/

  @action
  changeLang(){
    this.langTest.changeLanguage();
    //window.location.reload();
    this.refreshModel();
    //this.send('refreshModel');
  }

  /*@action
  changeLoading() {
    if (this.loadingEvent == false) {
      this.loadingEvent = true;
    } else this.loadingEvent = false;
  }*/

  /*@action
  changeLang(){
    if(this.langTest.currentLanguage == 'en-US'){
      //this.currentLang = this.languagePt;
      this.langTest.currentLanguage = this.languagePt;
      window.console.log(this.langTest.currentLanguage);
    }
    if(this.langTest.currentLanguage == 'pt-BR'){
      //this.currentLang = this.languageEn;
      window.console.log(this.langTest.currentLanguage);
    }
  }*/

}