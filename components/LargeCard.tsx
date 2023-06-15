type props = {
  image: string;
};

export default function LargeCard({image}: props) {
  return (
    <div className="flex flex-col w-full md:max-w-[585px]">
      <div 
        className="w-full h-[480px]"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover'
        }}
        ></div>
        <h3 className="text-lg md:text-4xl mt-4 font-bold md:font-normal mb-4">The 13 best places in Wales for a golf weekend</h3>
    </div>
  )
}