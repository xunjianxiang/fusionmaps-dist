/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Hakkari.1.02-22-2017 12:07:28
 */

let M = 'M', // SVG MoveTo
  L = 'L', // SVG LineTo
  Z = 'Z', // SVG ClosePath
  Q = 'Q', // SVG Quadratic Beizer
  LFT = 'left',
  RGT = 'right',
  CEN = 'center',
  MID = 'middle',
  TOP = 'top',
  BTM = 'bottom',
  geodefinitions = [{
  "name": "Hakkari",
  "revision": 1,
  "standaloneInit": true,
  "baseWidth": 500,
  "baseHeight": 376,
  "baseScaleFactor": 10,
  "entities": {
    "TR.HK.CU": {
      "outlines": [
        [M, 1311, 2062, Q, 1307, 2060, 1299, 2059, 1292, 2057, 1286, 2058, 1242, 2061, 1211, 2056, 1180, 2052, 1169, 2052, 1157, 2052, 1156, 2052, 1155, 2053, 1153, 2053, 1152, 2053, 1143, 2054, 1134, 2054, 1128, 2054, 1123, 2054, 1115, 2058, 1108, 2061, 1105, 2062, 1101, 2063, 1082, 2071, 1062, 2078, 1058, 2080, 1057, 2081, 1014, 2099, 987, 2110, 968, 2121, 961, 2125, 947, 2131, 934, 2136, 925, 2142, 914, 2148, 909, 2150, 902, 2153, 897, 2155, 890, 2158, 882, 2159, 874, 2159, 871, 2160, 856, 2167, 846, 2171, 828, 2178, 816, 2180, 804, 2182, 790, 2188, 778, 2194, 772, 2194, 763, 2194, 759, 2191, 756, 2188, 751, 2188, L, 744, 2188, Q, 738, 2188, 726, 2184, 713, 2180, 708, 2181, 701, 2181, 684, 2174, 669, 2168, 664, 2161, 659, 2154, 650, 2139, 642, 2125, 637, 2115, 632, 2104, 626, 2095, 619, 2085, 604, 2065, 589, 2044, 587, 2038, 585, 2032, 577, 2021, 569, 2009, 564, 1996, 561, 1989, 560, 1976, L, 560, 1959, Q, 559, 1957, 559, 1956, 546, 1921, 538, 1883, 530, 1838, 524, 1810, 512, 1755, 513, 1730, 513, 1719, 504, 1694, 502, 1687, 490, 1688, 476, 1689, 472, 1688, 467, 1688, 445, 1685, 423, 1681, 415, 1680, 414, 1680, 414, 1680, 399, 1681, 380, 1690, 351, 1703, 345, 1705, 333, 1709, 328, 1711, 319, 1714, 311, 1713, 303, 1712, 281, 1713, 264, 1714, 262, 1713, L, 262, 1713, Q, 225, 1713, 224, 1713, 207, 1713, 198, 1709, 194, 1707, 185, 1705, 175, 1702, 166, 1699, 157, 1693, 154, 1692, 152, 1691, 147, 1691, 142, 1691, 139, 1690, 102, 1675, 85, 1666, 80, 1663, 60, 1648, 44, 1635, 38, 1635, L, 38, 1748, Q, 47, 1763, 48, 1778, 48, 1785, 48, 1801, 48, 1802, 48, 1804, 48, 1811, 47, 1830, 46, 1852, 49, 1867, 56, 1898, 56, 1926, 55, 1970, 56, 1985, 56, 2021, 60, 2050, 77, 2083, 77, 2084, 88, 2102, 102, 2120, 112, 2132, 125, 2155, 138, 2178, 149, 2193, 159, 2205, 171, 2223, 183, 2243, 191, 2253, 199, 2264, 214, 2284, 226, 2300, 237, 2310, 238, 2311, 239, 2312, 260, 2332, 292, 2363, 324, 2394, 336, 2403, 349, 2412, 382, 2450, 415, 2487, 436, 2504, 445, 2511, 462, 2515, 490, 2522, 494, 2523, 505, 2527, 511, 2527, 517, 2528, 532, 2527, 538, 2526, 548, 2529, 562, 2534, 566, 2534, 577, 2536, 599, 2541, 620, 2546, 633, 2548, 638, 2549, 649, 2549, 660, 2548, 666, 2549, 669, 2549, 683, 2554, 694, 2557, 703, 2557, 704, 2556, 705, 2556, 709, 2556, 717, 2557, 727, 2557, 733, 2556, 741, 2555, 748, 2559, 758, 2563, 764, 2564, L, 864, 2564, 888, 2573, 1085, 2573, Q, 1087, 2574, 1089, 2574, 1092, 2574, 1092, 2574, 1093, 2574, 1100, 2577, L, 1118, 2581, 1200, 2581, Q, 1208, 2583, 1217, 2585, 1224, 2587, 1233, 2586, 1242, 2585, 1251, 2585, 1255, 2586, 1267, 2587, 1280, 2587, 1304, 2586, 1323, 2586, 1334, 2592, L, 1432, 2592, Q, 1434, 2591, 1441, 2589, 1448, 2586, 1451, 2586, L, 1552, 2586, Q, 1559, 2581, 1559, 2580, L, 1656, 2580, Q, 1672, 2577, 1677, 2577, 1679, 2577, 1684, 2575, 1688, 2573, 1699, 2571, L, 1737, 2571, Q, 1740, 2565, 1752, 2547, 1755, 2542, 1761, 2535, 1769, 2528, 1771, 2524, 1793, 2494, 1804, 2475, L, 1804, 2475, Q, 1806, 2472, 1809, 2468, 1812, 2464, 1817, 2459, 1821, 2454, 1824, 2449, L, 1831, 2432, Q, 1838, 2420, 1841, 2415, 1854, 2383, 1872, 2356, 1873, 2353, 1879, 2340, 1882, 2333, 1890, 2327, 1904, 2313, 1911, 2307, 1941, 2281, 1955, 2266, L, 1966, 2254, Q, 1968, 2253, 1981, 2244, 1986, 2239, 1990, 2236, 1984, 2223, 1962, 2163, 1954, 2138, 1947, 2123, 1944, 2115, 1937, 2107, 1933, 2102, 1933, 2095, 1933, 2093, 1934, 2088, 1921, 2089, 1898, 2103, 1874, 2119, 1865, 2124, 1844, 2134, 1832, 2141, 1811, 2153, 1801, 2162, 1785, 2176, 1771, 2175, 1749, 2173, 1727, 2174, 1723, 2175, 1701, 2174, 1690, 2174, 1680, 2178, 1667, 2183, 1643, 2183, 1605, 2183, 1586, 2182, 1586, 2182, 1585, 2182, 1579, 2180, 1574, 2176, 1568, 2170, 1564, 2167, L, 1498, 2115, Q, 1468, 2091, 1453, 2088, 1452, 2088, 1438, 2083, 1430, 2080, 1423, 2080, 1420, 2080, 1410, 2077, 1401, 2074, 1397, 2074, 1380, 2075, 1370, 2075, 1352, 2074, 1341, 2068, 1340, 2066, 1326, 2065, Q, 1313, 2063, 1311, 2062, Z]
      ],
      "label": "Çukurca",
      "shortLabel": "CU",
      "labelPosition": [120.9, 228.9],
      "labelAlignment": [CEN, MID]
    },
    "TR.HK.HK": {
      "outlines": [
        [M, 1734, 376, Q, 1732, 376, 1730, 377, L, 1729, 377, Q, 1722, 376, 1708, 373, 1692, 369, 1674, 370, 1637, 372, 1616, 366, 1602, 363, 1587, 363, 1567, 364, 1556, 363, 1552, 362, 1540, 358, 1531, 355, 1526, 355, 1515, 355, 1510, 355, 1501, 355, 1496, 355, 1469, 351, 1446, 343, 1406, 328, 1392, 322, 1344, 302, 1335, 300, 1332, 299, 1309, 288, 1291, 280, 1281, 280, 1272, 280, 1267, 284, 1262, 287, 1255, 287, 1239, 286, 1232, 291, 1223, 296, 1209, 296, 1196, 296, 1184, 303, 1178, 307, 1157, 306, 1134, 305, 1131, 306, 1112, 311, 1085, 308, L, 821, 308, Q, 810, 300, 787, 300, 758, 301, 751, 299, 747, 298, 740, 295, 735, 292, 732, 292, L, 715, 291, Q, 702, 287, 697, 285, 688, 283, 681, 283, 664, 283, 630, 281, 602, 278, 591, 279, 582, 280, 572, 276, 562, 271, 555, 271, 539, 271, 535, 266, 530, 261, 521, 261, 514, 261, 502, 266, 491, 270, 484, 269, 481, 269, 470, 274, 459, 279, 452, 278, 446, 277, 435, 281, 423, 284, 419, 286, 414, 287, 409, 289, 405, 292, 402, 292, 400, 293, 386, 292, 376, 292, 376, 293, 336, 293, 333, 290, 330, 286, 301, 286, 278, 286, 269, 287, 269, 288, 263, 330, 261, 337, 252, 365, 244, 387, 247, 408, 246, 411, 233, 448, 231, 454, 228, 466, 226, 477, 223, 483, 210, 509, 188, 548, 182, 556, 166, 578, 154, 594, 147, 607, 147, 608, 146, 609, 146, 616, 143, 633, 139, 654, 139, 665, 140, 681, 136, 697, 131, 717, 131, 724, 132, 735, 129, 753, 125, 774, 125, 782, 125, 790, 125, 810, 125, 824, 125, 834, 124, 836, 124, 837, 124, 847, 121, 869, 117, 894, 117, 912, 118, 917, 111, 929, 110, 931, 110, 938, 110, 943, 109, 946, 105, 952, 105, 956, 104, 958, 104, 966, 104, 969, 104, 975, 104, 982, 102, 986, 91, 1012, 82, 1053, 70, 1103, 64, 1125, 64, 1126, 64, 1127, 64, 1127, 64, 1129, 58, 1147, 57, 1171, 57, 1182, 50, 1195, 40, 1218, 39, 1220, L, 39, 1538, Q, 39, 1539, 39, 1541, 39, 1543, 38, 1544, L, 38, 1635, Q, 44, 1635, 60, 1648, 80, 1663, 85, 1666, 102, 1675, 139, 1690, 142, 1691, 147, 1691, 152, 1691, 154, 1692, 157, 1693, 166, 1699, 175, 1702, 185, 1705, 194, 1707, 198, 1709, 207, 1713, 224, 1713, 225, 1713, 262, 1713, L, 262, 1713, Q, 264, 1714, 281, 1713, 303, 1712, 311, 1713, 319, 1714, 328, 1711, 333, 1709, 345, 1705, 351, 1703, 380, 1690, 399, 1681, 414, 1680, 414, 1680, 415, 1680, 423, 1681, 445, 1685, 467, 1688, 472, 1688, 476, 1689, 490, 1688, 502, 1687, 504, 1694, 513, 1719, 513, 1730, 512, 1755, 524, 1810, 530, 1838, 538, 1883, 546, 1921, 559, 1956, 559, 1957, 560, 1959, L, 560, 1976, Q, 561, 1989, 564, 1996, 569, 2009, 577, 2021, 585, 2032, 587, 2038, 589, 2044, 604, 2065, 619, 2085, 626, 2095, 632, 2104, 637, 2115, 642, 2125, 650, 2139, 659, 2154, 664, 2161, 669, 2168, 684, 2174, 701, 2181, 708, 2181, 713, 2180, 726, 2184, 738, 2188, 744, 2188, L, 751, 2188, Q, 756, 2188, 759, 2191, 763, 2194, 772, 2194, 778, 2194, 790, 2188, 804, 2182, 816, 2180, 828, 2178, 846, 2171, 856, 2167, 871, 2160, 874, 2159, 882, 2159, 890, 2158, 897, 2155, 902, 2153, 909, 2150, 914, 2148, 925, 2142, 934, 2136, 947, 2131, 961, 2125, 968, 2121, 987, 2110, 1014, 2099, 1057, 2081, 1058, 2080, 1062, 2078, 1082, 2071, 1101, 2063, 1105, 2062, 1108, 2061, 1115, 2058, 1123, 2054, 1128, 2054, 1134, 2054, 1143, 2054, 1152, 2053, 1153, 2053, 1155, 2053, 1156, 2052, 1157, 2052, 1169, 2052, 1180, 2052, 1211, 2056, 1242, 2061, 1286, 2058, 1292, 2057, 1299, 2059, 1307, 2060, 1311, 2062, 1313, 2063, 1326, 2065, 1340, 2066, 1341, 2068, 1352, 2074, 1370, 2075, 1380, 2075, 1397, 2074, 1401, 2074, 1410, 2077, 1420, 2080, 1423, 2080, 1430, 2080, 1438, 2083, 1452, 2088, 1453, 2088, 1468, 2091, 1498, 2115, L, 1564, 2167, Q, 1568, 2170, 1574, 2176, 1579, 2180, 1585, 2182, 1586, 2182, 1586, 2182, 1605, 2183, 1643, 2183, 1667, 2183, 1680, 2178, 1690, 2174, 1701, 2174, 1723, 2175, 1727, 2174, 1749, 2173, 1771, 2175, 1785, 2176, 1801, 2162, 1811, 2153, 1832, 2141, 1844, 2134, 1865, 2124, 1874, 2119, 1898, 2103, 1921, 2089, 1934, 2088, 1935, 2083, 1937, 2073, 1941, 2053, 1944, 2050, 1958, 2022, 1960, 2006, 1960, 2005, 1961, 2003, 1964, 1993, 1971, 1977, 1977, 1963, 1981, 1949, 1984, 1940, 1991, 1921, 2001, 1895, 2003, 1891, 2005, 1884, 2024, 1833, 2035, 1802, 2036, 1773, 2041, 1729, 2041, 1713, 2039, 1683, 2047, 1643, 2049, 1633, 2050, 1612, 2052, 1592, 2052, 1581, 2052, 1573, 2055, 1552, 2058, 1534, 2059, 1527, 2058, 1526, 2058, 1524, 2056, 1520, 2053, 1513, 2049, 1501, 2048, 1496, 2043, 1476, 2040, 1465, 2026, 1418, 2020, 1400, 2005, 1353, 2002, 1340, 1995, 1314, 1993, 1308, 1989, 1300, 1987, 1295, 1984, 1288, 1983, 1284, 1983, 1283, 1983, 1282, 1975, 1225, 1928, 1142, 1874, 1056, 1857, 1019, 1857, 1018, 1856, 1017, 1836, 982, 1809, 945, 1801, 933, 1766, 890, 1731, 846, 1702, 797, 1674, 750, 1656, 727, 1647, 702, 1645, 696, 1641, 683, 1640, 668, 1639, 655, 1635, 640, 1629, 623, 1627, 612, 1624, 605, 1623, 600, 1621, 592, 1621, 586, 1621, 583, 1619, 573, 1616, 562, 1616, 559, 1615, 555, 1615, 544, 1615, 534, 1614, 528, 1613, 521, 1610, 514, 1608, 508, 1608, 502, 1608, 484, 1636, 469, 1647, 462, 1654, 454, 1658, 450, 1667, 439, 1667, 438, 1668, 436, 1670, 433, 1677, 429, 1681, 427, 1688, 423, L, 1695, 414, Q, 1701, 407, 1703, 405, 1708, 401, 1723, 393, Q, 1734, 386, 1734, 376, Z]
      ],
      "label": "Hakkâri",
      "shortLabel": "HK",
      "labelPosition": [104.8, 122.7],
      "labelAlignment": [CEN, MID]
    },
    "TR.HK.SE": {
      "outlines": [
        [M, 3863, 1253, Q, 3855, 1253, 3848, 1257, 3843, 1259, 3831, 1261, 3814, 1262, 3812, 1263, 3800, 1267, 3795, 1267, 3780, 1268, 3778, 1269, 3768, 1274, 3761, 1274, 3752, 1274, 3744, 1274, 3742, 1274, 3737, 1277, L, 3728, 1280, Q, 3724, 1281, 3719, 1281, 3713, 1281, 3711, 1282, 3703, 1283, 3694, 1286, 3682, 1289, 3680, 1290, 3670, 1292, 3662, 1295, 3652, 1300, 3645, 1304, 3644, 1305, 3637, 1305, 3630, 1306, 3629, 1306, 3625, 1307, 3620, 1309, 3614, 1311, 3613, 1311, 3609, 1312, 3600, 1315, 3592, 1318, 3585, 1320, 3578, 1320, 3572, 1325, 3565, 1332, 3558, 1337, 3555, 1339, 3528, 1358, 3512, 1369, 3502, 1377, 3492, 1385, 3479, 1393, 3462, 1405, 3452, 1412, 3437, 1421, 3425, 1432, 3411, 1445, 3406, 1450, 3404, 1451, 3404, 1452, 3399, 1456, 3387, 1464, 3370, 1476, 3369, 1477, 3346, 1490, 3338, 1498, 3331, 1504, 3319, 1512, 3306, 1520, 3302, 1523, 3299, 1526, 3293, 1528, 3288, 1531, 3285, 1533, 3276, 1539, 3269, 1545, L, 3236, 1570, Q, 3229, 1575, 3222, 1585, 3219, 1589, 3215, 1592, 3210, 1596, 3208, 1599, 3204, 1602, 3196, 1613, 3188, 1623, 3182, 1628, 3171, 1641, 3168, 1645, 3164, 1649, 3161, 1653, 3159, 1658, 3157, 1662, L, 3145, 1700, Q, 3145, 1701, 3140, 1721, 3137, 1734, 3139, 1745, 3139, 1748, 3131, 1765, 3131, 1771, 3128, 1776, 3125, 1782, 3125, 1786, 3121, 1818, 3107, 1819, 3096, 1820, 3067, 1829, 3040, 1838, 3026, 1839, 3011, 1841, 3005, 1844, 3001, 1845, 2996, 1845, 2990, 1845, 2986, 1846, L, 2969, 1850, 2953, 1859, Q, 2892, 1921, 2883, 1930, 2876, 1938, 2873, 1942, 2872, 1943, 2868, 1948, 2867, 1949, 2864, 1951, 2860, 1954, 2860, 1956, 2860, 1958, 2860, 1964, 2860, 1969, 2863, 1973, 2865, 1977, 2865, 1988, 2865, 1996, 2864, 2009, 2864, 2021, 2866, 2028, 2868, 2036, 2868, 2057, 2868, 2080, 2872, 2086, 2873, 2089, 2876, 2096, 2880, 2104, 2880, 2106, 2880, 2110, 2872, 2131, 2867, 2141, 2852, 2177, 2846, 2189, 2843, 2198, 2840, 2208, 2820, 2253, 2800, 2298, 2792, 2318, L, 2793, 2318, Q, 2802, 2322, 2809, 2327, L, 2844, 2341, Q, 2847, 2341, 2852, 2343, 2858, 2346, 2861, 2349, L, 2869, 2365, Q, 2884, 2389, 2891, 2398, 2907, 2422, 2916, 2437, L, 2938, 2473, Q, 2940, 2477, 2945, 2486, 2949, 2494, 2952, 2497, 2957, 2502, 2962, 2511, 2968, 2520, 2969, 2525, 2970, 2537, 2973, 2554, 2978, 2575, 2979, 2585, 2981, 2597, 2981, 2620, 2982, 2638, 2986, 2652, 2993, 2683, 2993, 2686, 2994, 2690, 2992, 2711, L, 2992, 2732, Q, 2987, 2738, 2987, 2749, 2987, 2769, 2987, 2771, 2986, 2781, 2980, 2790, 2980, 2791, 2980, 2792, 2978, 2813, 2977, 2839, 2974, 2861, 2953, 2861, L, 2918, 2873, Q, 2903, 2879, 2897, 2881, 2891, 2883, 2880, 2886, 2870, 2889, 2858, 2902, 2846, 2914, 2838, 2934, 2832, 2946, 2826, 2963, 2823, 2973, 2815, 2998, 2800, 3022, 2767, 3089, 2735, 3154, 2735, 3159, 2735, 3162, 2748, 3193, 2761, 3223, 2764, 3229, 2770, 3238, 2779, 3260, 2788, 3282, 2794, 3293, 2805, 3322, 2817, 3349, 2824, 3364, 2840, 3403, 2855, 3441, 2864, 3459, 2873, 3477, 2881, 3492, 2888, 3507, 2889, 3507, L, 2889, 3509, Q, 2892, 3516, 2896, 3531, 2902, 3548, 2906, 3558, 2909, 3562, 2916, 3580, 2922, 3597, 2925, 3603, 2930, 3612, 2936, 3626, 2943, 3641, 2947, 3650, 2950, 3655, 2952, 3658, 2956, 3661, 2961, 3662, 2966, 3663, 2972, 3666, 2977, 3667, 2981, 3671, 2987, 3674, 3001, 3677, 3017, 3679, 3026, 3682, 3036, 3686, 3051, 3689, 3065, 3692, 3076, 3696, 3099, 3705, 3125, 3712, 3154, 3720, 3166, 3724, 3167, 3725, 3168, 3725, 3172, 3725, 3177, 3725, 3183, 3725, 3185, 3722, 3191, 3708, 3193, 3704, L, 3193, 3704, Q, 3199, 3685, 3215, 3655, 3233, 3621, 3240, 3608, 3248, 3594, 3253, 3585, 3263, 3567, 3262, 3560, 3268, 3532, 3273, 3510, 3275, 3483, 3282, 3463, 3282, 3445, 3283, 3437, 3285, 3424, 3297, 3423, 3303, 3423, 3308, 3419, 3316, 3413, 3319, 3411, 3323, 3409, 3342, 3406, 3349, 3403, 3368, 3394, 3386, 3386, 3394, 3384, 3410, 3378, 3441, 3365, 3472, 3352, 3485, 3348, 3497, 3344, 3531, 3333, 3563, 3324, 3578, 3318, 3578, 3318, 3579, 3317, 3597, 3310, 3623, 3294, 3650, 3277, 3666, 3263, 3682, 3250, 3712, 3232, 3741, 3214, 3771, 3195, 3800, 3177, 3856, 3126, 3886, 3099, 3928, 3060, 3929, 3059, 3929, 3058, 3964, 3034, 3987, 3012, 4013, 2986, 4034, 2953, 4042, 2941, 4058, 2923, 4078, 2901, 4083, 2895, 4093, 2882, 4108, 2869, 4116, 2861, 4129, 2848, 4150, 2839, 4187, 2821, 4222, 2803, 4240, 2792, 4257, 2782, 4296, 2761, 4336, 2740, 4339, 2740, L, 4352, 2743, Q, 4366, 2747, 4370, 2747, 4376, 2747, 4384, 2750, 4394, 2753, 4398, 2754, 4408, 2756, 4426, 2757, 4446, 2759, 4462, 2761, 4472, 2762, 4495, 2768, 4520, 2774, 4529, 2776, 4538, 2777, 4565, 2783, 4582, 2787, 4604, 2788, 4617, 2788, 4640, 2794, 4661, 2800, 4669, 2799, 4676, 2798, 4701, 2806, 4717, 2812, 4731, 2818, 4789, 2840, 4801, 2851, 4813, 2862, 4828, 2893, 4831, 2898, 4835, 2904, 4842, 2915, 4847, 2915, 4853, 2915, 4855, 2884, 4856, 2851, 4857, 2845, 4859, 2831, 4864, 2811, 4869, 2790, 4872, 2776, 4874, 2759, 4885, 2722, 4897, 2686, 4899, 2663, 4900, 2645, 4914, 2608, 4927, 2575, 4926, 2552, L, 4947, 2464, Q, 4953, 2424, 4960, 2406, 4965, 2396, 4965, 2363, 4965, 2358, 4964, 2351, 4963, 2345, 4963, 2342, 4963, 2329, 4959, 2304, 4956, 2283, 4958, 2262, 4959, 2244, 4947, 2225, 4931, 2199, 4931, 2197, 4921, 2165, 4888, 2129, 4863, 2101, 4851, 2093, 4839, 2086, 4727, 1987, 4615, 1888, 4558, 1836, L, 4434, 1727, Q, 4416, 1710, 4405, 1701, 4386, 1684, 4373, 1675, 4365, 1666, 4360, 1661, 4352, 1650, 4342, 1652, 4335, 1653, 4322, 1649, 4310, 1645, 4305, 1645, 4303, 1644, 4302, 1645, 4292, 1641, 4287, 1640, 4275, 1637, 4268, 1637, 4260, 1637, 4246, 1633, 4227, 1628, 4222, 1627, L, 4152, 1591, Q, 4142, 1588, 4140, 1577, 4140, 1575, 4140, 1557, L, 4140, 1510, Q, 4140, 1488, 4138, 1463, 4136, 1437, 4136, 1423, 4136, 1398, 4137, 1386, L, 4136, 1380, 4136, 1230, Q, 4135, 1226, 4134, 1220, 4112, 1220, 4105, 1221, 4102, 1221, 4091, 1225, 4080, 1228, 4073, 1228, 4057, 1228, 4038, 1231, 4016, 1234, 4007, 1235, 3983, 1236, 3969, 1235, 3965, 1234, 3962, 1236, 3958, 1239, 3954, 1239, L, 3937, 1241, Q, 3928, 1243, 3922, 1244, 3909, 1243, 3905, 1245, 3900, 1246, 3891, 1252, 3889, 1253, 3883, 1253, 3879, 1253, 3877, 1253, 3875, 1253, 3875, 1253, Z]
      ],
      "label": "Semdinli",
      "shortLabel": "SE",
      "labelPosition": [385, 227.7],
      "labelAlignment": [CEN, MID]
    },
    "TR.HK.YU": {
      "outlines": [
        [M, 4094, 121, Q, 4093, 121, 4085, 134, 4077, 148, 4075, 151, 4073, 154, 4059, 169, 4045, 183, 4029, 200, 4012, 217, 4005, 229, 3998, 241, 3993, 247, 3988, 253, 3980, 261, 3972, 269, 3969, 276, 3967, 283, 3965, 285, 3965, 286, 3950, 299, 3945, 303, 3940, 311, 3934, 319, 3931, 322, 3910, 343, 3901, 352, 3886, 366, 3875, 381, 3854, 414, 3808, 450, 3753, 492, 3727, 513, 3710, 528, 3686, 547, 3662, 566, 3649, 577, 3643, 582, 3630, 594, 3616, 608, 3611, 612, 3594, 628, 3591, 630, 3589, 631, 3573, 631, 3573, 635, 3560, 631, 3535, 624, 3533, 623, 3525, 622, 3513, 622, 3500, 623, 3493, 623, L, 3450, 623, Q, 3445, 623, 3433, 619, 3422, 615, 3417, 615, 3415, 615, 3414, 615, L, 3363, 615, Q, 3355, 615, 3340, 610, 3326, 606, 3315, 607, 3300, 608, 3281, 608, 3260, 607, 3249, 607, 3226, 606, 3219, 604, 3213, 602, 3201, 602, 3178, 602, 3054, 659, 3029, 671, 2983, 689, 2951, 702, 2944, 706, 2931, 712, 2926, 714, 2912, 722, 2910, 722, 2908, 722, 2866, 699, 2822, 674, 2822, 669, 2822, 666, 2830, 654, 2838, 643, 2840, 640, 2844, 633, 2853, 620, 2855, 617, 2857, 608, 2861, 595, 2863, 591, 2864, 588, 2870, 579, 2875, 570, 2876, 566, 2878, 557, 2879, 552, 2881, 544, 2887, 535, 2891, 528, 2902, 500, 2914, 471, 2916, 466, 2917, 464, 2930, 442, 2939, 428, 2941, 419, 2944, 403, 2932, 358, 2919, 304, 2918, 281, 2916, 263, 2911, 249, 2903, 222, 2902, 218, 2900, 211, 2900, 198, 2900, 183, 2900, 177, 2896, 157, 2891, 147, 2886, 143, 2865, 123, 2842, 99, 2826, 87, 2810, 74, 2800, 63, 2790, 51, 2778, 42, 2765, 32, 2763, 32, 2763, 32, 2751, 44, 2737, 58, 2731, 63, 2725, 68, 2706, 79, 2690, 88, 2686, 93, 2673, 108, 2645, 128, 2612, 153, 2604, 160, 2554, 204, 2525, 220, 2513, 228, 2496, 236, 2479, 244, 2472, 247, 2466, 250, 2446, 261, 2436, 267, 2428, 269, 2426, 270, 2425, 270, 2383, 290, 2359, 305, 2337, 320, 2329, 324, 2316, 331, 2297, 331, 2276, 333, 2263, 327, 2256, 323, 2246, 322, 2236, 321, 2232, 319, 2215, 310, 2170, 310, 2161, 310, 2151, 307, 2140, 302, 2137, 302, 2132, 301, 2119, 297, 2110, 294, 2104, 294, 2092, 294, 2085, 294, 2072, 295, 2065, 294, 2056, 292, 2048, 289, 2045, 287, 2033, 287, 1987, 289, 1962, 288, 1940, 287, 1928, 284, 1918, 282, 1904, 282, 1887, 282, 1858, 299, 1825, 321, 1811, 330, 1782, 352, 1769, 360, 1750, 373, 1734, 376, 1734, 386, 1723, 393, 1708, 401, 1703, 405, 1701, 407, 1695, 414, L, 1688, 423, Q, 1681, 427, 1677, 429, 1670, 433, 1668, 436, 1667, 438, 1667, 439, 1658, 450, 1654, 454, 1647, 462, 1636, 469, 1608, 484, 1608, 502, 1608, 508, 1610, 514, 1613, 521, 1614, 528, 1615, 534, 1615, 544, 1615, 555, 1616, 559, 1616, 562, 1619, 573, 1621, 583, 1621, 586, 1621, 592, 1623, 600, 1624, 605, 1627, 612, 1629, 623, 1635, 640, 1639, 655, 1640, 668, 1641, 683, 1645, 696, 1647, 702, 1656, 727, 1674, 750, 1702, 797, 1731, 846, 1766, 890, 1801, 933, 1809, 945, 1836, 982, 1856, 1017, 1857, 1018, 1857, 1019, 1874, 1056, 1928, 1142, 1975, 1225, 1983, 1282, 1983, 1283, 1983, 1284, 1984, 1288, 1987, 1295, 1989, 1300, 1993, 1308, 1995, 1314, 2002, 1340, 2005, 1353, 2020, 1400, 2026, 1418, 2040, 1465, 2043, 1476, 2048, 1496, 2049, 1501, 2053, 1513, 2056, 1520, 2058, 1524, 2058, 1526, 2059, 1527, 2058, 1534, 2055, 1552, 2052, 1573, 2052, 1581, 2052, 1592, 2050, 1612, 2049, 1633, 2047, 1643, 2039, 1683, 2041, 1713, 2041, 1729, 2036, 1773, 2035, 1802, 2024, 1833, 2005, 1884, 2003, 1891, 2001, 1895, 1991, 1921, 1984, 1940, 1981, 1949, 1977, 1963, 1971, 1977, 1964, 1993, 1961, 2003, 1960, 2005, 1960, 2006, 1958, 2022, 1944, 2050, 1941, 2053, 1937, 2073, 1935, 2083, 1934, 2088, 1933, 2093, 1933, 2095, 1933, 2102, 1937, 2107, 1944, 2115, 1947, 2123, 1954, 2138, 1962, 2163, 1984, 2223, 1990, 2236, 2001, 2226, 2007, 2220, 2012, 2212, 2032, 2197, 2041, 2188, 2059, 2171, 2070, 2159, 2074, 2157, 2075, 2156, 2078, 2156, 2079, 2156, 2081, 2156, L, 2091, 2155, Q, 2094, 2154, 2099, 2152, 2104, 2149, 2108, 2149, L, 2126, 2149, Q, 2129, 2149, 2134, 2149, 2138, 2149, 2143, 2147, 2148, 2145, 2154, 2143, 2158, 2141, 2162, 2141, L, 2180, 2141, Q, 2183, 2141, 2189, 2140, 2194, 2139, 2197, 2139, 2198, 2139, 2213, 2139, 2215, 2139, 2223, 2142, 2225, 2142, 2228, 2142, 2231, 2142, 2234, 2145, 2235, 2146, 2238, 2149, 2241, 2150, 2243, 2150, 2244, 2150, 2248, 2150, 2252, 2150, 2254, 2151, 2257, 2153, 2267, 2154, 2272, 2156, 2278, 2161, 2285, 2164, 2294, 2164, 2340, 2161, 2361, 2165, L, 2460, 2165, Q, 2467, 2169, 2487, 2182, 2508, 2193, 2523, 2198, 2540, 2203, 2581, 2222, 2592, 2226, 2642, 2251, 2642, 2252, 2657, 2257, 2669, 2262, 2674, 2265, L, 2703, 2281, Q, 2722, 2287, 2741, 2297, 2752, 2302, 2759, 2305, L, 2767, 2309, Q, 2770, 2309, 2777, 2312, 2782, 2314, 2792, 2318, 2800, 2298, 2820, 2253, 2840, 2208, 2843, 2198, 2846, 2189, 2852, 2177, 2867, 2141, 2872, 2131, 2880, 2110, 2880, 2106, 2880, 2104, 2876, 2096, 2873, 2089, 2872, 2086, 2868, 2080, 2868, 2057, 2868, 2036, 2866, 2028, 2864, 2021, 2864, 2009, 2865, 1996, 2865, 1988, 2865, 1977, 2863, 1973, 2860, 1969, 2860, 1964, 2860, 1958, 2860, 1956, 2860, 1954, 2864, 1951, 2867, 1949, 2868, 1948, 2872, 1943, 2873, 1942, 2876, 1938, 2883, 1930, 2892, 1921, 2953, 1859, L, 2969, 1850, 2986, 1846, Q, 2990, 1845, 2996, 1845, 3001, 1845, 3005, 1844, 3011, 1841, 3026, 1839, 3040, 1838, 3067, 1829, 3096, 1820, 3107, 1819, 3121, 1818, 3125, 1786, 3125, 1782, 3128, 1776, 3131, 1771, 3131, 1765, 3139, 1748, 3139, 1745, 3137, 1734, 3140, 1721, 3145, 1701, 3145, 1700, L, 3157, 1662, Q, 3159, 1658, 3161, 1653, 3164, 1649, 3168, 1645, 3171, 1641, 3182, 1628, 3188, 1623, 3196, 1613, 3204, 1602, 3208, 1599, 3210, 1596, 3215, 1592, 3219, 1589, 3222, 1585, 3229, 1575, 3236, 1570, L, 3269, 1545, Q, 3276, 1539, 3285, 1533, 3288, 1531, 3293, 1528, 3299, 1526, 3302, 1523, 3306, 1520, 3319, 1512, 3331, 1504, 3338, 1498, 3346, 1490, 3369, 1477, 3370, 1476, 3387, 1464, 3399, 1456, 3404, 1452, 3404, 1451, 3406, 1450, 3411, 1445, 3425, 1432, 3437, 1421, 3452, 1412, 3462, 1405, 3479, 1393, 3492, 1385, 3502, 1377, 3512, 1369, 3528, 1358, 3555, 1339, 3558, 1337, 3565, 1332, 3572, 1325, 3578, 1320, 3585, 1320, 3592, 1318, 3600, 1315, 3609, 1312, 3613, 1311, 3614, 1311, 3620, 1309, 3625, 1307, 3629, 1306, 3630, 1306, 3637, 1305, 3644, 1305, 3645, 1304, 3652, 1300, 3662, 1295, 3670, 1292, 3680, 1290, 3682, 1289, 3694, 1286, 3703, 1283, 3711, 1282, 3713, 1281, 3719, 1281, 3724, 1281, 3728, 1280, L, 3737, 1277, Q, 3742, 1274, 3744, 1274, 3752, 1274, 3761, 1274, 3768, 1274, 3778, 1269, 3780, 1268, 3795, 1267, 3800, 1267, 3812, 1263, 3814, 1262, 3831, 1261, 3843, 1259, 3848, 1257, 3855, 1253, 3863, 1253, L, 3875, 1253, Q, 3875, 1253, 3877, 1253, 3879, 1253, 3883, 1253, 3889, 1253, 3891, 1252, 3900, 1246, 3905, 1245, 3909, 1243, 3922, 1244, 3928, 1243, 3937, 1241, L, 3954, 1239, Q, 3958, 1239, 3962, 1236, 3965, 1234, 3969, 1235, 3983, 1236, 4007, 1235, 4016, 1234, 4038, 1231, 4057, 1228, 4073, 1228, 4080, 1228, 4091, 1225, 4102, 1221, 4105, 1221, 4112, 1220, 4134, 1220, 4132, 1206, 4132, 1184, 4133, 1149, 4134, 1135, 4136, 1036, 4135, 1009, 4134, 982, 4132, 970, 4130, 958, 4129, 931, 4129, 880, 4129, 854, 4129, 807, 4136, 793, 4134, 758, 4140, 723, 4147, 684, 4150, 665, L, 4158, 600, Q, 4160, 589, 4166, 571, L, 4166, 538, Q, 4172, 521, 4173, 518, 4174, 513, 4174, 503, 4174, 498, 4177, 488, 4181, 477, 4181, 470, 4182, 458, 4195, 444, L, 4207, 417, Q, 4217, 399, 4224, 389, 4230, 378, 4239, 368, 4248, 357, 4247, 350, 4224, 309, 4214, 299, 4204, 287, 4193, 267, 4174, 237, 4173, 235, 4146, 193, 4130, 168, Q, 4099, 121, 4094, 121, Z]
      ],
      "label": "Yüksekova",
      "shortLabel": "YU",
      "labelPosition": [267.4, 117.5],
      "labelAlignment": [CEN, MID]
    }
  }
}];

export default {
  extension: geodefinitions,
  name: 'hakkari',
  type: 'maps'
};