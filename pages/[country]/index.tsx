import Breadcrumb from "../../components/Breadcrumb";
import SearchBar from "../../components/SearchBar";
import Courses from "../../components/Courses";
import Link from "next/link";
import { useRouter } from "next/router";
import { useFetchCustomTaxonomy } from "../../lib/api";
import PopularRegions from "../../components/PopularRegions";
import Head from "next/head";

export default function Country() {
  const router = useRouter()
  const country = router.query.country as string;
  const countryData = useFetchCustomTaxonomy(country as string);
  const firstCountry = countryData.length > 0 ? countryData[0] : null;
  
  return (
    <div className="px-4 md:px-0">
      {firstCountry && (
        <>
          <Head>
            <title>{firstCountry.name} - bunkered.co.uk</title>
          </Head>
          <div className="flex justify-between pt-7 items-center">
            <Breadcrumb />
            <SearchBar />
          </div>

          <h1 className="text-5xl font-bold py-7">{firstCountry.name}</h1>

          <div className="flex justify-between flex-col md:flex-row pb-7">
            <div className="max-w-lg w-full">
              <p>
                {firstCountry.description}
              </p>
            </div>
            <div className="w-full max-w-[411px]">
              <div className="flex mb-4 md:flex-row justify-between">
                {/* Bunkered dropdown */}
                <ul className="w-full text-xs columns-2 text-[#0174D7] underline">
                  {countryData.map((region, index) => (
                    index !== 0 && (
                      <li className="mb-2">
                        <Link
                          key={index}
                          href={{
                            pathname: '/[country]/[region]',
                            query: { country: firstCountry.slug, region: region.slug }
                          }}
                        >
                          {region.name}
                          {region.count && ` (${region.count})`}
                        </Link>
                      </li>
                    )
                  ))}
                </ul>
              </div>
              <Link
                href={{
                  pathname: '/[country]/a-z',
                  query: { country: country }
                }}
                className="font-bold text-[#0174D7] underline"
              >
                A-Z listing golf courses in {firstCountry.name}
              </Link>
            </div>
          </div>

          {/* Featured courses */}
          <Courses
            header="Featured courses"
            number={4}
            scroll={true}
            categoryID={firstCountry.id}
          />

          <hr className="border my-10" />

          {/* Filtered courses */}
          <Courses
            header=""
            number={12}
            scroll={false}
            categoryID={firstCountry.id}
            showCount={true}
            showFilter={true}
          />

          {/* Popular regions */}
          <PopularRegions />

        </>
      )}
    </div>
  )
}