import { CSSProperties, FC } from "react";
import { CardTwoColumDataType, TwoColumnValueType } from "dto/card";
import styles from "./styles.module.css";
import RGKCard from "../../RGKCard";
import RGKTwoColumn from "..";

interface RGKCardTwoColumnProps {
  data?: CardTwoColumDataType;
  href?: string;
  hrefText?: string;
  height?: number;
  style?: CSSProperties;
  colors?: string[];
}

const RGKCardTwoColumn: FC<RGKCardTwoColumnProps> = (props) => {
  const data = props.data?.data;
  const names: string[] = [];
  data?.map((item) =>
    names.includes(item.name) ? item : names.push(item.name)
  );
  const lastElements: TwoColumnValueType[] = [];
  names.map((item) => {
    const element = data?.findLast((el) => el.name === item);
    if (element) lastElements.push(element);
    return item;
  });
  return (
    <RGKCard
      className={styles.RGKCardTwoColumn}
      title={props.data?.title}
      href={props.href}
      hrefText={props.hrefText}
      style={props.style}
    >
      <div className={styles.RGKCardTwoColumn_DataValues}>
        {lastElements.map((item) => (
          <div className={styles.RGKCardTwoColumn_DataValues_Container}>
            <span className={styles.RGKCardTwoColumn_Text1}>{item.name}</span>
            <span className={styles.RGKCardTwoColumn_Text2}>{item.value}</span>
          </div>
        ))}
      </div>
      <RGKTwoColumn
        data={props.data?.data}
        height={props.height}
        colors={props.colors}
      />
    </RGKCard>
  );
};

export default RGKCardTwoColumn;
