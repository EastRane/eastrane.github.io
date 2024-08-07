import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import AdmonitionLayout from '@theme/Admonition/Layout';
const infimaClassName = 'alert alert--danger';

export function FluentFire16Regular(props) {
  return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 16 16" {...props}><path fill="currentColor" d="M8.17 2.382a3.7 3.7 0 0 1 .792-.3c.024.54.192 1.074.42 1.584c.324.721.8 1.457 1.264 2.17l.054.082c.455.697.9 1.378 1.238 2.062c.35.709.565 1.379.565 2.02c0 1.153-.345 2.147-.992 2.848c-.64.695-1.624 1.152-3.008 1.152c-1.397 0-2.368-.404-3.046-1.025c-.687-.628-1.122-1.523-1.358-2.584c-.222-.998-.026-1.893.235-2.55q.064-.16.13-.3l.125.251a1.54 1.54 0 0 0 2.068.69c.846-.423 1.08-1.46.722-2.236c-.372-.807-.662-1.81-.403-2.588c.195-.584.658-1 1.193-1.276M4.11 6.189v.001l-.002.003l-.005.006l-.016.02l-.051.071q-.066.091-.17.256a6 6 0 0 0-.462.926c-.31.78-.56 1.885-.281 3.137c.265 1.19.775 2.294 1.659 3.104C5.674 14.529 6.899 15 8.503 15c1.618 0 2.884-.543 3.743-1.473c.853-.924 1.257-2.18 1.257-3.527c0-.859-.285-1.689-.669-2.464c-.365-.738-.84-1.464-1.285-2.147l-.065-.1c-.473-.725-.904-1.395-1.19-2.033s-.397-1.18-.302-1.658A.5.5 0 0 0 9.502 1c-.422 0-1.125.148-1.792.493c-.673.349-1.377.933-1.682 1.849c-.39 1.17.059 2.49.443 3.323c.171.37.022.78-.261.922a.54.54 0 0 1-.726-.242l-.535-1.069a.5.5 0 0 0-.839-.087"></path></svg>);
}

const defaultProps = {
  icon: FluentFire16Regular(),
  title: (
    <Translate
      id="theme.admonition.danger"
      description="The default label used for the Danger admonition (:::danger)">
      danger
    </Translate>
  ),
};
export default function AdmonitionTypeDanger(props) {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}
