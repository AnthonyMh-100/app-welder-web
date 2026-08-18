import { serviceIcons } from "@/components/shared/icons";
import { trustItems } from "@/lib/work";

export default function TrustStrip() {
  return (
    <div className="trust-strip">
      <div className="wrap flex flex-wrap justify-between gap-[14px_28px]">
        {trustItems.map((item) => {
          const Icon = serviceIcons[item.icon];
          return (
            <div className="trust-item" key={item.text}>
              <Icon />
              {item.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}