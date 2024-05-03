import Link from "next/link";
import GrainEffect from "@/components/visualEffects/GrainEffect";
import Cursor from "@/components/Cursor";

export default function Home() {
  return (
    <>
      <Cursor color="#fff" />
      <GrainEffect />
      <div className="h-screen p-20">
        <div className="text-9xl font-panton text-white">
          Hello there, <br />
          my name is Yunus.
          <br />
          Nice to meet you!
          <div className="my-10">
            <Link
              className="hover:underline bg-gray-400 my-[-2rem]"
              href="/portfolio"
            >
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
