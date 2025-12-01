'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Trash2 } from 'lucide-react';

export default function DeleteAccountForm() {
  const t = useTranslations('deleteAccount');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !confirmed) return;

    setStatus('submitting');

    try {
      const response = await fetch('/api/delete-account', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, reason }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setReason('');
        setConfirmed(false);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 px-6 py-8 rounded-xl text-center">
        <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-lg font-medium">{t('success')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
          {t('form.emailLabel')} <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('form.emailPlaceholder')}
          className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--card-border)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          required
        />
        <p className="mt-1 text-sm text-[var(--text-muted)]">{t('form.emailHelp')}</p>
      </div>

      {/* Reason Field */}
      <div>
        <label htmlFor="reason" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
          {t('form.reasonLabel')}
        </label>
        <textarea
          id="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder={t('form.reasonPlaceholder')}
          rows={4}
          className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--card-border)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
        />
      </div>

      {/* Confirmation Checkbox */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="confirm"
          checked={confirmed}
          onChange={(e) => setConfirmed(e.target.checked)}
          className="mt-1 w-5 h-5 rounded border-[var(--card-border)] text-emerald-500 focus:ring-emerald-500 cursor-pointer"
          required
        />
        <label htmlFor="confirm" className="text-sm text-[var(--text-secondary)] cursor-pointer">
          {t('form.confirmLabel')} <span className="text-red-500">*</span>
        </label>
      </div>

      {/* Error Message */}
      {status === 'error' && (
        <div className="bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 px-4 py-3 rounded-xl text-sm">
          {t('error')}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'submitting' || !email.trim() || !confirmed}
        className="w-full bg-red-500 hover:bg-red-600 disabled:bg-red-300 dark:disabled:bg-red-800 text-white px-6 py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed shadow-md hover:shadow-lg"
      >
        {status === 'submitting' ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            {t('form.submitting')}
          </>
        ) : (
          <>
            <Trash2 className="w-5 h-5" />
            {t('form.submit')}
          </>
        )}
      </button>
    </form>
  );
}
