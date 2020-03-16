import Route from '@ember/routing/route';

export default class MovieRoute extends Route {

  async model(id) {
    let receiveModel = id.id;
    
    //let modelStringify = JSON.stringify(receiveModel);
    //let movie_id_OK = modelStringify.replace(/[\\"]/g, '');

    let jsonString = 'https://api.themoviedb.org/3/movie/' + receiveModel + '?api_key=c5850ed73901b8d268d0898a8a9d8bff&language=en-US';

    let response = await fetch(jsonString);
    let results = await response.json();
    //let jsonStringlike = JSON.stringify(results);

    let genre = results.genres[0].name;
    let imdbTitle = results.imdb_id;

    var language, tagLine;

    let spokenLanguage = results.original_language;
    let tag = results.tagline;
    if (tag !== null) {
      tagLine = tag;
    } else tagLine = '...'

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
      genre,
      language,
      imdbTitle,
      tagLine,
      ...results
    };

  }
}