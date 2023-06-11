import { getRates } from "../api-utils";

export const ars_to_eur = async (amount: number) => {
  const ada = await getRates.ars_ada(amount);

  const usd = await getRates.ada_usd(ada);

  const eur = await getRates.usd_eur(usd);

  return {
    ada,
    eur,
  };
};
