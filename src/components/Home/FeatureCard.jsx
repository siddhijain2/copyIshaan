const FeatureCard = ({ icon,title,content}) => {
    return (

          <div className={`max-w-md sm:mx-auto sm:text-center`}>
            <div className={`flex text-center items-center justify-center w-16 h-16 mb-4 z-50 rounded-full bg-Tomato sm:mx-auto sm:w-24 sm:h-24`}>
            <img className="w-[75%] h-[75%]" src={icon} alt={title} />
            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">{title}</h6>
            <p className="mb-3 text-sm text-gray-900 ">
              {content}
            </p>
          </div>
    );
};

export default FeatureCard;