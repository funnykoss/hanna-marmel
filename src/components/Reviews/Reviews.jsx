
import React from "react";
import s from './Reviews.module.css'
import { useState } from "react";
import { MdArrowForward } from 'react-icons/md';


const SendMail = () => {
     const [email, setEmail] = useState('');

  const onChange = e => {
    setEmail(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const data = JSON.stringify({ email });
    // API.setForm(data).catch(console.log('БІДА!!!'));
    setEmail('');
  };
    return (
        <div className={s.container}>
      <h3 className={s.title}>Підписка</h3>
      <form className={s.form} onSubmit={onSubmit}>
        <div className={s.flex}>
          <input
            className={s.input}
            type="text"
            /* pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"*/
            title="Email повинен бути example@ukr.net" /*доробити*/
            name="emailSubscription"
            onChange={onChange}
            placeholder="Email"
            value={email}
          />
          <button className={s.button} type="submit">
            <MdArrowForward className={s.icn} />
          </button>
        </div>
      </form>
     
    </div>
    )
}

export default SendMail