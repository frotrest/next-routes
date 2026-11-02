'use server';

import { revalidatePath } from 'next/cache';

const comments = [{ id: '1', text: 'Перший коментар' }];

export async function getComments() {
  return comments;
}

export async function addCommentAction(formData: FormData) {
  const text = formData.get('text') as string;

  if (!text) return;

  comments.push({ id: Date.now().toString(), text });
  
  // Сервер сам інвалідує кеш і поверне оновлений UI
  revalidatePath('/coments');
}