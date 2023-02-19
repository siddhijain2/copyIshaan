import React from 'react'
import Button from './Button';

const Card = ({ icon,title,content }) => {
  return (
    <>
      <div className="lg:p-4 md:m-full flex justify-center mt-40">
        <div className="max-w-sm rounded-2xl overflow-hoddem shadow-lg">
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
          </div>
          <Button className="px-6 pt-4 pb-2" styles={`mt-10`} text={`Play`}/>
        </div>
      </div>
    </>
  )
}

export default Card
