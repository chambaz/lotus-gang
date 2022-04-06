const Section = ({ children, title, id, className, underline = 'left' }) => {
  const underlinePos = underline === 'right' ? 'after:left-0' : 'after:right-0'
  return (
    <div className={`flex w-screen min-h-screen ${className}`} id={id}>
      <div className="px-8 2xl:container 2xl:mx-auto">
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
