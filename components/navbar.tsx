import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";
import MobileMainNav from "@/components/mobile-main-nav";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b dark:border-[#8871B7] bg-[#E8D7FF] dark:bg-[#231336]">
      <Container>
        <div className="flex h-16 items-center  justify-between px-4 sm:px-6 lg:relative md:px-8">
          <MobileMainNav data={categories} />
          <Link href="/" >
            <p className="ml-10  p-2 px-4 lg:px-[0.05rem] text-xl text-[#8871B7] font-bold dark:text-[#8871B7] lg:ml-0 ">
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
