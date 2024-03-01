// components/Tooltip.tsx
import React, { ReactNode } from 'react';
import styles from './Tooltip.module.css';

interface TooltipProps {
  message: string;
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ message, children }) => {
  return (
    <div className={styles.tooltipContainer}>
      <span className={styles.tooltip}>{message}</span>
      {children}
    </div>
  );
};

export default Tooltip;
