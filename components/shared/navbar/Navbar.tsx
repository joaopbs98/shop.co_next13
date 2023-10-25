import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getProductList } from "@/utils";
import NavMenuItem from "./NavMenuItem";

export async function getServerSideProps() {
  const clothingList = await getProductList();
  return {
    props: {
      clothingList,
    },
  };
}

export default function Navbar({ clothingList }: any) {
  return (
    <nav className="flex-between background-light900_dark200 max-w-screen-2xl gap-5 justify-self-center p-6 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/SHOPco.svg"
          width={149}
          height={48}
          alt="Shop.Co Logo"
        />
      </Link>
      <Input type="search" placeholder="Search" className="w-full rounded-lg" />
      <div className=""></div>
      <Sheet>
        <SheetTrigger>
          <Image src={"/assets/icons/cart.svg"} width={34} height={34} alt="" />
        </SheetTrigger>
        <SheetContent className="background-light850_dark100">
          <SheetHeader>
            <SheetTitle>Your Cart is Emprty</SheetTitle>
            <SheetDescription>
              Shop now to add items to your cart. You can also save items for
              later.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <SignedIn>
        {" "}
        <UserButton
          appearance={{
            elements: {
              avatarBox: "h-10 w-10",
            },
            variables: {
              colorPrimary: "#ff7000",
            },
          }}
          afterSignOutUrl="/"
        ></UserButton>
      </SignedIn>
      <SignedOut>
        <Link href="/sign-in">
          <Button className="small-medium  btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 text-white shadow-none">
            <span className="">Sign-In</span>
          </Button>
        </Link>
      </SignedOut>
    </nav>
  );
}
