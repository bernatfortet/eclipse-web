// @flow weak
// Consider using http://recharts.org/#/en-US/examples/TinyAreaChart
import React from 'react'
import { AreaClosed, Line, Bar } from '@vx/shape'
import { appleStock } from '@vx/mock-data'
import { curveMonotoneX } from '@vx/curve'
import { LinearGradient } from '@vx/gradient'
import { scaleTime, scaleLinear } from '@vx/scale'
import { withTooltip, Tooltip } from '@vx/tooltip'
import { localPoint } from '@vx/event'
import { extent, max, bisector } from 'd3-array'
import { timeFormat } from 'd3-time-format'

const stock = appleStock.slice(1200)
const formatDate = timeFormat("%b %d, '%y")

// accessors
const xStock = d => new Date(d.date)
const yStock = d => d.close
const bisectDate = bisector(d => new Date(d.date)).left

class Area extends React.Component {

  svg = null

  render() {
    const { width, height, margin, showTooltip, hideTooltip, tooltipData, tooltipTop, tooltipLeft, events } = this.props
    if (width < 10) return null

    // bounds
    const xMax = width - margin.left - margin.right
    const yMax = height - margin.top - margin.bottom

    // scales
    const xScale = scaleTime({
      range: [0, xMax],
      domain: extent(stock, xStock),
    })
    const yScale = scaleLinear({
      range: [yMax, 0],
      domain: [0, max(stock, yStock) + yMax / 3],
      nice: true,
    })

    return (
      <div>
        <svg ref={s => (this.svg = s)} width={width} height={height}>
          <rect x={0} y={0} width={width} height={height} fill="white" rx={14} />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#67C202" stopOpacity={0.8} />
              <stop offset="80%" stopColor="#67C202" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <AreaClosed
            data={stock}
            xScale={xScale}
            yScale={yScale}
            x={xStock}
            y={yStock}
            strokeWidth={1}
            stroke={'url(#gradient)'}
            fill={'url(#gradient)'}
            curve={curveMonotoneX}
          />
        </svg>
      </div>
    )
  }
}

export default withTooltip(Area)
