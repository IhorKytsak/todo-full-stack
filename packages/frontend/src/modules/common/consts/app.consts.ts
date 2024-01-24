export const navigationItems = {
  APPNAME: 'TODO APP',
  SIGNUP: 'Sign Up',
  SIGNIN: 'Sign in',
  SIGNOUT: 'Sign Out',
  CHANGEPASS: 'Change Password'
};

export const actionButtonNames = {
  delete: 'Delete',
  view: 'View',
  edit: 'Edit',
  back: 'Back',
  backHome: 'Back Home'
};

export const toastMessages = {
  TODO_ADD_SUCCESS: 'Todo successfully added!',
  TODO_ADD_ERROR: 'Failed to add todo!',
  TODO_DELETE_SUCCESS: 'Todo successfully deleted!',
  TODO_DELETE_ERROR: 'Failed to delete todo!',
  TODO_UPDATE_SUCCESS: 'Todo successfully updated!',
  TODO_UPDATE_ERROR: 'Failed to update todo!',
  TODO_UPDATE_COMPLETE_STATUS_SUCCESS: 'Todo complete status updated!',
  TODO_UPDATE_COMPLETE_STATUS_ERROR: 'Failed to update todo complete status!',
  TODO_GET_ERROR: 'Failed to get data from server!',
  USER_REGISTER_SUCCESS: 'Registration is successful!',
  USER_REGISTER_ERROR: 'Failed to register!',
  USER_LOGIN_SUCCESS: 'Login is successful!',
  USER_LOGIN_ERROR: 'Failed to log in!',
  PASSWORD_RECOVER_SUCCESS:
    'The password recovery request was successful. Check your email address!',
  PASSWORD_RECOVER_ERROR: 'Failed to recover password!',
  PASS_RECOVER_CONFIRMED_SUCCESS: 'Password changed successfully!',
  PASS_RECOVER_CONFIRMED_ERROR: 'Failed to change password!',
  PASS_CHANGE_SUCCESS: 'Password changed successfully, login with new credentials!',
  PASS_CHANGE_ERROR: 'Failed to change password, incorect old password!'
};

export const validationMessages = {
  SHORT: 'Too short',
  LONG: 'Too long',
  REQUIRED: 'Is required'
};

export const initialTodoValues = {
  title: '',
  description: '',
  isCompleted: false,
  isPrivate: false
};

export const initialAuthValues = {
  email: '',
  password: ''
};

export const initialChangePassValues = {
  oldPassword: '',
  newPassword: ''
};

export const tooltipTitles = {
  EDIT_TO_CHANGE: 'Click the edit button to change the value.',
  COMPLETE_STATUS: 'Todo complete status.'
};
