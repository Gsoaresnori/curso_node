import { AppException } from './app-exceptions';

export class InternalServerErrorException extends AppException {
  constructor() {
    super('Internal server error', 500);
  }
}
