import { auth } from "@/auth"; 
import { redirect } from 'next/navigation';
import Image from 'next/image';

export default async function Profile() {
  const session = await auth();

  if (!session?.user) {
    redirect('/login');
  }

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-xl shadow-md border">
      <h1 className="text-2xl font-bold mb-4">Особистий кабінет</h1>

      {session.user.image && (
        <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
          <Image
            src={session.user.image}
            alt={session.user.name || 'User Avatar'}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <p>Email: {session.user.email}</p>
      <p>Имя: {session.user.name}</p>
    </div>
  );
}