export const getRates = {
  ars_ada: async function (amount: number) {
    const response = await fetch("https://criptoya.com/api/ada/ars");

    const { lemoncash } = await response.json();

    const conversion = amount / lemoncash.ask;

    return conversion;
  },

  ada_usd: async function (amount: number) {
    const response = await fetch(
      "https://uat-api.3ona.co/exchange/v1/public/get-valuations?instrument_name=ADAUSD-INDEX&valuation_type=index_price&count=1"
    );

    const { result } = await response.json();

    const conversion = amount * result.data[0].v;

    return conversion;
  },

  usd_czk: async function (amount: number) {
    const response = await fetch("http://www.floatrates.com/daily/usd.json");

    const { czk } = await response.json();

    const conversion = amount * czk.rate;

    return conversion;
  },

  usd_eur: async function (amount: number) {
    const response = await fetch("http://www.floatrates.com/daily/usd.json");

    const { eur } = await response.json();

    const conversion = amount * eur.rate;

    return conversion;
  },
};
