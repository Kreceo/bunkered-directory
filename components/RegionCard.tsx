type props = {
    image: string;
    title: string;
    height: string;
  };
  
  export default function RegionCard({image, title, height}: props) {
    return (
      <div className="flex flex-col w-full min-w-[245px]">
        <div 
          className="w-full"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            height: `${height}px`
          }}
          ></div>
          <h3 className="text-lg mt-4 font-bold">{title}</h3>
      </div>
    )
  }