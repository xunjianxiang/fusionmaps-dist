(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=678)})({678:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(679);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},679:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright InfoSoft Global Pvt. Ltd.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author InfoSoft Global Pvt. Ltd.
 * @meta package_map_pack
 * @id fusionmaps.WestEuropeanRegion.20.10-30-2012 07:55:30
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"WestEuropeanRegion",revision:20,standaloneInit:true,baseWidth:130,baseHeight:150,baseScaleFactor:10,entities:{"03":{outlines:[[M,706,394,Q,706,411,706,428,707,428,709,429,713,430,716,430,723,432,731,432,733,432,736,432,740,431,745,431,746,431,746,431,747,428,747,425,747,424,746,423,745,420,744,416,744,413,742,412,741,412,741,412,740,409,739,405,739,404,739,402,738,395,733,393,730,392,727,392,726,392,726,392,724,392,723,390,723,389,721,388,717,387,712,387,711,387,710,387,710,386,710,385,L,710,385,Q,703,383,704,387,Q,706,392,706,394,Z]],label:"Luxembourg",shortLabel:"LU",labelPosition:[86.5,40.8],labelAlignment:[LFT,MID],labelConnectors:[[M,865,408,L,725,408]]},"04":{outlines:[[M,883,1002,Q,884,996,880,995,874,995,868,995,L,865,995,Q,865,1004,855,1003,853,1002,853,1003,848,1019,858,1025,861,1025,864,1025,864,1022,862,1020,861,1020,861,1018,860,1013,866,1014,872,1015,875,1011,877,1008,880,1009,881,1009,881,1010,882,1011,884,1012,Q,883,1007,883,1002,Z]],label:"Monaco",shortLabel:"MC",labelPosition:[87,116.7],labelAlignment:[CEN,BTM],labelConnectors:[[M,870,1167,L,870,1007]]},"05":{outlines:[[M,690,56,Q,688,60,684,63,683,64,682,64,676,64,669,66,669,66,668,66,667,67,667,67,666,70,666,73,666,75,667,78,668,83,663,82,657,80,658,86,659,88,657,89,654,89,651,89,650,89,650,89,649,92,649,95,649,99,645,99,640,98,636,100,636,100,636,101,635,107,635,113,L,635,114,Q,630,115,624,115,623,115,623,116,621,127,621,138,621,139,621,140,618,141,615,141,L,614,141,Q,613,147,613,153,613,157,614,161,614,165,610,164,609,164,608,164,607,165,605,165,604,166,604,166,603,169,603,172,603,177,603,182,603,183,602,183,599,183,599,186,598,195,599,204,599,210,599,216,604,217,609,218,L,609,219,Q,609,223,610,228,L,611,228,Q,614,228,616,228,617,232,613,233,613,233,612,234,611,235,607,235,601,234,600,239,600,244,593,243,589,242,590,247,590,247,590,248,589,250,588,251,587,252,587,253,585,254,582,254,576,254,570,254,563,254,555,255,555,255,555,256,554,258,554,261,554,262,553,262,557,267,557,273,557,274,559,274,564,274,568,274,574,274,580,274,581,274,581,275,583,277,583,281,L,584,281,Q,590,281,596,281,595,277,595,272,595,271,595,271,594,268,597,267,599,267,600,267,603,267,606,267,601,264,602,258,608,257,614,257,612,251,614,247,615,245,619,245,624,246,629,246,651,246,673,246,679,245,682,248,683,249,684,250,686,251,686,255,685,257,688,256,694,255,694,261,693,265,694,270,694,270,694,271,694,273,696,274,701,275,702,279,702,280,702,281,702,287,703,293,703,294,704,294,704,295,705,295,709,295,710,297,711,295,711,293,713,286,712,279,711,274,713,271,713,271,713,270,713,262,714,255,L,715,254,Q,720,253,726,254,724,246,724,237,714,234,715,226,715,220,715,214,715,211,715,208,715,207,717,206,719,205,720,204,722,203,724,203,728,202,730,200,730,200,730,199,730,194,731,189,L,732,189,Q,736,189,740,188,L,740,187,Q,740,183,741,179,L,742,179,Q,747,179,751,178,752,178,752,177,752,176,753,175,753,175,754,175,758,175,762,174,763,174,763,174,766,167,766,159,765,150,765,141,765,140,765,139,765,137,762,138,759,138,758,135,758,134,757,134,755,132,754,129,754,128,753,128,752,126,752,123,752,120,753,117,753,116,754,115,757,111,759,108,762,106,766,103,766,103,766,102,765,93,765,85,765,84,765,83,766,78,768,75,770,72,771,67,771,64,770,63,766,58,767,53,763,52,762,50,761,50,760,49,760,49,759,48,758,47,756,46,754,46,754,45,L,748,43,Q,740,43,732,43,731,43,730,43,727,44,728,48,727,50,725,52,724,53,722,53,721,53,720,53,716,53,711,53,713,55,712,59,712,60,712,60,710,61,708,61,705,61,705,60,704,59,704,59,702,58,700,57,697,55,692,55,Q,691,55,690,56,Z]],label:"Netherlands",shortLabel:"NL",labelPosition:[79.6,15.1],labelAlignment:[LFT,MID],labelConnectors:[[M,796,151,L,694,151]]},"02":{outlines:[[M,199,508,Q,198,509,198,509,195,509,196,512,196,514,197,516,197,518,198,519,200,522,201,524,L,201,525,Q,203,525,204,525,206,525,209,524,211,524,213,523,216,523,215,520,215,519,215,517,214,515,213,513,212,509,214,506,215,505,215,505,216,504,216,503,211,503,206,503,205,503,204,504,Q,201,505,199,508,Z],[M,190,473,Q,189,473,189,473,188,483,188,493,193,493,198,493,198,493,199,492,202,491,201,488,200,485,200,481,200,478,201,476,201,472,199,472,Q,193,471,190,473,Z],[M,1022,1095,Q,1022,1099,1024,1100,1023,1100,1022,1100,1020,1100,1018,1099,1014,1099,1014,1102,1014,1104,1014,1104,1009,1106,1003,1106,1002,1106,1001,1106,1001,1107,1001,1108,1e3,1112,1002,1115,1001,1115,999,1115,997,1115,995,1116,994,1116,993,1116,992,1117,991,1118,991,1118,990,1119,989,1122,989,1126,989,1128,990,1131,991,1137,985,1136,981,1135,981,1137,980,1139,980,1140,980,1159,982,1178,L,982,1178,Q,983,1178,984,1179,985,1180,986,1180,987,1182,989,1183,991,1184,992,1185,993,1185,993,1186,994,1190,994,1195,994,1196,995,1197,996,1201,1002,1200,1005,1199,1005,1201,1005,1202,1006,1203,1006,1205,1006,1206,1007,1208,1008,1209,1016,1211,1024,1211,1026,1211,1026,1211,1027,1214,1026,1217,1026,1221,1028,1223,1030,1226,1033,1227,1034,1227,1035,1227,1039,1228,1039,1226,1039,1208,1039,1190,1039,1186,1039,1183,1038,1180,1040,1180,1042,1181,1043,1181,1044,1182,1045,1183,1047,1185,1050,1185,1052,1186,1052,1185,1053,1185,1053,1183,1053,1181,1053,1178,1053,1158,1053,1138,1053,1137,1052,1137,1048,1136,1043,1135,1041,1135,1041,1132,1042,1130,1041,1127,1041,1126,1041,1125,1040,1120,1040,1115,1040,1114,1040,1113,1038,1109,1032,1110,1031,1110,1030,1110,1030,1109,1030,1108,1029,1102,1029,1096,1029,1095,1029,1094,1028,1093,1027,1093,Q,1022,1092,1022,1095,Z],[M,705,427,Q,700,426,694,424,690,423,684,422,683,422,681,422,679,421,677,421,676,421,674,421,671,420,667,419,666,420,662,420,661,420,659,419,656,418,657,414,L,657,413,Q,653,412,649,412,648,412,648,411,647,411,647,410,646,407,646,404,646,401,643,400,633,399,622,399,620,399,618,399,614,399,609,399,607,399,606,398,606,395,607,393,607,389,604,389,601,389,599,386,598,385,597,385,596,385,596,383,597,377,592,376,591,376,590,376,586,376,582,376,578,377,577,374,576,369,576,364,576,362,575,362,569,361,562,360,561,360,559,360,555,360,556,355,557,351,554,351,549,351,546,350,546,349,545,349,543,344,542,340,541,339,541,338,537,334,531,335,530,335,530,335,528,336,524,337,523,337,523,336,522,333,523,330,523,328,521,328,520,328,519,327,515,325,511,325,510,325,510,324,509,323,509,322,509,321,509,321,508,313,508,306,508,301,503,302,502,302,501,301,499,299,497,299,496,300,495,299,494,299,490,299,487,300,481,300,475,300,468,299,466,299,465,301,465,306,465,312,464,312,464,311,463,310,459,311,458,311,458,311,456,316,456,321,453,320,449,320,448,320,448,320,447,321,446,321,445,322,445,323,444,337,444,352,444,371,444,391,L,444,392,Q,436,393,427,393,L,426,393,Q,425,398,425,403,426,407,424,410,423,411,422,413,421,414,420,414,413,416,406,416,403,416,400,415,394,414,394,421,L,394,422,Q,388,423,381,423,378,423,375,422,368,421,369,429,369,430,369,430,365,432,360,431,358,431,358,433,358,434,358,436,358,437,358,438,358,441,356,442,352,445,347,445,346,445,346,446,345,450,346,454,346,458,347,462,L,347,462,Q,348,462,348,463,349,463,349,464,350,464,350,465,351,465,352,465,355,465,354,467,354,469,354,470,354,470,353,471,353,472,352,472,350,473,348,473,341,472,340,477,340,479,341,480,342,482,343,485,344,487,345,488,345,490,345,490,344,491,343,491,342,492,342,492,336,492,335,486,335,483,332,483,325,483,319,483,319,483,318,482,318,481,317,480,316,478,314,478,310,477,307,477,305,477,304,476,303,474,303,471,303,470,302,469,292,465,280,466,276,466,272,465,268,465,268,467,268,469,268,470,269,470,269,471,270,473,272,475,272,475,273,475,275,476,277,477,271,478,265,477,264,476,264,475,264,474,263,473,262,471,260,470,259,469,257,469,251,469,249,463,249,462,248,461,248,460,248,458,246,452,247,446,248,442,245,442,243,442,240,442,237,441,237,443,237,445,237,446,235,452,234,458,233,457,229,457,226,457,222,458,222,463,222,468,221,474,225,478,228,480,232,482,233,483,233,484,234,486,235,490,235,494,233,495,232,495,230,496,230,497,229,497,226,498,227,503,227,505,227,506,228,509,232,512,232,513,233,513,234,513,234,514,235,516,237,517,238,519,238,520,239,526,239,532,239,535,240,537,240,540,243,541,244,542,244,542,244,546,240,549,240,549,239,549,234,550,229,550,227,550,226,548,225,547,225,546,225,542,223,541,222,541,220,541,217,541,213,540,206,539,204,543,204,544,203,545,202,546,202,546,190,547,178,547,175,547,172,547,168,546,169,550,169,551,169,552,169,553,168,553,167,555,166,555,164,556,162,555,161,555,160,554,156,551,155,548,154,547,154,546,152,543,153,538,154,535,152,535,151,535,149,534,149,534,148,533,147,533,146,532,145,531,144,530,141,528,137,524,136,524,135,523,134,522,132,522,130,521,128,520,123,519,120,521,118,522,117,526,117,527,116,528,116,530,115,530,111,531,108,531,106,531,104,530,99,529,94,528,93,528,93,528,92,532,91,535,90,537,89,538,88,540,87,541,83,543,78,542,77,542,76,542,75,541,75,540,75,538,75,536,75,531,72,530,69,530,65,530,64,530,63,529,62,529,62,529,57,528,53,528,52,528,50,529,50,529,49,530,49,530,48,531,48,533,47,535,46,537,47,540,48,544,44,544,42,543,39,544,38,544,37,544,30,544,32,551,32,552,33,553,35,554,37,557,37,558,38,558,39,558,40,559,41,560,42,560,43,561,44,561,45,562,45,562,48,562,49,563,L,50,564,Q,48,565,49,568,49,570,50,571,50,573,52,575,52,576,53,577,54,578,54,578,56,578,56,579,58,580,58,582,58,589,54,592,53,592,52,592,51,592,50,591,49,590,48,590,41,588,37,593,36,595,36,596,36,597,36,597,37,599,37,599,38,600,39,600,40,601,41,602,42,602,42,603,43,608,43,613,43,615,43,616,44,619,48,621,53,621,59,621,60,621,60,621,58,616,62,612,62,612,63,611,65,611,67,610,71,610,73,611,75,612,77,612,81,612,83,615,85,621,85,627,86,627,87,627,99,627,112,628,112,629,112,630,113,631,113,633,114,635,115,635,116,636,117,636,127,636,136,638,137,638,137,640,137,645,138,650,138,651,139,651,148,651,158,652,159,652,159,653,160,656,162,658,164,660,167,660,173,660,180,660,180,663,177,663,175,664,174,665,173,666,171,667,168,668,168,673,168,675,168,677,169,679,169,680,169,683,170,686,170,687,171,688,173,691,179,690,183,690,187,689,190,689,190,691,190,692,191,693,191,695,193,697,194,698,194,698,195,699,195,700,197,703,200,704,202,704,203,704,206,704,207,706,209,708,208,712,208,714,207,714,200,716,193,716,192,716,190,716,190,717,190,717,189,720,189,723,189,728,190,731,191,732,192,732,192,734,193,734,194,735,195,736,196,737,197,737,198,739,202,740,204,740,205,741,206,742,207,742,212,744,210,751,210,752,211,753,211,754,211,755,212,757,213,758,215,763,218,765,219,765,219,766,221,767,221,768,223,770,225,771,226,772,227,772,228,772,229,773,233,775,238,777,240,779,243,781,244,782,244,782,245,783,245,783,247,783,248,784,249,784,249,784,253,786,255,789,256,790,256,791,257,798,257,805,257,806,256,807,254,813,257,819,258,822,259,825,261,828,261,832,260,835,260,838,259,844,263,848,264,850,266,850,267,851,267,851,270,854,274,853,276,853,276,854,277,856,276,860,276,863,278,865,281,867,285,870,286,872,286,873,287,876,287,880,287,882,287,885,288,892,282,890,281,890,280,890,279,890,279,889,278,886,278,883,278,882,277,881,277,881,275,880,275,880,274,880,272,879,272,876,271,870,265,871,264,871,264,871,263,876,263,881,263,883,263,886,264,887,264,888,264,891,264,893,264,900,264,906,264,909,263,912,263,920,261,928,258,946,257,965,257,966,256,966,253,967,249,967,248,967,248,967,247,978,247,988,247,994,247,1e3,248,1003,244,1003,242,1002,240,1003,238,1003,239,1007,239,1009,239,1011,239,1012,238,1013,238,1023,238,1032,238,1039,237,1045,237,1050,233,1050,230,1050,227,1050,226,1050,226,1051,225,1052,225,1053,225,1058,225,1063,225,1064,224,1064,221,1065,218,1065,213,1065,207,1066,207,1070,207,1075,208,1075,208,1075,214,1076,216,1082,217,1085,219,1087,221,1089,222,1091,223,1092,224,1092,225,1093,225,1093,227,1097,233,1098,238,1098,243,1098,248,1099,249,1102,251,1106,253,1108,254,1110,257,1110,267,1111,278,1111,281,1111,284,1111,285,1112,285,1112,286,1113,286,1113,287,1115,287,1116,286,1120,288,1120,290,1121,292,1121,292,1122,293,1122,295,1123,297,1124,301,1126,307,1125,311,1124,312,1125,313,1126,314,1126,315,1127,315,1128,315,1131,316,1135,316,1135,317,1136,322,1138,329,1138,348,1138,368,1138,374,1138,379,1138,377,1138,377,1133,378,1131,378,1128,379,1128,379,1127,382,1124,387,1124,390,1125,393,1125,397,1125,400,1127,402,1127,403,1127,409,1129,410,1132,410,1134,411,1134,412,1135,413,1136,418,1138,423,1137,425,1138,428,1137,429,1137,430,1137,431,1136,432,1135,433,1133,435,1133,441,1133,448,1134,448,1135,448,1136,450,1141,453,1143,454,1143,455,1144,457,1144,458,1145,460,1147,460,1151,459,1152,459,1154,459,1157,461,1158,463,1162,469,1161,475,1161,482,1162,482,1162,482,1163,482,1166,485,1166,486,1167,487,1167,488,1167,489,1167,495,1168,496,1165,497,1164,497,1162,496,1159,499,1160,503,1161,508,1161,509,1162,510,1162,512,1162,512,1163,513,1164,513,1165,514,1165,514,1166,517,1168,522,1167,524,1167,525,1168,529,1170,535,1170,538,1170,537,1167,535,1158,544,1159,547,1160,549,1160,554,1160,558,1159,558,1158,557,1157,557,1156,557,1155,558,1154,559,1153,561,1152,562,1148,562,1147,562,1146,563,1143,563,1141,563,1138,562,1135,562,1135,560,1135,556,1135,553,1135,550,1134,551,1131,551,1128,551,1126,551,1121,552,1116,553,1116,554,1116,560,1116,559,1108,559,1103,559,1097,559,1095,563,1095,565,1096,568,1096,572,1096,572,1092,571,1086,571,1080,572,1077,575,1078,578,1078,581,1078,582,1078,582,1077,583,1075,583,1073,584,1069,584,1065,585,1064,585,1063,588,1064,590,1064,593,1065,595,1065,601,1059,600,1052,600,1049,601,1049,603,1048,605,1048,640,1048,675,1049,677,1049,678,1050,679,1051,680,1052,682,1054,683,1056,683,1057,685,1057,699,1057,713,1058,713,1059,713,1060,713,1064,715,1067,715,1069,716,1070,722,1071,728,1071,733,1071,739,1072,741,1073,743,1076,744,1078,745,1080,745,1081,746,1081,756,1081,766,1082,767,1082,767,1083,768,1086,769,1088,769,1088,770,1088,774,1088,778,1088,779,1088,779,1086,779,1082,780,1079,780,1078,781,1078,791,1077,801,1077,809,1077,818,1077,815,1073,815,1067,815,1067,815,1066,817,1066,818,1066,821,1066,823,1064,823,1063,825,1063,827,1063,828,1063,831,1062,833,1061,835,1060,835,1058,835,1055,835,1052,835,1045,836,1038,837,1038,838,1038,841,1038,844,1039,845,1039,845,1040,846,1040,846,1040,L,846,1037,Q,845,1035,845,1032,845,1027,846,1025,847,1024,848,1024,850,1023,851,1024,854,1025,857,1025,848,1019,853,1003,853,1002,855,1003,865,1004,865,995,L,868,995,Q,874,995,880,995,884,996,883,1002,883,1007,883,1011,885,1013,886,1014,886,1015,887,1016,887,1017,888,1017,L,888,1017,Q,891,1016,891,1013,891,1012,892,1011,892,1010,892,1010,893,1009,893,1007,893,1003,889,1001,888,1001,888,1e3,888,996,887,993,888,993,888,993,889,993,890,993,889,991,888,989,886,982,887,973,887,965,880,963,874,960,866,960,866,960,865,960,864,960,863,959,862,959,861,959,860,958,859,958,848,959,841,952,838,949,836,946,835,945,834,944,833,944,833,942,831,938,831,933,831,923,832,912,832,909,830,906,830,905,829,905,827,904,826,901,826,900,825,900,820,895,821,888,821,887,820,886,819,883,818,882,818,881,818,880,818,872,819,865,819,864,820,863,823,862,824,860,825,859,826,859,828,858,828,858,830,857,830,856,831,855,831,855,834,854,833,851,833,848,833,845,834,839,831,837,830,835,828,832,828,830,826,828,825,825,823,824,823,824,823,822,823,813,822,805,822,804,822,803,821,802,821,801,820,792,825,789,827,789,828,787,830,784,831,778,830,772,830,766,830,763,830,761,830,760,829,758,829,757,828,756,828,755,828,755,825,751,819,752,817,752,815,752,814,752,813,751,808,750,806,747,804,744,801,743,800,743,799,743,795,743,791,743,786,742,786,747,786,749,786,749,785,750,784,751,783,752,783,752,782,752,781,753,779,754,778,755,777,756,776,757,775,758,774,759,773,760,773,761,772,762,772,762,771,764,771,764,768,765,767,767,767,770,764,770,763,770,761,769,761,769,760,769,758,768,755,769,749,770,750,763,750,762,750,761,750,760,749,760,749,754,749,747,749,746,749,745,750,742,753,740,754,739,755,738,758,735,761,733,762,732,762,730,763,730,763,729,765,728,767,726,768,725,768,724,769,722,770,721,772,720,772,720,773,710,773,700,773,699,773,698,777,693,781,690,785,688,788,682,790,679,790,675,789,670,793,669,794,668,795,668,797,666,799,663,800,662,801,661,802,660,803,658,804,657,805,656,806,653,808,653,811,653,813,651,816,649,818,646,818,645,819,645,823,641,826,639,829,637,831,634,833,632,836,632,838,632,839,632,840,632,840,631,842,630,842,630,843,626,843,622,843,621,843,620,844,616,845,613,846,611,846,609,846,600,846,591,846,582,846,574,846,567,847,561,847,559,848,558,852,553,855,545,856,544,856,544,861,544,865,544,L,866,544,Q,867,539,867,534,868,524,866,515,866,513,867,513,871,512,876,512,L,877,512,Q,878,506,878,500,878,499,878,498,876,495,874,492,875,492,876,491,878,491,881,491,883,491,883,490,884,485,882,482,882,481,881,481,868,480,854,480,851,480,848,480,843,481,841,478,840,477,839,474,835,474,832,472,831,471,830,470,827,470,824,470,816,470,808,470,804,470,801,470,790,469,781,465,780,464,779,464,774,464,770,463,769,462,768,462,765,463,764,461,764,458,763,456,762,454,761,452,761,451,761,450,760,450,760,449,757,447,754,443,754,442,754,442,753,439,751,437,748,434,744,431,739,430,735,431,733,432,730,432,723,432,715,430,712,429,708,428,Q,707,428,705,427,Z]],label:"France",shortLabel:"FR",labelPosition:[49.4,73.3],labelAlignment:[CEN,MID]},"01":{outlines:[[M,694,261,Q,694,255,688,256,685,257,686,255,686,251,684,250,683,249,682,248,679,245,673,246,651,246,629,246,624,246,619,245,615,245,614,247,612,251,614,257,608,257,602,258,601,264,606,267,603,267,600,267,599,267,597,267,594,268,595,271,595,271,595,272,595,277,596,281,590,281,584,281,L,583,281,Q,583,277,581,275,581,274,580,274,574,274,568,274,564,274,559,274,557,274,557,273,557,267,553,262,553,262,552,262,547,262,542,261,537,261,532,263,531,264,530,264,529,265,529,265,527,266,528,269,528,272,525,272,518,272,510,272,L,510,273,Q,510,277,509,281,L,508,281,Q,504,280,501,281,500,282,499,282,497,282,494,282,497,283,497,289,496,293,496,297,496,298,496,299,499,299,501,301,502,302,503,302,508,301,508,306,508,313,509,321,509,321,509,322,509,323,510,324,510,325,511,325,515,325,519,327,520,328,521,328,523,328,523,330,522,333,523,336,523,337,524,337,528,336,530,335,530,335,531,335,537,334,541,338,541,339,542,340,543,344,545,349,546,349,546,350,549,351,554,351,557,351,556,355,555,360,559,360,561,360,562,360,569,361,575,362,576,362,576,364,576,369,577,374,578,377,582,376,586,376,590,376,591,376,592,376,597,377,596,383,596,385,597,385,598,385,599,386,601,389,604,389,607,389,607,393,606,395,606,398,607,399,609,399,614,399,618,399,620,399,622,399,633,399,643,400,646,401,646,404,646,407,647,410,647,411,648,411,648,412,649,412,653,412,657,413,L,657,414,Q,656,418,659,419,661,420,662,420,666,420,667,419,671,420,674,421,676,421,677,421,679,421,681,422,683,422,684,422,690,423,694,424,700,426,705,428,705,411,705,394,705,391,705,389,704,384,709,385,709,382,710,381,713,380,715,380,716,380,716,379,717,377,718,375,718,373,718,372,720,362,719,352,719,351,720,350,720,350,721,349,724,347,727,346,728,346,729,346,733,347,733,344,734,341,734,338,734,337,735,336,737,333,736,328,736,327,736,327,733,326,729,326,725,326,724,322,724,317,724,312,724,309,722,308,720,308,716,307,712,306,711,302,710,299,711,297,709,295,705,295,704,295,704,294,703,294,703,293,702,287,702,281,702,280,702,279,701,275,696,274,694,273,694,271,694,270,694,270,Q,693,265,694,261,Z]],label:"Belgium",shortLabel:"BE",labelPosition:[64.6,33.2],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"westeuropeanregion",type:"maps"}}})});