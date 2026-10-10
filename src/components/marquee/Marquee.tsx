import RawMarquee from "react-fast-marquee";
import type { ComponentProps, FC } from "react";

type MarqueeProps = ComponentProps<typeof RawMarquee>;

interface ModuleWithDefault {
  default?: unknown;
  $$typeof?: unknown;
}

const resolveMarqueeComponent = (): FC<MarqueeProps> => {
  let comp: unknown = RawMarquee;
  while (
    comp &&
    typeof comp === "object" &&
    "default" in comp &&
    !("$$typeof" in comp)
  ) {
    comp = (comp as ModuleWithDefault).default;
  }
  return comp as FC<MarqueeProps>;
};

const ResolvedMarquee = resolveMarqueeComponent();

const Marquee: FC<MarqueeProps> = (props) => {
  return <ResolvedMarquee {...props} />;
};

export default Marquee;
