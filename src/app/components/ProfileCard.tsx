import Image from "next/image";

export default function ProfileCard({ intro }: { intro: string }) {
  return (
    <>
      <span className="flex items-center justify-center col-span-3 row-span-2 rounded-2xl overflow-hidden">
        <Image src="/avatar.jpg" alt="avatar" width={300} height={300} />
      </span>

      <p className="p-5 text-2xl text-white col-span-9 rounded-2xl bg-foreground">
        {intro}
      </p>
    </>
  );
}
