import { SERVICE, MICRO, Hooks } from '@pestras/microservice';
import { LOGLEVEL } from '@pestras/microservice/logger';

const PROD = process.env.NODE_ENV === 'production';

@SERVICE({
  version: 0,
  logLevel: PROD ? LOGLEVEL.ERROR : LOGLEVEL.DEBUG
})
export class Service implements Hooks {

  onInit() {}
}

MICRO.start(Service);