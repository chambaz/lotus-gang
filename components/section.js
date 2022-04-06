const Section = ({ children, title, underline = 'left' }) => {
  const underlinePos = underline === 'right' ? 'after:left-0' : 'after:right-0'
  return (
    <div className="flex items-center w-screen min-h-screen">
      <div className="container px-8 mx-auto">
        <h1
          className={`${underlinePos} inline uppercase text-6xl font-lotus-pixelmix-bold relative after:content-[''] after:block after:absolute after:w-screen after:h-2 after:mt-4 after:bg-lotus-red`}>
          {title}
        </h1>
        {children}
      </div>
    </div>
  )
}

export default Section
