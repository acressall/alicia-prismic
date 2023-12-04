// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomeDocumentDataSlicesSlice = Hero2Slice;

/**
 * Content for Home documents
 */
interface HomeDocumentData {
  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

type PageDocumentDataSlicesSlice =
  | FeaturesSlice
  | HeroSlice
  | ImageAndTextSlice;

/**
 * Content for Projects documents
 */
interface PageDocumentData {
  /**
   * Title field in *Projects*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Title of the page
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Projects*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice>;
}

/**
 * Projects document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes = HomeDocument | PageDocument;

/**
 * Primary content in *Features → Primary*
 */
export interface FeaturesSliceDefaultPrimary {
  /**
   * Tagline field in *Features → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Optional - Text above the main text
   * - **API ID Path**: features.primary.tagline
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  tagline: prismic.RichTextField;

  /**
   * Text field in *Features → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Main text to display
   * - **API ID Path**: features.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Alignment field in *Features → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: Determines how to display features
   * - **Default Value**: Left
   * - **API ID Path**: features.primary.alignment
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  alignment: prismic.SelectField<"Left" | "Center", "filled">;
}

/**
 * Primary content in *Features → Items*
 */
export interface FeaturesSliceDefaultItem {
  /**
   * Image field in *Features → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: features.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Description field in *Features → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Text describing the feature
   * - **API ID Path**: features.items[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Button Link field in *Features → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Optional - Link for the button
   * - **API ID Path**: features.items[].buttonLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  buttonLink: prismic.LinkField;

  /**
   * Button Text field in *Features → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Optional - Text for the button
   * - **API ID Path**: features.items[].buttonText
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttonText: prismic.KeyTextField;
}

/**
 * Default variation for Features Slice
 *
 * - **API ID**: `default`
 * - **Description**: Features
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FeaturesSliceDefaultPrimary>,
  Simplify<FeaturesSliceDefaultItem>
>;

/**
 * Slice variation for *Features*
 */
type FeaturesSliceVariation = FeaturesSliceDefault;

/**
 * Features Shared Slice
 *
 * - **API ID**: `features`
 * - **Description**: Features
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturesSlice = prismic.SharedSlice<
  "features",
  FeaturesSliceVariation
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Tagline field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Optional - Text above the title
   * - **API ID Path**: hero.primary.tagline
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  tagline: prismic.RichTextField;

  /**
   * Title field in *Hero → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Large, bold title
   * - **API ID Path**: hero.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Text field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Optional - Main text to display
   * - **API ID Path**: hero.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Background Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.backgroundImage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  backgroundImage: prismic.ImageField<never>;
}

/**
 * Primary content in *Hero → Items*
 */
export interface HeroSliceDefaultItem {
  /**
   * Button Link field in *Hero → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Link for the button
   * - **API ID Path**: hero.items[].buttonLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  buttonLink: prismic.LinkField;

  /**
   * Button Text field in *Hero → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Optional - Text for the button
   * - **API ID Path**: hero.items[].buttonText
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttonText: prismic.KeyTextField;

  /**
   * Button Style field in *Hero → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: Determines the button's appearance
   * - **Default Value**: Filled
   * - **API ID Path**: hero.items[].buttonStyle
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  buttonStyle: prismic.SelectField<"Filled" | "Outlined", "filled">;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  Simplify<HeroSliceDefaultItem>
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *Hero2 → Primary*
 */
export interface Hero2SliceDefaultPrimary {
  /**
   * eyebrowHeadline field in *Hero2 → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Eyebrow
   * - **API ID Path**: hero_2.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrowHeadline: prismic.KeyTextField;

  /**
   * title field in *Hero2 → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_2.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *Hero2 → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_2.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * image field in *Hero2 → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_2.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * callToActionLabel field in *Hero2 → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_2.primary.callToActionLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  callToActionLabel: prismic.KeyTextField;

  /**
   * callToActionLink field in *Hero2 → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_2.primary.callToActionLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  callToActionLink: prismic.LinkField;
}

/**
 * Default variation for Hero2 Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type Hero2SliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<Hero2SliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Hero2 → Primary*
 */
export interface Hero2SliceImageRightPrimary {
  /**
   * eyebrowHeadline field in *Hero2 → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Eyebrow
   * - **API ID Path**: hero_2.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrowHeadline: prismic.KeyTextField;

  /**
   * title field in *Hero2 → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_2.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *Hero2 → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_2.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * image field in *Hero2 → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_2.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * callToActionLabel field in *Hero2 → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_2.primary.callToActionLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  callToActionLabel: prismic.KeyTextField;

  /**
   * callToActionLink field in *Hero2 → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_2.primary.callToActionLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  callToActionLink: prismic.LinkField;
}

/**
 * Image Right variation for Hero2 Slice
 *
 * - **API ID**: `imageRight`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type Hero2SliceImageRight = prismic.SharedSliceVariation<
  "imageRight",
  Simplify<Hero2SliceImageRightPrimary>,
  never
>;

/**
 * Slice variation for *Hero2*
 */
type Hero2SliceVariation = Hero2SliceDefault | Hero2SliceImageRight;

/**
 * Hero2 Shared Slice
 *
 * - **API ID**: `hero_2`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type Hero2Slice = prismic.SharedSlice<"hero_2", Hero2SliceVariation>;

/**
 * Primary content in *ImageAndText → Primary*
 */
export interface ImageAndTextSliceDefaultPrimary {
  /**
   * Image Side field in *ImageAndText → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: Left
   * - **API ID Path**: image_and_text.primary.imageSide
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  imageSide: prismic.SelectField<"Left" | "Right", "filled">;

  /**
   * Image field in *ImageAndText → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_and_text.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Tagline field in *ImageAndText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Optional - Text above the main text
   * - **API ID Path**: image_and_text.primary.tagline
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  tagline: prismic.RichTextField;

  /**
   * Text field in *ImageAndText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Main text to display
   * - **API ID Path**: image_and_text.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Button Link field in *ImageAndText → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Optional - Link for the button
   * - **API ID Path**: image_and_text.primary.buttonLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  buttonLink: prismic.LinkField;

  /**
   * Button Text field in *ImageAndText → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Optional - Text for the button
   * - **API ID Path**: image_and_text.primary.buttonText
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttonText: prismic.KeyTextField;
}

/**
 * Primary content in *ImageAndText → Items*
 */
export interface ImageAndTextSliceDefaultItem {
  /**
   * Tags field in *ImageAndText → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: image_and_text.items[].tags
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  tags: prismic.SelectField<
    | "Experiment"
    | "Feature"
    | "Monetization"
    | "Onboarding"
    | "Design System"
    | "Retention"
    | "Data Visualization"
    | "Information Architecture"
    | "Expansion"
  >;
}

/**
 * Default variation for ImageAndText Slice
 *
 * - **API ID**: `default`
 * - **Description**: ImageAndText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageAndTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageAndTextSliceDefaultPrimary>,
  Simplify<ImageAndTextSliceDefaultItem>
>;

/**
 * Slice variation for *ImageAndText*
 */
type ImageAndTextSliceVariation = ImageAndTextSliceDefault;

/**
 * ImageAndText Shared Slice
 *
 * - **API ID**: `image_and_text`
 * - **Description**: ImageAndText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageAndTextSlice = prismic.SharedSlice<
  "image_and_text",
  ImageAndTextSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      FeaturesSlice,
      FeaturesSliceDefaultPrimary,
      FeaturesSliceDefaultItem,
      FeaturesSliceVariation,
      FeaturesSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceDefaultItem,
      HeroSliceVariation,
      HeroSliceDefault,
      Hero2Slice,
      Hero2SliceDefaultPrimary,
      Hero2SliceImageRightPrimary,
      Hero2SliceVariation,
      Hero2SliceDefault,
      Hero2SliceImageRight,
      ImageAndTextSlice,
      ImageAndTextSliceDefaultPrimary,
      ImageAndTextSliceDefaultItem,
      ImageAndTextSliceVariation,
      ImageAndTextSliceDefault,
    };
  }
}