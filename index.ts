import { SERVICE, MICRO, ServiceEvents } from '@pestras/microservice';
import { LOGLEVEL } from '@pestras/microservice/logger';
import { Payload } from 'ts-nats';

const PROD = process.env.NODE_ENV === 'production';
const NATS = process.env.NATS;

@SERVICE({
  version: 0,
  logLevel: PROD ? LOGLEVEL.ERROR : LOGLEVEL.DEBUG,
  nats: NATS ? { url: NATS, payload: Payload.JSON} : null
})
export class Service implements ServiceEvents {

  async onInit() {}

}

MICRO.start(Service);