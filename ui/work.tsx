import Image from "next/image";
import { twMerge } from "tailwind-merge";

export function WorkContainer({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section className="max-w-[42em] mx-auto pt-[2em]" {...props}>
      {children}
    </section>
  );
}

export function WorkSample({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="pb-[4em]">
      {title && (
        <h3 className="text-center text-base w-full font-[450] tracking-[-3%] pb-[2em]">
          {title}
        </h3>
      )}
      <div className="w-full grid grid-cols-2 gap-6">{children}</div>
    </div>
  );
}

export function WorkSampleImage({
  img,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { img: string }) {
  return (
    <div
      className={twMerge(
        "border border-stone-100 flex items-center justify-center overflow-clip rounded-[24px]",
        props.className,
      )}
      // {...props}
    >
      <Image alt="Edit Employee" src={img} width={3200} height={2400} />
    </div>
  );
}
