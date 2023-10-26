import Tarefas from '../../types/tarefa';

import Item from './Item';
import styles from './Lista.module.scss';

interface ListaProps {
  tarefas: Tarefas[];
  selecionaTarefa: (tarefaSelecionada: Tarefas) => void;
}

export default function Lista({ tarefas, selecionaTarefa }: ListaProps) {
  return (
    <aside className={styles.listaTarefas}>
      <h2>Estudos do Dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item selecionaTarefa={selecionaTarefa} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}
