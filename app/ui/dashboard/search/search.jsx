"use client";

import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Search({ placeholder }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = (e) => {
    const params = new URLSearchParams(searchParams);
    
    if (e.target.value) {
      params.set("q", e.target.value);
    } else {
      params.delete("q");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  console.log(searchParams.toString()); // Теперь параметры будут читабельными
  console.log("Current Path:", pathname);

  return (
    <div className={styles.container}>
      <MdSearch />
      <input type="text" placeholder={placeholder} className={styles.input} onChange={handleSearch} />
    </div>
  );
}
