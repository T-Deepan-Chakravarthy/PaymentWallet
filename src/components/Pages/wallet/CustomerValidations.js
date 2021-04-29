const CustomerValidations = {
    name: {
      rules: [
        {
          test: /^[A-Za-z ]{3,20}$/,
          message: 'Name must only be alphabets and whitespaces from 3 to 20 characters',
        },
      ],
      errors: [],
      valid: false,
      state: '',
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
};
export default CustomerValidations;
  