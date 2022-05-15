import React from "react";
import Arrow from "../assets/arrow.svg";
import {
  RiCheckboxCircleLine,
  Ri24HoursLine,
  RiSecurePaymentLine,
  RiMoneyDollarCircleLine,
} from "react-icons/ri";

const Offer = () => {
  return (
    <div className="w-full grid md:grid-cols-[1.5fr_1fr_1fr] gap-10 md:mt-20 mt-10 md:px-20 px-10">
      <div className="grid gap-y-10">
        <h2 className="text 5xl md:text-6xl">
          We're ready to protect your props.
        </h2>
        <img src={Arrow} alt="arrow" />
      </div>
      <div>
        <div className="min-h-[220px]">
          <RiCheckboxCircleLine size={24} />
          <h3 className="py-5 text-2xl">Certificed platform</h3>
          <p className="text-sm text-gray-400">
          Then it&rsquo;s time to&nbsp;get your beak wet tonight playa! Awww, it&rsquo;s you guys! You&rsquo;re missing the point Morty. Why would he&nbsp;drive a&nbsp;smaller toaster with wheels?
          </p>
        </div>
        <div className="min-h-[220px]">
          <RiSecurePaymentLine size={24} />
          <h3 className="py-5 text-2xl">High Security</h3>
          <p className="text-sm text-gray-400">
          Nice, Mrs Pancakes. Real nice. Whose kidneys are these? Full disclosure, Morty&nbsp;&mdash; it&rsquo;s not. Temporary superintelligence is&nbsp;just a&nbsp;side effect of&nbsp;the Megaseeds dissolving in&nbsp;your rectal cavity. It&rsquo;s called carpe diem Morty. Look it&nbsp;up.
          </p>
        </div>
      </div>
      <div>
        <div className="min-h-[220px]">
          <Ri24HoursLine size={24} />
          <h3 className="py-5 text-2xl">Customer Support</h3>
          <p className="text-sm text-gray-400">
          Please god, oh&nbsp;lord, hear my&nbsp;prayers...! YES! Fuck you god, not today bitch! Then it&rsquo;s time to&nbsp;get your beak wet tonight playa!
          </p>
        </div>
        <div className="min-h-[220px]">
          <RiMoneyDollarCircleLine size={24} />
          <h3 className="py-5 text-2xl">Friendly Budget</h3>
          <p className="text-sm text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
            harum quos repellendus maxime dolor excepturi, voluptas obcaecati
            explicabo ab, totam rerum cum neque quasi qui fugit velit impedit ex
            voluptates!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offer;
