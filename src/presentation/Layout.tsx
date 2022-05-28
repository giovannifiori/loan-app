import React, { ReactNode } from 'react'

type LayoutProps = {
  title: string
  children: ReactNode
}

function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <header>
        <h1>{title}</h1>
      </header>
      <main>{children}</main>
    </>
  )
}

export default Layout
