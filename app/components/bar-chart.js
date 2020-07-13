import Component from '@glimmer/component';
import {
  select
} from 'd3-selection';


export default class BarChartComponent extends Component {
  init() {
    let svg = select(this.$('svg')[0])
    //let svg = this.element.querySelector('svg')[0];

    svg.append('rect')
      .attr('width', 20)
      .attr('height', 100);

    svg.append('rect')
      .attr('width', 20)
      .attr('height', 50)
      .attr('x', 30);
  }
}