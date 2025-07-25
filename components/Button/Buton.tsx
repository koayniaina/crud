// 'use  client';
"use client";
// import React, useState  from "react";
import { FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import styles from "@/components/Button/Button.module.css";
import { useState } from "react";

export default function CreateButon() {
  const [isModal, setIsModal] = useState(false);

  const handleModal = () => {
    setIsModal(!isModal);
  };
  return (
    <div>
      <button
        onClick={handleModal}
        className="flex cursor-pointer items-center gap-1 rounded-md bg-blue-900 text-white px-2 py-2"
      >
        <FaPlus /> Create
      </button>
      {
        <span className={`${styles.modal} ${isModal ? styles.active : ""}`} >
          <IoClose  onClick={handleModal} className="text-white size-5 cursor-pointer"/>
        </span>
      }
    </div>
  );
}
