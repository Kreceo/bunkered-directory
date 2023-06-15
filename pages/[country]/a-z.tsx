import Breadcrumb from "../../components/Breadcrumb";
import SearchBar from "../../components/SearchBar";
import { useFetchPosts } from "../../lib/api";
import Link from "next/link";
import he from 'he';
import Head from "next/head";
import { useRouter } from 'next/router'

export default function AZListing() {
  const router = useRouter()
  const { country } = router.query;
  const upperCountry = country ? country.toString().charAt(0).toUpperCase() + country.slice(1) : '';

  const azCourses = useFetchPosts('854');
  const groupedCourses = azCourses.reduce((result, course) => {
    const firstLetter = course.title.rendered.charAt(0).toUpperCase();
    if (!result[firstLetter]) {
      result[firstLetter] = [];
    }
    result[firstLetter].push(course);
    return result;
  }, {});

  const alphabet = Object.keys(groupedCourses).sort();

  return (
    <div className="px-4 md:px-0">
      <Head>
        <title>A-Z {upperCountry} Courses- bunkered.co.uk</title>
      </Head>
      <div className="flex justify-between pt-7 items-center">
        <Breadcrumb />
        <SearchBar />
      </div>

      <h1 className="text-2xl font-bold py-7">A to Z list of Scottish Golf Courses</h1>

      <div className="flex gap-2 pb-7">
        {alphabet.map(letter => (
          <a
            key={letter}
            href={`#${letter}`}
            className="text-blue-500 hover:underline"
          >
            {letter}
          </a>
        ))}
      </div>

      {Object.entries(groupedCourses).map(([letter, courses]) => (
        <section key={letter} id={letter}>
          <h3 className="text-2xl font-bold pb-7">{letter}</h3>
          <div className="flex md:gap-12 mb-4 flex-col md:flex-row">
            <div>
              {/* Bunkered dropdown */}
              <ul className="text-[#0174D7] underline">
                {courses.map((course, index) => (
                  <li className="mb-2" key={index}>
                    <Link
                      href={{
                        pathname: '/[country]/[region]/[slug]',
                        query: {
                          country: course._embedded['wp:term'][0][1].slug,
                          region: course._embedded['wp:term'][0][0].slug,
                          slug: course.slug,
                        },
                      }}
                    >
                      {he.decode(course.title.rendered)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}