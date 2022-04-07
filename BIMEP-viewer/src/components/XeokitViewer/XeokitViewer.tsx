import { Viewer, WebIFCLoaderPlugin } from '@xeokit/xeokit-sdk';
import React, { FC, useEffect } from 'react';

type Props = {
  filePath: string;
};

const XeokitViewer: FC<Props> = props => {
  const { filePath } = props;
  useEffect(() => {
    const loadViewer = async () => {
      const viewer = new Viewer({
        canvasId: 'viewer',
        transparent: true,
      });

      viewer.camera.eye = [-3.933, 2.855, 27.018];
      viewer.camera.look = [4.4, 3.724, 8.899];
      viewer.camera.up = [-0.018, 0.999, 0.039];

      const webIFCLoader = new WebIFCLoaderPlugin(viewer, {
        wasmPath: 'https://cdn.jsdelivr.net/npm/@xeokit/xeokit-sdk/dist/',
      });

      webIFCLoader.load({
        src: filePath,
        edges: true,
      });
    };
    loadViewer();
  }, []);

  return <canvas id="viewer"></canvas>;
};

export default XeokitViewer;
