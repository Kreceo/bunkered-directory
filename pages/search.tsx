import Breadcrumb from "../components/Breadcrumb";
import Courses from "../components/Courses";
import Head from "next/head";

export default function Search() {
  return (
    <div className="px-4 md:px-0">
      <Head>
        <title>Search Courses - bunkered.co.uk</title>
      </Head>
      <div className="flex justify-between py-8 items-center">
        <Breadcrumb />
      </div>

      <Courses
        header=""
        number={16}
        scroll={false}
        showCount={true}
        showFilter={true}
      />

    </div>
  )
}