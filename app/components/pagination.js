import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class PaginationComponent extends Component {
 
  @service('pagination-movies') pageTest;

  @tracked count = this.pageTest.currentPage;
  @tracked loadingEvent = false;


  @action
  changeLoading(){
    if(this.loadingEvent == false){
      this.loadingEvent = true;
    } else this.loadingEvent = false;
  }

  get total() {
    return this.count;
  }

  /*@action
  change(page) {
    this.count = this.count + page;
  }*/

  @action
  nextPage(){
    this.pageTest.nextPage();
    this.count = this.pageTest.currentPage;
  }

  @action
  previousPage(){
    this.pageTest.previousPage();
    this.count = this.pageTest.currentPage;
  }

}