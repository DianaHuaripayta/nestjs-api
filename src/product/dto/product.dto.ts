/* eslint-disable @typescript-eslint/ban-types */
export class CreateProductDTO {
  // dto define lo que voy a enviar y recibir en la aplicacion
  readonly name: String;
  readonly description: String;
  readonly imageURL: String;
  readonly price: Number;
  readonly createdAt: Date;
}
