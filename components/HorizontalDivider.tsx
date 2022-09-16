import { CSSProperties } from "react";

type DividerType = "solid | dashed";
interface Props {
  dividerType: DividerType;
}
export default function HorizontalDivider(props: Props) {
  const { dividerType } = props;
  const style: CSSProperties = {
    border: 0,
    borderTop: `1px ${dividerType} black`,
  };
  return <hr style={style} />;
}
