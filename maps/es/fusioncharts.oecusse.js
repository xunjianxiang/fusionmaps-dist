/**!
 * @license FusionCharts JavaScript Library
 * Copyright InfoSoft Global Pvt. Ltd.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author InfoSoft Global Pvt. Ltd.
 * @meta package_map_pack
 * @id fusionmaps.Oecusse.17.06-21-2016 06:10:57
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
  "name": "Oecusse",
  "revision": 17,
  "standaloneInit": true,
  "baseWidth": 400,
  "baseHeight": 310,
  "baseScaleFactor": 10,
  "entities": {
    "TL.AM.NI": {
      "outlines": [
        [M, 1685, 772, Q, 1685, 746, 1659, 714, 1624, 671, 1619, 665, 1616, 667, 1612, 670, 1597, 689, 1586, 698, 1568, 716, 1557, 723, 1543, 732, 1531, 732, 1525, 732, 1509, 728, 1493, 723, 1486, 723, 1467, 723, 1456, 725, 1446, 726, 1432, 731, 1417, 738, 1406, 743, 1386, 752, 1378, 752, 1351, 753, 1347, 753, 1327, 755, 1315, 761, 1301, 767, 1292, 784, 1285, 803, 1281, 810, 1244, 892, 1233, 924, 1228, 940, 1206, 983, 1188, 1021, 1183, 1038, 1177, 1044, 1166, 1051, 1146, 1067, 1137, 1078, 1130, 1088, 1120, 1110, 1108, 1130, 1090, 1144, 1056, 1166, 1026, 1178, 987, 1193, 946, 1193, 934, 1193, 916, 1192, 899, 1190, 890, 1190, 856, 1190, 836, 1220, 830, 1228, 819, 1247, 809, 1264, 799, 1275, 782, 1291, 735, 1302, 691, 1313, 657, 1312, 641, 1311, 628, 1318, 617, 1324, 601, 1342, 598, 1345, 570, 1364, 545, 1381, 540, 1389, 527, 1408, 481, 1435, 431, 1464, 408, 1464, 390, 1459, 371, 1454, 331, 1444, 306, 1444, 279, 1444, 259, 1458, 247, 1466, 228, 1489, 208, 1512, 196, 1521, 176, 1535, 150, 1535, 139, 1535, 122, 1524, 105, 1512, 97, 1512, 89, 1512, 86, 1519, 81, 1530, 67, 1538, 49, 1544, 41, 1547, 29, 1551, 29, 1563, 29, 1587, 38, 1613, 48, 1637, 64, 1658, 70, 1666, 86, 1678, 99, 1689, 107, 1695, 111, 1697, 127, 1716, 139, 1730, 150, 1732, 157, 1740, 176, 1749, 198, 1761, 202, 1767, 217, 1789, 242, 1839, 251, 1857, 282, 1898, 300, 1922, 335, 1970, 343, 1981, 353, 2002, 362, 2022, 371, 2036, 379, 2045, 401, 2063, 428, 2085, 439, 2096, 445, 2102, 480, 2155, 518, 2204, 547, 2204, 562, 2204, 588, 2192, 615, 2179, 617, 2179, 620, 2179, 633, 2192, 645, 2204, 648, 2204, 650, 2204, 662, 2196, 673, 2188, 692, 2188, 709, 2188, 741, 2224, 757, 2242, 774, 2266, 776, 2268, 805, 2324, 826, 2365, 849, 2365, 862, 2365, 879, 2350, 897, 2335, 910, 2335, 916, 2335, 932, 2345, 948, 2355, 957, 2355, 970, 2355, 973, 2348, 975, 2344, 974, 2331, 972, 2306, 1000, 2306, 1002, 2306, 1012, 2311, 1023, 2317, 1029, 2317, 1058, 2317, 1068, 2309, 1076, 2303, 1076, 2287, 1075, 2267, 1076, 2254, 1078, 2232, 1091, 2213, 1099, 2202, 1115, 2192, 1130, 2182, 1133, 2176, 1135, 2173, 1154, 2156, 1169, 2142, 1169, 2132, 1169, 2109, 1153, 2097, 1137, 2085, 1137, 2082, 1137, 2063, 1149, 2060, 1169, 2056, 1187, 2036, 1201, 2019, 1221, 2020, 1254, 2020, 1263, 2018, 1281, 2013, 1297, 2000, 1316, 1987, 1323, 1970, 1326, 1964, 1345, 1939, 1366, 1912, 1372, 1912, 1409, 1924, 1412, 1924, 1428, 1924, 1433, 1923, 1448, 1918, 1452, 1901, 1459, 1874, 1462, 1868, 1467, 1855, 1478, 1846, 1481, 1845, 1504, 1840, 1529, 1836, 1536, 1833, 1575, 1814, 1580, 1814, 1582, 1814, 1616, 1835, 1651, 1857, 1666, 1869, 1673, 1875, 1712, 1891, 1744, 1905, 1753, 1920, 1760, 1931, 1790, 1953, 1826, 1979, 1837, 1990, 1848, 2001, 1873, 2031, 1893, 2053, 1908, 2057, 1909, 2057, 1910, 2057, 1973, 2073, 2016, 2151, 2040, 2198, 2085, 2306, 2096, 2328, 2097, 2378, 2098, 2415, 2108, 2437, 2131, 2419, 2165, 2396, 2176, 2389, 2181, 2386, 2190, 2380, 2200, 2383, 2214, 2385, 2223, 2380, 2227, 2378, 2232, 2375, 2236, 2375, 2242, 2378, 2247, 2380, 2256, 2380, 2266, 2380, 2278, 2370, 2291, 2358, 2294, 2357, 2300, 2353, 2320, 2351, 2338, 2348, 2345, 2342, 2353, 2329, 2358, 2323, 2366, 2312, 2377, 2312, 2386, 2312, 2398, 2307, 2411, 2303, 2418, 2303, 2457, 2315, 2457, 2311, 2467, 2310, 2494, 2300, 2508, 2300, 2531, 2317, 2555, 2335, 2572, 2335, 2583, 2335, 2594, 2332, 2601, 2331, 2606, 2331, 2606, 2316, 2600, 2304, 2593, 2290, 2591, 2277, 2588, 2254, 2572, 2247, 2558, 2241, 2558, 2224, 2558, 2219, 2560, 2212, 2563, 2204, 2563, 2201, 2563, 2199, 2560, 2189, 2557, 2180, 2557, 2176, 2557, 2170, 2561, 2158, 2565, 2147, 2565, 2141, 2565, 2133, 2546, 2108, 2526, 2085, 2526, 2070, 2526, 2053, 2539, 2048, 2550, 2044, 2550, 2037, 2550, 2029, 2543, 2022, 2533, 2013, 2527, 2008, 2504, 1985, 2504, 1939, 2504, 1930, 2511, 1918, 2517, 1907, 2517, 1903, 2517, 1898, 2514, 1892, 2509, 1883, 2508, 1879, 2505, 1870, 2501, 1868, 2499, 1868, 2489, 1868, 2466, 1868, 2453, 1874, 2439, 1881, 2426, 1881, 2418, 1881, 2413, 1877, 2411, 1876, 2410, 1874, 2409, 1873, 2408, 1872, 2399, 1858, 2388, 1851, 2375, 1845, 2366, 1842, 2351, 1836, 2346, 1827, 2346, 1826, 2346, 1825, 2343, 1814, 2331, 1802, 2318, 1788, 2304, 1784, 2290, 1779, 2275, 1770, 2259, 1760, 2248, 1756, 2231, 1749, 2223, 1741, 2210, 1729, 2210, 1712, 2210, 1706, 2199, 1681, 2188, 1657, 2188, 1653, 2188, 1651, 2198, 1631, 2210, 1610, 2218, 1600, 2227, 1589, 2231, 1573, 2233, 1563, 2233, 1546, 2234, 1528, 2233, 1517, 2233, 1499, 2228, 1483, 2223, 1468, 2210, 1452, 2196, 1435, 2191, 1428, 2177, 1405, 2175, 1403, 2171, 1397, 2161, 1396, 2148, 1393, 2147, 1392, 2132, 1385, 2122, 1371, 2117, 1364, 2097, 1364, 2083, 1364, 2080, 1366, 2076, 1368, 2057, 1368, 2054, 1368, 2040, 1404, 2025, 1443, 2023, 1466, 2023, 1471, 2020, 1490, 2016, 1507, 2013, 1517, 2007, 1544, 2005, 1547, 2001, 1553, 1985, 1553, 1964, 1553, 1957, 1527, 1943, 1479, 1943, 1478, 1938, 1470, 1929, 1460, 1921, 1452, 1918, 1444, 1917, 1437, 1906, 1429, 1896, 1421, 1895, 1421, 1890, 1421, 1882, 1436, 1872, 1451, 1870, 1452, 1868, 1453, 1855, 1461, 1844, 1469, 1842, 1470, 1839, 1473, 1830, 1476, 1821, 1481, 1817, 1485, 1808, 1495, 1806, 1496, 1800, 1501, 1793, 1501, 1784, 1501, 1778, 1497, 1771, 1493, 1767, 1493, 1760, 1493, 1751, 1504, 1741, 1516, 1722, 1516, 1636, 1501, 1598, 1498, 1597, 1498, 1597, 1495, 1597, 1494, 1608, 1475, 1620, 1456, 1620, 1411, 1623, 1396, 1634, 1377, 1647, 1353, 1664, 1336, 1669, 1331, 1683, 1332, 1691, 1332, 1708, 1332, 1713, 1332, 1720, 1327, 1727, 1321, 1730, 1321, 1735, 1320, 1741, 1319, 1745, 1318, 1748, 1316, 1752, 1313, 1765, 1298, 1773, 1289, 1783, 1291, 1817, 1288, 1817, 1276, 1817, 1272, 1799, 1265, 1784, 1260, 1782, 1240, 1782, 1239, 1782, 1238, 1782, 1237, 1783, 1236, 1785, 1231, 1790, 1222, 1796, 1212, 1799, 1203, 1799, 1195, 1802, 1177, 1805, 1160, 1805, 1155, 1805, 1152, 1790, 1120, 1775, 1088, 1775, 1087, 1774, 1081, 1768, 1076, 1762, 1070, 1760, 1062, 1759, 1057, 1759, 1044, 1759, 1034, 1754, 1027, 1749, 1018, 1732, 1000, 1716, 983, 1710, 969, 1700, 952, 1692, 940, 1678, 917, 1678, 906, 1678, 901, 1685, 889, 1693, 877, 1693, 870, 1693, 862, 1679, 850, 1665, 838, 1665, 827, 1665, 824, 1667, 816, 1667, 814, 1668, 813, 1669, 805, 1677, 794, Q, 1685, 783, 1685, 772, Z]
      ],
      "label": "Nitibe",
      "shortLabel": "NI",
      "labelPosition": [106.5, 164.1],
      "labelAlignment": [CEN, MID]
    },
    "TL.AM.OE": {
      "outlines": [
        [M, 2788, 1213, Q, 2783, 1215, 2783, 1220, 2782, 1223, 2777, 1223, 2771, 1223, 2762, 1212, 2756, 1204, 2755, 1200, 2751, 1192, 2746, 1189, 2738, 1186, 2732, 1181, 2719, 1172, 2719, 1172, 2717, 1170, 2718, 1159, L, 2719, 1127, Q, 2719, 1116, 2717, 1110, 2715, 1102, 2714, 1099, 2713, 1087, 2692, 1087, 2684, 1087, 2678, 1114, 2671, 1142, 2653, 1142, 2639, 1142, 2632, 1142, 2621, 1142, 2615, 1147, 2610, 1150, 2598, 1150, 2581, 1150, 2580, 1150, 2580, 1186, 2578, 1208, 2575, 1212, 2570, 1216, 2568, 1218, 2568, 1222, 2568, 1239, 2589, 1240, 2609, 1241, 2609, 1266, 2609, 1272, 2609, 1282, 2609, 1291, 2610, 1297, 2610, 1298, 2618, 1313, 2625, 1326, 2625, 1330, 2625, 1338, 2617, 1345, 2609, 1352, 2609, 1362, 2609, 1368, 2612, 1376, 2614, 1385, 2614, 1387, 2614, 1396, 2609, 1399, 2600, 1402, 2593, 1404, 2587, 1406, 2581, 1411, 2577, 1415, 2569, 1415, 2561, 1415, 2554, 1411, 2548, 1405, 2529, 1405, L, 2509, 1404, Q, 2503, 1404, 2495, 1400, 2487, 1397, 2483, 1397, L, 2434, 1402, Q, 2426, 1402, 2422, 1400, 2413, 1396, 2396, 1391, L, 2380, 1391, Q, 2383, 1407, 2372, 1418, 2358, 1431, 2358, 1437, 2356, 1450, 2348, 1468, 2344, 1478, 2338, 1490, 2338, 1492, 2337, 1493, 2337, 1501, 2339, 1507, 2342, 1515, 2353, 1523, 2357, 1525, 2359, 1530, 2362, 1537, 2362, 1538, 2364, 1540, 2371, 1546, 2374, 1550, 2374, 1556, 2374, 1566, 2369, 1570, 2364, 1575, 2364, 1578, 2364, 1591, 2401, 1603, 2439, 1615, 2439, 1635, 2439, 1643, 2434, 1650, 2428, 1656, 2428, 1662, 2428, 1667, 2438, 1688, 2447, 1709, 2447, 1713, 2447, 1722, 2438, 1727, 2428, 1731, 2428, 1742, 2428, 1743, 2432, 1746, 2436, 1750, 2436, 1757, 2436, 1762, 2436, 1764, 2434, 1767, 2429, 1769, 2424, 1770, 2422, 1773, 2421, 1774, 2420, 1779, 2419, 1785, 2412, 1797, 2405, 1808, 2405, 1811, 2405, 1813, 2409, 1820, 2412, 1827, 2412, 1829, L, 2410, 1840, 2410, 1874, Q, 2411, 1876, 2413, 1877, 2418, 1881, 2426, 1881, 2439, 1881, 2453, 1874, 2466, 1868, 2489, 1868, 2499, 1868, 2501, 1868, 2505, 1870, 2508, 1879, 2509, 1883, 2514, 1892, 2517, 1898, 2517, 1903, 2517, 1907, 2511, 1918, 2504, 1930, 2504, 1939, 2504, 1985, 2527, 2008, 2533, 2013, 2543, 2022, 2550, 2029, 2550, 2037, 2550, 2044, 2539, 2048, 2526, 2053, 2526, 2070, 2526, 2085, 2546, 2108, 2565, 2133, 2565, 2141, 2565, 2147, 2561, 2158, 2557, 2170, 2557, 2176, 2557, 2180, 2560, 2189, 2563, 2199, 2563, 2201, 2563, 2204, 2560, 2212, 2558, 2219, 2558, 2224, 2558, 2241, 2572, 2247, 2588, 2254, 2591, 2277, 2593, 2290, 2600, 2304, 2606, 2316, 2606, 2331, 2609, 2330, 2610, 2330, 2624, 2330, 2639, 2343, 2654, 2355, 2667, 2355, 2676, 2355, 2684, 2352, 2693, 2349, 2700, 2349, 2704, 2349, 2718, 2356, 2733, 2363, 2742, 2363, 2748, 2364, 2765, 2363, 2780, 2363, 2790, 2368, 2795, 2349, 2800, 2346, 2808, 2342, 2841, 2328, 2865, 2317, 2882, 2303, 2915, 2275, 2919, 2270, 2934, 2250, 2932, 2218, 2930, 2198, 2964, 2181, 2998, 2165, 2998, 2155, 2994, 2134, 2994, 2129, 2994, 2114, 3004, 2107, 3010, 2104, 3025, 2100, 3057, 2088, 3057, 2031, 3057, 2005, 3051, 1992, 3037, 1959, 3036, 1954, 3029, 1932, 3011, 1924, 2996, 1918, 2996, 1905, 3004, 1889, 3011, 1871, 3027, 1835, 3030, 1814, 3030, 1788, 3033, 1768, 3040, 1732, 3054, 1732, 3063, 1732, 3085, 1747, 3107, 1762, 3118, 1762, 3135, 1762, 3164, 1743, 3184, 1730, 3200, 1720, 3203, 1718, 3205, 1717, 3223, 1711, 3236, 1694, 3255, 1670, 3254, 1637, 3255, 1596, 3268, 1576, 3269, 1575, 3270, 1574, 3263, 1570, 3256, 1559, 3248, 1549, 3243, 1547, 3236, 1542, 3226, 1543, 3214, 1543, 3210, 1542, 3199, 1541, 3195, 1536, 3190, 1529, 3191, 1514, 3193, 1501, 3185, 1498, 3184, 1498, 3170, 1498, 3164, 1496, 3160, 1497, 3150, 1499, 3150, 1509, L, 3140, 1509, Q, 3135, 1501, 3135, 1495, 3135, 1488, 3135, 1482, 3135, 1471, 3131, 1469, 3130, 1468, 3116, 1466, L, 3098, 1460, Q, 3097, 1458, 3091, 1446, 3085, 1436, 3085, 1431, 3099, 1394, 3099, 1389, 3099, 1382, 3097, 1379, 3094, 1374, 3091, 1360, 3090, 1350, 3089, 1346, 3087, 1337, 3080, 1337, 3073, 1337, 3071, 1339, 3069, 1341, 3070, 1349, L, 3063, 1349, Q, 3049, 1341, 3039, 1318, 3030, 1298, 3012, 1295, 3005, 1294, 2974, 1295, 2949, 1295, 2940, 1289, L, 2926, 1279, Q, 2924, 1277, 2919, 1277, 2914, 1277, 2908, 1274, 2902, 1269, 2897, 1261, 2895, 1258, 2888, 1243, 2883, 1229, 2881, 1222, 2875, 1209, 2867, 1209, 2853, 1207, 2849, 1200, 2845, 1194, 2839, 1194, 2832, 1194, 2823, 1199, 2812, 1206, 2806, 1209, Q, 2790, 1211, 2788, 1213, Z]
      ],
      "label": "Oesilo",
      "shortLabel": "OE",
      "labelPosition": [275, 172.7],
      "labelAlignment": [CEN, MID]
    },
    "TL.AM.PM": {
      "outlines": [
        [M, 3228, 189, Q, 3216, 204, 3194, 211, 3169, 216, 3156, 221, 3148, 224, 3118, 241, 3087, 260, 3079, 265, 3054, 279, 3007, 293, 2952, 310, 2919, 310, 2855, 310, 2797, 297, 2739, 283, 2694, 283, 2651, 283, 2590, 293, 2573, 295, 2539, 312, 2507, 326, 2499, 326, 2488, 326, 2473, 316, 2458, 305, 2435, 305, 2388, 305, 2374, 346, 2370, 358, 2361, 384, 2352, 407, 2334, 422, 2298, 454, 2255, 474, 2220, 489, 2160, 504, 2029, 536, 1988, 546, 1974, 551, 1962, 573, 1955, 586, 1943, 616, 1929, 647, 1915, 653, 1911, 654, 1879, 654, 1843, 654, 1823, 648, 1802, 641, 1776, 641, 1748, 641, 1718, 651, 1691, 661, 1649, 658, 1631, 657, 1619, 665, 1624, 671, 1659, 714, 1685, 746, 1685, 772, 1685, 783, 1677, 794, 1669, 805, 1668, 813, 1667, 814, 1667, 816, 1665, 824, 1665, 827, 1665, 838, 1679, 850, 1693, 862, 1693, 870, 1693, 877, 1685, 889, 1678, 901, 1678, 906, 1678, 917, 1692, 940, 1700, 952, 1710, 969, 1716, 983, 1732, 1000, 1749, 1018, 1754, 1027, 1759, 1034, 1759, 1044, 1759, 1057, 1760, 1062, 1762, 1070, 1768, 1076, 1774, 1081, 1775, 1087, 1775, 1088, 1790, 1120, 1805, 1152, 1805, 1155, 1805, 1160, 1802, 1177, 1799, 1195, 1799, 1203, 1796, 1212, 1790, 1222, 1785, 1231, 1783, 1236, 1782, 1237, 1782, 1238, 1782, 1239, 1782, 1240, 1784, 1260, 1799, 1265, 1817, 1272, 1817, 1276, 1817, 1288, 1783, 1291, 1773, 1289, 1765, 1298, 1752, 1313, 1748, 1316, 1745, 1318, 1741, 1319, 1735, 1320, 1730, 1321, 1727, 1321, 1720, 1327, 1713, 1332, 1708, 1332, 1691, 1332, 1683, 1332, 1669, 1331, 1664, 1336, 1647, 1353, 1634, 1377, 1623, 1396, 1620, 1411, 1620, 1456, 1608, 1475, 1597, 1494, 1597, 1495, 1597, 1498, 1598, 1498, 1636, 1501, 1722, 1516, 1741, 1516, 1751, 1504, 1760, 1493, 1767, 1493, 1771, 1493, 1778, 1497, 1784, 1501, 1793, 1501, 1800, 1501, 1806, 1496, 1808, 1495, 1817, 1485, 1821, 1481, 1830, 1476, 1839, 1473, 1842, 1470, 1844, 1469, 1855, 1461, 1868, 1453, 1870, 1452, 1872, 1451, 1882, 1436, 1890, 1421, 1895, 1421, 1896, 1421, 1906, 1429, 1917, 1437, 1918, 1444, 1921, 1452, 1929, 1460, 1938, 1470, 1943, 1478, 1943, 1479, 1957, 1527, 1964, 1553, 1985, 1553, 2001, 1553, 2005, 1547, 2007, 1544, 2013, 1517, 2016, 1507, 2020, 1490, 2023, 1471, 2023, 1466, 2025, 1443, 2040, 1404, 2054, 1368, 2057, 1368, 2076, 1368, 2080, 1366, 2083, 1364, 2097, 1364, 2117, 1364, 2122, 1371, 2132, 1385, 2147, 1392, 2148, 1393, 2161, 1396, 2171, 1397, 2175, 1403, 2177, 1405, 2191, 1428, 2196, 1435, 2210, 1452, 2223, 1468, 2228, 1483, 2233, 1499, 2233, 1517, 2234, 1528, 2233, 1546, 2233, 1563, 2231, 1573, 2227, 1589, 2218, 1600, 2210, 1610, 2198, 1631, 2188, 1651, 2188, 1653, 2188, 1657, 2199, 1681, 2210, 1706, 2210, 1712, 2210, 1729, 2223, 1741, 2231, 1749, 2248, 1756, 2259, 1760, 2275, 1770, 2290, 1779, 2304, 1784, 2318, 1788, 2331, 1802, 2343, 1814, 2346, 1825, 2346, 1826, 2346, 1827, 2351, 1836, 2366, 1842, 2375, 1845, 2388, 1851, 2399, 1858, 2408, 1872, 2409, 1873, 2410, 1874, L, 2410, 1840, 2412, 1829, Q, 2412, 1827, 2409, 1820, 2405, 1813, 2405, 1811, 2405, 1808, 2412, 1797, 2419, 1785, 2420, 1779, 2421, 1774, 2422, 1773, 2424, 1770, 2429, 1769, 2434, 1767, 2436, 1764, 2436, 1762, 2436, 1757, 2436, 1750, 2432, 1746, 2428, 1743, 2428, 1742, 2428, 1731, 2438, 1727, 2447, 1722, 2447, 1713, 2447, 1709, 2438, 1688, 2428, 1667, 2428, 1662, 2428, 1656, 2434, 1650, 2439, 1643, 2439, 1635, 2439, 1615, 2401, 1603, 2364, 1591, 2364, 1578, 2364, 1575, 2369, 1570, 2374, 1566, 2374, 1556, 2374, 1550, 2371, 1546, 2364, 1540, 2362, 1538, 2362, 1537, 2359, 1530, 2357, 1525, 2353, 1523, 2342, 1515, 2339, 1507, 2337, 1501, 2337, 1493, 2338, 1492, 2338, 1490, 2344, 1478, 2348, 1468, 2356, 1450, 2358, 1437, 2358, 1431, 2372, 1418, 2383, 1407, 2380, 1391, L, 2396, 1391, Q, 2413, 1396, 2422, 1400, 2426, 1402, 2434, 1402, L, 2483, 1397, Q, 2487, 1397, 2495, 1400, 2503, 1404, 2509, 1404, L, 2529, 1405, Q, 2548, 1405, 2554, 1411, 2561, 1415, 2569, 1415, 2577, 1415, 2581, 1411, 2587, 1406, 2593, 1404, 2600, 1402, 2609, 1399, 2614, 1396, 2614, 1387, 2614, 1385, 2612, 1376, 2609, 1368, 2609, 1362, 2609, 1352, 2617, 1345, 2625, 1338, 2625, 1330, 2625, 1326, 2618, 1313, 2610, 1298, 2610, 1297, 2609, 1291, 2609, 1282, 2609, 1272, 2609, 1266, 2609, 1241, 2589, 1240, 2568, 1239, 2568, 1222, 2568, 1218, 2570, 1216, 2575, 1212, 2578, 1208, 2580, 1186, 2580, 1150, 2581, 1150, 2598, 1150, 2610, 1150, 2615, 1147, 2621, 1142, 2632, 1142, 2639, 1142, 2653, 1142, 2671, 1142, 2678, 1114, 2684, 1087, 2692, 1087, 2713, 1087, 2714, 1099, 2715, 1102, 2717, 1110, 2719, 1116, 2719, 1127, L, 2718, 1159, Q, 2717, 1170, 2719, 1172, 2719, 1172, 2732, 1181, 2738, 1186, 2746, 1189, 2751, 1192, 2755, 1200, 2756, 1204, 2762, 1212, 2771, 1223, 2777, 1223, 2782, 1223, 2783, 1220, 2783, 1215, 2788, 1213, 2790, 1211, 2806, 1209, 2812, 1206, 2823, 1199, 2832, 1194, 2839, 1194, 2845, 1194, 2849, 1200, 2853, 1207, 2867, 1209, 2875, 1209, 2881, 1222, 2883, 1229, 2888, 1243, 2895, 1258, 2897, 1261, 2902, 1269, 2908, 1274, 2914, 1277, 2919, 1277, 2924, 1277, 2926, 1279, L, 2940, 1289, Q, 2949, 1295, 2974, 1295, 3005, 1294, 3012, 1295, 3030, 1298, 3039, 1318, 3049, 1341, 3063, 1349, L, 3070, 1349, Q, 3069, 1341, 3071, 1339, 3073, 1337, 3080, 1337, 3087, 1337, 3089, 1346, 3090, 1350, 3091, 1360, 3094, 1374, 3097, 1379, 3099, 1382, 3099, 1389, 3099, 1394, 3085, 1431, 3085, 1436, 3091, 1446, 3097, 1458, 3098, 1460, L, 3116, 1466, Q, 3130, 1468, 3131, 1469, 3135, 1471, 3135, 1482, 3135, 1488, 3135, 1495, 3135, 1501, 3140, 1509, L, 3150, 1509, Q, 3150, 1499, 3160, 1497, 3164, 1496, 3170, 1498, 3184, 1498, 3185, 1498, 3193, 1501, 3191, 1514, 3190, 1529, 3195, 1536, 3199, 1541, 3210, 1542, 3214, 1543, 3226, 1543, 3236, 1542, 3243, 1547, 3248, 1549, 3256, 1559, 3263, 1570, 3270, 1574, 3284, 1554, 3310, 1557, 3333, 1559, 3360, 1552, 3391, 1545, 3412, 1545, 3435, 1545, 3463, 1528, 3490, 1511, 3500, 1511, 3515, 1511, 3537, 1523, 3549, 1529, 3564, 1539, L, 3579, 1539, Q, 3585, 1511, 3587, 1468, 3588, 1448, 3588, 1394, 3589, 1371, 3590, 1361, 3590, 1350, 3599, 1343, 3610, 1334, 3611, 1329, 3615, 1313, 3620, 1301, 3631, 1279, 3648, 1279, 3667, 1279, 3679, 1290, 3690, 1301, 3700, 1301, 3718, 1301, 3738, 1283, 3748, 1273, 3762, 1257, 3769, 1250, 3770, 1240, 3770, 1226, 3772, 1223, 3774, 1218, 3776, 1189, 3776, 1163, 3757, 1119, 3736, 1075, 3732, 1065, 3729, 1059, 3729, 1036, 3728, 1012, 3728, 1007, 3727, 994, 3722, 972, 3718, 950, 3718, 945, 3718, 933, 3722, 919, 3727, 904, 3728, 896, 3732, 867, 3755, 842, 3789, 805, 3797, 792, 3804, 782, 3803, 758, 3801, 733, 3807, 721, 3829, 675, 3829, 657, 3829, 655, 3826, 639, 3823, 622, 3823, 612, 3823, 599, 3826, 577, 3829, 556, 3829, 545, 3829, 537, 3827, 517, 3825, 497, 3825, 483, 3825, 445, 3833, 427, 3845, 398, 3884, 374, 3889, 371, 3901, 356, 3913, 340, 3919, 335, 3921, 333, 3945, 323, 3967, 311, 3967, 301, 3967, 290, 3954, 274, 3940, 259, 3939, 248, 3938, 231, 3935, 208, 3930, 160, 3925, 126, 3925, 119, 3920, 106, 3916, 91, 3913, 91, 3901, 91, 3895, 91, 3885, 91, 3879, 89, 3876, 87, 3858, 78, 3845, 72, 3839, 72, L, 3796, 74, Q, 3775, 74, 3729, 52, 3682, 29, 3660, 29, 3637, 29, 3620, 35, 3604, 40, 3575, 40, 3549, 40, 3532, 35, 3515, 29, 3499, 29, 3478, 29, 3458, 39, 3426, 56, 3420, 58, 3410, 61, 3385, 67, 3358, 73, 3342, 78, 3317, 86, 3283, 130, 3269, 148, 3255, 163, Q, 3238, 179, 3228, 189, Z]
      ],
      "label": "Pante Macassar",
      "shortLabel": "PM",
      "labelPosition": [278.2, 77.1],
      "labelAlignment": [CEN, MID]
    },
    "TL.AM.PA": {
      "outlines": [
        [M, 2742, 2363, Q, 2733, 2363, 2718, 2356, 2704, 2349, 2700, 2349, 2693, 2349, 2684, 2352, 2676, 2355, 2667, 2355, 2654, 2355, 2639, 2343, 2624, 2330, 2610, 2330, 2609, 2330, 2606, 2331, 2601, 2331, 2594, 2332, 2583, 2335, 2572, 2335, 2555, 2335, 2531, 2317, 2508, 2300, 2494, 2300, 2467, 2310, 2457, 2311, 2457, 2315, 2418, 2303, 2411, 2303, 2398, 2307, 2386, 2312, 2377, 2312, 2366, 2312, 2358, 2323, 2353, 2329, 2345, 2342, 2338, 2348, 2320, 2351, 2300, 2353, 2294, 2357, 2291, 2358, 2278, 2370, 2266, 2380, 2256, 2380, 2247, 2380, 2242, 2378, 2236, 2375, 2232, 2375, 2227, 2378, 2223, 2380, 2214, 2385, 2200, 2383, 2190, 2380, 2181, 2386, 2176, 2389, 2165, 2396, 2131, 2419, 2108, 2437, 2111, 2443, 2115, 2448, 2119, 2454, 2164, 2501, 2207, 2551, 2207, 2577, 2207, 2586, 2196, 2619, 2184, 2652, 2184, 2656, 2184, 2672, 2201, 2694, 2216, 2716, 2216, 2728, 2216, 2739, 2169, 2859, 2122, 2979, 2122, 3015, 2122, 3043, 2140, 3056, 2156, 3068, 2190, 3068, 2266, 3068, 2279, 3026, 2279, 3025, 2306, 2988, 2323, 2972, 2344, 2968, 2364, 2963, 2364, 2971, 2365, 2971, 2366, 2971, 2384, 2971, 2407, 2976, 2431, 2981, 2442, 2981, 2462, 2981, 2473, 2971, 2500, 2946, 2503, 2944, 2515, 2936, 2538, 2930, 2561, 2924, 2570, 2919, 2589, 2907, 2612, 2904, 2633, 2902, 2645, 2894, 2656, 2885, 2672, 2880, 2688, 2874, 2704, 2874, 2718, 2874, 2737, 2883, 2757, 2891, 2767, 2891, 2792, 2891, 2810, 2842, 2825, 2799, 2822, 2769, 2820, 2750, 2824, 2740, 2829, 2731, 2849, 2707, 2855, 2700, 2887, 2686, 2914, 2675, 2914, 2662, 2914, 2650, 2903, 2628, 2891, 2605, 2889, 2580, 2888, 2554, 2871, 2537, 2856, 2525, 2847, 2517, 2846, 2516, 2845, 2515, 2843, 2514, 2841, 2513, 2837, 2510, 2830, 2504, 2813, 2488, 2802, 2480, 2792, 2474, 2786, 2459, 2780, 2446, 2780, 2437, 2780, 2413, 2786, 2383, 2788, 2374, 2790, 2368, 2780, 2363, 2765, 2363, Q, 2748, 2364, 2742, 2363, Z]
      ],
      "label": "Passabe",
      "shortLabel": "PA",
      "labelPosition": [251.1, 263],
      "labelAlignment": [CEN, MID]
    }
  }
}];

export default {
  extension: geodefinitions,
  name: 'oecusse',
  type: 'maps'
};