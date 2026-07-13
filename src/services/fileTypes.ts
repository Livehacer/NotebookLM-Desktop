export type SupportedFileType =
  | 'pdf'
  | 'txt'
  | 'md'
  | 'docx'
  | 'epub';

export function detectFileType(fileName: string): SupportedFileType | null {
  const ext = fileName.toLowerCase().split('.').pop();

  switch (ext) {
    case 'pdf':
      return 'pdf';
    case 'txt':
      return 'txt';
    case 'md':
    case 'markdown':
      return 'md';
    case 'docx':
      return 'docx';
    case 'epub':
      return 'epub';
    default:
      return null;
  }
}
