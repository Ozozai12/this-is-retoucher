import { Sidebar } from 'components/Sidebar/Sidebar';
import css from './General.module.css';

export function General() {
  return (
    <div className={css.container}>
      <Sidebar />
    </div>
  );
}
