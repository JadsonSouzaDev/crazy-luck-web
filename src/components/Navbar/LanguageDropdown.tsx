"use client";
import { useRouter, usePathname } from "next/navigation";
import Dropdown, { DropdownOption } from "../Dropdown";

export const LanguageDropdown = () => {
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    { value: "pt", label: "Português" },
    { value: "en", label: "English" },
  ];

  const selectedLanguage = () => {
    let splittedPathname = pathname.split("/");
    const language = splittedPathname[1];
    const selected = languages.find((l) => l.value === language);
    return selected as DropdownOption;
  };

  const onSelectLanguage = (selectedLanguage: DropdownOption) => {
    let splittedPathname = pathname.split("/");
    splittedPathname[1] = selectedLanguage.value;
    const newPathname = splittedPathname.join("/");
    router.push(newPathname);
  };

  return (
    <Dropdown
      options={languages}
      selectedValue={selectedLanguage()}
      onSelect={onSelectLanguage}
    />
  );
};
