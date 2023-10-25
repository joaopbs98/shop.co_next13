import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenu,
} from "@radix-ui/react-navigation-menu";
import { ListItem } from "../Listitem";

async function getProductList() {
  const apiKey = "67b22440c1msh8d123b9c0105660p1f4a16jsnde71acdb928f";

  const response = await fetch(
    "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/categories/list",
    {
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
      },
    }
  );
  const data = await response.json();
  return data;
}

export default async function NavMenuItem({ listTitle }: any) {
  const clothingList = await getProductList();
  console.log(clothingList);

  return (
    <>
      <NavigationMenu>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Shop By Category</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {clothingList.map((listItem): any => (
                <ListItem
                  key={listItem.CatName}
                  title={listItem.CatName}
                  href={""}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>"something"</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <ListItem key="something" title="something" href={""}></ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenu>
    </>
  );
}
