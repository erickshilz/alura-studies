import React from 'react';

import Tarefas from './types/tarefa';

import Cronometro from './components/Cronometro';
import Formulario from './components/Formulario';
import Lista from './components/Lista';

import style from './styles/style.module.scss';

export default function App() {
  const [tarefas, setTarefas] = React.useState<Tarefas[] | []>([]);
  const [selecionado, setSelecionado] = React.useState<Tarefas>();

  function selecionaTarefa(tarefaSelecionada: Tarefas) {
    setSelecionado(tarefaSelecionada);

    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
      })),
    );
  }

  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas((tarefasAnteriores) =>
        tarefasAnteriores.map((tarefa) => {
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false,
              completado: true,
            };
          }

          return tarefa;
        }),
      );
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa} />
    </div>
  );
}
