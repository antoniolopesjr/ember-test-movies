import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    let response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=c5850ed73901b8d268d0898a8a9d8bff&language=en-US&page=1');
    let { results } = await response.json();

    return results.map(model => {
      let results  = model;    

      return { ...results };
    });
}
}