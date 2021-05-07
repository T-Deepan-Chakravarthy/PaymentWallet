const BankValidations = {
    accountNo: {
      rules: [
        {
          test: /^[0-9]{1}[0-9]{11}/,
          message: 'account no is not valid',
        },
      ],
      errors: [],
      valid: false,
      state: '',
    },
    ifscCode: {
      rules: [
        {
          test: /^[A-Z]{4}[0-9]{7}$/,
          message:'ifsc code is not valid',
        },
      ],
      errors: [],
      valid: false,
      state: '',
    },
    bankName: {
    rules: [
      {
        test: /^[A-Za-z ]{3,30}$/,
        message: 'BankName is not valid',
      },
    ],
    errors: [],
    valid: false,
    state: ''
  },
    balance: {
    rules: [
      {
        test: /^[0-9]/,
        message: 'Balance is not valid',
      },
    ],
    errors: [],
    valid: false,
    state: ''
  },
};
export default BankValidations;