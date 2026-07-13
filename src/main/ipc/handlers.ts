import { ipcMain } from 'electron';
import { openSourceDialog } from './fileDialog';

export function registerIpcHandlers() {
  ipcMain.handle('source:select-file', async () => {
    return await openSourceDialog();
  });
}
