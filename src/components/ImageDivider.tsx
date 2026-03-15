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
      <div className="absolute inset-0 bg-bg-dark/20" />
    </section>
  );
}
