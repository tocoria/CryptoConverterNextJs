import { getRates } from "../api-utils";

export const ars_to_czk = async (amount: number) => {
  const ada = await getRates.ars_ada(amount);

  const usd = await getRates.ada_usd(ada);

  const czk = await getRates.usd_czk(usd);

  return {
    ada,
    czk,
  };
};
