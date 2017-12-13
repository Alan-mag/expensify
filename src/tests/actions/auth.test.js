import { login, logout } from '../../actions/auth';

test('should call login function from auth', () => {
  const uid = '1234a'
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid: uid
  });
});

test('should call logout function from auth', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  })
});