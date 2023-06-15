type props = {
  title: string;
  image: string;
};

export default function ImageCard({title, image}: props) {
  return (
    <div 
      className="w-full h-[232px]"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover'
      }}
    >
      <div className="flex h-full items-center justify-center py-10 px-6 w-full backdrop-brightness-75">
          <h2 className="text-white text-[32px] font-bold">{title}</h2>
      </div>
    </div>
  );
}