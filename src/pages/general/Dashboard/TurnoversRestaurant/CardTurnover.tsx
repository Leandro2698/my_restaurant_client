/* eslint-disable no-empty */
import { Paid } from "@mui/icons-material";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import { format } from "date-fns";
import { useState } from "react";
import MainCard from "../../../../components/Cards/MainCard";
import ChartTurnoverMonth from "./ChartTurnoverMonth";
import ChartTurnoverYear from "./ChartTurnoverYear";

export default function CardTurnover(props: any) {
  const { restaurant } = props;
  const [timeValue, setTimeValue] = useState("month");

  const handleChangeTime = (event: any, time: string) => {
    setTimeValue(time);
  };
  const allTurnoverThisMonth: any = [];
  const allTurnoverThisYear: any = [];

  const thisYear = new Date();
  const { products } = restaurant;
  for (let i = 0; i < products.length; i += 1) {
    const turnoverThisMonth = products[i].turnoversProductMonth.filter(
      (e: any) => e.month === format(thisYear, "MMMM") && e.year === format(thisYear, "yyyy")
    );
    for (let u = 0; u < turnoverThisMonth.length; u += 1) {
      allTurnoverThisMonth.push({
        day: turnoverThisMonth[u].day,
        income: turnoverThisMonth[u].income,
      });
    }
  }
  for (let i = 0; i < products.length; i += 1) {
    const turnoverThisYear = products[i].turnoversProductMonth.filter((e: any) => e.year === format(thisYear, "yyyy"));
    for (let u = 0; u < turnoverThisYear.length; u += 1) {
      allTurnoverThisYear.push({
        month: turnoverThisYear[u].month,
        income: turnoverThisYear[u].income,
      });
    }
  }

  const renderTotalTurnover = () => {
    const totalTurnoverMonth = allTurnoverThisMonth
      .map((e: any) => e.income)
      .reduce((accumulator: any, value: any) => accumulator + value, 0);
    const totalTurnoverYear = allTurnoverThisYear
      .map((e: any) => e.income)
      .reduce((accumulator: any, value: any) => accumulator + value, 0);
    if (timeValue === "month") {
      return `$${totalTurnoverMonth}`;
    }

    return `$${totalTurnoverYear}`;
  };

  return (
    <MainCard header={false}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <Typography variant="subtitle2">Turnover this {timeValue}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h3"> {renderTotalTurnover()}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Button
                disableElevation
                variant={timeValue === "month" ? "contained" : "text"}
                size="small"
                sx={{ color: timeValue === "month" ? "#fff" : "inherit" }}
                onClick={e => handleChangeTime(e, "month")}
              >
                Month
              </Button>
              <Button
                disableElevation
                variant={timeValue === "year" ? "contained" : "text"}
                size="small"
                sx={{ color: timeValue === "year" ? "#fff" : "inherit" }}
                onClick={e => handleChangeTime(e, "year")}
              >
                Year
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {timeValue === "year" ? (
            <ChartTurnoverYear allTurnoverThisYear={allTurnoverThisYear} />
          ) : (
            <ChartTurnoverMonth allTurnoverThisMonth={allTurnoverThisMonth} />
          )}
        </Grid>
      </Grid>
    </MainCard>
  );
}
