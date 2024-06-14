import Link from "next/link";
import Image from "next/image";
import ButtonPurple from "./ButtonPurple";
import { BLOCKS } from "@contentful/rich-text-types";

export default function ProductCard({ products }) {
  const { title, slug, price, thumbnail, spesifications } = products.fields;

  return (
    <div className="w-68 shadow-xl flex flex-col px-6 py-6 my-6 mx-6 rounded-lg ">
      <div className="h-80 ">
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          alt="Thumbnail prebuilt product"
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-bold text-center">{title}</h3>
        <p className="mb-6 text-center border-b">$ {price}</p>
        <ul className="flex flex-col items-center list-disc ">
          {spesifications.map((spec, index) => (
            <li key={index} className="list-disc my-1">
              {spec}
            </li>
          ))}
        </ul>
        <Link href={`/products/${slug}`} className="flex justify-center">
          <ButtonPurple className="w-5/6">See Details</ButtonPurple>
        </Link>
      </div>
    </div>
  );
}
