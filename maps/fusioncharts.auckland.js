(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=206)})({206:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(207);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},207:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright InfoSoft Global Pvt. Ltd.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author InfoSoft Global Pvt. Ltd.
 * @meta package_map_pack
 * @id fusionmaps.Auckland.18.08-07-2012 10:47:47
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Auckland",revision:18,standaloneInit:true,baseWidth:554,baseHeight:600,baseScaleFactor:10,entities:{1:{outlines:[[M,5306,386,L,5306,416,5281,416,Q,5285,425,5285,448,L,5260,445,5260,502,5311,502,5311,481,5368,481,5368,425,5320,425,Q,5317,409,5317,386,Z],[M,3636,918,L,3737,918,Q,3748,915,3763,912,L,3760,799,3802,799,3802,787,Q,3796,782,3796,755,L,3758,755,3758,737,3796,730,3796,635,3727,635,Q,3727,617,3719,608,L,3675,608,3675,639,3636,639,3636,660,3579,660,3579,686,Q,3557,686,3549,689,L,3549,853,Q,3583,854,3579,885,L,3636,885,Z],[M,4792,150,Q,4728,141,4703,148,L,4703,303,4731,303,4731,362,4772,362,4772,380,4837,380,4837,396,Q,4818,387,4822,414,L,4801,414,4801,430,4769,430,4769,458,4724,458,Q,4718,427,4718,419,L,4706,419,4706,440,4680,440,4680,476,4628,476,4628,452,4608,452,4608,499,4590,496,4590,530,4638,530,4638,499,4680,499,4682,509,4682,528,Q,4703,535,4713,535,4709,561,4709,618,4753,624,4765,624,L,4765,666,4739,666,4739,713,4703,713,Q,4703,741,4700,752,L,4716,752,4716,812,4652,812,4652,749,4644,749,4644,708,4656,708,4656,639,4548,639,4548,613,4503,615,Q,4480,615,4483,579,L,4456,579,4456,613,4474,613,4474,646,4533,646,Q,4536,651,4536,669,4557,668,4569,680,L,4569,719,4548,719,Q,4551,726,4566,814,L,4548,814,4548,899,4530,899,4530,961,4597,961,4597,922,4706,922,4706,950,Q,4721,950,4727,953,L,4727,971,4760,973,4760,1030,4780,1030,4780,1084,4816,1084,4816,1051,4876,1051,4876,989,4906,989,4906,1141,4960,1141,4960,1113,5010,1113,5010,1077,Q,5033,1077,5049,1071,L,5082,1071,5085,1096,Q,5085,1110,5076,1164,L,5043,1164,5043,1331,Q,5058,1333,5079,1333,5093,1337,5094,1360,L,5136,1360,5136,1334,5172,1342,5172,1313,5264,1313,Q,5264,1316,5267,1316,L,5267,1411,Q,5238,1396,5219,1399,L,5219,1471,5285,1471,5285,1500,5329,1500,5344,1494,5383,1494,5383,1521,5430,1521,5437,1518,5437,1471,5472,1471,5472,1440,5440,1440,5440,1411,5466,1411,5466,1376,5494,1376,Q,5493,1366,5496,1360,L,5496,1283,5458,1283,5458,1250,5430,1250,5430,1185,5371,1185,5371,1134,5355,1134,5355,1107,5329,1107,Q,5329,1125,5326,1139,L,5306,1139,Q,5292,1133,5285,1134,L,5285,1056,Q,5267,1056,5237,1051,5237,1023,5234,1005,L,5201,1005,Q,5196,982,5192,976,5220,990,5221,964,5218,930,5221,919,L,5260,919,5258,892,5260,868,Q,5257,868,5257,863,L,5231,863,Q,5237,827,5237,801,L,5270,801,5270,749,Q,5286,744,5299,744,L,5299,705,Q,5319,705,5326,693,L,5326,610,Q,5314,607,5311,607,L,5311,636,5257,636,5257,618,5224,618,Q,5210,621,5190,621,5194,608,5185,603,5177,596,5169,600,L,5169,577,5103,574,5103,543,5046,543,5046,505,5013,505,5013,535,4986,532,4986,561,Q,4945,561,4930,564,L,4930,543,4897,543,4897,532,4924,532,4924,509,4960,509,4960,479,5007,479,Q,5019,414,5017,396,5043,398,5103,398,L,5103,360,5079,360,Q,5090,326,5051,335,L,5051,252,4963,252,4963,192,5002,192,5002,156,Q,4997,137,4996,132,4993,120,4974,127,4971,118,4971,97,L,4953,97,4953,38,Q,4942,38,4935,35,L,4921,35,4921,87,4814,85,Q,4837,148,4792,150,Z],[M,2655,1733,Q,2645,1746,2651,1767,L,2612,1767,Q,2612,1787,2609,1803,L,2707,1803,2707,1841,2606,1841,2606,1873,2653,1873,Q,2650,1912,2674,1903,L,2674,1930,2656,1930,2656,1978,2692,1978,2692,1939,Q,2744,1929,2782,1942,L,2782,1973,2811,1973,2811,1999,2829,1999,2829,1960,2862,1960,2862,1894,Q,2859,1870,2859,1796,L,2836,1796,Q,2850,1765,2823,1751,2801,1739,2775,1746,L,2775,1725,2751,1725,2751,1689,2689,1689,Q,2686,1700,2687,1728,Q,2666,1719,2655,1733,Z],[M,1801,385,L,1774,385,1774,429,1720,429,1720,557,1669,557,1669,590,1637,590,1637,614,1571,614,1571,632,1506,632,Q,1506,661,1499,691,L,1473,691,Q,1473,760,1470,784,L,1440,784,1437,807,1396,807,1396,834,1331,834,1331,856,1262,856,1262,987,1190,987,1190,1013,1104,1013,1104,1060,1032,1060,1032,1163,991,1165,Q,1007,1215,944,1204,960,1252,908,1251,819,1248,818,1248,L,818,1284,Q,803,1281,771,1282,L,771,1297,687,1297,Q,684,1294,669,1294,L,669,1333,630,1333,630,1272,Q,617,1270,617,1251,620,1229,619,1222,L,505,1222,505,1246,472,1246,472,1294,449,1294,449,1449,Q,432,1453,421,1460,413,1464,413,1511,L,333,1511,333,1579,Q,335,1594,335,1612,L,369,1612,369,1645,403,1645,403,1612,Q,451,1612,470,1609,L,517,1609,517,1635,580,1635,580,1532,606,1532,606,1442,570,1442,570,1434,630,1434,630,1505,648,1505,648,1586,671,1586,671,1612,732,1612,Q,727,1632,742,1649,758,1664,753,1689,L,776,1689,776,1720,800,1720,800,1751,818,1751,818,1728,848,1728,Q,848,1710,841,1696,L,841,1684,880,1684,880,1722,919,1722,919,1648,887,1648,887,1615,967,1615,967,1588,1006,1588,1006,1537,985,1537,985,1505,Q,988,1498,988,1487,L,970,1487,970,1421,1042,1421,1042,1457,1078,1457,1078,1487,1056,1487,1056,1550,1140,1550,1140,1597,Q,1107,1584,1109,1640,L,1083,1640,1083,1740,1116,1740,1118,1833,Q,1084,1822,1080,1848,1076,1863,1079,1905,L,1009,1905,1009,1955,1027,1955,1027,2006,1058,2006,1058,2044,Q,1031,2055,1009,2053,L,1009,2089,Q,1026,2095,1029,2104,1031,2111,1029,2137,L,1061,2137,1061,2194,1089,2194,1089,2261,1065,2261,1065,2336,Q,1093,2347,1086,2390,L,1121,2390,1121,2444,1143,2444,1143,2485,1065,2485,1065,2539,1047,2539,1047,2584,1076,2584,1076,2610,1104,2610,1104,2640,1133,2640,1133,2669,Q,1130,2673,1130,2679,L,1112,2679,1112,2744,1092,2744,1092,2795,1071,2795,1053,2792,1053,2818,986,2818,986,2783,Q,957,2782,945,2785,945,2756,942,2741,L,857,2741,854,2792,814,2792,814,2747,775,2747,775,2712,749,2712,749,2644,Q,752,2642,752,2636,769,2636,803,2633,L,803,2574,832,2574,Q,834,2564,834,2546,L,868,2546,868,2525,898,2525,898,2502,883,2502,883,2476,823,2476,823,2443,785,2443,785,2386,754,2386,Q,754,2365,757,2353,L,695,2347,695,2373,615,2373,Q,614,2364,620,2355,L,620,2335,594,2335,594,2296,555,2296,555,2190,540,2190,540,2144,522,2144,522,2115,481,2115,481,2043,453,2043,453,1957,418,1957,418,1919,382,1919,382,1865,352,1865,352,1844,Q,344,1841,329,1841,L,329,1793,212,1793,Q,210,1832,200,1891,203,1949,189,1996,L,171,1996,171,1942,Q,168,1942,159,1948,L,141,1948,141,1880,99,1880,99,1901,73,1901,Q,73,1946,42,1942,L,42,2082,Q,52,2089,59,2133,64,2162,99,2148,L,99,2156,103,2170,103,2201,Q,130,2234,160,2266,190,2297,196,2332,202,2367,284,2443,299,2471,333,2499,342,2523,365,2577,447,2683,472,2708,508,2744,501,2783,516,2814,544,2848,554,2885,630,2979,641,2994,678,3038,682,3049,684,3077,684,3078,710,3103,730,3148,767,3228,769,3231,771,3235,L,771,3268,Q,814,3270,857,3392,861,3403,892,3454,916,3493,916,3533,927,3533,939,3537,L,939,3592,Q,975,3602,977,3624,979,3661,1010,3657,1010,3700,1022,3740,1018,3779,1056,3811,1060,3838,1060,4011,L,1111,4011,1111,3982,1197,3982,1197,3952,Q,1275,3952,1396,3927,L,1396,3873,Q,1398,3872,1469,3874,1517,3876,1512,3844,L,1653,3844,1653,3746,1694,3746,1694,3703,1657,3703,1657,3608,1679,3608,1679,3570,1712,3570,1712,3526,1806,3526,1806,3445,Q,1966,3445,1922,3340,1948,3351,1965,3319,1983,3288,2004,3298,1991,3222,2047,3205,2062,3201,2189,3200,L,2189,3153,Q,2167,3131,2167,3129,2178,3104,2178,3091,2178,3069,2143,3066,L,2143,3008,Q,2210,3019,2236,2940,L,2236,2885,Q,2248,2885,2288,2897,L,2312,2897,2312,2868,2364,2868,2364,2827,2410,2827,2410,2798,2486,2798,2486,2827,2521,2827,Q,2527,2803,2528,2787,L,2562,2787,2562,2763,Q,2591,2769,2667,2769,2666,2744,2669,2734,2673,2720,2696,2729,L,2696,2693,2660,2693,Q,2667,2658,2667,2647,L,2562,2647,2562,2687,2499,2687,2499,2716,2405,2716,2405,2774,2381,2774,2381,2810,2335,2810,2335,2774,2294,2774,2294,2798,2241,2798,2241,2758,2172,2758,2172,2734,2201,2734,2201,2711,Q,2196,2705,2160,2705,L,2160,2676,Q,2073,2664,2033,2664,L,2033,2624,2102,2624,2102,2495,2160,2495,2156,2398,2179,2398,Q,2183,2350,2183,2329,L,2207,2329,2207,2257,Q,2222,2255,2225,2246,L,2225,2214,Q,2225,2166,2192,2174,L,2192,2133,2171,2133,2174,2071,Q,2175,2043,2189,2032,L,2189,1912,2150,1912,Q,2150,1898,2153,1891,L,2153,1865,Q,2135,1859,2127,1859,L,2130,1829,Q,2096,1829,2084,1826,L,2084,1767,2102,1767,2099,1793,2130,1793,2130,1823,2243,1823,Q,2239,1859,2239,1934,L,2279,1934,2279,2011,Q,2295,2011,2305,2017,L,2305,2053,2264,2056,Q,2257,2118,2257,2127,L,2284,2127,2284,2174,2323,2174,2326,2115,2352,2115,2352,2050,Q,2352,2028,2362,2027,2377,2025,2380,2020,2378,1975,2378,1957,2380,1924,2418,1942,L,2418,1909,2391,1909,2391,1865,2377,1865,2377,1888,2334,1888,2334,1852,Q,2298,1855,2275,1841,L,2275,1666,Q,2266,1666,2261,1669,L,2189,1669,2189,1615,2243,1615,Q,2239,1581,2239,1510,L,2266,1510,2266,1561,2302,1561,Q,2305,1605,2305,1689,L,2334,1689,2334,1662,2364,1662,2364,1615,2416,1615,2436,1617,2436,1659,2525,1659,2525,1630,2561,1633,2561,1605,2782,1605,2782,1579,2811,1579,2811,1566,Q,2800,1552,2803,1525,L,2782,1525,2782,1552,2666,1552,Q,2655,1540,2645,1532,2628,1516,2612,1525,2610,1507,2595,1494,2581,1483,2581,1468,L,2486,1468,2486,1445,Q,2460,1442,2403,1442,L,2403,1398,2382,1398,2382,1370,2398,1370,Q,2396,1353,2396,1346,2396,1334,2411,1341,2399,1310,2421,1306,2456,1301,2460,1295,L,2493,1295,Q,2493,1301,2501,1323,L,2537,1323,2537,1275,2561,1275,Q,2559,1251,2559,1239,2558,1219,2575,1216,L,2575,1186,2623,1186,2623,1127,2605,1127,2605,1098,2575,1098,2575,1076,2474,1076,2474,1055,2441,1055,2441,1029,Q,2377,1037,2304,993,2274,961,2257,951,2240,943,2239,926,2237,907,2226,897,2197,875,2182,859,L,2161,835,Q,2158,800,2157,799,2116,770,2098,758,2067,735,2080,691,2041,683,2013,650,1982,612,1994,570,1977,563,1973,543,1970,530,1950,513,L,1950,510,Q,1951,505,1951,501,1948,483,1917,483,1929,402,1890,426,L,1890,372,1860,372,1860,325,1839,325,1839,304,1801,304,Z]],label:"Rodney District",shortLabel:"RD",labelPosition:[163.5,202.3],labelAlignment:[CEN,MID]},2:{outlines:[[M,2236,2940,Q,2210,3019,2143,3008,L,2143,3066,Q,2178,3069,2178,3091,2178,3104,2167,3129,2167,3131,2189,3153,L,2189,3200,Q,2062,3201,2047,3205,1991,3222,2004,3298,1983,3288,1965,3319,1948,3351,1922,3340,1966,3445,1806,3445,L,1806,3467,1910,3467,1910,3490,1980,3490,1980,3537,2009,3537,2009,3577,Q,2020,3577,2020,3561,2044,3569,2044,3666,L,2085,3666,Q,2085,3715,2102,3758,L,2230,3758,2230,3735,Q,2257,3735,2276,3724,2295,3711,2323,3711,L,2323,3677,2359,3677,2359,3653,2405,3653,Q,2410,3677,2410,3746,L,2423,3740,2446,3740,2446,3793,2499,3793,Q,2508,3782,2544,3782,L,2544,3753,2515,3753,Q,2520,3717,2508,3709,2501,3704,2468,3706,L,2468,3653,Q,2407,3657,2395,3555,2380,3440,2352,3427,2342,3324,2335,3240,2341,3175,2341,3138,2339,3071,2300,3077,L,2300,3004,Z]],label:"North Shore City",shortLabel:"NS",labelPosition:[217.5,342.9],labelAlignment:[CEN,MID]},3:{outlines:[[M,1712,3570,L,1679,3570,1679,3608,1657,3608,1657,3703,1694,3703,1694,3746,1653,3746,1653,3844,1512,3844,Q,1517,3876,1469,3874,1398,3872,1396,3873,L,1396,3927,Q,1275,3952,1197,3952,L,1197,3982,1111,3982,1111,4011,1108,4011,1108,4166,Q,1148,4165,1130,4288,L,1172,4288,1172,4317,1206,4317,1206,4398,1166,4398,1166,4462,Q,1195,4460,1199,4488,1202,4506,1201,4556,L,1224,4556,1224,4759,1259,4759,1259,4835,Q,1253,4840,1253,4846,L,1343,4847,1343,4810,1367,4810,1367,4781,1396,4781,1396,4753,1466,4753,1466,4720,1512,4720,1512,4683,1559,4683,Q,1574,4596,1574,4586,L,1592,4586,Q,1596,4594,1596,4617,L,1628,4617,1629,4657,1662,4657,1662,4619,1690,4624,1690,4661,1708,4661,Q,1706,4673,1716,4684,1725,4694,1719,4711,L,1748,4711,1748,4679,1727,4677,1727,4571,1769,4571,1769,4430,Q,1780,4429,1790,4441,1799,4453,1794,4467,L,1812,4467,1812,4491,1868,4491,1868,4402,1942,4402,1942,4372,1990,4372,1990,4318,2002,4318,Q,2013,4325,2030,4325,L,2030,4285,2074,4285,2078,4255,2081,4154,2045,4154,2045,4125,2009,4125,2009,4094,Q,2010,4064,2019,4061,L,2019,4035,1993,4035,1993,3982,1955,3982,Q,1948,3925,1930,3908,L,1930,3845,1968,3845,1968,3798,1939,3798,1939,3762,1885,3762,1885,3724,Q,1888,3717,1889,3695,L,1960,3695,1960,3657,1997,3657,1997,3620,1972,3620,Q,1981,3591,1982,3583,1972,3569,1972,3555,L,1926,3555,1926,3587,1889,3587,1889,3612,1856,3612,1856,3592,Q,1871,3583,1885,3583,L,1885,3541,1860,3541,1860,3496,1806,3496,1806,3526,1712,3526,Z]],label:"Waitakere City",shortLabel:"WA",labelPosition:[159.5,417.1],labelAlignment:[CEN,MID]},4:{outlines:[[M,4013,3650,L,4013,3777,4046,3777,Q,4046,3790,4050,3808,L,4028,3808,4028,3841,3972,3841,3972,3860,Q,3962,3856,3934,3856,L,3934,3912,Q,3958,3912,3962,3916,L,3962,3939,Q,3951,3937,3937,3961,3923,3985,3896,3972,L,3896,4030,3897,4035,3912,4035,3912,4094,Q,3934,4083,3938,4104,3940,4116,3938,4138,L,3962,4138,3962,4184,4042,4184,4041,4109,Q,4053,4109,4078,4105,L,4078,4030,4028,4030,4028,3918,4057,3918,4057,3878,4103,3878,4103,3827,4088,3827,4088,3800,4062,3795,4062,3748,4046,3748,Q,4042,3686,4042,3650,Z],[M,2657,3907,Q,2657,3895,2652,3878,L,2527,3878,2527,3899,2468,3899,Q,2461,3896,2443,3896,L,2443,3860,Q,2407,3848,2366,3848,L,2363,3816,2267,3816,2267,3845,2208,3845,2208,3876,2182,3876,2182,3905,2104,3905,2104,3964,2096,4005,2080,4005,Q,2085,4029,2085,4065,L,2048,4065,2052,4039,Q,2033,4035,2019,4035,L,2019,4061,Q,2010,4064,2009,4094,L,2009,4124,2045,4124,2045,4153,2081,4153,2078,4254,2128,4254,2128,4287,2161,4285,2161,4305,2218,4305,2218,4287,2334,4287,2334,4257,2411,4257,2411,4287,2601,4287,2601,4373,2600,4374,Q,2609,4376,2627,4388,2637,4393,2641,4417,L,2693,4417,2693,4405,2690,4397,2690,4381,2746,4381,2741,4304,Q,2741,4295,2739,4286,2735,4241,2714,4229,L,2714,4155,2776,4155,Q,2775,4136,2776,4126,2779,4108,2798,4117,L,2806,4090,Q,2804,4021,2804,3881,2779,3883,2768,3880,2747,3876,2755,3848,L,2737,3848,2735,3907,Z],[M,3209,3542,L,3209,3641,Q,3227,3645,3224,3682,3223,3703,3220,3740,L,3242,3740,3242,3715,3261,3715,3261,3682,3299,3682,3299,3628,Q,3303,3628,3303,3625,L,3369,3625,3369,3654,3419,3654,3419,3616,3448,3616,3448,3654,Q,3463,3661,3493,3674,L,3493,3692,3444,3692,Q,3412,3682,3399,3682,L,3399,3703,Q,3365,3703,3352,3699,L,3352,3733,3423,3733,3423,3766,3489,3766,3489,3823,3522,3823,3522,3848,3574,3848,Q,3604,3847,3605,3860,L,3648,3860,3648,3831,3686,3831,3686,3773,3715,3773,3715,3902,3763,3902,3763,3833,3771,3833,Q,3781,3856,3798,3845,L,3798,3795,Q,3794,3794,3793,3777,L,3850,3777,Q,3850,3786,3854,3800,L,3831,3800,3831,3856,3868,3856,Q,3881,3852,3890,3860,3896,3859,3901,3808,L,3934,3808,3934,3725,Q,3915,3715,3908,3715,L,3908,3659,3871,3659,3871,3636,Q,3875,3626,3875,3603,L,3934,3603,3934,3580,4037,3580,4037,3551,4070,3551,4070,3480,4046,3480,4046,3458,3976,3458,3976,3372,3950,3372,3950,3401,3905,3401,3905,3425,3879,3425,3879,3487,3846,3487,3846,3525,3771,3525,Q,3767,3510,3767,3480,L,3738,3480,3738,3504,3705,3504,3705,3599,3648,3599,Q,3652,3608,3655,3625,L,3574,3625,3574,3580,3527,3580,3527,3509,3489,3509,3489,3533,3462,3533,Q,3462,3559,3456,3570,L,3352,3570,3352,3520,Q,3311,3521,3299,3518,L,3242,3518,3242,3542,Z],[M,3026,3342,L,2971,3342,2971,3401,2942,3401,Q,2934,3397,2923,3397,L,2923,3429,2881,3425,2881,3505,2805,3505,2805,3476,2670,3476,2670,3509,Q,2660,3505,2637,3505,L,2637,3566,2595,3566,2595,3591,2632,3591,2632,3621,Q,2674,3605,2656,3682,L,2681,3682,2681,3715,2769,3715,2769,3682,2834,3682,2834,3659,2881,3659,2881,3599,2983,3599,2983,3562,3012,3562,3012,3518,Q,3037,3518,3050,3513,L,3050,3435,3026,3435,Z]],label:"Auckland City",shortLabel:"AL",labelPosition:[247.1,407.8],labelAlignment:[CEN,MID]},5:{outlines:[[M,3668,4140,L,3642,4140,3642,4176,3513,4176,3513,4089,3491,4089,3491,4060,3434,4060,Q,3434,4043,3432,4033,L,3336,4033,3336,4057,3315,4057,3315,4031,3259,4031,3259,4060,Q,3206,4040,3206,4126,L,3206,4166,3239,4166,3239,4198,3273,4198,3273,4260,3241,4260,Q,3241,4253,3246,4242,L,3246,4212,3184,4212,3184,4176,3148,4176,3148,4214,3127,4214,3127,4267,3141,4267,3141,4288,3165,4288,3165,4343,Q,3158,4343,3158,4346,L,3137,4346,3137,4304,3122,4304,3122,4288,3096,4288,3096,4241,3020,4241,3020,4226,3079,4226,3079,4195,3108,4195,3108,4149,3079,4149,3079,4129,Q,3043,4136,3051,4100,3032,4100,3022,4097,L,3022,4069,2993,4069,2993,4043,2956,4042,2956,4018,2944,4018,2944,3988,2910,3988,Q,2910,4e3,2913,4006,L,2913,4049,2872,4049,Q,2874,4054,2879,4078,L,2854,4075,2854,4101,2807,4101,Q,2807,4096,2806,4090,L,2798,4118,Q,2779,4108,2776,4126,2775,4136,2776,4155,L,2714,4155,2714,4230,Q,2735,4241,2740,4286,2741,4295,2741,4304,L,2746,4382,2691,4382,2691,4397,2693,4405,2693,4418,2641,4418,Q,2637,4393,2627,4389,2609,4376,2600,4374,L,2598,4376,2548,4376,2548,4344,2467,4344,2467,4308,2441,4306,Q,2418,4311,2411,4311,2392,4311,2376,4306,L,2337,4306,2337,4342,2324,4342,Q,2319,4335,2288,4335,L,2288,4422,2221,4422,2221,4454,2246,4454,2246,4488,2268,4488,2268,4567,2241,4567,2241,4590,2264,4590,2264,4607,Q,2275,4611,2309,4606,2338,4605,2330,4632,L,2362,4632,2362,4698,2436,4698,2436,4657,2494,4657,2494,4704,Q,2532,4704,2546,4708,L,2546,4682,2606,4682,2606,4727,2624,4727,2624,4756,2681,4756,2681,4857,2710,4886,2739,4886,2739,4853,2761,4853,2761,4827,2861,4827,Q,2870,4833,2884,4839,L,2884,4785,2942,4785,2942,4748,2967,4748,2967,4694,3010,4694,3010,4666,3050,4666,3050,4640,3100,4640,3100,4700,3155,4700,3155,4745,3184,4745,3184,4723,3230,4723,3230,4698,3259,4698,3259,4741,3296,4741,3296,4760,3329,4760,Q,3333,4748,3333,4719,3344,4719,3353,4723,L,3353,4953,3382,4953,3382,4972,3415,4972,3415,4915,3441,4915,3441,4882,3469,4882,3469,4849,3494,4849,3494,4812,3535,4812,3535,4886,Q,3582,4886,3672,4893,L,3672,4915,Q,3713,4915,3727,4919,L,3727,4897,3776,4897,3776,4919,3850,4919,Q,3850,4849,3846,4812,L,3846,4731,3943,4731,Q,3943,4738,3950,4769,L,3929,4770,3929,4802,Q,3946,4807,3954,4818,L,4004,4818,4004,4839,4051,4839,Q,4050,4780,4103,4777,4131,4775,4165,4785,L,4299,4785,4299,4760,4327,4760,4327,4673,4348,4673,Q,4360,4643,4360,4614,L,4359,4614,4359,4583,4322,4583,4322,4561,4282,4561,4282,4531,4236,4531,4236,4456,4186,4456,Q,4198,4422,4175,4415,4142,4415,4129,4413,L,4129,4396,4103,4396,Q,4095,4359,4074,4366,4074,4350,4069,4337,L,3955,4337,Q,3955,4346,3958,4350,L,3958,4369,3933,4369,3933,4400,3890,4400,3890,4423,3870,4423,3870,4390,3848,4390,3848,4369,3834,4369,3834,4285,3810,4285,3810,4314,3787,4314,3788,4337,3712,4343,3712,4397,3599,4397,Q,3603,4434,3603,4438,L,3600,4440,3570,4440,3570,4412,3550,4412,3550,4387,3570,4387,3570,4343,3606,4343,3606,4288,3577,4288,3577,4209,3632,4209,3632,4185,Q,3659,4185,3668,4181,Z]],label:"Manukau City",shortLabel:"MK",labelPosition:[329,448],labelAlignment:[CEN,MID]},6:{outlines:[[M,3230,4698,L,3230,4723,3184,4723,3184,4745,3155,4745,3155,4700,3100,4700,3100,4640,3050,4640,3050,4666,3010,4666,3010,4694,2967,4694,2967,4748,2942,4748,2942,4785,2884,4785,2884,4839,Q,2913,4850,2963,4856,L,2963,4882,2988,4882,2988,4926,2942,4926,Q,2939,4914,2934,4914,2923,4915,2921,4914,L,2898,4914,Q,2898,4932,2888,4935,L,2888,5027,2913,5027,Q,2913,5060,2917,5076,L,2917,5093,2898,5093,2898,5131,2861,5131,2861,5158,2935,5158,2935,5121,2988,5121,2988,5098,3014,5098,Q,3021,5102,3033,5102,L,3033,5217,3071,5217,3071,5276,3203,5276,3203,5295,3255,5295,3255,5225,3292,5225,3292,5142,3328,5142,3328,5023,3362,5023,Q,3377,5009,3382,4972,L,3382,4953,3353,4953,3353,4723,Q,3344,4719,3333,4719,3333,4748,3329,4760,L,3296,4760,3296,4741,3259,4741,3259,4698,Z]],label:"Papakura District",shortLabel:"PP",labelPosition:[312.1,496.8],labelAlignment:[CEN,MID]},7:{outlines:[[M,3469,4849,L,3469,4882,3441,4882,3441,4915,3415,4915,3415,4972,3382,4972,Q,3377,5009,3362,5023,L,3328,5023,3328,5142,3292,5142,3292,5225,3255,5225,3255,5295,3203,5295,3203,5276,3071,5276,3071,5217,3033,5217,3033,5102,Q,3021,5102,3014,5098,L,2988,5098,2988,5121,2935,5121,2935,5158,2861,5158,2861,5131,2898,5131,2898,5093,2917,5093,2917,5076,Q,2913,5060,2913,5027,L,2888,5027,2888,4935,Q,2873,4932,2861,4919,L,2818,4919,Q,2818,4948,2810,4961,L,2751,4961,2751,4943,2702,4943,2702,4897,2664,4897,2664,4919,Q,2644,4928,2616,4923,L,2615,5005,2573,5005,2573,5035,2494,5035,2494,5060,2461,5060,2461,5139,2438,5139,2438,5163,Q,2442,5176,2446,5204,L,2446,5287,2391,5287,2391,5266,2416,5266,2416,5210,Q,2411,5204,2411,5183,L,2382,5183,Q,2382,5171,2376,5150,L,2376,5121,2411,5121,2411,5073,2391,5073,2391,5035,Q,2371,5031,2366,5031,2374,5058,2353,5076,L,2330,5076,Q,2334,5098,2334,5146,2272,5128,2287,5196,L,2246,5196,2246,5225,2217,5225,2217,5247,2167,5251,2052,5251,Q,2055,5262,2059,5276,L,2038,5276,2038,5341,2246,5341,Q,2245,5359,2241,5395,L,2358,5395,Q,2358,5420,2358,5429,L,2317,5429,Q,2305,5444,2287,5445,2287,5458,2293,5482,L,2268,5482,Q,2257,5512,2230,5471,L,2230,5432,2200,5432,2188,5370,2120,5370,2138,5544,Q,2156,5567,2156,5581,2156,5597,2146,5635,2146,5692,2183,5685,L,2185,5715,2221,5715,2221,5753,Q,2216,5755,2217,5768,L,2197,5768,2197,5805,Q,2175,5801,2134,5801,2150,5766,2123,5764,L,2123,5718,2134,5707,2089,5707,2092,5604,2059,5604,2059,5544,1993,5544,Q,1997,5540,1997,5527,L,2015,5527,2015,5503,2055,5503,2055,5445,1993,5445,1993,5395,1944,5395,1944,5382,1964,5382,1964,5359,2011,5359,2011,5317,1973,5317,1972,5280,1926,5280,1926,5262,1968,5262,1968,5200,1877,5200,1877,5183,Q,1897,5183,1926,5181,L,1926,5129,Q,1940,5125,1973,5125,L,1973,5113,1951,5113,1951,5096,1930,5096,1930,5031,1870,5031,1870,4957,1914,4957,1914,4930,1930,4930,1930,4901,1977,4901,1977,4864,1944,4864,Q,1940,4849,1940,4812,L,1839,4812,1839,4783,1795,4783,1795,4810,1773,4810,1773,4839,1687,4839,1686,4806,1472,4806,1472,4835,1438,4835,1438,4939,Q,1467,4954,1480,5015,1496,5085,1509,5102,1541,5140,1546,5192,1548,5197,1570,5228,1586,5251,1579,5280,L,1603,5280,Q,1653,5458,1715,5529,1729,5545,1720,5610,1727,5632,1769,5670,1780,5699,1790,5754,1802,5797,1827,5801,1818,5838,1852,5884,1860,5894,1859,5930,1859,5961,1874,5968,L,1940,5968,1940,5946,1989,5946,1989,5923,2022,5923,2022,5890,2080,5890,Q,2094,5895,2105,5890,L,2105,5861,2255,5859,2255,5832,2324,5832,2324,5803,2363,5803,2363,5776,2431,5776,2431,5750,2474,5750,2474,5717,2517,5717,2517,5750,2627,5750,2627,5776,2657,5776,2657,5843,2671,5843,2671,5803,2734,5803,2734,5779,2783,5779,2783,5757,2891,5757,2892,5693,2938,5693,Q,2944,5644,2944,5615,L,2991,5615,2991,5584,3031,5584,3031,5561,3054,5561,3054,5532,3100,5532,3100,5591,3133,5591,3133,5624,3152,5624,3152,5651,Q,3166,5643,3179,5689,L,3198,5689,3198,5670,Q,3214,5674,3232,5653,3249,5632,3274,5644,L,3274,5612,3304,5612,3304,5587,3376,5587,3376,5552,3419,5552,3419,5532,3481,5532,3481,5443,3495,5443,3495,5420,3648,5420,3648,5360,3684,5360,3684,5331,3712,5331,3712,5370,3794,5371,3794,5344,3959,5344,3959,5286,4127,5286,4127,5229,4105,5229,4105,5170,4164,5170,4164,5199,4259,5199,Q,4256,5162,4315,5164,4346,5165,4405,5167,4393,5143,4436,5134,L,4436,5073,4400,5073,4400,4979,Q,4406,4979,4431,4970,L,4431,4875,Q,4399,4871,4400,4836,4407,4799,4407,4791,4395,4791,4384,4787,L,4384,4614,4360,4614,Q,4360,4643,4348,4673,L,4327,4673,4327,4760,4299,4760,4299,4785,4165,4785,Q,4131,4775,4103,4777,4050,4780,4051,4839,L,4004,4839,4004,4818,3954,4818,Q,3946,4807,3929,4802,L,3929,4770,3950,4769,Q,3943,4738,3943,4731,L,3846,4731,3846,4812,Q,3850,4849,3850,4919,L,3776,4919,3776,4897,3727,4897,3727,4919,Q,3713,4915,3672,4915,L,3672,4893,Q,3582,4886,3535,4886,L,3535,4812,3494,4812,3494,4849,Z]],label:"Franklin District",shortLabel:"FK",labelPosition:[275.7,534.5],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"auckland",type:"maps"}}})});