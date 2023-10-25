import { ClothingProps } from "@/types";
import Image from "next/image";
import React from "react";

interface NavClothingProps {
  clothing: ClothingProps;
}

const ClothingCard = ({ clothing }: NavClothingProps) => {
  const { name, price, imageUrl } = clothing;

  return (
    <div className="clothing-card">
      <Image src={imageUrl} alt={name} width={48} height={48} />
      <h3>{name}</h3>
      <p>{`Price: ${price.value} ${price.currency}`}</p>
    </div>
  );
};

export default ClothingCard;
