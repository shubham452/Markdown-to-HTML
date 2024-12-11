import MarkDown from './components/MarkDown';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Markdown to HTML Converter
      </h1>
      <div className="w-full max-w-4xl">
        <MarkDown />
      </div>
    </div>
  );
}

export default App;
