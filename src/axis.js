import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { select as d3Select } from 'd3-selection';

function Axis({ xScale, yScale, width, height, margin }) {
  const xAxis = useRef(null);
  const yAxis = useRef(null);

  // useEffect(() => {
  //   d3Select(xAxis.current).call(
  //     d3
  //       .axisBottom(xScale)
  //       .tickSizeOuter(0)
  //       .tickFormat(function (d, i) { return d })
  //   ).call((g) => g.select('.domain').remove());
  // }, [xAxis.current]);

  useEffect(() => {
    d3Select(yAxis.current).call(
      d3
        .axisLeft(yScale)
        .tickValues([0, 1, 2, 3, 4, 5])
        .tickSize(-width)
        .tickFormat(function (d, i) { return '' })
    ).call((g) => g.select('.domain').remove());

    d3Select(yAxis.current).selectAll(".tick line").attr("stroke", "#ececec");

  }, [yAxis.current])

  return (
    <>
      {/* <g
        className="xAxis"
        ref={xAxis}
        transform={`translate(0, ${height - margin.bottom})`}
      /> */}

      <g
        className="yAxis"
        ref={yAxis}
        transform={`translate(${margin.left}, 0)`}
      />
    </>
  )
}

export default Axis;
