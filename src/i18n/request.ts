import { getRequestConfig } from 'next-intl/server';
import { cookies, headers } from 'next/headers';

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const headersList = await headers();

  // Check cookie first
  let locale = cookieStore.get('locale')?.value;

  // Then check Accept-Language header
  if (!locale) {
    const acceptLanguage = headersList.get('accept-language');
    if (acceptLanguage) {
      const preferredLocale = acceptLanguage.split(',')[0].split('-')[0];
      if (['ru', 'en'].includes(preferredLocale)) {
        locale = preferredLocale;
      }
    }
  }

  // Default to Russian
  if (!locale || !['ru', 'en'].includes(locale)) {
    locale = 'ru';
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
