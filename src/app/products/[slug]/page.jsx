"use client";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ButtonPurple from "@/components/ButtonPurple";
import LinkPurple from "@/components/LinkPurple";
import Link from "next/link";
import Image from "next/image";

async function getProduct(slug) {
  try {
    const client = createClient({
      space: "tiof1j098ief",
      accessToken: "Vv3reBVLYz2E0S72gKDpN_bXZ7YGoPIApWPfvlkFBuA",
    });
    const res = await client.getEntries({
      content_type: "products",
      "fields.slug": slug,
    });
    return res.items;
  } catch (error) {
    console.error(error);
  }
}

export default async function Page({ params }) {
  const [products] = await getProduct(params.slug);
  const { title, price, gallery, spesifications, description } =
    products.fields;

  return (
    <section className="grid lg:grid-cols-2  p-4 mt-24 mx-auto max-w-[1350px]">
      <div className="mt-12">
        <Carousel
          className="w-4/6 mx-auto my-20"
          autoPlay
          infiniteLoop
          interval={5000}
          showThumbs={false}
          showArrows={true}
          showStatus={false}
        >
          {gallery.map((img) => (
            <Image
              src={`https:${img.fields.file.url}`}
              key={img.fields.file.url}
              alt="Gallery image."
              width={img.fields.file.details.image.width}
              height={img.fields.file.details.image.height}
            />
          ))}
        </Carousel>
      </div>
      <div className="mx-6 max-w-xl lg:pl-20">
        <div className="mx-auto">
          <Link href="/products/">
            <LinkPurple className="float-left">
              ⪡ Back to Products Page
            </LinkPurple>
          </Link>
        </div>
        <h3 className="text-4xl font-bold mt-10">{title} </h3>

        <p className="mt-2 font-semibold mb-8">$ {price}</p>
        <div className="rich-text ">
          {documentToReactComponents(description)}
        </div>
        <p className="mt-4 mb-[-1rem] text-lg font-semibold">Spesifications:</p>
        <ul className="p-5 flex flex-col list-disc ">
          {spesifications.map((spec, index) => (
            <li key={index} className="list-disc my-1">
              {spec}
            </li>
          ))}
        </ul>
        <ButtonPurple className="lg:mt-10 w-full">Purchase</ButtonPurple>
      </div>
    </section>
  );
}
