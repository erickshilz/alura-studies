import React from 'react';

import Tarefas from '../../types/tarefa';

import Botao from '../Botao';
import Relogio from './Relogio';
import tempoParaSegundos from '../../common/utils/time';

import style from './Cronometro.module.scss';

interface CronometroProps {
  selecionado: Tarefas | undefined;
  finalizarTarefa: () => void;
}

export default function Cronometro({
  selecionado,
  finalizarTarefa,
}: CronometroProps) {
  const [tempo, setTempo] = React.useState<number>();

  React.useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      finalizarTarefa();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro.</p>

      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>

      <Botao onClick={() => regressiva(tempo)}>Começar</Botao>
    </div>
  );
}
