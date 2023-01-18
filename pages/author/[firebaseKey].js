/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewAuthorDetails } from '../../api/mergedData';
import BookCard from '../../components/BookCard';

export default function ViewAuthor() {
  const [authorDetails, setAuthorDetails] = useState({});
  const router = useRouter();

  // TODO: grab firebaseKey from url
  const { firebaseKey } = router.query;

  console.warn(authorDetails);

  const getAuthorDetails = () => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  }
  // TODO: make call to API layer to get the data
  useEffect(() => {
    getAuthorDetails();
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <img src={authorDetails.image} alt={authorDetails.title} style={{ width: '300px' }} />
      </div>
      <div className="text-white ms-5 details">
        <h5>
          {authorDetails.first_name} {authorDetails.last_name}
          {authorDetails.favorite ? ' 🤍' : ''}
        </h5>
        Author Email: <a href={`mailto:${authorDetails.email}`}>{authorDetails.email}</a>
      </div>
      <div className="mt-5 d-flex flex-wrap">
        {authorDetails.books?.map((book) => <BookCard key={book.firebaseKey} bookObj={book} onUpdate={getAuthorDetails}/> )}
      </div>
    </div>
  );
}
