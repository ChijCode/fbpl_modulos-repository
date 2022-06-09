import React from 'react'
import { Dimensions, Text } from 'react-native'
import { LineChart } from 'react-native-chart-kit'

export default props => {
    const width = Dimensions.get("window").width
    const height = Dimensions.get("window").height
    const m = props.dataMain
    const par = props.dataSets

    return (
        <LineChart
            data={{
                labels: m[0].length == 1 ? [m[0][0]] : m[0],
                datasets: [
                    {
                        data: par
                    },
                    {
                        data: [80],
                        withDots: false

                    }
                ]
            }}
            width={width}
            renderDotContent={({ x, y, index }) => <Text key={index} style={{ fontSize: width / 40, position: 'absolute', top: -(width / 10), left: x - (width / 20), transform: [{ rotate: '90deg' }] }}>{
                m[1].length == 1 ? (
                    index == 2 ? '' : m[1][0] + ' mg/dl'
                ) :
                    m[1][index] + ' mg/dl'
            }
            </Text>}
            height={height / 3}
            withHorizontalLabels={false}
            yAxisSuffix=""
            yAxisInterval={1} // optional, defaults to 1
            yLabelsOffset={10}
            xLabelsOffset={0}
            fromZero={true}
            //verticalLabelRotation={90}
            withInnerLines={false}
            withOuterLines={false}
            getDotColor={(datapoint, dataPointIndex) => {
                if (m[1].length == 1) {
                    if (dataPointIndex == 2) {
                        return 'transparent'
                    }
                    else {
                        return '#009741'
                    }
                }
                else {
                    return '#009741'
                }
            }}
            chartConfig={{
                backgroundGradientFrom: "#fff",
                backgroundGradientTo: "#fff",
                decimalPlaces: 0, // optional, defaults to 2dp
                propsForLabels: {
                    fontSize: 10
                },
                color: (opacity = 1) => `#009741`,
                labelColor: (opacity = 1) => `#000`,
                style: {
                    borderRadius: 16,
                },
                propsForDots: {
                    r: "3",
                    strokeWidth: "2",
                }
            }}
            bezier
            style={
                m[1].length == 1 ? {
                    position: 'relative',
                    left: (width / 3.3)
                } : m[1].length == 2 ? {
                    position: 'relative',
                    left: width / 12
                } : m[1].length == 3 ? {
                    position: 'relative',
                    left: width / 25
                } : {
                    position: 'relative',
                    left: width / 50
                }}
        >
        </LineChart>
    )
}