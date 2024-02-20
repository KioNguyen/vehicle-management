export const MESSAGE: { [key: number | string]: any } = {
  INCORRECT_EMAIL_OR_PASSWORD: 'Incorrect email or password.',
  REQUIRED: 'Please fill out the required field(s).',
  UNEXPECTED_ERROR: 'Unexpected Error.',
  NETWORK_ERROR: 'Network Error.',
  LOGIN_SUCCESS: 'Login successful.',
  OPEN_CASE_SUCCESS: 'Open case successful.',
  CREATE_TASK_SUCCESS: 'Create task successful.',
  SAVE_CARGOS_SUCCESS: 'Cargo(es) Saved Successfully',
  SAVE_SUCCESS: 'Saved Successfully',
  NETWORK_ERR: 'Something went wrong',

  CREATE_SHORTFALL_TASK: {
    ADD_ROW_MAXIMUM: {
      TITLE: 'Maximum new rows',
      CONTENT: 'The maximum number of rows has reached the limit of 200.',
    },
  },

  CREATE_CARGO: {
    ADD_ROW_MAXIMUM: {
      TITLE: 'Maximum new rows',
      CONTENT: 'The maximum number of rows has reached the limit of 100.',
    },
  },
  APPLY_CARGO: {
    NO_DATA_SELECTED: {
      TITLE: 'No data selected',
      CONTENT:
        'Cannot Apply / Not Apply Cargo if there is no cargo selected on the Cargo List.',
    },
  },
};
