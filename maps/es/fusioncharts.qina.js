/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Qina.18.08-13-2012 09:40:15
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
  "name": "Qina",
  "revision": 18,
  "standaloneInit": true,
  "baseWidth": 600,
  "baseHeight": 594,
  "baseScaleFactor": 10,
  "entities": {
    "01": {
      "outlines": [
        [M, 4138, 804, Q, 4100, 770, 4089, 761, 4086, 759, 4085, 758, 4037, 723, 4017, 705, 3987, 689, 3979, 679, 3968, 666, 3945, 648, 3845, 571, 3792, 535, 3692, 462, 3643, 425, 3602, 401, 3568, 371, 3539, 348, 3533, 341, 3529, 336, 3502, 320, 3499, 317, 3496, 313, 3490, 303, 3481, 301, 3475, 299, 3450, 271, 3420, 221, 3394, 205, 3353, 173, 3322, 158, 3314, 155, 3238, 123, 3229, 114, 3220, 111, 3204, 111, 3196, 108, 3163, 101, 3151, 96, 3137, 90, 3057, 77, 3023, 79, 3007, 74, 2983, 62, 2965, 58, 2906, 52, 2876, 43, 2874, 42, 2873, 42, 2841, 48, 2836, 31, L, 2827, 31, Q, 2815, 49, 2768, 76, 2716, 106, 2692, 131, 2681, 143, 2657, 157, 2630, 173, 2623, 180, 2613, 188, 2585, 205, 2564, 217, 2553, 225, 2540, 235, 2517, 250, 2490, 268, 2473, 274, 2458, 280, 2436, 307, 2413, 335, 2398, 341, 2382, 348, 2361, 371, 2338, 400, 2326, 412, 2270, 458, 2240, 487, 2147, 575, 2069, 641, 2020, 700, 2002, 715, 1980, 737, 1965, 747, 1956, 753, 1948, 768, 1941, 782, 1931, 789, 1901, 821, 1890, 831, 1880, 842, 1872, 854, 1864, 865, 1851, 877, 1803, 924, 1778, 950, 1762, 967, 1742, 991, 1734, 1000, 1720, 1007, 1701, 1017, 1698, 1019, 1651, 1052, 1606, 1079, 1546, 1123, 1519, 1138, 1487, 1161, 1470, 1166, 1447, 1191, 1435, 1195, 1429, 1197, 1386, 1220, 1350, 1239, 1344, 1246, L, 1271, 1320, 1192, 1384, Q, 1172, 1402, 1129, 1440, L, 1025, 1540, Q, 997, 1568, 983, 1581, 968, 1595, 954, 1614, 940, 1633, 930, 1649, 920, 1665, 901, 1686, 882, 1707, 880, 1714, 874, 1727, 858, 1745, 854, 1751, 845, 1757, 838, 1763, 841, 1774, 824, 1792, 786, 1837, 781, 1843, 779, 1861, 770, 1883, 770, 1885, 771, 1895, 764, 1909, 758, 1921, 760, 1931, L, 751, 1931, Q, 754, 1950, 748, 1956, 738, 1967, 736, 1978, 736, 1986, 725, 1996, 714, 2005, 713, 2015, 695, 2015, 692, 2026, 690, 2032, 684, 2034, 676, 2036, 673, 2039, 673, 2040, 657, 2053, 643, 2064, 643, 2071, 643, 2086, 653, 2086, L, 653, 2110, Q, 663, 2109, 663, 2121, 664, 2139, 667, 2143, 676, 2157, 685, 2179, 687, 2182, 696, 2192, 704, 2199, 707, 2210, 709, 2215, 720, 2226, 729, 2235, 729, 2246, 729, 2253, 728, 2253, 727, 2254, 717, 2254, L, 717, 2279, Q, 730, 2285, 744, 2310, 745, 2311, 745, 2312, L, 745, 2323, Q, 756, 2323, 756, 2335, 758, 2353, 759, 2356, 763, 2364, 781, 2374, 789, 2382, 799, 2389, L, 799, 2389, Q, 816, 2401, 835, 2408, 838, 2409, 841, 2411, 863, 2421, 885, 2443, 891, 2449, 897, 2454, 918, 2470, 940, 2470, 935, 2478, 944, 2480, 948, 2481, 957, 2480, L, 957, 2491, Q, 967, 2491, 968, 2492, L, 968, 2506, 962, 2506, Q, 956, 2502, 953, 2510, L, 947, 2510, Q, 945, 2509, 940, 2509, L, 940, 2495, 916, 2495, Q, 921, 2477, 892, 2477, 892, 2468, 888, 2465, 884, 2461, 877, 2464, 881, 2455, 870, 2453, 856, 2451, 856, 2438, 840, 2438, 838, 2438, 831, 2435, 835, 2423, 814, 2421, 804, 2418, 787, 2414, 791, 2399, L, 775, 2399, Q, 769, 2388, 763, 2386, 757, 2386, 753, 2385, 728, 2387, 734, 2366, 715, 2363, 707, 2356, 697, 2349, 683, 2346, 683, 2330, 677, 2326, 670, 2322, 670, 2304, 653, 2276, 653, 2267, 648, 2266, 640, 2266, L, 640, 2245, 633, 2245, Q, 638, 2235, 619, 2230, L, 619, 2209, Q, 608, 2213, 607, 2202, 608, 2187, 607, 2182, 601, 2180, 596, 2180, 600, 2167, 583, 2167, 573, 2161, 557, 2161, 543, 2161, 530, 2154, 520, 2148, 504, 2152, L, 502, 2143, 492, 2143, Q, 490, 2138, 490, 2135, 496, 2129, 496, 2111, 500, 2111, 509, 2110, L, 509, 2096, Q, 489, 2092, 485, 2092, 473, 2092, 469, 2099, 463, 2108, 447, 2108, 440, 2115, 428, 2116, 421, 2123, 407, 2123, 393, 2123, 390, 2119, L, 376, 2119, 376, 2140, Q, 377, 2151, 364, 2156, L, 364, 2179, Q, 364, 2189, 358, 2197, 349, 2193, 348, 2200, 347, 2203, 348, 2210, 343, 2210, 340, 2215, L, 340, 2230, Q, 330, 2229, 325, 2230, 318, 2230, 317, 2240, L, 304, 2240, 304, 2248, 244, 2248, Q, 242, 2247, 242, 2242, 206, 2247, 217, 2227, L, 197, 2227, 197, 2218, Q, 188, 2221, 182, 2216, 176, 2210, 166, 2210, L, 166, 2205, 157, 2205, Q, 163, 2232, 146, 2243, 117, 2264, 116, 2264, 95, 2274, 56, 2308, 56, 2308, 35, 2311, 40, 2322, 27, 2329, 36, 2333, 41, 2353, 43, 2364, 47, 2388, 80, 2388, 88, 2403, 95, 2419, 119, 2437, 129, 2444, 131, 2459, 131, 2468, 135, 2480, 139, 2493, 148, 2499, 158, 2504, 170, 2522, 183, 2539, 203, 2542, 210, 2543, 238, 2566, 245, 2571, 262, 2573, 279, 2575, 284, 2581, 292, 2590, 305, 2591, 324, 2593, 328, 2599, L, 346, 2596, Q, 359, 2596, 360, 2602, 361, 2611, 374, 2614, 374, 2610, 381, 2609, 388, 2607, 386, 2602, L, 408, 2602, Q, 460, 2684, 467, 2701, 502, 2700, 512, 2708, 516, 2712, 524, 2722, 530, 2724, 542, 2727, 550, 2734, 566, 2759, 579, 2774, 576, 2800, 579, 2801, 619, 2803, 630, 2803, 637, 2811, 642, 2812, 652, 2819, 666, 2831, 683, 2841, 695, 2854, 695, 2854, 701, 2864, 709, 2868, L, 709, 2871, 764, 2871, Q, 766, 2881, 785, 2882, 795, 2882, 816, 2881, 827, 2881, 829, 2886, 830, 2891, 836, 2891, 852, 2893, 853, 2899, L, 890, 2899, Q, 895, 2888, 896, 2887, L, 940, 2887, 940, 2898, 961, 2898, Q, 963, 2892, 965, 2890, L, 1049, 2890, Q, 1050, 2892, 1049, 2901, 1048, 2908, 1054, 2908, L, 1054, 2933, Q, 1064, 2932, 1082, 2932, 1077, 2915, 1105, 2918, 1105, 2891, 1106, 2879, L, 1126, 2879, Q, 1129, 2888, 1136, 2887, 1135, 2899, 1167, 2899, 1180, 2899, 1187, 2896, 1195, 2893, 1210, 2893, 1211, 2882, 1222, 2878, 1229, 2876, 1237, 2864, 1252, 2860, 1255, 2856, 1273, 2854, 1277, 2846, 1281, 2839, 1292, 2834, 1305, 2827, 1311, 2822, 1336, 2816, 1353, 2811, 1354, 2806, 1354, 2795, L, 1402, 2795, Q, 1403, 2797, 1411, 2799, 1414, 2792, 1447, 2792, 1449, 2792, 1471, 2779, 1471, 2778, 1487, 2777, 1495, 2776, 1497, 2767, 1511, 2762, 1525, 2755, 1552, 2747, 1556, 2742, 1574, 2734, 1581, 2725, 1613, 2689, 1624, 2681, L, 1636, 2681, 1636, 2692, 1643, 2692, Q, 1645, 2690, 1653, 2690, 1654, 2683, 1654, 2668, L, 1675, 2668, 1675, 2662, 1687, 2662, 1687, 2651, 1706, 2651, 1706, 2644, 1718, 2644, Q, 1718, 2635, 1720, 2632, L, 1738, 2632, 1738, 2621, 1754, 2623, Q, 1761, 2623, 1760, 2616, 1760, 2610, 1771, 2609, L, 1795, 2609, Q, 1796, 2600, 1810, 2600, 1825, 2601, 1829, 2591, L, 1837, 2591, Q, 1837, 2599, 1837, 2601, 1840, 2598, 1851, 2605, 1853, 2622, 1864, 2616, L, 1864, 2628, 1877, 2628, 1877, 2611, Q, 1891, 2611, 1896, 2613, L, 1896, 2605, 1908, 2605, Q, 1907, 2576, 1908, 2561, 1911, 2534, 1927, 2536, L, 1927, 2515, Q, 1939, 2516, 1960, 2504, 1963, 2502, 1995, 2502, 2002, 2501, 2025, 2494, 2044, 2488, 2059, 2491, 2095, 2489, 2103, 2488, 2110, 2487, 2116, 2485, 2123, 2482, 2139, 2479, 2154, 2476, 2170, 2471, 2187, 2466, 2208, 2467, 2212, 2467, 2220, 2462, 2228, 2457, 2239, 2457, 2245, 2457, 2249, 2450, 2253, 2444, 2271, 2443, 2289, 2442, 2303, 2431, 2318, 2419, 2331, 2416, 2343, 2413, 2346, 2411, 2377, 2401, 2383, 2396, 2385, 2370, 2429, 2369, 2429, 2364, 2438, 2359, L, 2446, 2351, Q, 2451, 2350, 2464, 2350, 2470, 2350, 2472, 2345, 2474, 2341, 2479, 2341, 2480, 2341, 2497, 2349, 2512, 2356, 2526, 2354, 2542, 2352, 2556, 2361, 2574, 2372, 2576, 2373, 2581, 2374, 2606, 2373, 2626, 2373, 2632, 2380, 2644, 2385, 2662, 2387, 2677, 2387, 2683, 2393, 2692, 2399, 2707, 2399, 2721, 2401, 2727, 2411, 2774, 2425, 2777, 2428, 2784, 2436, 2801, 2448, 2813, 2457, 2818, 2467, 2823, 2478, 2839, 2504, 2853, 2507, 2849, 2519, 2849, 2525, 2857, 2540, L, 2858, 2566, Q, 2861, 2571, 2861, 2590, 2861, 2608, 2866, 2614, 2871, 2619, 2879, 2627, 2885, 2636, 2885, 2653, L, 2885, 2784, Q, 2885, 2809, 2873, 2860, 2873, 2868, 2878, 2894, 2878, 2913, 2876, 2920, L, 2868, 2920, 2868, 2932, Q, 2857, 2932, 2850, 2936, 2843, 2940, 2834, 2940, 2834, 2960, 2822, 2987, 2826, 3000, 2818, 3011, 2814, 3017, 2807, 3029, 2806, 3029, 2806, 3030, 2806, 3031, 2806, 3032, 2808, 3043, 2804, 3052, 2801, 3058, 2796, 3070, 2780, 3065, 2784, 3082, 2777, 3080, 2777, 3091, 2777, 3097, 2777, 3107, L, 2769, 3107, Q, 2767, 3120, 2752, 3144, 2738, 3166, 2739, 3187, 2736, 3192, 2731, 3206, 2726, 3219, 2719, 3225, 2716, 3227, 2715, 3244, 2715, 3261, 2707, 3265, L, 2707, 3292, 2717, 3292, 2717, 3316, 2702, 3316, 2702, 3324, Q, 2697, 3324, 2695, 3325, L, 2695, 3336, Q, 2701, 3334, 2707, 3340, 2713, 3346, 2713, 3352, 2713, 3356, 2708, 3359, L, 2708, 3391, Q, 2716, 3391, 2722, 3395, 2728, 3400, 2734, 3400, 2759, 3400, 2761, 3412, 2771, 3410, 2782, 3421, 2783, 3422, 2812, 3424, 2821, 3425, 2838, 3433, 2854, 3447, 2863, 3443, 2862, 3454, 2877, 3456, 2897, 3459, 2903, 3465, 2913, 3462, 2925, 3472, 2932, 3472, 2952, 3480, 3007, 3502, 3046, 3510, L, 3046, 3552, Q, 3048, 3563, 3047, 3589, 3047, 3616, 3042, 3639, 3036, 3661, 3036, 3706, 3036, 3731, 3029, 3762, 3024, 3789, 3025, 3819, 3027, 3848, 3022, 3875, 3016, 3903, 3017, 3931, 3019, 3965, 3013, 3989, 3007, 4015, 3009, 4044, L, 3009, 4072, Q, 3009, 4082, 3003, 4087, 3000, 4090, 2994, 4096, 2989, 4103, 2974, 4113, 2960, 4122, 2956, 4129, 2943, 4153, 2883, 4203, 2870, 4215, 2853, 4236, 2836, 4257, 2814, 4276, 2792, 4296, 2762, 4327, 2734, 4356, 2726, 4363, 2718, 4370, 2703, 4386, 2689, 4402, 2662, 4427, 2635, 4452, 2581, 4493, 2539, 4526, 2507, 4554, 2500, 4560, 2488, 4567, 2483, 4576, 2470, 4579, 2464, 4580, 2458, 4596, 2457, 4597, 2447, 4599, 2440, 4600, 2441, 4607, 2387, 4633, 2344, 4639, 2329, 4648, 2324, 4648, 2306, 4648, 2302, 4654, 2297, 4664, 2285, 4668, 2263, 4676, 2262, 4676, 2255, 4680, 2237, 4683, 2234, 4685, 2224, 4686, 2215, 4686, 2212, 4691, 2206, 4699, 2190, 4700, 2175, 4710, 2168, 4711, 2105, 4734, 2072, 4738, 2071, 4751, 2057, 4752, 2032, 4752, 2008, 4752, L, 1898, 4752, Q, 1898, 4753, 1897, 4760, 1897, 4776, 1913, 4786, L, 1913, 4801, 1901, 4801, 1901, 4812, 1886, 4812, Q, 1880, 4813, 1879, 4818, 1878, 4823, 1873, 4824, L, 1839, 4824, 1839, 4831, 1813, 4831, 1813, 4847, Q, 1819, 4847, 1829, 4852, L, 1829, 4904, Q, 1828, 4906, 1820, 4911, 1819, 4912, 1819, 4919, 1819, 4932, 1828, 4931, 1825, 4940, 1834, 4950, 1844, 4961, 1844, 4965, 1837, 4996, 1829, 5000, 1822, 5004, 1824, 5020, 1812, 5022, 1810, 5022, 1809, 5023, 1809, 5030, 1809, 5033, 1821, 5042, L, 1834, 5042, 1834, 5035, 1846, 5035, Q, 1852, 5042, 1852, 5048, 1852, 5056, 1841, 5061, 1851, 5059, 1851, 5074, L, 1852, 5105, Q, 1874, 5118, 1874, 5131, 1874, 5136, 1867, 5162, L, 1867, 5203, Q, 1867, 5204, 1860, 5206, 1856, 5208, 1859, 5215, L, 1859, 5236, Q, 1858, 5255, 1852, 5257, 1846, 5259, 1846, 5273, 1846, 5280, 1852, 5305, L, 1866, 5305, Q, 1866, 5346, 1867, 5362, 1868, 5371, 1882, 5379, 1888, 5387, 1908, 5387, 1915, 5394, 1927, 5405, 1935, 5414, 1934, 5429, 1933, 5455, 1937, 5462, 1943, 5473, 1968, 5473, 1972, 5473, 1990, 5467, 2002, 5467, 2007, 5468, 2007, 5481, 2014, 5490, 2020, 5500, 2020, 5516, 2037, 5529, 2037, 5532, L, 2037, 5562, Q, 2037, 5572, 2044, 5571, 2054, 5570, 2059, 5575, 2070, 5588, 2077, 5592, 2095, 5602, 2111, 5627, L, 2143, 5662, Q, 2152, 5680, 2198, 5696, 2202, 5699, 2221, 5699, 2236, 5700, 2242, 5711, 2251, 5714, 2272, 5714, 2282, 5724, 2277, 5741, 2299, 5747, 2300, 5764, L, 2300, 5779, Q, 2301, 5789, 2317, 5790, 2325, 5795, 2353, 5820, 2381, 5843, 2395, 5842, 2419, 5841, 2475, 5872, L, 2487, 5885, Q, 2495, 5892, 2509, 5891, 2516, 5890, 2544, 5906, 2553, 5906, 2564, 5889, 2574, 5874, 2574, 5869, 2579, 5869, 2579, 5863, 2576, 5845, 2576, 5841, 2576, 5830, 2578, 5824, L, 2564, 5824, 2564, 5815, Q, 2569, 5812, 2579, 5812, L, 2579, 5800, 2586, 5800, 2586, 5792, 2601, 5792, Q, 2601, 5795, 2602, 5802, 2613, 5802, 2618, 5808, 2623, 5813, 2629, 5813, L, 2629, 5822, Q, 2638, 5822, 2641, 5824, L, 2650, 5824, 2650, 5815, 2656, 5815, 2656, 5825, Q, 2672, 5821, 2671, 5834, 2678, 5836, 2689, 5837, 2689, 5838, 2709, 5839, 2719, 5840, 2715, 5852, L, 2720, 5852, 2720, 5842, 2728, 5840, Q, 2728, 5696, 2729, 5666, 2740, 5658, 2740, 5651, 2739, 5644, 2743, 5634, 2764, 5621, 2756, 5602, 2764, 5586, 2776, 5579, 2788, 5574, 2792, 5572, 2797, 5568, 2798, 5558, 2803, 5557, 2848, 5525, 2871, 5510, 2892, 5488, 2913, 5466, 2964, 5422, 3016, 5379, 3023, 5375, 3030, 5371, 3077, 5328, 3123, 5285, 3158, 5258, 3194, 5230, 3221, 5200, 3249, 5170, 3293, 5138, 3337, 5105, 3366, 5075, 3397, 5046, 3420, 5031, 3442, 5015, 3460, 4994, 3478, 4973, 3522, 4937, 3566, 4900, 3602, 4869, 3640, 4835, 3658, 4816, 3665, 4808, 3709, 4768, 3745, 4735, 3761, 4723, 3779, 4707, 3787, 4700, 3800, 4689, 3815, 4686, 3816, 4685, 3817, 4685, 3837, 4686, 3913, 4685, 4009, 4685, 4055, 4685, 4055, 4685, 4099, 4685, 4172, 4684, 4369, 4683, 4453, 4679, 4611, 4672, L, 5128, 4668, Q, 5224, 4667, 5319, 4661, 5355, 4661, 5428, 4661, 5487, 4660, 5509, 4649, L, 5647, 4649, Q, 5648, 4609, 5617, 4589, 5598, 4576, 5593, 4569, 5575, 4546, 5570, 4544, 5547, 4536, 5512, 4498, 5459, 4460, 5453, 4453, 5445, 4445, 5366, 4369, 5287, 4294, 5248, 4235, 5239, 4223, 5216, 4195, 5193, 4166, 5185, 4156, 5183, 4154, 5182, 4153, 5172, 4140, 5160, 4106, 5146, 4065, 5146, 4036, 5146, 4007, 5151, 4000, 5156, 3993, 5158, 3958, 5169, 3910, 5171, 3886, 5172, 3868, 5182, 3848, 5195, 3821, 5197, 3816, 5197, 3798, 5206, 3778, 5216, 3755, 5218, 3747, 5217, 3743, 5230, 3712, 5243, 3685, 5246, 3682, 5261, 3665, 5282, 3623, 5295, 3606, 5322, 3562, 5338, 3547, 5342, 3540, 5345, 3533, 5350, 3525, 5354, 3516, 5356, 3513, 5358, 3509, 5360, 3509, 5382, 3477, 5419, 3420, 5434, 3401, 5472, 3341, 5509, 3281, 5537, 3251, 5564, 3221, 5586, 3199, 5607, 3177, 5619, 3163, 5627, 3159, 5643, 3141, 5659, 3124, 5665, 3120, 5670, 3116, 5702, 3084, 5734, 3052, 5788, 2998, 5794, 2993, 5810, 2982, 5826, 2971, 5834, 2958, 5842, 2946, 5855, 2935, 5867, 2923, 5885, 2900, 5903, 2877, 5958, 2837, 5962, 2832, 5964, 2833, 5965, 2833, 5965, 2827, 5965, 2815, 5951, 2799, 5941, 2782, 5934, 2766, 5927, 2750, 5912, 2725, 5898, 2701, 5877, 2667, 5857, 2633, 5850, 2614, 5805, 2531, 5732, 2390, 5657, 2247, 5634, 2209, 5610, 2171, 5604, 2158, 5594, 2129, 5589, 2119, 5562, 2085, 5551, 2059, 5499, 1958, 5487, 1936, 5474, 1915, 5464, 1897, 5453, 1878, 5440, 1851, 5426, 1823, 5413, 1803, 5400, 1783, 5390, 1761, 5380, 1739, 5369, 1715, 5357, 1690, 5349, 1678, 5319, 1632, 5316, 1627, 5283, 1554, 5254, 1506, 5225, 1458, 5198, 1406, 5171, 1355, 5159, 1337, 5141, 1310, 5122, 1268, 5099, 1219, 5087, 1198, 5064, 1155, 5046, 1127, 5028, 1098, 5015, 1067, 5012, 1060, 5002, 1052, 4995, 1045, 4999, 1036, 4984, 1023, 4980, 1007, L, 4957, 1007, 4957, 999, 4916, 999, Q, 4906, 1009, 4898, 1009, 4891, 1009, 4885, 1014, 4878, 1021, 4877, 1021, 4844, 1027, 4832, 1034, 4801, 1043, 4789, 1051, 4778, 1058, 4762, 1060, 4745, 1060, 4738, 1061, 4730, 1063, 4727, 1067, 4722, 1073, 4715, 1076, 4698, 1077, 4693, 1082, 4686, 1089, 4670, 1092, 4652, 1094, 4645, 1099, 4638, 1104, 4630, 1104, 4618, 1103, 4618, 1103, 4612, 1104, 4609, 1111, 4606, 1118, 4601, 1120, 4575, 1133, 4555, 1133, 4555, 1137, 4552, 1144, L, 4470, 1144, Q, 4407, 1080, 4378, 1048, 4319, 990, 4284, 953, 4205, 880, 4186, 853, Q, 4175, 837, 4138, 804, Z]
      ],
      "label": "Qina",
      "shortLabel": "QI",
      "labelPosition": [411.6, 296.8],
      "labelAlignment": [CEN, MID]
    }
  }
}];

export default {
  extension: geodefinitions,
  name: 'qina',
  type: 'maps'
};