import React from "react";
import Membre from "../Membre";
import { FaPlus } from "react-icons/fa";

export default function User() {
  return (
    <div>
      <div className="tabs h-full tabs-box">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab "
          aria-label="Members"
        />
        <div className="tab-content bg-base-100   border-base-300 mt-3  p-6">
          <div className="mb-5">
            <button className="bg-indigo-700 text-white px-4 py-1.5 rounded-sm cursor-pointer flex items-center gap-2">
              <FaPlus /> Add New
            </button>
          </div>
          <Membre />
        </div>

        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="Admins"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300  mt-3  not-first-of-type:p-6">
          Tab content 2
        </div>
      </div>
    </div>
  );
}
