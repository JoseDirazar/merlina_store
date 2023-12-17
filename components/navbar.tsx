import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";
import MobileMainNav from "@/components/mobile-main-nav";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b dark:border-neutral-700 bg-[#E8D7FF] dark:bg-black">
      <Container>
        <div className="flex h-16 items-center  justify-between px-4 sm:px-6 lg:relative lg:px-8">
          <MobileMainNav data={categories} />
          <Link href="/" className="gap-x-2 lg:ml-0">
            <p className="ml-10 p-2 px-4 text-xl text-[#8871B7] font-bold dark:text-white lg:ml-0 ">
              Merlina
            </p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
