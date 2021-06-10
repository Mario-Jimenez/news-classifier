import React from 'react';
import { SnackbarProvider } from 'notistack';
import ClassifierProvider from './contexts/Classifier';
import ClassifierDrawer from './components/drawer/Drawer';

function App() {
  return (
    <div>
      <SnackbarProvider>
        <ClassifierProvider>
          <ClassifierDrawer />
        </ClassifierProvider>
      </SnackbarProvider>
    </div>
  );
}

export default App;
