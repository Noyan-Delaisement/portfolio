import { useEffect } from 'react';

export default function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} — Noyan Delaisement` : 'Noyan Delaisement — Systèmes, Réseaux & Cloud';
  }, [title]);
}
