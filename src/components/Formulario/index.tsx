import React from 'react';

import Tarefas from '../../types/tarefa';

import Botao from '../Botao';

import style from './Formulario.module.scss';

import { v4 as uuidv4 } from 'uuid';

export default function Formulario({
  setTarefas,
}: {
  setTarefas: React.Dispatch<React.SetStateAction<Tarefas[] | []>>;
}) {
  const [tarefa, setTarefa] = React.useState('');
  const [tempo, setTempo] = React.useState('');

  function adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      {
        tarefa,
        tempo,
        selecionado: false,
        completado: false,
        id: uuidv4(),
      },
    ]);
    setTarefa('');
    setTempo('00:00:00');
  }

  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor='tarefa'>Adicione um novo estudo</label>
        <input
          type='text'
          name='tarefa'
          id='tarefa'
          placeholder='O que você quer estudar?'
          required={true}
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
        />
      </div>

      <div className={style.inputContainer}>
        <label htmlFor='tempo'>Tempo</label>
        <input
          type='time'
          step={1}
          name='tempo'
          id='tempo'
          min='00:00:00'
          max='99:59:59'
          required={true}
          value={tempo}
          onChange={(e) => setTempo(e.target.value)}
        />
      </div>

      <Botao type='submit'>Adicionar</Botao>
    </form>
  );
}
