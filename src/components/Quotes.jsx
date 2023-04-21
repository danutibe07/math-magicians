import React, { useState, useEffect } from 'react';

function Quotes() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  const setError = null;
  const ApiKey = 'xyYovpvJWuK/3VYUQggBFQ==Ep1VlB5MOqrnejpl';
  const category = 'happiness';

  async function fetchData() {
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/quotes?category=${category}`,
        {
          headers: {
            'x-api-key': ApiKey,
          },
        },
      );
      const jsonData = await response.json();
      setData(jsonData);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      {/* <div>{error && <ErrorMessage /> }</div> */}
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {data.map((item) => (
              <li key={item.quote}>{item.quote}</li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );

  // function ErrorMessage() {
  //   return <p>{error}</p>;
  // }
}

export default Quotes;
