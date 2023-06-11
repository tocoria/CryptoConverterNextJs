import { getRates } from "../api-utils";

export const ars_to_usd = async (amount: number) => {
  const ada = await getRates.ars_ada(amount);

  const usd = await getRates.ada_usd(ada);

  return {
    ada,
    usd,
  };
};
