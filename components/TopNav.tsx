import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faBars, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { useFetchMenus } from "../lib/api";
import Link from "next/link";

export default function TopNav() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const menuData = useFetchMenus(9111);

  if (!menuData || !menuData.items || !Array.isArray(menuData.items)) {
    return;
  }

  return (
    <nav className="bg-[#1d262f] sticky md:relative top-0 z-10">
      <div className="flex items-center justify-between p-5">

        {/* Dropdown menu */}
        <div className="flex-1 md:block md:w-auto" id="navbar-dropdown">
          <ul>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="text-white flex items-center"
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              >
                <FontAwesomeIcon icon={faBars} className={'w-6 h-6 mr-2'} />
                {isDropdownOpen ? 'Close' : 'Menu'}
              </button>

              {/* Dropdown menu */}
              <div
                id="dropdownNavbar"
                className={`z-10 ${isDropdownOpen ? '' : 'hidden'} absolute bg-white rounded-lg shadow-lg`}>
                <div className="grid grid-cols-2 gap-8 p-5">

                  {/* Loop here */}
                  {menuData.items.map((item) => (
                    <ul className="text-sm">
                      <li className="text-lg font-bold mb-2">
                        <Link href={item.url}>
                          {item.title}
                        </Link>
                      </li>

                      {item.children && (
                        <div>
                          {item.children.map((childItem) => (
                            <li className="mb-1">
                              <Link href={childItem.url}>
                                {childItem.title}
                              </Link>
                            </li>
                          ))}
                        </div>
                      )}
                    </ul>
                  ))}
                  {/* End loop here */}

                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <a href="#" className="flex-1">
          <img
            src="https://d23jngptvnttd7.cloudfront.net/2022/11/14164452/white-logo-header-1.png"
            alt="Bunkered Logo"
            className="m-auto"
          />
        </a>

        {/* Social and subscribe */}
        <div className="flex flex-1 space-x-3 items-center justify-end">
          <a href="https://twitter.com/BunkeredOnline" className="bg-[#4ca5e3] rounded-full p-1 hidden md:block">
            <FontAwesomeIcon icon={faTwitter} className={'flex p-1.5 w-2.5 h-2.5 text-white'} />
          </a>

          <a href="https://www.facebook.com/BunkeredOnline" className="bg-[#356bc5] rounded-full p-1 hidden md:block">
            <FontAwesomeIcon icon={faFacebookF} className={'flex p-1.5 w-2.5 h-2.5 text-white'} />
          </a>
          <ul className="text-white flex items-center ml-3">
            <li>Subscribe</li>
            <FontAwesomeIcon icon={faArrowRight} className={'w-4 h-4 ml-1 text-[#4ca5e3]'} />
          </ul>
        </div>
      </div>
    </nav >
  )
}