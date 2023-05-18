import Link from "next/link";
import Papa from 'papaparse';
import Hero from "./components/Hero";
import Listing from "./components/Listing";

import styles from "./page.module.css";

type ParsedData = {
  data: Array<Array<string>>;
}

export default async function Page() {

  // CSV file URL
  const fileURL = 'https://gist.githubusercontent.com/simonlast/d5a86ba0c82e1b0d9f6e3d2581b95755/raw/f608b9b896dd3339df13dae317998d5f24c00a50/edu-scorecard.csv';
  
  // Fetch the CSV file and parse it
  const response = await fetch(fileURL);
  const responseText = await response.text();
  let parsedData: ParsedData = Papa.parse(responseText, {});

  // Remove first result of parsed data (the header row)
  parsedData.data.shift();
  
  return (
    <main className={`${styles.pageWrapper} py-12 px-6 m-auto`}>
      <header className="flex justify-between">
        <div className={`${styles.logotype} font-bold text-2xl text-black`}>YourUni</div>
        <nav className={styles.topNav}>
          <ul className="m-0 p-0 list-none flex gap-6">
            <li><Link href="#" className={styles.isActive}>Product</Link></li>
            <li><Link href="#">Download</Link></li>
            <li><Link href="#">Pricing</Link></li>
          </ul>
        </nav>
      </header>

      <Hero />

      <Listing data={parsedData.data} />

    </main>
  );
}

