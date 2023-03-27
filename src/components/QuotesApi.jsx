import React, { useEffect, useState } from 'react';
import axios from 'axios';

function QuotesApi() {
  const [quotes, setQuotes] = useState([]);
  const ApiKey = 'xyYovpvJWuK/3VYUQggBFQ==Ep1VlB5MOqrnejpl';
  const category = 'happiness';
  const fetchData = async () => {
    await axios.get(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      headers: {
        'x-api-key': ApiKey,
      },
    })
      .then((response) => {
        console.log(response);
        setQuotes(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main>
      {quotes.map((text) => (
        <p key={text.quote}>
          &quot;
          {text.quote}
          &quot;
        </p>
      ))}
    </main>
  );
}

export default QuotesApi;
