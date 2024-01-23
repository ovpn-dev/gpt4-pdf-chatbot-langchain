import Image from 'next/image';

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto flex flex-col space-y-4 bg-slate-300">
      <header className="container sticky top-0 z-40 bg-slate-300">
        <div className="h-16 border-b border-b-slate-300 py-4">
          <nav className="ml-4 pl-6">
            <a
              href="https://latinbrains.com/"
              className="hover:text-slate-600 cursor-pointer"
            >
              <Image
                src={'/latin-logo-22.png'}
                width={180}
                height={180}
                alt="Latin Brains Logo"
              />
            </a>
          </nav>
        </div>
      </header>
      <div>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
