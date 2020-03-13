import Route from '@ember/routing/route';

export default class MovieRoute extends Route {
  async model(params) {
    let receiveModel = params.movie_id;
    let modelStringify = JSON.stringify(receiveModel);
    let movie_id_OK = modelStringify.replace(/[\\"]/g, '');

    let jsonString = 'https://api.themoviedb.org/3/movie/' +movie_id_OK + '?api_key=c5850ed73901b8d268d0898a8a9d8bff&language=en-US';

    let response = await fetch(jsonString);
    let results = await response.json();

    return { ...results };
  }
}