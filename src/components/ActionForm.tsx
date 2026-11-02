'use client';

import { useRef } from 'react';
import { addCommentAction } from '@/app/actions/coments';
import { SubmitBtn } from './CommentsButton';

export function ActionCommentForm() {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={ref}
      action={async (formData) => {
        await addCommentAction(formData);
        ref.current?.reset(); // Очищення форми після виконання
      }}
      className="flex gap-2 mb-4"
    >
      <input
        name="text"
        placeholder="Написати коментар (Server Action)..."
        required
        className="border p-2 rounded flex-1"
      />
      <SubmitBtn />
    </form>
  );
}