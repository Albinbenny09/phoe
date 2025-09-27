import Image from "next/image";

interface PopularProductCardProps {
  imgURL: string;
  name: string;
  price: string;
}

const PopularProductCard = ({ imgURL, name, price }: PopularProductCardProps) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-3 md:p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1">
      <div className="w-full h-40 md:h-64 flex items-center justify-center mb-3">
        <Image 
          src={imgURL} 
          alt={name} 
          width={280} 
          height={280}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
      <div className="mt-2 flex justify-start gap-2">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 md:w-5 md:h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-sm md:text-lg leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-sm md:text-xl leading-tight font-semibold overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
        {name}
      </h3>
      <p className="mt-2 text-base md:text-lg font-semibold text-primary">
        {price}
      </p>
      
    </div>
  );
};

export default PopularProductCard;
