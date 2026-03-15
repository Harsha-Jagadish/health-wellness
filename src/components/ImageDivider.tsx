import Image from "next/image";

export default function ImageDivider() {
  return (
    <section className="relative h-[50vh] min-h-[400px] w-full lg:h-[60vh]">
      <Image
        src="/images/wellness.jpg"
        alt="Calm wellness setting"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-bg-accent/60" />

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <blockquote className="max-w-xl text-center">
          <p className="text-2xl leading-snug text-text-on-accent md:text-3xl lg:text-4xl">
            &ldquo;The best health decisions are the ones
            <br className="hidden md:block" />
            you never have to make.&rdquo;
          </p>
        </blockquote>
      </div>
    </section>
  );
}
