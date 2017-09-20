// @flow
import styled, { css } from 'styled-components'
import { s, c, Row, Column, CircularAvatar } from '@bernatfortet/global-styles'
import { rgba, parseToRgb, lighten, tint } from 'polished'

const black = '#272C2D'

export const colors = {
  brand: '#1B12E3',
  grey: '#F5F5F5',
  green: '#67C202',
  red: '#FF5900',
  gCalSlotBackground: '#E6E6E6',

  black: black,
  black95: rgba( black, 0.95),
  black90: rgba( black, 0.9),
  black80: rgba( black, 0.8),
  black70: rgba( black, 0.7),
  black60: rgba( black, 0.6),
  black50: rgba( black, 0.5),
  black40: rgba( black, 0.4),
  black30: rgba( black, 0.3),
  black20: rgba( black, 0.2),
  black15: rgba( black, 0.15),
  black10: rgba( black, 0.1),
  black05: rgba( black, 0.05),
  white: '#FFFFFF'
}


// Helpers
export const roundness = 12
export const icon = css` width:${p => p.size}px; height:${p => p.size}px; font-size:${p => p.size}px; `
export const changeColors = css`
  color: ${p => p.value >= 0 ? colors.green : colors.red };
`
export const rounding = css` border-radius:${roundness}px; `
export const shadow = css` box-shadow:0 2 16px 0 rgba(0, 0, 0, 0.05); `
export const border = css` border:1px solid rgba(0, 0, 0, 0.1); `
export const box = css` ${rounding} ${border} `

// Text Styles
export const t1 = css` color:${colors.black}; font-size:18px; font-weight:600; `
export const tBody = css` color:${colors.black}; font-size:16px; line-height:24px; `


// Shared Components
export const MainAppWrapper = styled(Column)` width:100%;  `
