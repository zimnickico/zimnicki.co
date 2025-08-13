export function Button({ children, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      className="rounded-full shadow-xl shadow-stone-100 bg-white border border-stone-200 px-4 h-8"
      {...props}
    >
      <span className="text-base text-black">{children}</span>
    </button>
  );
}
