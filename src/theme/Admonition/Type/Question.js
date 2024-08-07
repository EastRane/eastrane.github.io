import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import AdmonitionLayout from '@theme/Admonition/Layout';
const infimaClassName = 'alert alert--question';

export function FluentQuestionCircle12Regular(props) {
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" {...props}><path fill="currentColor" d="M5.267 4.212a.63.63 0 0 0-.267.54a.5.5 0 0 1-1 0c0-.588.272-1.046.67-1.342c.384-.286.87-.413 1.33-.413s.945.127 1.33.412c.398.296.67.754.67 1.342c0 .429-.135.755-.367 1.006c-.183.198-.418.333-.58.426l-.051.03c-.187.109-.296.184-.37.282c-.064.082-.132.22-.132.504a.5.5 0 0 1-1 0c0-.466.12-.828.338-1.113c.206-.269.472-.428.66-.537l.028-.016c.197-.115.298-.174.372-.255c.05-.053.102-.132.102-.327a.63.63 0 0 0-.267-.54C6.555 4.08 6.29 3.998 6 3.998s-.554.082-.733.215M6 9a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1M1 6a5 5 0 1 1 10 0A5 5 0 0 1 1 6m5-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8"></path></svg>);
}

const defaultProps = {
    icon: FluentQuestionCircle12Regular(),
  title: (
<Translate
id="theme.admonition.question"
description="The default label used for the Question admonition (:::question)">
question
</Translate>
),
};
export default function AdmonitionTypeQuetion(props) {
    return (
    <AdmonitionLayout
{...defaultProps}
{...props}
className={clsx(infimaClassName, props.className)}>
{props.children}
</AdmonitionLayout>
);
}
