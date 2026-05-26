import { twMerge } from "tailwind-merge";

function SectionTitle({
  children = "Section Title",
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const base = "text-2xl var(--font-weight-medium) mb-10 mt-5";
  const classes = twMerge(base, className);
  return (
    <>
      <h2 className={classes}>{children}</h2>
    </>
  );
}
export default SectionTitle;
