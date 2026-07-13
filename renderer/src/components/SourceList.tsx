type Source = {
  id: string;
  name: string;
  type: string;
};

export default function SourceList({ sources }: { sources: Source[] }) {
  return (
    <div>
      <h3>Источники</h3>
      {sources.length === 0 && <p>Нет документов</p>}
      {sources.map(source => (
        <div key={source.id}>
          📄 {source.name} ({source.type})
        </div>
      ))}
    </div>
  );
}
