import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action){
  console.log('Action received at reducer_weather', action);

  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]);
      if(action.payload.data){
        return [action.payload.data, ...state]; //return [city, city, city] NOT [city, [city] ]
      }
      else{
        return state;
      }
      
    default:
      return state;
  }
}
