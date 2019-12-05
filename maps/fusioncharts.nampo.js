(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=36)})({36:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(37);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},37:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright InfoSoft Global Pvt. Ltd.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author InfoSoft Global Pvt. Ltd.
 * @meta package_map_pack
 * @id fusionmaps.Nampo.1.08-04-2017 02:59:47
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Nampo",revision:1,standaloneInit:true,baseWidth:512,baseHeight:502,baseScaleFactor:10,entities:{"KP.OC":{outlines:[[M,2254,873,Q,2211,836,2142,847,2121,850,2114,841,2110,836,2103,835,2086,831,2082,821,2081,817,2077,816,2045,805,2007,809,1975,812,1950,801,1943,798,1937,797,1870,795,1802,792,1799,792,1796,790,1790,788,1785,786,1771,778,1751,764,1745,760,1740,754,1731,744,1719,744,1684,743,1649,743,1585,744,1528,729,1521,728,1516,723,1511,718,1507,713,1502,708,1500,703,1492,680,1482,667,1479,664,1478,660,1470,640,1444,636,1400,628,1381,596,1370,577,1358,559,1346,541,1317,530,1313,529,1309,527,1283,514,1277,488,1271,464,1251,452,1208,452,1165,454,1157,454,1149,455,1137,456,1124,458,1122,458,1120,460,1107,473,1105,493,1104,503,1100,512,1098,518,1092,521,1065,539,1049,553,1047,554,1047,558,1048,580,1033,589,1030,591,1026,592,1005,598,995,617,993,620,992,624,986,639,972,643,969,645,965,646,947,653,951,677,952,690,952,702,951,722,939,729,921,741,903,751,899,753,897,756,895,759,895,763,893,778,892,792,892,803,886,807,878,813,866,814,862,815,859,817,852,824,849,832,848,835,845,836,827,845,814,850,811,851,809,852,797,858,788,873,787,876,786,878,784,882,782,885,780,888,777,891,767,899,755,902,743,905,739,910,730,920,731,939,731,960,728,980,727,982,724,985,721,989,718,992,717,995,714,996,690,1010,685,1029,679,1053,655,1062,653,1062,652,1066,651,1068,651,1071,649,1081,637,1082,633,1083,631,1088,629,1093,629,1099,629,1130,631,1161,631,1165,630,1167,627,1171,621,1172,615,1173,610,1175,606,1177,604,1181,602,1185,599,1188,596,1191,594,1195,592,1198,592,1202,591,1219,594,1235,596,1245,596,1255,596,1279,594,1304,594,1308,592,1312,588,1323,581,1337,575,1349,561,1356,559,1357,559,1361,561,1385,552,1405,551,1408,548,1411,545,1415,541,1417,539,1419,535,1420,518,1424,520,1451,520,1458,518,1464,512,1480,512,1501,512,1507,511,1513,510,1519,509,1525,506,1536,502,1542,500,1546,497,1547,492,1550,486,1551,483,1552,481,1552,465,1554,449,1554,425,1555,411,1565,404,1571,400,1579,397,1586,394,1594,388,1606,375,1605,352,1603,330,1602,319,1602,312,1606,309,1607,306,1608,303,1609,303,1612,301,1622,300,1632,299,1639,292,1648,287,1654,280,1658,277,1660,272,1660,241,1658,212,1666,205,1669,198,1671,195,1673,191,1674,178,1679,180,1698,180,1699,180,1702,176,1723,183,1742,184,1746,185,1750,189,1769,211,1776,217,1777,223,1779,231,1781,240,1781,256,1781,264,1788,294,1810,294,1853,293,1916,295,1980,295,1984,295,1988,297,2008,299,2029,299,2033,300,2037,301,2056,303,2074,303,2078,304,2082,305,2101,305,2119,305,2150,294,2177,293,2181,293,2185,293,2199,291,2213,291,2215,290,2218,289,2228,286,2237,285,2242,282,2247,279,2252,275,2257,265,2272,244,2273,242,2273,239,2273,234,2275,227,2274,218,2274,216,2281,215,2283,213,2285,209,2287,207,2291,202,2308,182,2306,178,2305,174,2307,166,2310,158,2311,142,2313,143,2328,143,2330,143,2333,139,2352,148,2367,150,2371,153,2374,160,2381,178,2378,184,2377,188,2374,193,2371,196,2366,199,2363,202,2360,209,2356,212,2351,213,2348,219,2347,241,2345,241,2369,240,2404,238,2439,238,2441,237,2443,232,2467,219,2479,210,2488,199,2493,197,2494,195,2496,180,2520,180,2557,181,2588,186,2616,186,2617,186,2619,182,2695,182,2771,182,2791,184,2812,184,2816,187,2819,191,2822,195,2822,215,2824,236,2826,238,2826,239,2828,246,2844,245,2865,244,2882,255,2888,258,2890,262,2892,266,2896,272,2898,279,2902,279,2910,279,2914,279,2918,281,2937,282,2955,283,2972,305,2973,315,2974,323,2978,326,2980,330,2980,349,2981,344,3005,342,3014,339,3024,338,3027,335,3030,332,3033,329,3035,326,3037,322,3037,302,3041,282,3049,281,3049,281,3053,281,3072,277,3090,277,3094,271,3097,253,3105,240,3115,238,3117,236,3119,234,3123,231,3126,225,3135,225,3147,225,3150,223,3151,212,3158,199,3159,195,3160,192,3164,183,3181,172,3190,168,3193,162,3194,136,3201,135,3225,135,3246,123,3264,121,3266,120,3270,119,3281,114,3288,109,3294,104,3298,101,3301,96,3303,88,3306,87,3319,86,3324,85,3328,79,3350,51,3346,49,3346,47,3348,19,3373,26,3418,27,3422,27,3426,28,3438,43,3438,45,3438,48,3442,59,3456,69,3475,72,3479,76,3482,96,3496,121,3493,133,3492,145,3495,150,3496,154,3499,164,3506,173,3514,176,3516,178,3520,182,3527,195,3528,199,3528,202,3533,214,3550,229,3559,232,3561,236,3561,275,3556,305,3574,307,3576,309,3578,314,3582,317,3586,323,3595,325,3602,326,3606,328,3607,332,3610,337,3612,340,3612,341,3615,346,3622,349,3627,357,3639,365,3650,367,3653,371,3654,381,3655,391,3655,417,3653,423,3675,424,3680,426,3685,428,3690,429,3696,431,3714,442,3722,449,3727,456,3731,466,3736,468,3742,474,3755,484,3763,488,3766,494,3766,522,3766,551,3768,553,3768,555,3771,562,3781,567,3786,573,3793,583,3794,588,3795,592,3799,601,3809,608,3823,613,3832,624,3837,627,3838,629,3840,645,3855,670,3854,674,3854,678,3854,701,3856,723,3854,727,3854,730,3851,739,3837,751,3823,759,3813,780,3814,803,3815,825,3813,828,3813,830,3813,838,3811,846,3810,856,3809,858,3795,858,3789,861,3782,862,3776,862,3770,862,3740,866,3709,866,3707,870,3704,876,3700,885,3694,887,3692,886,3688,883,3661,900,3648,911,3639,907,3614,905,3607,911,3602,916,3596,921,3591,924,3588,928,3586,937,3581,943,3572,951,3563,948,3549,945,3528,958,3518,963,3514,968,3511,971,3510,973,3509,977,3508,980,3506,983,3504,986,3502,989,3500,992,3498,995,3496,996,3492,997,3471,998,3451,999,3441,1009,3439,1014,3438,1019,3436,1022,3434,1026,3433,1046,3428,1045,3410,1045,3406,1046,3401,1047,3397,1047,3393,1050,3378,1067,3375,1069,3375,1072,3374,1089,3369,1102,3358,1106,3354,1108,3348,1115,3329,1114,3307,1114,3305,1115,3303,1119,3292,1132,3289,1135,3289,1137,3288,1148,3282,1156,3273,1159,3270,1160,3266,1169,3224,1169,3180,1169,3103,1169,3025,1169,2976,1167,2926,1167,2924,1165,2922,1155,2911,1138,2907,1135,2906,1133,2902,1126,2890,1128,2873,1129,2861,1132,2849,1135,2842,1141,2837,1151,2827,1163,2832,1167,2834,1171,2839,1174,2844,1176,2849,1178,2853,1177,2857,1175,2865,1180,2868,1182,2869,1181,2873,1179,2902,1187,2926,1188,2928,1190,2929,1205,2934,1218,2944,1224,2950,1227,2959,1231,2970,1234,2980,1235,2986,1237,2991,1239,2998,1242,3005,1243,3010,1244,3016,1245,3038,1259,3047,1262,3049,1265,3052,1270,3057,1274,3063,1283,3073,1284,3086,1285,3105,1286,3123,1288,3143,1288,3164,1288,3178,1288,3193,1288,3195,1288,3197,1291,3198,1300,3197,1313,3196,1325,3195,1329,3181,1333,3175,1335,3172,1338,3168,1352,3151,1374,3151,1387,3151,1399,3150,1401,3149,1403,3149,1414,3147,1413,3135,1413,3131,1414,3127,1421,3094,1460,3097,1483,3098,1505,3099,1525,3100,1541,3092,1553,3086,1550,3073,1547,3055,1560,3043,1563,3041,1567,3041,1598,3041,1628,3039,1632,3039,1636,3037,1649,3030,1665,3030,1669,3015,1675,3009,1677,3008,1679,3005,1681,3002,1685,3e3,1696,2993,1710,2994,1714,2994,1718,2993,1739,2992,1759,2993,1792,2994,1810,2977,1812,2975,1814,2972,1821,2955,1838,2953,1852,2951,1865,2951,1864,2947,1864,2942,1862,2885,1860,2828,1859,2786,1867,2739,1856,2737,1845,2733,1841,2732,1839,2729,1834,2722,1830,2720,1821,2715,1821,2701,1821,2697,1819,2694,1814,2688,1816,2672,1817,2668,1815,2667,1810,2665,1811,2656,1813,2634,1808,2615,1807,2611,1806,2607,1804,2586,1806,2566,1807,2556,1800,2550,1793,2544,1789,2540,1778,2528,1768,2516,1761,2507,1760,2496,1759,2478,1761,2459,1765,2423,1768,2386,1770,2366,1775,2353,1778,2347,1778,2340,1780,2263,1780,2185,1780,2181,1782,2178,1784,2175,1786,2171,1795,2152,1812,2135,1829,2120,1837,2107,1839,2103,1839,2099,1839,2089,1846,2083,1850,2080,1853,2078,1864,2071,1869,2058,1877,2040,1895,2034,1913,2027,1922,2016,1925,2013,1925,2009,1926,2e3,1931,1992,1940,1979,1955,1971,1958,1970,1960,1967,1969,1956,1978,1940,1981,1934,1986,1928,1989,1925,1993,1924,2001,1923,2006,1919,2011,1915,2012,1909,2015,1896,2025,1893,2028,1892,2030,1891,2053,1885,2063,1865,2071,1850,2091,1844,2101,1841,2105,1833,2114,1813,2123,1791,2126,1783,2136,1779,2170,1764,2185,1726,2187,1722,2190,1719,2194,1716,2195,1713,2198,1705,2198,1697,2200,1682,2218,1676,2222,1675,2225,1672,2233,1664,2238,1660,2241,1657,2242,1652,2246,1636,2252,1620,2253,1618,2255,1616,2268,1609,2274,1594,2275,1591,2277,1587,2281,1576,2295,1569,2298,1568,2301,1568,2312,1566,2320,1561,2331,1556,2337,1546,2339,1542,2340,1537,2346,1518,2353,1504,2361,1488,2387,1482,2400,1479,2406,1468,2409,1464,2409,1460,2411,1441,2424,1433,2441,1421,2455,1410,2462,1403,2462,1394,2462,1387,2468,1384,2481,1378,2482,1366,2482,1364,2483,1362,2484,1348,2497,1347,2499,1347,2501,1347,2526,1348,2542,1329,2544,1327,2544,1325,2544,1310,2558,1308,2578,1304,2584,1284,2585,1280,2585,1276,2586,1267,2595,1266,2597,1265,2598,1263,2601,1246,2609,1231,2607,1223,2606,1214,2605,1212,2604,1209,2603,1206,2602,1203,2599,1198,2596,1193,2595,1190,2594,1185,2592,1176,2583,1175,2579,1175,2577,1172,2574,1167,2573,1161,2572,1159,2572,1156,2570,1148,2569,1141,2565,1123,2568,1103,2571,1077,2550,1065,2539,1059,2530,1057,2527,1056,2526,1054,2525,1050,2523,1049,2515,1041,2514,1026,2513,999,2512,972,2511,962,2515,956,2454,957,2410,916,2407,913,2404,912,2398,910,2393,907,2338,872,2270,877,Q,2260,878,2254,873,Z]],label:"Onchon",shortLabel:"OC",labelPosition:[109.7,215.3],labelAlignment:[CEN,MID]},"KP.KS":{outlines:[[M,3884,236,Q,3883,233,3882,230,3881,223,3879,215,3875,196,3872,178,3868,156,3852,144,3850,143,3848,143,3825,142,3812,128,3806,122,3802,117,3794,107,3793,88,3791,69,3789,51,3788,36,3793,33,3755,33,3716,33,3671,33,3626,36,3620,36,3613,38,3607,39,3601,41,3568,53,3551,78,3547,84,3542,89,3525,105,3492,108,3457,111,3438,140,3427,158,3396,156,3380,155,3365,158,3351,161,3338,166,3323,171,3313,187,3304,203,3287,200,3211,188,3176,236,3172,241,3166,241,3092,244,3018,244,3009,244,3e3,242,2973,235,2935,235,2929,235,2922,235,2903,235,2889,228,2864,214,2832,194,2827,190,2822,185,2817,180,2813,179,2788,174,2762,174,2727,174,2693,177,2689,177,2686,177,2648,180,2615,193,2609,196,2602,196,2569,196,2543,210,2539,212,2534,215,2516,225,2499,235,2479,247,2476,283,2471,345,2482,404,2484,411,2485,417,2487,433,2490,448,2491,455,2490,462,2489,482,2498,490,2503,494,2504,500,2506,552,2509,603,2510,632,2544,649,2548,651,2552,651,2569,652,2577,659,2587,667,2597,669,2612,673,2621,693,2633,721,2631,756,2629,789,2620,813,2611,835,2596,852,2590,859,2582,860,2541,866,2544,910,2545,916,2542,922,2539,929,2538,942,2538,948,2535,950,2529,955,2519,955,2517,955,2515,956,2511,962,2512,972,2513,999,2514,1026,2515,1041,2523,1049,2525,1050,2526,1054,2527,1056,2530,1057,2539,1059,2550,1065,2571,1077,2568,1103,2565,1123,2569,1141,2570,1148,2572,1156,2572,1159,2573,1161,2574,1167,2577,1172,2579,1175,2583,1175,2592,1176,2594,1185,2595,1190,2596,1193,2599,1198,2602,1203,2603,1206,2604,1209,2605,1212,2606,1214,2607,1223,2609,1231,2613,1244,2626,1253,2630,1255,2633,1258,2639,1263,2648,1264,2662,1266,2677,1270,2683,1271,2689,1271,2740,1271,2792,1273,2798,1273,2804,1275,2839,1285,2873,1301,2885,1306,2898,1306,2902,1306,2906,1308,2919,1315,2935,1314,2939,1314,2943,1315,2956,1316,2967,1319,2974,1321,2979,1326,2984,1331,2989,1337,3003,1355,3025,1359,3027,1359,3029,1361,3037,1369,3050,1368,3054,1368,3058,1370,3091,1390,3132,1399,3141,1401,3149,1410,3156,1418,3159,1427,3163,1440,3178,1450,3187,1456,3198,1459,3225,1466,3246,1477,3248,1478,3250,1480,3267,1500,3272,1521,3273,1523,3275,1525,3284,1537,3299,1536,3304,1536,3307,1539,3331,1559,3339,1587,3343,1605,3352,1616,3355,1620,3358,1623,3370,1636,3383,1647,3385,1648,3386,1652,3393,1675,3407,1696,3418,1713,3431,1721,3437,1724,3443,1726,3472,1738,3512,1736,3526,1735,3537,1740,3546,1744,3554,1754,3562,1765,3573,1773,3576,1775,3579,1778,3593,1791,3615,1789,3637,1787,3660,1786,3679,1784,3692,1792,3695,1794,3696,1796,3715,1820,3734,1832,3746,1840,3762,1839,3771,1839,3778,1842,3789,1847,3803,1847,3810,1847,3815,1850,3832,1861,3844,1873,3866,1894,3897,1892,3900,1892,3902,1892,3920,1896,3929,1911,3932,1917,3936,1922,3939,1927,3942,1931,3956,1950,3976,1954,3984,1955,3992,1957,3992,1957,3993,1957,3996,1957,4e3,1959,4011,1966,4025,1965,4026,1950,4029,1935,4030,1927,4031,1919,4034,1898,4052,1884,4064,1875,4078,1866,4084,1863,4090,1863,4123,1862,4130,1832,4131,1828,4132,1828,4150,1823,4159,1812,4170,1799,4171,1779,4171,1768,4177,1764,4196,1750,4208,1730,4211,1726,4211,1722,4213,1699,4213,1677,4213,1655,4230,1640,4239,1632,4239,1619,4239,1605,4241,1591,4241,1587,4242,1583,4246,1572,4252,1561,4256,1556,4259,1551,4262,1548,4262,1545,4266,1515,4266,1484,4266,1475,4272,1469,4286,1453,4286,1431,4286,1425,4288,1420,4291,1415,4292,1410,4295,1401,4296,1390,4297,1370,4310,1353,4318,1342,4316,1320,4315,1316,4317,1315,4349,1289,4348,1251,4348,1247,4349,1243,4354,1233,4364,1218,4374,1203,4385,1186,4387,1183,4388,1181,4411,1153,4424,1123,4428,1116,4429,1107,4430,1095,4431,1083,4437,1037,4398,1024,4384,1020,4378,1009,4375,1003,4370,999,4348,979,4323,944,4309,926,4296,914,4275,896,4267,865,4266,862,4264,860,4249,846,4234,833,4229,829,4226,824,4208,801,4209,759,4209,755,4207,753,4194,741,4181,729,4178,727,4174,724,4162,715,4163,698,4164,694,4162,691,4158,685,4160,673,4164,644,4143,624,4137,618,4132,611,4119,593,4122,563,4125,546,4117,539,4114,536,4111,533,4086,511,4089,464,4090,460,4088,457,4084,446,4073,432,4065,420,4053,419,4049,419,4046,417,4031,407,4012,406,4004,405,3997,401,3983,393,3983,370,3983,366,3982,366,3964,358,3946,353,3942,352,3941,349,3932,330,3934,309,3934,299,3936,288,3938,275,3931,271,3928,270,3926,268,3922,264,3917,263,Q,3892,257,3884,236,Z]],label:"Kangso",shortLabel:"KS",labelPosition:[345.3,82.3],labelAlignment:[CEN,MID]},"KP.RY":{outlines:[[M,3692,1792,Q,3679,1784,3660,1786,3637,1787,3615,1789,3593,1791,3579,1778,3576,1775,3573,1773,3562,1765,3554,1754,3546,1744,3537,1740,3526,1735,3512,1736,3472,1738,3443,1726,3437,1724,3431,1721,3418,1713,3407,1696,3393,1675,3386,1652,3385,1648,3383,1647,3370,1636,3358,1623,3355,1620,3352,1616,3343,1605,3339,1587,3331,1559,3307,1539,3304,1536,3299,1536,3284,1537,3275,1525,3273,1523,3272,1521,3267,1500,3250,1480,3248,1478,3246,1477,3225,1466,3198,1459,3187,1456,3178,1450,3163,1440,3159,1427,3156,1418,3149,1410,3141,1401,3132,1399,3091,1390,3058,1370,3054,1368,3050,1368,3037,1369,3029,1361,3027,1359,3025,1359,3003,1355,2989,1337,2984,1331,2979,1326,2974,1321,2967,1319,2956,1316,2943,1315,2939,1314,2935,1314,2919,1315,2906,1308,2902,1306,2898,1306,2885,1306,2873,1301,2839,1285,2804,1275,2798,1273,2792,1273,2740,1271,2689,1271,2683,1271,2677,1270,2662,1266,2648,1264,2639,1263,2633,1258,2630,1255,2626,1253,2613,1244,2609,1231,2601,1246,2598,1263,2597,1265,2595,1266,2586,1267,2585,1276,2585,1280,2584,1284,2578,1304,2558,1308,2544,1310,2544,1325,2544,1327,2542,1329,2526,1348,2501,1347,2499,1347,2497,1347,2484,1348,2483,1362,2482,1364,2482,1366,2481,1378,2468,1384,2462,1387,2462,1394,2462,1403,2455,1410,2441,1421,2424,1433,2411,1441,2409,1460,2409,1464,2406,1468,2400,1479,2387,1482,2361,1488,2353,1504,2346,1518,2340,1537,2339,1542,2337,1546,2331,1556,2320,1561,2312,1566,2301,1568,2298,1568,2295,1569,2281,1576,2277,1587,2275,1591,2274,1594,2268,1609,2255,1616,2253,1618,2252,1620,2246,1636,2242,1652,2241,1657,2238,1660,2233,1664,2225,1672,2222,1675,2218,1676,2200,1682,2198,1697,2198,1705,2195,1713,2194,1716,2190,1719,2187,1722,2185,1726,2170,1764,2136,1779,2126,1783,2123,1791,2114,1813,2105,1833,2101,1841,2091,1844,2071,1850,2063,1865,2053,1885,2030,1891,2028,1892,2025,1893,2015,1896,2012,1909,2011,1915,2006,1919,2001,1923,1993,1924,1989,1925,1986,1928,1981,1934,1978,1940,1969,1956,1960,1967,1958,1970,1955,1971,1940,1979,1931,1992,1926,2e3,1925,2009,1925,2013,1922,2016,1913,2027,1895,2034,1877,2040,1869,2058,1864,2071,1853,2078,1850,2080,1846,2083,1839,2089,1839,2099,1839,2103,1837,2107,1829,2120,1812,2135,1795,2152,1786,2171,1784,2175,1782,2178,1780,2181,1780,2185,1780,2263,1778,2340,1778,2347,1775,2353,1770,2366,1768,2386,1765,2423,1761,2459,1759,2478,1760,2496,1761,2507,1768,2516,1778,2528,1789,2540,1793,2544,1800,2550,1807,2556,1806,2566,1804,2586,1806,2607,1807,2611,1808,2615,1813,2634,1811,2656,1810,2665,1815,2667,1817,2668,1816,2672,1814,2688,1819,2694,1821,2697,1821,2701,1821,2715,1830,2720,1834,2722,1839,2729,1841,2732,1845,2733,1856,2737,1867,2739,1875,2740,1882,2740,1889,2740,1895,2740,1932,2742,1968,2738,1972,2738,1975,2733,1986,2714,2006,2697,2012,2691,2026,2691,2030,2691,2034,2690,2040,2689,2046,2688,2051,2688,2054,2680,2060,2664,2069,2649,2071,2646,2075,2644,2086,2637,2108,2637,2110,2637,2112,2637,2120,2635,2128,2634,2140,2633,2146,2620,2149,2615,2151,2610,2160,2592,2181,2595,2232,2600,2252,2575,2255,2572,2259,2570,2269,2567,2280,2563,2284,2562,2288,2562,2313,2564,2331,2580,2333,2582,2336,2584,2351,2592,2370,2592,2374,2592,2378,2594,2404,2606,2420,2630,2424,2636,2435,2636,2461,2635,2474,2655,2476,2658,2478,2661,2480,2664,2481,2668,2482,2670,2483,2673,2487,2679,2494,2688,2497,2691,2500,2693,2508,2698,2518,2704,2533,2715,2544,2727,2546,2730,2548,2733,2564,2764,2590,2779,2596,2783,2604,2791,2607,2795,2609,2803,2609,2805,2611,2808,2617,2818,2621,2831,2624,2838,2629,2844,2646,2864,2658,2880,2661,2883,2665,2885,2699,2895,2738,2894,2751,2893,2763,2892,2799,2887,2809,2849,2810,2846,2812,2844,2821,2835,2838,2821,2843,2818,2849,2816,2872,2809,2898,2810,2935,2812,2971,2808,2978,2808,2985,2805,2992,2801,3e3,2800,3018,2797,3034,2793,3039,2791,3046,2791,3124,2787,3198,2806,3203,2807,3209,2809,3220,2813,3227,2818,3230,2820,3233,2821,3236,2822,3238,2823,3252,2833,3267,2837,3271,2838,3275,2839,3297,2840,3320,2842,3337,2843,3355,2859,3357,2861,3361,2862,3365,2863,3369,2863,3387,2864,3402,2869,3410,2872,3414,2877,3423,2886,3438,2898,3443,2902,3451,2903,3455,2904,3459,2904,3470,2906,3480,2907,3497,2908,3512,2923,3534,2945,3562,2950,3575,2953,3587,2958,3595,2961,3603,2962,3627,2965,3641,2987,3650,3002,3665,3016,3677,3027,3692,3041,3706,3054,3712,3073,3713,3078,3717,3082,3735,3100,3754,3115,3761,3121,3760,3131,3760,3133,3761,3136,3765,3154,3771,3172,3773,3176,3775,3180,3777,3182,3779,3183,3786,3186,3785,3197,3785,3199,3787,3200,3796,3207,3804,3219,3807,3223,3808,3229,3811,3240,3814,3247,3816,3250,3817,3253,3820,3260,3824,3266,3834,3279,3846,3294,3850,3299,3856,3304,3859,3307,3860,3311,3865,3326,3873,3336,3890,3356,3906,3373,3915,3382,3922,3389,3946,3398,3971,3403,3979,3405,3982,3410,3991,3425,4003,3443,4008,3450,4012,3454,4029,3470,4053,3469,4055,3469,4057,3470,4078,3482,4087,3503,4088,3506,4089,3508,4107,3532,4135,3530,4139,3530,4143,3531,4161,3534,4177,3552,4192,3568,4202,3585,4204,3588,4208,3588,4225,3590,4241,3588,4251,3587,4258,3593,4277,3607,4292,3626,4306,3643,4327,3646,4346,3647,4364,3648,4376,3649,4381,3659,4383,3661,4384,3664,4402,3688,4419,3702,4424,3706,4430,3707,4448,3708,4467,3709,4483,3709,4493,3719,4495,3721,4499,3722,4509,3727,4513,3732,4528,3752,4545,3757,4549,3758,4553,3758,4580,3761,4606,3754,4611,3752,4615,3746,4621,3739,4625,3736,4628,3733,4630,3729,4640,3709,4660,3702,4663,3700,4667,3701,4686,3702,4701,3694,4704,3692,4708,3691,4710,3690,4713,3689,4727,3682,4749,3683,4759,3683,4768,3683,4763,3658,4742,3646,4739,3645,4736,3644,4721,3639,4716,3631,4714,3628,4712,3627,4708,3624,4707,3621,4704,3614,4704,3606,4704,3564,4709,3524,4715,3487,4713,3446,4712,3436,4711,3426,4707,3405,4710,3381,4713,3359,4700,3344,4692,3336,4687,3328,4684,3323,4682,3318,4680,3313,4677,3310,4671,3306,4671,3295,4671,3291,4670,3286,4669,3282,4669,3278,4670,3267,4664,3265,4642,3256,4630,3238,4628,3235,4628,3233,4626,3211,4626,3188,4626,3182,4623,3178,4607,3160,4597,3148,4594,3143,4593,3138,4590,3108,4590,3077,4590,3073,4588,3070,4580,3053,4577,3032,4573,3011,4565,2999,4563,2996,4560,2992,4548,2979,4549,2963,4550,2939,4532,2931,4521,2925,4508,2921,4496,2916,4483,2912,4457,2905,4450,2885,4448,2881,4448,2877,4446,2862,4433,2853,4422,2846,4409,2841,4401,2838,4395,2833,4379,2819,4373,2803,4365,2782,4353,2769,4340,2755,4328,2745,4316,2734,4315,2713,4315,2709,4313,2707,4305,2698,4302,2689,4301,2686,4298,2685,4282,2675,4275,2655,4274,2652,4273,2648,4269,2642,4270,2631,4271,2620,4265,2612,4262,2609,4259,2605,4256,2601,4253,2596,4246,2599,4243,2600,4228,2607,4217,2615,4215,2617,4212,2617,4207,2619,4201,2621,4195,2623,4188,2625,4176,2629,4168,2639,4164,2644,4159,2644,4141,2647,4123,2651,4119,2652,4115,2653,4101,2658,4094,2672,4092,2676,4092,2680,4090,2689,4089,2696,4088,2701,4087,2706,4086,2713,4084,2721,4084,2723,4083,2726,4074,2742,4058,2751,4055,2752,4053,2752,4016,2754,3979,2755,3939,2755,3902,2749,3893,2748,3886,2745,3866,2737,3844,2733,3822,2730,3806,2719,3799,2713,3793,2707,3791,2705,3790,2701,3789,2699,3788,2696,3785,2677,3779,2664,3777,2660,3777,2656,3777,2641,3767,2638,3764,2637,3762,2636,3741,2622,3730,2599,3722,2583,3724,2562,3725,2552,3727,2542,3728,2539,3728,2537,3730,2523,3731,2508,3732,2502,3733,2496,3737,2474,3740,2451,3740,2449,3740,2447,3742,2394,3742,2340,3742,2261,3741,2181,3741,2157,3747,2140,3755,2120,3771,2116,3779,2115,3782,2106,3788,2090,3807,2078,3809,2076,3812,2075,3823,2071,3836,2072,3850,2073,3861,2066,3870,2061,3881,2060,3885,2060,3889,2060,3906,2060,3911,2041,3912,2037,3912,2033,3914,2018,3918,2005,3925,1986,3937,1979,3943,1976,3948,1973,3964,1965,3993,1957,3992,1957,3992,1957,3984,1955,3976,1954,3956,1950,3942,1931,3939,1927,3936,1922,3932,1917,3929,1911,3920,1896,3902,1892,3900,1892,3897,1892,3866,1894,3844,1873,3832,1861,3815,1850,3810,1847,3803,1847,3789,1847,3778,1842,3771,1839,3762,1839,3746,1840,3734,1832,3715,1820,3696,1796,Q,3695,1794,3692,1792,Z]],label:"Ryonggang",shortLabel:"RY",labelPosition:[326.4,249.5],labelAlignment:[CEN,MID]},"KP.DN":{outlines:[[M,4e3,1959,Q,3996,1957,3993,1957,3964,1965,3948,1973,3943,1976,3937,1979,3925,1986,3918,2005,3914,2018,3912,2033,3912,2037,3911,2041,3906,2060,3889,2060,3885,2060,3881,2060,3870,2061,3861,2066,3850,2073,3836,2072,3823,2071,3812,2075,3809,2076,3807,2078,3788,2090,3782,2106,3779,2115,3771,2116,3755,2120,3747,2140,3741,2157,3741,2181,3742,2261,3742,2340,3742,2394,3740,2447,3740,2449,3740,2451,3737,2474,3733,2496,3732,2502,3731,2508,3730,2523,3728,2537,3728,2539,3727,2542,3725,2552,3724,2562,3722,2583,3730,2599,3741,2622,3762,2636,3764,2637,3767,2638,3777,2641,3777,2656,3777,2660,3779,2664,3785,2677,3788,2696,3789,2699,3790,2701,3791,2705,3793,2707,3799,2713,3806,2719,3822,2730,3844,2733,3866,2737,3886,2745,3893,2748,3902,2749,3939,2755,3979,2755,4016,2754,4053,2752,4055,2752,4058,2751,4074,2742,4083,2726,4084,2723,4084,2721,4086,2713,4087,2706,4088,2701,4089,2696,4090,2689,4092,2680,4092,2676,4094,2672,4101,2658,4115,2653,4119,2652,4123,2651,4141,2647,4159,2644,4164,2644,4168,2639,4176,2629,4188,2625,4195,2623,4201,2621,4207,2619,4212,2617,4215,2617,4217,2615,4228,2607,4243,2600,4246,2599,4253,2596,4246,2585,4240,2574,4237,2570,4237,2565,4233,2494,4233,2422,4233,2348,4233,2273,4235,2270,4236,2267,4237,2260,4237,2254,4237,2250,4236,2247,4232,2238,4230,2230,4229,2219,4222,2209,4204,2185,4188,2164,4186,2162,4184,2162,4175,2160,4168,2155,4164,2152,4161,2147,4154,2134,4147,2127,4143,2123,4139,2119,4137,2115,4134,2113,4125,2107,4115,2101,4100,2094,4094,2082,4087,2069,4078,2057,4076,2054,4072,2052,4059,2047,4044,2042,4028,2036,4025,2021,4024,2015,4024,2009,4023,1986,4025,1965,Q,4011,1966,4e3,1959,Z]],label:"Daean",shortLabel:"DN",labelPosition:[398.8,235.6],labelAlignment:[CEN,MID]},"KP.HG":{outlines:[[M,3712,3073,Q,3706,3054,3692,3041,3677,3027,3665,3016,3650,3002,3641,2987,3627,2965,3603,2962,3595,2961,3587,2958,3575,2953,3562,2950,3534,2945,3512,2923,3497,2908,3480,2907,3470,2906,3459,2904,3455,2904,3451,2903,3443,2902,3438,2898,3423,2886,3414,2877,3410,2872,3402,2869,3387,2864,3369,2863,3365,2863,3361,2862,3357,2861,3355,2859,3337,2843,3320,2842,3297,2840,3275,2839,3271,2838,3267,2837,3252,2833,3238,2823,3236,2822,3233,2821,3230,2820,3227,2818,3220,2813,3209,2809,3203,2807,3198,2806,3124,2787,3046,2791,3039,2791,3034,2793,3018,2797,3e3,2800,2992,2801,2985,2805,2978,2808,2971,2808,2935,2812,2898,2810,2872,2809,2849,2816,2843,2818,2838,2821,2821,2835,2812,2844,2810,2846,2809,2849,2799,2887,2763,2892,2751,2893,2738,2894,2699,2895,2665,2885,2661,2883,2658,2880,2646,2864,2629,2844,2624,2838,2621,2831,2617,2818,2611,2808,2609,2805,2609,2803,2607,2795,2604,2791,2596,2783,2590,2779,2564,2764,2548,2733,2546,2730,2544,2727,2533,2715,2518,2704,2508,2698,2500,2693,2497,2691,2494,2688,2487,2679,2483,2673,2482,2670,2481,2668,2480,2664,2478,2661,2476,2658,2474,2655,2461,2635,2435,2636,2424,2636,2420,2630,2404,2606,2378,2594,2374,2592,2370,2592,2351,2592,2336,2584,2333,2582,2331,2580,2313,2564,2288,2562,2284,2562,2280,2563,2269,2567,2259,2570,2255,2572,2252,2575,2232,2600,2181,2595,2160,2592,2151,2610,2149,2615,2146,2620,2140,2633,2128,2634,2120,2635,2112,2637,2110,2637,2108,2637,2086,2637,2075,2644,2071,2646,2069,2649,2060,2664,2054,2680,2051,2688,2046,2688,2040,2689,2034,2690,2030,2691,2026,2691,2012,2691,2006,2697,1986,2714,1975,2733,1972,2738,1968,2738,1932,2742,1895,2740,1889,2740,1882,2740,1875,2740,1867,2739,1859,2786,1860,2828,1862,2885,1864,2942,1864,2947,1865,2951,1870,2969,1885,2981,1888,2983,1891,2985,1894,2987,1897,2989,1908,2995,1923,2994,1927,2994,1931,2994,1951,2996,1967,3006,1970,3008,1972,3012,1978,3024,1987,3034,1989,3037,1990,3040,1998,3070,2015,3095,2017,3098,2025,3099,2049,3101,2071,3104,2080,3106,2091,3108,2113,3111,2132,3118,2151,3125,2168,3140,2174,3146,2182,3150,2185,3151,2189,3152,2191,3153,2194,3155,2212,3165,2231,3157,2234,3155,2238,3155,2275,3151,2297,3175,2300,3178,2303,3180,2314,3187,2329,3196,2364,3216,2406,3217,2411,3217,2415,3219,2425,3224,2430,3230,2437,3239,2442,3246,2455,3261,2469,3272,2472,3274,2476,3274,2492,3273,2501,3277,2505,3278,2508,3279,2513,3280,2517,3281,2529,3282,2539,3294,2542,3297,2544,3300,2550,3306,2551,3315,2552,3317,2553,3320,2561,3334,2578,3344,2587,3348,2598,3351,2603,3352,2608,3355,2613,3358,2619,3361,2636,3369,2645,3384,2648,3389,2651,3394,2654,3399,2657,3405,2661,3413,2667,3427,2669,3430,2670,3434,2674,3452,2678,3467,2683,3484,2684,3504,2689,3581,2689,3659,2689,3739,2689,3819,2689,3849,2687,3880,2690,3879,2693,3878,2699,3876,2705,3876,2765,3876,2824,3874,2830,3874,2836,3873,2864,3867,2862,3839,2861,3831,2861,3823,2871,3830,2894,3826,2938,3821,2984,3822,2990,3823,2994,3820,2996,3819,2996,3815,2993,3794,2999,3777,3e3,3774,3002,3771,3007,3762,3017,3757,3030,3751,3050,3751,3130,3749,3209,3749,3287,3749,3365,3750,3378,3750,3384,3760,3386,3764,3389,3767,3392,3770,3394,3774,3402,3787,3419,3802,3427,3808,3443,3808,3521,3806,3598,3806,3637,3806,3676,3810,3678,3811,3681,3814,3682,3817,3684,3817,3691,3818,3691,3827,3691,3829,3691,3831,3692,3842,3699,3846,3703,3848,3706,3851,3709,3854,3713,3854,3726,3855,3738,3856,3744,3856,3750,3857,3788,3860,3828,3861,3838,3862,3848,3862,3864,3862,3877,3868,3888,3874,3902,3873,3917,3871,3918,3888,3918,3893,3921,3897,3930,3909,3951,3911,3971,3913,3992,3913,4006,3913,4020,3914,4025,3915,4027,3919,4029,3921,4029,3925,4037,3966,4082,3966,4119,3966,4155,3970,4160,3970,4164,3974,4177,3986,4183,4006,4184,4011,4187,4016,4193,4026,4205,4030,4209,4032,4213,4032,4250,4032,4287,4034,4289,4034,4291,4035,4302,4042,4303,4060,4303,4065,4307,4069,4309,4073,4312,4074,4318,4077,4324,4078,4361,4084,4401,4081,4420,4080,4438,4085,4449,4087,4459,4089,4474,4091,4480,4105,4481,4108,4482,4110,4487,4127,4488,4146,4488,4162,4494,4176,4496,4179,4497,4183,4501,4203,4524,4209,4538,4213,4543,4225,4550,4242,4551,4261,4551,4265,4553,4269,4558,4280,4566,4285,4575,4291,4581,4295,4586,4299,4588,4310,4588,4312,4589,4315,4595,4334,4602,4347,4610,4361,4624,4370,4632,4377,4642,4380,4647,4382,4650,4389,4653,4396,4654,4405,4655,4425,4672,4432,4690,4440,4700,4454,4707,4462,4707,4474,4707,4476,4708,4479,4716,4492,4730,4498,4735,4501,4741,4503,4755,4510,4758,4531,4761,4552,4771,4572,4772,4575,4775,4575,4790,4578,4793,4589,4798,4607,4797,4626,4796,4650,4802,4671,4804,4676,4809,4681,4811,4683,4812,4687,4813,4689,4816,4690,4837,4696,4833,4720,4831,4730,4831,4740,4831,4753,4843,4758,4850,4761,4849,4769,4848,4782,4861,4788,4864,4790,4868,4790,4910,4797,4954,4795,4993,4794,5032,4792,5056,4791,5073,4777,5076,4775,5078,4772,5079,4768,5079,4765,5079,4768,5078,4771,5089,4747,5089,4732,5089,4728,5088,4725,5081,4706,5061,4703,5049,4701,5043,4693,5032,4678,5023,4659,5022,4657,5019,4656,5005,4649,4991,4638,4987,4634,4984,4629,4983,4626,4982,4622,4976,4601,4962,4590,4945,4579,4941,4565,4940,4563,4940,4560,4943,4518,4922,4499,4915,4493,4912,4486,4902,4467,4904,4442,4906,4425,4911,4409,4918,4388,4925,4372,4932,4359,4936,4343,4938,4335,4941,4331,4944,4327,4947,4326,4957,4322,4958,4311,4958,4299,4959,4286,4961,4249,4962,4212,4962,4192,4964,4171,4964,4165,4966,4159,4969,4140,4979,4130,4983,4126,4984,4121,4987,4112,4988,4102,4989,4082,4982,4065,4978,4056,4970,4048,4960,4037,4953,4025,4949,4019,4945,4012,4943,4008,4941,4004,4934,3993,4930,3982,4924,3963,4917,3950,4913,3941,4906,3933,4895,3921,4896,3905,4897,3899,4895,3893,4893,3888,4893,3880,4893,3874,4890,3869,4889,3866,4885,3863,4882,3860,4879,3859,4867,3854,4856,3839,4854,3835,4854,3831,4854,3816,4847,3803,4846,3800,4845,3798,4844,3788,4835,3787,4831,3786,4829,3784,4813,3774,4803,3766,4801,3764,4800,3761,4799,3750,4791,3741,4786,3735,4783,3729,4778,3721,4775,3712,4774,3706,4772,3701,4770,3694,4769,3687,4768,3685,4768,3683,4759,3683,4749,3683,4727,3682,4713,3689,4710,3690,4708,3691,4704,3692,4701,3694,4686,3702,4667,3701,4663,3700,4660,3702,4640,3709,4630,3729,4628,3733,4625,3736,4621,3739,4615,3746,4611,3752,4606,3754,4580,3761,4553,3758,4549,3758,4545,3757,4528,3752,4513,3732,4509,3727,4499,3722,4495,3721,4493,3719,4483,3709,4467,3709,4448,3708,4430,3707,4424,3706,4419,3702,4402,3688,4384,3664,4383,3661,4381,3659,4376,3649,4364,3648,4346,3647,4327,3646,4306,3643,4292,3626,4277,3607,4258,3593,4251,3587,4241,3588,4225,3590,4208,3588,4204,3588,4202,3585,4192,3568,4177,3552,4161,3534,4143,3531,4139,3530,4135,3530,4107,3532,4089,3508,4088,3506,4087,3503,4078,3482,4057,3470,4055,3469,4053,3469,4029,3470,4012,3454,4008,3450,4003,3443,3991,3425,3982,3410,3979,3405,3971,3403,3946,3398,3922,3389,3915,3382,3906,3373,3890,3356,3873,3336,3865,3326,3860,3311,3859,3307,3856,3304,3850,3299,3846,3294,3834,3279,3824,3266,3820,3260,3817,3253,3816,3250,3814,3247,3811,3240,3808,3229,3807,3223,3804,3219,3796,3207,3787,3200,3785,3199,3785,3197,3786,3186,3779,3183,3777,3182,3775,3180,3773,3176,3771,3172,3765,3154,3761,3136,3760,3133,3760,3131,3761,3121,3754,3115,3735,3100,3717,3082,Q,3713,3078,3712,3073,Z]],label:"Hanggu",shortLabel:"HG",labelPosition:[347.5,339.1],labelAlignment:[CEN,MID]},"KP.WA":{outlines:[[M,1084,4527,Q,1010,4527,936,4529,932,4529,927,4530,924,4531,922,4533,918,4538,915,4543,911,4549,909,4561,907,4566,906,4572,904,4579,895,4583,891,4585,887,4585,819,4585,752,4581,750,4581,749,4577,748,4558,744,4541,744,4538,739,4537,719,4536,699,4534,690,4534,688,4523,686,4515,687,4507,690,4489,677,4481,672,4478,666,4478,641,4478,617,4475,615,4474,614,4470,610,4448,616,4429,617,4425,615,4421,615,4419,612,4418,600,4417,602,4400,602,4396,602,4392,601,4381,598,4371,595,4364,583,4366,568,4368,551,4368,550,4373,551,4380,554,4397,539,4402,537,4403,536,4405,535,4414,526,4414,517,4415,509,4424,503,4431,499,4434,488,4443,487,4458,486,4495,486,4531,486,4546,485,4560,485,4568,477,4572,464,4579,444,4587,436,4591,430,4595,428,4597,429,4601,430,4615,432,4630,432,4636,435,4641,436,4644,439,4647,454,4663,474,4669,481,4671,485,4676,492,4685,491,4699,491,4712,495,4724,504,4748,531,4748,537,4749,542,4754,552,4764,556,4773,571,4804,576,4843,580,4867,601,4878,604,4880,608,4881,627,4888,649,4886,664,4885,674,4892,680,4896,682,4904,682,4908,685,4913,704,4943,748,4939,766,4937,785,4935,793,4935,799,4938,803,4941,808,4944,811,4945,814,4949,827,4970,846,4982,852,4986,859,4989,862,4990,866,4991,871,4992,875,4992,913,4997,947,4987,950,4986,951,4982,956,4966,966,4954,969,4951,973,4949,984,4944,997,4942,1006,4941,1014,4938,1027,4934,1037,4927,1046,4921,1053,4915,1057,4912,1063,4913,1083,4915,1092,4905,1099,4898,1097,4888,1096,4880,1103,4874,1106,4872,1108,4867,1117,4847,1141,4846,1198,4844,1251,4853,1254,4853,1256,4853,1266,4855,1276,4855,1315,4855,1354,4853,1358,4853,1360,4849,1362,4847,1362,4843,1363,4826,1368,4811,1370,4804,1378,4806,1386,4808,1392,4804,1395,4802,1399,4802,1412,4801,1420,4794,1426,4790,1430,4784,1432,4781,1434,4778,1436,4775,1438,4772,1440,4769,1440,4765,1441,4744,1442,4724,1444,4704,1443,4683,1443,4666,1452,4658,1459,4650,1462,4645,1464,4642,1464,4638,1464,4620,1468,4602,1469,4599,1472,4596,1489,4583,1509,4579,1517,4578,1520,4574,1524,4570,1530,4570,1537,4569,1536,4560,1536,4556,1538,4552,1547,4533,1538,4516,1534,4509,1522,4506,1512,4503,1501,4501,1491,4499,1481,4498,1473,4496,1464,4495,1454,4493,1444,4492,1434,4490,1431,4478,1424,4450,1407,4425,1397,4410,1374,4412,1368,4413,1362,4414,1343,4417,1342,4437,1342,4468,1340,4499,1340,4505,1336,4511,1331,4520,1317,4521,1311,4521,1305,4523,1276,4530,1243,4529,Q,1164,4527,1084,4527,Z],[M,1923,2994,Q,1908,2995,1897,2989,1894,2987,1891,2985,1888,2983,1885,2981,1870,2969,1865,2951,1852,2951,1838,2953,1821,2955,1814,2972,1812,2975,1810,2977,1792,2994,1759,2993,1739,2992,1718,2993,1714,2994,1710,2994,1696,2993,1685,3e3,1681,3002,1679,3005,1677,3008,1675,3009,1669,3015,1665,3030,1649,3030,1636,3037,1632,3039,1628,3039,1598,3041,1567,3041,1563,3041,1560,3043,1547,3055,1550,3073,1553,3086,1541,3092,1525,3100,1505,3099,1483,3098,1460,3097,1421,3094,1414,3127,1413,3131,1413,3135,1414,3147,1403,3149,1401,3149,1399,3150,1387,3151,1374,3151,1352,3151,1338,3168,1335,3172,1333,3175,1329,3181,1325,3195,1313,3196,1300,3197,1291,3198,1288,3197,1288,3258,1288,3319,1288,3326,1287,3332,1285,3346,1268,3348,1264,3348,1259,3351,1254,3354,1247,3357,1240,3360,1243,3373,1245,3381,1241,3387,1239,3389,1238,3393,1237,3395,1236,3398,1231,3408,1219,3408,1215,3408,1210,3410,1195,3416,1187,3435,1186,3438,1185,3442,1181,3463,1157,3464,1138,3465,1139,3483,1139,3485,1138,3488,1133,3511,1108,3512,1106,3512,1102,3514,1100,3516,1096,3517,1081,3521,1081,3537,1081,3539,1080,3541,1076,3550,1067,3550,1061,3550,1054,3556,1045,3563,1046,3573,1047,3598,1045,3623,1045,3625,1042,3627,1027,3638,1012,3650,1010,3651,1009,3655,1007,3662,1004,3672,1002,3678,1001,3684,997,3734,1030,3762,1034,3766,1039,3769,1043,3770,1047,3771,1059,3772,1071,3773,1077,3774,1083,3776,1094,3780,1094,3791,1094,3795,1094,3799,1095,3819,1114,3829,1118,3831,1124,3832,1167,3840,1186,3869,1188,3872,1194,3872,1211,3872,1226,3876,1231,3877,1234,3882,1235,3885,1237,3888,1244,3909,1260,3917,1275,3924,1289,3942,1299,3954,1317,3951,1339,3947,1349,3963,1358,3977,1371,3981,1379,3983,1387,3984,1407,3985,1414,3998,1415,4002,1418,4005,1421,4008,1424,4011,1436,4022,1452,4021,1492,4017,1506,4040,1516,4055,1520,4068,1522,4073,1527,4075,1532,4077,1538,4077,1616,4077,1694,4077,1747,4077,1800,4079,1804,4079,1808,4081,1888,4081,1968,4081,1988,4081,2008,4077,2011,4077,2011,4073,2013,4054,2011,4036,2010,4026,2018,4022,2023,4019,2029,4019,2052,4018,2070,4025,2094,4033,2119,4034,2122,4034,2124,4034,2136,4036,2148,4036,2154,4036,2158,4033,2160,4032,2160,4028,2157,4009,2165,3995,2167,3991,2170,3988,2173,3985,2177,3983,2206,3970,2242,3973,2263,3974,2283,3973,2288,3972,2292,3971,2303,3967,2302,3950,2302,3946,2305,3943,2314,3934,2332,3935,2342,3936,2350,3931,2355,3927,2361,3927,2382,3925,2402,3924,2408,3923,2414,3923,2492,3921,2570,3921,2601,3921,2631,3918,2636,3917,2638,3912,2645,3900,2653,3889,2657,3884,2668,3882,2678,3882,2687,3880,2689,3849,2689,3819,2689,3739,2689,3659,2689,3581,2684,3504,2683,3484,2678,3467,2674,3452,2670,3434,2669,3430,2667,3427,2661,3413,2657,3405,2654,3399,2651,3394,2648,3389,2645,3384,2636,3369,2619,3361,2613,3358,2608,3355,2603,3352,2598,3351,2587,3348,2578,3344,2561,3334,2553,3320,2552,3317,2551,3315,2550,3306,2544,3300,2542,3297,2539,3294,2529,3282,2517,3281,2513,3280,2508,3279,2505,3278,2501,3277,2492,3273,2476,3274,2472,3274,2469,3272,2455,3261,2442,3246,2437,3239,2430,3230,2425,3224,2415,3219,2411,3217,2406,3217,2364,3216,2329,3196,2314,3187,2303,3180,2300,3178,2297,3175,2275,3151,2238,3155,2234,3155,2231,3157,2212,3165,2194,3155,2191,3153,2189,3152,2185,3151,2182,3150,2174,3146,2168,3140,2151,3125,2132,3118,2113,3111,2091,3108,2080,3106,2071,3104,2049,3101,2025,3099,2017,3098,2015,3095,1998,3070,1990,3040,1989,3037,1987,3034,1978,3024,1972,3012,1970,3008,1967,3006,1951,2996,1931,2994,Q,1927,2994,1923,2994,Z]],label:"Waudo",shortLabel:"WA",labelPosition:[186.7,357.6],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"nampo",type:"maps"}}})});