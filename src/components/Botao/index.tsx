import React from 'react';

import style from './Botao.module.scss';

interface BotaoProps {
  onClick?: () => void;
  type?: 'submit' | 'button' | 'reset';
  children: React.ReactNode;
}

export default function Botao({ children, type, onClick }: BotaoProps) {
  return (
    <button
      onClick={onClick}
      type={type ? type : 'button'}
      className={style.botao}
    >
      {children}
    </button>
  );
}
