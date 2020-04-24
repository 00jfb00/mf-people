const _NAME = "PEOPLE";

export const _TYPES = {
  _getPeople: `${_NAME}::GET_PEOPLE`
};
export const _STATUS = {
  _fetching: "FETCHING",
  _done: "DONE",
  _failed: "FAILED"
};
const action = {};
action.getPeople = () => dispatch => {
  dispatch({
    type: _TYPES._getPeople,
    status: _STATUS._fetching
  });

  Promise.race([
    new Promise(resolve =>
      setTimeout(() => resolve("promise 1 resolved"), 3000)
    )
  ])
    .then(() =>
      dispatch({
        type: _TYPES._getPeople,
        status: _STATUS._done,
        payload: {
          id: 1,
          name: "John Doe"
        }
      })
    )
    .catch(err =>
      dispatch({
        type: _TYPES._getPeople,
        status: _STATUS._failed,
        err
      })
    );
};
export default action;
