import BorderedTitle from "./BorderdTitle"
import RegionCard from "./RegionCard";
import Link from "next/link";
import { useRouter } from "next/router";
import { useFetchCustomTaxonomy } from '../lib/api';

export default function PopularRegions() {
  const router = useRouter();
  const { country } = router.query;
  const defaultCountry = "scotland";
  const regions = useFetchCustomTaxonomy(country as string || defaultCountry);
  const firstCountry = regions.length > 0 ? regions[0].slug : null;

  // console.log(regions);
  return (
    <>
      {/* Popular regions - 4 cards */}
      <BorderedTitle
        title={`Popular ${firstCountry} regions`}
      />

      <div className="flex gap-4 mb-8 overflow-x-scroll">
        {regions.map((region, index) => (
          index !== 0 && (
            <Link
              key={index}
              href={{
                pathname: '/[country]/[region]',
                query: { country: firstCountry, region: region.slug }
              }}
            >
              <RegionCard
                image={region.acf.image}
                title={region.name}
                height="172"
              />
            </Link>
          )
        ))}
      </div>
    </>
  )
}