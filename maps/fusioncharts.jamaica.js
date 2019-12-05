(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=184)})({184:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(185);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},185:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright InfoSoft Global Pvt. Ltd.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author InfoSoft Global Pvt. Ltd.
 * @meta package_map_pack
 * @id fusionmaps.Jamaica.20.10-30-2012 06:30:45
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Jamaica",revision:20,standaloneInit:true,baseWidth:411,baseHeight:170,baseScaleFactor:10,entities:{10:{outlines:[[M,2664,603,Q,2660,597,2656,590,2654,587,2646,588,2638,591,2623,594,2614,594,2608,599,2598,600,2589,603,2580,606,2573,611,2564,612,2558,617,2538,633,2516,643,2509,646,2505,647,2487,652,2465,657,2463,657,2457,663,2452,669,2445,672,2442,674,2438,675,2436,681,2428,684,2414,685,2400,685,2386,686,2375,690,2367,692,2350,696,2343,697,2332,699,2326,702,2315,704,2303,704,2290,709,2264,714,2235,712,2223,712,2210,719,2205,719,2201,719,2207,730,2212,743,2214,759,2220,765,2224,767,2228,774,2232,780,2234,783,2237,786,2238,790,2245,801,2250,810,2252,814,2255,820,2260,828,2264,835,2263,842,2261,845,2261,848,2260,850,2262,860,2256,870,2253,874,2254,880,2254,884,2260,888,2265,890,2264,904,2268,908,2263,917,2253,915,2250,922,2249,926,2249,930,2248,950,2248,970,2260,965,2267,973,2270,976,2274,979,2291,977,2293,987,2306,1002,2302,1017,2297,1023,2291,1025,2290,1056,2291,1085,2299,1103,2303,1112,2305,1117,2306,1120,2308,1127,2309,1132,2320,1146,2321,1160,2322,1164,2322,1167,2322,1176,2318,1180,2309,1188,2309,1202,2310,1209,2312,1213,2316,1219,2317,1227,2323,1235,2326,1236,2330,1240,2331,1241,2342,1254,2342,1267,2343,1274,2349,1280,2353,1276,2358,1275,2363,1274,2367,1272,2378,1263,2390,1261,2402,1260,2408,1258,2426,1252,2440,1247,2451,1239,2461,1236,2468,1244,2475,1247,2490,1245,2508,1246,2519,1250,2522,1259,2531,1273,2538,1282,2540,1297,2540,1310,2540,1317,2533,1320,2522,1330,2523,1342,2523,1350,2525,1357,2543,1360,2553,1352,2558,1348,2560,1345,2563,1340,2573,1342,2581,1343,2589,1352,2604,1356,2613,1361,2625,1363,2630,1357,2637,1347,2646,1343,2662,1341,2663,1355,2665,1374,2685,1373,2693,1373,2698,1368,2707,1363,2707,1355,2712,1343,2723,1345,2735,1347,2745,1342,2757,1337,2759,1325,2764,1313,2765,1305,2781,1295,2778,1272,2777,1264,2782,1261,2788,1256,2790,1255,2793,1254,2796,1250,2797,1247,2803,1244,2813,1239,2819,1231,2821,1218,2822,1210,2822,1203,2825,1200,2829,1195,2834,1187,2842,1175,2833,1165,2828,1157,2828,1155,2827,1146,2829,1142,2833,1131,2837,1124,2839,1119,2840,1118,2846,1115,2849,1105,2855,1095,2860,1089,2851,1083,2851,1075,2850,1060,2849,1047,2849,1031,2835,1031,2822,1030,2808,1028,2796,1019,2789,1010,2785,1005,2785,1002,2784,993,2782,985,2780,971,2787,962,2795,955,2793,947,2790,939,2788,937,2781,931,2783,917,2784,908,2793,910,2802,912,2813,911,2815,897,2814,885,2814,876,2818,870,2820,866,2825,866,2824,848,2814,843,2813,816,2813,792,2810,785,2816,776,L,2815,775,Q,2806,776,2798,775,2795,778,2792,779,2785,781,2776,779,2765,776,2762,765,2758,755,2753,750,2752,749,2749,743,2745,736,2741,727,2737,717,2725,711,2718,710,2715,707,2707,699,2717,692,2723,686,2724,677,2725,671,2726,665,2728,656,2720,656,2717,656,2713,654,2708,650,2705,637,2688,624,2667,607,Q,2666,604,2664,603,Z]],label:"Saint Catherine",shortLabel:"SC",labelPosition:[253,98],labelAlignment:[CEN,MID]},11:{outlines:[[M,1235,611,Q,1229,610,1223,609,1216,608,1208,608,1198,609,1198,605,1197,609,1186,611,1170,617,1155,626,1142,630,1128,632,1116,634,1100,644,1092,648,1083,651,1076,652,1075,650,1051,658,1028,668,1023,670,1017,671,1006,675,995,682,995,687,996,693,994,695,993,697,990,700,986,705,985,716,978,731,971,735,966,742,958,752,954,771,953,774,947,782,942,792,943,805,944,813,941,816,939,817,932,823,927,825,925,832,924,834,924,838,922,841,921,845,918,852,916,855,913,861,910,864,902,871,900,880,899,882,897,889,892,895,887,904,885,908,882,919,876,926,873,945,874,954,875,961,875,962,875,962,876,968,877,972,878,976,879,980,890,993,893,1002,899,1018,915,1018,926,1026,935,1025,943,1025,950,1023,954,1022,958,1020,963,1018,965,1014,962,1009,960,1007,980,1007,1e3,1008,1009,1008,1013,1011,1018,1015,1023,1017,1033,1020,1040,1025,1048,1027,1053,1028,1058,1028,1061,1032,1077,1041,1089,1051,1097,1054,1095,1062,1092,1072,1083,1078,1078,1080,1080,1090,1082,1096,1084,1103,1077,1110,1079,1122,1087,1133,1088,1138,1087,1149,1089,1153,1092,1174,1083,1182,1087,1188,1098,1188,1108,1194,1115,1194,1131,1201,1145,1201,1155,1205,1154,1215,1152,1225,1154,1235,1155,1240,1156,1245,1157,1248,1159,1253,1162,1256,1164,1259,1169,1267,1174,1274,1176,1278,1183,1278,1201,1284,1206,1297,1207,1307,1212,1309,1217,1317,1223,1318,1227,1319,1230,1319,1243,1321,1250,1325,1255,1328,1256,1335,1265,1344,1278,1343,1282,1342,1285,1341,1297,1339,1308,1333,1313,1331,1316,1328,1339,1327,1358,1328,1394,1336,1428,1334,1444,1329,1460,1332,1468,1335,1470,1335,1516,1335,1560,1327,1567,1313,1580,1305,1584,1302,1586,1295,1590,1278,1581,1273,1581,1259,1577,1254,1576,1238,1573,1227,1569,1214,1566,1205,1564,1200,1561,1196,1557,1189,1555,1185,1554,1180,1552,1175,1549,1168,1545,1157,1542,1145,1539,1135,1541,1126,1539,1117,1536,1110,1534,1102,1533,1099,1532,1095,1526,1093,1527,1087,1519,1078,1518,1072,1518,1057,1517,1042,1516,1039,1515,1035,1512,1024,1509,1012,1505,999,1502,987,1495,973,1492,962,1486,946,1484,935,1483,927,1481,922,1479,916,1477,910,1476,905,1473,897,1469,883,1467,872,1466,867,1464,864,1463,855,1461,852,1459,838,1456,832,1455,830,1455,827,1455,779,1455,730,1455,681,1461,632,1418,632,1373,630,1361,624,1353,619,1350,617,1343,617,1318,617,1293,618,1279,619,1265,613,Q,1251,612,1235,611,Z]],label:"Saint Elizabeth",shortLabel:"SE",labelPosition:[123,97.4],labelAlignment:[CEN,MID]},12:{outlines:[[M,1270,122,Q,1250,120,1230,120,1209,121,1187,116,1185,113,1175,112,1172,111,1168,110,1153,106,1135,108,1128,109,1123,105,1120,102,1113,101,1104,101,1095,101,1083,100,1070,96,1048,95,1025,95,1020,95,1017,104,1005,107,990,109,985,111,980,112,980,114,983,120,975,120,968,120,961,125,945,136,927,147,919,163,916,165,915,170,914,179,921,190,925,191,928,194,934,200,935,210,926,210,915,214,902,219,902,236,898,240,899,247,899,254,895,254,889,255,882,252,882,246,878,245,859,245,840,245,833,245,825,244,817,243,809,241,L,804,247,Q,803,256,802,265,800,285,812,293,814,295,816,296,823,298,830,300,839,302,841,312,842,321,846,327,852,337,859,347,860,357,865,365,874,377,881,392,881,410,894,420,899,427,908,431,915,435,924,443,932,461,947,475,950,484,950,491,958,499,955,515,954,527,965,535,976,542,980,549,992,555,996,564,1009,587,1012,607,1013,615,1013,622,1012,629,1015,635,1003,632,999,640,993,653,994,665,995,673,995,682,1006,675,1017,671,1023,670,1028,668,1051,658,1075,650,1076,652,1083,651,1092,648,1100,644,1116,634,1128,632,1142,630,1155,626,1170,617,1186,611,1197,609,1198,605,1196,593,1199,587,1205,569,1204,555,1202,528,1207,505,1210,490,1210,475,1209,462,1214,452,1215,434,1218,422,1219,409,1223,405,1228,397,1230,385,1233,376,1234,373,1238,365,1238,362,1236,348,1239,339,1240,290,1241,247,1242,232,1246,220,1252,196,1259,172,1261,162,1262,160,1262,149,1266,140,Q,1268,133,1270,122,Z]],label:"Saint James",shortLabel:"SJ",labelPosition:[103.5,38.8],labelAlignment:[CEN,MID]},13:{outlines:[[M,2842,401,Q,2840,396,2833,394,2822,390,2816,384,2810,379,2800,377,2790,375,2788,360,2785,357,2784,348,2790,332,2785,311,2769,313,2762,299,2750,297,2738,297,2725,297,2713,296,2703,296,2692,305,2690,308,2689,312,2687,320,2680,328,2677,330,2673,330,2664,332,2663,323,2654,318,2636,319,2633,316,2628,317,2617,318,2611,307,2611,300,2598,301,2591,298,2583,299,2569,300,2554,297,2555,289,2548,286,2517,285,2485,285,2483,285,2479,289,2474,299,2485,302,2480,302,2475,302,2475,315,2481,322,2487,329,2498,343,2500,362,2500,382,2500,388,2499,395,2498,405,2509,410,2513,436,2514,467,2518,476,2525,487,2527,492,2532,498,2533,500,2536,506,2539,510,2542,520,2544,525,2546,529,2549,534,2555,538,2557,540,2562,547,2563,551,2564,560,2566,576,2572,585,2579,596,2589,603,2598,600,2608,599,2614,594,2623,594,2638,591,2646,588,2654,587,2656,590,2660,597,2664,603,2666,604,2667,607,2688,624,2705,637,2708,650,2713,654,2717,656,2720,656,2728,656,2726,665,2725,671,2724,677,2723,686,2717,692,2707,699,2715,707,2718,710,2725,711,2737,717,2741,727,2745,736,2749,743,2752,749,2753,750,2758,755,2762,765,2765,776,2776,779,2785,781,2792,779,2795,778,2798,775,2806,776,2815,775,2816,775,2816,775,2823,775,2830,772,2846,757,2844,740,2851,744,2861,749,2866,751,2867,757,2881,765,2888,770,2889,769,2892,760,2893,756,2896,753,2900,750,2898,742,2897,737,2903,736,2919,736,2932,742,2935,744,2938,747,2949,758,2962,765,2967,767,2967,772,2972,783,2983,783,3e3,787,3013,788,3016,788,3018,787,3020,786,3020,782,3022,775,3027,773,3037,767,3035,757,3033,747,3039,743,3043,737,3044,734,3045,719,3050,715,3054,712,3059,706,3061,700,3063,695,3069,679,3078,667,3080,652,3081,640,3091,628,3092,617,3093,610,3097,606,3098,598,3101,596,3107,589,3108,588,3111,576,3115,574,3120,568,3125,562,3112,559,3098,560,3087,560,3075,561,3062,562,3053,552,3049,539,3035,542,3032,543,3025,550,3013,552,3002,552,2996,553,2990,553,2977,553,2968,542,2964,531,2961,515,2961,499,2948,493,2943,493,2941,490,2933,477,2935,457,2936,449,2932,446,2927,442,2920,441,2907,440,2894,429,2889,424,2879,414,2870,407,2860,405,2857,405,2853,404,Q,2849,403,2842,401,Z]],label:"Saint Mary",shortLabel:"SM",labelPosition:[280,53.6],labelAlignment:[CEN,MID]},14:{outlines:[[M,3700,1018,Q,3688,1017,3673,1016,3665,1017,3662,1013,3656,1006,3648,998,3620,997,3588,996,3578,993,3570,978,3557,971,3543,972,3537,972,3530,971,3520,970,3517,980,3509,982,3500,982,3486,980,3478,972,3477,970,3468,967,3458,965,3454,978,3451,984,3445,985,3440,986,3430,990,3429,995,3425,996,3423,996,3418,1002,3412,1002,3405,1003,3390,1005,3385,991,3374,990,3360,988,3354,987,3348,986,3329,987,3319,971,3312,966,3303,963,3298,961,3288,958,3282,957,3282,950,3280,936,3271,931,3262,928,3258,917,3257,912,3255,907,3252,901,3246,899,3235,895,3222,894,3222,912,3224,932,3225,941,3225,950,3225,958,3223,967,3217,969,3213,969,3199,969,3202,985,3218,986,3225,995,3232,1e3,3236,1007,3244,1020,3249,1028,3254,1035,3256,1047,3256,1050,3255,1052,3254,1062,3260,1069,3268,1069,3266,1077,3265,1084,3262,1093,3253,1095,3236,1096,3230,1099,3223,1105,3220,1109,3219,1113,3218,1120,3217,1127,3216,1138,3219,1145,3221,1151,3225,1155,3214,1147,3209,1164,3204,1173,3205,1185,3225,1198,3233,1215,3241,1217,3245,1222,3252,1232,3259,1238,3264,1242,3269,1246,3274,1252,3274,1260,3279,1265,3281,1269,3287,1282,3294,1291,3300,1309,3313,1308,3325,1307,3338,1307,3348,1307,3358,1308,3375,1310,3388,1309,3401,1308,3409,1316,3414,1320,3416,1321,3423,1324,3425,1324,3438,1324,3446,1332,3462,1339,3475,1337,3480,1335,3481,1333,3487,1328,3487,1320,3489,1317,3492,1315,3508,1317,3509,1310,3517,1306,3518,1305,3525,1301,3535,1301,3548,1302,3560,1303,3575,1303,3586,1301,3590,1300,3593,1298,3621,1297,3645,1296,3652,1282,3673,1286,3679,1287,3685,1287,3697,1287,3707,1290,3714,1294,3714,1300,3732,1301,3737,1305,3741,1309,3743,1312,3750,1325,3765,1323,3772,1322,3778,1322,3783,1322,3788,1322,3781,1310,3789,1297,3792,1294,3792,1290,3795,1279,3805,1279,3812,1277,3817,1278,3827,1272,3824,1287,3825,1297,3825,1305,3838,1307,3845,1308,3853,1309,3855,1305,3857,1301,3858,1298,3860,1291,3865,1291,3875,1290,3877,1285,3882,1278,3890,1279,3903,1280,3915,1279,3924,1278,3931,1274,3933,1263,3940,1263,3955,1262,3970,1263,3974,1255,3975,1252,3981,1241,3995,1241,3999,1241,4003,1241,4015,1240,4028,1241,4048,1242,4060,1232,4064,1228,4063,1220,4062,1214,4055,1214,4048,1207,4047,1197,4046,1179,4023,1182,4005,1184,3990,1178,3975,1180,3972,1171,3972,1167,3968,1164,3961,1148,3963,1135,3964,1127,3970,1126,3978,1125,3980,1125,3976,1117,3971,1114,3961,1103,3954,1096,3950,1088,3945,1086,3936,1076,3926,1064,3920,1067,3919,1068,3914,1072,3905,1071,3896,1070,3893,1075,3888,1080,3885,1085,3884,1087,3878,1091,3875,1092,3870,1093,3844,1095,3827,1086,3819,1081,3810,1074,3797,1074,3786,1069,3782,1067,3779,1064,3771,1052,3754,1049,3748,1043,3741,1039,3733,1034,3720,1028,3714,1025,3711,1022,Q,3707,1018,3700,1018,Z]],label:"Saint Thomas",shortLabel:"ST",labelPosition:[355.9,115.1],labelAlignment:[CEN,MID]},15:{outlines:[[M,1568,154,Q,1551,154,1531,162,1530,166,1527,173,1520,175,1513,176,1495,178,1495,160,1480,157,1465,157,1472,163,1468,165,1467,166,1460,172,1446,175,1432,172,1434,159,1423,160,1415,161,1412,154,1396,148,1378,149,1370,149,1372,161,1359,165,1345,165,1343,156,1350,155,1345,151,1332,149,1324,143,1309,140,1310,128,1300,128,1288,127,1275,128,1270,129,1270,122,1268,133,1266,140,1262,149,1262,160,1261,162,1259,172,1252,196,1246,220,1242,232,1241,247,1240,290,1239,339,1236,348,1238,362,1238,365,1234,373,1233,376,1230,385,1228,397,1223,405,1219,409,1218,422,1215,434,1214,452,1209,462,1210,475,1210,490,1207,505,1202,528,1204,555,1205,569,1199,587,1196,593,1198,605,1198,609,1208,608,1216,608,1223,609,1229,610,1235,611,1251,612,1265,613,1279,619,1293,618,1318,617,1343,617,1350,617,1353,619,1361,624,1373,630,1418,632,1461,632,1470,624,1477,627,1484,625,1485,625,1491,623,1498,622,1501,621,1506,618,1516,611,1528,611,1543,610,1558,609,1577,609,1593,616,1608,616,1613,622,1617,626,1622,629,1628,634,1630,635,1650,650,1667,661,1671,663,1676,669,1687,684,1695,692,1702,699,1713,698,1716,697,1720,697,1714,693,1714,682,1712,676,1711,675,1710,667,1712,662,1713,657,1713,652,1714,644,1717,639,1719,630,1720,625,1722,616,1727,607,1728,588,1729,575,1729,560,1735,554,1742,544,1743,537,1744,530,1749,522,1756,510,1758,500,1759,496,1759,492,1760,485,1761,477,1766,470,1766,460,1765,441,1774,425,1777,420,1777,412,1785,399,1784,385,1783,371,1784,357,1784,352,1790,349,1795,345,1795,342,1795,331,1794,320,1794,316,1794,312,1793,305,1792,297,1790,283,1790,272,1790,265,1792,262,1795,245,1788,241,1774,234,1774,225,1773,209,1768,191,1765,193,1758,191,1750,190,1752,180,1753,172,1738,177,1734,177,1725,179,1715,183,1702,183,1698,183,1696,175,1695,172,1688,170,1677,170,1680,172,1652,172,1622,171,1618,166,1613,156,Q,1590,155,1568,154,Z]],label:"Trelawny",shortLabel:"TR",labelPosition:[149.6,41],labelAlignment:[CEN,MID]},16:{outlines:[[M,695,437,Q,684,433,674,424,667,415,651,414,647,412,642,411,634,410,625,410,577,410,528,410,480,410,433,409,413,408,395,412,393,412,387,417,383,422,379,429,376,435,373,437,368,439,367,442,363,453,355,460,351,464,344,474,330,486,325,506,320,508,308,506,298,501,288,494,281,488,273,488,266,487,260,486,255,485,248,485,241,485,230,484,223,484,213,479,209,476,203,475,199,475,195,474,189,472,180,472,180,485,180,497,180,512,179,527,178,537,176,540,172,546,169,550,166,554,158,553,150,551,144,556,139,560,137,562,130,571,132,587,133,596,133,605,132,620,145,619,157,618,166,621,171,623,171,630,177,640,183,639,195,639,200,646,208,648,212,650,223,656,233,656,257,655,280,656,287,656,293,656,306,656,312,663,320,670,327,672,330,682,330,687,329,696,338,698,354,712,368,714,377,715,383,710,390,704,398,702,408,700,415,697,419,696,423,695,434,690,450,687,458,686,466,681,473,677,476,676,497,675,513,678,527,688,533,691,554,692,570,691,575,676,593,677,603,677,613,677,619,677,623,682,641,692,648,700,652,699,652,692,662,683,672,691,675,694,680,694,688,695,695,696,708,705,718,712,731,726,733,740,734,746,735,752,735,761,739,766,743,778,735,777,736,782,737,787,738,795,728,794,723,797,723,800,722,816,738,821,749,834,754,848,756,853,763,853,770,856,775,860,782,860,787,869,800,874,813,872,822,871,823,879,825,885,826,887,839,904,852,916,862,932,873,945,876,926,882,919,885,908,887,904,892,895,897,889,899,882,900,880,902,871,910,864,913,861,916,855,918,852,921,845,922,841,924,838,924,834,925,832,927,825,932,823,939,817,941,816,944,813,943,805,942,792,947,782,953,774,954,771,958,752,966,742,971,735,978,731,985,716,986,705,990,700,993,697,994,695,996,693,995,687,995,682,995,673,994,665,993,653,999,640,1003,632,1015,635,1012,629,1013,622,1013,615,1012,607,1009,587,996,564,992,555,980,549,976,542,965,535,954,527,955,515,958,499,950,491,924,492,898,492,882,492,868,489,863,487,857,486,836,481,813,482,792,484,772,475,761,471,753,468,744,464,733,459,724,454,715,448,Q,706,442,695,437,Z]],label:"Westmoreland",shortLabel:"WE",labelPosition:[57.3,60.2],labelAlignment:[CEN,MID]},17:{outlines:[[M,3015,1163,Q,3005,1162,2995,1163,2986,1164,2980,1177,2971,1189,2983,1201,2994,1202,3005,1202,3007,1201,3008,1200,3010,1198,3010,1195,3014,1186,3025,1187,3018,1187,3018,1180,Q,3018,1172,3015,1163,Z],[M,3023,1101,Q,3019,1101,3015,1101,3006,1100,2998,1099,2987,1097,2975,1097,2969,1097,2963,1096,2951,1095,2944,1108,2937,1115,2936,1129,2942,1134,2950,1134,3e3,1135,3048,1135,3060,1135,3073,1136,3076,1136,3078,1137,3090,1134,3087,1125,3083,1113,3070,1109,3060,1109,3048,1103,Q,3035,1102,3023,1101,Z]],label:"Kingston",shortLabel:"KI",labelPosition:[299.3,124.5],labelAlignment:[CEN,BTM],labelConnectors:[[M,2993,1245,L,2993,1185]]},"02":{outlines:[[M,745,236,Q,739,235,733,234,699,228,663,229,635,230,608,229,595,228,578,224,568,224,563,218,548,213,530,214,517,214,516,227,515,240,514,255,512,261,503,258,495,254,497,237,488,235,478,235,463,236,453,232,452,231,445,230,426,230,408,231,399,231,399,245,398,250,393,250,381,250,367,251,362,255,360,265,355,266,354,270,354,272,349,276,344,284,345,295,347,310,330,308,320,306,316,310,314,312,311,320,312,322,315,329,313,333,311,337,306,347,300,352,301,345,294,341,288,336,278,335,271,335,265,334,253,332,246,342,241,352,250,360,252,363,245,376,238,378,235,386,238,395,228,396,225,396,220,396,206,395,188,396,181,400,180,400,180,436,180,472,189,472,195,474,199,475,203,475,209,476,213,479,223,484,230,484,241,485,248,485,255,485,260,486,266,487,273,488,281,488,288,494,298,501,308,506,320,508,325,506,330,486,344,474,351,464,355,460,363,453,367,442,368,439,373,437,376,435,379,429,383,422,387,417,393,412,395,412,413,408,433,409,480,410,528,410,577,410,625,410,634,410,642,411,647,412,651,414,667,415,674,424,684,433,695,437,706,442,715,448,724,454,733,459,744,464,753,468,761,471,772,475,792,484,813,482,836,481,857,486,863,487,868,489,882,492,898,492,924,492,950,491,950,484,947,475,932,461,924,443,915,435,908,431,899,427,894,420,881,410,881,392,874,377,865,365,860,357,859,347,852,337,846,327,842,321,841,312,839,302,830,300,823,298,816,296,814,295,812,293,800,285,802,265,803,256,804,247,L,809,241,Q,808,240,807,240,806,240,805,240,799,238,796,227,790,217,778,218,771,218,763,223,758,226,756,230,Q,753,236,745,236,Z]],label:"Hanover",shortLabel:"HA",labelPosition:[55.8,33.8],labelAlignment:[CEN,MID]},"01":{outlines:[[M,2158,721,Q,2148,721,2143,717,2139,713,2132,702,2122,700,2114,701,2099,702,2078,701,2073,699,2063,700,2046,702,2030,694,2015,694,2003,685,1990,678,1971,679,1963,673,1953,675,1943,677,1937,668,1933,665,1928,658,1915,657,1896,656,1889,653,1879,657,1879,666,1867,674,1865,678,1855,678,1846,678,1838,687,1836,700,1827,709,1818,714,1799,711,1795,709,1790,708,1780,707,1766,706,1757,700,1743,696,1730,695,1720,697,1717,704,1720,710,1731,737,1739,762,1740,766,1742,770,1748,781,1752,790,1762,803,1775,818,1784,828,1791,842,1795,850,1799,862,1804,873,1810,882,1817,891,1821,902,1827,909,1827,917,1833,927,1836,937,1843,948,1848,955,1856,966,1860,977,1865,990,1876,1002,1879,1007,1881,1015,1887,1017,1887,1022,1892,1029,1894,1037,1907,1041,1909,1055,1910,1073,1910,1090,1904,1092,1910,1094,1903,1115,1904,1142,1909,1163,1924,1189,1929,1195,1934,1204,1935,1207,1939,1214,1943,1221,1949,1235,1950,1240,1951,1244,1954,1255,1959,1265,1959,1270,1965,1275,1971,1287,1977,1295,1979,1299,1972,1307,1972,1315,1969,1320,1966,1325,1966,1330,1965,1338,1964,1350,1959,1352,1956,1358,1951,1367,1948,1373,1951,1373,1955,1373,1970,1381,1975,1393,1977,1398,1983,1398,1990,1397,1998,1398,2001,1399,2005,1402,2016,1412,2022,1425,2023,1429,2030,1431,2043,1441,2047,1455,2050,1466,2052,1470,2055,1476,2061,1479,2074,1483,2085,1483,2105,1483,2119,1498,2131,1506,2134,1512,2137,1516,2139,1520,2146,1539,2155,1550,2158,1554,2161,1556,2179,1555,2184,1562,2189,1570,2195,1577,2210,1583,2218,1592,2227,1603,2237,1608,2253,1622,2268,1622,2273,1623,2278,1624,2282,1625,2285,1625,2310,1625,2335,1624,2345,1620,2348,1615,2350,1611,2355,1611,2361,1603,2367,1599,2372,1594,2373,1592,2381,1585,2376,1579,2369,1569,2363,1564,2355,1552,2352,1542,2348,1531,2350,1517,2351,1504,2344,1498,2325,1494,2320,1507,2310,1511,2307,1514,2298,1516,2293,1517,2281,1518,2271,1514,2253,1512,2238,1512,2228,1512,2218,1507,2220,1490,2232,1481,2238,1475,2242,1473,2263,1467,2271,1480,2272,1492,2282,1488,2294,1482,2300,1480,2295,1475,2290,1471,2286,1468,2287,1460,2288,1449,2289,1437,2297,1424,2303,1415,2305,1411,2310,1411,2315,1412,2314,1405,2313,1396,2313,1387,2313,1363,2314,1340,2321,1332,2324,1322,2326,1310,2336,1300,2340,1296,2341,1290,2344,1284,2349,1280,2343,1274,2342,1267,2342,1254,2331,1241,2330,1240,2326,1236,2323,1235,2317,1227,2316,1219,2312,1213,2310,1209,2309,1202,2309,1188,2318,1180,2322,1176,2322,1167,2322,1164,2321,1160,2320,1146,2309,1132,2308,1127,2306,1120,2305,1117,2303,1112,2299,1103,2291,1085,2290,1056,2291,1025,2297,1023,2302,1017,2306,1002,2293,987,2291,977,2274,979,2270,976,2267,973,2260,965,2248,970,2248,950,2249,930,2249,926,2250,922,2253,915,2263,917,2268,908,2264,904,2265,890,2260,888,2254,884,2254,880,2253,874,2256,870,2262,860,2260,850,2261,848,2261,845,2263,842,2264,835,2260,828,2255,820,2252,814,2250,810,2245,801,2238,790,2237,786,2234,783,2232,780,2228,774,2224,767,2220,765,2214,759,2212,743,2207,730,2201,719,Q,2179,720,2158,721,Z]],label:"Clarendon",shortLabel:"CL",labelPosition:[211.3,111.2],labelAlignment:[CEN,MID]},"04":{outlines:[[M,1676,669,Q,1671,663,1667,661,1650,650,1630,635,1628,634,1622,629,1617,626,1613,622,1608,616,1593,616,1577,609,1558,609,1543,610,1528,611,1516,611,1506,618,1501,621,1498,622,1491,623,1485,625,1484,625,1477,627,1470,624,1461,632,1455,681,1455,730,1455,779,1455,827,1455,830,1456,832,1459,838,1461,852,1463,855,1464,864,1466,867,1467,872,1469,883,1473,897,1476,905,1477,910,1479,916,1481,922,1483,927,1484,935,1486,946,1492,962,1495,973,1502,987,1505,999,1509,1012,1512,1024,1515,1035,1516,1039,1517,1042,1518,1057,1518,1072,1519,1078,1527,1087,1526,1093,1532,1095,1533,1099,1534,1102,1536,1110,1539,1117,1541,1126,1539,1135,1542,1145,1545,1157,1549,1168,1552,1175,1554,1180,1555,1185,1557,1189,1561,1196,1564,1200,1566,1205,1569,1214,1573,1227,1576,1238,1577,1254,1581,1259,1581,1273,1590,1278,1586,1295,1584,1302,1580,1305,1567,1313,1560,1327,1565,1327,1570,1327,1585,1327,1600,1328,1613,1336,1622,1340,1628,1342,1629,1343,1635,1347,1637,1348,1649,1355,1668,1365,1672,1367,1675,1370,1683,1374,1693,1373,1709,1370,1720,1364,1736,1348,1760,1344,1774,1342,1788,1338,1797,1334,1810,1335,1833,1335,1855,1337,1859,1337,1863,1340,1872,1347,1885,1345,1891,1345,1896,1349,1899,1352,1902,1355,1907,1359,1911,1361,1918,1364,1920,1365,1927,1372,1940,1372,1944,1372,1948,1373,1951,1367,1956,1358,1959,1352,1964,1350,1965,1338,1966,1330,1966,1325,1969,1320,1972,1315,1972,1307,1979,1299,1977,1295,1971,1287,1965,1275,1959,1270,1959,1265,1954,1255,1951,1244,1950,1240,1949,1235,1943,1221,1939,1214,1935,1207,1934,1204,1929,1195,1924,1189,1909,1163,1904,1142,1903,1115,1910,1094,1904,1092,1910,1090,1910,1073,1909,1055,1907,1041,1894,1037,1892,1029,1887,1022,1887,1017,1881,1015,1879,1007,1876,1002,1865,990,1860,977,1856,966,1848,955,1843,948,1836,937,1833,927,1827,917,1827,909,1821,902,1817,891,1810,882,1804,873,1799,862,1795,850,1791,842,1784,828,1775,818,1762,803,1752,790,1748,781,1742,770,1740,766,1739,762,1731,737,1720,710,1717,704,1720,697,1716,697,1713,698,1702,699,1695,692,Q,1687,684,1676,669,Z]],label:"Manchester",shortLabel:"MA",labelPosition:[167.1,99.1],labelAlignment:[CEN,MID]},"09":{outlines:[[M,2314,279,Q,2307,274,2300,269,2299,269,2293,264,2287,258,2280,257,2259,257,2238,258,2230,259,2228,255,2226,247,2218,245,2214,245,2205,240,2197,235,2183,231,2169,230,2158,222,2152,218,2145,218,2139,217,2133,216,2130,216,2127,211,2119,206,2102,206,2098,203,2095,203,2073,202,2050,202,2042,202,2033,201,2017,199,2010,210,2003,212,1992,213,1990,216,1988,221,1981,222,1975,223,1961,224,1951,212,1948,206,1940,207,1931,209,1925,203,1919,199,1908,199,1895,200,1883,199,1873,198,1873,205,1879,209,1878,217,1871,217,1863,217,1862,207,1850,207,1848,200,1843,200,1833,200,1823,199,1817,199,1815,192,1794,190,1768,191,1773,209,1774,225,1774,234,1788,241,1795,245,1792,262,1790,265,1790,272,1790,283,1792,297,1793,305,1794,312,1794,316,1794,320,1795,331,1795,342,1795,345,1790,349,1784,352,1784,357,1783,371,1784,385,1785,399,1777,412,1777,420,1774,425,1765,441,1766,460,1766,470,1761,477,1760,485,1759,492,1759,496,1758,500,1756,510,1749,522,1744,530,1743,537,1742,544,1735,554,1729,560,1729,575,1728,588,1727,607,1722,616,1720,625,1719,630,1717,639,1714,644,1713,652,1713,657,1712,662,1710,667,1711,675,1712,676,1714,682,1714,693,1720,697,1730,695,1743,696,1757,700,1766,706,1780,707,1790,708,1795,709,1799,711,1818,714,1827,709,1836,700,1838,687,1846,678,1855,678,1865,678,1867,674,1879,666,1879,657,1889,653,1896,656,1915,657,1928,658,1933,665,1937,668,1943,677,1953,675,1963,673,1971,679,1990,678,2003,685,2015,694,2030,694,2046,702,2063,700,2073,699,2078,701,2099,702,2114,701,2122,700,2132,702,2139,713,2143,717,2148,721,2158,721,2179,720,2201,719,2205,719,2210,719,2223,712,2235,712,2264,714,2290,709,2303,704,2315,704,2326,702,2332,699,2343,697,2350,696,2367,692,2375,690,2386,686,2400,685,2414,685,2428,684,2436,681,2438,675,2442,674,2445,672,2452,669,2457,663,2463,657,2465,657,2487,652,2505,647,2509,646,2516,643,2538,633,2558,617,2564,612,2573,611,2580,606,2589,603,2579,596,2572,585,2566,576,2564,560,2563,551,2562,547,2557,540,2555,538,2549,534,2546,529,2544,525,2542,520,2539,510,2536,506,2533,500,2532,498,2527,492,2525,487,2518,476,2514,467,2513,436,2509,410,2498,405,2499,395,2500,388,2500,382,2500,362,2498,343,2487,329,2481,322,2475,315,2475,302,2460,302,2445,302,2429,302,2413,301,2402,300,2402,311,2399,308,2393,309,2380,312,2367,301,2361,299,2356,296,2353,295,2346,291,Q,2333,283,2314,279,Z]],label:"Saint Ann",shortLabel:"SN",labelPosition:[215,45.5],labelAlignment:[CEN,MID]},"07":{outlines:[[M,3530,678,Q,3517,675,3500,673,3497,672,3493,672,3480,672,3478,682,3474,699,3451,696,3445,691,3433,686,3427,683,3415,684,3402,685,3388,686,3376,687,3367,676,3361,671,3357,664,3350,658,3343,647,3339,642,3332,638,3328,636,3323,634,3316,632,3310,631,3305,630,3297,635,3281,637,3265,637,3254,637,3243,638,3226,640,3220,626,3218,625,3212,621,3200,615,3190,605,3183,597,3177,593,3174,590,3170,589,3163,588,3162,577,3162,569,3158,568,3154,567,3150,567,3147,566,3143,565,3134,563,3125,562,3120,568,3115,574,3111,576,3108,588,3107,589,3101,596,3098,598,3097,606,3093,610,3092,617,3091,628,3081,640,3080,652,3078,667,3069,679,3063,695,3061,700,3059,706,3054,712,3050,715,3045,719,3044,734,3043,737,3039,743,3033,747,3035,757,3037,767,3027,773,3022,775,3020,782,3020,786,3018,787,3022,799,3024,812,3029,821,3033,830,3037,840,3035,852,3034,858,3037,863,3039,876,3044,881,3048,886,3050,887,3054,890,3058,892,3062,895,3062,899,3073,911,3083,913,3097,918,3110,918,3120,917,3129,916,3137,915,3137,910,3142,897,3144,892,3142,875,3153,876,3160,877,3163,879,3172,885,3179,891,3198,892,3213,893,3217,893,3220,894,3221,894,3222,894,3235,895,3246,899,3252,901,3255,907,3257,912,3258,917,3262,928,3271,931,3280,936,3282,950,3282,957,3288,958,3298,961,3303,963,3312,966,3319,971,3329,987,3348,986,3354,987,3360,988,3374,990,3385,991,3390,1005,3405,1003,3412,1002,3418,1002,3423,996,3425,996,3429,995,3430,990,3440,986,3445,985,3451,984,3454,978,3458,965,3468,967,3477,970,3478,972,3486,980,3500,982,3509,982,3517,980,3520,970,3530,971,3537,972,3543,972,3557,971,3570,978,3578,993,3588,996,3620,997,3648,998,3656,1006,3662,1013,3665,1017,3673,1016,3688,1017,3700,1018,3707,1018,3711,1022,3714,1025,3720,1028,3733,1034,3741,1039,3748,1043,3754,1049,3771,1052,3779,1064,3782,1067,3786,1069,3797,1074,3810,1074,3819,1081,3827,1086,3844,1095,3870,1093,3875,1092,3878,1091,3884,1087,3885,1085,3888,1080,3893,1075,3896,1070,3905,1071,3914,1072,3919,1068,3920,1067,3926,1064,3923,1056,3922,1052,3921,1045,3917,1040,3912,1035,3910,1032,3905,1025,3900,1017,3897,1014,3897,1007,3897,1004,3898,1e3,3903,988,3898,977,3896,973,3894,971,3881,954,3874,944,3871,941,3867,935,3858,921,3848,902,3843,892,3834,884,3827,877,3820,870,3810,860,3812,845,3814,832,3810,825,3803,814,3795,813,3792,805,3791,802,3790,796,3790,790,3789,780,3783,774,3779,766,3773,766,3756,758,3746,751,3740,747,3733,744,3730,742,3723,737,3698,737,3673,738,3651,738,3631,732,3632,725,3633,717,3625,717,3615,716,3607,716,3600,722,3597,726,3592,728,3587,730,3580,730,3570,732,3565,728,3558,722,3549,706,3545,702,3542,694,3540,692,3538,687,Q,3536,680,3530,678,Z]],label:"Portland",shortLabel:"PO",labelPosition:[342.7,82.7],labelAlignment:[CEN,MID]},"08":{outlines:[[M,3013,788,Q,3e3,787,2983,783,2972,783,2967,772,2967,767,2962,765,2949,758,2938,747,2935,744,2932,742,2919,736,2903,736,2897,737,2898,742,2900,750,2896,753,2893,756,2892,760,2889,769,2888,770,2881,765,2867,757,2866,751,2861,749,2851,744,2844,740,2846,757,2830,772,2823,775,2816,775,L,2816,776,Q,2810,785,2813,792,2813,816,2814,843,2824,848,2825,866,2820,866,2818,870,2814,876,2814,885,2815,897,2813,911,2802,912,2793,910,2784,908,2783,917,2781,931,2788,937,2790,939,2793,947,2795,955,2787,962,2780,971,2782,985,2784,993,2785,1002,2785,1005,2789,1010,2796,1019,2808,1028,2822,1030,2835,1031,2849,1031,2849,1047,2850,1060,2851,1075,2851,1083,2860,1089,2863,1086,2865,1084,2869,1081,2875,1080,2880,1092,2892,1096,2901,1103,2905,1106,2909,1109,2913,1122,2929,1124,2936,1129,2937,1115,2944,1108,2951,1095,2963,1096,2969,1097,2975,1097,2987,1097,2998,1099,3006,1100,3015,1101,3019,1101,3023,1101,3035,1102,3048,1103,3060,1109,3070,1109,3083,1113,3087,1125,3090,1134,3078,1137,3085,1140,3084,1150,3083,1162,3098,1161,3106,1160,3115,1160,3125,1160,3135,1161,3141,1168,3151,1172,3156,1173,3162,1174,3182,1173,3198,1181,3202,1183,3205,1185,3204,1173,3209,1164,3214,1147,3225,1155,3221,1151,3219,1145,3216,1138,3217,1127,3218,1120,3219,1113,3220,1109,3223,1105,3230,1099,3236,1096,3253,1095,3262,1093,3265,1084,3266,1077,3268,1069,3260,1069,3254,1062,3255,1052,3256,1050,3256,1047,3254,1035,3249,1028,3244,1020,3236,1007,3232,1e3,3225,995,3218,986,3202,985,3199,969,3213,969,3217,969,3223,967,3225,958,3225,950,3225,941,3224,932,3222,912,3222,894,3221,894,3220,894,3217,893,3213,893,3198,892,3179,891,3172,885,3163,879,3160,877,3153,876,3142,875,3144,892,3142,897,3137,910,3137,915,3129,916,3120,917,3110,918,3097,918,3083,913,3073,911,3062,899,3062,895,3058,892,3054,890,3050,887,3048,886,3044,881,3039,876,3037,863,3034,858,3035,852,3037,840,3033,830,3029,821,3024,812,3022,799,3018,787,Q,3016,788,3013,788,Z]],label:"Saint Andrew",shortLabel:"SD",labelPosition:[299.4,96.1],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"jamaica",type:"maps"}}})});