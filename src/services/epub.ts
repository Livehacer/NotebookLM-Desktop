export interface EpubBook {
  title: string;
  author?: string;
  text: string;
}

/**
 * EPUB importer placeholder.
 * Next stage: connect epub parser and extract chapters,
 * metadata and plain text for AI indexing.
 */
export async function parseEpub(filePath: string): Promise<EpubBook> {
  return {
    title: filePath.split(/[\\/]/).pop() || 'Unknown EPUB',
    text: ''
  };
}
