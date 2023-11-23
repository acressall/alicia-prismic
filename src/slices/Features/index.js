import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import * as prismic from "@prismicio/client";
import clsx from "clsx";

import { Bounded } from "@/components/Bounded";

/**
 * @typedef {import('@prismicio/client').Content.FeaturesSlice} FeaturesSlice
 *
 * @typedef {import("@prismicio/react").SliceComponentProps<FeaturesSlice>} FeaturesProps
 */

function Card({ item, alignment }) {
  return (
    <li
      className={clsx(
        "grid gap-6",
        alignment === "Center" && "justify-items-center text-center"
      )}
    >
      <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full">
        <PrismicNextImage
          field={item.image}
          sizes="100vw"
          fill={true}
          className="object-cover"
          alt=""
        />
      </div>
      <PrismicRichText
        field={item.description}
        components={{
          heading3: ({ children }) => (
            <h3 className="text-2xl font-semibold">
              {children}
            </h3>
          ),
        }}
      />
      {prismic.isFilled.link(item.buttonLink) && (
        <div>
          <PrismicLink
            field={item.buttonLink}
            className="group font-semibold text-slate-300 transition hover:text-slate-500"
          >
            {item.buttonText || "Learn more"}
            <span
              aira-hidden={true}
              className="ml-2 inline-block transition-transform group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </PrismicLink>
        </div>
      )}
    </li>
  );
}

/**
 * @param {FeaturesProps}
 */
export default function Features({ slice }) {
  return (
    <Bounded as="section">
      <div className="grid justify-items-center gap-6">
        {prismic.isFilled.richText(slice.primary.tagline) && (
          <p className="max-w-lg text-center text-sm font-semibold uppercase tracking-widest">
            <PrismicText field={slice.primary.tagline} />
          </p>
        )}
        <div className="grid max-w-prose justify-center gap-6 text-center">
          <PrismicRichText
            field={slice.primary.text}
            components={{
              heading1: ({ children }) => (
                <h2 className="text-center text-4xl font-semibold">
                  {children}
                </h2>
              ),
            }}
          />
        </div>
        <ul className="mt-8 grid grid-cols-1 items-start gap-12 md:grid-cols-3">
          {slice.items.map((item) => (
            <Card
              key={prismic.asText(item.description)}
              item={item}
              alignment={slice.primary.alignment}
            />
          ))}
        </ul>
      </div>
    </Bounded>
  );
}
