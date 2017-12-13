import authReducer from '../../reducers/auth';

test('should set default state auth reducer', () => {
  const state = authReducer({}, '');
  expect(state).toEqual({});
});

test('should set uid for LOGIN', () => {
  const action = {
    type: 'LOGIN',
    uid: '112233a'
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test('should clear uid on LOGOUT', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({ uid: 'tobecleared' }, action);
  expect(state).toEqual({});
});