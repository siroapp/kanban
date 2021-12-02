import React from 'react'
import styled from 'styled-components'
import * as color from './color'
import { Card } from './Card'

export function Column({
  title,
  cards,
}: {
  title?: string
  cards: {
    id: string
    text?: string
  }[]
}) {
  return (
    <Container>
      <Header>{title}</Header>
      {cards.map(({ id, text }) => (
        <Card key={id} text={text} />
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 355px;
  height: 100%;
  border: solid 1px ${color.Silver};
  border-radius: 6px;
  background-color: ${color.LightSilver};

  > :not(:last-child) {
    flex-shrink: 0;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;
`
