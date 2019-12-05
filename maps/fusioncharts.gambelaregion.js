(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=516)})({516:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(517);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},517:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright InfoSoft Global Pvt. Ltd.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author InfoSoft Global Pvt. Ltd.
 * @meta package_map_pack
 * @id fusionmaps.GambelaRegion.1.05-03-2017 12:10:07
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"GambelaRegion",revision:1,standaloneInit:true,baseWidth:600,baseHeight:409,baseScaleFactor:10,entities:{"ET.GA.GO":{outlines:[[M,3481,221,Q,3460,201,3448,189,3405,143,3303,105,3234,86,3215,72,3191,53,3184,50,3177,47,3147,47,3105,47,3090,64,3066,93,3021,110,3008,115,3006,131,3003,158,3003,160,2994,182,2991,184,2987,185,2958,185,2953,185,2948,185,2946,218,2922,245,2896,275,2896,304,2896,323,2876,369,2859,412,2857,439,L,2857,441,Q,2857,463,2860,583,2862,681,2848,725,2840,755,2788,863,2751,941,2747,995,2752,1046,2682,1109,2605,1180,2596,1229,2598,1281,2559,1373,2524,1456,2540,1497,2540,1493,2540,1490,2548,1476,2574,1471,2612,1466,2615,1464,L,2665,1430,Q,2692,1401,2713,1401,2739,1401,2742,1432,2747,1469,2795,1490,2805,1495,2847,1521,2889,1545,2913,1543,2939,1541,2958,1567,2968,1584,3004,1584,L,3320,1584,Q,3345,1583,3380,1564,3424,1536,3450,1528,3464,1523,3507,1505,3548,1490,3575,1492,3587,1492,3601,1478,3610,1471,3625,1454,3630,1449,3709,1449,3714,1449,3748,1445,3783,1445,3790,1466,3798,1488,3815,1493,3841,1504,3844,1505,3855,1514,3879,1514,3901,1516,3908,1521,3932,1543,3944,1548,3958,1555,3982,1555,4007,1555,4028,1517,4040,1497,4059,1457,L,4180,1457,Q,4201,1457,4206,1456,4215,1452,4223,1433,4228,1423,4242,1421,4247,1420,4268,1420,4268,1416,4270,1418,4275,1420,4276,1420,4348,1418,4359,1423,4374,1423,4376,1421,4379,1418,4391,1389,L,4424,1392,Q,4429,1396,4434,1415,4438,1435,4441,1439,4450,1454,4501,1487,4523,1509,4535,1555,4540,1579,4556,1591,4568,1600,4568,1625,4568,1655,4563,1660,4549,1672,4537,1703,4532,1720,4532,1785,4532,1823,4534,1828,4535,1840,4551,1850,4558,1853,4561,1872,4566,1881,4575,1883,4580,1884,4592,1886,4607,1889,4616,1903,4626,1922,4631,1925,4643,1934,4657,1944,4667,1949,4684,1951,4684,1941,4691,1931,4696,1919,4696,1893,4693,1871,4693,1859,4693,1840,4710,1829,4726,1817,4732,1799,4739,1778,4743,1769,4751,1747,4777,1720,4792,1706,4818,1673,4837,1649,4858,1632,4864,1627,4882,1617,4897,1607,4904,1586,4919,1553,4919,1543,4919,1519,4914,1514,4897,1497,4892,1490,4887,1481,4868,1483,4847,1485,4839,1485,L,4770,1480,Q,4758,1478,4758,1459,4756,1445,4748,1445,4738,1447,4732,1447,L,4732,1399,Q,4736,1397,4741,1387,4746,1379,4756,1380,L,4798,1380,Q,4810,1379,4828,1379,4846,1377,4858,1355,4866,1339,4885,1336,4907,1334,4916,1327,4930,1315,4954,1307,4986,1296,4996,1289,5017,1276,5034,1271,5063,1260,5067,1259,5128,1228,5152,1228,5171,1228,5188,1216,5207,1202,5223,1202,5236,1202,5248,1192,5262,1178,5262,1157,5262,1130,5230,1132,5188,1135,5180,1127,5173,1113,5168,1108,5161,1096,5149,1097,L,5098,1097,Q,5020,1092,4991,1080,4967,1070,4909,1070,4894,1068,4887,1068,4873,1068,4866,1077,4840,1099,4832,1103,4803,1115,4746,1111,L,4695,1108,Q,4612,1108,4599,1104,4573,1097,4539,1051,4513,1017,4494,955,4489,919,4486,909,4480,893,4450,893,4432,893,4417,899,4402,902,4388,902,4379,902,4369,899,4359,893,4336,893,4292,897,4271,888,4230,869,4227,868,4206,856,4194,840,4170,833,4148,785,4108,703,4103,695,4040,611,3976,581,3954,568,3940,561,3916,547,3896,547,L,3856,547,Q,3844,545,3814,528,3707,456,3668,431,L,3592,377,Q,3570,364,3558,347,3544,324,3539,319,3505,285,3500,254,Q,3496,239,3481,221,Z]],label:"Gambella Zone 1",shortLabel:"GO",labelPosition:[344.8,99.9],labelAlignment:[CEN,MID]},"ET.GA.GT":{outlines:[[M,4434,1415,Q,4429,1396,4424,1392,L,4391,1389,Q,4379,1418,4376,1421,4374,1423,4359,1423,4348,1418,4276,1420,4273,1420,4268,1420,4247,1420,4242,1421,4228,1423,4223,1433,4215,1452,4206,1456,4201,1457,4180,1457,L,4059,1457,Q,4040,1497,4028,1517,4007,1555,3982,1555,3958,1555,3944,1548,3932,1543,3908,1521,3901,1516,3879,1514,3855,1514,3844,1505,3841,1504,3815,1493,3798,1488,3790,1466,3783,1445,3748,1445,3714,1449,3709,1449,3630,1449,3625,1454,3610,1471,3601,1478,3587,1492,3575,1492,3548,1490,3507,1505,3464,1523,3450,1528,3424,1536,3380,1564,3345,1583,3320,1584,L,3004,1584,Q,2968,1584,2958,1567,2939,1541,2913,1543,2889,1545,2847,1521,2805,1495,2795,1490,2747,1469,2742,1432,2739,1401,2713,1401,2692,1401,2665,1430,L,2615,1464,Q,2612,1466,2574,1471,2548,1476,2540,1490,2540,1493,2540,1497,2536,1569,2543,1619,2548,1672,2541,1715,L,2475,1715,Q,2468,1697,2404,1651,2343,1603,2329,1603,2317,1603,2312,1610,2303,1624,2293,1637,2277,1658,2250,1658,2236,1658,2228,1653,L,2209,1637,Q,2197,1629,2180,1629,2159,1627,2157,1627,2152,1625,2135,1608,2123,1595,2103,1595,L,2034,1595,Q,1986,1596,1969,1595,1941,1595,1926,1574,1911,1553,1881,1547,1866,1543,1825,1543,1813,1543,1772,1559,1731,1572,1719,1581,1681,1601,1662,1612,1631,1631,1624,1646,1614,1689,1611,1696,L,1581,1745,Q,1578,1751,1540,1783,1511,1807,1509,1828,1509,1862,1511,1943,1513,2020,1509,2075,1509,2083,1497,2092,1484,2104,1480,2112,1477,2121,1472,2136,1463,2152,1444,2159,1425,2164,1401,2201,1400,2205,1372,2255,L,1374,2255,Q,1383,2291,1379,2344,L,1473,2344,Q,1501,2308,1506,2306,1509,2303,1532,2303,1554,2303,1571,2313,1585,2320,1616,2339,1624,2340,1707,2340,1717,2340,1739,2366,1770,2400,1784,2412,1811,2436,1820,2442,1825,2445,1844,2447,1857,2448,1866,2464,1907,2541,1923,2544,1928,2544,1967,2544,1996,2544,2012,2548,2043,2555,2084,2608,2133,2673,2156,2687,2163,2699,2185,2745,2202,2781,2235,2786,2267,2790,2322,2790,2353,2788,2403,2786,2411,2850,2409,2964,2420,2966,2451,2963,2478,2963,2487,2975,2500,2994,2536,3050,2583,3105,2612,3124,2619,3132,2619,3206,L,2617,3326,Q,2617,3371,2598,3395,2579,3419,2579,3439,2579,3462,2586,3465,2589,3468,2617,3484,2634,3513,2636,3513,2646,3525,2679,3534,2709,3540,2739,3558,2778,3582,2788,3588,L,2788,3647,Q,2805,3648,2831,3647,2853,3648,2869,3664,2874,3669,2889,3688,2907,3705,2929,3705,2970,3703,3003,3750,3006,3753,3025,3792,3030,3804,3045,3804,3054,3806,3064,3804,3075,3806,3105,3806,3131,3811,3145,3828,3174,3870,3225,3882,3229,3885,3248,3914,3260,3933,3272,3943,3285,3954,3363,3954,3388,3954,3404,3943,3409,3935,3412,3930,3419,3921,3430,3919,3440,3916,3471,3916,3498,3916,3508,3904,3515,3899,3524,3887,3536,3880,3568,3875,3604,3870,3611,3866,3628,3856,3642,3844,3651,3837,3671,3837,L,3745,3842,Q,3755,3840,3767,3854,3779,3868,3788,3871,3838,3885,3880,3943,3892,3960,3976,4005,L,4033,4026,Q,4045,4027,4057,4039,4069,4050,4081,4050,L,4162,4055,Q,4227,4056,4283,4043,4324,4043,4371,3983,4439,3895,4444,3890,4448,3888,4484,3859,4518,3828,4535,3822,4551,3815,4582,3813,4612,3810,4671,3798,L,4792,3798,Q,4851,3798,4861,3803,4888,3810,4940,3810,4959,3810,4962,3808,4967,3806,4969,3789,4978,3748,4978,3739,L,4981,3619,Q,4981,3595,4966,3595,4948,3595,4948,3580,4948,3573,4950,3573,4950,3571,4960,3570,4971,3564,4978,3552,4984,3528,4986,3525,4990,3522,5e3,3520,5e3,3489,4993,3480,4972,3479,4971,3467,4967,3451,4957,3446,4942,3444,4930,3441,4885,3431,4882,3422,4878,3417,4875,3396,4870,3374,4870,3359,4870,3342,4878,3299,4887,3258,4887,3234,4885,3191,4888,3108,4885,3095,4894,3066,4904,3030,4907,3012,4912,2987,4912,2964,4919,2944,4942,2922,L,4942,2865,4774,2865,Q,4774,2862,4774,2831,4774,2808,4762,2802,4741,2790,4741,2736,L,4741,2695,Q,4753,2697,4772,2685,L,4774,2610,4969,2610,Q,4976,2610,4981,2601,4988,2589,4995,2586,5008,2577,5050,2544,5048,2534,5048,2517,5053,2459,5053,2435,5053,2380,5046,2368,5038,2352,4981,2308,4967,2296,4940,2256,4916,2222,4909,2219,4873,2207,4846,2184,4787,2135,4746,2068,4741,2061,4722,2045,4703,2030,4698,2021,4695,2016,4690,1987,4684,1961,4684,1953,L,4684,1951,Q,4667,1949,4657,1944,4643,1934,4631,1925,4626,1922,4616,1903,4607,1889,4592,1886,4580,1884,4575,1883,4566,1881,4561,1872,4558,1853,4551,1850,4535,1840,4534,1828,4532,1823,4532,1785,4532,1720,4537,1703,4549,1672,4563,1660,4568,1655,4568,1625,4568,1600,4556,1591,4540,1579,4535,1555,4523,1509,4501,1487,4450,1454,4441,1439,Q,4438,1435,4434,1415,Z]],label:"Gambella Zone 2",shortLabel:"GT",labelPosition:[357.3,272.2],labelAlignment:[CEN,MID]},"ET.GA.GH":{outlines:[[M,2847,110,L,2817,175,2812,203,2744,201,Q,2725,199,2713,216,2703,237,2694,244,2677,257,2651,304,2624,341,2598,341,2490,336,2440,340,2416,336,2408,336,2394,338,2356,364,2348,371,2315,372,2288,374,2281,383,2274,391,2240,443,2216,479,2192,492,2145,518,2084,580,2046,614,1950,665,1945,667,1878,669,1815,672,1796,672,1777,672,1755,623,1737,581,1737,568,1731,521,1731,449,1657,443,1640,419,1623,398,1583,398,1551,439,1547,443,1533,449,1496,449,1482,451,1473,451,1458,451,1456,446,1437,417,1436,417,1353,417,1350,417,L,1264,417,Q,1256,419,1247,427,L,1239,436,Q,1223,439,1213,451,1204,465,1197,472,1167,487,1144,487,1131,487,1125,473,1119,453,1103,443,1079,494,1071,503,1052,525,1009,525,993,525,992,523,985,516,975,504,964,494,952,492,939,491,933,487,928,484,927,475,925,470,920,468,L,896,461,Q,884,456,846,431,L,831,431,Q,815,470,813,473,807,479,769,479,755,479,753,477,753,475,745,448,740,444,717,443,L,695,443,Q,671,443,657,463,639,492,601,511,589,516,573,532,558,547,553,549,539,552,527,569,517,585,512,599,L,512,748,536,748,Q,541,732,541,707,L,573,710,575,729,Q,575,765,567,768,556,772,555,784,553,792,555,804,531,840,522,881,520,888,488,911,460,929,469,943,458,1019,458,1036,458,1063,467,1079,477,1097,481,1128,484,1161,503,1181,518,1199,518,1231,518,1257,512,1262,486,1276,477,1283,462,1296,405,1329,381,1346,366,1372,352,1397,335,1408,301,1427,277,1454,273,1456,272,1461,261,1471,239,1493,222,1511,198,1526,169,1545,158,1555,141,1574,145,1601,148,1634,134,1651,131,1655,92,1684,76,1694,71,1727,68,1733,56,1751,45,1764,45,1775,45,1787,59,1804,71,1821,71,1836,71,1843,66,1855,61,1865,59,1874,59,1876,59,1877,56,1965,110,1992,121,1996,138,2011,152,2021,165,2023,174,2030,172,2049,169,2083,169,2093,L,318,2093,Q,321,2123,325,2128,328,2129,345,2129,361,2129,368,2124,380,2112,393,2099,398,2092,422,2093,436,2093,465,2095,L,532,2095,Q,543,2095,560,2111,580,2128,584,2129,599,2133,633,2131,645,2131,656,2143,661,2152,671,2169,695,2201,738,2198,750,2196,764,2212,771,2220,779,2232,786,2243,819,2272,856,2308,872,2308,884,2308,901,2292,920,2275,935,2270,945,2267,957,2268,963,2268,973,2270,987,2268,993,2260,1002,2249,1011,2246,1031,2236,1048,2236,1053,2236,1064,2231,1076,2225,1079,2220,1091,2198,1107,2195,1110,2193,1144,2193,L,1144,2191,Q,1146,2193,1148,2193,L,1146,2193,Q,1149,2196,1187,2193,1196,2193,1203,2205,1208,2212,1211,2220,L,1288,2225,1293,2255,1372,2255,Q,1400,2205,1401,2201,1425,2164,1444,2159,1463,2152,1472,2136,1477,2121,1480,2112,1484,2104,1497,2092,1509,2083,1509,2075,1513,2020,1511,1943,1509,1862,1509,1828,1511,1807,1540,1783,1578,1751,1581,1745,L,1611,1696,Q,1614,1689,1624,1646,1631,1631,1662,1612,1681,1601,1719,1581,1731,1572,1772,1559,1813,1543,1825,1543,1866,1543,1881,1547,1911,1553,1926,1574,1941,1595,1969,1595,1986,1596,2034,1595,L,2103,1595,Q,2123,1595,2135,1608,2152,1625,2157,1627,2159,1627,2180,1629,2197,1629,2209,1637,L,2228,1653,Q,2236,1658,2250,1658,2277,1658,2293,1637,2303,1624,2312,1610,2317,1603,2329,1603,2343,1603,2404,1651,2468,1697,2475,1715,L,2541,1715,Q,2548,1672,2543,1619,2536,1569,2540,1497,2524,1456,2559,1373,2598,1281,2596,1229,2605,1180,2682,1109,2752,1046,2747,995,2751,941,2788,863,2840,755,2848,725,2862,681,2860,583,2857,463,2857,441,L,2857,439,Q,2859,412,2876,369,2896,323,2896,304,2896,275,2922,245,2946,218,2948,185,2913,184,2908,172,2889,131,2871,110,Z]],label:"Gambella Zone 3",shortLabel:"GH",labelPosition:[131.6,113.7],labelAlignment:[CEN,MID]},"ET.GA.GF":{outlines:[[M,5396,2682,Q,5377,2680,5367,2668,5353,2651,5344,2646,L,5271,2646,Q,5259,2644,5250,2635,L,5236,2620,Q,5216,2603,5192,2603,5147,2601,5132,2591,L,5094,2565,Q,5055,2556,5051,2555,5050,2553,5050,2544,5008,2577,4995,2586,4988,2589,4981,2601,4976,2610,4969,2610,L,4774,2610,4772,2685,Q,4753,2697,4741,2695,L,4741,2736,Q,4741,2790,4762,2802,4774,2808,4774,2831,4774,2862,4774,2865,L,4942,2865,4942,2922,Q,4919,2944,4912,2964,4912,2987,4907,3012,4904,3030,4894,3066,4885,3095,4888,3108,4885,3191,4887,3234,4887,3258,4878,3299,4870,3342,4870,3359,4870,3374,4875,3396,4878,3417,4882,3422,4885,3431,4930,3441,4942,3444,4957,3446,4967,3451,4971,3467,4972,3479,4993,3480,5e3,3489,5e3,3520,5002,3520,5005,3520,5022,3520,5027,3528,5036,3542,5048,3547,5058,3552,5099,3583,5104,3587,5151,3624,5187,3655,5207,3667,5255,3696,5322,3746,5379,3784,5435,3784,L,5463,3784,Q,5470,3784,5475,3779,5478,3775,5483,3770,5492,3760,5509,3760,5531,3760,5535,3758,5545,3751,5554,3729,5560,3710,5576,3705,5591,3698,5639,3698,5655,3698,5674,3712,5692,3724,5706,3724,5727,3724,5770,3720,5812,3717,5836,3717,L,5836,3587,Q,5831,3552,5838,3508,5838,3499,5848,3480,5857,3462,5862,3458,L,5867,3410,Q,5867,3360,5866,3326,5866,3261,5881,3237,5902,3199,5910,3136,5915,3129,5936,3098,5955,3067,5955,3050,5955,3031,5953,3028,5950,3021,5931,3014,5926,3012,5914,2999,5903,2985,5896,2983,5812,2935,5809,2934,5800,2925,5776,2910,5747,2889,5730,2884,5706,2875,5706,2853,5711,2826,5708,2808,L,5660,2808,Q,5660,2810,5655,2826,5650,2841,5651,2851,L,5569,2853,Q,5555,2853,5550,2867,5543,2887,5542,2889,L,5521,2892,Q,5506,2923,5497,2923,5488,2923,5475,2904,5461,2884,5459,2882,5452,2877,5432,2877,5406,2879,5391,2879,5300,2872,5271,2872,L,5269,2843,Q,5269,2824,5271,2820,5274,2808,5290,2807,5320,2800,5331,2783,5351,2747,5396,2719,Z]],label:"Gambella Zone 4",shortLabel:"GF",labelPosition:[538.4,327.2],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"gambelaregion",type:"maps"}}})});