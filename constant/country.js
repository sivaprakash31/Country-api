const countries = [
    {
        "dialCode": "+1",
        "flag": "🇨🇦",
        "code": "CA",
        "country": "Canada"
    },
    {
        "dialCode": "+1",
        "flag": "🇺🇸",
        "code": "US",
        "country": "United States"
    },
    {
        "dialCode": "+1242",
        "flag": "🇧🇸",
        "code": "BS",
        "country": "Bahamas"
    },
    {
        "dialCode": "+1246",
        "flag": "🇧🇧",
        "code": "BB",
        "country": "Barbados"
    },
    {
        "dialCode": "+1264",
        "flag": "🇦🇮",
        "code": "AI",
        "country": "Anguilla"
    },
    {
        "dialCode": "+1268",
        "flag": "🇦🇬",
        "code": "AG",
        "country": "Antigua and Barbuda"
    },
    {
        "dialCode": "+1284",
        "flag": "🇻🇬",
        "code": "VG",
        "country": "Virgin Islands, British"
    },
    {
        "dialCode": "+1340",
        "flag": "🇻🇮",
        "code": "VI",
        "country": "Virgin Islands, U.S."
    },
    {
        "dialCode": "+1441",
        "flag": "🇧🇲",
        "code": "BM",
        "country": "Bermuda"
    },
    {
        "dialCode": "+1473",
        "flag": "🇬🇩",
        "code": "GD",
        "country": "Grenada"
    },
    {
        "dialCode": "+1649",
        "flag": "🇹🇨",
        "code": "TC",
        "country": "Turks and Caicos Islands"
    },
    {
        "dialCode": "+1664",
        "flag": "🇲🇸",
        "code": "MS",
        "country": "Montserrat"
    },
    {
        "dialCode": "+1670",
        "flag": "🇲🇵",
        "code": "MP",
        "country": "Northern Mariana Islands"
    },
    {
        "dialCode": "+1671",
        "flag": "🇬🇺",
        "code": "GU",
        "country": "Guam"
    },
    {
        "dialCode": "+1684",
        "flag": "🇦🇸",
        "code": "AS",
        "country": "American Samoa"
    },
    {
        "dialCode": "+1758",
        "flag": "🇱🇨",
        "code": "LC",
        "country": "Saint Lucia"
    },
    {
        "dialCode": "+1767",
        "flag": "🇩🇲",
        "code": "DM",
        "country": "Dominica"
    },
    {
        "dialCode": "+1784",
        "flag": "🇻🇨",
        "code": "VC",
        "country": "Saint Vincent and the Grenadines"
    },
    {
        "dialCode": "+1849",
        "flag": "🇩🇴",
        "code": "DO",
        "country": "Dominican Republic"
    },
    {
        "dialCode": "+1868",
        "flag": "🇹🇹",
        "code": "TT",
        "country": "Trinidad and Tobago"
    },
    {
        "dialCode": "+1869",
        "flag": "🇰🇳",
        "code": "KN",
        "country": "Saint Kitts and Nevis"
    },
    {
        "dialCode": "+1876",
        "flag": "🇯🇲",
        "code": "JM",
        "country": "Jamaica"
    },
    {
        "dialCode": "+1939",
        "flag": "🇵🇷",
        "code": "PR",
        "country": "Puerto Rico"
    },
    {
        "dialCode": "+20",
        "flag": "🇪🇬",
        "code": "EG",
        "country": "Egypt"
    },
    {
        "dialCode": "+211",
        "flag": "🇸🇸",
        "code": "SS",
        "country": "South Sudan"
    },
    {
        "dialCode": "+212",
        "flag": "🇲🇦",
        "code": "MA",
        "country": "Morocco"
    },
    {
        "dialCode": "+213",
        "flag": "🇩🇿",
        "code": "DZ",
        "country": "Algeria"
    },
    {
        "dialCode": "+216",
        "flag": "🇹🇳",
        "code": "TN",
        "country": "Tunisia"
    },
    {
        "dialCode": "+218",
        "flag": "🇱🇾",
        "code": "LY",
        "country": "Libyan Arab Jamahiriya"
    },
    {
        "dialCode": "+220",
        "flag": "🇬🇲",
        "code": "GM",
        "country": "Gambia"
    },
    {
        "dialCode": "+221",
        "flag": "🇸🇳",
        "code": "SN",
        "country": "Senegal"
    },
    {
        "dialCode": "+222",
        "flag": "🇲🇷",
        "code": "MR",
        "country": "Mauritania"
    },
    {
        "dialCode": "+223",
        "flag": "🇲🇱",
        "code": "ML",
        "country": "Mali"
    },
    {
        "dialCode": "+224",
        "flag": "🇬🇳",
        "code": "GN",
        "country": "Guinea"
    },
    {
        "dialCode": "+225",
        "flag": "🇨🇮",
        "code": "CI",
        "country": "Cote d'Ivoire"
    },
    {
        "dialCode": "+226",
        "flag": "🇧🇫",
        "code": "BF",
        "country": "Burkina Faso"
    },
    {
        "dialCode": "+227",
        "flag": "🇳🇪",
        "code": "NE",
        "country": "Niger"
    },
    {
        "dialCode": "+228",
        "flag": "🇹🇬",
        "code": "TG",
        "country": "Togo"
    },
    {
        "dialCode": "+229",
        "flag": "🇧🇯",
        "code": "BJ",
        "country": "Benin"
    },
    {
        "dialCode": "+230",
        "flag": "🇲🇺",
        "code": "MU",
        "country": "Mauritius"
    },
    {
        "dialCode": "+231",
        "flag": "🇱🇷",
        "code": "LR",
        "country": "Liberia"
    },
    {
        "dialCode": "+232",
        "flag": "🇸🇱",
        "code": "SL",
        "country": "Sierra Leone"
    },
    {
        "dialCode": "+233",
        "flag": "🇬🇭",
        "code": "GH",
        "country": "Ghana"
    },
    {
        "dialCode": "+234",
        "flag": "🇳🇬",
        "code": "NG",
        "country": "Nigeria"
    },
    {
        "dialCode": "+235",
        "flag": "🇹🇩",
        "code": "TD",
        "country": "Chad"
    },
    {
        "dialCode": "+236",
        "flag": "🇨🇫",
        "code": "CF",
        "country": "Central African Republic"
    },
    {
        "dialCode": "+237",
        "flag": "🇨🇲",
        "code": "CM",
        "country": "Cameroon"
    },
    {
        "dialCode": "+238",
        "flag": "🇨🇻",
        "code": "CV",
        "country": "Cape Verde"
    },
    {
        "dialCode": "+239",
        "flag": "🇸🇹",
        "code": "ST",
        "country": "Sao Tome and Principe"
    },
    {
        "dialCode": "+240",
        "flag": "🇬🇶",
        "code": "GQ",
        "country": "Equatorial Guinea"
    },
    {
        "dialCode": "+241",
        "flag": "🇬🇦",
        "code": "GA",
        "country": "Gabon"
    },
    {
        "dialCode": "+242",
        "flag": "🇨🇬",
        "code": "CG",
        "country": "Congo"
    },
    {
        "dialCode": "+243",
        "flag": "🇨🇩",
        "code": "CD",
        "country": "Congo, The Democratic Republic of the Congo"
    },
    {
        "dialCode": "+244",
        "flag": "🇦🇴",
        "code": "AO",
        "country": "Angola"
    },
    {
        "dialCode": "+245",
        "flag": "🇬🇼",
        "code": "GW",
        "country": "Guinea-Bissau"
    },
    {
        "dialCode": "+246",
        "flag": "🇮🇴",
        "code": "IO",
        "country": "British Indian Ocean Territory"
    },
    {
        "dialCode": "+248",
        "flag": "🇸🇨",
        "code": "SC",
        "country": "Seychelles"
    },
    {
        "dialCode": "+249",
        "flag": "🇸🇩",
        "code": "SD",
        "country": "Sudan"
    },
    {
        "dialCode": "+250",
        "flag": "🇷🇼",
        "code": "RW",
        "country": "Rwanda"
    },
    {
        "dialCode": "+251",
        "flag": "🇪🇹",
        "code": "ET",
        "country": "Ethiopia"
    },
    {
        "dialCode": "+252",
        "flag": "🇸🇴",
        "code": "SO",
        "country": "Somalia"
    },
    {
        "dialCode": "+253",
        "flag": "🇩🇯",
        "code": "DJ",
        "country": "Djibouti"
    },
    {
        "dialCode": "+254",
        "flag": "🇰🇪",
        "code": "KE",
        "country": "Kenya"
    },
    {
        "dialCode": "+255",
        "flag": "🇹🇿",
        "code": "TZ",
        "country": "Tanzania, United Republic of Tanzania"
    },
    {
        "dialCode": "+256",
        "flag": "🇺🇬",
        "code": "UG",
        "country": "Uganda"
    },
    {
        "dialCode": "+257",
        "flag": "🇧🇮",
        "code": "BI",
        "country": "Burundi"
    },
    {
        "dialCode": "+258",
        "flag": "🇲🇿",
        "code": "MZ",
        "country": "Mozambique"
    },
    {
        "dialCode": "+260",
        "flag": "🇿🇲",
        "code": "ZM",
        "country": "Zambia"
    },
    {
        "dialCode": "+261",
        "flag": "🇲🇬",
        "code": "MG",
        "country": "Madagascar"
    },
    {
        "dialCode": "+262",
        "flag": "🇹🇫",
        "code": "TF",
        "country": "French Southern Territories"
    },
    {
        "dialCode": "+262",
        "flag": "🇾🇹",
        "code": "YT",
        "country": "Mayotte"
    },
    {
        "dialCode": "+262",
        "flag": "🇷🇪",
        "code": "RE",
        "country": "Reunion"
    },
    {
        "dialCode": "+263",
        "flag": "🇿🇼",
        "code": "ZW",
        "country": "Zimbabwe"
    },
    {
        "dialCode": "+264",
        "flag": "🇳🇦",
        "code": "NA",
        "country": "Namibia"
    },
    {
        "dialCode": "+265",
        "flag": "🇲🇼",
        "code": "MW",
        "country": "Malawi"
    },
    {
        "dialCode": "+266",
        "flag": "🇱🇸",
        "code": "LS",
        "country": "Lesotho"
    },
    {
        "dialCode": "+267",
        "flag": "🇧🇼",
        "code": "BW",
        "country": "Botswana"
    },
    {
        "dialCode": "+268",
        "flag": "🇸🇿",
        "code": "SZ",
        "country": "Swaziland"
    },
    {
        "dialCode": "+269",
        "flag": "🇰🇲",
        "code": "KM",
        "country": "Comoros"
    },
    {
        "dialCode": "+27",
        "flag": "🇿🇦",
        "code": "ZA",
        "country": "South Africa"
    },
    {
        "dialCode": "+290",
        "flag": "🇸🇭",
        "code": "SH",
        "country": "Saint Helena, Ascension and Tristan Da Cunha"
    },
    {
        "dialCode": "+291",
        "flag": "🇪🇷",
        "code": "ER",
        "country": "Eritrea"
    },
    {
        "dialCode": "+297",
        "flag": "🇦🇼",
        "code": "AW",
        "country": "Aruba"
    },
    {
        "dialCode": "+298",
        "flag": "🇫🇴",
        "code": "FO",
        "country": "Faroe Islands"
    },
    {
        "dialCode": "+299",
        "flag": "🇬🇱",
        "code": "GL",
        "country": "Greenland"
    },
    {
        "dialCode": "+30",
        "flag": "🇬🇷",
        "code": "GR",
        "country": "Greece"
    },
    {
        "dialCode": "+31",
        "flag": "🇳🇱",
        "code": "NL",
        "country": "Netherlands"
    },
    {
        "dialCode": "+32",
        "flag": "🇧🇪",
        "code": "BE",
        "country": "Belgium"
    },
    {
        "dialCode": "+33",
        "flag": "🇫🇷",
        "code": "FR",
        "country": "France"
    },
    {
        "dialCode": "+34",
        "flag": "🇪🇸",
        "code": "ES",
        "country": "Spain"
    },
    {
        "dialCode": "+345",
        "flag": "🇰🇾",
        "code": "KY",
        "country": "Cayman Islands"
    },
    {
        "dialCode": "+350",
        "flag": "🇬🇮",
        "code": "GI",
        "country": "Gibraltar"
    },
    {
        "dialCode": "+351",
        "flag": "🇵🇹",
        "code": "PT",
        "country": "Portugal"
    },
    {
        "dialCode": "+352",
        "flag": "🇱🇺",
        "code": "LU",
        "country": "Luxembourg"
    },
    {
        "dialCode": "+353",
        "flag": "🇮🇪",
        "code": "IE",
        "country": "Ireland"
    },
    {
        "dialCode": "+354",
        "flag": "🇮🇸",
        "code": "IS",
        "country": "Iceland"
    },
    {
        "dialCode": "+355",
        "flag": "🇦🇱",
        "code": "AL",
        "country": "Albania"
    },
    {
        "dialCode": "+356",
        "flag": "🇲🇹",
        "code": "MT",
        "country": "Malta"
    },
    {
        "dialCode": "+357",
        "flag": "🇨🇾",
        "code": "CY",
        "country": "Cyprus"
    },
    {
        "dialCode": "+358",
        "flag": "🇦🇽",
        "code": "AX",
        "country": "Åland Islands"
    },
    {
        "dialCode": "+358",
        "flag": "🇫🇮",
        "code": "FI",
        "country": "Finland"
    },
    {
        "dialCode": "+359",
        "flag": "🇧🇬",
        "code": "BG",
        "country": "Bulgaria"
    },
    {
        "dialCode": "+36",
        "flag": "🇭🇺",
        "code": "HU",
        "country": "Hungary"
    },
    {
        "dialCode": "+370",
        "flag": "🇱🇹",
        "code": "LT",
        "country": "Lithuania"
    },
    {
        "dialCode": "+371",
        "flag": "🇱🇻",
        "code": "LV",
        "country": "Latvia"
    },
    {
        "dialCode": "+372",
        "flag": "🇪🇪",
        "code": "EE",
        "country": "Estonia"
    },
    {
        "dialCode": "+373",
        "flag": "🇲🇩",
        "code": "MD",
        "country": "Moldova"
    },
    {
        "dialCode": "+374",
        "flag": "🇦🇲",
        "code": "AM",
        "country": "Armenia"
    },
    {
        "dialCode": "+375",
        "flag": "🇧🇾",
        "code": "BY",
        "country": "Belarus"
    },
    {
        "dialCode": "+376",
        "flag": "🇦🇩",
        "code": "AD",
        "country": "Andorra"
    },
    {
        "dialCode": "+377",
        "flag": "🇲🇨",
        "code": "MC",
        "country": "Monaco"
    },
    {
        "dialCode": "+378",
        "flag": "🇸🇲",
        "code": "SM",
        "country": "San Marino"
    },
    {
        "dialCode": "+379",
        "flag": "🇻🇦",
        "code": "VA",
        "country": "Holy See (Vatican City State)"
    },
    {
        "dialCode": "+380",
        "flag": "🇺🇦",
        "code": "UA",
        "country": "Ukraine"
    },
    {
        "dialCode": "+381",
        "flag": "🇷🇸",
        "code": "RS",
        "country": "Serbia"
    },
    {
        "dialCode": "+382",
        "flag": "🇲🇪",
        "code": "ME",
        "country": "Montenegro"
    },
    {
        "dialCode": "+383",
        "flag": "🇽🇰",
        "code": "XK",
        "country": "Kosovo"
    },
    {
        "dialCode": "+385",
        "flag": "🇭🇷",
        "code": "HR",
        "country": "Croatia"
    },
    {
        "dialCode": "+386",
        "flag": "🇸🇮",
        "code": "SI",
        "country": "Slovenia"
    },
    {
        "dialCode": "+387",
        "flag": "🇧🇦",
        "code": "BA",
        "country": "Bosnia and Herzegovina"
    },
    {
        "dialCode": "+389",
        "flag": "🇲🇰",
        "code": "MK",
        "country": "Macedonia"
    },
    {
        "dialCode": "+39",
        "flag": "🇮🇹",
        "code": "IT",
        "country": "Italy"
    },
    {
        "dialCode": "+40",
        "flag": "🇷🇴",
        "code": "RO",
        "country": "Romania"
    },
    {
        "dialCode": "+41",
        "flag": "🇨🇭",
        "code": "CH",
        "country": "Switzerland"
    },
    {
        "dialCode": "+420",
        "flag": "🇨🇿",
        "code": "CZ",
        "country": "Czech Republic"
    },
    {
        "dialCode": "+421",
        "flag": "🇸🇰",
        "code": "SK",
        "country": "Slovakia"
    },
    {
        "dialCode": "+423",
        "flag": "🇱🇮",
        "code": "LI",
        "country": "Liechtenstein"
    },
    {
        "dialCode": "+43",
        "flag": "🇦🇹",
        "code": "AT",
        "country": "Austria"
    },
    {
        "dialCode": "+44",
        "flag": "🇬🇬",
        "code": "GG",
        "country": "Guernsey"
    },
    {
        "dialCode": "+44",
        "flag": "🇮🇲",
        "code": "IM",
        "country": "Isle of Man"
    },
    {
        "dialCode": "+44",
        "flag": "🇯🇪",
        "code": "JE",
        "country": "Jersey"
    },
    {
        "dialCode": "+44",
        "flag": "🇬🇧",
        "code": "GB",
        "country": "United Kingdom"
    },
    {
        "dialCode": "+45",
        "flag": "🇩🇰",
        "code": "DK",
        "country": "Denmark"
    },
    {
        "dialCode": "+46",
        "flag": "🇸🇪",
        "code": "SE",
        "country": "Sweden"
    },
    {
        "dialCode": "+47",
        "flag": "🇧🇻",
        "code": "BV",
        "country": "Bouvet Island"
    },
    {
        "dialCode": "+47",
        "flag": "🇳🇴",
        "code": "NO",
        "country": "Norway"
    },
    {
        "dialCode": "+47",
        "flag": "🇸🇯",
        "code": "SJ",
        "country": "Svalbard and Jan Mayen"
    },
    {
        "dialCode": "+48",
        "flag": "🇵🇱",
        "code": "PL",
        "country": "Poland"
    },
    {
        "dialCode": "+49",
        "flag": "🇩🇪",
        "code": "DE",
        "country": "Germany"
    },
    {
        "dialCode": "+500",
        "flag": "🇫🇰",
        "code": "FK",
        "country": "Falkland Islands (Malvinas)"
    },
    {
        "dialCode": "+500",
        "flag": "🇬🇸",
        "code": "GS",
        "country": "South Georgia and the South Sandwich Islands"
    },
    {
        "dialCode": "+501",
        "flag": "🇧🇿",
        "code": "BZ",
        "country": "Belize"
    },
    {
        "dialCode": "+502",
        "flag": "🇬🇹",
        "code": "GT",
        "country": "Guatemala"
    },
    {
        "dialCode": "+503",
        "flag": "🇸🇻",
        "code": "SV",
        "country": "El Salvador"
    },
    {
        "dialCode": "+504",
        "flag": "🇭🇳",
        "code": "HN",
        "country": "Honduras"
    },
    {
        "dialCode": "+505",
        "flag": "🇳🇮",
        "code": "NI",
        "country": "Nicaragua"
    },
    {
        "dialCode": "+506",
        "flag": "🇨🇷",
        "code": "CR",
        "country": "Costa Rica"
    },
    {
        "dialCode": "+507",
        "flag": "🇵🇦",
        "code": "PA",
        "country": "Panama"
    },
    {
        "dialCode": "+508",
        "flag": "🇵🇲",
        "code": "PM",
        "country": "Saint Pierre and Miquelon"
    },
    {
        "dialCode": "+509",
        "flag": "🇭🇹",
        "code": "HT",
        "country": "Haiti"
    },
    {
        "dialCode": "+51",
        "flag": "🇵🇪",
        "code": "PE",
        "country": "Peru"
    },
    {
        "dialCode": "+52",
        "flag": "🇲🇽",
        "code": "MX",
        "country": "Mexico"
    },
    {
        "dialCode": "+53",
        "flag": "🇨🇺",
        "code": "CU",
        "country": "Cuba"
    },
    {
        "dialCode": "+54",
        "flag": "🇦🇷",
        "code": "AR",
        "country": "Argentina"
    },
    {
        "dialCode": "+55",
        "flag": "🇧🇷",
        "code": "BR",
        "country": "Brazil"
    },
    {
        "dialCode": "+56",
        "flag": "🇨🇱",
        "code": "CL",
        "country": "Chile"
    },
    {
        "dialCode": "+57",
        "flag": "🇨🇴",
        "code": "CO",
        "country": "Colombia"
    },
    {
        "dialCode": "+58",
        "flag": "🇻🇪",
        "code": "VE",
        "country": "Venezuela, Bolivarian Republic of Venezuela"
    },
    {
        "dialCode": "+590",
        "flag": "🇬🇵",
        "code": "GP",
        "country": "Guadeloupe"
    },
    {
        "dialCode": "+590",
        "flag": "🇧🇱",
        "code": "BL",
        "country": "Saint Barthelemy"
    },
    {
        "dialCode": "+590",
        "flag": "🇲🇫",
        "code": "MF",
        "country": "Saint Martin"
    },
    {
        "dialCode": "+591",
        "flag": "🇧🇴",
        "code": "BO",
        "country": "Bolivia, Plurinational State of bolivia"
    },
    {
        "dialCode": "+592",
        "flag": "🇬🇾",
        "code": "GY",
        "country": "Guyana"
    },
    {
        "dialCode": "+593",
        "flag": "🇪🇨",
        "code": "EC",
        "country": "Ecuador"
    },
    {
        "dialCode": "+594",
        "flag": "🇬🇫",
        "code": "GF",
        "country": "French Guiana"
    },
    {
        "dialCode": "+595",
        "flag": "🇵🇾",
        "code": "PY",
        "country": "Paraguay"
    },
    {
        "dialCode": "+596",
        "flag": "🇲🇶",
        "code": "MQ",
        "country": "Martinique"
    },
    {
        "dialCode": "+597",
        "flag": "🇸🇷",
        "code": "SR",
        "country": "Suriname"
    },
    {
        "dialCode": "+598",
        "flag": "🇺🇾",
        "code": "UY",
        "country": "Uruguay"
    },
    {
        "dialCode": "+599",
        "flag": "",
        "code": "AN",
        "country": "Netherlands Antilles"
    },
    {
        "dialCode": "+60",
        "flag": "🇲🇾",
        "code": "MY",
        "country": "Malaysia"
    },
    {
        "dialCode": "+61",
        "flag": "🇦🇺",
        "code": "AU",
        "country": "Australia"
    },
    {
        "dialCode": "+61",
        "flag": "🇨🇽",
        "code": "CX",
        "country": "Christmas Island"
    },
    {
        "dialCode": "+61",
        "flag": "🇨🇨",
        "code": "CC",
        "country": "Cocos (Keeling) Islands"
    },
    {
        "dialCode": "+62",
        "flag": "🇮🇩",
        "code": "ID",
        "country": "Indonesia"
    },
    {
        "dialCode": "+63",
        "flag": "🇵🇭",
        "code": "PH",
        "country": "Philippines"
    },
    {
        "dialCode": "+64",
        "flag": "🇳🇿",
        "code": "NZ",
        "country": "New Zealand"
    },
    {
        "dialCode": "+64",
        "flag": "🇵🇳",
        "code": "PN",
        "country": "Pitcairn"
    },
    {
        "dialCode": "+65",
        "flag": "🇸🇬",
        "code": "SG",
        "country": "Singapore"
    },
    {
        "dialCode": "+66",
        "flag": "🇹🇭",
        "code": "TH",
        "country": "Thailand"
    },
    {
        "dialCode": "+670",
        "flag": "🇹🇱",
        "code": "TL",
        "country": "Timor-Leste"
    },
    {
        "dialCode": "+672",
        "flag": "🇦🇶",
        "code": "AQ",
        "country": "Antarctica"
    },
    {
        "dialCode": "+672",
        "flag": "🇭🇲",
        "code": "HM",
        "country": "Heard Island and Mcdonald Islands"
    },
    {
        "dialCode": "+672",
        "flag": "🇳🇫",
        "code": "NF",
        "country": "Norfolk Island"
    },
    {
        "dialCode": "+673",
        "flag": "🇧🇳",
        "code": "BN",
        "country": "Brunei Darussalam"
    },
    {
        "dialCode": "+674",
        "flag": "🇳🇷",
        "code": "NR",
        "country": "Nauru"
    },
    {
        "dialCode": "+675",
        "flag": "🇵🇬",
        "code": "PG",
        "country": "Papua New Guinea"
    },
    {
        "dialCode": "+676",
        "flag": "🇹🇴",
        "code": "TO",
        "country": "Tonga"
    },
    {
        "dialCode": "+677",
        "flag": "🇸🇧",
        "code": "SB",
        "country": "Solomon Islands"
    },
    {
        "dialCode": "+678",
        "flag": "🇻🇺",
        "code": "VU",
        "country": "Vanuatu"
    },
    {
        "dialCode": "+679",
        "flag": "🇫🇯",
        "code": "FJ",
        "country": "Fiji"
    },
    {
        "dialCode": "+680",
        "flag": "🇵🇼",
        "code": "PW",
        "country": "Palau"
    },
    {
        "dialCode": "+681",
        "flag": "🇼🇫",
        "code": "WF",
        "country": "Wallis and Futuna"
    },
    {
        "dialCode": "+682",
        "flag": "🇨🇰",
        "code": "CK",
        "country": "Cook Islands"
    },
    {
        "dialCode": "+683",
        "flag": "🇳🇺",
        "code": "NU",
        "country": "Niue"
    },
    {
        "dialCode": "+685",
        "flag": "🇼🇸",
        "code": "WS",
        "country": "Samoa"
    },
    {
        "dialCode": "+686",
        "flag": "🇰🇮",
        "code": "KI",
        "country": "Kiribati"
    },
    {
        "dialCode": "+687",
        "flag": "🇳🇨",
        "code": "NC",
        "country": "New Caledonia"
    },
    {
        "dialCode": "+688",
        "flag": "🇹🇻",
        "code": "TV",
        "country": "Tuvalu"
    },
    {
        "dialCode": "+689",
        "flag": "🇵🇫",
        "code": "PF",
        "country": "French Polynesia"
    },
    {
        "dialCode": "+690",
        "flag": "🇹🇰",
        "code": "TK",
        "country": "Tokelau"
    },
    {
        "dialCode": "+691",
        "flag": "🇫🇲",
        "code": "FM",
        "country": "Micronesia, Federated States of Micronesia"
    },
    {
        "dialCode": "+692",
        "flag": "🇲🇭",
        "code": "MH",
        "country": "Marshall Islands"
    },
    {
        "dialCode": "+7",
        "flag": "🇰🇿",
        "code": "KZ",
        "country": "Kazakhstan"
    },
    {
        "dialCode": "+7",
        "flag": "🇷🇺",
        "code": "RU",
        "country": "Russia"
    },
    {
        "dialCode": "+81",
        "flag": "🇯🇵",
        "code": "JP",
        "country": "Japan"
    },
    {
        "dialCode": "+82",
        "flag": "🇰🇷",
        "code": "KR",
        "country": "Korea, Republic of South Korea"
    },
    {
        "dialCode": "+84",
        "flag": "🇻🇳",
        "code": "VN",
        "country": "Vietnam"
    },
    {
        "dialCode": "+850",
        "flag": "🇰🇵",
        "code": "KP",
        "country": "Korea, Democratic People's Republic of Korea"
    },
    {
        "dialCode": "+852",
        "flag": "🇭🇰",
        "code": "HK",
        "country": "Hong Kong"
    },
    {
        "dialCode": "+853",
        "flag": "🇲🇴",
        "code": "MO",
        "country": "Macao"
    },
    {
        "dialCode": "+855",
        "flag": "🇰🇭",
        "code": "KH",
        "country": "Cambodia"
    },
    {
        "dialCode": "+856",
        "flag": "🇱🇦",
        "code": "LA",
        "country": "Laos"
    },
    {
        "dialCode": "+86",
        "flag": "🇨🇳",
        "code": "CN",
        "country": "China"
    },
    {
        "dialCode": "+880",
        "flag": "🇧🇩",
        "code": "BD",
        "country": "Bangladesh"
    },
    {
        "dialCode": "+886",
        "flag": "🇹🇼",
        "code": "TW",
        "country": "Taiwan"
    },
    {
        "dialCode": "+90",
        "flag": "🇹🇷",
        "code": "TR",
        "country": "Turkey"
    },
    {
        "dialCode": "+91",
        "flag": "🇮🇳",
        "code": "IN",
        "country": "India"
    },
    {
        "dialCode": "+92",
        "flag": "🇵🇰",
        "code": "PK",
        "country": "Pakistan"
    },
    {
        "dialCode": "+93",
        "flag": "🇦🇫",
        "code": "AF",
        "country": "Afghanistan"
    },
    {
        "dialCode": "+94",
        "flag": "🇱🇰",
        "code": "LK",
        "country": "Sri Lanka"
    },
    {
        "dialCode": "+95",
        "flag": "🇲🇲",
        "code": "MM",
        "country": "Myanmar"
    },
    {
        "dialCode": "+960",
        "flag": "🇲🇻",
        "code": "MV",
        "country": "Maldives"
    },
    {
        "dialCode": "+961",
        "flag": "🇱🇧",
        "code": "LB",
        "country": "Lebanon"
    },
    {
        "dialCode": "+962",
        "flag": "🇯🇴",
        "code": "JO",
        "country": "Jordan"
    },
    {
        "dialCode": "+963",
        "flag": "🇸🇾",
        "code": "SY",
        "country": "Syrian Arab Republic"
    },
    {
        "dialCode": "+964",
        "flag": "🇮🇶",
        "code": "IQ",
        "country": "Iraq"
    },
    {
        "dialCode": "+965",
        "flag": "🇰🇼",
        "code": "KW",
        "country": "Kuwait"
    },
    {
        "dialCode": "+966",
        "flag": "🇸🇦",
        "code": "SA",
        "country": "Saudi Arabia"
    },
    {
        "dialCode": "+967",
        "flag": "🇾🇪",
        "code": "YE",
        "country": "Yemen"
    },
    {
        "dialCode": "+968",
        "flag": "🇴🇲",
        "code": "OM",
        "country": "Oman"
    },
    {
        "dialCode": "+970",
        "flag": "🇵🇸",
        "code": "PS",
        "country": "Palestinian Territory, Occupied"
    },
    {
        "dialCode": "+971",
        "flag": "🇦🇪",
        "code": "AE",
        "country": "United Arab Emirates"
    },
    {
        "dialCode": "+972",
        "flag": "🇮🇱",
        "code": "IL",
        "country": "Israel"
    },
    {
        "dialCode": "+973",
        "flag": "🇧🇭",
        "code": "BH",
        "country": "Bahrain"
    },
    {
        "dialCode": "+974",
        "flag": "🇶🇦",
        "code": "QA",
        "country": "Qatar"
    },
    {
        "dialCode": "+975",
        "flag": "🇧🇹",
        "code": "BT",
        "country": "Bhutan"
    },
    {
        "dialCode": "+976",
        "flag": "🇲🇳",
        "code": "MN",
        "country": "Mongolia"
    },
    {
        "dialCode": "+977",
        "flag": "🇳🇵",
        "code": "NP",
        "country": "Nepal"
    },
    {
        "dialCode": "+98",
        "flag": "🇮🇷",
        "code": "IR",
        "country": "Iran, Islamic Republic of Persian Gulf"
    },
    {
        "dialCode": "+992",
        "flag": "🇹🇯",
        "code": "TJ",
        "country": "Tajikistan"
    },
    {
        "dialCode": "+993",
        "flag": "🇹🇲",
        "code": "TM",
        "country": "Turkmenistan"
    },
    {
        "dialCode": "+994",
        "flag": "🇦🇿",
        "code": "AZ",
        "country": "Azerbaijan"
    },
    {
        "dialCode": "+995",
        "flag": "🇬🇪",
        "code": "GE",
        "country": "Georgia"
    },
    {
        "dialCode": "+996",
        "flag": "🇰🇬",
        "code": "KG",
        "country": "Kyrgyzstan"
    },
    {
        "dialCode": "+998",
        "flag": "🇺🇿",
        "code": "UZ",
        "country": "Uzbekistan"
    }
]

module.exports = {
    countries
};