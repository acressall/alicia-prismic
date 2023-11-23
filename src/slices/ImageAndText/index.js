import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { ButtonLink } from "@/components/ButtonLink";

/**
 * @typedef {import('@prismicio/client').Content.ImageAndTextSlice} ImageAndTextSlice
 *
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageAndTextSlice>} ImageAndTextProps
 */

/**
 * @param {ImageAndTextProps}
 */
export default function ImageAndText({ slice }) {
  return (
      <section className="grid grid-flow-col-dense items-center gap-6 md:grid-cols-2 md:gap-10 lg:gap-20 py-10 md:py-20">
        <div
          className={
            slice.primary.imageSide === "Right" ? "col-start-2" : undefined
          }
        >
          <PrismicNextImage
            field={slice.primary.image}
            sizes="100vw"
            className="h-auto w-full rounded"
          />
        </div>
        <div className="grid gap-6">
          {/* <div field={slice.items[i].tags}>{item.tags}</div> */}
          {prismic.isFilled.richText(slice.primary.tagline) && (
            <p className="max-w-xs text-sm font-semibold uppercase tracking-widest">
              <PrismicText field={slice.primary.tagline} />
            </p>
          )}
          {prismic.isFilled.richText(slice.primary.text) && (
            <div className="grid max-w-prose gap-6">
              <PrismicRichText
                field={slice.primary.text}
                components={{
                  heading1: ({ children }) => (
                    <h2 className="text-4xl font-semibold">
                      {children}
                    </h2>
                  ),
                }}
              />
            </div>
          )}
          {prismic.isFilled.link(slice.primary.buttonLink) && (
            <div className="rounded w-fit border-2 border-secondary hover:border-white hover:bg-white">
              <ButtonLink field={slice.primary.buttonLink}>
                {slice.primary.buttonText}
              </ButtonLink>
            </div>
          )}
        </div>
      </section>
  );
}
