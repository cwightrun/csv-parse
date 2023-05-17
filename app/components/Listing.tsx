'use client';

import { useState } from "react";
import Link from "next/link";
import parseUrl from "parse-url";

import styles from "./Listing.module.css"

interface Props {
  data: Array<Array<string>>;
}

// Primary listing component
export default function Listing({data}: Props) {

  const [results, setResults] = useState(data);

  // Function to handle the search filter input action
  const handleFilter = (e: any) => {
    
    // Normalize he search input value
    const inString = e.target.value.toLowerCase();
    
    // Filter the data based on the search input
    const filteredResults = data.filter((row: Array<string>) => 
      row[1].toLowerCase().includes(inString)
      || row[2].toLowerCase().includes(inString)
      || row[3].toLowerCase().includes(inString)
      || row[4].toLowerCase().includes(inString));

    // Update state to matching results
    setResults(filteredResults);
    
  }

  return (
    <div className={`${styles.listing} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6`}>

        <form className="sm:col-span-2 md:col-span-3 lg:col-span-4 pb-14" role="search">
            <input type="search"
            className="border-2 border-gray-200 text-sm rounded w-full py-2 px-4 w-full max-w-sm"
            name="Search" placeholder="Search&hellip;" onKeyUp={(e) => { handleFilter(e); }} />
        </form>

        {results.map((row: Array<string>, index: number) => {
          
            // if the URL doesn't start with http or https, add it and parse
            let url = (!row[4].startsWith("http")) ? parseUrl(`https://${row[4]}`) : parseUrl(row[4]);

            // Use the "resource" value for the link title
            let linkTitle = url.resource;

            // Remove any "www." from the link title
            if (linkTitle.startsWith("www.")) linkTitle = linkTitle.slice(4);

            // Remove any trailing slashes from the link title
            if (linkTitle.endsWith("/")) linkTitle = linkTitle.slice(0, -1);

            return (
              <div className={`mb-8 ${styles.listingItem}`} key={index}>
                <div className="rounded">
                  <p>{row[2]} &bull; {row[3]}</p>
                  <h3 className="text-black">{row[1]}</h3>
                  <Link href={url}>{linkTitle}</Link>
                </div>
              </div>
            );
          })
        }
    </div>
  );
}
