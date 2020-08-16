export class ApiResponse {

   constructor(data = {}, message = '', status = 'OK', statusCode = 200) {
      this.data = data;
      this.message = message;
      this.status = status;
      this.statusCode = statusCode;
   }
}

export class CreatedResponse extends ApiResponse {
   constructor(data) {
      super(data, '', 'Created', 201);
   }
}