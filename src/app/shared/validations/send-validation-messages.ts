export const sendValidationMessages = {
  departure: [
    { type: 'required', message: 'Endereço de partida é obrigatório' }
  ],
  destination: [
    { type: 'required', message: 'Endereço de destino é obrigatório' }
  ],
  departureSpot: [
    { type: 'required', message: 'Ponto de partida é obrigatório' }
  ],
  receiverName: [
    { type: 'required', message: 'Nome do receptor é obrigatório' },
    {
      type: 'minlength',
      message: 'Nome do receptor deve ter o mínimo de 3 caracteres'
    }
  ],
  receiverContact: [
    { type: 'required', message: 'Contacto do receptor é obrigatório' },
    { type: 'contactTaken', message: 'Contacto não disponivel, já foi usado' }
  ],
  orderDetails: [
    { type: 'required', message: 'Detalhes da encomenda é obrigatório' },
    {
      type: 'minlength',
      message: 'Detalhes da encomenda de ter o mínimo de 15 caracteres'
    },
    { type: 'maxlength', message: 'Ultrapassou o máximo de 255 caracteres' }
  ],
  orderImage: [{ type: 'required', message: 'Selecione uma foto' }]
};
