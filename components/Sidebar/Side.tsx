import React from "react";
import styles from "@/components/Sidebar/Sidebar.module.css";
import Link from "next/link";
import { VscAzureDevops } from "react-icons/vsc";
import { MdDashboard } from "react-icons/md";
import { FaFolderOpen, FaUsers } from "react-icons/fa";
import { FaSquarePollHorizontal } from "react-icons/fa6";
import { IoMdGitMerge } from "react-icons/io";
import { GoProjectRoadmap } from "react-icons/go";

export default function Header() {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <VscAzureDevops />
      </div>
      <div className={styles.sidbar}>
        <ul>
          <li>
            <Link
              href={"/"}
              className="tooltip  tooltip-right"
              data-tip="Dashboard"
            >
              <MdDashboard />
            </Link>
          </li>
          <li>
            <Link
              href={"/project"}
              className="tooltip  tooltip-right"
              data-tip="Project"
            >
              <GoProjectRoadmap />
            </Link>
          </li>

          <li>
            <Link
              href={"/users"}
              className="tooltip  tooltip-right"
              data-tip="Users"
            >
              <FaUsers />
            </Link>
          </li>

          <li>
            <Link
              href={"/task"}
              className="tooltip  tooltip-right"
              data-tip="Tasks"
            >
              <FaFolderOpen />
            </Link>
          </li>

          <li>
            <Link
              href={"/panel"}
              className="tooltip  tooltip-right"
              data-tip="Control Panel"
            >
              <IoMdGitMerge />
            </Link>
          </li>

          <li>
            <Link
              href={"/report"}
              className="tooltip  tooltip-right"
              data-tip="Report"
            >
              <FaSquarePollHorizontal />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
