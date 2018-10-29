import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action){
  console.log('Action received at reducer_weather', action);

  if(action.error){
    return state;
  }

  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]);
      return [action.payload.data, ...state]; //return [city, city, city] NOT [city, [city] ]
      
    default:
      return state;
  }
}
