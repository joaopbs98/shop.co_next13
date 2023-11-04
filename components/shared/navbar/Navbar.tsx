import Link from "next/link";
import React from "react";
import Image from "next/image";
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
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

export default async function Navbar() {
  // const clothingList = await getProductList();
  // console.log(clothingList);
  // const navigationArray = clothingList.data.brands;
  // const firstNavigationTitle = navigationArray[0].content.title;
  // const secondNavigationTitle = navigationArray[1].content.title;
  // const navigationTitles = navigationArray.map(
  //   (item): any => item.content.title
  // );

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
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger className="text-[14px] font-regular leading-[18.2px] w-24 flex justify-center">
            Shop{" "}
          </MenubarTrigger>
          {/* <MenubarContent>
            {navigationTitles.map((title, index) => (
              <React.Fragment key={index}>
                <MenubarItem>{title}</MenubarItem>
                {index < navigationTitles.length - 1 && <MenubarSeparator />}
              </React.Fragment>
            ))}
          </MenubarContent> */}
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-[14px] font-regular leading-[18.2px] w-24 flex justify-center">
            On Sale{" "}
          </MenubarTrigger>
          {/* <MenubarContent>
            {navigationTitles.map((title, index) => (
              <React.Fragment key={index}>
                <MenubarItem>{title}</MenubarItem>
                {index < navigationTitles.length - 1 && <MenubarSeparator />}
              </React.Fragment>
            ))}
          </MenubarContent> */}
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-[14px] font-regular leading-[18.2px] w-44 flex items-center justify-center relative group">
            New Arrivals{" "}
          </MenubarTrigger>
          {/* <MenubarContent>
            {navigationTitles.map((title, index) => (
              <React.Fragment key={index}>
                <MenubarItem>{title}</MenubarItem>
                {index < navigationTitles.length - 1 && <MenubarSeparator />}
              </React.Fragment>
            ))}
          </MenubarContent> */}
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-[14px] font-regular leading-[18.2px] w-24 flex justify-center">
            Brands{" "}
          </MenubarTrigger>
          {/* <MenubarContent>
            {navigationTitles.map((title, index) => (
              <React.Fragment key={index}>
                <MenubarItem>{title}</MenubarItem>
                {index < navigationTitles.length - 1 && <MenubarSeparator />}
              </React.Fragment>
            ))}
          </MenubarContent> */}
        </MenubarMenu>
      </Menubar>
      <Input type="search" placeholder="Search" className="w-full rounded-lg" />

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
