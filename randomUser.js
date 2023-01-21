function getRandomItem(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];

  return item;
}
const overallRankingScoreNumber = Math.floor(Math.random() * (100 - 1)) + 1;

  const firstName=["Chukwuebuka","Taiwo","Oba","Abebi","Chileogu","Alaba","Adola","Anuli","Bolade","Bolanile","Chimaijem","Chinagorom","Chinecherem","Ekon","Udo"," BaguMusa "," Ibrahim "," Abubakar "," Sani "," Abdullahi "," Mohammed "," Sunday "," Umar "," Emmanuel "," Adamu "," Usman "," Blessing "," Aliyu "," Aisha "," Muhammed "," John "," Muhammad"," Fatima"," Mary"," Esther "," Yusuf"," Ali"," Samuel"," Aminu "," Grace "," Joseph ","  Hassan "," Amina "," Haruna "," Salisu "," Peter ","    Bello ","   Garba "," Zainab "," Maryam "," Joy "," Victoria "," Kabiru "," Elizabeth "," Isa "," Hadiza "," Idris "," Mercy "," Isah "," Yahaya "," Hauwa "," David "," Daniel "," Ngozi "," Yakubu"," Ahmed "]

  const lastName=["Chukwuebuka","Taiwo","Oba","Abebi","Chileogu","Alaba","Adola","Anuli","Bolade","Bolanile","Chimaijem","Chinagorom","Chinecherem","Ekon","Udo"," BaguMusa "," Ibrahim "," Abubakar "," Sani "," Abdullahi "," Mohammed "," Sunday "," Umar "," Emmanuel "," Adamu "," Usman "," Blessing "," Aliyu "," Aisha "," Muhammed "," John "," Muhammad"," Fatima"," Mary"," Esther "," Yusuf"," Ali"," Samuel"," Aminu "," Grace "," Joseph ","  Hassan "," Amina "," Haruna "," Salisu "," Peter ","    Bello ","   Garba "," Zainab "," Maryam "," Joy "," Victoria "," Kabiru "," Elizabeth "," Isa "," Hadiza "," Idris "," Mercy "," Isah "," Yahaya "," Hauwa "," David "," Daniel "," Ngozi "," Yakubu"," Ahmed "]


  
const overallRankingScore = [
  null,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  62,
  63,
  64,
  65,
  66,
  67,
  68,
  69,
  70,
  71,
  72,
  73,
  74,
  75,
  76,
  77,
  78,
  79,
  80,
  81,
  82,
  83,
  84,
  85,
  86,
  87,
  88,
  89,
  90,
  91,
  92,
  93,
  94,
  95,
  96,
  97,
  98,
  99,
  100,
];
const location = ["Lagos", "Ibadan", "Abuja"];
const preferredWorkType = ["full-time", "part-time", "any"];
const isWillingToRelocate = [true, false];
const preferredLocationCommitment = ["in-office", "remote", "any"];
const salesExperience = [
  "< 1 year",
  "1 - 3 years",
  "3 - 5 years",
  "> 5 years",
  null,
];
for (let index = 1; index < 201; index++) {
    const monthlyExpectedSalaryLowerRange =
  Math.floor(Math.random() * (500 - 1)) + 1;
const monthlyExpectedSalaryHigherRange =
  Math.floor(Math.random() * (10000 - 500)) + 1;
      console.log( 
          {
            "type": "talent",
            "firstname": getRandomItem(firstName),
            "lastname": getRandomItem(lastName),
            "email": `"${getRandomItem(firstName)}.${getRandomItem(lastName)}@yahoo.org"`,
            "overallRankingScore": getRandomItem(overallRankingScore), 
            "salesExperience": getRandomItem(salesExperience),
            "monthlyExpectedSalary": `{ "fromPrice": ${monthlyExpectedSalaryLowerRange}, "toPrice": ${monthlyExpectedSalaryHigherRange}, "currency": "Naira" }`,
            "location": getRandomItem(location),
            "country": "Nigeria",
            "isWillingToRelocate": getRandomItem(isWillingToRelocate),
            "preferredLocationCommitment": getRandomItem(preferredLocationCommitment),
            "preferredWorkType": getRandomItem(preferredWorkType),
            "preferredIndustry": "sales"
          },
         ) 
  }
module.exports = {
  getRandomItem,
  overallRankingScore,
  overallRankingScoreNumber,
  location,
  preferredLocationCommitment,
  preferredWorkType,
  isWillingToRelocate,
  salesExperience,firstName,lastName
};
