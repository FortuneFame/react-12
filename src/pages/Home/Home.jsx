import React from 'react';
import { Typography } from '@mui/material';
import { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
      <h1 className='text-center p-3'>Welcome to My HW-12</h1>
      <div className="container mt-4">
        <Typography variant="h6" component="div">
          <strong>Задание:</strong>
        </Typography>
        <Typography variant="body1" component="div" className="mt-2">
          <p>
            *Все компоненты окутывать во фрагменты
          </p>
          <ol>
            <li>
              Создать компонент MyRef в которой делается запрос на https://jsonplaceholder.typicode.com/users и по id пользователя,
              которое вы прописываете в поле ввода получать пользователя.
            </li>
            <li>
              Создать компонент Portal, который будет в document.body показывать текст "мой первый портал".
            </li>
            <li>
              Создать компоненту Context и поместить его в ContextOne. Создайте контекст внутри компоненты App с полем count:0,
              и при клике на кнопки + и -, добавлять или вычитать count. Поле count показывать в App и ContextOne.
            </li>
          </ol>
        </Typography>
      </div>
    </Fragment>
  );
};

export default Home;
