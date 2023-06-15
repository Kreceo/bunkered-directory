import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
import type { FilterValues } from '../types/index';

type FilterProps = {
  onChange: (values: FilterValues) => void;
};

export default function Filter({ onChange }: FilterProps) {
  const [values, setValues] = useState<FilterValues>({
    rating: '',
    type: '',
    price: '',
    distance: '',
    sortBy: '',
  });

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onChange(values);
  };

  // console.log(values);
  return (
    <form onSubmit={handleSubmit} className="flex justify-between p-4 bg-[#F5F5F6]">
      <div className="flex gap-3">
        {/* Rating */}
        <select
          name="rating"
          value={values.rating}
          onChange={handleFilterChange}
          className="py-2 px-3 rounded border text-[#20252B] text-sm"
        >
          <option value="" disabled hidden>Rating</option>
          <option>5 Star</option>
          <option>4 Star</option>
          <option>3 Star</option>
          <option>2 Star</option>
          <option>1 Star</option>
        </select>

        {/* Type */}
        <select
          name="type"
          value={values.type}
          onChange={handleFilterChange}
          className="py-2 px-3 rounded border text-[#20252B] text-sm"
        >
          <option value="" disabled hidden>Type</option>
          <option>Park</option>
          <option>Inland</option>
        </select>

        {/* Price */}
        <select
          name="price"
          value={values.price}
          onChange={handleFilterChange}
          className="py-2 px-3 rounded border text-[#20252B] text-sm"
        >
          <option value="" disabled hidden>Price</option>
          <option>Under £5</option>
          <option>£5 - £10</option>
          <option>£10 - £20</option>
          <option>Over £20</option>
        </select>

         {/* Distance */}
         <select
          name="distance"
          value={values.price}
          onChange={handleFilterChange}
          className="py-2 px-3 rounded border text-[#20252B] text-sm"
        >
          <option value="" disabled hidden>Distance</option>
          <option>5 Miles</option>
          <option>10 Miles</option>
          <option>50 Miles</option>
          <option>Over 50 Miles</option>
        </select>
      </div>

      <div>
        <span className="text-sm mr-3">Sort by:</span>
        <select
          name="sortBy"
          value={values.sortBy}
          onChange={handleFilterChange}
          className="py-2 px-3 rounded border text-[#20252B] text-sm"
        >
          <option value="" disabled hidden>Sort By</option>
          <option>Rating (High to low)</option>
          <option>Distance (Closest)</option>
        </select>
      </div>
      <FontAwesomeIcon icon={faFilter} className={'w-5 h-5 md:hidden'} />
    </form>
  );
}