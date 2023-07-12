import React, { useCallback, useEffect } from 'react';

import T from 'i18n-react';

import english from '../locales/english.json';
import chinese from '../locales/chinese.json';
import italian from '../locales/italian.json';
import norwegian from '../locales/norwegian.json';
import ptBr from '../locales/portuguese-br.json';
import slovak from '../locales/slovak.json';
import spanish from '../locales/spanish.json';

interface IntTextProps {
  spaceBefore?: boolean;
  spaceAfter?: boolean;
  text: string;
}

const IntText: React.FC<IntTextProps> = (props) => {
  const setText = useCallback((lang: string) => {
    switch (lang) {
      case 'en':
        T.setTexts(english);
        break;
      default:
        T.setTexts(english);
        break;
    }
  }, []);
  useEffect(() => {
    setText('en');
  }, []);

  return (
    <>
      {props.spaceBefore ? ' ' : null}
      <T.span text={props.text} />
      {props.spaceAfter ? ' ' : null}
    </>
  );
};

export default IntText;
