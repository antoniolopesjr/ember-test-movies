import Controller from '@ember/controller';
/*import {
  computed
} from '@ember/object';*/
import {
  action
} from '@ember/object';
import {
  inject as service
} from '@ember/service';
import {
  tracked
} from '@glimmer/tracking';
import { later } from '@ember/runloop';



export default class IndexController extends Controller {

  @service('pagination-movies') pageTest;
  @tracked page = this.pageTest.currentPage;
  @tracked loadingEvent = true;

  queryParams = ['page']

  page = 1;

  loading = later(() => {

    this.loadingEvent = false;
  
  }, 2000);


  @action
  previousPage() {

    if (this.page >= 2) {
      this.pageTest.previousPage();

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
      this.transitionToRoute({
        queryParams: {
          page: this.incrementProperty('page')
        }
      });
    } 
  }

  @action
  changeLoading() {
    if (this.loadingEvent == false) {
      this.loadingEvent = true;
    } else this.loadingEvent = false;
  }

}