import React from 'react'
import styled from 'styled-components'
import * as color from './color'

export function Card({ text }: { text?: string }) {
  return <Container>{text}</Container>
}

const Container = styled.div`
  position: relative;
  border: solid 1px ${color.Silver};
  border-radius: 6px;
  box-shadow: 0 1px 3px hsla(0, 0%, 7%, 0.1);
  padding: 8px 32px;
  background-color: ${color.White};
  cursor: move;
`
