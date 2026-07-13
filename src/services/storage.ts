import Store from 'electron-store';

export interface NotebookSource {
  id: string;
  name: string;
  type: string;
  path: string;
  createdAt: string;
}

interface AppData {
  sources: NotebookSource[];
}

const store = new Store<AppData>({
  defaults: {
    sources: []
  }
});

export function getSources(): NotebookSource[] {
  return store.get('sources');
}

export function addSource(source: NotebookSource) {
  const sources = getSources();
  store.set('sources', [...sources, source]);
}

export function removeSource(id: string) {
  store.set('sources', getSources().filter(item => item.id !== id));
}
