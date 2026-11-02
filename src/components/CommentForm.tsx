'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function RestCommentForm() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await fetch('/api/coments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });

    setText('');
    setLoading(false);
    router.refresh(); // Потрібно вручну оновити серверні компоненти
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Написати коментар (REST)..."
        className="border p-2 rounded flex-1"
      />
      <button disabled={loading} className="bg-gray-800 text-white px-4 py-2 rounded">
        {loading ? 'Відправка...' : 'Надіслати'}
      </button>
    </form>
  );
}
