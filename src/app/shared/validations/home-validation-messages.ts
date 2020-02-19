export const homeValidationMessages = {
    email: [
      { type: 'required', message: 'Email é obrigatório.' },
      { type: 'email', message: 'Email inválido' }
    ],
    password: [
      { type: 'required', message: 'Password é obrigatória' },
      {
        type: 'pattern',
        message: 'Password fraca'
      }
    ]
  };
