import React, { FC } from 'react';
import XeokitViewer from '../XeokitViewer/XeokitViewer';

export interface Props {
  type: string;
  filePath: string;
}

export const Viewer: FC<Props> = props => {
  const { type, filePath } = props;
  return (
    <div>
      Viewer {type}
      <XeokitViewer filePath={filePath} />
    </div>
  );
};
