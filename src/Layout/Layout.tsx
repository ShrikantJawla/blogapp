import React, { ReactElement } from 'react'
import { Navbar } from './Navbar'

interface Props {
  children: ReactElement
}

const Layout = (props: Props) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  )
}

export default Layout
