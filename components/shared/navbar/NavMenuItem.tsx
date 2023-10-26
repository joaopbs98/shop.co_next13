import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenu,
} from "@radix-ui/react-navigation-menu";
import { ListItem } from "../Listitem";
import { getProductList } from "@/utils";

export default async function NavMenuItem({ listTitle }: any) {
  const clothingList = await getProductList();
  console.log(clothingList);

  return (
    <div>
      {/* {clothingList.map((listItem): any => (
                <p
                  {listItem.CatName}
                ></p>
              ))} */}
    </div>
  );
}
