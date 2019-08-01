/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Camiguin.1.04-14-2017 01:17:47
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
  "name": "Camiguin",
  "revision": 1,
  "standaloneInit": true,
  "baseWidth": 245,
  "baseHeight": 256,
  "baseScaleFactor": 10,
  "entities": {
    "PH.CM.MM": {
      "outlines": [
        [M, 1162, 83, Q, 1161, 81, 1159, 76, 1155, 67, 1147, 61, 1140, 56, 1128, 52, 1127, 52, 1126, 52, 1110, 51, 1094, 51, 1092, 51, 1090, 50, 1087, 48, 1082, 46, 1075, 43, 1065, 41, 1062, 40, 1059, 40, 1048, 37, 1035, 36, 1025, 35, 1014, 33, 1012, 33, 1010, 33, 990, 30, 973, 33, 962, 34, 960, 40, 959, 42, 957, 44, 950, 50, 939, 49, 930, 48, 922, 49, 920, 50, 918, 49, 912, 49, 908, 53, 907, 54, 905, 55, 902, 56, 901, 59, 900, 66, 895, 67, 877, 67, 859, 67, 856, 67, 853, 68, 846, 70, 844, 76, 844, 77, 844, 78, 843, 86, 839, 89, 837, 90, 834, 90, 827, 90, 819, 90, 780, 88, 742, 94, 740, 94, 738, 95, 730, 101, 723, 109, 716, 118, 706, 118, 688, 119, 670, 119, 648, 118, 628, 121, 626, 122, 625, 123, 617, 129, 612, 135, 602, 147, 582, 145, 551, 142, 519, 143, 516, 143, 514, 144, 504, 148, 498, 157, 497, 159, 496, 159, 483, 161, 469, 161, 467, 161, 465, 162, 457, 166, 452, 172, 450, 175, 446, 176, 444, 177, 442, 177, 432, 177, 423, 180, 421, 181, 420, 183, 419, 185, 418, 187, 418, 188, 418, 189, 418, 197, 412, 200, 411, 200, 410, 201, 406, 208, 398, 208, 396, 208, 394, 208, 388, 211, 385, 218, 384, 220, 384, 222, 385, 232, 377, 235, 376, 236, 375, 236, 372, 237, 369, 238, 367, 239, 366, 241, 362, 246, 361, 252, 361, 254, 359, 255, 348, 263, 343, 275, 342, 278, 341, 281, 340, 283, 340, 285, 339, 291, 336, 296, 332, 303, 322, 306, 320, 306, 319, 307, 313, 311, 309, 319, 309, 320, 308, 321, 301, 329, 293, 331, 291, 331, 289, 332, 282, 335, 281, 342, 281, 344, 281, 346, 281, 358, 270, 359, 268, 359, 266, 360, 263, 362, 255, 361, 253, 361, 253, 362, 248, 372, 240, 378, 239, 379, 238, 379, 231, 381, 226, 386, 225, 387, 224, 388, 216, 394, 205, 394, 202, 394, 200, 396, 193, 403, 188, 409, 187, 410, 186, 410, 176, 409, 172, 417, 168, 426, 160, 428, 160, 439, 156, 449, 156, 450, 156, 451, 155, 459, 155, 466, 155, 483, 155, 499, 155, 504, 154, 508, 154, 509, 154, 510, 154, 520, 147, 527, 145, 529, 144, 530, 142, 532, 140, 533, 138, 536, 134, 539, 133, 540, 132, 541, 131, 549, 129, 556, 128, 557, 128, 558, 128, 563, 123, 566, 132, 573, 137, 578, 139, 580, 142, 581, 145, 583, 147, 585, 153, 592, 159, 600, 164, 605, 170, 612, 175, 616, 180, 621, 187, 626, 195, 637, 199, 642, 203, 646, 204, 648, 206, 650, 212, 656, 216, 661, 221, 667, 226, 670, 227, 671, 229, 673, 230, 674, 232, 675, 238, 678, 243, 683, 245, 685, 247, 686, 248, 688, 250, 689, 256, 694, 261, 701, 269, 711, 281, 719, 295, 730, 313, 746, 314, 748, 316, 749, 326, 760, 339, 766, 341, 766, 342, 767, 349, 776, 360, 787, 375, 803, 392, 816, 399, 822, 407, 833, 410, 837, 414, 841, 425, 850, 434, 857, 437, 860, 440, 861, 447, 865, 453, 872, 467, 891, 486, 902, 488, 904, 490, 906, 497, 914, 503, 919, 505, 921, 507, 923, 511, 929, 518, 932, 519, 932, 520, 933, 529, 942, 542, 951, 546, 954, 549, 958, 569, 983, 590, 1002, 600, 1011, 612, 1019, 620, 1025, 627, 1033, 638, 1045, 649, 1054, 652, 1056, 654, 1059, 660, 1065, 666, 1070, 674, 1075, 679, 1082, 693, 1100, 711, 1110, 712, 1110, 713, 1111, 721, 1119, 727, 1124, 733, 1130, 743, 1136, 757, 1146, 765, 1155, 769, 1159, 771, 1160, 786, 1176, 802, 1195, 803, 1196, 805, 1198, 806, 1200, 808, 1202, 816, 1215, 832, 1224, 839, 1227, 846, 1231, 848, 1232, 848, 1233, 850, 1239, 857, 1241, 859, 1242, 860, 1244, 867, 1255, 880, 1261, 883, 1263, 885, 1265, 899, 1280, 912, 1295, 914, 1297, 916, 1298, 933, 1308, 941, 1323, 944, 1328, 950, 1330, 951, 1331, 951, 1332, 953, 1335, 958, 1335, 961, 1335, 964, 1336, 969, 1337, 971, 1340, 981, 1357, 994, 1367, 996, 1368, 998, 1369, 1009, 1371, 1017, 1382, 1019, 1384, 1021, 1387, 1024, 1392, 1032, 1396, 1038, 1399, 1044, 1402, 1045, 1403, 1047, 1405, 1047, 1406, 1048, 1406, 1054, 1407, 1056, 1411, 1057, 1413, 1061, 1414, 1062, 1415, 1063, 1415, 1074, 1421, 1088, 1420, 1093, 1420, 1097, 1419, 1099, 1418, 1100, 1417, 1103, 1416, 1105, 1414, 1109, 1411, 1112, 1408, 1113, 1406, 1115, 1405, 1116, 1404, 1118, 1404, 1120, 1403, 1122, 1402, 1123, 1402, 1124, 1401, 1134, 1396, 1139, 1388, 1141, 1384, 1146, 1381, 1147, 1380, 1149, 1379, 1150, 1379, 1151, 1379, 1157, 1378, 1158, 1375, 1159, 1374, 1160, 1372, 1162, 1369, 1164, 1367, 1172, 1359, 1187, 1359, 1192, 1360, 1196, 1358, 1199, 1357, 1203, 1357, 1234, 1357, 1264, 1358, 1269, 1358, 1272, 1361, 1274, 1363, 1275, 1365, 1278, 1367, 1281, 1370, 1289, 1376, 1298, 1381, 1300, 1382, 1302, 1382, 1314, 1384, 1316, 1395, 1316, 1396, 1316, 1397, 1320, 1404, 1326, 1409, 1333, 1415, 1339, 1421, 1340, 1422, 1341, 1423, 1345, 1432, 1353, 1435, 1365, 1442, 1378, 1444, 1381, 1445, 1384, 1445, 1385, 1446, 1386, 1447, 1391, 1452, 1399, 1452, 1402, 1452, 1405, 1453, 1425, 1456, 1447, 1455, 1448, 1455, 1450, 1455, 1454, 1453, 1455, 1447, 1457, 1439, 1460, 1432, 1460, 1431, 1461, 1430, 1461, 1428, 1462, 1427, 1464, 1426, 1465, 1425, 1468, 1424, 1470, 1422, 1474, 1420, 1478, 1418, 1480, 1418, 1481, 1415, 1482, 1414, 1483, 1411, 1483, 1409, 1483, 1407, 1483, 1402, 1488, 1400, 1490, 1399, 1491, 1397, 1493, 1396, 1495, 1395, 1507, 1391, 1509, 1380, 1510, 1378, 1512, 1376, 1518, 1368, 1526, 1366, 1531, 1365, 1532, 1359, 1534, 1346, 1544, 1336, 1550, 1330, 1555, 1324, 1556, 1323, 1556, 1321, 1558, 1309, 1566, 1300, 1568, 1297, 1571, 1294, 1574, 1292, 1578, 1287, 1581, 1285, 1582, 1279, 1582, 1278, 1583, 1277, 1591, 1272, 1600, 1269, 1602, 1267, 1606, 1266, 1608, 1266, 1609, 1264, 1620, 1253, 1636, 1242, 1638, 1241, 1641, 1239, 1645, 1238, 1648, 1237, 1652, 1236, 1656, 1235, 1657, 1235, 1659, 1234, 1665, 1230, 1667, 1221, 1668, 1220, 1668, 1219, 1673, 1209, 1679, 1205, 1680, 1204, 1682, 1202, 1685, 1199, 1687, 1197, 1689, 1196, 1690, 1194, 1698, 1186, 1702, 1175, 1702, 1174, 1704, 1172, 1708, 1167, 1717, 1161, 1720, 1159, 1722, 1154, 1725, 1144, 1728, 1133, 1731, 1122, 1738, 1116, 1739, 1115, 1740, 1114, 1745, 1107, 1746, 1099, 1747, 1091, 1755, 1087, 1756, 1086, 1756, 1085, 1760, 1078, 1765, 1076, 1773, 1071, 1772, 1061, 1772, 1059, 1773, 1057, 1773, 1052, 1774, 1047, 1774, 1042, 1777, 1040, 1779, 1039, 1780, 1036, 1781, 1033, 1782, 1031, 1793, 1014, 1800, 995, 1801, 991, 1803, 988, 1807, 983, 1807, 973, 1807, 965, 1808, 957, 1808, 952, 1811, 948, 1816, 941, 1825, 933, 1826, 932, 1826, 929, 1826, 917, 1831, 906, 1834, 899, 1843, 895, 1845, 894, 1847, 893, 1857, 890, 1861, 881, 1862, 879, 1862, 877, 1865, 866, 1869, 860, 1874, 854, 1882, 851, 1889, 848, 1891, 844, 1892, 842, 1893, 842, 1898, 840, 1898, 835, 1897, 829, 1901, 826, 1910, 820, 1920, 819, 1933, 816, 1938, 806, 1942, 797, 1946, 791, 1948, 790, 1949, 788, 1956, 783, 1962, 776, 1965, 774, 1969, 773, 1970, 773, 1971, 773, 1976, 771, 1980, 768, 1977, 763, 1972, 758, 1967, 751, 1962, 747, 1960, 745, 1958, 743, 1951, 739, 1944, 732, 1940, 727, 1935, 726, 1932, 726, 1930, 724, 1922, 719, 1912, 720, 1910, 720, 1908, 719, 1902, 717, 1899, 712, 1897, 709, 1896, 706, 1892, 699, 1885, 694, 1883, 692, 1881, 692, 1870, 691, 1862, 685, 1861, 685, 1860, 684, 1852, 679, 1847, 675, 1843, 671, 1840, 670, 1828, 663, 1816, 652, 1803, 641, 1793, 629, 1792, 628, 1791, 627, 1786, 615, 1777, 607, 1776, 605, 1774, 604, 1770, 600, 1767, 598, 1764, 597, 1763, 595, 1750, 579, 1738, 566, 1737, 565, 1736, 565, 1729, 561, 1725, 556, 1718, 548, 1715, 539, 1711, 524, 1700, 517, 1693, 512, 1689, 506, 1684, 499, 1679, 489, 1677, 487, 1675, 486, 1666, 483, 1662, 478, 1661, 477, 1660, 477, 1653, 472, 1647, 464, 1647, 463, 1646, 462, 1637, 455, 1629, 447, 1618, 436, 1604, 421, 1603, 420, 1602, 418, 1597, 411, 1594, 407, 1588, 401, 1584, 392, 1584, 391, 1583, 391, 1578, 388, 1573, 386, 1552, 374, 1548, 353, 1547, 351, 1547, 349, 1544, 341, 1540, 334, 1535, 326, 1530, 322, 1527, 320, 1525, 318, 1519, 312, 1512, 306, 1505, 301, 1500, 295, 1496, 291, 1491, 289, 1486, 288, 1485, 285, 1481, 269, 1465, 266, 1463, 266, 1461, 265, 1454, 263, 1451, 258, 1443, 250, 1433, 244, 1430, 241, 1427, 238, 1415, 228, 1402, 226, 1398, 226, 1394, 225, 1391, 224, 1388, 222, 1384, 220, 1377, 218, 1370, 216, 1365, 210, 1364, 208, 1362, 206, 1353, 195, 1339, 189, 1336, 188, 1332, 185, 1318, 176, 1304, 172, 1303, 171, 1302, 170, 1300, 169, 1299, 167, 1293, 157, 1281, 149, 1280, 148, 1279, 147, 1271, 143, 1262, 142, 1260, 142, 1258, 142, 1245, 141, 1235, 137, 1233, 136, 1231, 134, 1225, 128, 1218, 120, 1210, 112, 1201, 110, 1191, 107, 1187, 98, 1183, 91, 1174, 88, 1172, 87, 1170, 87, Q, 1164, 86, 1162, 83, Z]
      ],
      "label": "Mambajao",
      "shortLabel": "MM",
      "labelPosition": [105.2, 74.3],
      "labelAlignment": [CEN, MID]
    },
    "PH.CM.CT": {
      "outlines": [
        [M, 666, 1070, Q, 660, 1065, 654, 1059, 652, 1056, 649, 1054, 638, 1045, 627, 1033, 620, 1025, 612, 1019, 600, 1011, 590, 1002, 569, 983, 549, 958, 546, 954, 542, 951, 529, 942, 520, 933, 519, 932, 518, 932, 511, 929, 507, 923, 505, 921, 503, 919, 497, 914, 490, 906, 488, 904, 486, 902, 467, 891, 453, 872, 447, 865, 440, 861, 437, 860, 434, 857, 425, 850, 414, 841, 410, 837, 407, 833, 399, 822, 392, 816, 375, 803, 360, 787, 349, 776, 342, 767, 341, 766, 339, 766, 326, 760, 316, 749, 314, 748, 313, 746, 295, 730, 281, 719, 269, 711, 261, 701, 256, 694, 250, 689, 248, 688, 247, 686, 245, 685, 243, 683, 238, 678, 232, 675, 230, 674, 229, 673, 227, 671, 226, 670, 221, 667, 216, 661, 212, 656, 206, 650, 204, 648, 203, 646, 199, 642, 195, 637, 187, 626, 180, 621, 175, 616, 170, 612, 164, 605, 159, 600, 153, 592, 147, 585, 145, 583, 142, 581, 139, 580, 137, 578, 132, 573, 123, 566, 114, 571, 107, 580, 105, 581, 105, 583, 105, 593, 96, 598, 87, 603, 79, 605, 75, 607, 74, 613, 74, 615, 74, 617, 74, 622, 71, 624, 70, 624, 69, 625, 66, 628, 62, 630, 61, 630, 61, 631, 61, 637, 59, 640, 57, 642, 55, 644, 48, 650, 49, 661, 50, 666, 49, 671, 48, 673, 48, 676, 48, 679, 47, 681, 45, 686, 45, 692, 44, 698, 44, 703, 43, 708, 42, 713, 42, 714, 42, 715, 41, 722, 41, 728, 41, 767, 41, 806, 41, 825, 44, 843, 44, 846, 45, 850, 45, 868, 45, 885, 45, 904, 44, 923, 44, 936, 48, 946, 51, 952, 51, 959, 51, 961, 51, 963, 52, 969, 53, 975, 55, 993, 53, 1013, 53, 1024, 56, 1030, 57, 1033, 59, 1035, 61, 1037, 62, 1040, 62, 1043, 63, 1044, 66, 1052, 64, 1063, 64, 1066, 65, 1067, 67, 1071, 67, 1074, 69, 1098, 69, 1122, 69, 1162, 69, 1202, 69, 1204, 70, 1206, 71, 1209, 71, 1214, 71, 1225, 72, 1235, 72, 1239, 72, 1242, 72, 1254, 75, 1265, 76, 1267, 77, 1268, 82, 1271, 84, 1277, 85, 1281, 86, 1284, 87, 1303, 87, 1321, 87, 1325, 86, 1327, 83, 1337, 83, 1349, 83, 1351, 83, 1353, 80, 1359, 81, 1369, 82, 1385, 90, 1399, 91, 1401, 92, 1403, 102, 1418, 109, 1432, 113, 1441, 116, 1446, 118, 1447, 119, 1449, 126, 1458, 127, 1466, 127, 1469, 128, 1472, 129, 1476, 131, 1479, 136, 1487, 142, 1495, 146, 1502, 148, 1510, 148, 1512, 149, 1513, 162, 1527, 168, 1544, 168, 1546, 168, 1548, 169, 1554, 174, 1558, 189, 1571, 195, 1590, 195, 1591, 195, 1592, 196, 1601, 201, 1609, 202, 1611, 203, 1613, 209, 1620, 212, 1632, 212, 1634, 214, 1635, 220, 1641, 221, 1651, 221, 1652, 222, 1653, 223, 1655, 223, 1657, 223, 1667, 230, 1670, 231, 1671, 233, 1671, 246, 1676, 256, 1686, 264, 1694, 267, 1701, 272, 1709, 282, 1716, 288, 1720, 295, 1728, 297, 1731, 300, 1737, 306, 1749, 316, 1756, 317, 1757, 318, 1758, 332, 1768, 347, 1775, 349, 1775, 350, 1775, 360, 1777, 367, 1784, 369, 1787, 370, 1789, 378, 1798, 384, 1803, 389, 1808, 396, 1810, 398, 1811, 400, 1811, 407, 1813, 412, 1818, 414, 1819, 414, 1820, 415, 1826, 419, 1831, 424, 1837, 432, 1843, 441, 1850, 448, 1857, 449, 1858, 451, 1860, 456, 1867, 463, 1877, 464, 1878, 464, 1879, 465, 1881, 466, 1882, 470, 1888, 480, 1893, 486, 1897, 492, 1902, 499, 1907, 503, 1916, 506, 1921, 512, 1925, 519, 1929, 528, 1936, 530, 1938, 532, 1940, 537, 1948, 540, 1955, 541, 1957, 543, 1958, 548, 1963, 551, 1971, 552, 1973, 552, 1974, 553, 1976, 554, 1977, 557, 1982, 562, 1988, 564, 1989, 565, 1991, 567, 1994, 572, 1998, 574, 2000, 575, 2001, 579, 2009, 585, 2017, 589, 2023, 599, 2031, 603, 2034, 604, 2030, 605, 2036, 610, 2038, 618, 2042, 626, 2050, 631, 2054, 637, 2054, 642, 2054, 646, 2055, 649, 2055, 650, 2057, 653, 2060, 660, 2060, 673, 2061, 680, 2072, 680, 2073, 681, 2074, 697, 2080, 715, 2078, 717, 2078, 719, 2079, 723, 2081, 727, 2082, 730, 2083, 732, 2083, 736, 2085, 739, 2087, 742, 2089, 745, 2090, 746, 2091, 747, 2092, 751, 2096, 759, 2097, 761, 2097, 762, 2098, 765, 2099, 769, 2099, 791, 2097, 811, 2103, 816, 2105, 820, 2106, 829, 2109, 831, 2115, 835, 2122, 845, 2121, 848, 2120, 851, 2121, 854, 2122, 857, 2123, 859, 2119, 861, 2116, 865, 2111, 868, 2106, 870, 2104, 871, 2101, 872, 2099, 873, 2098, 874, 2096, 875, 2095, 876, 2091, 880, 2089, 884, 2086, 885, 2082, 886, 2081, 886, 2080, 887, 2069, 887, 2057, 887, 2018, 888, 1978, 888, 1968, 889, 1959, 889, 1957, 889, 1955, 892, 1949, 892, 1942, 892, 1935, 896, 1930, 904, 1914, 918, 1904, 919, 1903, 920, 1902, 921, 1900, 922, 1898, 922, 1892, 924, 1887, 924, 1885, 925, 1884, 927, 1881, 929, 1877, 930, 1876, 931, 1875, 934, 1874, 936, 1872, 938, 1871, 939, 1869, 941, 1868, 942, 1866, 945, 1861, 946, 1858, 947, 1856, 948, 1855, 951, 1854, 954, 1850, 955, 1848, 956, 1847, 972, 1841, 970, 1822, 970, 1820, 971, 1819, 973, 1815, 975, 1812, 976, 1811, 977, 1810, 981, 1806, 983, 1804, 984, 1802, 986, 1800, 991, 1792, 996, 1783, 1004, 1766, 1012, 1757, 1013, 1756, 1014, 1755, 1020, 1748, 1025, 1741, 1027, 1739, 1028, 1736, 1032, 1729, 1036, 1718, 1037, 1715, 1039, 1712, 1040, 1710, 1041, 1709, 1042, 1707, 1042, 1705, 1043, 1704, 1043, 1703, 1047, 1692, 1046, 1680, 1046, 1678, 1047, 1676, 1049, 1673, 1049, 1667, 1049, 1664, 1049, 1661, 1050, 1655, 1052, 1653, 1057, 1647, 1060, 1642, 1071, 1627, 1069, 1606, 1067, 1585, 1075, 1569, 1078, 1560, 1083, 1554, 1089, 1547, 1092, 1537, 1093, 1535, 1094, 1533, 1094, 1528, 1095, 1523, 1097, 1512, 1097, 1499, 1096, 1461, 1097, 1419, 1093, 1420, 1088, 1420, 1074, 1421, 1063, 1415, 1062, 1415, 1061, 1414, 1057, 1413, 1056, 1411, 1054, 1407, 1048, 1406, 1047, 1406, 1047, 1405, 1045, 1403, 1044, 1402, 1038, 1399, 1032, 1396, 1024, 1392, 1021, 1387, 1019, 1384, 1017, 1382, 1009, 1371, 998, 1369, 996, 1368, 994, 1367, 981, 1357, 971, 1340, 969, 1337, 964, 1336, 961, 1335, 958, 1335, 953, 1335, 951, 1332, 951, 1331, 950, 1330, 944, 1328, 941, 1323, 933, 1308, 916, 1298, 914, 1297, 912, 1295, 899, 1280, 885, 1265, 883, 1263, 880, 1261, 867, 1255, 860, 1244, 859, 1242, 857, 1241, 850, 1239, 848, 1233, 848, 1232, 846, 1231, 839, 1227, 832, 1224, 816, 1215, 808, 1202, 806, 1200, 805, 1198, 803, 1196, 802, 1195, 786, 1176, 771, 1160, 769, 1159, 765, 1155, 757, 1146, 743, 1136, 733, 1130, 727, 1124, 721, 1119, 713, 1111, 712, 1110, 711, 1110, 693, 1100, 679, 1082, Q, 674, 1075, 666, 1070, Z]
      ],
      "label": "Catarman",
      "shortLabel": "CT",
      "labelPosition": [56.9, 134.4],
      "labelAlignment": [CEN, MID]
    },
    "PH.CM.MH": {
      "outlines": [
        [M, 1946, 791, Q, 1942, 797, 1938, 806, 1933, 816, 1920, 819, 1910, 820, 1901, 826, 1897, 829, 1898, 835, 1898, 840, 1893, 842, 1892, 842, 1891, 844, 1889, 848, 1882, 851, 1874, 854, 1869, 860, 1865, 866, 1862, 877, 1862, 879, 1861, 881, 1857, 890, 1847, 893, 1845, 894, 1843, 895, 1834, 899, 1831, 906, 1826, 917, 1826, 929, 1826, 932, 1825, 933, 1816, 941, 1811, 948, 1808, 952, 1808, 957, 1807, 965, 1807, 973, 1807, 983, 1803, 988, 1801, 991, 1800, 995, 1793, 1014, 1782, 1031, 1781, 1033, 1780, 1036, 1779, 1039, 1777, 1040, 1774, 1042, 1774, 1047, 1773, 1052, 1773, 1057, 1772, 1059, 1772, 1061, 1773, 1071, 1765, 1076, 1760, 1078, 1756, 1085, 1756, 1086, 1755, 1087, 1747, 1091, 1746, 1099, 1745, 1107, 1740, 1114, 1739, 1115, 1738, 1116, 1731, 1122, 1728, 1133, 1725, 1144, 1722, 1154, 1720, 1159, 1717, 1161, 1708, 1167, 1704, 1172, 1702, 1174, 1702, 1175, 1698, 1186, 1690, 1194, 1689, 1196, 1687, 1197, 1685, 1199, 1682, 1202, 1680, 1204, 1679, 1205, 1673, 1209, 1668, 1219, 1668, 1220, 1667, 1221, 1665, 1230, 1659, 1234, 1657, 1235, 1656, 1235, 1652, 1236, 1648, 1237, 1645, 1238, 1641, 1239, 1638, 1241, 1636, 1242, 1620, 1253, 1609, 1264, 1608, 1266, 1606, 1266, 1602, 1267, 1600, 1269, 1591, 1272, 1583, 1277, 1582, 1278, 1582, 1279, 1581, 1285, 1578, 1287, 1574, 1292, 1571, 1294, 1568, 1297, 1566, 1300, 1558, 1309, 1556, 1321, 1556, 1323, 1555, 1324, 1550, 1330, 1544, 1336, 1534, 1346, 1532, 1359, 1531, 1365, 1526, 1366, 1518, 1368, 1512, 1376, 1510, 1378, 1509, 1380, 1507, 1391, 1495, 1395, 1493, 1396, 1491, 1397, 1490, 1399, 1488, 1400, 1483, 1402, 1483, 1407, 1483, 1409, 1483, 1411, 1482, 1414, 1481, 1415, 1480, 1418, 1478, 1418, 1474, 1420, 1470, 1422, 1468, 1424, 1465, 1425, 1464, 1426, 1462, 1427, 1461, 1428, 1461, 1430, 1460, 1431, 1460, 1432, 1457, 1439, 1455, 1447, 1454, 1453, 1450, 1455, 1455, 1465, 1469, 1473, 1472, 1475, 1474, 1476, 1477, 1478, 1478, 1483, 1479, 1489, 1483, 1492, 1484, 1494, 1485, 1496, 1486, 1500, 1490, 1504, 1492, 1506, 1493, 1508, 1497, 1517, 1501, 1525, 1504, 1533, 1504, 1544, 1504, 1546, 1505, 1548, 1506, 1556, 1508, 1564, 1510, 1569, 1511, 1573, 1514, 1581, 1515, 1590, 1517, 1599, 1518, 1609, 1519, 1612, 1521, 1615, 1525, 1622, 1528, 1628, 1529, 1631, 1530, 1634, 1536, 1649, 1548, 1658, 1550, 1660, 1553, 1662, 1567, 1669, 1575, 1684, 1576, 1685, 1577, 1686, 1585, 1694, 1598, 1697, 1600, 1698, 1602, 1699, 1615, 1708, 1622, 1720, 1624, 1722, 1625, 1724, 1642, 1742, 1652, 1758, 1655, 1762, 1655, 1768, 1655, 1770, 1656, 1772, 1661, 1782, 1666, 1788, 1671, 1793, 1677, 1800, 1678, 1802, 1679, 1804, 1720, 1804, 1759, 1805, 1768, 1805, 1776, 1801, 1777, 1801, 1778, 1800, 1785, 1791, 1799, 1790, 1801, 1790, 1803, 1790, 1843, 1789, 1883, 1789, 1920, 1789, 1958, 1789, 1997, 1789, 2036, 1789, 2076, 1789, 2116, 1788, 2118, 1788, 2120, 1788, 2129, 1787, 2139, 1786, 2142, 1786, 2145, 1785, 2154, 1784, 2162, 1782, 2167, 1780, 2172, 1776, 2177, 1772, 2180, 1769, 2182, 1768, 2183, 1767, 2186, 1765, 2189, 1764, 2202, 1761, 2217, 1761, 2215, 1757, 2213, 1753, 2208, 1742, 2209, 1728, 2210, 1724, 2211, 1720, 2211, 1719, 2211, 1717, 2212, 1716, 2213, 1714, 2215, 1711, 2216, 1707, 2217, 1699, 2225, 1694, 2226, 1694, 2227, 1693, 2234, 1690, 2234, 1682, 2235, 1672, 2239, 1663, 2240, 1660, 2242, 1657, 2244, 1656, 2246, 1655, 2256, 1649, 2258, 1640, 2259, 1635, 2262, 1630, 2264, 1628, 2264, 1625, 2265, 1621, 2265, 1617, 2266, 1616, 2266, 1615, 2267, 1613, 2268, 1611, 2269, 1608, 2270, 1602, 2271, 1600, 2272, 1599, 2273, 1596, 2274, 1590, 2274, 1587, 2275, 1583, 2278, 1565, 2277, 1546, 2277, 1538, 2273, 1531, 2272, 1529, 2270, 1528, 2263, 1524, 2259, 1514, 2255, 1506, 2256, 1495, 2256, 1492, 2255, 1490, 2254, 1488, 2253, 1486, 2247, 1479, 2241, 1472, 2239, 1470, 2238, 1468, 2236, 1464, 2234, 1460, 2232, 1454, 2233, 1447, 2233, 1445, 2233, 1443, 2231, 1438, 2230, 1432, 2228, 1422, 2223, 1416, 2221, 1414, 2219, 1411, 2218, 1410, 2217, 1409, 2214, 1406, 2213, 1401, 2213, 1399, 2212, 1397, 2209, 1395, 2209, 1392, 2207, 1382, 2204, 1372, 2203, 1369, 2203, 1365, 2203, 1357, 2197, 1353, 2189, 1346, 2184, 1337, 2183, 1334, 2182, 1331, 2181, 1328, 2179, 1324, 2177, 1320, 2178, 1313, 2179, 1311, 2178, 1309, 2176, 1305, 2174, 1300, 2166, 1286, 2161, 1267, 2161, 1265, 2161, 1263, 2163, 1248, 2154, 1239, 2152, 1238, 2151, 1235, 2148, 1229, 2148, 1223, 2147, 1214, 2146, 1206, 2146, 1203, 2146, 1200, 2144, 1186, 2137, 1177, 2136, 1176, 2135, 1175, 2128, 1167, 2126, 1158, 2124, 1147, 2123, 1135, 2123, 1125, 2118, 1117, 2113, 1109, 2110, 1099, 2106, 1090, 2106, 1078, 2106, 1077, 2106, 1076, 2105, 1055, 2104, 1034, 2104, 1033, 2104, 1032, 2103, 1021, 2097, 1015, 2096, 1014, 2095, 1013, 2089, 1005, 2087, 996, 2087, 995, 2087, 994, 2085, 983, 2082, 975, 2078, 966, 2076, 956, 2076, 954, 2075, 953, 2074, 950, 2073, 948, 2072, 946, 2071, 944, 2065, 929, 2064, 910, 2064, 909, 2064, 908, 2063, 900, 2057, 893, 2054, 890, 2053, 887, 2053, 885, 2052, 883, 2049, 876, 2048, 864, 2048, 862, 2048, 860, 2048, 855, 2047, 850, 2047, 848, 2046, 846, 2041, 838, 2034, 830, 2033, 829, 2031, 827, 2024, 821, 2021, 814, 2020, 811, 2019, 808, 2014, 800, 2006, 796, 2000, 793, 1994, 790, 1986, 785, 1983, 776, 1982, 772, 1980, 768, 1976, 771, 1971, 773, 1970, 773, 1969, 773, 1965, 774, 1962, 776, 1956, 783, 1949, 788, Q, 1948, 790, 1946, 791, Z]
      ],
      "label": "Mahinog",
      "shortLabel": "MH",
      "labelPosition": [186.3, 136.6],
      "labelAlignment": [CEN, MID]
    },
    "PH.CM.SG": {
      "outlines": [
        [M, 1353, 1435, Q, 1345, 1432, 1341, 1423, 1340, 1422, 1339, 1421, 1333, 1415, 1326, 1409, 1320, 1404, 1316, 1397, 1316, 1396, 1316, 1395, 1314, 1384, 1302, 1382, 1300, 1382, 1298, 1381, 1289, 1376, 1281, 1370, 1278, 1367, 1275, 1365, 1274, 1363, 1272, 1361, 1269, 1358, 1264, 1358, 1234, 1357, 1203, 1357, 1199, 1357, 1196, 1358, 1192, 1360, 1187, 1359, 1172, 1359, 1164, 1367, 1162, 1369, 1160, 1372, 1159, 1374, 1158, 1375, 1157, 1378, 1151, 1379, 1150, 1379, 1149, 1379, 1147, 1380, 1146, 1381, 1141, 1384, 1139, 1388, 1134, 1396, 1124, 1401, 1123, 1402, 1122, 1402, 1120, 1403, 1118, 1404, 1116, 1404, 1115, 1405, 1113, 1406, 1112, 1408, 1109, 1411, 1105, 1414, 1103, 1416, 1100, 1417, 1099, 1418, 1097, 1419, 1096, 1461, 1097, 1499, 1097, 1512, 1095, 1523, 1094, 1528, 1094, 1533, 1093, 1535, 1092, 1537, 1089, 1547, 1083, 1554, 1078, 1560, 1075, 1569, 1067, 1585, 1069, 1606, 1071, 1627, 1060, 1642, 1057, 1647, 1052, 1653, 1050, 1655, 1049, 1661, 1049, 1664, 1049, 1667, 1049, 1673, 1047, 1676, 1046, 1678, 1046, 1680, 1047, 1692, 1043, 1703, 1043, 1704, 1042, 1705, 1042, 1707, 1041, 1709, 1040, 1710, 1039, 1712, 1037, 1715, 1036, 1718, 1032, 1729, 1028, 1736, 1027, 1739, 1025, 1741, 1020, 1748, 1014, 1755, 1013, 1756, 1012, 1757, 1004, 1766, 996, 1783, 991, 1792, 986, 1800, 984, 1802, 983, 1804, 981, 1806, 977, 1810, 976, 1811, 975, 1812, 973, 1815, 971, 1819, 970, 1820, 970, 1822, 972, 1841, 956, 1847, 955, 1848, 954, 1850, 951, 1854, 948, 1855, 947, 1856, 946, 1858, 945, 1861, 942, 1866, 941, 1868, 939, 1869, 938, 1871, 936, 1872, 934, 1874, 931, 1875, 930, 1876, 929, 1877, 927, 1881, 925, 1884, 924, 1885, 924, 1887, 922, 1892, 922, 1898, 921, 1900, 920, 1902, 919, 1903, 918, 1904, 904, 1914, 896, 1930, 892, 1935, 892, 1942, 892, 1949, 889, 1955, 889, 1957, 889, 1959, 888, 1968, 888, 1978, 887, 2018, 887, 2057, 887, 2069, 886, 2080, 886, 2081, 885, 2082, 884, 2086, 880, 2089, 876, 2091, 875, 2095, 874, 2096, 873, 2098, 872, 2099, 871, 2101, 870, 2104, 868, 2106, 865, 2111, 861, 2116, 859, 2119, 857, 2123, 878, 2127, 899, 2127, 917, 2127, 935, 2128, 937, 2128, 939, 2128, 949, 2129, 958, 2132, 963, 2133, 969, 2134, 971, 2134, 973, 2134, 978, 2135, 981, 2139, 982, 2142, 984, 2145, 989, 2151, 995, 2156, 999, 2160, 1004, 2159, 1009, 2158, 1013, 2159, 1017, 2160, 1021, 2160, 1027, 2161, 1031, 2164, 1033, 2165, 1033, 2167, 1041, 2181, 1057, 2183, 1066, 2184, 1074, 2189, 1076, 2191, 1077, 2192, 1080, 2197, 1086, 2204, 1090, 2207, 1094, 2209, 1095, 2210, 1096, 2210, 1118, 2213, 1136, 2228, 1138, 2229, 1141, 2230, 1143, 2231, 1144, 2232, 1146, 2233, 1147, 2233, 1175, 2240, 1205, 2238, 1211, 2238, 1216, 2237, 1230, 2235, 1236, 2244, 1241, 2251, 1246, 2256, 1251, 2262, 1260, 2262, 1278, 2263, 1296, 2263, 1306, 2264, 1315, 2259, 1318, 2258, 1320, 2256, 1322, 2255, 1323, 2254, 1331, 2250, 1329, 2240, 1346, 2240, 1362, 2240, 1380, 2241, 1395, 2235, 1397, 2235, 1398, 2233, 1398, 2231, 1399, 2230, 1402, 2228, 1403, 2225, 1403, 2224, 1405, 2223, 1407, 2222, 1411, 2222, 1430, 2221, 1448, 2220, 1457, 2219, 1463, 2223, 1472, 2228, 1477, 2234, 1479, 2236, 1480, 2237, 1484, 2239, 1488, 2240, 1499, 2242, 1509, 2249, 1510, 2250, 1512, 2252, 1514, 2253, 1515, 2255, 1517, 2256, 1517, 2257, 1518, 2262, 1524, 2261, 1529, 2261, 1534, 2261, 1537, 2262, 1539, 2262, 1545, 2263, 1551, 2264, 1554, 2265, 1556, 2266, 1565, 2271, 1572, 2278, 1575, 2282, 1581, 2282, 1591, 2283, 1593, 2290, 1593, 2292, 1594, 2294, 1595, 2296, 1596, 2299, 1597, 2302, 1599, 2304, 1609, 2316, 1620, 2328, 1621, 2329, 1622, 2330, 1624, 2340, 1626, 2349, 1627, 2351, 1628, 2352, 1635, 2357, 1643, 2363, 1646, 2366, 1650, 2368, 1667, 2381, 1673, 2399, 1674, 2400, 1674, 2401, 1677, 2407, 1680, 2411, 1681, 2414, 1682, 2416, 1684, 2420, 1690, 2421, 1692, 2421, 1693, 2423, 1696, 2425, 1700, 2426, 1708, 2428, 1715, 2436, 1717, 2438, 1718, 2439, 1724, 2447, 1732, 2454, 1733, 2455, 1733, 2456, 1739, 2475, 1753, 2483, 1754, 2484, 1755, 2484, 1762, 2484, 1767, 2487, 1769, 2489, 1773, 2489, 1782, 2489, 1788, 2493, 1790, 2495, 1792, 2495, 1797, 2497, 1798, 2502, 1799, 2506, 1800, 2510, 1800, 2511, 1800, 2512, 1799, 2522, 1807, 2525, 1808, 2526, 1810, 2527, 1825, 2533, 1843, 2532, 1843, 2530, 1842, 2527, 1842, 2526, 1842, 2525, 1841, 2508, 1841, 2491, 1841, 2452, 1838, 2414, 1838, 2413, 1837, 2412, 1831, 2400, 1824, 2393, 1823, 2391, 1823, 2389, 1822, 2379, 1822, 2370, 1823, 2359, 1820, 2353, 1812, 2335, 1814, 2313, 1814, 2311, 1813, 2310, 1811, 2306, 1809, 2301, 1808, 2297, 1807, 2295, 1803, 2289, 1801, 2286, 1800, 2284, 1799, 2282, 1794, 2265, 1798, 2248, 1799, 2246, 1799, 2244, 1799, 2239, 1797, 2234, 1797, 2232, 1796, 2230, 1792, 2223, 1785, 2213, 1781, 2207, 1779, 2200, 1777, 2192, 1778, 2183, 1778, 2174, 1777, 2165, 1777, 2164, 1776, 2162, 1770, 2153, 1767, 2144, 1764, 2135, 1765, 2125, 1766, 2114, 1760, 2105, 1756, 2100, 1755, 2093, 1754, 2083, 1750, 2072, 1750, 2070, 1749, 2068, 1749, 2066, 1748, 2064, 1745, 2058, 1744, 2051, 1744, 2049, 1744, 2047, 1742, 2040, 1735, 2031, 1733, 2027, 1732, 2024, 1732, 2014, 1732, 2005, 1734, 1987, 1721, 1974, 1719, 1972, 1718, 1969, 1712, 1956, 1708, 1942, 1708, 1940, 1708, 1938, 1707, 1930, 1706, 1921, 1706, 1919, 1705, 1917, 1702, 1906, 1701, 1894, 1701, 1893, 1700, 1892, 1697, 1887, 1696, 1881, 1694, 1877, 1692, 1873, 1688, 1866, 1689, 1856, 1692, 1836, 1685, 1818, 1685, 1816, 1684, 1814, 1682, 1808, 1679, 1804, 1678, 1802, 1677, 1800, 1671, 1793, 1666, 1788, 1661, 1782, 1656, 1772, 1655, 1770, 1655, 1768, 1655, 1762, 1652, 1758, 1642, 1742, 1625, 1724, 1624, 1722, 1622, 1720, 1615, 1708, 1602, 1699, 1600, 1698, 1598, 1697, 1585, 1694, 1577, 1686, 1576, 1685, 1575, 1684, 1567, 1669, 1553, 1662, 1550, 1660, 1548, 1658, 1536, 1649, 1530, 1634, 1529, 1631, 1528, 1628, 1525, 1622, 1521, 1615, 1519, 1612, 1518, 1609, 1517, 1599, 1515, 1590, 1514, 1581, 1511, 1573, 1510, 1569, 1508, 1564, 1506, 1556, 1505, 1548, 1504, 1546, 1504, 1544, 1504, 1533, 1501, 1525, 1497, 1517, 1493, 1508, 1492, 1506, 1490, 1504, 1486, 1500, 1485, 1496, 1484, 1494, 1483, 1492, 1479, 1489, 1478, 1483, 1477, 1478, 1474, 1476, 1472, 1475, 1469, 1473, 1455, 1465, 1450, 1455, 1448, 1455, 1447, 1455, 1425, 1456, 1405, 1453, 1402, 1452, 1399, 1452, 1391, 1452, 1386, 1447, 1385, 1446, 1384, 1445, 1381, 1445, 1378, 1444, Q, 1365, 1442, 1353, 1435, Z]
      ],
      "label": "Sagay",
      "shortLabel": "SG",
      "labelPosition": [135, 194.4],
      "labelAlignment": [CEN, MID]
    },
    "PH.CM.GI": {
      "outlines": [
        [M, 2271, 1799, Q, 2267, 1796, 2260, 1795, 2252, 1794, 2246, 1786, 2245, 1785, 2243, 1783, 2242, 1782, 2239, 1781, 2222, 1779, 2218, 1766, 2218, 1764, 2217, 1761, 2202, 1761, 2189, 1764, 2186, 1765, 2183, 1767, 2182, 1768, 2180, 1769, 2177, 1772, 2172, 1776, 2167, 1780, 2162, 1782, 2154, 1784, 2145, 1785, 2142, 1786, 2139, 1786, 2129, 1787, 2120, 1788, 2118, 1788, 2116, 1788, 2076, 1789, 2036, 1789, 1997, 1789, 1958, 1789, 1920, 1789, 1883, 1789, 1843, 1789, 1803, 1790, 1801, 1790, 1799, 1790, 1785, 1791, 1778, 1800, 1777, 1801, 1776, 1801, 1768, 1805, 1759, 1805, 1720, 1804, 1679, 1804, 1682, 1808, 1684, 1814, 1685, 1816, 1685, 1818, 1692, 1836, 1689, 1856, 1688, 1866, 1692, 1873, 1694, 1877, 1696, 1881, 1697, 1887, 1700, 1892, 1701, 1893, 1701, 1894, 1702, 1906, 1705, 1917, 1706, 1919, 1706, 1921, 1707, 1930, 1708, 1938, 1708, 1940, 1708, 1942, 1712, 1956, 1718, 1969, 1719, 1972, 1721, 1974, 1734, 1987, 1732, 2005, 1732, 2014, 1732, 2024, 1733, 2027, 1735, 2031, 1742, 2040, 1744, 2047, 1744, 2049, 1744, 2051, 1745, 2058, 1748, 2064, 1749, 2066, 1749, 2068, 1750, 2070, 1750, 2072, 1754, 2083, 1755, 2093, 1756, 2100, 1760, 2105, 1766, 2114, 1765, 2125, 1764, 2135, 1767, 2144, 1770, 2153, 1776, 2162, 1777, 2164, 1777, 2165, 1778, 2174, 1778, 2183, 1777, 2192, 1779, 2200, 1781, 2207, 1785, 2213, 1792, 2223, 1796, 2230, 1797, 2232, 1797, 2234, 1799, 2239, 1799, 2244, 1799, 2246, 1798, 2248, 1794, 2265, 1799, 2282, 1800, 2284, 1801, 2286, 1803, 2289, 1807, 2295, 1808, 2297, 1809, 2301, 1811, 2306, 1813, 2310, 1814, 2311, 1814, 2313, 1812, 2335, 1820, 2353, 1823, 2359, 1822, 2370, 1822, 2379, 1823, 2389, 1823, 2391, 1824, 2393, 1831, 2400, 1837, 2412, 1838, 2413, 1838, 2414, 1841, 2452, 1841, 2491, 1841, 2508, 1842, 2525, 1842, 2526, 1842, 2527, 1843, 2530, 1843, 2532, 1863, 2531, 1883, 2530, 1884, 2530, 1885, 2530, 1899, 2530, 1912, 2527, 1918, 2525, 1924, 2525, 1934, 2525, 1943, 2524, 1953, 2523, 1964, 2523, 1967, 2523, 1969, 2522, 1978, 2519, 1989, 2521, 2012, 2524, 2025, 2510, 2027, 2508, 2027, 2506, 2028, 2498, 2034, 2495, 2035, 2495, 2036, 2494, 2041, 2485, 2052, 2480, 2056, 2479, 2059, 2478, 2064, 2476, 2067, 2470, 2068, 2468, 2070, 2467, 2072, 2466, 2075, 2465, 2079, 2464, 2082, 2463, 2086, 2461, 2090, 2461, 2103, 2460, 2104, 2447, 2104, 2444, 2105, 2441, 2106, 2437, 2108, 2433, 2109, 2432, 2110, 2430, 2111, 2427, 2112, 2422, 2112, 2420, 2113, 2418, 2113, 2416, 2114, 2415, 2119, 2410, 2124, 2403, 2125, 2401, 2126, 2400, 2132, 2394, 2134, 2384, 2134, 2382, 2135, 2381, 2140, 2376, 2146, 2367, 2148, 2366, 2149, 2364, 2153, 2360, 2153, 2355, 2154, 2349, 2157, 2344, 2159, 2340, 2161, 2336, 2161, 2334, 2162, 2333, 2165, 2326, 2164, 2317, 2164, 2314, 2165, 2311, 2167, 2301, 2172, 2293, 2173, 2291, 2174, 2290, 2176, 2286, 2177, 2282, 2180, 2272, 2187, 2265, 2192, 2259, 2197, 2258, 2199, 2258, 2201, 2256, 2203, 2255, 2205, 2252, 2211, 2240, 2226, 2231, 2229, 2229, 2231, 2228, 2233, 2227, 2234, 2226, 2237, 2225, 2239, 2223, 2243, 2219, 2245, 2217, 2246, 2215, 2248, 2214, 2252, 2212, 2256, 2208, 2262, 2203, 2273, 2204, 2277, 2204, 2280, 2203, 2282, 2202, 2284, 2201, 2292, 2198, 2302, 2195, 2304, 2195, 2306, 2195, 2322, 2194, 2336, 2190, 2354, 2184, 2367, 2171, 2368, 2170, 2369, 2168, 2376, 2159, 2384, 2154, 2390, 2149, 2394, 2143, 2395, 2140, 2397, 2138, 2399, 2136, 2400, 2134, 2404, 2127, 2404, 2118, 2403, 2107, 2409, 2102, 2411, 2100, 2412, 2099, 2415, 2095, 2417, 2092, 2421, 2087, 2424, 2078, 2427, 2071, 2426, 2062, 2426, 2054, 2425, 2047, 2423, 2026, 2423, 2005, 2424, 1993, 2423, 1982, 2423, 1978, 2422, 1973, 2422, 1966, 2415, 1961, 2408, 1955, 2405, 1948, 2404, 1945, 2402, 1942, 2398, 1934, 2391, 1927, 2389, 1925, 2388, 1923, 2385, 1914, 2377, 1906, 2372, 1901, 2365, 1896, 2363, 1894, 2360, 1893, 2356, 1891, 2353, 1885, 2350, 1878, 2344, 1874, 2332, 1868, 2327, 1854, 2323, 1845, 2315, 1844, 2306, 1843, 2302, 1838, 2301, 1837, 2300, 1835, 2293, 1829, 2287, 1821, 2286, 1818, 2284, 1816, Q, 2280, 1805, 2271, 1799, Z]
      ],
      "label": "Guinsiliban",
      "shortLabel": "GI",
      "labelPosition": [205.3, 214.7],
      "labelAlignment": [CEN, MID]
    }
  }
}];

export default {
  extension: geodefinitions,
  name: 'camiguin',
  type: 'maps'
};