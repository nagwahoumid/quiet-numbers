import AuthButton from './components/AuthButton';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50">
      <main className="w-full max-w-2xl px-16 py-32">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-4xl font-light tracking-tight text-neutral-900 mb-2">
              Quiet Numbers
            </h1>
            <p className="text-lg text-neutral-600 font-light">
              Mindful personal finance tracking
            </p>
          </div>

          <div className="mt-8">
            <AuthButton />
          </div>
        </div>
      </main>
    </div>
  );
}
