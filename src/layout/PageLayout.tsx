import React from 'react'

interface PageLayoutProps {
  children: React.ReactNode,
  styles?: string
}


const PageLayout = ({ children, styles }: PageLayoutProps) => {
  return (
    <div className={styles}>
      {children}
    </div>
  )
}

export default PageLayout;
