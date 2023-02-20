import React from 'react'
import Button from './Button';

const Card = ({ icon,title,content }) => {
  return (
    <>
      <div className="lg:p-4 md:m-full flex justify-center mt-40">
        <div className="max-w-xs rounded-2xl overflow-hidden shadow-lg">
          <img className="w-full" src={icon} alt={title} />

          <div className="px-6 py-4 lg:h-44">
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
            <Button className="px-6 pt- pb-2 justify-center" styles={`mt-2`} text={`Play`}/>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Card
