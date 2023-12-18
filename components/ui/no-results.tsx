import Link from "next/link";

const NoResults = () => {
  return (
    <div className="flex h-full w-full flex-col min-h-[50vh] items-center justify-center text-[#A08BC9]">
      <p className="pb-3">Sin resultados.</p>
      <Link
        href="/"
        className="rounded-full bg-[#E8D7FF] p-2 px-5 border border-[#A08BC9] hover:scale-[1.10] hover:text-white dark:bg-neutral-200 dark:text-black dark:hover:bg-white"
      >
        Home
      </Link>
    </div>
  );
};

export default NoResults;
