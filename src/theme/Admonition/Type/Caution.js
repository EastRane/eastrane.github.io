import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import AdmonitionLayout from '@theme/Admonition/Layout';
const infimaClassName = 'alert alert--warning1';

export function FluentErrorCircle12Regular(props) {
  return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 12 12" {...props}><path fill="currentColor" d="M5.25 8.25a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m.258-4.84a.5.5 0 0 1 .984 0l.008.09V6l-.008.09a.5.5 0 0 1-.984 0L5.5 6V3.5zM11 6A5 5 0 1 1 1 6a5 5 0 0 1 10 0m-1 0a4 4 0 1 0-8 0a4 4 0 0 0 8 0"></path></svg>);
}

const defaultProps = {
  icon: FluentErrorCircle12Regular(),
  title: (
    <Translate
      id="theme.admonition.caution"
      description="The default label used for the Caution admonition (:::caution)">
      caution
    </Translate>
  ),
};
// TODO remove before v4: Caution replaced by Warning
// see https://github.com/facebook/docusaurus/issues/7558
export default function AdmonitionTypeCaution(props) {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}
