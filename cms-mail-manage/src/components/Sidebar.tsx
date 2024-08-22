const sidebar = ["test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", ];

function Sidebar() {
  return (
    <>
      {sidebar.map( (item, index) => <div key={index} className="h-10 text-center">{item} - {index}</div> )}
    </>
  )
}

export default Sidebar
