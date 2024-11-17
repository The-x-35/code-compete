import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const index = () => {
  return (
    <div className=' bg-black h-screen w-screen'>
        <div className='flex items-center justify-between sm:px-12 px-2 md:px-24 bg-black'>
			<Link href='/' className='flex items-center justify-center h-20'>
				<Image src='/logo.png' alt='logo' height={100} width={100} />
				<span className="text-white text-lg ml-2 mt-2 font-semibold">Code Compete by Arpit</span>
			</Link>
        </div>
        <div>
            <section className="relative pt-12 overflow-hidden bg-black sm:pt-16">
                <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-4xl mx-auto text-center">    
                     <h1 className="mt-8 text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                         Thank you for submitting your test.
                     </h1>
                   </div>
                </div>
            </section>
        </div>

    </div>
  )
}

export default index