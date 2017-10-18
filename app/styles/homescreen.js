// @flow
import styled, { css } from 'styled-components'
import { s, c, Row, Column, CircularAvatar } from '@bernatfortet/global-styles'
import { rgba, parseToRgb, lighten, tint } from 'polished'
import * as m from 'styles/main'


export const H1 = styled.div` font-size:40px; font-weight:500; margin-bottom:12px; `
export const H2 = styled.div` color:${m.colors.brand}; font-size:20px; letter-spacing:2.1px; text-transform:uppercase; `

export const Block = styled(Column)`  `
