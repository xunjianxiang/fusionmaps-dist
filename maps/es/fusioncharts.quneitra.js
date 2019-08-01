/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Quneitra.1.07-25-2016 03:28:57
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
  "name": "Quneitra",
  "revision": 1,
  "standaloneInit": true,
  "baseWidth": 247,
  "baseHeight": 514,
  "baseScaleFactor": 10,
  "entities": {
    "SY.QU.QU": {
      "outlines": [
        [M, 2112, 750, Q, 2077, 748, 2040, 750, 1999, 751, 1949, 751, 1943, 751, 1936, 752, 1921, 754, 1910, 746, 1907, 743, 1907, 740, 1906, 731, 1897, 724, 1894, 722, 1892, 722, 1868, 720, 1844, 720, 1838, 720, 1831, 719, 1830, 718, 1828, 717, 1820, 711, 1821, 701, 1823, 685, 1812, 681, 1798, 676, 1781, 678, 1772, 679, 1772, 670, 1771, 630, 1771, 591, 1771, 579, 1774, 568, 1777, 555, 1784, 551, 1788, 549, 1795, 544, 1799, 541, 1803, 539, 1819, 531, 1829, 513, 1830, 510, 1830, 507, 1831, 477, 1831, 447, 1831, 397, 1831, 347, 1831, 334, 1832, 321, 1834, 308, 1826, 305, 1824, 304, 1821, 302, 1820, 300, 1818, 299, 1805, 294, 1795, 284, 1792, 282, 1790, 279, 1781, 265, 1771, 256, 1769, 253, 1766, 253, 1737, 250, 1708, 250, 1704, 250, 1701, 249, 1691, 243, 1681, 235, 1678, 232, 1675, 229, 1667, 219, 1656, 220, 1643, 220, 1638, 213, 1625, 195, 1613, 183, 1611, 181, 1608, 181, 1602, 180, 1595, 179, 1592, 178, 1589, 176, 1577, 164, 1563, 151, 1561, 150, 1559, 148, 1550, 137, 1532, 139, 1519, 140, 1509, 135, 1503, 133, 1498, 128, 1489, 119, 1478, 114, 1463, 106, 1443, 108, 1439, 109, 1436, 107, 1419, 99, 1404, 88, 1402, 87, 1399, 86, 1361, 85, 1323, 85, 1320, 85, 1319, 84, 1313, 79, 1302, 72, 1295, 68, 1286, 68, 1272, 68, 1262, 59, 1247, 46, 1228, 38, 1226, 37, 1223, 37, 1209, 35, 1194, 35, 1146, 35, 1097, 34, 1081, 34, 1066, 39, 1061, 41, 1055, 50, 1048, 59, 1041, 65, 1040, 73, 1034, 80, 1018, 99, 990, 103, 987, 103, 984, 104, 980, 105, 976, 105, 963, 105, 952, 113, 944, 120, 938, 128, 936, 130, 936, 132, 936, 141, 927, 142, 915, 143, 903, 142, 893, 141, 885, 146, 884, 147, 882, 147, 872, 152, 866, 161, 861, 168, 857, 173, 851, 178, 845, 181, 840, 184, 835, 185, 832, 186, 830, 186, 802, 189, 788, 214, 787, 216, 785, 218, 778, 223, 773, 228, 767, 234, 754, 233, 746, 232, 738, 233, 724, 235, 715, 243, 700, 256, 693, 266, 687, 275, 675, 274, 662, 272, 655, 280, 647, 288, 641, 295, 637, 300, 636, 305, 632, 315, 622, 320, 610, 327, 596, 327, 590, 328, 583, 327, 573, 327, 565, 331, 558, 335, 554, 341, 543, 356, 530, 365, 528, 367, 526, 367, 509, 368, 492, 369, 482, 370, 473, 379, 463, 389, 457, 397, 450, 407, 434, 405, 430, 405, 427, 406, 420, 410, 413, 411, 409, 412, 406, 414, 404, 416, 402, 418, 395, 425, 389, 433, 380, 445, 366, 442, 344, 438, 331, 454, 325, 463, 316, 471, 313, 473, 308, 475, 296, 480, 282, 479, 268, 478, 261, 484, 260, 486, 258, 488, 251, 493, 246, 500, 241, 507, 235, 507, 232, 507, 230, 508, 219, 514, 206, 513, 199, 512, 193, 513, 189, 514, 184, 517, 182, 518, 181, 519, 169, 532, 171, 552, 172, 554, 171, 556, 168, 560, 164, 565, 160, 571, 153, 571, 152, 572, 151, 572, 144, 576, 137, 583, 136, 585, 135, 586, 134, 590, 133, 594, 132, 607, 132, 620, 132, 632, 133, 643, 135, 661, 125, 670, 122, 672, 119, 672, 110, 673, 104, 678, 102, 679, 101, 679, 89, 679, 88, 688, 88, 692, 88, 696, 88, 744, 88, 793, 131, 793, 174, 793, 178, 793, 182, 792, 186, 791, 188, 787, 190, 780, 190, 772, 190, 759, 198, 751, 201, 749, 204, 747, 219, 742, 237, 742, 264, 743, 287, 752, 290, 753, 292, 753, 337, 754, 381, 754, 384, 754, 385, 755, 387, 759, 387, 764, 388, 768, 389, 772, 391, 792, 405, 801, 416, 809, 423, 815, 425, 817, 427, 818, 433, 822, 436, 832, 438, 840, 441, 843, 443, 846, 443, 848, 444, 878, 444, 908, 444, 912, 443, 916, 439, 927, 434, 932, 433, 933, 431, 934, 420, 942, 412, 947, 406, 952, 402, 956, 400, 958, 399, 961, 397, 966, 396, 971, 392, 998, 394, 1026, 394, 1037, 395, 1047, 397, 1058, 389, 1065, 387, 1067, 385, 1069, 375, 1078, 368, 1081, 355, 1087, 354, 1102, 354, 1105, 354, 1108, 353, 1158, 353, 1207, 353, 1220, 352, 1233, 351, 1236, 349, 1238, 346, 1240, 343, 1244, 335, 1252, 326, 1257, 318, 1262, 313, 1270, 312, 1273, 312, 1275, 311, 1294, 310, 1312, 308, 1363, 318, 1409, 321, 1421, 324, 1433, L, 324, 1433, Q, 321, 1473, 323, 1503, 325, 1532, 321, 1540, 320, 1543, 318, 1544, 309, 1550, 298, 1561, 296, 1563, 295, 1563, 284, 1566, 283, 1574, 282, 1578, 282, 1582, 282, 1632, 282, 1682, 282, 1732, 281, 1781, 281, 1784, 280, 1787, 279, 1810, 279, 1834, 279, 1859, 278, 1884, 277, 1911, 277, 1939, 277, 1944, 276, 1949, 272, 1981, 273, 2015, 274, 2064, 273, 2114, 273, 2117, 273, 2119, 273, 2127, 268, 2132, 259, 2142, 251, 2149, 248, 2151, 245, 2152, 221, 2161, 224, 2185, L, 224, 2185, Q, 224, 2221, 224, 2256, 224, 2304, 221, 2353, 220, 2375, 220, 2397, 219, 2447, 219, 2497, 219, 2501, 218, 2505, 216, 2514, 206, 2521, 205, 2522, 203, 2522, 190, 2524, 187, 2536, 187, 2539, 186, 2541, 185, 2575, 185, 2610, 185, 2660, 185, 2709, 185, 2758, 185, 2806, 185, 2854, 185, 2901, L, 185, 2903, Q, 185, 2908, 185, 2914, 185, 2963, 185, 3013, 185, 3063, 185, 3113, 185, 3163, 184, 3212, 184, 3239, 177, 3259, 176, 3261, 176, 3262, 175, 3265, 174, 3267, 169, 3278, 159, 3286, 158, 3287, 156, 3288, 151, 3291, 148, 3294, 144, 3298, 141, 3300, 138, 3302, 135, 3303, 125, 3307, 122, 3317, 115, 3339, 117, 3365, 117, 3367, 116, 3369, 104, 3382, 88, 3388, 86, 3390, 83, 3391, 82, 3392, 81, 3393, 76, 3401, 77, 3412, 78, 3425, 79, 3438, 80, 3446, 74, 3450, 70, 3454, 65, 3457, 55, 3462, 47, 3468, 44, 3470, 42, 3473, 37, 3483, 36, 3493, 36, 3497, 37, 3500, 39, 3504, 41, 3511, 42, 3514, 44, 3514, 51, 3515, 57, 3519, 59, 3521, 62, 3521, 66, 3521, 69, 3523, 118, 3522, 164, 3522, 174, 3522, 173, 3532, 172, 3542, 173, 3551, 174, 3556, 175, 3561, 175, 3571, 185, 3572, 235, 3572, 284, 3572, 309, 3572, 334, 3574, 336, 3574, 337, 3576, 341, 3582, 341, 3593, 341, 3594, 341, 3596, 347, 3613, 368, 3619, 371, 3620, 374, 3621, 388, 3628, 405, 3628, 453, 3627, 502, 3626, 515, 3625, 525, 3631, 527, 3632, 528, 3635, 530, 3645, 534, 3655, 536, 3658, 539, 3661, 545, 3668, 554, 3668, 561, 3667, 568, 3669, 580, 3672, 594, 3673, 596, 3674, 598, 3677, 599, 3679, 600, 3681, 602, 3690, 607, 3697, 612, 3703, 620, 3706, 626, 3708, 633, 3710, 639, 3711, 644, 3710, 661, 3709, 661, 3726, 661, 3729, 662, 3731, 667, 3738, 680, 3738, 687, 3737, 689, 3741, 695, 3749, 701, 3761, 704, 3768, 717, 3768, 765, 3768, 814, 3768, 834, 3768, 853, 3766, 855, 3766, 855, 3763, 855, 3750, 864, 3742, 871, 3736, 876, 3728, 877, 3726, 877, 3724, 879, 3713, 886, 3709, 887, 3708, 890, 3708, 919, 3708, 948, 3710, 950, 3711, 953, 3713, 959, 3717, 960, 3722, 961, 3725, 961, 3729, 960, 3744, 965, 3757, 966, 3760, 968, 3763, 970, 3766, 972, 3766, 977, 3768, 982, 3768, 1006, 3768, 1031, 3769, 1033, 3770, 1033, 3771, 1037, 3781, 1043, 3789, 1048, 3797, 1058, 3795, 1065, 3794, 1073, 3794, 1106, 3794, 1139, 3792, 1143, 3792, 1147, 3790, 1162, 3784, 1173, 3776, 1177, 3774, 1179, 3770, 1181, 3767, 1180, 3763, 1178, 3733, 1205, 3719, 1209, 3716, 1209, 3708, 1209, 3705, 1209, 3703, 1210, 3695, 1211, 3687, 1211, 3686, 1212, 3685, 1223, 3678, 1233, 3668, 1240, 3662, 1245, 3656, 1247, 3654, 1249, 3653, 1269, 3646, 1278, 3632, 1291, 3608, 1314, 3594, 1316, 3593, 1317, 3590, 1323, 3579, 1326, 3569, 1328, 3559, 1338, 3555, 1340, 3555, 1341, 3553, 1348, 3548, 1356, 3545, 1358, 3544, 1359, 3543, 1364, 3536, 1371, 3528, 1372, 3526, 1375, 3525, 1391, 3519, 1405, 3524, 1410, 3526, 1415, 3529, 1418, 3532, 1423, 3534, 1434, 3538, 1443, 3548, 1446, 3551, 1448, 3553, 1452, 3557, 1452, 3564, 1452, 3566, 1454, 3569, 1467, 3594, 1485, 3607, 1488, 3609, 1489, 3614, 1489, 3615, 1490, 3617, 1496, 3632, 1511, 3629, 1521, 3628, 1524, 3634, 1524, 3635, 1526, 3636, 1534, 3640, 1541, 3644, 1543, 3645, 1545, 3646, 1547, 3646, 1547, 3648, 1549, 3652, 1556, 3652, 1559, 3652, 1561, 3653, 1572, 3657, 1585, 3656, 1587, 3655, 1590, 3655, 1598, 3652, 1612, 3653, 1615, 3653, 1617, 3654, 1622, 3653, 1625, 3651, 1627, 3649, 1628, 3647, 1632, 3639, 1645, 3636, 1647, 3636, 1648, 3635, 1651, 3634, 1653, 3633, 1658, 3630, 1663, 3624, 1665, 3623, 1665, 3621, 1666, 3619, 1667, 3617, 1673, 3609, 1682, 3603, 1685, 3602, 1687, 3602, 1700, 3602, 1708, 3590, 1709, 3589, 1710, 3587, 1714, 3574, 1732, 3568, 1734, 3568, 1737, 3568, 1746, 3568, 1753, 3564, 1754, 3563, 1755, 3561, 1759, 3547, 1774, 3544, 1775, 3544, 1776, 3544, 1783, 3543, 1790, 3541, 1792, 3540, 1793, 3539, 1796, 3538, 1798, 3536, 1801, 3533, 1804, 3526, 1805, 3524, 1806, 3522, 1806, 3521, 1807, 3519, 1816, 3507, 1831, 3508, 1834, 3509, 1835, 3508, 1844, 3499, 1852, 3490, 1855, 3488, 1858, 3486, 1876, 3478, 1884, 3461, 1885, 3459, 1887, 3457, 1893, 3451, 1899, 3443, 1901, 3439, 1907, 3435, 1914, 3428, 1918, 3420, 1920, 3416, 1921, 3412, 1922, 3400, 1931, 3391, 1932, 3390, 1933, 3388, 1939, 3372, 1954, 3359, 1956, 3358, 1956, 3356, 1961, 3345, 1960, 3333, 1960, 3323, 1959, 3312, 1959, 3310, 1958, 3307, 1953, 3255, 1964, 3209, 1966, 3197, 1975, 3191, 1983, 3185, 1988, 3176, 1993, 3166, 1994, 3155, 1994, 3152, 1995, 3150, 1999, 3145, 2004, 3141, 2010, 3137, 2012, 3134, 2018, 3124, 2018, 3110, 2019, 3109, 2019, 3108, 2021, 3101, 2024, 3095, 2025, 3092, 2027, 3089, 2028, 3087, 2029, 3085, 2036, 3078, 2044, 3068, 2046, 3066, 2047, 3062, 2049, 3050, 2049, 3037, 2049, 3034, 2050, 3033, 2057, 3025, 2064, 3016, 2069, 3010, 2069, 3003, 2070, 2996, 2071, 2990, 2071, 2988, 2072, 2987, 2074, 2977, 2082, 2975, 2084, 2975, 2086, 2975, 2090, 2969, 2094, 2964, 2095, 2963, 2095, 2961, 2096, 2959, 2097, 2956, 2099, 2951, 2100, 2945, 2100, 2944, 2100, 2943, 2102, 2935, 2106, 2932, 2114, 2924, 2116, 2914, 2117, 2910, 2118, 2907, 2125, 2895, 2135, 2888, 2137, 2887, 2137, 2885, 2138, 2883, 2139, 2880, 2141, 2876, 2140, 2869, 2140, 2867, 2141, 2865, 2149, 2855, 2158, 2840, 2160, 2838, 2162, 2836, 2164, 2834, 2164, 2833, 2164, 2813, 2172, 2802, 2173, 2800, 2175, 2800, 2183, 2800, 2188, 2793, 2192, 2787, 2191, 2778, 2189, 2761, 2196, 2751, 2204, 2742, 2212, 2734, 2224, 2723, 2222, 2707, 2222, 2703, 2223, 2700, 2225, 2691, 2230, 2681, 2231, 2680, 2233, 2679, 2240, 2675, 2245, 2670, 2247, 2666, 2253, 2662, 2255, 2660, 2256, 2658, 2260, 2655, 2259, 2647, 2258, 2643, 2259, 2639, 2263, 2627, 2274, 2620, 2282, 2615, 2282, 2607, 2281, 2595, 2287, 2586, 2289, 2585, 2289, 2584, 2290, 2581, 2291, 2580, 2300, 2573, 2306, 2563, 2307, 2560, 2309, 2558, 2311, 2556, 2311, 2554, 2314, 2541, 2314, 2526, 2314, 2514, 2315, 2502, 2316, 2494, 2310, 2490, 2307, 2487, 2303, 2486, 2295, 2484, 2290, 2476, 2285, 2466, 2276, 2458, 2274, 2457, 2272, 2457, 2265, 2457, 2263, 2453, 2263, 2451, 2261, 2450, 2258, 2448, 2257, 2444, 2255, 2439, 2250, 2435, 2240, 2424, 2230, 2420, 2226, 2419, 2221, 2414, 2219, 2412, 2218, 2410, 2215, 2407, 2215, 2403, 2214, 2395, 2208, 2390, 2206, 2389, 2204, 2386, 2202, 2384, 2196, 2381, 2194, 2381, 2193, 2380, 2190, 2379, 2189, 2378, 2180, 2371, 2175, 2358, 2175, 2356, 2174, 2354, 2169, 2348, 2161, 2340, 2158, 2337, 2155, 2334, 2149, 2329, 2143, 2322, 2141, 2319, 2140, 2316, 2138, 2295, 2138, 2274, 2138, 2228, 2138, 2182, L, 2138, 2175, Q, 2138, 2139, 2138, 2104, 2138, 2091, 2137, 2078, 2135, 2051, 2153, 2035, 2155, 2033, 2157, 2032, 2163, 2028, 2163, 2022, 2163, 2020, 2163, 2017, 2166, 2006, 2173, 1997, 2182, 1986, 2190, 1975, 2194, 1969, 2197, 1964, 2200, 1961, 2202, 1958, 2207, 1953, 2211, 1944, 2219, 1924, 2235, 1910, 2238, 1907, 2239, 1902, 2241, 1896, 2242, 1891, 2243, 1889, 2244, 1887, 2252, 1877, 2262, 1871, 2272, 1865, 2276, 1854, 2281, 1843, 2286, 1831, 2289, 1824, 2298, 1824, 2314, 1823, 2329, 1824, 2357, 1826, 2379, 1815, 2392, 1810, 2389, 1792, 2387, 1777, 2397, 1770, 2410, 1762, 2414, 1747, 2416, 1741, 2417, 1735, 2417, 1733, 2418, 1731, 2419, 1729, 2420, 1726, 2420, 1725, 2420, 1724, 2421, 1721, 2423, 1719, 2434, 1706, 2443, 1693, 2445, 1690, 2445, 1686, 2447, 1674, 2447, 1661, 2447, 1639, 2446, 1616, 2446, 1612, 2443, 1610, 2432, 1601, 2426, 1587, 2425, 1585, 2424, 1582, 2422, 1571, 2414, 1566, 2411, 1564, 2409, 1561, 2400, 1541, 2403, 1517, 2404, 1512, 2400, 1510, 2398, 1509, 2395, 1508, 2382, 1505, 2382, 1490, 2382, 1486, 2380, 1483, 2378, 1476, 2376, 1472, 2375, 1471, 2374, 1470, 2367, 1469, 2361, 1468, 2345, 1466, 2332, 1461, 2328, 1459, 2328, 1458, 2323, 1457, 2319, 1453, 2311, 1445, 2300, 1435, 2299, 1434, 2297, 1433, 2294, 1432, 2290, 1429, 2286, 1426, 2277, 1427, 2262, 1427, 2248, 1426, 2244, 1426, 2241, 1423, 2232, 1416, 2229, 1409, 2228, 1407, 2226, 1405, 2215, 1398, 2206, 1388, 2203, 1386, 2200, 1383, 2194, 1379, 2194, 1372, 2195, 1324, 2196, 1275, 2197, 1274, 2197, 1272, 2203, 1260, 2212, 1252, 2214, 1251, 2215, 1249, 2223, 1240, 2232, 1233, 2234, 1232, 2234, 1231, 2235, 1199, 2235, 1168, 2235, 1119, 2235, 1071, 2235, 1068, 2234, 1066, 2232, 1064, 2230, 1062, 2221, 1056, 2214, 1052, 2213, 1051, 2211, 1051, 2195, 1049, 2192, 1034, 2192, 1032, 2191, 1029, 2189, 1023, 2187, 1016, 2186, 1012, 2186, 1008, 2185, 971, 2185, 935, 2185, 885, 2186, 835, 2186, 806, 2183, 780, 2182, 776, 2181, 773, 2177, 759, 2166, 749, 2165, 747, 2164, 747, 2148, 746, 2132, 747, Q, 2120, 748, 2112, 750, Z]
      ],
      "label": "Quneitra",
      "shortLabel": "QU",
      "labelPosition": [124.2, 191.5],
      "labelAlignment": [CEN, MID]
    },
    "SY.QU.FZ": {
      "outlines": [
        [M, 1405, 3524, Q, 1391, 3519, 1375, 3525, 1372, 3526, 1371, 3528, 1364, 3536, 1359, 3543, 1358, 3544, 1356, 3545, 1348, 3548, 1341, 3553, 1340, 3555, 1338, 3555, 1328, 3559, 1326, 3569, 1323, 3579, 1317, 3590, 1316, 3593, 1314, 3594, 1291, 3608, 1278, 3632, 1269, 3646, 1249, 3653, 1247, 3654, 1245, 3656, 1240, 3662, 1233, 3668, 1223, 3678, 1212, 3685, 1211, 3686, 1211, 3687, 1210, 3695, 1209, 3703, 1209, 3705, 1209, 3708, 1209, 3716, 1205, 3719, 1178, 3733, 1180, 3763, 1181, 3767, 1179, 3770, 1177, 3774, 1173, 3776, 1162, 3784, 1147, 3790, 1143, 3792, 1139, 3792, 1106, 3794, 1073, 3794, 1065, 3794, 1058, 3795, 1048, 3797, 1043, 3789, 1037, 3781, 1033, 3771, 1033, 3770, 1031, 3769, 1006, 3768, 982, 3768, 977, 3768, 972, 3766, 970, 3766, 968, 3763, 966, 3760, 965, 3757, 960, 3744, 961, 3729, 961, 3725, 960, 3722, 959, 3717, 953, 3713, 950, 3711, 948, 3710, 919, 3708, 890, 3708, 887, 3708, 886, 3709, 879, 3713, 877, 3724, 877, 3726, 876, 3728, 871, 3736, 864, 3742, 855, 3750, 855, 3763, 855, 3766, 853, 3766, 834, 3768, 814, 3768, 765, 3768, 717, 3768, 704, 3768, 701, 3761, 695, 3749, 689, 3741, 687, 3737, 680, 3738, 667, 3738, 662, 3731, 661, 3729, 661, 3726, 661, 3709, 644, 3710, 639, 3711, 633, 3710, 626, 3708, 620, 3706, 612, 3703, 607, 3697, 602, 3690, 600, 3681, 599, 3679, 598, 3677, 596, 3674, 594, 3673, 580, 3672, 568, 3669, 561, 3667, 554, 3668, 545, 3668, 539, 3661, 536, 3658, 534, 3655, 530, 3645, 528, 3635, 527, 3632, 525, 3631, 515, 3625, 502, 3626, 453, 3627, 405, 3628, 388, 3628, 374, 3621, 371, 3620, 368, 3619, 347, 3613, 341, 3596, 341, 3594, 341, 3593, 341, 3582, 337, 3576, 336, 3574, 334, 3574, 309, 3572, 284, 3572, 235, 3572, 185, 3572, 175, 3571, 175, 3561, 174, 3556, 173, 3551, 172, 3542, 173, 3532, 174, 3522, 164, 3522, 118, 3522, 69, 3523, 73, 3525, 76, 3529, 78, 3532, 78, 3535, 80, 3564, 82, 3592, 82, 3595, 82, 3598, 82, 3608, 88, 3616, 89, 3619, 90, 3621, 91, 3624, 92, 3626, 93, 3628, 95, 3630, 100, 3637, 109, 3639, 122, 3643, 132, 3651, 135, 3653, 135, 3655, 136, 3668, 143, 3674, 144, 3675, 146, 3676, 148, 3679, 151, 3680, 159, 3683, 166, 3690, 170, 3694, 173, 3696, 175, 3699, 175, 3700, 177, 3712, 176, 3724, 176, 3733, 180, 3737, 182, 3739, 184, 3742, 192, 3751, 201, 3757, 220, 3767, 234, 3779, 238, 3782, 239, 3789, 240, 3801, 240, 3813, 240, 3863, 240, 3912, 240, 3916, 238, 3919, 225, 3938, 203, 3939, 198, 3939, 195, 3941, 186, 3946, 180, 3950, 179, 3951, 178, 3952, 177, 3958, 176, 3965, 176, 3970, 176, 3975, 174, 4023, 174, 4070, 174, 4076, 175, 4083, 178, 4097, 188, 4108, 198, 4118, 201, 4135, 202, 4138, 204, 4139, 214, 4145, 223, 4154, 226, 4156, 228, 4158, 230, 4160, 231, 4162, 235, 4171, 243, 4177, 246, 4180, 250, 4183, 256, 4188, 264, 4192, 278, 4198, 284, 4209, 292, 4221, 302, 4227, 306, 4230, 309, 4231, 313, 4232, 315, 4235, 321, 4244, 325, 4251, 328, 4254, 330, 4258, 332, 4260, 333, 4262, 334, 4264, 335, 4266, 337, 4269, 339, 4272, 347, 4285, 355, 4296, 357, 4298, 357, 4300, 358, 4345, 358, 4390, L, 358, 4392, Q, 358, 4399, 358, 4406, 358, 4454, 357, 4503, 356, 4551, 355, 4600, 355, 4602, 354, 4604, 353, 4606, 351, 4608, 334, 4623, 313, 4634, 312, 4635, 311, 4637, 307, 4649, 308, 4663, 308, 4670, 309, 4678, 313, 4707, 290, 4719, 281, 4723, 271, 4729, 270, 4730, 270, 4731, 269, 4778, 268, 4825, 267, 4852, 261, 4877, 260, 4881, 255, 4884, 249, 4889, 246, 4893, 244, 4896, 242, 4897, 234, 4902, 229, 4908, 222, 4917, 218, 4930, 215, 4942, 215, 4956, 216, 5005, 215, 5053, 215, 5063, 220, 5071, 222, 5075, 223, 5082, 223, 5085, 223, 5087, 223, 5097, 230, 5102, 232, 5104, 234, 5106, 236, 5108, 238, 5108, 258, 5111, 279, 5110, 286, 5110, 287, 5106, 287, 5103, 288, 5102, 293, 5099, 293, 5092, 294, 5091, 294, 5090, 296, 5079, 311, 5082, 325, 5084, 327, 5071, 328, 5069, 329, 5066, 329, 5064, 331, 5062, 336, 5053, 347, 5055, 359, 5057, 357, 5045, 356, 5036, 360, 5034, 362, 5034, 362, 5032, 364, 5019, 383, 5022, 388, 5016, 392, 5013, 395, 5011, 398, 5010, 403, 5007, 407, 5005, 415, 5002, 421, 4995, 422, 4994, 423, 4992, 428, 4978, 445, 4977, 449, 4977, 452, 4976, 478, 4972, 487, 4951, 488, 4950, 488, 4948, 489, 4940, 498, 4935, 501, 4934, 505, 4933, 517, 4933, 523, 4924, 530, 4914, 535, 4904, 538, 4896, 542, 4891, 544, 4888, 547, 4888, 558, 4887, 568, 4883, 572, 4881, 576, 4881, 584, 4882, 589, 4877, 592, 4875, 593, 4872, 594, 4870, 595, 4867, 603, 4844, 631, 4845, 643, 4846, 654, 4845, 657, 4845, 659, 4842, 668, 4831, 675, 4825, 678, 4822, 681, 4821, 685, 4820, 688, 4819, 698, 4815, 707, 4812, 709, 4812, 712, 4811, 716, 4811, 719, 4808, 723, 4807, 726, 4805, 729, 4804, 733, 4803, 737, 4803, 739, 4800, 747, 4790, 756, 4785, 777, 4775, 791, 4754, 803, 4737, 828, 4729, 830, 4728, 831, 4726, 836, 4719, 843, 4717, 845, 4716, 845, 4715, 848, 4709, 854, 4704, 859, 4700, 865, 4698, 873, 4695, 882, 4693, 885, 4693, 887, 4690, 892, 4685, 903, 4685, 915, 4684, 927, 4682, 939, 4680, 948, 4670, 949, 4669, 951, 4668, 970, 4656, 988, 4637, 997, 4627, 1001, 4610, 1002, 4607, 1004, 4606, 1009, 4604, 1010, 4597, 1011, 4591, 1012, 4586, 1013, 4584, 1014, 4582, 1018, 4574, 1021, 4565, 1025, 4553, 1037, 4546, 1039, 4546, 1040, 4545, 1048, 4539, 1055, 4531, 1057, 4530, 1058, 4529, 1065, 4525, 1068, 4516, 1071, 4504, 1079, 4497, 1082, 4494, 1085, 4489, 1086, 4488, 1087, 4487, 1103, 4476, 1113, 4458, 1115, 4455, 1115, 4453, 1116, 4445, 1118, 4439, 1120, 4437, 1121, 4435, 1124, 4432, 1126, 4429, 1135, 4420, 1145, 4411, 1147, 4410, 1150, 4409, 1160, 4405, 1165, 4400, 1173, 4394, 1173, 4384, 1172, 4372, 1175, 4361, 1176, 4358, 1177, 4356, 1179, 4353, 1181, 4350, 1187, 4341, 1197, 4338, 1212, 4333, 1217, 4319, 1222, 4305, 1229, 4293, 1234, 4285, 1239, 4280, 1240, 4278, 1242, 4278, 1261, 4272, 1283, 4272, 1298, 4272, 1312, 4271, 1314, 4271, 1315, 4270, 1326, 4264, 1328, 4251, 1328, 4247, 1329, 4243, 1330, 4242, 1329, 4240, 1329, 4231, 1335, 4226, 1337, 4225, 1339, 4223, 1341, 4221, 1343, 4218, 1347, 4213, 1354, 4208, 1356, 4208, 1356, 4206, 1358, 4204, 1360, 4202, 1364, 4199, 1365, 4196, 1368, 4186, 1368, 4175, 1368, 4172, 1368, 4170, 1368, 4167, 1371, 4166, 1371, 4165, 1371, 4165, 1373, 4161, 1373, 4154, 1373, 4151, 1375, 4148, 1384, 4132, 1391, 4117, 1392, 4116, 1393, 4114, 1403, 4109, 1408, 4096, 1413, 4086, 1417, 4075, 1418, 4072, 1418, 4070, 1418, 4065, 1422, 4063, 1425, 4061, 1428, 4057, 1434, 4048, 1435, 4036, 1435, 4033, 1436, 4031, 1442, 4019, 1450, 4011, 1452, 4009, 1454, 4007, 1456, 4006, 1457, 4003, 1461, 3994, 1462, 3983, 1463, 3979, 1463, 3975, 1464, 3960, 1467, 3946, 1468, 3943, 1470, 3939, 1474, 3933, 1483, 3926, 1491, 3920, 1495, 3912, 1497, 3910, 1497, 3907, 1498, 3894, 1499, 3881, 1499, 3877, 1499, 3873, 1500, 3864, 1504, 3860, 1511, 3854, 1514, 3850, 1516, 3847, 1519, 3845, 1525, 3841, 1525, 3834, 1526, 3833, 1526, 3831, 1527, 3826, 1528, 3821, 1528, 3819, 1529, 3818, 1536, 3809, 1548, 3806, 1558, 3802, 1563, 3794, 1565, 3792, 1567, 3790, 1569, 3788, 1569, 3787, 1570, 3777, 1579, 3771, 1589, 3765, 1601, 3756, 1608, 3751, 1614, 3740, 1616, 3737, 1617, 3734, 1620, 3728, 1622, 3722, 1627, 3710, 1632, 3700, 1633, 3698, 1635, 3696, 1637, 3694, 1637, 3692, 1640, 3682, 1640, 3671, 1639, 3646, 1653, 3633, 1651, 3634, 1648, 3635, 1647, 3636, 1645, 3636, 1632, 3639, 1628, 3647, 1627, 3649, 1625, 3651, 1622, 3653, 1617, 3654, 1615, 3653, 1612, 3653, 1598, 3652, 1590, 3655, 1587, 3655, 1585, 3656, 1572, 3657, 1561, 3653, 1559, 3652, 1556, 3652, 1549, 3652, 1547, 3648, 1547, 3646, 1545, 3646, 1543, 3645, 1541, 3644, 1534, 3640, 1526, 3636, 1524, 3635, 1524, 3634, 1521, 3628, 1511, 3629, 1496, 3632, 1490, 3617, 1489, 3615, 1489, 3614, 1488, 3609, 1485, 3607, 1467, 3594, 1454, 3569, 1452, 3566, 1452, 3564, 1452, 3557, 1448, 3553, 1446, 3551, 1443, 3548, 1434, 3538, 1423, 3534, 1418, 3532, 1415, 3529, Q, 1410, 3526, 1405, 3524, Z]
      ],
      "label": "Fiq",
      "shortLabel": "FZ",
      "labelPosition": [71.1, 431.6],
      "labelAlignment": [CEN, MID]
    }
  }
}];

export default {
  extension: geodefinitions,
  name: 'quneitra',
  type: 'maps'
};