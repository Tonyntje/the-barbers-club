export const services: Service[] = [
  { name: "Mannen knippen", price: 25 },
  { name: "Mannen wassen, knippen & stylen", price: 30 },
  { name: "Mannen knippen & baard trimmen", price: 35 },
  { name: "Mannen knippen & baard reshape", price: 40 },
  { name: "Mannen baard trimmen", price: 15 },
  { name: "Mannen baard reshape", price: 20 },
  { name: "Mannen contouren & baard trimmen", price: 20 },
  { name: "Mannen contouren & baard reshape", price: 25 },
  { name: "Mannen wenkbrauwen bijwerken", price: 10 },
  { name: "Contouren", price: 10 },
  { name: "Mannen wassen", price: 5 },
  { name: "Kinderen knippen ( t/m 13 jaar )", price: 22 },
  { name: "Senioren knippen ( 65+)", price: 22 },
];

type Service = {
  readonly name: string;
  readonly price: number;
};
