import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRss, faCommentDots, faPersonChalkboard, faGolfBallTee, faFilm, faBookmark, faFlag } from "@fortawesome/free-solid-svg-icons";
import { useFetchMenus } from "../lib/api";
import Link from "next/link";

const iconNames = [
  faRss, 
  faCommentDots, 
  faPersonChalkboard, 
  faGolfBallTee, 
  faFilm, 
  faBookmark, 
  faFlag
];

export default function SubNav() {
  const menuData = useFetchMenus(9110);

  if (!menuData || !menuData.items || !Array.isArray(menuData.items)) {
    return;
  }

  return (
    <header>
      <div className="bg-[#d82a2d]">
        <div className="p-5 grid gap-8 grid-cols-navScroll overflow-x-auto">

          {/* Loop here */}
          {menuData.items.map((item, index) => (
            <div className="w-full text-white" key={item.id}>
              <ul className="text-xs">
                <li className="md:mb-3 text-sm font-semibold">
                  <Link href={item.url} className="hover:underline flex flex-col md:flex-row items-center">
                    <FontAwesomeIcon icon={iconNames[index % iconNames.length]} className={'md:mr-2 mb-1'} />
                    {item.title}
                  </Link>
                </li>

                {item.children && (
                  <div className="hidden md:block">
                    {item.children.map((childItem) => (
                      <li key={childItem.id} className="mb-1">
                        <Link href={childItem.url} className="hover:underline">{childItem.title}</Link>
                      </li>
                    ))}
                  </div>
                )}
              </ul>
            </div>
          ))}
          {/* End loop */}

        </div>
      </div>
    </header>
  )
}