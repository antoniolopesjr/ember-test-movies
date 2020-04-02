import Controller from '@ember/controller';
import {
  computed
} from '@ember/object';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';



export default class IndexController extends Controller {

  @service('pagination-movies') pageTest;
  @tracked page = this.pageTest.currentPage;

  queryParams = ['page']

  page = 1;

  totalPending = computed('model', function () {
    return this.get('model').get('meta').total;
  })

  hasPreviousPage = computed('number', function () {
    return this.get('number') > 1;
  })

  hasNextPage = computed('size', 'number', 'totalPending', function () {
    return (this.get('size') * this.get('number')) < this.get('totalPending');
  })

    @action
    previousPage() {
      let totalPages = Math.ceil(this.get('totalPending') / this.get('number'));
    
      if (this.decrementProperty('page') > totalPages) {
        this.set('page', totalPages);
      }
      this.pageTest.previousPage();

      this.transitionToRoute({
        queryParams: {
          page: this.get('page')
        }
      });
    }

    @action
    nextPage() {
    this.pageTest.nextPage();
      this.transitionToRoute({
        queryParams: {
          page: this.incrementProperty('page')
        }
      });
    }
  
}