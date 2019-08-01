/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Vest.20.12-21-2012 11:40:52
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
  "name": "Vest",
  "revision": 20,
  "standaloneInit": true,
  "baseWidth": 305,
  "baseHeight": 280,
  "baseScaleFactor": 10,
  "entities": {
    "RO.AR": {
      "outlines": [
        [M, 1680, 80, Q, 1648, 79, 1617, 79, 1608, 78, 1599, 77, 1590, 76, 1588, 84, 1586, 85, 1587, 86, 1585, 89, 1584, 91, 1580, 97, 1577, 106, 1575, 107, 1575, 108, 1572, 118, 1564, 118, 1557, 118, 1551, 119, 1536, 120, 1540, 106, 1540, 103, 1539, 101, 1532, 89, 1519, 90, 1512, 91, 1514, 81, 1514, 79, 1513, 76, 1510, 71, 1501, 74, 1498, 74, 1497, 73, 1492, 68, 1493, 58, 1494, 44, 1482, 42, 1479, 42, 1475, 42, 1427, 42, 1379, 42, 1373, 42, 1367, 43, 1351, 45, 1354, 31, 1355, 22, 1349, 22, 1336, 21, 1324, 20, 1308, 18, 1303, 28, 1298, 36, 1292, 41, 1285, 45, 1271, 46, 1260, 44, 1244, 55, L, 1244, 55, Q, 1238, 63, 1237, 68, 1236, 72, 1235, 73, 1234, 75, 1233, 81, 1233, 83, 1232, 84, 1209, 86, 1184, 86, L, 1182, 86, Q, 1179, 71, 1179, 55, 1179, 53, 1178, 52, 1171, 49, 1163, 49, L, 1161, 49, Q, 1158, 37, 1159, 23, L, 1159, 21, Q, 1150, 24, 1141, 23, 1133, 23, 1125, 22, 1118, 21, 1118, 28, 1113, 28, 1107, 30, 1105, 30, 1103, 32, 1097, 39, 1091, 47, 1090, 48, 1090, 49, 1089, 53, 1087, 55, 1086, 58, 1085, 60, 1084, 62, 1082, 64, 1076, 71, 1069, 79, 1067, 80, 1055, 77, 1042, 75, 1025, 84, 1007, 92, 1007, 93, 1007, 95, 1004, 96, 1002, 98, 1000, 95, 997, 126, 997, 157, 997, 172, 989, 179, 988, 180, 987, 182, 983, 190, 971, 190, 970, 190, 968, 190, 961, 189, 960, 196, 953, 197, 959, 206, 964, 214, 956, 217, 948, 220, 945, 223, 942, 226, 937, 221, L, 934, 229, Q, 930, 244, 942, 245, 945, 247, 950, 248, 952, 248, 954, 249, 957, 251, 962, 253, 966, 254, 966, 255, 968, 286, 968, 315, 968, 319, 967, 321, 967, 323, 966, 324, 965, 326, 964, 329, 964, 330, 964, 331, 962, 335, 961, 336, 957, 341, 950, 345, 945, 348, 941, 352, 938, 356, 934, 358, 930, 362, 926, 362, 907, 362, 891, 366, 889, 366, 886, 367, 881, 370, 875, 374, 874, 375, 874, 377, 873, 402, 873, 427, 873, 451, 874, 476, 875, 491, 865, 498, 864, 499, 863, 500, 860, 505, 857, 505, 831, 505, 816, 505, 800, 505, 802, 513, 805, 520, 789, 534, 776, 529, 765, 534, 757, 543, 758, 558, 757, 560, 756, 561, 749, 563, 742, 563, 739, 563, 739, 562, 737, 554, 737, 547, 736, 544, 735, 542, 735, 541, 734, 540, 733, 537, 731, 535, 728, 526, 728, 516, L, 721, 510, Q, 688, 510, 655, 510, 652, 510, 650, 512, 648, 513, 647, 513, 638, 516, 639, 529, 637, 535, 634, 537, 630, 541, 628, 546, 623, 553, 608, 552, 600, 551, 594, 552, 584, 553, 582, 547, 582, 546, 582, 545, 584, 529, 570, 532, 555, 536, 558, 521, 561, 505, 551, 503, 546, 502, 542, 499, 540, 499, 539, 499, 526, 498, 516, 500, 506, 503, 494, 501, 483, 499, 483, 505, 484, 512, 482, 515, 479, 517, 480, 529, 480, 532, 479, 534, 476, 536, 474, 542, 473, 544, 472, 545, 466, 548, 466, 556, 465, 558, 464, 559, 463, 561, 462, 562, 459, 567, 460, 572, 458, 584, 452, 590, 451, 592, 450, 595, 449, 597, 448, 600, 446, 603, 444, 611, 441, 614, 434, 613, 431, 613, 429, 615, 420, 623, 415, 629, 414, 630, 413, 630, 401, 631, 402, 645, 404, 665, 397, 677, 416, 677, 436, 678, 437, 678, 439, 678, 445, 681, 444, 691, 442, 699, 445, 704, 448, 708, 457, 707, 462, 705, 461, 711, 457, 728, 473, 725, 483, 724, 485, 730, 485, 731, 486, 732, 490, 736, 490, 746, 490, 747, 491, 748, 495, 752, 505, 752, 512, 751, 516, 752, 518, 753, 520, 753, 522, 753, 525, 752, 527, 750, 537, 754, 546, 757, 548, 760, 550, 764, 551, 765, 553, 766, 555, 767, 560, 768, 565, 770, 571, 773, 578, 773, 579, 774, 581, 774, 592, 781, 601, 783, 609, 785, 612, 787, 615, 790, 618, 791, 621, 790, 621, 795, 621, 799, 624, 812, 624, 813, 626, 813, 652, 814, 677, 813, 688, 813, 693, 817, 700, 823, 702, 838, L, 705, 838, Q, 714, 838, 723, 840, L, 723, 843, Q, 721, 852, 729, 851, 739, 850, 738, 861, 735, 876, 753, 873, 759, 872, 760, 865, 761, 861, 764, 859, 767, 856, 769, 849, 771, 846, 772, 843, 776, 832, 792, 834, 798, 835, 805, 834, 813, 834, 814, 838, 815, 844, 815, 851, 815, 862, 818, 873, 819, 874, 821, 875, 868, 875, 913, 875, 917, 874, 919, 880, 920, 886, 920, 887, 920, 888, 922, 893, 924, 898, 932, 899, 961, 899, 981, 899, 987, 887, 989, 884, 990, 882, 992, 880, 994, 878, 994, 877, 995, 874, 997, 873, 998, 872, 999, 871, 1000, 869, 1002, 867, 1002, 866, 1003, 865, 1006, 861, 1009, 856, 1010, 854, 1013, 852, 1015, 851, 1016, 849, 1024, 843, 1032, 839, 1035, 838, 1037, 838, 1039, 836, 1041, 834, 1047, 827, 1051, 814, 1053, 807, 1065, 808, 1079, 809, 1092, 810, 1112, 809, 1132, 812, L, 1133, 814, Q, 1135, 825, 1135, 843, 1134, 858, 1134, 875, 1142, 875, 1150, 875, 1161, 876, 1160, 890, 1159, 896, 1159, 904, 1158, 911, 1168, 910, 1176, 909, 1182, 909, 1191, 909, 1200, 911, L, 1200, 914, Q, 1201, 917, 1208, 915, 1214, 913, 1214, 919, 1213, 924, 1217, 924, 1221, 924, 1222, 927, 1223, 931, 1224, 932, 1225, 936, 1225, 938, 1225, 952, 1227, 964, L, 1230, 964, Q, 1276, 964, 1324, 964, 1372, 964, 1419, 964, 1422, 964, 1426, 965, 1427, 966, 1427, 969, 1428, 975, 1430, 980, 1431, 981, 1432, 981, 1438, 983, 1438, 993, 1439, 994, 1441, 995, 1454, 996, 1466, 996, 1474, 996, 1481, 993, 1482, 993, 1482, 991, 1482, 969, 1484, 953, 1490, 959, 1495, 948, 1500, 937, 1503, 935, 1507, 932, 1512, 932, 1540, 932, 1567, 935, 1568, 936, 1568, 938, 1569, 944, 1571, 948, 1572, 952, 1572, 954, 1568, 970, 1585, 970, 1615, 969, 1643, 969, 1646, 969, 1647, 975, 1645, 986, 1648, 998, L, 1650, 998, Q, 1669, 998, 1687, 1001, L, 1687, 1003, Q, 1686, 1012, 1690, 1016, 1691, 1017, 1691, 1019, 1689, 1034, 1707, 1031, 1713, 1030, 1719, 1030, 1767, 1030, 1815, 1030, 1839, 1030, 1864, 1029, 1866, 1029, 1866, 1028, 1867, 1025, 1869, 1022, 1869, 1020, 1869, 1019, 1870, 1013, 1873, 1011, L, 1873, 1011, 1873, 1011, 1873, 1011, Q, 1875, 1015, 1877, 1009, 1879, 1002, 1887, 1001, 1894, 1001, 1893, 987, 1893, 976, 1893, 966, 1893, 961, 1898, 962, 1927, 961, 1957, 960, 1958, 960, 1959, 959, 1965, 952, 1973, 947, 1975, 946, 1978, 944, 1979, 944, 1980, 943, 1986, 938, 1986, 925, 1985, 901, 1986, 877, 1986, 863, 1978, 856, 1976, 855, 1975, 854, 1969, 849, 1967, 846, 1963, 843, 1959, 841, 1953, 839, 1952, 835, 1951, 833, 1951, 830, 1951, 808, 1953, 787, 1954, 785, 1957, 783, 1960, 780, 1967, 780, 1982, 781, 1994, 778, 1995, 776, 1996, 775, 1997, 770, 2003, 768, 2008, 758, 2010, 748, 2011, 747, 2011, 746, 2012, 743, 2013, 741, 2014, 738, 2016, 735, 2017, 731, 2018, 727, 2018, 725, 2018, 722, 2019, 699, 2018, 675, 2018, 659, 2022, 648, 2023, 646, 2024, 645, 2033, 641, 2046, 642, 2094, 643, 2143, 643, 2162, 643, 2180, 640, L, 2180, 638, Q, 2179, 624, 2183, 615, 2185, 610, 2191, 610, 2197, 611, 2203, 612, 2212, 612, 2213, 608, 2214, 605, 2214, 601, 2214, 569, 2216, 537, 2216, 536, 2217, 535, 2222, 533, 2225, 531, 2231, 527, 2236, 523, 2238, 521, 2240, 520, 2250, 514, 2254, 500, 2255, 495, 2260, 494, 2261, 494, 2262, 493, 2266, 487, 2268, 483, 2268, 480, 2268, 478, 2270, 472, 2271, 466, 2272, 456, 2263, 458, 2261, 457, 2261, 456, 2258, 454, 2254, 454, 2246, 455, 2240, 454, 2229, 452, 2233, 437, L, 2233, 434, Q, 2222, 432, 2212, 432, 2209, 432, 2206, 432, 2179, 434, 2152, 434, 2102, 434, 2051, 433, 2050, 433, 2049, 432, 2041, 428, 2043, 413, 2044, 406, 2038, 404, 2035, 403, 2034, 401, 2030, 399, 2022, 400, 2018, 400, 2015, 399, 2005, 396, 1991, 397, 1979, 397, 1967, 396, 1965, 396, 1964, 396, 1947, 396, 1948, 382, 1948, 369, 1950, 356, 1949, 350, 1946, 350, 1943, 349, 1942, 348, 1940, 347, 1938, 345, 1937, 343, 1936, 342, 1936, 335, 1931, 332, 1924, 327, 1925, 313, 1925, 307, 1923, 298, 1916, 296, 1914, 292, 1906, 282, 1902, 279, 1900, 277, 1900, 276, 1900, 266, 1893, 266, 1891, 266, 1889, 265, 1886, 260, 1880, 259, 1877, 258, 1876, 256, 1875, 254, 1873, 250, 1873, 249, 1873, 247, 1872, 239, 1872, 232, 1871, 233, 1870, 233, 1855, 234, 1840, 234, 1834, 234, 1827, 233, 1811, 231, 1812, 244, 1812, 250, 1808, 255, 1805, 259, 1802, 266, 1801, 269, 1800, 271, 1797, 275, 1788, 274, 1785, 273, 1784, 272, 1779, 266, 1780, 253, 1780, 250, 1779, 249, 1772, 247, 1764, 247, L, 1762, 247, Q, 1759, 228, 1759, 210, 1759, 161, 1759, 113, L, 1759, 111, Q, 1729, 108, 1698, 109, 1691, 109, 1692, 99, 1693, 96, 1692, 92, 1692, 89, 1691, 86, 1691, 83, 1690, 82, 1686, 81, 1682, 80, Q, 1681, 80, 1680, 80, Z]
      ],
      "label": "Arad",
      "shortLabel": "AR",
      "labelPosition": [133.4, 52.6],
      "labelAlignment": [CEN, MID]
    },
    "RO.CS": {
      "outlines": [
        [M, 1951, 1370, Q, 1944, 1361, 1937, 1354, 1936, 1351, 1935, 1349, 1934, 1348, 1932, 1347, 1929, 1345, 1926, 1342, 1922, 1345, 1919, 1349, 1916, 1351, 1914, 1353, 1909, 1355, 1905, 1359, 1904, 1360, 1903, 1360, L, 1900, 1361, Q, 1899, 1367, 1897, 1370, 1894, 1373, 1892, 1377, 1891, 1378, 1889, 1379, 1877, 1380, 1864, 1380, 1861, 1380, 1859, 1381, 1851, 1386, 1845, 1399, 1842, 1401, 1840, 1403, 1839, 1405, 1834, 1407, 1827, 1408, 1824, 1412, 1823, 1414, 1822, 1415, 1816, 1425, 1808, 1435, 1807, 1436, 1806, 1437, 1806, 1442, 1802, 1444, 1791, 1446, 1779, 1445, 1756, 1445, 1731, 1444, 1729, 1443, 1726, 1442, 1721, 1439, 1723, 1430, 1725, 1418, 1715, 1420, 1708, 1420, 1704, 1417, 1703, 1414, 1699, 1414, 1687, 1414, 1674, 1415, 1672, 1415, 1671, 1415, 1669, 1417, 1667, 1418, 1666, 1419, 1665, 1421, 1665, 1423, 1664, 1424, 1660, 1432, 1655, 1437, 1654, 1438, 1653, 1439, 1640, 1440, 1628, 1440, 1626, 1440, 1623, 1441, 1613, 1445, 1607, 1451, 1606, 1452, 1606, 1453, 1605, 1456, 1604, 1456, 1600, 1458, 1600, 1463, 1600, 1467, 1600, 1472, 1597, 1485, 1607, 1488, 1611, 1488, 1612, 1489, 1616, 1491, 1621, 1493, 1623, 1493, 1625, 1494, 1628, 1496, 1634, 1499, 1635, 1500, 1636, 1501, 1637, 1508, 1637, 1516, 1638, 1529, 1634, 1538, 1632, 1545, 1628, 1547, 1626, 1548, 1625, 1549, 1623, 1550, 1622, 1553, 1622, 1555, 1622, 1556, 1622, 1571, 1616, 1577, 1615, 1578, 1614, 1578, 1579, 1579, 1545, 1580, 1539, 1580, 1537, 1575, 1536, 1570, 1535, 1566, 1534, 1555, 1535, 1543, 1535, 1538, 1531, 1538, 1517, 1538, 1502, 1538, L, 1499, 1538, Q, 1497, 1522, 1497, 1506, L, 1497, 1504, Q, 1471, 1501, 1444, 1501, 1438, 1501, 1434, 1504, 1433, 1505, 1433, 1507, 1433, 1508, 1432, 1512, 1431, 1515, 1429, 1529, 1427, 1544, 1412, 1544, 1400, 1543, 1387, 1544, 1372, 1545, 1363, 1542, 1361, 1540, 1360, 1539, 1357, 1527, 1357, 1513, L, 1357, 1511, Q, 1339, 1508, 1320, 1509, L, 1318, 1509, Q, 1315, 1495, 1316, 1482, 1315, 1479, 1314, 1478, 1307, 1473, 1292, 1473, 1244, 1474, 1197, 1475, 1195, 1475, 1194, 1475, 1188, 1477, 1187, 1482, 1187, 1499, 1188, 1516, 1188, 1529, 1186, 1538, 1184, 1540, 1183, 1540, 1178, 1544, 1174, 1547, 1171, 1553, 1170, 1559, 1170, 1560, 1170, 1561, 1169, 1566, 1166, 1567, 1165, 1567, 1163, 1569, 1161, 1573, 1156, 1576, 1150, 1581, 1136, 1580, 1131, 1578, 1125, 1577, 1123, 1577, 1123, 1576, 1120, 1572, 1119, 1569, 1119, 1567, 1119, 1566, 1118, 1554, 1117, 1543, 1117, 1540, 1117, 1538, 1115, 1530, 1109, 1531, 1106, 1529, 1102, 1529, 1086, 1527, 1081, 1534, 1079, 1538, 1073, 1540, 1060, 1544, 1060, 1556, 1060, 1604, 1060, 1653, 1060, 1655, 1059, 1658, 1053, 1669, 1047, 1677, 1044, 1680, 1038, 1683, 1031, 1686, 1035, 1701, 1035, 1702, 1035, 1704, 1035, 1711, 1042, 1712, 1043, 1712, 1044, 1713, 1047, 1722, 1054, 1724, 1055, 1725, 1057, 1726, 1060, 1727, 1062, 1728, 1064, 1729, 1068, 1732, 1070, 1733, 1071, 1734, 1085, 1745, 1100, 1755, 1103, 1759, 1103, 1766, 1102, 1778, 1101, 1791, 1101, 1792, 1101, 1793, 1100, 1803, 1100, 1811, 1099, 1859, 1098, 1908, 1098, 1919, 1091, 1923, 1086, 1925, 1081, 1928, 1080, 1929, 1079, 1929, 1076, 1930, 1075, 1932, 1073, 1940, 1073, 1951, 1076, 1951, 1079, 1951, 1079, 1962, 1079, 1975, 1080, 1989, 1075, 1999, 1075, 2000, 1074, 2002, 1071, 2004, 1070, 2006, 1068, 2015, 1063, 2017, 1061, 2019, 1060, 2020, 1059, 2021, 1058, 2021, 1052, 2025, 1046, 2031, 1043, 2033, 1041, 2033, 1034, 2036, 1035, 2039, 1034, 2042, 1035, 2046, 1035, 2050, 1032, 2067, 1029, 2084, 1028, 2102, 1026, 2120, 1024, 2127, 1020, 2134, 1022, 2138, 1025, 2141, 1021, 2141, 994, 2141, 966, 2140, 952, 2140, 946, 2146, 945, 2147, 944, 2147, 936, 2150, 934, 2154, 930, 2163, 930, 2174, 932, 2187, 933, 2199, 933, 2200, 933, 2201, 936, 2211, 941, 2217, 946, 2221, 946, 2231, 945, 2242, 950, 2244, 952, 2246, 955, 2247, 956, 2248, 957, 2248, 968, 2252, 976, 2257, 977, 2258, 978, 2258, 982, 2259, 982, 2260, 985, 2265, 994, 2265, 1000, 2265, 1008, 2266, 1009, 2266, 1010, 2266, 1041, 2267, 1070, 2268, 1074, 2268, 1075, 2269, 1082, 2275, 1086, 2284, 1087, 2285, 1089, 2285, 1092, 2286, 1092, 2287, 1096, 2291, 1102, 2292, 1103, 2292, 1105, 2293, 1113, 2298, 1112, 2314, 1111, 2320, 1112, 2328, 1114, 2343, 1105, 2346, 1102, 2347, 1097, 2345, 1091, 2342, 1084, 2349, 1076, 2355, 1076, 2358, 1075, 2362, 1068, 2362, 1044, 2362, 1021, 2361, 1020, 2361, 1018, 2361, 984, 2360, 950, 2360, 943, 2358, 939, 2362, 935, 2364, 932, 2366, 925, 2368, 924, 2373, 921, 2383, 908, 2388, 906, 2394, 902, 2396, 901, 2397, 901, 2399, 900, 2412, 900, 2426, 900, 2428, 901, 2430, 904, 2434, 908, 2438, 911, 2441, 921, 2444, 931, 2447, 936, 2452, 940, 2457, 940, 2459, 941, 2463, 943, 2468, 944, 2474, 950, 2474, 963, 2473, 981, 2482, 984, 2481, 987, 2483, 994, 2487, 1008, 2486, 1011, 2486, 1015, 2487, 1024, 2489, 1037, 2488, 1048, 2487, 1056, 2492, 1058, 2493, 1060, 2493, 1068, 2495, 1070, 2498, 1071, 2501, 1079, 2503, 1087, 2505, 1090, 2513, 1092, 2520, 1094, 2523, 1095, 2526, 1095, 2527, 1096, 2528, 1100, 2532, 1104, 2536, 1109, 2533, 1114, 2530, 1120, 2540, 1125, 2551, 1125, 2552, 1127, 2554, 1129, 2557, 1131, 2584, 1132, 2610, 1132, 2617, 1134, 2620, 1135, 2622, 1135, 2623, 1135, 2628, 1137, 2629, 1139, 2631, 1155, 2637, 1172, 2644, 1189, 2644, 1206, 2644, 1210, 2645, 1214, 2645, 1226, 2637, 1238, 2629, 1255, 2628, 1271, 2627, 1275, 2628, 1279, 2628, 1303, 2629, 1328, 2630, 1365, 2633, 1401, 2637, 1425, 2636, 1432, 2635, 1436, 2638, 1439, 2644, 1443, 2649, 1444, 2650, 1445, 2651, 1449, 2661, 1459, 2664, 1461, 2665, 1463, 2666, 1466, 2669, 1471, 2671, 1474, 2672, 1474, 2678, 1475, 2684, 1473, 2686, 1471, 2688, 1479, 2691, 1486, 2695, 1491, 2696, 1496, 2697, 1494, 2711, 1492, 2725, 1493, 2726, 1501, 2730, 1508, 2734, 1514, 2736, 1512, 2747, 1512, 2749, 1516, 2753, 1520, 2756, 1525, 2760, 1530, 2764, 1529, 2769, 1527, 2773, 1533, 2773, 1538, 2772, 1545, 2769, L, 1550, 2766, 1552, 2761, Q, 1554, 2754, 1559, 2749, 1563, 2743, 1568, 2740, 1569, 2737, 1572, 2737, 1613, 2736, 1654, 2736, L, 1656, 2736, Q, 1659, 2718, 1659, 2699, L, 1659, 2697, Q, 1645, 2694, 1632, 2694, 1629, 2694, 1628, 2693, 1627, 2692, 1626, 2688, 1623, 2681, 1623, 2667, 1624, 2655, 1623, 2642, 1623, 2632, 1629, 2626, 1633, 2624, 1634, 2622, 1638, 2618, 1640, 2617, 1648, 2613, 1648, 2605, 1648, 2602, 1649, 2601, 1654, 2597, 1655, 2591, 1655, 2589, 1658, 2588, 1659, 2585, 1660, 2583, 1662, 2578, 1672, 2580, 1682, 2583, 1682, 2575, 1681, 2565, 1685, 2562, 1687, 2561, 1688, 2560, 1693, 2553, 1693, 2541, 1693, 2524, 1692, 2507, 1692, 2488, 1696, 2472, 1698, 2460, 1709, 2459, 1711, 2459, 1713, 2456, 1715, 2453, 1721, 2455, 1734, 2454, 1746, 2454, 1748, 2454, 1750, 2455, 1751, 2458, 1752, 2459, 1754, 2463, 1757, 2468, 1758, 2469, 1758, 2470, 1758, 2476, 1762, 2476, 1764, 2476, 1767, 2477, 1770, 2480, 1778, 2479, 1784, 2479, 1790, 2480, 1791, 2480, 1793, 2480, 1797, 2480, 1796, 2486, 1794, 2501, 1806, 2503, 1807, 2503, 1808, 2503, 1814, 2505, 1820, 2508, 1821, 2508, 1822, 2508, 1824, 2509, 1827, 2510, 1829, 2512, 1833, 2513, 1842, 2516, 1851, 2518, 1855, 2518, 1859, 2517, 1871, 2513, 1877, 2507, 1878, 2506, 1880, 2506, 1884, 2505, 1888, 2502, 1893, 2499, 1894, 2491, 1896, 2486, 1898, 2486, 1905, 2483, 1909, 2481, 1914, 2478, 1913, 2470, 1910, 2456, 1918, 2447, 1919, 2445, 1919, 2444, 1926, 2431, 1941, 2433, 1951, 2434, 1953, 2428, 1953, 2426, 1954, 2425, 1959, 2416, 1957, 2405, 1957, 2402, 1958, 2400, 1963, 2394, 1969, 2389, 1970, 2388, 1972, 2388, 1979, 2389, 1978, 2383, 1978, 2371, 1979, 2360, 1979, 2356, 1979, 2352, 1980, 2341, 1985, 2336, 1987, 2335, 1989, 2333, 1994, 2328, 2003, 2329, 2013, 2330, 2013, 2323, 2013, 2322, 2015, 2320, 2016, 2315, 2018, 2312, 2019, 2309, 2021, 2308, 2024, 2304, 2029, 2297, 2034, 2290, 2040, 2284, 2049, 2276, 2046, 2263, 2044, 2249, 2051, 2241, 2056, 2234, 2062, 2230, 2065, 2227, 2066, 2225, 2068, 2222, 2070, 2220, 2072, 2219, 2075, 2219, 2081, 2216, 2080, 2210, 2078, 2195, 2086, 2190, 2087, 2190, 2088, 2189, 2096, 2187, 2099, 2181, 2100, 2178, 2100, 2175, L, 2100, 2174, Q, 2100, 2136, 2100, 2100, 2100, 2092, 2099, 2086, 2098, 2074, 2098, 2060, 2098, 2058, 2097, 2057, 2089, 2054, 2080, 2054, 2077, 2054, 2076, 2053, 2073, 2046, 2073, 2036, L, 2073, 2033, Q, 2061, 2031, 2048, 2031, 2045, 2031, 2043, 2030, 2038, 2027, 2040, 2017, 2040, 2015, 2041, 2013, 2049, 1993, 2061, 1981, 2062, 1979, 2064, 1979, 2072, 1978, 2071, 1968, 2068, 1957, 2077, 1955, 2082, 1954, 2084, 1950, 2087, 1945, 2092, 1945, 2095, 1945, 2098, 1944, 2108, 1939, 2105, 1923, 2105, 1921, 2106, 1919, 2110, 1914, 2114, 1910, 2117, 1902, 2126, 1900, 2128, 1898, 2129, 1897, 2130, 1895, 2131, 1894, 2133, 1891, 2137, 1891, 2138, 1891, 2140, 1891, 2141, 1876, 2141, 1860, 2141, 1858, 2142, 1856, 2148, 1845, 2164, 1834, 2165, 1832, 2167, 1832, 2170, 1831, 2170, 1830, 2173, 1817, 2173, 1804, L, 2173, 1802, Q, 2155, 1799, 2138, 1799, 2136, 1799, 2135, 1799, 2132, 1776, 2132, 1751, 2132, 1749, 2133, 1748, 2136, 1743, 2141, 1737, 2142, 1735, 2142, 1733, 2143, 1724, 2148, 1723, 2153, 1721, 2154, 1718, 2156, 1717, 2157, 1715, 2163, 1708, 2167, 1700, 2168, 1699, 2169, 1697, 2173, 1696, 2173, 1695, 2175, 1687, 2175, 1678, 2175, 1630, 2175, 1583, 2175, 1571, 2176, 1560, 2178, 1548, 2169, 1547, 2163, 1546, 2157, 1545, 2156, 1545, 2154, 1545, 2146, 1543, 2143, 1536, 2142, 1530, 2140, 1526, 2140, 1524, 2140, 1523, 2142, 1511, 2132, 1512, 2130, 1512, 2129, 1511, 2124, 1507, 2118, 1507, 2115, 1507, 2114, 1507, 2114, 1497, 2111, 1495, 2108, 1493, 2106, 1494, 2105, 1495, 2099, 1486, 2092, 1477, 2091, 1477, 2082, 1475, 2072, 1475, 2060, 1475, 2049, 1474, 2048, 1474, 2046, 1474, 2039, 1474, 2039, 1468, 2039, 1458, 2035, 1455, 2034, 1453, 2034, 1452, 2030, 1442, 2019, 1440, 2018, 1440, 2017, 1440, 2007, 1441, 2008, 1434, 2012, 1415, 1996, 1415, 1993, 1415, 1991, 1414, 1986, 1409, 1980, 1407, 1979, 1406, 1979, 1404, 1978, 1402, 1976, 1402, 1971, 1398, 1969, 1390, 1965, 1388, 1962, 1387, 1958, 1386, 1958, 1379, 1958, 1375, 1957, 1374, Q, 1954, 1372, 1951, 1370, Z]
      ],
      "label": "Caraş-Severin",
      "shortLabel": "CS",
      "labelPosition": [153.8, 205.7],
      "labelAlignment": [CEN, MID]
    },
    "RO.HD": {
      "outlines": [
        [M, 2398, 525, Q, 2392, 523, 2385, 523, 2373, 524, 2362, 523, 2360, 523, 2359, 523, 2336, 518, 2311, 519, L, 2309, 519, Q, 2307, 510, 2304, 505, 2303, 504, 2303, 503, 2303, 493, 2295, 493, 2294, 493, 2293, 493, 2284, 492, 2277, 492, 2274, 492, 2272, 491, 2268, 489, 2268, 483, 2266, 487, 2262, 493, 2261, 494, 2260, 494, 2255, 495, 2254, 500, 2250, 514, 2240, 520, 2238, 521, 2236, 523, 2231, 527, 2225, 531, 2222, 533, 2217, 535, 2216, 536, 2216, 537, 2214, 569, 2214, 601, 2214, 605, 2213, 608, 2212, 612, 2203, 612, 2197, 611, 2191, 610, 2185, 610, 2183, 615, 2179, 624, 2180, 638, L, 2180, 640, Q, 2162, 643, 2143, 643, 2094, 643, 2046, 642, 2033, 641, 2024, 645, 2023, 646, 2022, 648, 2018, 659, 2018, 675, 2019, 699, 2018, 722, 2018, 725, 2018, 727, 2017, 731, 2016, 735, 2014, 738, 2013, 741, 2012, 743, 2011, 746, 2011, 747, 2010, 748, 2008, 758, 2003, 768, 1997, 770, 1996, 775, 1995, 776, 1994, 778, 1982, 781, 1967, 780, 1960, 780, 1957, 783, 1954, 785, 1953, 787, 1951, 808, 1951, 830, 1951, 833, 1952, 835, 1953, 839, 1959, 841, 1963, 843, 1967, 846, 1969, 849, 1975, 854, 1976, 855, 1978, 856, 1986, 863, 1986, 877, 1985, 901, 1986, 925, 1986, 938, 1980, 943, 1979, 944, 1978, 944, 1975, 946, 1973, 947, 1965, 952, 1959, 959, L, 1959, 960, Q, 1958, 992, 1958, 1024, 1958, 1030, 1959, 1035, 1962, 1053, 1953, 1056, 1943, 1058, 1939, 1066, 1935, 1073, 1935, 1089, 1936, 1104, 1943, 1107, 1950, 1110, 1950, 1111, 1951, 1114, 1952, 1116, 1952, 1118, 1953, 1122, 1954, 1128, 1961, 1132, 1962, 1133, 1963, 1135, 1970, 1139, 1976, 1148, 1978, 1149, 1979, 1149, 1989, 1150, 1992, 1155, 1998, 1164, 2002, 1174, 2006, 1182, 2013, 1187, 2014, 1188, 2016, 1190, 2019, 1198, 2034, 1196, 2038, 1196, 2038, 1197, 2041, 1201, 2053, 1201, 2052, 1221, 2051, 1242, 2051, 1244, 2051, 1245, 2051, 1251, 2045, 1251, 2030, 1251, 2016, 1251, 2008, 1251, 2003, 1258, 2001, 1262, 2000, 1266, 1995, 1273, 1988, 1277, 1983, 1278, 1981, 1284, 1980, 1288, 1978, 1289, 1966, 1299, 1956, 1309, 1954, 1314, 1951, 1316, 1948, 1317, 1946, 1320, 1943, 1322, 1942, 1325, 1941, 1327, 1940, 1328, 1933, 1335, 1926, 1342, 1929, 1345, 1932, 1347, 1934, 1348, 1935, 1349, 1936, 1351, 1937, 1354, 1944, 1361, 1951, 1370, 1954, 1372, 1957, 1374, 1958, 1375, 1958, 1379, 1958, 1386, 1962, 1387, 1965, 1388, 1969, 1390, 1971, 1398, 1976, 1402, 1978, 1402, 1979, 1404, 1979, 1406, 1980, 1407, 1986, 1409, 1991, 1414, 1993, 1415, 1996, 1415, 2012, 1415, 2008, 1434, 2007, 1441, 2017, 1440, 2018, 1440, 2019, 1440, 2030, 1442, 2034, 1452, 2034, 1453, 2035, 1455, 2039, 1458, 2039, 1468, 2039, 1474, 2046, 1474, 2048, 1474, 2049, 1474, 2060, 1475, 2072, 1475, 2082, 1475, 2091, 1477, 2092, 1477, 2099, 1486, 2105, 1495, 2106, 1494, 2108, 1493, 2111, 1495, 2114, 1497, 2114, 1507, 2115, 1507, 2118, 1507, 2124, 1507, 2129, 1511, 2130, 1512, 2132, 1512, 2142, 1511, 2140, 1523, 2140, 1524, 2140, 1526, 2142, 1530, 2143, 1536, 2146, 1543, 2154, 1545, 2156, 1545, 2157, 1545, 2163, 1546, 2169, 1547, 2178, 1548, 2176, 1560, 2175, 1571, 2175, 1583, 2175, 1630, 2175, 1678, 2175, 1687, 2173, 1695, 2173, 1696, 2169, 1697, 2168, 1699, 2167, 1700, 2163, 1708, 2157, 1715, 2156, 1717, 2154, 1718, 2153, 1721, 2148, 1723, 2143, 1724, 2142, 1733, 2142, 1735, 2141, 1737, 2136, 1743, 2133, 1748, 2132, 1749, 2132, 1751, 2132, 1776, 2135, 1799, 2136, 1799, 2138, 1799, 2155, 1799, 2173, 1802, L, 2173, 1804, Q, 2173, 1817, 2170, 1830, 2170, 1831, 2167, 1832, 2165, 1832, 2164, 1834, 2148, 1845, 2142, 1856, 2141, 1858, 2141, 1860, 2141, 1876, 2140, 1891, 2165, 1891, 2190, 1890, 2192, 1890, 2197, 1889, 2201, 1887, 2203, 1887, 2218, 1886, 2232, 1886, 2238, 1886, 2239, 1891, 2240, 1895, 2244, 1897, 2248, 1898, 2254, 1904, 2261, 1909, 2271, 1914, 2281, 1918, 2311, 1918, 2359, 1918, 2408, 1918, 2456, 1918, 2504, 1917, 2506, 1917, 2506, 1916, 2507, 1911, 2510, 1907, 2517, 1898, 2525, 1891, 2526, 1890, 2526, 1889, L, 2527, 1886, Q, 2537, 1884, 2546, 1884, 2593, 1884, 2642, 1885, 2653, 1885, 2658, 1881, 2660, 1880, 2661, 1879, 2664, 1870, 2672, 1863, 2673, 1862, 2673, 1860, 2674, 1858, 2676, 1857, 2688, 1854, 2701, 1854, 2707, 1854, 2714, 1856, 2723, 1857, 2727, 1849, 2730, 1842, 2730, 1838, 2730, 1835, 2735, 1832, 2740, 1828, 2737, 1826, 2734, 1824, 2742, 1822, 2750, 1820, 2769, 1820, 2781, 1820, 2793, 1821, 2796, 1821, 2798, 1822, 2801, 1822, 2803, 1824, 2804, 1825, 2805, 1825, 2810, 1828, 2814, 1831, 2815, 1833, 2817, 1836, 2821, 1843, 2832, 1846, 2834, 1846, 2835, 1846, 2860, 1847, 2885, 1847, 2887, 1847, 2889, 1846, 2896, 1841, 2895, 1826, 2895, 1824, 2896, 1820, 2897, 1819, 2897, 1818, 2901, 1810, 2911, 1810, 2959, 1810, 3007, 1810, 3009, 1810, 3012, 1809, 3015, 1806, 3018, 1788, 3020, 1769, 3021, 1748, 3023, 1726, 3030, 1711, L, 3032, 1710, Q, 3035, 1699, 3035, 1689, 3035, 1664, 3036, 1639, 3036, 1630, 3030, 1630, 3019, 1629, 3016, 1620, 3016, 1618, 3015, 1616, 3013, 1613, 3012, 1607, 3011, 1603, 3007, 1603, 2999, 1604, 2993, 1605, 2988, 1605, 2988, 1602, 2989, 1592, 2986, 1588, 2985, 1587, 2983, 1586, 2982, 1583, 2981, 1581, 2978, 1573, 2966, 1576, 2964, 1576, 2962, 1575, 2961, 1573, 2961, 1570, 2960, 1565, 2959, 1560, 2956, 1550, 2945, 1548, 2944, 1548, 2943, 1548, 2931, 1545, 2933, 1531, L, 2933, 1528, Q, 2928, 1527, 2924, 1523, 2923, 1522, 2922, 1522, 2919, 1521, 2917, 1520, 2916, 1519, 2915, 1518, 2912, 1517, 2909, 1516, 2907, 1516, 2906, 1516, 2889, 1515, 2872, 1515, 2869, 1514, 2869, 1513, 2867, 1508, 2866, 1501, 2866, 1500, 2866, 1499, 2864, 1490, 2864, 1480, 2864, 1478, 2863, 1477, 2859, 1475, 2856, 1475, 2850, 1475, 2844, 1474, 2842, 1474, 2840, 1474, L, 2837, 1473, Q, 2835, 1459, 2835, 1446, 2835, 1397, 2836, 1349, 2836, 1342, 2828, 1344, 2825, 1344, 2821, 1343, 2820, 1343, 2819, 1342, 2816, 1340, 2817, 1339, 2815, 1335, 2814, 1329, 2816, 1318, 2817, 1309, 2816, 1295, 2815, 1282, 2813, 1247, 2814, 1211, 2814, 1164, 2813, 1116, 2813, 1114, 2813, 1111, 2811, 1107, 2807, 1109, 2804, 1109, 2802, 1108, 2797, 1105, 2786, 1106, 2783, 1106, 2780, 1105, 2778, 1105, 2779, 1103, 2777, 1082, 2777, 1061, L, 2777, 1058, Q, 2768, 1056, 2767, 1052, 2767, 1047, 2763, 1044, 2758, 1042, 2755, 1041, 2750, 1041, 2750, 1040, 2749, 1018, 2749, 995, 2749, 992, 2748, 991, 2744, 986, 2741, 984, 2737, 982, 2735, 978, 2733, 974, 2730, 966, 2727, 958, 2712, 960, 2710, 960, 2706, 956, 2703, 952, 2701, 947, 2700, 943, 2691, 944, 2683, 944, 2682, 932, 2682, 931, 2682, 930, 2682, 916, 2672, 913, 2671, 913, 2669, 913, 2656, 911, 2641, 911, 2639, 911, 2635, 910, 2634, 910, 2633, 909, 2620, 908, 2609, 908, 2607, 907, 2606, 906, 2602, 900, 2593, 903, 2588, 904, 2588, 900, 2588, 866, 2588, 832, 2588, 829, 2587, 828, 2586, 825, 2584, 823, 2578, 818, 2574, 814, 2572, 812, 2570, 812, 2568, 811, 2566, 810, 2564, 807, 2559, 808, 2557, 808, 2557, 807, 2554, 801, 2554, 795, 2554, 746, 2553, 698, 2553, 692, 2552, 687, L, 2546, 686, Q, 2539, 684, 2532, 683, 2531, 683, 2530, 683, 2518, 684, 2517, 676, 2517, 672, 2517, 668, 2516, 655, 2509, 648, 2507, 646, 2506, 646, 2487, 645, 2467, 645, 2465, 645, 2463, 645, 2461, 616, 2461, 586, 2461, 580, 2460, 574, 2458, 565, 2451, 567, 2439, 568, 2438, 558, L, 2438, 556, Q, 2426, 554, 2430, 542, 2431, 537, 2428, 537, 2419, 538, 2416, 531, 2413, 526, 2403, 526, Q, 2401, 526, 2398, 525, Z]
      ],
      "label": "Hunedoara",
      "shortLabel": "HD",
      "labelPosition": [237.1, 120],
      "labelAlignment": [CEN, MID]
    },
    "RO.TM": {
      "outlines": [
        [M, 1092, 810, Q, 1079, 809, 1065, 808, 1053, 807, 1051, 814, 1047, 827, 1041, 834, 1039, 836, 1037, 838, 1035, 838, 1032, 839, 1024, 843, 1016, 849, 1015, 851, 1013, 852, 1010, 854, 1009, 856, 1006, 861, 1003, 865, 1002, 866, 1002, 867, 1000, 869, 999, 871, 998, 872, 997, 873, 995, 874, 994, 877, 994, 878, 992, 880, 990, 882, 989, 884, 987, 887, 981, 899, 961, 899, 932, 899, 924, 898, 922, 893, 920, 888, 920, 887, 920, 886, 919, 880, 917, 874, 913, 875, 868, 875, 821, 875, 819, 874, 818, 873, 815, 862, 815, 851, 815, 844, 814, 838, 813, 834, 805, 834, 798, 835, 792, 834, 776, 832, 772, 843, 771, 846, 769, 849, 767, 856, 764, 859, 761, 861, 760, 865, 759, 872, 753, 873, 735, 876, 738, 861, 739, 850, 729, 851, 721, 852, 723, 843, L, 723, 840, Q, 714, 838, 705, 838, L, 702, 838, Q, 700, 823, 693, 817, 688, 813, 677, 813, 652, 814, 626, 813, 624, 813, 624, 812, 621, 799, 621, 795, 621, 790, 618, 791, 615, 790, 612, 787, 609, 785, 601, 783, 592, 781, 581, 774, 579, 774, 578, 773, 571, 773, 565, 770, 560, 768, 555, 767, 553, 766, 551, 765, 550, 764, 548, 760, 546, 757, 537, 754, 527, 750, 525, 752, 522, 753, 520, 753, 518, 753, 516, 752, 512, 751, 505, 752, 495, 752, 491, 748, 490, 747, 490, 746, 490, 736, 486, 732, 485, 731, 485, 730, 483, 724, 473, 725, 457, 728, 461, 711, 462, 705, 457, 707, 448, 708, 445, 704, 442, 699, 444, 691, 445, 681, 439, 678, 437, 678, 436, 678, 416, 677, 397, 677, 396, 678, 395, 678, 363, 679, 331, 680, L, 328, 680, Q, 329, 664, 320, 661, 317, 661, 317, 660, 315, 652, 315, 645, L, 315, 643, Q, 306, 640, 296, 640, 293, 640, 292, 638, 290, 637, 287, 629, 283, 622, 280, 611, L, 280, 608, Q, 260, 606, 239, 606, 231, 606, 225, 605, 208, 602, 212, 618, 213, 628, 209, 637, 208, 639, 207, 640, 203, 649, 193, 649, 181, 648, 169, 650, 170, 661, 163, 668, 161, 670, 160, 671, 160, 677, 154, 677, 150, 677, 147, 678, 131, 681, 130, 668, 130, 666, 130, 664, 128, 660, 127, 656, 127, 655, 125, 653, 123, 650, 122, 648, 120, 644, 112, 645, 110, 645, 106, 644, 99, 641, 99, 629, 99, 622, 98, 616, 98, 613, 97, 611, L, 97, 608, Q, 80, 606, 65, 606, 50, 606, 44, 613, 43, 615, 41, 616, 38, 626, 40, 640, 41, 655, 33, 660, 25, 662, 20, 671, 15, 678, 17, 693, 17, 695, 18, 698, 19, 699, 19, 700, 20, 709, 25, 714, 27, 715, 28, 715, 38, 717, 44, 724, 47, 726, 47, 732, 49, 743, 51, 757, 61, 754, 64, 756, 67, 758, 68, 761, 68, 764, 73, 765, 74, 765, 76, 765, 78, 767, 79, 768, 82, 769, 83, 772, 88, 775, 92, 783, 93, 784, 94, 784, 96, 785, 98, 786, 104, 790, 110, 792, 111, 794, 111, 795, 112, 820, 111, 845, 111, 847, 111, 850, 110, 854, 110, 859, 109, 874, 112, 888, 116, 899, 122, 906, 123, 908, 125, 909, 133, 912, 136, 919, 137, 923, 141, 927, 144, 931, 149, 932, 150, 933, 152, 933, 159, 935, 165, 936, 166, 936, 168, 936, 179, 939, 182, 948, 184, 950, 185, 952, 186, 953, 187, 954, 189, 955, 190, 956, 192, 957, 196, 956, 201, 955, 202, 955, 203, 955, 207, 955, 210, 955, 220, 957, 230, 958, 244, 958, 246, 958, 246, 959, 247, 964, 255, 962, 257, 962, 258, 963, 262, 965, 267, 965, 278, 966, 283, 978, 284, 979, 285, 980, 294, 986, 301, 990, 304, 991, 304, 992, 305, 1006, 305, 1019, 305, 1023, 306, 1027, 306, 1029, 307, 1033, 307, 1035, 309, 1036, 310, 1038, 311, 1039, 315, 1041, 320, 1043, 328, 1046, 336, 1051, 337, 1052, 337, 1054, 338, 1061, 339, 1067, 339, 1077, 336, 1085, 334, 1087, 334, 1088, 333, 1106, 333, 1125, 333, 1137, 339, 1146, 340, 1147, 341, 1148, 342, 1150, 343, 1152, 344, 1153, 345, 1154, 348, 1158, 354, 1160, 355, 1160, 357, 1160, 360, 1161, 361, 1163, 370, 1169, 383, 1168, 396, 1165, 401, 1159, 403, 1157, 406, 1154, 412, 1149, 425, 1150, 434, 1153, 437, 1149, 439, 1147, 440, 1144, 441, 1139, 447, 1136, 450, 1133, 452, 1132, 466, 1125, 471, 1135, 474, 1139, 478, 1143, 480, 1147, 484, 1150, 485, 1151, 486, 1152, 492, 1153, 494, 1159, 494, 1165, 494, 1171, 494, 1174, 494, 1177, 496, 1204, 500, 1230, 500, 1233, 500, 1235, 500, 1242, 494, 1246, 485, 1251, 483, 1257, 480, 1262, 477, 1264, 473, 1266, 469, 1267, 466, 1267, 463, 1269, 461, 1274, 457, 1280, 456, 1283, 456, 1285, 455, 1295, 456, 1304, 457, 1318, 451, 1326, 448, 1328, 447, 1328, 441, 1328, 439, 1334, 430, 1334, 428, 1343, 427, 1346, 426, 1349, 425, 1376, 425, 1402, 425, 1404, 426, 1407, 427, 1408, 428, 1409, 431, 1419, 439, 1421, 450, 1425, 457, 1430, 458, 1432, 460, 1433, 467, 1432, 469, 1439, 469, 1440, 469, 1441, 473, 1451, 479, 1459, 480, 1461, 480, 1462, 480, 1469, 484, 1473, 485, 1474, 485, 1477, 484, 1479, 483, 1484, 481, 1489, 474, 1494, 467, 1500, 460, 1510, 458, 1511, 458, 1512, 457, 1527, 456, 1542, 456, 1555, 463, 1560, 478, 1571, 491, 1583, 492, 1585, 493, 1586, 494, 1588, 495, 1589, 501, 1597, 505, 1604, 506, 1605, 506, 1607, 508, 1618, 515, 1623, 517, 1624, 517, 1625, 520, 1629, 522, 1631, 524, 1635, 531, 1639, 533, 1640, 537, 1643, 540, 1646, 542, 1648, 543, 1651, 544, 1653, 544, 1655, 548, 1658, 550, 1660, 550, 1662, 552, 1668, 555, 1668, 557, 1668, 567, 1675, 578, 1681, 584, 1688, 590, 1694, 593, 1698, 596, 1702, 598, 1702, 602, 1703, 603, 1707, 603, 1709, 605, 1711, 611, 1717, 615, 1726, 616, 1730, 620, 1733, 624, 1735, 629, 1739, 635, 1745, 642, 1749, 643, 1750, 643, 1751, 645, 1755, 646, 1756, 649, 1759, 652, 1762, 654, 1763, 657, 1764, 665, 1766, 668, 1773, 669, 1778, 672, 1782, 674, 1783, 674, 1786, 675, 1789, 677, 1789, 688, 1792, 700, 1792, 715, 1793, 718, 1781, 719, 1778, 722, 1777, 723, 1775, 724, 1772, 727, 1771, 729, 1769, 734, 1766, 737, 1761, 751, 1757, 755, 1765, 756, 1766, 756, 1767, 756, 1776, 765, 1778, 767, 1779, 769, 1781, 773, 1788, 781, 1792, 788, 1795, 796, 1803, 798, 1804, 799, 1807, 804, 1811, 808, 1818, 809, 1819, 809, 1820, 810, 1830, 810, 1841, 810, 1844, 811, 1846, 813, 1848, 815, 1849, 821, 1854, 831, 1858, 834, 1858, 836, 1859, 846, 1863, 849, 1866, 853, 1869, 861, 1872, 867, 1874, 867, 1878, L, 866, 1882, Q, 866, 1881, 870, 1883, 873, 1885, 881, 1884, 895, 1882, 900, 1891, 901, 1892, 904, 1897, 907, 1902, 916, 1903, 924, 1904, 928, 1907, 931, 1910, 948, 1910, 961, 1909, 973, 1908, 983, 1908, 989, 1912, 990, 1914, 992, 1914, 999, 1914, 1003, 1918, 1009, 1923, 1011, 1928, 1014, 1932, 1016, 1937, 1019, 1940, 1021, 1948, 1046, 1949, 1073, 1951, 1073, 1940, 1075, 1932, 1076, 1930, 1079, 1929, 1080, 1929, 1081, 1928, 1086, 1925, 1091, 1923, 1098, 1919, 1098, 1908, 1099, 1859, 1100, 1811, 1100, 1803, 1101, 1793, 1101, 1792, 1101, 1791, 1102, 1778, 1103, 1766, 1103, 1759, 1100, 1755, 1085, 1745, 1071, 1734, 1070, 1733, 1068, 1732, 1064, 1729, 1062, 1728, 1060, 1727, 1057, 1726, 1055, 1725, 1054, 1724, 1047, 1722, 1044, 1713, 1043, 1712, 1042, 1712, 1035, 1711, 1035, 1704, 1035, 1702, 1035, 1701, 1031, 1686, 1038, 1683, 1044, 1680, 1047, 1677, 1053, 1669, 1059, 1658, 1060, 1655, 1060, 1653, 1060, 1604, 1060, 1556, 1060, 1544, 1073, 1540, 1079, 1538, 1081, 1534, 1086, 1527, 1102, 1529, 1106, 1529, 1109, 1531, 1115, 1530, 1117, 1538, 1117, 1540, 1117, 1543, 1118, 1554, 1119, 1566, 1119, 1567, 1119, 1569, 1120, 1572, 1123, 1576, 1123, 1577, 1125, 1577, 1131, 1578, 1136, 1580, 1150, 1581, 1156, 1576, 1161, 1573, 1163, 1569, 1165, 1567, 1166, 1567, 1169, 1566, 1170, 1561, 1170, 1560, 1170, 1559, 1171, 1553, 1174, 1547, 1178, 1544, 1183, 1540, 1184, 1540, 1186, 1538, 1188, 1529, 1188, 1516, 1187, 1499, 1187, 1482, 1188, 1477, 1194, 1475, 1195, 1475, 1197, 1475, 1244, 1474, 1292, 1473, 1307, 1473, 1314, 1478, 1315, 1479, 1316, 1482, 1315, 1495, 1318, 1509, L, 1320, 1509, Q, 1339, 1508, 1357, 1511, L, 1357, 1513, Q, 1357, 1527, 1360, 1539, 1361, 1540, 1363, 1542, 1372, 1545, 1387, 1544, 1400, 1543, 1412, 1544, 1427, 1544, 1429, 1529, 1431, 1515, 1432, 1512, 1433, 1508, 1433, 1507, 1433, 1505, 1434, 1504, 1438, 1501, 1444, 1501, 1471, 1501, 1497, 1504, L, 1497, 1506, Q, 1497, 1522, 1499, 1538, L, 1502, 1538, Q, 1517, 1538, 1531, 1538, 1535, 1538, 1535, 1543, 1534, 1555, 1535, 1566, 1536, 1570, 1537, 1575, 1539, 1580, 1545, 1580, 1579, 1579, 1614, 1578, 1615, 1578, 1616, 1577, 1622, 1571, 1622, 1556, 1622, 1555, 1622, 1553, 1623, 1550, 1625, 1549, 1626, 1548, 1628, 1547, 1632, 1545, 1634, 1538, 1638, 1529, 1637, 1516, 1637, 1508, 1636, 1501, 1635, 1500, 1634, 1499, 1628, 1496, 1625, 1494, 1623, 1493, 1621, 1493, 1616, 1491, 1612, 1489, 1611, 1488, 1607, 1488, 1597, 1485, 1600, 1472, 1600, 1467, 1600, 1463, 1600, 1458, 1604, 1456, 1605, 1456, 1606, 1453, 1606, 1452, 1607, 1451, 1613, 1445, 1623, 1441, 1626, 1440, 1628, 1440, 1640, 1440, 1653, 1439, 1654, 1438, 1655, 1437, 1660, 1432, 1664, 1424, 1665, 1423, 1665, 1421, 1666, 1419, 1667, 1418, 1669, 1417, 1671, 1415, 1672, 1415, 1674, 1415, 1687, 1414, 1699, 1414, 1703, 1414, 1704, 1417, 1708, 1420, 1715, 1420, 1725, 1418, 1723, 1430, 1721, 1439, 1726, 1442, 1729, 1443, 1731, 1444, 1756, 1445, 1779, 1445, 1791, 1446, 1802, 1444, 1806, 1442, 1806, 1437, 1807, 1436, 1808, 1435, 1816, 1425, 1822, 1415, 1823, 1414, 1824, 1412, 1827, 1408, 1834, 1407, 1839, 1405, 1840, 1403, 1842, 1401, 1845, 1399, 1851, 1386, 1859, 1381, 1861, 1380, 1864, 1380, 1877, 1380, 1889, 1379, 1891, 1378, 1892, 1377, 1894, 1373, 1897, 1370, 1899, 1367, 1900, 1361, L, 1903, 1360, Q, 1904, 1360, 1905, 1359, 1909, 1355, 1914, 1353, 1916, 1351, 1919, 1349, 1922, 1345, 1926, 1342, 1933, 1335, 1940, 1328, 1941, 1327, 1942, 1325, 1943, 1322, 1946, 1320, 1948, 1317, 1951, 1316, 1954, 1314, 1956, 1309, 1966, 1299, 1978, 1289, 1980, 1288, 1981, 1284, 1983, 1278, 1988, 1277, 1995, 1273, 2000, 1266, 2001, 1262, 2003, 1258, 2008, 1251, 2016, 1251, 2030, 1251, 2045, 1251, 2051, 1251, 2051, 1245, 2051, 1244, 2051, 1242, 2052, 1221, 2053, 1201, 2041, 1201, 2038, 1197, 2038, 1196, 2034, 1196, 2019, 1198, 2016, 1190, 2014, 1188, 2013, 1187, 2006, 1182, 2002, 1174, 1998, 1164, 1992, 1155, 1989, 1150, 1979, 1149, 1978, 1149, 1976, 1148, 1970, 1139, 1963, 1135, 1962, 1133, 1961, 1132, 1954, 1128, 1953, 1122, 1952, 1118, 1952, 1116, 1951, 1114, 1950, 1111, 1950, 1110, 1943, 1107, 1936, 1104, 1935, 1089, 1935, 1073, 1939, 1066, 1943, 1058, 1953, 1056, 1962, 1053, 1959, 1035, 1958, 1030, 1958, 1024, 1958, 992, 1959, 960, L, 1957, 960, Q, 1927, 961, 1898, 962, 1893, 961, 1893, 966, 1893, 976, 1893, 987, 1894, 1001, 1887, 1001, 1879, 1002, 1877, 1009, 1875, 1015, 1873, 1011, 1870, 1013, 1869, 1019, 1869, 1020, 1869, 1022, 1867, 1025, 1866, 1028, 1866, 1029, 1864, 1029, 1839, 1030, 1815, 1030, 1767, 1030, 1719, 1030, 1713, 1030, 1707, 1031, 1689, 1034, 1691, 1019, 1691, 1017, 1690, 1016, 1686, 1012, 1687, 1003, L, 1687, 1001, Q, 1669, 998, 1650, 998, L, 1648, 998, Q, 1645, 986, 1647, 975, 1646, 969, 1643, 969, 1615, 969, 1585, 970, 1568, 970, 1572, 954, 1572, 952, 1571, 948, 1569, 944, 1568, 938, 1568, 936, 1567, 935, 1540, 932, 1512, 932, 1507, 932, 1503, 935, 1500, 937, 1495, 948, 1490, 959, 1484, 953, 1482, 969, 1482, 991, 1482, 993, 1481, 993, 1474, 996, 1466, 996, 1454, 996, 1441, 995, 1439, 994, 1438, 993, 1438, 983, 1432, 981, 1431, 981, 1430, 980, 1428, 975, 1427, 969, 1427, 966, 1426, 965, 1422, 964, 1419, 964, 1372, 964, 1324, 964, 1276, 964, 1230, 964, L, 1227, 964, Q, 1225, 952, 1225, 938, 1225, 936, 1224, 932, 1223, 931, 1222, 927, 1221, 924, 1217, 924, 1213, 924, 1214, 919, 1214, 913, 1208, 915, 1201, 917, 1200, 914, L, 1200, 911, Q, 1191, 909, 1182, 909, 1176, 909, 1168, 910, 1158, 911, 1159, 904, 1159, 896, 1160, 890, 1161, 876, 1150, 875, 1142, 875, 1134, 875, 1134, 858, 1135, 843, 1135, 825, 1133, 814, L, 1132, 812, Q, 1112, 809, 1092, 810, Z]
      ],
      "label": "Timiş",
      "shortLabel": "TM",
      "labelPosition": [103.4, 120.7],
      "labelAlignment": [CEN, MID]
    }
  }
}];

export default {
  extension: geodefinitions,
  name: 'vest',
  type: 'maps'
};