import React from 'react'

interface MainLayoutProps {
  children: React.ReactNode,
  styles: string
}


const MainLayout = ({ children, styles }: MainLayoutProps) => {
  return (
    <div className={styles}>
      {children}
    </div>
  )
}

export default MainLayout;
