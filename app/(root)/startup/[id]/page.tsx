import React from 'react'

const Page = async ({ params }: { params: Promise<{ id: string }> }) => { 
      const id = (await params).id;





      return <>

      <h1 className='text-black'> This is startup number id {id}</h1>
      </>

    
}


export default Page;