import { useState, useEffect } from 'react'

const Section = ({ children, title, id, className, underline = 'left' }) => {
  const [showContent, setShowContent] = useState(false)
  const underlinePos = underline === 'right' ? 'after:left-0' : 'after:right-0'

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true)
    }, 750)
  }, [])

  return (
    <div
      className={`flex w-screen min-h-screen opacity-0 transition duration-1000 ${className}`}
      id={id}
      style={{ opacity: showContent ? 1 : 0 }}>
      <div className="px-8 2xl:container 2xl:mx-auto">
        <h1
          className={`${underlinePos} inline z-20 uppercase text-6xl md:text-7xl font-lotus-pixelmix-bold relative after:content-[''] after:block after:absolute after:w-screen after:h-2 after:mt-4 after:bg-lotus-red`}>
          {title}
        </h1>
        {children}
      </div>
    </div>
  )
}

export default Section
