import { ReactNode } from 'react';
import { cx } from '../../../helpers';
import styles from './styles.module.css';

interface Props {
    children: ReactNode;
    onClick: () => void;
    className?: string[];
}

export const RoundButton = ({ children, className = [], onClick }: Props) => {
  return (
      <div className={cx(styles.root, ...className)} onClick={onClick}>
          {children}
      </div>
  );
};
