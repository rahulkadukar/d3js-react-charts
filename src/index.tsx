import * as React from 'react'
import styles from './styles.module.css'
// @ts-ignore
import { LineChart as LineChartD3 } from './LineChart/LineChart.tsx'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const LineChart = LineChartD3
