type Props = {
  children: React.ReactNode;
};

const cells = Array.from({ length: 250 });

// The hover glow is plain CSS (no per-cell JavaScript), which keeps
// scrolling smooth on phones and slower laptops.
export const AnimatedGridMainBackground = ({ children }: Props) => {
  return (
    <main className="relative w-full min-h-screen flex flex-col overflow-hidden items-center justify-center gap-6 bg-zinc-900 text-zinc-50">
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 grid grid-cols-4 opacity-25 sm:grid-cols-8 md:grid-cols-12 lg:grid-cols-16"
      >
        {cells.map((_, index) => (
          <div
            key={index}
            className="aspect-square border border-zinc-500 bg-zinc-900 transition-colors duration-700 hover:bg-white hover:duration-75"
          />
        ))}
      </div>
      {children}
    </main>
  );
};
