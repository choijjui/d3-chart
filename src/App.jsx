import React from 'react';
import * as d3 from 'd3';
import Line from './chart';
import TextComp from './text';
import Axis from './axis';

const D3 = () => {
  const width = 458;
  const height = 189;
  const margin = { top: 10, left: 0, bottom: 51, right: 0 };
  const data = [
    { month: '1월', value: 4.2, member: 30 },
    { month: '2월', value: 4.0, member: 25 },
    { month: '3월', value: 4.2, member: 10 },
    { month: '4월', value: 5.0, member: 30 },
    { month: '5월', value: 3.8, member: 20 },
    { month: '6월', value: 3.8, member: 30 },
  ];

  const xScale = d3
    .scaleBand()
    .domain(data.map((d) => d.month))
    .range([margin.left, width - margin.right]);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.value)])
    .nice()
    .range([height - margin.bottom, margin.top]);

  return (
    <svg width={`${width}px`} height={`${height}px`}>
      <Axis xScale={xScale} yScale={yScale} width={width} height={height} margin={margin} />
      <Line data={data} xScale={xScale} yScale={yScale} />
      <TextComp data={data} xScale={xScale} />
    </svg>
  );
};
export default D3;

