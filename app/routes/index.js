import Route from '@ember/routing/route';

/*const COMMUNITY_CATEGORIES = [
    'Condo',
    'Townhouse',
    'Apartment'
  ];*/


export default class IndexRoute extends Route {
  async model() {
    let response = await fetch('/api/upcoming.json');

    let { results } = await response.json();

    return results.map(model => {
      let results  = model;
    
      /*let type;

      if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
        type = 'Community';
      } else {
        type = 'Standalone';
      }*/

      return { ...results };
    });
}
}