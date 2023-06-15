import Head from 'next/head';
import Hero from "../components/Hero";
import BorderedTitle from "../components/BorderdTitle";
import LargeCard from "../components/LargeCard";
import RegionCard from "../components/RegionCard";
import SearchBar from "../components/SearchBar";
import Courses from "../components/Courses";
import Breadcrumb from "../components/Breadcrumb";
import dynamic from "next/dynamic";
const DynamicNewsletter = dynamic(() => import('../components/Newsletter'))

export default function Home() {
  console.log(process.env.SITE_URL);
  return (
    <div className="px-4 md:px-0">
      <Head>
        <title>Course Directory - bunkered.co.uk</title>
      </Head>
      <div className="flex justify-between pt-7 items-center">
        <Breadcrumb />
        <SearchBar />
      </div>
      <h1 className="text-2xl font-bold py-7">Golf Courses in The UK & Ireland</h1>
      <Hero
        title="Explore Scotland"
        button="See courses"
        image="http://localhost:1235/wp-content/uploads/2023/06/hero-scotland.png"
        country="scotland"
      />

      {/* 3 Region cards below hero image */}

      <BorderedTitle
        title="Bucket-list courses"
      />

      {/* Bucket list courses */}
      <Courses
        header=""
        number={4}
        scroll={true}
      />

      <BorderedTitle
        title="Discover golf in the UK and Ireland"
      />

      <div className="flex gap-4 justify-between flex-col md:flex-row">
        <LargeCard
          image="https://kreceo.sfo2.cdn.digitaloceanspaces.com/Golf/best-places.png"
        />
        <div className="flex flex-col gap-10">
          <RegionCard
            image="https://kreceo.sfo2.cdn.digitaloceanspaces.com/Golf/affordable.png"
            title="The best affordable courses in Edinburgh"
            height="195"
          />
          <RegionCard
            image="https://kreceo.sfo2.cdn.digitaloceanspaces.com/Golf/where-to-play.png"
            title="Where to play in winter"
            height="195"
          />
        </div>
      </div>

      <BorderedTitle
        title="Courses in glasgow"
      />

      {/* Coastal golf courses */}
      <Courses
        header=""
        number={4}
        scroll={true}
      />

      <BorderedTitle
        title="link courses in fife"
      />

      {/* Family-friendly golf courses */}
      <Courses
        header=""
        number={4}
        scroll={true}
      />

      <DynamicNewsletter
        title="Sign up for our daily newsletter"
      />
    </div>
  )
}
