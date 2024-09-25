"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Search() {
  const route = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const onSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    const newSarchParams = new URLSearchParams(searchParams.toString());

    if (searchValue) {
      newSarchParams.set("q", searchValue);
    } else {
      newSarchParams.delete("q");
    }
    route.push(`${pathName}?${newSarchParams.toString()}`);
  };

  return (
    <form onSubmit={onSearch} className="relative">
      <input
        type="text"
        name="search"
        placeholder="جستجو ..."
        autoComplete="off"
        className="textField__input py-3 text-xs bg-secondary-0"
      />
      <button
        type="submit"
        className="absolute left-0 top-0 ml-3 flex h-full items-center"
      >
        <MagnifyingGlassIcon className="h-4 text-secondary-400" />
      </button>
    </form>
  );
}
