import Route from '@ember/routing/route';
import {
  inject as service
} from '@ember/service';
import {
  tracked
} from '@glimmer/tracking';
import {
  action
} from '@ember/object';



export default class IndexRoute extends Route {
  @service('pagination-movies') pageTest;
  @service('language') langTest;
  @tracked currentLang = this.langTest.currentLanguage;

  number = 1;

  queryParams = {
    page: {
      refreshModel: true
    }
  }

  async model(params) {

    let page;

    if (params.page) {
      page = params.page;
      page = isNaN(page) ? 1 : Math.floor(Math.abs(page));
      this.set('number', page);
    }

    let response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=c5850ed73901b8d268d0898a8a9d8bff&language=' + this.currentLang + '&page=' + page);
    let {
      results
    } = await response.json();

    return results.map(model => {
      let results = model;

      var language, tagLine, id, rawId;

      rawId = results.id;
      id = JSON.stringify(rawId);

      let imdbTitle = results.imdb_id;
      let tag = results.tagline;
      if (tag !== null) {
        tagLine = tag;
      } else tagLine = '...'

      let spokenLanguage = results.original_language;

      if (spokenLanguage == 'en') {
        language = 'English';
      } else if (spokenLanguage == 'fr') {
        language = 'French';
      } else if (spokenLanguage == 'ja') {
        language = 'Japanese';
      } else if (spokenLanguage == 'ru') {
        language = 'Russian';
      } else if (spokenLanguage == 'pl') {
        language = 'Polish';
      } else if (spokenLanguage == 'it') {
        language = 'Italian';
      } else if (spokenLanguage == 'es') {
        language = 'Spanish';
      } else if (spokenLanguage == 'tl') {
        language = 'Thai';
      } else if (spokenLanguage == 'ko') {
        language = 'Korean';
      } else language = 'English';

      //window.console.log(spokenLanguage);
      //window.console.log(typeof spokenLanguage);

      return {
        id,
        language,
        imdbTitle,
        tagLine,
        ...results,
        page: {
          number: this.get('number')
        }
      };
    });
  }

  @action
  refreshModel() {
    this.refreshModel();
  }

  @action
  changeLang() {
    this.langTest.changeLanguage();
    //window.location.reload();
    this.send('refreshModel');
  }

  setupController(controller, model) {
    controller.set('model', model);

    controller.setProperties({
      number: this.get('number'),
    });
  }
}