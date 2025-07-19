import Link from "next/link";
import React from "react";
import { IoMdTrash } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";

export default function Table() {
  return (
    <div className="overflow-x-auto bg-base-100">
      <table className="table">
        <thead>
          <tr className=" text-center">
            <th>#</th>
            <th>Membre Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Status</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>0345456789</td>
            <td>ert@gmail.com</td>
            <td>Active</td>
            <td className="flex items-center justify-center gap-3 text-center">
              <Link href={"#"}>
                <MdModeEditOutline className="text-blue-700 size-5" />
              </Link>
              <Link href={"#"}>
                <IoMdTrash className="text-red-600 size-5" />
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
