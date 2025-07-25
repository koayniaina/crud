import React from "react";
import { FaPlus } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import MembreList from "../MembreList";
import CreateButon from "../Button/Buton";

export default function User() {
  return (
    <div>
      <div className="tabs h-full tabs-box">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab "
          aria-label="Members"
          defaultChecked
        />
        <div className="tab-content bg-base-100 mt-3 border-base-300">
          <div className="flex gap-3 justify-center items-center m-3">
           <span>
            <CreateButon/>
           </span>
            <span className="border-1 w-[100%] px-3 py-1.5 rounded-sm  flex gap-2 items-center">
              <IoSearch />
              <input
                type="search"
                name=""
                placeholder="Email ...."
                className="w-full outline-0 border-0"
              />
            </span>
          </div>
          <MembreList />
        </div>

        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="Admins"
        />
        <div className="tab-content bg-base-100 border-base-300  mt-3  not-first-of-type:p-6">
          Tab content 2
        </div>
      </div>
    </div>
  );
}
