const Section = (props) => {
  return (
    <div className="flex items-center w-screen h-screen">
      <div className="container mx-auto">
        <h1 className="text-6xl font-pixelmix-bold">{props.title}</h1>
        {props.children}
      </div>
    </div>
  )
}

export default Section
