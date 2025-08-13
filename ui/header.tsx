export function Header() {
  return (
    <header className="flex justify-between font-[450] tracking-[-3%] leading-[120%] pt-6 md:pt-[4em]">
      <h2 className="text-left text-sm w-full">
        I&apos;m an entrepreneur working across <br /> design, product and
        business.
      </h2>
      <a rel="me" href="mailto:christoph@zimnicki.co">
        <button className="rounded-[18px] hover:bg-stone-200/50 cursor-pointer select-none active:scale-[0.97] duration-200 transition-all text-sm  bg-stone-100 text-black px-3 h-10 flex items-center justify-center">
          Contact
        </button>
      </a>
    </header>
  );
}
