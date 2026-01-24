export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen flex items-center justify-center mx-auto lg:px-0 px-4">
      {children}
    </main>
  );
}
