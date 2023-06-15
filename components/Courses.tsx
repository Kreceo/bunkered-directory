import Card from './Card';
import Link from "next/link";
import { useFetchPosts, useFetchPostsBySearch } from '../lib/api';
import { useRouter } from "next/router";
import PopularRegions from './PopularRegions';
import Filter from "./Filter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react';
import GoogleMap from "./GoogleMap";
import { useQueryClient } from 'react-query';

type Props = {
  header: string;
  number: number;
  scroll: boolean;
  categoryID?: number;
  showCount?: boolean
  showFilter?: boolean;
};

export default function Courses({ header, number, scroll, categoryID, showCount, showFilter }: Props) {
  const router = useRouter();
  const { slug } = router.query;
  const { searchQuery } = router.query;
  const [query, setQuery] = useState(searchQuery || '');
  const [viewMode, setViewMode] = useState('list');

  let posts = [];

  if (router.pathname === '/search' && searchQuery != '') {
    posts = useFetchPostsBySearch(query?.toString() || '');
  } else {
    // const fetchCategoryID = categoryID ? categoryID.toString() : undefined;
    // posts = useFetchPosts(fetchCategoryID, slug as string);
    const postsQuery = useFetchPosts(categoryID, slug as string);
    posts = postsQuery ?? [];
  }


  // TODO:
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formElements = event.currentTarget.elements as HTMLFormControlsCollection & {
      search: { value: string };
    };

    setQuery(formElements.search.value);
  };

  return (
    <>
      {showFilter &&
        <div className="flex justify-between py-5 items-end">
          {router.pathname === '/search' ?
            <div className="flex flex-col w-full">
              <h2 className="text-2xl pb-5">Search results for <span className="font-bold">{query}</span></h2>
              <form
                onSubmit={handleSubmit}
                className="flex flex-nowrap gap-2 w-full"
              >
                <input
                  name="search"
                  placeholder="Search for a golf course or location"
                  className="rounded p-3 border border-[#cccccc] bg-[#F8F8F8] text-sm max-w-[350px] w-full"
                />
                <button className="py-3 px-5 bg-[#d82a2d] text-sm text-white rounded">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </form>
            </div>
            : <h2 className="text-2xl font-bold">All golf courses in</h2>
          }
          {showFilter &&
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                className={`px-4 py-1.5 text-sm font-medium border border-1 rounded-l ${viewMode === 'list' ? 'bg-black text-white' : 'bg-[#F8F8F8]'}`}
                onClick={() => setViewMode('list')}
              >
                List
              </button>
              <button
                type="button"
                className={`px-4 py-1.5 text-sm font-medium border rounded-r ${viewMode === 'map' ? 'bg-black text-white' : 'bg-[#F8F8F8]'}`}
                onClick={() => setViewMode('map')}
              >
                Map
              </button>
            </div>
          }
        </div>
      }
      <div className="flex flex-col mb-4">

        {showFilter && <Filter />}

        {header && <h2 className="text-2xl mb-4">{header}</h2>}
        
        {viewMode === 'list' && posts.length === 0 ?
          <>
            <h2 className='mt-7 text-3xl'>No results, please search something else.</h2>
            <PopularRegions />
          </>
          :
          <>
            {showCount && <h4 className="my-4">{posts.length} golf courses</h4>}
            <div className={`grid gap-4 ${scroll ? 'grid-cols-courseScroll overflow-x-auto whitespace-nowrap' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4'}`}>
              {posts.slice(0, number).map((data) => (
                <Card key={data.id} scroll={scroll} data={data} />
              ))}
            </div>
            {posts.length >= 9 &&
              <div className="flex justify-center mb-8">
                <Link href="/search" className="rounded border-2 border-[#2D3648] font-bold py-2 px-8">
                  See more
                </Link>
              </div>
            }
          </>
        }

        {viewMode === 'map' &&
          <GoogleMap
            height="750"
          />
        }
      </div>
    </>
  )
}