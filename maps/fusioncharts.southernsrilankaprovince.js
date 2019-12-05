(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=12)})({12:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(13);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},13:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright InfoSoft Global Pvt. Ltd.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author InfoSoft Global Pvt. Ltd.
 * @meta package_map_pack
 * @id fusionmaps.SouthernSriLankaProvince.1.02-11-2019 08:03:10
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"SouthernSriLankaProvince",revision:1,creditLabel:false,standaloneInit:false,baseWidth:600,baseHeight:230,baseScaleFactor:10,firstEntity:"LK.SP.GL",entities:{"LK.SP.GL":{outlines:[[M,1335,712,Q,1317,712,1313,716,1311,718,1307,723,1303,728,1298,731,1296,732,1295,732,1278,741,1251,753,1227,764,1215,780,1211,786,1196,812,1178,835,1156,835,1133,832,1124,833,1107,833,1097,851,1092,859,1070,880,1054,893,1054,910,L,1070,924,Q,1087,944,1095,970,1097,976,1109,998,1121,1017,1121,1025,1121,1055,1118,1067,1111,1083,1095,1084,L,1082,1084,Q,1078,1065,1053,1045,1019,1016,1005,998,1e3,991,951,957,937,936,929,925,916,907,878,907,874,926,861,931,858,931,844,932,835,933,832,936,816,952,796,979,790,987,779,990,761,994,755,996,748,998,746,1008,L,743,1021,Q,736,1022,719,1022,699,1022,695,1019,689,1015,685,1004,682,996,669,993,654,990,643,980,634,973,623,973,616,973,603,977,589,981,574,981,553,981,549,969,544,958,520,957,504,958,496,957,484,953,486,936,L,413,859,273,849,Q,259,835,252,833,248,832,230,832,213,832,205,816,199,805,186,812,186,789,160,772,137,758,113,758,98,758,95,764,91,770,71,772,74,783,49,800,49,804,50,807,53,823,73,878,79,909,94,944,110,984,117,1008,119,1014,128,1045,135,1068,136,1078,137,1090,145,1115,152,1139,155,1150,182,1337,331,1570,336,1579,363,1613,382,1637,386,1650,394,1680,407,1699,413,1709,435,1735,459,1763,517,1816,563,1858,582,1887,589,1894,610,1918,633,1941,650,1941,656,1941,671,1918,687,1894,697,1894,713,1894,835,2023,933,2059,1023,2081,1052,2092,1089,2101,1126,2109,1152,2112,1178,2114,1213,2121,1249,2127,1289,2134,1302,2137,1354,2152,1363,2154,1372,2157,1383,2132,1383,2103,1381,2061,1408,2061,1413,2061,1434,2062,1454,2062,1462,2055,1468,2041,1479,2033,1484,2030,1487,2028,1491,2025,1491,2018,1491,1999,1476,1985,1459,1972,1452,1964,1431,1938,1428,1936,1417,1930,1412,1927,1402,1922,1402,1914,1402,1894,1408,1889,1423,1880,1441,1868,1447,1864,1450,1852,1457,1834,1457,1833,1466,1820,1467,1818,1469,1810,1469,1799,1470,1767,1470,1753,1469,1734,1464,1709,L,1461,1691,Q,1460,1687,1455,1684,1449,1681,1447,1680,1446,1679,1441,1664,1437,1654,1427,1656,L,1427,1649,Q,1428,1646,1450,1632,1474,1616,1474,1615,1472,1609,1471,1603,1469,1602,1469,1598,1470,1597,1470,1595,1471,1591,1471,1585,L,1471,1551,Q,1470,1543,1466,1543,1462,1542,1462,1537,1462,1520,1491,1514,1520,1508,1520,1493,1520,1481,1513,1479,1496,1475,1489,1469,1491,1454,1478,1452,1462,1452,1457,1449,L,1457,1442,Q,1536,1442,1558,1440,1589,1436,1603,1428,1605,1426,1623,1421,1637,1415,1637,1410,1633,1371,1635,1347,1636,1333,1625,1311,1613,1284,1612,1280,1604,1253,1597,1238,1594,1234,1579,1214,1573,1205,1570,1196,1567,1185,1563,1180,1557,1171,1549,1167,1548,1166,1548,1155,1548,1140,1551,1134,1557,1127,1574,1123,1584,1107,1586,1104,1589,1099,1607,1099,1624,1099,1636,1118,1642,1129,1655,1153,1665,1168,1669,1169,1675,1170,1692,1171,1695,1173,1701,1184,1705,1194,1717,1194,1763,1194,1773,1183,1775,1181,1780,1170,1783,1164,1791,1161,1806,1154,1806,1145,1806,1134,1799,1123,1795,1118,1788,1112,1782,1107,1782,1104,L,1782,1057,Q,1782,1045,1766,1039,L,1737,1022,1712,997,Q,1706,994,1704,993,1700,990,1700,985,L,1700,966,Q,1700,951,1702,947,1704,939,1716,932,1729,921,1731,920,1738,917,1747,918,1754,919,1762,912,1769,902,1772,898,1774,894,1784,895,1789,895,1798,896,1797,890,1798,877,1783,870,1772,848,1763,833,1749,834,1740,834,1727,817,1724,813,1712,813,1698,814,1695,814,1658,814,1648,824,1640,834,1623,834,1605,834,1601,832,1596,829,1591,820,1587,814,1586,814,1562,812,1542,814,1491,815,1468,798,L,1441,780,Q,1421,769,1414,764,1412,762,1401,748,1382,726,1368,718,1359,714,1345,713,Q,1340,712,1335,712,Z]],label:"Galle District",shortLabel:"GL",labelPosition:[92.8,143.5],labelAlignment:[CEN,MID],nextId:"LK.SP.HB"},"LK.SP.HB":{outlines:[[M,4112,703,Q,4099,703,4092,716,4074,751,4069,757,L,4060,757,Q,4021,729,4005,717,3977,696,3953,689,3929,681,3895,660,3869,644,3847,638,3841,637,3820,641,L,3806,642,Q,3773,642,3760,652,3745,663,3731,666,3720,669,3695,670,3677,670,3669,685,3664,693,3656,708,3639,722,3636,728,3633,733,3632,740,3631,741,3631,744,3631,747,3630,752,3628,765,3623,788,L,3612,788,Q,3609,769,3598,768,3582,767,3578,759,L,3560,759,Q,3560,772,3545,774,3526,778,3520,796,3514,813,3495,822,3479,831,3479,842,3479,857,3487,897,3487,900,3483,907,3480,913,3480,921,3480,937,3498,950,3515,963,3515,970,3515,983,3503,994,3484,1003,3479,1003,3470,1003,3458,1011,3451,1016,3431,1029,3426,1032,3375,1057,3351,1068,3340,1082,3338,1084,3336,1087,L,3298,1108,Q,3263,1129,3251,1129,3243,1129,3235,1124,3238,1141,3248,1171,3257,1197,3260,1219,3261,1223,3268,1229,3275,1235,3277,1242,3281,1264,3283,1270,3288,1285,3298,1288,3307,1292,3307,1307,3307,1318,3295,1335,3283,1354,3274,1354,3262,1354,3259,1351,3255,1344,3246,1335,3242,1331,3229,1331,3214,1332,3211,1330,3186,1313,3176,1312,3165,1311,3164,1298,3161,1283,3157,1282,3140,1277,3116,1263,3080,1243,3077,1242,3054,1229,2984,1229,2967,1229,2949,1240,2930,1250,2904,1250,2861,1247,2834,1249,2814,1250,2798,1238,2780,1226,2770,1221,2758,1216,2707,1197,2667,1181,2642,1167,2625,1156,2597,1128,2570,1100,2550,1074,2535,1054,2490,1060,2472,1061,2459,1050,2443,1039,2433,1037,L,2415,1038,Q,2414,1037,2413,1037,2407,1045,2406,1065,2406,1087,2403,1090,2396,1100,2384,1111,2375,1116,2375,1127,2375,1128,2383,1170,2389,1211,2389,1223,2389,1234,2315,1300,2243,1362,2238,1421,L,2237,1443,Q,2236,1459,2241,1466,2246,1475,2263,1486,2280,1498,2282,1503,2295,1538,2329,1537,2347,1536,2390,1534,2394,1546,2396,1575,2399,1609,2403,1634,2403,1636,2423,1663,2427,1669,2428,1689,2428,1699,2427,1714,2427,1779,2374,1802,2321,1825,2321,1868,2321,1898,2323,1902,2328,1908,2358,1914,2367,1915,2379,1927,2390,1938,2400,1938,L,2442,1933,2449,1935,Q,2451,1989,2461,2074,2490,2061,2514,2054,2545,2045,2604,2016,2635,2e3,2687,1974,2714,1962,2725,1954,2748,1938,2747,1920,2748,1905,2769,1888,2788,1871,2807,1866,2834,1859,2884,1838,2936,1815,2961,1800,3003,1774,3103,1736,3229,1688,3265,1671,3289,1660,3337,1635,3381,1613,3423,1598,3502,1569,3585,1543,3588,1541,3592,1541,3612,1543,3635,1534,3667,1520,3681,1521,3688,1521,3703,1524,3716,1525,3726,1521,3738,1517,3750,1508,3757,1502,3765,1502,3773,1502,3783,1509,3793,1516,3803,1516,3823,1516,3829,1507,3835,1496,3857,1496,3874,1496,3884,1479,3894,1461,3908,1461,3933,1461,3940,1482,3947,1502,3981,1502,3999,1502,4015,1489,4031,1478,4045,1477,4067,1476,4124,1477,4148,1476,4195,1468,4234,1462,4261,1464,4324,1467,4338,1462,4388,1442,4409,1439,4505,1424,4550,1407,4614,1382,4697,1345,4703,1341,4734,1322,4753,1310,4771,1308,L,4828,1262,Q,4832,1238,4846,1228,4852,1224,4867,1223,4882,1222,4885,1217,4890,1208,4906,1194,4924,1177,4931,1169,4974,1111,5022,1072,5045,1062,5076,1036,5112,1005,5131,995,5170,975,5189,964,5222,945,5229,926,5232,906,5234,895,5239,874,5251,869,5287,846,5303,838,5323,826,5359,812,5391,799,5411,786,5470,744,5501,722,5556,682,5600,646,L,5626,625,Q,5639,614,5646,604,5651,598,5650,579,5648,561,5656,553,5659,549,5677,539,5696,529,5705,522,5735,491,5739,479,5754,461,5791,425,5831,387,5847,368,5859,354,5884,341,5913,328,5926,320,5932,317,5934,305,5936,293,5938,290,5947,277,5949,265,5916,267,5911,267,5858,242,5841,230,5834,210,5827,197,5815,173,5803,173,5788,172,5765,154,5736,129,5730,126,5692,107,5669,76,5650,60,5641,51,L,5640,50,Q,5620,71,5579,95,5559,107,5491,141,5481,146,5452,169,5427,189,5419,190,5396,190,5378,203,5369,211,5353,227,5344,236,5321,247,5300,258,5290,268,5281,275,5265,297,5253,311,5241,317,5222,323,5199,365,5176,407,5153,417,L,5153,427,Q,5157,437,5180,456,5198,472,5198,493,L,5197,548,Q,5197,565,5202,573,5206,581,5206,591,5206,615,5169,634,5143,648,5122,652,5115,653,5109,653,5094,651,5086,642,5073,630,5051,630,5042,630,5016,639,4993,646,4967,644,4921,640,4889,675,4874,688,4854,697,4824,709,4811,717,4794,728,4768,745,4746,759,4728,763,4706,767,4635,803,4575,833,4533,832,L,4449,867,4445,881,Q,4438,896,4429,905,4419,913,4415,928,4410,942,4412,951,L,4378,951,4306,898,Q,4298,889,4266,867,4246,854,4240,828,4239,796,4237,783,4235,771,4222,758,4209,745,4204,740,4195,728,4182,727,4165,729,4155,729,4131,727,4127,714,Q,4124,703,4112,703,Z]],label:"Hambantota District",shortLabel:"HB",labelPosition:[384.8,106.2],labelAlignment:[CEN,MID],nextId:"LK.SP.MH"},"LK.SP.MH":{outlines:[[M,2381,937,Q,2380,932,2375,926,2371,921,2370,917,2367,909,2352,909,2349,906,2300,906,2287,906,2285,909,2283,912,2281,932,2279,946,2253,937,L,2228,937,Q,2227,937,2221,924,2217,913,2212,912,2182,902,2182,882,2182,870,2185,868,2192,861,2192,856,2192,829,2193,825,2193,824,2216,813,2222,809,2222,803,2221,795,2221,788,2221,775,2219,772,2217,768,2202,763,2195,761,2195,755,2194,747,2192,745,2188,741,2181,740,L,2175,740,Q,2163,740,2162,753,2161,765,2146,764,2133,763,2131,773,2129,780,2129,791,L,2076,792,Q,2076,791,2074,791,2070,790,2056,791,2032,792,2025,792,2002,789,2003,773,L,1975,772,Q,1950,772,1946,782,1944,787,1939,794,1935,800,1925,805,1913,808,1905,831,1902,837,1894,846,1886,854,1886,860,1874,881,1861,890,1846,901,1821,901,1803,901,1800,899,1799,898,1798,896,1789,895,1784,895,1774,894,1772,898,1769,902,1762,912,1754,919,1747,918,1738,917,1731,920,1729,921,1716,932,1704,939,1702,947,1700,951,1700,966,L,1700,985,Q,1700,990,1704,993,1706,994,1712,997,L,1737,1022,1766,1039,Q,1782,1045,1782,1057,L,1782,1104,Q,1782,1107,1788,1112,1795,1118,1799,1123,1806,1134,1806,1145,1806,1154,1791,1161,1783,1164,1780,1170,1775,1181,1773,1183,1763,1194,1717,1194,1705,1194,1701,1184,1695,1173,1692,1171,1675,1170,1669,1169,1665,1168,1655,1153,1642,1129,1636,1118,1624,1099,1607,1099,1589,1099,1586,1104,1584,1107,1574,1123,1557,1127,1551,1134,1548,1140,1548,1155,1548,1166,1549,1167,1557,1171,1563,1180,1567,1185,1570,1196,1573,1205,1579,1214,1594,1234,1597,1238,1604,1253,1612,1280,1613,1284,1625,1311,1636,1333,1635,1347,1633,1371,1637,1410,1637,1415,1623,1421,1605,1426,1603,1428,1589,1436,1558,1440,1536,1442,1457,1442,L,1457,1449,Q,1462,1452,1478,1452,1491,1454,1489,1469,1496,1475,1513,1479,1520,1481,1520,1493,1520,1508,1491,1514,1462,1520,1462,1537,1462,1542,1466,1543,1470,1543,1471,1551,L,1471,1585,Q,1471,1591,1470,1595,1471,1598,1471,1603,1472,1609,1474,1615,1474,1616,1450,1632,1428,1646,1427,1649,L,1427,1656,Q,1437,1654,1441,1664,1446,1679,1447,1680,1449,1681,1455,1684,1460,1687,1461,1691,L,1464,1709,Q,1469,1734,1470,1753,1470,1767,1469,1799,1469,1810,1467,1818,1466,1820,1457,1833,1457,1834,1450,1852,1447,1864,1441,1868,1423,1880,1408,1889,1402,1894,1402,1914,1402,1922,1412,1927,1417,1930,1428,1936,1431,1938,1452,1964,1459,1972,1476,1985,1491,1999,1491,2018,1491,2025,1487,2028,1484,2030,1479,2033,1468,2041,1462,2055,1454,2062,1434,2062,1413,2061,1408,2061,1381,2061,1383,2103,1383,2132,1372,2157,1409,2168,1425,2176,1445,2185,1465,2185,1484,2183,1523,2183,1563,2183,1588,2183,1608,2183,1621,2180,1634,2177,1662,2170,1689,2161,1704,2163,1742,2163,1755,2169,1778,2176,1819,2181,1836,2183,1879,2195,1914,2204,1938,2204,L,2068,2204,Q,2077,2204,2090,2203,2103,2206,2117,2224,2120,2227,2131,2244,2140,2259,2163,2261,L,2176,2253,2178,2250,Q,2179,2247,2185,2245,2191,2242,2194,2238,2197,2233,2209,2228,2215,2226,2221,2224,2229,2207,2240,2199,2269,2167,2286,2149,2316,2119,2343,2120,L,2344,2120,Q,2382,2109,2429,2087,2446,2080,2461,2074,2451,1989,2449,1935,L,2442,1933,2400,1938,Q,2390,1938,2379,1927,2367,1915,2358,1914,2328,1908,2323,1902,2321,1898,2321,1868,2321,1825,2374,1802,2427,1779,2427,1714,2428,1699,2428,1689,2427,1669,2423,1663,2403,1636,2403,1634,2399,1609,2396,1575,2394,1546,2390,1534,2347,1536,2329,1537,2295,1538,2282,1503,2280,1498,2263,1486,2246,1475,2241,1466,2236,1459,2237,1443,L,2238,1421,Q,2243,1362,2315,1300,2389,1234,2389,1223,2389,1211,2383,1170,2375,1128,2375,1127,2375,1116,2384,1111,2396,1100,2403,1090,2406,1087,2406,1065,2407,1045,2413,1037,2391,1024,2385,991,Q,2383,950,2381,937,Z]],label:"Matara District",shortLabel:"MH",labelPosition:[191.6,150.1],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"southernsrilankaprovince",type:"maps"}}})});