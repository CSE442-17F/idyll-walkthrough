const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');

const size = 600;

class CustomD3Component extends D3Component {

  initialize(node, props) {
    const svg = this.svg = d3.select(node).append('svg');
    svg.attr('viewBox', `0 0 ${size} ${size}`)
      .style('width', '100%')
      .style('height', 'auto');

    const x = this.x = d3.scaleLinear().domain([0, 10]).range([0, size]);
    const y = this.y = d3.scaleLinear().domain([0, 10]).range([size, 0]);

    svg.selectAll('circle')
      .data(props.data)
      .enter()
      .append('circle')
      .attr('cx', (d) => x(d[props.x]))
      .attr('cy', (d) => y(d[props.y]))
      .attr('r', 10)
      .attr('opacity', 0.6)
      .attr('fill', props.color);

  }

  update(props) {
    this.svg.selectAll('circle')
      .transition()
      .duration(500)
      .attr('fill', props.color)
      .attr('cx', (d) => this.x(d[props.x]))
      .attr('cy', (d) => this.y(d[props.y]));
  }
}

module.exports = CustomD3Component;
