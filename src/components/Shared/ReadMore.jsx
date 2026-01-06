import { useState } from 'react';
import './ReadMore.css';

export default function ReadMore({ text = '', limit = 120 }) {
  const [expanded, setExpanded] = useState(false);
  if (!text) return null;

  const isLong = text.length > limit;
  const display = !isLong ? text : (expanded ? text : text.slice(0, limit).trim() + '...');

  return (
    <p className={`readmore ${expanded ? 'expanded' : ''}`} onClick={() => isLong && setExpanded(v => !v)}>
      {display}
      {isLong && !expanded && <span className="readmore-hint"> Leer más</span>}
    </p>
  );
}
