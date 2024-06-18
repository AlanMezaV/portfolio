import spanish from './es.json';
import english from './en.json';

const languages = {
  spanish: 'es',
  english: 'en'
};

export const geti18n = ({ currentLocale = 'es' }: { currentLocale: string | undefined }) => {
  if (currentLocale === languages.english) {
    return english;
  }
  if (currentLocale === languages.spanish) {
    return spanish;
  }
  return spanish;
};
