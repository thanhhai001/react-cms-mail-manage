
const content = ["test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", ];
function Home() {
  return (
    <>
      <div className="h-full w-full">
        {/* <div id="page-title" className="bg-gray-200"><h1>Home</h1></div> */}
        <div className="overflow-x-auto">
          {content.map( (item, index) => <div key={index} className="h-10 text-center">{item} - {index}</div> )}
        </div>
      </div>
    </>
  )
}

export default Home
