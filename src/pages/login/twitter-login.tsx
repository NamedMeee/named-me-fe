import { signIn, useSession } from 'next-auth/react';

export default function TwitterLogin() {
  const { data: session } = useSession();

  return <>{!session && <button onClick={() => signIn()}>Sign In</button>}</>;
}
