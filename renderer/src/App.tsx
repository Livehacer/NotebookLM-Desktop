import './styles.css';

export default function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <h2>📚 NotebookLM</h2>
        <button>+ Новый блокнот</button>
        <button>🔍 Поиск</button>
        <button>⚙ Настройки</button>
      </aside>

      <main className="content">
        <h1>NotebookLM Desktop</h1>
        <p>Локальный клиент для работы с базой знаний.</p>
        <div className="card">
          <h3>Добро пожаловать</h3>
          <p>Добавляйте PDF, TXT и другие источники.</p>
        </div>
      </main>
    </div>
  );
}
