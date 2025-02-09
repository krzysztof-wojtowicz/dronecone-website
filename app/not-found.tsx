// next imports
import Link from "next/link";
import Image from "next/image";

// icons
import Sad from "./image/svg/sad_emoji.svg";

export default function NotFound() {
  return (
    <main className="my-8 md:my-24 lg:my-36">
      <div className="flex flex-col gap-6 md:gap-10 w-full items-center px-10">
        <div className="flex flex-col items-center">
          <Image
            src={Sad}
            alt="Sad emoji"
            width={150}
            className="animate-bounce"
          />
          <span className="font-medium text-accent text-6xl">404</span>
        </div>
        <h2 className="text-center">Nie znaleziono podanej strony</h2>
        <Link href="/" className="nav-link text-center">
          Wróć do strony głównej
        </Link>
      </div>
    </main>
  );
}
