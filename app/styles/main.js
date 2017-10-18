// @flow
import styled, { css } from 'styled-components'
import { s, c, Row, Column, CircularAvatar } from '@bernatfortet/global-styles'
import { rgba, parseToRgb, lighten, tint } from 'polished'


// ----------------------
// Colors

const black = '#1F2D4C'
const white = 'white'

export const colors = {
  brand: '#1B12E3',
  grey: '#F5F5F5',
  green: '#67C202',
  red: '#FF5900',
  background: '#FAFBFC',
  darkBackground: '#1A1D24',

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

  white10: rgba( white, 0.1),
  white20: rgba( white, 0.2),
  white30: rgba( white, 0.3),
  white40: rgba( white, 0.4),
  white50: rgba( white, 0.5),
  white60: rgba( white, 0.6),
  white70: rgba( white, 0.7),
  white80: rgba( white, 0.8),
  white90: rgba( white, 0.9),
  white: white,

  facebook: '#4065B4',
  twitter: '#1DA1F2',
  email: '#F38E86',
}


// ----------------------
// Helpers

export const roundness = 12
export const borderStyle = `1px solid ${colors.black10} `
export const icon = css` width:${p => p.size}px; height:${p => p.size}px; font-size:${p => p.size}px; `
export const changeColors = css`
  color: ${p => p.value == 0 ? colors.black : p.value > 0 ? colors.green : colors.red };
`
export const rounding = css` border-radius:${roundness}px; `
export const shadow = css` box-shadow:0 2 16px 0 rgba(0, 0, 0, 0.05); `
export const border = css` border:1px solid rgba(0, 0, 0, 0.1); `
export const box = css` ${rounding} ${border} ${s.anchor} transition:200ms;
  &:hover{ background-color:white; box-shadow:0 2px 16px 0 ${colors.black05}; }
`


// ----------------------
// Text Styles
export const h1 = css` color:${colors.black}; font-size:32px; line-height:38px; font-weight:600; color:${colors.black}; letter-spacing:-1px; `
export const h2 = css` color:${colors.black}; font-size:24px; font-weight:400; letter-spacing:-0.6px; `

export const t1 = css` color:${colors.black}; font-size:20px; font-weight:600; letter-spacing: -0.1px; text-rendering: geometricPrecision; `
export const t2 = css` color:${colors.black}; font-size:18px; font-weight:600; letter-spacing: -0.1px; `
export const t3 = css` color:${colors.black}; font-size:16px; font-weight:400; `
export const t4 = css` color:${colors.black50}; font-size:14px; letter-spacing:2.1px; text-transform:uppercase; `

export const tBody = css` color:${colors.black}; font-size:16px; line-height:24px; `
export const tLink = css` text-decoration:none; transition:100ms; `
export const tNav = css` font-size:16px; font-weight:400; letter-spacing: -0.1px; `


export const H1 = styled.div` ${h1} margin-bottom:8px;`
export const H2 = styled.div` ${h2} margin-bottom:12px;`

export const T2 = styled.div` ${t2} `
export const T3 = styled.div` ${t3} `
export const T4 = styled.div` ${t4} `
export const TBody = styled.div` ${tBody} `

// ----------------------
// Shared Components

export const TOOLBAR_WIDTH = 180

// Layout components
export const MainAppWrapper = styled(Column)` width:100%;  `
export const Screen = styled(Column)` width:100%; height:100%; padding-bottom:30px; `
export const Content = styled(Row)` margin-left:${TOOLBAR_WIDTH}px; `

// Atomic components
export const CoinSymbol = styled.div` margin-left:4px; font-size:12px; line-height:15px; color:${colors.black40}; `
export const UserName = styled.div` ${t2} `

// ---------------------------
// Homescreen Components
