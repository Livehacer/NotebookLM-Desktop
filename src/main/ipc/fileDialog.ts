import { dialog } from 'electron';

export async function openSourceDialog() {
  const result = await dialog.showOpenDialog({
    title: 'Добавить источник',
    properties: ['openFile'],
    filters: [
      {
        name: 'Книги и документы',
        extensions: ['pdf', 'txt', 'md', 'docx', 'epub', 'fb2']
      }
    ]
  });

  if (result.canceled || result.filePaths.length === 0) {
    return null;
  }

  return result.filePaths[0];
}
