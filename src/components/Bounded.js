import clsx from "clsx";

export function Bounded({
  as: Comp = "div",
  collapsible = true,
  className,
  children,
}) {
  return (
    <Comp
      data-collapsible={collapsible}
      className={clsx("px-6 py-32 md:px-10 xl:py-20 2xl:py-44", className)}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Comp>
  );
}
