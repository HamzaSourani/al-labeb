const pagesRoutes = {
  greeting: "/al-labeb/greeting",
  userName: "/al-labeb/user-name",
  phoneNumber: "/al-labeb/user-phone",
  nationalNumber: {
    main: "/al-labeb/national-number",
    unExist: "/al-labeb/national-number/un-exist",
  },
  services: {
    main: "/al-labeb/services",
    IBAN: {
      main: "/al-labeb/services/IBAN",
      reEnterNationalNumber: "/al-labeb/services/IBAN/re-enter-national-number",
    },
  },
  openAccount: {
    main: "/al-labeb/open-account",
    savingAccount: {
      main: "/al-labeb/open-account/saving-account",
      explanation: "/al-labeb/open-account/saving-account/explanation",
    },
    termsAndConditions: "/al-labe b/open-account/terms-and-conditions",

    motherFirstName: "/al-labeb/open-account/mother-first-name",
    motherLastName: "/al-labeb/open-account/mother-last-name",
    maritalStatus: {
      main: "/al-labeb/open-account/marital-status",
      spouseFirstName:
        "/al-labeb/open-account/marital-status/spouse-first-name",
      spouseLastName: "/al-labeb/open-account/marital-status/spouse-last-name",
      numberOfChildren:
        "/al-labeb/open-account/marital-status/number-of-children",
    },
    hasHouse: "/al-labeb/open-account/has-house",
    userAddress: "/al-labeb/open-account/user-address",
    workStatus: {
      main: "/al-labeb/open-account/work-status",
      unEmploy: "/al-labeb/open-account/work-status/un-employ",
      name: "/al-labeb/open-account/work-status/name",
      workField: "/al-labeb/open-account/work-status/work-field",
      salary: "/al-labeb/open-account/work-status/salary",
    },
    end: "/al-labeb/open-account/end",
  },
  deposit: {
    main: "/al-labeb/deposit",
    source: {
      main: "/al-labeb/deposit/source",
      financialBusinessIncome:
        "/al-labeb/deposit/source/financial-business-income",
    },
    cause: "/al-labeb/deposit/cause",
    amount: "/al-labeb/deposit/amount",
    end: "/al-labeb/deposit/end",
  },
  withdrawal: {
    main: "/al-labeb/withdrawal",
    cause: {
      main: "/al-labeb/withdrawal/cause",
      personalExpense: "/al-labeb/withdrawal/cause/personal-expense",
      commercialPurpose: "/al-labeb/withdrawal/cause/commercial-purpose",
    },
    amount: {
      main: "/al-labeb/withdrawal/amount",
      exceedAmount: "/al-labeb/withdrawal/amount/exceed",
    },
    end: "/al-labeb/withdrawal/end",
  },
  end: "/al-labeb/end",
};
export default pagesRoutes;
