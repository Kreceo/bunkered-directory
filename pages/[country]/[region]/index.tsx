import Breadcrumb from "../../../components/Breadcrumb";
import SearchBar from "../../../components/SearchBar";
import Courses from "../../../components/Courses";
import { useFetchCustomTaxonomy } from "../../../lib/api";
import { useRouter } from 'next/router'
import Head from "next/head";

export default function Region() {
  const router = useRouter()
  const { region } = router.query;
  const regionData = useFetchCustomTaxonomy(region as string);

  // Assuming you expect a single region data, you can access the first item in the array
  const firstRegion = regionData.length > 0 ? regionData[0] : null;

  return (
    <div className="px-4 md:px-0">
      {firstRegion && (
        <>
          <Head>
            <title>{firstRegion.name} - bunkered.co.uk</title>
          </Head>
          <div className="flex justify-between py-8 items-center">
            <Breadcrumb />
            <SearchBar />
          </div>

          {/* Region text and image */}
          <div className="flex justify-between flex-col md:flex-row pb-7">
            <div className="max-w-lg w-full">
              <h1 className="text-5xl font-bold">{firstRegion.name}</h1>
              <p className="py-5">
                {firstRegion.description}
              </p>
              {/* <a href="#" className="font-bold underline">Read more</a> */}
            </div>


            <div
              className="w-full max-w-[411px] h-72"
              style={{
                backgroundImage: `url(${firstRegion.acf.image})`,
                backgroundSize: 'cover'
              }}
            >
            </div>
          </div>

          {/* Featured courses */}
          <Courses
            header="Featured courses"
            number={4}
            scroll={true}
            categoryID={firstRegion.id}
          />

          <hr className="border my-10" />


          {/* Filtered courses */}
          <Courses
            header=""
            number={12}
            scroll={false}
            categoryID={firstRegion.id}
            showCount={true}
            showFilter={true}
          />

        </>
      )}
    </div>
  );
}
