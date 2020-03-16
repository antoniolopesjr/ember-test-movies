import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    let response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=c5850ed73901b8d268d0898a8a9d8bff&language=en-US&page=1');
    let { results } = await response.json();

    return results.map(model => {
      let results = model;

      var language, tagLine;

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
        language,
        imdbTitle,
        tagLine,
        ...results
      };
    });
  }
}