'use client';

import { useFormStatus } from 'react-dom';

export function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-600 text-white px-4 py-2 rounded disabled:bg-blue-300"
    >
      {pending ? 'Збереження...' : 'Додати (Action)'}
    </button>
  );
}