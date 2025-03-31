import dgram from 'node:dgram';
import { AddressInfo } from 'node:net';

const server = dgram.createSocket('udp4');

server.on('error', (err: Error) => {
  console.error(`Server error:\n${err.stack}`);
  server.close();
});

server.on('message', (msg: Buffer, rinfo: dgram.RemoteInfo) => {
  console.log(`Server got: ${msg.toString()} from ${rinfo.address}:${rinfo.port}`);
});

server.on('listening', () => {
  const address = server.address() as AddressInfo;
  console.log(`Server listening ${address.address}:${address.port}`);
});

server.bind(41234,"127.0.0.1");
