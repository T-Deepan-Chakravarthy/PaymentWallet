const CustomerValidations = {
  mobileNo: {
    rules: [
      {
        test: /^[6-9]{1}[0-9]{9}/,
        message: 'Mobile number should be a 10 digit number with first digit from 6 to 9',
      },
    ],
    errors: [],
    valid: false,
    state: ''
  },
    password: {
      rules: [
        {
          test: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          message:'Must meet the password policy,for example:Abcd@2000',
        },
      ],
      errors: [],
      valid: false,
      state: ''
    },

};
export default CustomerValidations;
  