import { SERVICE, Micro, ServiceEvents, LOGLEVEL } from '@pestras/microservice';
import { Payload } from 'ts-nats';

const PROD = process.env.NODE_ENV === 'production';
const NATS = process.env.NATS;

@SERVICE({
  version: 0,
  logLevel: PROD ? LOGLEVEL.WARN : LOGLEVEL.DEBUG,
  nats: NATS ? { url: NATS, payload: Payload.JSON} : null
})
export class Service implements ServiceEvents {

  async onInit() {}

}

Micro.start(Service);