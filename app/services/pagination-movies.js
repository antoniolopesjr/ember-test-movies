import Service from '@ember/service';

export default class PaginationMoviesService extends Service {

    currentPage = 1;

    nextPage() {
        //if (this.currentPage <= 12){
            this.currentPage++;
        //}
    }

    previousPage() {
        //if (this.currentPage > 1){
            this.currentPage--;
        //}
    }
}