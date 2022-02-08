// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

// import Screen1 from "./com/f.js";
// import Screen2 from "./com/div/input.js"

// const App = createStackNavigator({
//   Screen1: { screen: Screen1 },
//   Screen2: { screen: Screen2 }
// });

// export default createAppContainer(App);
import { View, Text } from 'react-native';
import React from 'react';
import New from './new/new.js'
import F from './com/f.js'

const App = () => {

  const saveE = (p) => {
    console.log(typeof (p), typeof (c));

    //const c = p;
    //console.log(c);
  }
  console.log("///////\n/\t//");
  return (
    <View>
   
      <F />
      

    </View>
  );
};

export default App;
