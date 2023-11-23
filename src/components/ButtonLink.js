import { PrismicNextLink } from "@prismicio/next";

export function ButtonLink({ type = "filled", ...props }) {
  return (
    <PrismicNextLink
      className={`inline-block rounded border-2 px-5 py-3 font-semibold text-white ${
        type === "filled"
          ? "bg-primary text-white border-primary hover:border-white hover:bg-white hover:text-primary"
          : "text-primary border-primary bg-transparent hover:bg-primary hover:text-white"
      }`}
      {...props}
    />
  );
}
