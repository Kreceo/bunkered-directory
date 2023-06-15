import Courses from "../../../../components/Courses"
import RegionCard from "../../../../components/RegionCard"
import Breadcrumb from "../../../../components/Breadcrumb"
import SearchBar from "../../../../components/SearchBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCheck, faLink } from "@fortawesome/free-solid-svg-icons"
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons"
import GoogleMap from "../../../../components/GoogleMap"
import Contact from "../../../../components/Contact"
import { useRouter } from "next/router";
import { useFetchPosts } from '../../../../lib/api';
import PopularRegions from "../../../../components/PopularRegions";
import he from 'he';
import Head from "next/head";

export default function SingleEntry() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return null; // Render nothing until the slug is available
  }

  const post = useFetchPosts(slug as string);

  if (post.length === 0) {
    return null;
  }

  const data = post[0];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.toString())
  }

  const decodedTitle = he.decode(data.title.rendered);
  const decodedContent = he.decode(data.content.rendered);

  console.log(data)
  return (
    <div className="px-4 md:px-0">
      <Head>
        <title>{decodedTitle} - bunkered.co.uk</title>
      </Head>
      {/* Breadcrumb and search bar */}
      <div className="flex justify-between py-8 items-center">
        <Breadcrumb />
        <SearchBar />
      </div>

      {/* Title and share */}
      <div className="flex justify-between">
        <h1 className="text-[42px] font-bold leading-tight mb-3.5 max-w-3xl">{decodedTitle}</h1>
        <div className="flex items-center gap-3">
          <span>SHARE</span>
          <button onClick={copyToClipboard} className="bg-black rounded-full p-1">
            <FontAwesomeIcon icon={faLink} className={'flex p-1 w-4 h-4 text-white'} />
          </button>
          <a href={`http://twitter.com/intent/tweet?text=Ooh, have you seen this? ${decodedTitle}&url=${data.link}`} className="bg-black rounded-full p-1">
            <FontAwesomeIcon icon={faTwitter} className={'flex p-1 w-4 h-4 text-white'} />
          </a>
          <a href={`https://www.facebook.com/sharer?u=${data.link}&t=${decodedTitle}`} className="bg-black rounded-full p-1">
            <FontAwesomeIcon icon={faFacebookF} className={'flex p-1 w-4 h-4 text-white'} />
          </a>
        </div>
      </div>

      {/* Course info */}
      <ul className="flex gap-10 list-disc">
        <li className="list-none flex">
          <FontAwesomeIcon icon={faLocationDot} className={'w-5 h-6 mr-2'} />
          {data._embedded['wp:term'][0].map((term, index) => (
            <span className="mr-2" key={index}>
              {term.name}
              {index == 0 ? ',' : ''}
            </span>
          ))}
        </li>
        <li>
          Type: {data.acf.quick_info.type}
        </li>
        <li>
          Length: {data.acf.quick_info.length} yards
        </li>
        <li>
          Par: {data.acf.quick_info.par}
        </li>
        {/* <li className="flex items-center list-none">
          <FontAwesomeIcon icon={faStar} className={'mr-1'} />
          <FontAwesomeIcon icon={faStar} className={'mr-1'} />
          <FontAwesomeIcon icon={faStar} className={'mr-1'} />
          <FontAwesomeIcon icon={faStar} className={'mr-1'} />
          <FontAwesomeIcon icon={faStar} className={'mr-3'} />
          <span>{data.acf.quick_info.google_ratings}</span>
        </li> */}
      </ul>


      <div className="flex gap-10 justify-between mt-8">
        <div className="w-full max-w-[620px]">

          <div
            className="w-full h-[400px] mb-8"
            style={{
              backgroundImage: `url(${data.acf.image_carousel[0].url})`,
              backgroundSize: 'cover'
            }}
          >
          </div>

          {/* About */}
          <div>
            <div className="block md:hidden">
              <Contact data={data} />
            </div>
            <h2 className="text-2xl font-bold">About</h2>
            <div
              className="my-4"
              dangerouslySetInnerHTML={{ __html: decodedContent }}
            />
          </div>

          {/* Facilities */}
          <div className="flex justify-between flex-col">
            <h3 className="text-lg font-bold mt-10 mb-4">Facilities</h3>
            <ul className="grid md:grid-cols-2 grid-cols-1 gap-3">
              {data.acf.facilities.map((facility, index) => (
                <li className="mb-2" key={index}>
                  <FontAwesomeIcon icon={faCheck} className="mr-2" />
                  {facility}
                </li>
              ))}
            </ul>
          </div>

          {/* Green fees */}
          {/* <div>
            <h3 className="text-lg font-bold mt-10 mb-4">Green fees</h3>
            <p className="mt-2 text-sm"><b>Weekday:</b> Round Ticket - £50+, Day Ticket - £50+</p>
            <p className="mt-2 text-sm"><b>Weekend:</b> Round Ticket - £50+, Day Ticket - £50+</p>
          </div> */}

          <hr className="border my-10" />

          {/* Location map */}
          <div>
            <h3 className="text-2xl font-bold mt-10 mb-4">Location</h3>

            {/* Google map */}
            <GoogleMap
              width="580"
              height="392"
              address={decodedTitle}
            // TODO: Re-add to address above once google maps acf sorted + data.acf.contact_info.address
            />
          </div>

          <hr className="border my-10" />

          {/* Weather widget */}

        </div>

        <div className="w-full max-w-[330px] flex items-center flex-col gap-10">

          {/* Contact box component */}
          <Contact data={data} />

          <img src="https://kreceo.sfo2.cdn.digitaloceanspaces.com/Golf/ad.png" />
          <RegionCard
            image="https://kreceo.sfo2.cdn.digitaloceanspaces.com/Golf/best-places.png"
            title="Top-rated courses in Scotland"
            height="195"
          />
          <RegionCard
            image="https://kreceo.sfo2.cdn.digitaloceanspaces.com/Golf/edinburgh.png"
            title="The best affordable courses in Edinburgh"
            height="195"
          />
          <RegionCard
            image="https://kreceo.sfo2.cdn.digitaloceanspaces.com/Golf/high-end.png"
            title="Exclusive amenities: high-end golf"
            height="195"
          />
        </div>
      </div>


      {/* Featured courses */}
      <Courses
        header="Other courses nearby"
        number={4}
        scroll={false}
      />

      {/* Popular regions */}
      <PopularRegions />

    </div>
  )
}