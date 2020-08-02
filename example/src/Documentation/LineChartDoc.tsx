// @ts-ignore
import React, { useState } from 'react'
import { LineChart, LineChartConfig } from 'd3js-react-charts'
import styled from 'styled-components'

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Table = styled.table`
  border: 1px solid orange;
  margin: 20px;
  width: calc(100% - 40px);
`

const Th = styled.th`
  border: 1px solid gray;
  padding: 15px 10px;
  font-size: 20px;
  text-align: left;
`

const Td = styled.td`
  padding: 2px 10px;
  font-size: 16px;
  border: 1px solid black;
`

const InputStyled = styled.input`
  font-size: 16px;
  border: 0px solid black;
  width: 100px;
`

const APIConfig = (props: any) => {
  return <SubContainer>
    {props.children}
  </SubContainer>
}

const Input = (props: any) => {
  let inputType = 'text'
  if (props.type === 'Numeric') {
    inputType = 'number'
  }

  return <InputStyled type={inputType} value={props.value}
    onChange={(e) => { props.onchange(e.target.value, props.name) }}
    onBlur={() => props.onblur() }
  />
}

const configInfo = {}
const config = LineChartConfig
config.docs.forEach((p: any) => {
  const r = Object.assign({}, p)
  configInfo[r.name] = r.value
})

const LineChartDocs = () => {
  const [chartData, setData] = useState(config)
  const [chartConfig, setConfig] = useState(configInfo)
  let x = 123

  function applyChange() {
    const existingConfig = Object.assign({}, chartConfig)
    const configInfo = {}
    let changeDetected = false
    chartData.docs.forEach((p: any) => {
      configInfo[p.name] = p.value
      if (configInfo[p.name] !== existingConfig[p.name]) {
        changeDetected = true
      }
    })

    console.log(changeDetected)
    setConfig(configInfo)
  }

  function handleChange(val: any, id: any) {
    // @ts-ignore
    const modifiedState = chartData.docs.map((c) => Object.assign({}, c))
    // @ts-ignore
    modifiedState.forEach((p) => {
      if (p.name === id) {
        let changedVal = val
        if (p.type === 'Numeric') {
          changedVal = parseInt(changedVal, 10) || 0
        }
        p.value = changedVal
      }
    })

    const fullState = Object.assign({}, chartData)
    fullState.docs = modifiedState
    setData(fullState)
  }

  return (
      <div>
        <APIConfig>
          <Table width="100%">
            <thead>
            <tr>
              <Th>Name</Th>
              <Th>Random</Th>
              <Th>Value</Th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <Td>data</Td>
              <Td>The input data that will be used to create the Bar Chart</Td>
              <Td>Input data (array of objects)</Td>
            </tr>
            {
              // @ts-ignore
              chartData.docs.map((p) => {
                return (
                  <tr key={++x}>
                    <Td key={++x}>{p.name}</Td>
                    <Td key={++x}>{p.desc}</Td>
                    <Td key={++x}>
                      <Input name={p.name} value={p.value} type={p.type}
                        onchange={handleChange}
                        onblur={applyChange} />
                    </Td>
                  </tr>
                )
              })
            }
            </tbody>
          </Table>
        </APIConfig>
        <LineChart config={chartConfig} />
      </div>
  )
}

export const LineChartDoc = LineChartDocs
