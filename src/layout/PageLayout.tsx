import React from 'react'
import Footer from '../components/Footer';

interface PageLayoutProps {
  children: React.ReactNode,
  styles?: string
}


const PageLayout = ({ children, styles }: PageLayoutProps) => {
  return (
    <div className={styles}>
      {children}
      <Footer/>
    </div>
  )
}

export default PageLayout;
