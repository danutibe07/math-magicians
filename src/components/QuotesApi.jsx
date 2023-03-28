import React, { useEffect, useState } from 'react';
import axios from 'axios';

function QuotesApi() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const ApiKey = 'xyYovpvJWuK/3VYUQggBFQ==Ep1VlB5MOqrnejpl';
  const category = 'happiness';
  const fetchData = async () => {
    setLoading(true);
    await axios
      .get(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
        headers: {
          'x-api-key': ApiKey,
        },
      })
      .then((response) => {
        setQuotes(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main>
      {loading && <div> Loading, please wait... </div>
        ? !!quotes
          && quotes.map((text) => (
            <p key={text.quote}>
              &quot;
              {text.quote}
              &quot;
            </p>
          ))
        : error && <div> Something went wrong </div>}
    </main>
  );
}

export default QuotesApi;
