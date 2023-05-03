import { RGKLineType } from "../../components/RGKLine";
import RGKCardLine from "../../components/RGKLine/RGKCardLine";
import { OneColumnValueType } from "../../components/RGKOneColumn";
import RGKCardOneColumnSelector from "../../components/RGKOneColumn/RGKCardOneColumnSelector";
import { RGKPieType } from "../../components/RGKPie";
import RGKCardPie from "../../components/RGKPie/RGKCardPie";
import styles from "./styles.module.css";

const MOCK_LINE: RGKLineType[] = [
  {
    date: "1991",
    value: 3,
  },
  {
    date: "1992",
    value: 4,
  },
  {
    date: "1993",
    value: 3.5,
  },
  {
    date: "1994",
    value: 5,
  },
  {
    date: "1995",
    value: 4.9,
  },
  {
    date: "1996",
    value: 6,
  },
  {
    date: "1997",
    value: 7,
  },
  {
    date: "1998",
    value: 9,
  },
  {
    date: "1999",
    value: 13,
  },
];

const MOCK_PIE: RGKPieType[] = [
  {
    type: "тип1",
    value: 27,
  },
  {
    type: "тип2",
    value: 25,
  },
  {
    type: "тип3",
    value: 18,
  },
  {
    type: "тип4",
    value: 15,
  },
  {
    type: "тип5",
    value: 10,
  },
  {
    type: "тип6",
    value: 5,
  },
];

const MOCK_ONECOLUMN: OneColumnValueType[] = [
  { sales: 0, type: "Янв" },
  { sales: 1, type: "Фер" },
  { sales: 2, type: "Мар" },
  { sales: 3, type: "Апр" },
  { sales: 4, type: "Май" },
  { sales: 5, type: "Июн" },
];

const Analytics = () => {
  return (
    <div className={styles.Analytics}>
      <RGKCardLine data={MOCK_LINE} title="Эффективность расхода топлива" />
      <RGKCardPie data={MOCK_PIE} title="Распределение расходов на транспорт" />
      <RGKCardOneColumnSelector
        title="Отчет план/факт"
        valueName="Расход"
        data={MOCK_ONECOLUMN}
        values1={[
          { id: 1, value: "Подразделение 1" },
          { id: 2, value: "Подразделение 2" },
        ]}
        placeholder1="Выберите подразделение"
        values2={[
          { id: 1, value: "ТС тип 1" },
          { id: 2, value: "ТС тип 2" },
        ]}
        placeholder2="Выберите тип ТС"
      />
    </div>
  );
};

export default Analytics;
