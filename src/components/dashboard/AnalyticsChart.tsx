"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import data from "@/data/analytics";

export default function AnalyticsChart() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Monthly Views</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ width: "100%", height: "300px" }}>
            <ResponsiveContainer>
              <LineChart width={1100} height={300} data={data}>
                <CartesianGrid stroke="#ccc" />
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
