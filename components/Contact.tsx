import type { CourseData } from '../types/index';

type Props = {
  data: CourseData;
};

export default function Contact({data}: Props) {
  return (
    <div className="w-full shadow-lg rounded px-6 py-10">
      <h3 className="text-lg font-bold mb-3">Contact</h3>
      {/* TODO: To re-add after google maps acf fix <p className="mt-2 text-sm font-bold">Address: <span className="text-sm font-normal">{data.acf.contact_info.address}</span></p> */}
      <p className="mt-2 text-sm font-bold">Website: <a href="#" className="underline text-[#0174D7] font-normal">{data.acf.contact.website}</a></p>
      <p className="mt-2 mb-5 text-sm font-bold">Email: <a href="#" className="underline text-[#0174D7] font-normal">{data.acf.contact.email}</a></p>
      <button className="py-2 px-4 bg-[#d82a2d] w-full text-sm text-white rounded">Contact us</button>
    </div>
  )
}