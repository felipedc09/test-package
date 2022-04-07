import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Viewer } from '@felipedc09/bimep-viewer';

const App = () => {
  return (
    <div>
      holaaaa
      <Viewer
        type="test"
        filePath="http://openifcmodel.cs.auckland.ac.nz/_models/20220318TestStadiumNWF.ifc"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
