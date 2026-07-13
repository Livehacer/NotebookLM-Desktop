export interface Fb2Book {
  title: string;
  author?: string;
  text: string;
}

/**
 * FB2 importer placeholder.
 * Next stage: parse XML structure,
 * extract metadata, chapters and text for AI indexing.
 */
export async function parseFb2(filePath: string): Promise<Fb2Book> {
  return {
    title: filePath.split(/[\\/]/).pop() || 'Unknown FB2',
    text: ''
  };
}
