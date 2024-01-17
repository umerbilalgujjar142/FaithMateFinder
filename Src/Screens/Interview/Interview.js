import React, { useState, useEffect } from 'react';
import { Text, View, LogBox, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HeaderComponent from '../../GlobalComponent/HeaderComponent/HeaderComponent';
import { getAPIData } from '../../API/interviewAPI';
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTooltip,
} from 'victory-native';

const Interview = (props) => {
  const [apiData, setApiData] = useState([]);
  const [selectedLabel, setSelectedLabel] = useState(null);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    const fetchData = async () => {
      try {
        const responseData = await getAPIData();
        const slicedData = responseData.data.slice(0, 20);
        setApiData(slicedData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleBarPress = (datum) => {
    setSelectedLabel(datum.name);
  };

  return (
    <View style={{ flex: 1 }}>
      <HeaderComponent
        headerText="Interview"
        onPress={() => props.navigation.goBack()}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f7f7f7',
        }}
      >
        <TouchableOpacity onPress={() => console.log('Chart pressed')}>
        <VictoryChart
            domainPadding={{ x: 20 }}
            width={wp('89%')}
            height={340}
            padding={{ top: 20, bottom: 180, left: 50, right: 20 }}
          >
            <VictoryBar
              data={apiData}
              x="name"
              y={(d) => d.name.length}
              style={{ data: { fill: '#3498db' } }}
              labels={({ datum }) => (selectedLabel === datum.name ? datum.name : null)}
              events={[
                {
                  target: 'data',
                  eventHandlers: {
                    onPress: (_, props) => {
                      console.log('Bar pressed:', props.datum.name);
                      const { datum } = props;
                      handleBarPress(datum);
                      return null;
                    },
                  },
                },
              ]}
              labelComponent={
                <VictoryTooltip
                  cornerRadius={8}
                  flyoutStyle={{
                    fill: '#333',
                    stroke: '#fff',
                    strokeWidth: 1,
                  }}
                  style={{ fontSize: 12, fill: '#fff' }}
                />
              }
            />
            <VictoryAxis dependentAxis style={{ axis: { stroke: 'transparent' } }} />
            <VictoryAxis
              tickValues={apiData.map((d, index) => index + 1)}
              tickFormat={apiData.map((d) => d.name)}
              style={{
                axis: { stroke: '#333', strokeWidth: 4 },
                ticks: { stroke: 'transparent' },
                tickLabels: {
                  fontSize: 8,
                  padding: 5,
                  fill: '#333',
                  angle: 50,
                  textAnchor: 'start',
                },
              }}
            />
          </VictoryChart>
        </TouchableOpacity>

        {selectedLabel && (
          <View style={{ marginTop: 20,paddingHorizontal:wp(2) }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
              Selected Label: {selectedLabel}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Interview;
