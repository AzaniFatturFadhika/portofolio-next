import Callout from "@/components/mdx/Callout";
import Pre from "@/components/mdx/Pre";

export function useMDXComponents() {
  return {
    Callout,
    pre: Pre,
    a: ({ children, href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
      const isExternal = href?.startsWith("http");
      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          {...props}
        >
          {children}
        </a>
      );
    },
  };
}