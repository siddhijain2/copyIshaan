import React from 'react'
import Button from './Button';

const Card = ({ icon,title,content }) => {
  return (
    <>
      <div className="lg:p-4 md:m-full flex justify-centermargin m-5">
        <div className="max-w-xs rounded-2xl overflow-hidden shadow-lg">
          <img className="w-full" src={icon} alt={title} />

          <div className="px-6 py-4 lg:h-46 ">
            {/* <span className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              {game}
            </span> */}

            <div className="title-font text-lg font-medium mb-2">
                <a href="#" className='no-underline text-gray-900'>
                    {title}
                </a>
            </div>

            <p className='text-gray-700 text-base'>
                {content}
            </p>
            <div class="container px-6 py-1 min-w-full flex flex-col items-center">
            <Button className="flex flex-col items-center" styles={`mt-1`} text={`Play`}/>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Card
