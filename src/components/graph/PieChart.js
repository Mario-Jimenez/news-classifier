import React, { useContext } from 'react';
import { ResponsivePie } from '@nivo/pie';
import { makeStyles } from '@material-ui/core/styles';
import { ClassifierContext } from '../../contexts/Classifier';

const useStyles = makeStyles(() => ({
  root: {
    height: 600,
  },
}));

function PieChart() {
  const { categories } = useContext(ClassifierContext);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ResponsivePie
        data={categories}
        margin={{
          top: 40, right: 80, bottom: 80, left: 80,
        }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 10,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: '#000',
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#999',
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}

export default PieChart;
