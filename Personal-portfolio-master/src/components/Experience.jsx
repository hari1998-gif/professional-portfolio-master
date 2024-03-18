import React from 'react'

const Experience = () => {
    const jobs =[   {
        id: 1,
        role: "Web Developer",
        comp : " HCL TECHNOLOGIES PVT LTD",
        date : "January, 2021 - Present",
        desc1 : "Working for Google Messages Client",
        // desc2:  "Developed and maintained APIs for the chat application",
        style: 'shadow-purple-500',
      },
    ]
      
  return (
    <section id='experience' className='py-10 relative'>
      <div className="text-center mt-8 ">
        <h3 className='text-5xl font-semibold ' id='headuu'>
          <span className=' border-b-4 border-white-500 '><span id='namee'>Experience</span> <span className='text-sky-500'></span> </span></h3>
        <p className='text-gray-400 my-5 text-lg' id='headuu2'>Technologies i have worked with</p>
      </div>
  <div id='exp' className='w-full flex flex-wrap  px-20 sm:grid-cols-3 gap-8 text-center py-8 sm:px-0 text-white cursor-pointer mx-auto sm:mx-auto md :mx-auto lg:mx-auto '>
  {jobs.map(({ id, role, date, desc1,desc2,style,comp }) => (
    <div id='exper' className={`flex w-[600px] shadow-md hover:scale-105 duration-500 py-2 mx-auto sm:mx-auto md:mx-auto rounded-lg ${style}`}>
    <div className='text-gray-500 font-roboto font-bold w-[40%] text-[0.35rem] sm:text-[0.75rem] md:text-lg  '>
        {date}</div>
        <div className=' w-[60%] text-left ml-10'>
         <h1 id='role' className="text-cyan-300 font-bold font-['Poppins'] text-[0.60rem] xs:text-md sm:text-lg md:text-lg lg:text-xl "> {role}</h1>
         <h2 className="text-white-300  font-['Poppins']  text-[0.30rem] xs:text-sm sm:text-sm md:text-md lg:text-base"> {comp}</h2>
         {/* <p className='text-gray-300'>
       * {desc1}</p> */}
         {/* <p className='text-gray-300'>
        *{desc2}</p> */}
        <ul>
            <li className="font-['Poppins'] text-sm"> → {desc1}</li>
            {/* <li className="font-['Poppins'] text-sm"> → {desc2}</li> */}
            

        </ul>
            <div className='flex flex-wrap'>
            <button  className=' my-[0.5px] text-cyan-300 rounded bg-[#7dd3fc1a] px-[0.5px] sm :px-2 sm :my-2 md:px-3 md:my-2 lg:my-3 xl:px-3  mx-2'><p id='techb' className='text-[0.35rem] sm:text-[0.75] md:text-sm lg:text-md'>React js</p></button>
            <button className=' my-[0.5px] text-cyan-300 rounded bg-[#7dd3fc1a] px-[0.5px] sm :px-2 sm :my-2 md:px-3 md:my-2 lg:my-3 xl:px-3  mx-2'><p id='techb'className='text-[0.35rem] sm:text-[0.75] md:text-sm lg:text-md'>Node js</p></button>
            <button className=' my-[0.5px] text-cyan-300 rounded bg-[#7dd3fc1a] px-[0.5px] sm :px-2 sm :my-2 md:px-3 md:my-2 lg:my-3 xl:px-3  mx-2'><p id='techb'className='text-[0.35rem] sm:text-[0.75] md:text-sm lg:text-md'>CSS</p></button>
            <button className=' my-[0.5px] text-cyan-300 rounded bg-[#7dd3fc1a] px-[0.5px] sm :px-2 sm :my-2 md:px-3 md:my-2 lg:my-3 xl:px-3  mx-2'><p id='techb'className='text-[0.35rem] sm:text-[0.75] md:text-sm lg:text-md'>API</p></button>
            <button className=' my-[0.5px] text-cyan-300 rounded bg-[#7dd3fc1a] px-[0.5px] sm :px-2 sm :my-2 md:px-3 md:my-2 lg:my-3 xl:px-3  mx-2'><p id='techb' className='text-[0.35rem] sm:text-[0.75] md:text-sm lg:text-md'>Mongo DB</p></button>
          
            </div>
            {/* <div className='flex flex-wrap'>
            <button  id='techb'  className=' my-[0.5px] text-cyan-300 rounded bg-[#7dd3fc1a] px-[0.5px] sm :px-2 sm :my-2 md:px-3 md:my-2 lg:my-3 xl:px-3  mx-2'> Reactjs</button>
            <button id='techb' className=' my-[0.5px] text-cyan-300 rounded bg-[#7dd3fc1a] px-[0.5px] sm :px-2 sm :my-2 md:px-3 md:my-2 lg:my-3 xl:px-3  mx-2'>Nodejs</button>
            <button id='techb' className=' my-[0.5px] text-cyan-300 rounded bg-[#7dd3fc1a] px-[0.5px] sm :px-2 sm :my-2 md:px-3 md:my-2 lg:my-3 xl:px-3  mx-2'>Api</button>
            <button id='techb' className=' my-[0.5px] text-cyan-300 rounded bg-[#7dd3fc1a] px-[0.5px] sm :px-2 sm :my-2 md:px-3 md:my-2 lg:my-3 xl:px-3  mx-2'>Mongodb</button>
            <button id='techb' className=' my-[0.5px] text-cyan-300 rounded bg-[#7dd3fc1a] px-[0.5px] sm :px-2 sm :my-2 md:px-3 md:my-2 lg:my-3 xl:px-3  mx-2'>Tailwind Css</button>
          
            </div> */}
     </div>
    </div> ))}

    
    
    
    
  </div>
  


        



    </section>
  )
}

export default Experience