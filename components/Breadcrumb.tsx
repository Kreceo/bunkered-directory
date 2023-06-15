import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type BreadcrumbItem = {
  href: string;
  label: string;
};

export default function Breadcrumb() {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);

  useEffect(() => {
    const pathWithoutQuery = router.asPath.split("?")[0];
    let pathArray = pathWithoutQuery.split("/");
    pathArray.shift();
    pathArray = pathArray.filter((path) => path !== "");
  
    const breadcrumbs = pathArray.map((path, index) => {
      const href = "/" + pathArray.slice(0, index + 1).join("/");
      const words = path.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1));
      const label = words.join(" ");
      return {
        href,
        label,
      };
    });
  
    setBreadcrumbs(breadcrumbs);
  }, [router.asPath]);

  return (
    <nav aria-label="Breadcrumb" className="w-full">
      <ul className="flex space-x-1 md:space-x-3">
      {/* <li>
          <Link href="/" className="text-sm text-[#6B7280] underline">
            Home
          </Link>
        </li> */}
        <li>
          {/* <FontAwesomeIcon icon={faAngleRight} className={'w-3 h-3 text-[#6B7280]'} /> */}
          <Link href="/" className="text-sm text-[#6B7280] underline">
            Directory
          </Link>
        </li>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index}>
            <FontAwesomeIcon icon={faAngleRight} className={'w-3 h-3 text-[#6B7280]'} />
            <Link href={breadcrumb.href} className="ml-1 text-sm text-[#6B7280] underline md:ml-2">
              {breadcrumb.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
