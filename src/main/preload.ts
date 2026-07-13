import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('notebookLM', {
  selectFile: () => ipcRenderer.invoke('source:select-file')
});
