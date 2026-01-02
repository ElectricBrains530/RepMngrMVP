/**
 * Resolves the translation file for a given language and namespace.
 *
 */
export async function i18nResolver(language: string, namespace: string) {
  const suffix = language === 'sv' ? '.sv' : '';

  const data = await import(
    `../../public/locales/${language}/${namespace}${suffix}.json`
  );

  return data as Record<string, string>;
}
