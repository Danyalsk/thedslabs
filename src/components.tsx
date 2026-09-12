import { useEffect, useRef } from 'react';
import {
  ArrowUpRight,
  AudioLines,
  Box,
  ChartNoAxesCombined,
  Code2,
  Compass,
  Fingerprint,
  PenTool,
  Settings2,
  Sparkles,
  TrendingUp,
  Users,
  X,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { CapabilityId, Detail } from './data';
import { capabilities } from './data';
export const icons: Record<CapabilityId, LucideIcon> = {
  technology: Code2,
  creative: PenTool,
  content: AudioLines,
  marketing: TrendingUp,
  sales: Users,
  operations: Settings2,
  analytics: ChartNoAxesCombined,
  automation: Sparkles,
  physical: Box,
};
export function Mark({ className = '' }: { className?: string }) {
  return (
    <svg className={`brand-mark ${className}`} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16 3v26M4.75 9.5l22.5 13M4.75 22.5l22.5-13"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}
export function OpenButton({
  detail,
  onSelect,
  children,
  className = '',
  ...rest
}: {
  detail: Detail;
  onSelect: (detail: Detail) => void;
  children: React.ReactNode;
  className?: string;
  'aria-label'?: string;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => onSelect(detail)}
      aria-haspopup="dialog"
      {...rest}
    >
      {children}
    </button>
  );
}
export function DetailPanel({
  detail,
  onClose,
  onSelect,
}: {
  detail: Detail | null;
  onClose: () => void;
  onSelect: (detail: Detail) => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const title = useRef<HTMLHeadingElement>(null);
  const isOpen = !!detail;
  useEffect(() => {
    const element = dialog.current;
    if (!element || !isOpen) return;
    element.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);
  useEffect(() => {
    if (detail) {
      title.current?.focus();
      dialog.current?.scrollTo(0, 0);
    }
  }, [detail]);

  return (
    <dialog
      ref={dialog}
      className={`detail-panel tone-${detail?.tone || 'teal'}`}
      aria-labelledby="detail-title"
      onKeyDown={(event) => {
        if (event.key !== 'Tab') return;
        const controls = Array.from(
          event.currentTarget.querySelectorAll<HTMLButtonElement>('button:not([disabled])'),
        );
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (
          event.shiftKey &&
          (document.activeElement === first || document.activeElement === title.current)
        ) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {detail && (
        <div className="detail-inner">
          <div className="detail-top">
            <Mark />
            <span>INSIDE THE ECOSYSTEM</span>
            <button className="close-detail" onClick={onClose} aria-label="Close details">
              <X size={21} />
            </button>
          </div>
          <p className="eyebrow detail-eyebrow">{detail.eyebrow}</p>
          <h2 id="detail-title" ref={title} tabIndex={-1}>
            {detail.label}
          </h2>
          <p className="detail-description">{detail.description}</p>
          {detail.principle && (
            <div className="detail-principle">
              <Compass size={19} />
              <p>{detail.principle}</p>
            </div>
          )}
          <div className="detail-section-heading">
            <h3>
              {capabilities.some((c) => c.id === detail.id)
                ? 'What this can include'
                : 'How it takes shape'}
            </h3>
            <span>{String(detail.items.length).padStart(2, '0')}</span>
          </div>
          <ul className="detail-items">
            {detail.items.map((item) => (
              <li key={item}>
                <span />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="detail-related">
            <span className="eyebrow">CONNECTED CAPABILITIES</span>
            <p>Assembled around what the opportunity needs.</p>
            <div>
              {detail.related.map((id) => {
                const cap = capabilities.find((c) => c.id === id)!;
                const Icon = icons[id];
                return (
                  <button key={id} onClick={() => onSelect(cap)}>
                    <Icon size={14} />
                    {cap.shortLabel}
                    <ArrowUpRight size={12} />
                  </button>
                );
              })}
            </div>
          </div>
          <div className="detail-bottom">
            <Fingerprint size={17} />
            <span>One connected system. Open-ended possibilities.</span>
          </div>
        </div>
      )}
    </dialog>
  );
}
