# useReducer Hook

## Usage

To manage many different state changes in one action .

## Overview

It has INITIAL_STATE to store the default values.
And, in export function contains two parameter state and action .

## Parameters

state is flow the INITIAL_STATE values to handle by the action.

## In component

```
const [state,dispatch] = useReducer(reducerName,INITIAL_STATE);
```

state is flow INITIAL_STATE data and dispatch is to flow action and action's data.

### Wanna flow data in actions ?

```
dispatch({type : "action_type" , payload : data})
```
