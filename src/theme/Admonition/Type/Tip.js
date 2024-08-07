import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import AdmonitionLayout from '@theme/Admonition/Layout';
const infimaClassName = 'alert alert--success';

export function FluentLightbulbFilament16Regular(props) {
  return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 16 16" {...props}><path fill="currentColor" d="M7.5 4.499a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0zm3.078.795a.5.5 0 0 0-.707 0l-.707.707a.5.5 0 1 0 .707.707l.707-.707a.5.5 0 0 0 0-.707m-4.477 0a.5.5 0 0 0-.707.707l.707.707a.5.5 0 0 0 .707-.707zm1.897-3.293c-1.229 0-2.35.481-3.168 1.31c-.798.81-1.29 1.937-1.33 3.233l-.001.019v.02c.057 1.236.655 2.324 1.737 3.454l.702 2.941l.007.022c.1.297.292.544.534.717c.251.18.558.282.883.282l1.384-.004l.021-.002a1.5 1.5 0 0 0 .84-.345c.231-.194.406-.46.48-.774l.796-3.05c1.034-.994 1.618-2.144 1.618-3.437a4.32 4.32 0 0 0-1.32-3.102a4.55 4.55 0 0 0-3.183-1.284M5.543 4.013A3.4 3.4 0 0 1 7.998 3a3.55 3.55 0 0 1 2.486 1a3.32 3.32 0 0 1 1.017 2.386c0 .991-.453 1.926-1.404 2.805l-.108.1L9.543 11H8.501V7.5a.5.5 0 0 0-1 0V11H6.494l-.349-1.464l-.097-.1C5 8.372 4.548 7.48 4.499 6.557c.038-1.048.434-1.925 1.044-2.543M6.733 12h2.55l-.165.627l-.003.013a.45.45 0 0 1-.15.24a.5.5 0 0 1-.267.115L7.361 13a.5.5 0 0 1-.3-.095a.46.46 0 0 1-.162-.206z"></path></svg>);
}

const defaultProps = {
  icon: FluentLightbulbFilament16Regular(),
  title: (
    <Translate
      id="theme.admonition.tip"
      description="The default label used for the Tip admonition (:::tip)">
      tip
    </Translate>
  ),
};
export default function AdmonitionTypeTip(props) {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}
