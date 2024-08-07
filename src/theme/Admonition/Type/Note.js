import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import AdmonitionLayout from '@theme/Admonition/Layout';
const infimaClassName = 'alert alert--secondary';

export function FluentNote16Regular(props) {
  return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 16 16" {...props}><path fill="currentColor" d="M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h3.672a2.5 2.5 0 0 0 1.767-.732l3.329-3.329A2.5 2.5 0 0 0 14 8.172V4.5A2.5 2.5 0 0 0 11.5 2zM3 4.5A1.5 1.5 0 0 1 4.5 3h7A1.5 1.5 0 0 1 13 4.5V8h-2.5A2.5 2.5 0 0 0 8 10.5V13H4.5A1.5 1.5 0 0 1 3 11.5zm6 8.25V10.5A1.5 1.5 0 0 1 10.5 9h2.25q-.082.124-.19.232l-3.328 3.329q-.107.106-.232.19"></path></svg>);
}

const defaultProps = {
  icon: FluentNote16Regular(),
  title: (
    <Translate
      id="theme.admonition.note"
      description="The default label used for the Note admonition (:::note)">
      note
    </Translate>
  ),
};
export default function AdmonitionTypeNote(props) {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}
