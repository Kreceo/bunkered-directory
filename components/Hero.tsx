import Link from "next/link";

type props = {
  title: string;
  button: string;
  image: string;
  country: string;
};

export default function Hero({ title, button, image, country }: props) {
  return (
    <section 
      className="h-96 mb-8"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover'
      }}
    >
      <div className="flex flex-col h-full items-baseline justify-end py-10 px-6 w-full backdrop-brightness-75">
          <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-2">{title}</h2>
          <Link 
            href={{
              pathname: '[country]',
              query: { country: country }
            }} 
            className="inline-flex justify-center items-center py-2 px-2 mt-2 text-base font-medium text-center text-white rounded-lg bg-none border-2 border-white">
            {button}
          </Link>
      </div>
    </section>
  )
}

