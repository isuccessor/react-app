// * Base
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// * Components
import Wrapper from '../Wrapper/Wrapper';

const Blog = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(({ data }) => {
        setList(data);
      })
      .catch((error) => {
        console.log('Помилка завантаження елементу!');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [list]);

  if (loading) {
    return (
      <Wrapper>
        <p>Дані завантажуються...</p>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <ul>
        {list.length ? (
          list.map(({ body, title, id }) => (
            <Item title={title} body={body} key={`list-item-${id}`} />
          ))
        ) : (
          <p>Дані неможливо завантажити!</p>
        )}
      </ul>
    </Wrapper>
  );
};

const Item = ({ title, body }) => {
  return (
    <li>
      <h4>{title}</h4>
      <p>{body}</p>
    </li>
  );
};

export default Blog;
