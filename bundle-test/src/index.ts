import { AuthConnect } from "@snsoft/player-grpc-web-coco";
import { AuthConnect as AuthConnect2 } from "@snsoft/player-grpc-web";
import { createClient } from "@connectrpc/connect";
import { createGrpcWebTransport } from "@connectrpc/connect-web";

export async function testing() {
  const transport = createGrpcWebTransport({
    // Apisix server endpoint, below is the example for QAT api six link
    // https://fpms-nt-player.fpms88.me/<module_name>
    baseUrl: "https://fpms-nt.fpms88.me/player",
  });

  try {
    // @ts-ignore
    const client = createClient(AuthConnect.AuthService, transport);
    // @ts-ignore
    const res = await client.sendSmsCode({
      phone: "639100000010",
      purpose: 1,
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

export async function testingNoTsIgnore() {
  const transport = createGrpcWebTransport({
    // Apisix server endpoint, below is the example for QAT api six link
    // https://fpms-nt-player.fpms88.me/<module_name>
    baseUrl: "https://fpms-nt.fpms88.me/player",
  });

  try {
    const client = createClient(AuthConnect2.AuthService, transport);
    const res = await client.sendSmsCode({
      phone: "639100000010",
      purpose: 1,
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
