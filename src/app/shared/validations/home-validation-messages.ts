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
    ],
    name: [
      { type: 'required', message: 'Nome é obrigatório' },
      {
        type: 'minlength',
        message: 'Nome deve ter o mínimo de 3 caracteres'
      }
    ],
    phone: [
      { type: 'required', message: 'Contacto do receptor é obrigatório' },
      { type: 'contactTaken', message: 'Contacto não disponivel, já foi usado' }
    ],
  };
