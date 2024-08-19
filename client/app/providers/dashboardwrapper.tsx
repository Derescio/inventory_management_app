import React from 'react'

const Dashboardwrapper = ({children} : {children: React.ReactNode}) => {
  return (
    <div className= {`light flex bg-gray-50 text-gray-900  min-h-screen`}>
       
        Sidebar
     
        <main className=' flex flex-col w-full h-full py-7 px-9 bg-gray-200'>
            {children}
        </main>
       
  
    </div>
  )
}

export default Dashboardwrapper
