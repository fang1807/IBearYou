import React from 'react';

import { StackNavigator } from 'react-navigation';
import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';
import ScreenThree from './ScreenThree';

const testna = StackNavigator({
    ScreenOne: { screen: ScreenOne},
    welcome : { screen: welcome},
    ScreenThree: {screen: ScreenThree}
})

export default testna;