'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { MessageSquarePlus, X, Send } from 'lucide-react';

export default function FeedbackModal() {
  const t = useTranslations('feedback');
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [contact, setContact] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setStatus('sending');

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, contact }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('');
        setContact('');
        setTimeout(() => {
          setIsOpen(false);
          setStatus('idle');
        }, 2000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white px-5 py-3 rounded-2xl shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all hover:scale-105 flex items-center gap-2 cursor-pointer group"
      >
        <MessageSquarePlus className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        <span className="font-medium">{t('button')}</span>
      </button>

      {/* Modal backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal content */}
          <div
            className="bg-[var(--background)] border border-[var(--card-border)] rounded-2xl w-full max-w-md p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-[var(--text-primary)]">
                  {t('title')}
                </h2>
                <p className="text-[var(--text-secondary)] text-sm">
                  {t('subtitle')}
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer hover:bg-[var(--surface)] rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t('messagePlaceholder')}
                  rows={4}
                  className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--card-border)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder={t('contactPlaceholder')}
                  className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--card-border)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              {status === 'success' && (
                <div className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 px-4 py-3 rounded-xl text-sm">
                  {t('success')}
                </div>
              )}

              {status === 'error' && (
                <div className="bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 px-4 py-3 rounded-xl text-sm">
                  {t('error')}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending' || !message.trim()}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 disabled:from-emerald-300 disabled:to-teal-300 dark:disabled:from-emerald-800 dark:disabled:to-teal-800 text-white px-6 py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed shadow-md hover:shadow-lg"
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {t('sending')}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t('send')}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
