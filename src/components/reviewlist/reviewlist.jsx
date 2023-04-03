export const ReviewList = ({ img, alt, title, address, text }) => {
  return (
    <>
      <li className='list-none w-96 bg-white pt-12 pe-9 pb-20 ps-9 rounded-3xl me-6'>
        <div className='flex items-center'>
          <img className='rounded-full me-6 mb-6' src={img} alt={alt} />
          <div>
            <strong className='block text-lg'>{title}</strong>
            <span className='block'>{address}</span>
          </div>
        </div>
        <div className='w-72'>
          <p className='text-xl'>{text}</p>
        </div>
      </li>
    </>
  );
};
