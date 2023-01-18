import React, { useEffect, useState } from 'react'
import AuthorCard from '../../components/AuthorCard';
import { favoriteAuthor } from '../../api/authorData';
import { useAuth } from '../../utils/context/authContext';

export default function FavoriteAuthors() {
  const { user } = useAuth();
  const [authors, setAuthors ] = useState([]);

  const getFavoriteAuthors = () => {
    favoriteAuthor(user.uid).then(setAuthors)
  }

  useEffect(() => {
    getFavoriteAuthors();
  }, []);
  
  return (
    <div className="d-flex flex-wrap"> {authors.map((author) => (<AuthorCard key={author.firebaseKey} authorObj={author} onUpdate={getFavoriteAuthors} />
    ))}</div>
  );
}
