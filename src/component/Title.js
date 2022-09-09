import React, {memo} from 'react'
import { TitleWrapper } from '../MainAppStyle'

export const Title = memo(({title,subtitle}) => {
  return (
    <TitleWrapper>
        <h1>{title}</h1>
        <p>{subtitle}</p>
    </TitleWrapper>
  )
})