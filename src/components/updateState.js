export function updateState(e, state, setState, current) {
  let tempState = JSON.parse(JSON.stringify(state));
  let tempData = e.target.id.split("-");
  tempState[current]["cards"][tempData[1]][tempData[0]] = e.target.value;
  setState(tempState);
}

