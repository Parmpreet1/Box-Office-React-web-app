import React from 'react'
import { Nav } from './nav'

export const MainPageLayout = ({childern}) => {
  return (
    <div>
        <Nav/>
        {childern}
    </div>
  )
}
