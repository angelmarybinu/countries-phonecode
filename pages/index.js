{/*import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Home({jsonData}) {
  return (
    <main>
    <h1>Welcome</h1>
    <h2>welcome</h2>
    </main>
  )
}*/}
// pages/index.js
{/*import styles from './styles.module.css';

import countriesData from '../public/data.json';
import React, { useState } from 'react';
const { countries } = countriesData;
export default function Home({ countriesData }) {
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; 
  const pageCount = Math.ceil(countries.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filter and display items based on the current page
  const displayedCountries = countries.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    // Filter countries based on search text
    const filteredCountries = countries.filter((country) =>
      country.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setSearchResult(filteredCountries);
  };

  
return (
<main className={styles.main}>
<div className={styles.sidebar}>
      <form onSubmit={handleSearch}>
        <input className={styles.search}
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {searchResult.map((country) => (
          <li key={country.id}>
            <div className={styles.box}>
           {/*{country.name} - {country.phoneCode}*/}
           {/*<span className={styles.countryName}>{country.name}</span> -{' '}
           <span className={styles.phoneCode}>{country.phoneCode}</span>
            </div>
          </li>
        ))}
        </ul>
    </div>
  
  <div className={styles.maincont}>
    <h1 className={styles.heading}>Countries and Phone Codes</h1>
    <ul>
      {countries.map((country) => (
        <li key={country.id}>
          <div className={styles.box}>
          <span className={styles.countryName}>{country.name}</span> - <span className={styles.phoneCode}>{country.phoneCode}</span>
          </div>
        </li>
      ))}
    </ul>
    <div className={styles.pagination}>
          {Array.from(Array(pageCount).keys()).map((index) => (
            <button
              key={index}
              className={currentPage === index + 1 ? styles.active : ''}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
  

</main>
 
);
      }
    */}
    {/*import styles from './styles.module.css';
    import React, { useState } from 'react';
    import countriesData from '../public/data.json';
    
    export default function Home() {
      const { countries } = countriesData;
      const itemsPerPage = 7;
      const [currentPage, setCurrentPage] = useState(1);
      const [searchText, setSearchText] = useState('');
      const [searchResult, setSearchResult] = useState([]);

      const handleSearch = (e) => {
        e.preventDefault();
    
        // Filter countries based on search text
        const filteredCountries = countries.filter((country) =>
          country.name.toLowerCase().includes(searchText.toLowerCase())
        );
    
        setSearchResult(filteredCountries);
      };
    
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const countriesToShow = countries.slice(startIndex, endIndex);
    
      const handlePrevPage = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      };
    
      const handleNextPage = () => {
        const maxPage = Math.ceil(countries.length / itemsPerPage);
        if (currentPage < maxPage) {
          setCurrentPage(currentPage + 1);
        }
      };
    
      return (
        <main className={styles.main}>
          <div className={styles.sidebar}>
            <input
              className={styles.search}
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button type="submit">Search</button>
    
            <ul>
              {searchResult.map((country) => (
                <li key={country.id}>
                  <div className={styles.box}>
                    <span className={styles.countryName}>{country.name}</span> -{' '}
                    <span className={styles.phoneCode}>{country.phoneCode}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
    
          <div className={styles.maincont}>
            <h1 className={styles.heading}>Countries and Phone Codes</h1>
            <ul>
              {countriesToShow.map((country) => (
                <li key={country.id}>
                  <div className={styles.box}>
                    <span className={styles.countryName}>{country.name}</span> -{' '}
                    <span className={styles.phoneCode}>{country.phoneCode}</span>
                  </div>
                </li>
              ))}
            </ul>
    
            <div className={styles.pagination}>
              <button
                className={styles.prevButton}
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                &lt; Previous
              </button>
              <button
                className={styles.nextButton}
                onClick={handleNextPage}
                disabled={endIndex >= countries.length}
              >
                Next &gt;
              </button>
            </div>
          </div>
        </main>
      );
    }*/}
    import styles from './styles.module.css';
import React, { useState } from 'react';
import countriesData from '../public/data.json';

export default function Home() {
  const { countries } = countriesData;
  const itemsPerPage = 7;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    // Filter countries based on search text
    const filteredCountries = countries.filter((country) =>
      country.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setSearchResult(filteredCountries);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const countriesToShow = countries.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const maxPage = Math.ceil(countries.length / itemsPerPage);
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.sidebar}>
        <form onSubmit={handleSearch}>
          <input
            className={styles.search}
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        <ul>
          {searchResult.length > 0 ? (
            searchResult.map((country) => (
              <li key={country.id}>
                <div className={styles.box}>
                  <span className={styles.countryName}>{country.name}</span> -{' '}
                  <span className={styles.phoneCode}>{country.phoneCode}</span>
                </div>
              </li>
            ))
          ) : (
            <li>No search results found.</li>
          )}
        </ul>
      </div>

      <div className={styles.maincont}>
        <h1 className={styles.heading}>Countries and Phone Codes</h1>
        <ul>
          {countriesToShow.map((country) => (
            <li key={country.id}>
              <div className={styles.box}>
                <span className={styles.countryName}>{country.name}</span> -{' '}
                <span className={styles.phoneCode}>{country.phoneCode}</span>
              </div>
            </li>
          ))}
        </ul>

        <div className={styles.pagination}>
          <button
            className={styles.prevButton}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            &lt; Previous
          </button>
          <button
            className={styles.nextButton}
            onClick={handleNextPage}
            disabled={endIndex >= countries.length}
          >
            Next &gt;
          </button>
        </div>
      </div>
    </main>
  );
}

    