import { useOutsideClick } from "@/hooks/useOutsideClick";
import React, { useState } from "react";
import Anchor from "../Anchor";
import { Text } from "@/components/Text";

export type DropdownOption = {
  value: string;
  label: string;
  icon?: SVGElement;
};

type DropdownProps = {
  options: DropdownOption[];
  selectedValue: DropdownOption;
  onSelect: (option: DropdownOption) => void;
};

export default function DropdownComponent({
  options,
  selectedValue,
  onSelect,
}: DropdownProps) {
  const [opened, setOpened] = useState(false);
  const ref = useOutsideClick(() => setOpened(false));

  return (
    <div>
      <button
        ref={ref}
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-sm focus:outline-none rounded-lg px-4 py-2.5 text-center inline-flex items-center text-black-500 hover:text-lime-500"
        type="button"
        onClick={() => setOpened(!opened)}
      >
        <Text>{selectedValue.label || options[0].label || ""} </Text>
        <svg
          className={`w-4 h-4 ml-2 ${opened ? "rotate-180" : ""}`}
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <div
        id="dropdown"
        className={`absolute z-10 ${
          !opened ? "hidden" : ""
        } bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-lime-700`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-lime-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {options.map((option) => {
            return (
              <li key={option.value}>
                <Anchor
                  onlyCursor
                  onClick={() => {
                    onSelect(option);
                    setOpened(false);
                  }}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-lime-600 dark:hover:text-white"
                >
                  {option.label}
                </Anchor>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
