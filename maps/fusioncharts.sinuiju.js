(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=120)})({120:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(121);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},121:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright InfoSoft Global Pvt. Ltd.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author InfoSoft Global Pvt. Ltd.
 * @meta package_map_pack
 * @id fusionmaps.Sinuiju.18.08-13-2012 12:27:27
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Sinuiju",revision:18,standaloneInit:true,baseWidth:105,baseHeight:102,baseScaleFactor:10,entities:{"KP.SJ":{outlines:[[M,14,719,Q,12,727,12,730,13,733,14,748,16,764,20,771,25,778,28,777,31,775,37,777,43,778,42,786,41,794,41,799,42,804,42,815,42,821,43,825,47,828,56,827,60,827,64,827,64,821,65,815,65,814,65,813,66,809,69,808,70,807,71,807,73,806,76,806,83,806,91,806,94,805,94,803,94,780,94,756,94,755,94,753,92,750,93,744,93,741,89,741,80,741,71,741,69,741,69,741,67,713,67,686,67,684,67,684,66,684,65,684,57,684,52,684,43,684,42,685,41,686,39,686,30,686,21,686,20,687,19,687,17,687,15,688,12,688,12,692,11,694,11,696,10,699,13,705,Q,16,712,14,719,Z],[M,682,71,Q,681,72,679,73,678,73,677,74,676,75,674,76,673,78,673,78,672,88,672,97,672,99,671,102,671,103,670,104,667,106,663,107,661,107,658,107,657,108,656,108,655,109,654,109,651,114,648,116,646,118,644,121,637,129,621,130,606,132,606,130,607,129,606,128,606,127,603,134,600,141,600,146,600,152,598,154,597,155,596,155,595,156,593,157,592,157,591,158,590,159,589,160,587,162,584,164,583,166,581,168,581,169,580,170,579,172,578,172,573,176,571,179,570,180,569,180,568,181,566,181,556,182,555,191,555,193,554,194,551,196,550,199,550,201,549,203,547,205,544,208,538,215,526,213,521,212,522,218,522,220,522,223,521,226,519,231,519,233,519,234,L,518,235,Q,518,235,518,236,517,238,516,238,513,242,511,246,509,248,504,248,496,248,487,247,481,247,482,253,482,260,483,268,483,271,481,271,478,271,476,272,471,273,469,274,466,276,467,281,467,289,468,296,468,300,465,301,460,304,454,303,438,301,427,306,425,306,425,310,424,314,427,319,430,324,422,324,414,324,396,324,390,325,387,324,387,325,385,327,L,384,327,Q,386,328,386,332,387,336,391,341,L,393,343,Q,391,340,393,341,394,342,395,342,413,343,430,343,L,432,343,Q,434,369,434,395,434,397,433,399,433,400,432,400,432,402,431,403,430,404,429,404,425,406,420,406,405,405,390,405,389,405,389,404,388,392,388,380,388,379,387,378,385,377,382,374,379,372,363,373,346,375,333,374,321,374,316,373,314,373,312,373,306,374,299,373,299,373,298,373,292,373,290,376,287,378,282,379,275,380,279,389,278,394,279,394,285,399,286,405,285,405,284,406,280,407,276,407,253,409,231,409,229,409,228,410,227,410,227,411,226,412,225,413,223,415,220,416,219,418,219,419,217,431,217,444,217,448,217,452,215,460,210,463,210,463,209,463,203,464,197,464,195,464,194,466,193,467,193,467,192,475,192,482,193,488,191,490,190,491,189,491,180,492,172,492,168,492,163,493,162,493,160,494,156,495,155,501,155,505,155,509,154,511,154,513,153,517,150,517,144,518,138,518,132,519,128,523,126,525,127,529,128,530,128,531,128,538,133,543,134,544,134,544,135,550,135,555,136,563,132,567,131,568,129,568,122,570,118,569,113,568,110,568,107,568,104,575,107,573,105,580,103,587,104,592,105,597,103,599,101,601,102,603,103,606,102,606,102,606,101,610,100,614,100,617,101,621,103,627,105,641,105,657,105,686,105,716,105,720,105,724,106,730,110,730,112,731,115,731,122,731,130,730,133,730,133,732,133,737,132,739,131,742,133,758,134,774,135,792,136,811,136,817,135,823,143,823,148,823,152,823,155,824,157,826,158,828,160,828,164,828,165,831,166,839,169,843,172,848,177,852,179,854,181,857,181,858,181,858,182,866,182,873,182,881,180,882,178,884,171,884,164,884,161,883,158,883,158,889,158,896,158,900,158,905,159,908,160,911,162,915,164,919,170,917,177,916,179,916,186,917,192,917,L,197,917,Q,213,917,229,917,231,917,232,916,235,914,239,912,242,909,242,903,242,899,243,895,244,887,249,880,251,878,252,876,252,875,253,874,254,872,255,869,257,867,258,865,260,862,260,858,261,854,264,851,265,851,265,850,267,841,274,839,277,839,278,836,278,836,279,835,281,835,282,834,284,833,288,832,289,832,289,832,303,830,318,830,327,830,336,829,343,828,350,828,357,828,363,828,366,829,368,829,382,828,392,835,393,836,393,836,398,837,401,840,406,845,410,849,413,852,415,854,416,855,417,856,423,861,428,864,430,866,431,867,438,877,449,880,450,881,452,881,457,882,462,882,468,882,474,883,476,883,477,884,479,885,481,886,482,887,484,887,489,889,494,892,496,893,497,894,499,895,501,895,509,897,514,901,518,904,524,905,527,906,529,907,542,914,554,922,557,924,559,925,563,927,564,929,567,933,571,937,574,940,579,940,587,942,596,944,598,945,599,946,601,947,603,948,606,949,609,950,612,951,613,952,616,954,618,955,625,960,630,963,632,964,633,966,634,967,635,968,637,971,638,972,640,976,642,977,643,977,644,978,646,979,653,981,661,983,674,989,687,995,704,995,722,995,731,997,741,999,746,998,750,997,764,997,779,998,776,998,L,778,998,Q,784,997,797,993,810,989,820,991,830,994,836,983,842,973,843,973,847,973,848,971,849,970,850,970,863,969,876,969,878,969,879,968,882,966,884,963,886,962,887,961,891,959,893,954,894,952,895,951,898,949,899,947,902,943,907,941,914,938,917,932,918,931,918,930,919,930,920,929,921,927,921,925,922,902,922,880,922,878,921,877,919,872,917,868,914,864,912,860,912,857,911,855,910,852,909,848,908,845,906,841,906,840,904,838,900,833,898,825,898,823,897,821,897,792,897,762,898,761,898,759,902,751,910,745,914,742,920,737,921,737,922,736,925,734,926,731,926,729,927,728,929,727,930,727,931,727,933,722,936,717,936,709,L,936,701,Q,936,701,938,690,940,679,944,671,947,663,947,655,948,647,945,647,943,646,939,644,935,642,929,639,923,635,917,635,912,634,907,632,905,631,903,630,895,628,897,620,897,619,897,618,897,618,897,617,900,615,901,614,903,612,905,610,906,610,906,609,910,601,918,595,922,592,927,589,929,587,933,586,935,585,936,584,937,584,938,582,939,581,940,580,941,578,942,577,944,576,944,574,946,570,949,569,950,568,951,567,953,565,957,564,959,563,959,562,963,559,969,557,970,556,972,555,974,555,976,554,983,551,989,548,990,547,990,546,991,543,992,541,994,539,997,536,1e3,533,1002,530,1003,528,1004,527,1006,526,1006,524,1007,521,1009,520,1012,516,1014,510,1016,506,1017,503,1018,501,1019,500,1023,496,1027,493,1028,492,1028,491,1029,490,1030,488,1031,487,1031,486,1031,483,1033,481,1035,479,1037,476,1038,475,1039,474,1040,469,1044,465,1045,464,1045,463,1046,450,1046,437,1047,421,1045,406,1044,403,1044,401,1044,394,1042,387,1042,386,1041,385,1041,384,1040,383,1039,381,1038,380,1037,379,1035,378,1032,376,1028,374,1027,374,1026,373,1016,364,1007,352,1006,351,1006,350,1005,349,1005,347,1005,346,1004,345,1e3,338,995,332,995,331,994,330,994,326,992,323,989,319,987,313,986,313,986,312,985,308,985,303,985,274,985,244,985,244,985,243,985,237,982,233,981,232,981,231,980,230,980,228,978,220,974,216,972,213,969,211,966,209,965,206,965,205,964,204,964,203,963,202,961,200,961,194,960,182,960,169,960,167,960,167,957,166,958,162,958,158,958,154,958,153,957,152,957,149,956,145,955,140,956,135,956,131,953,129,953,128,952,127,951,125,950,123,949,121,947,120,940,116,935,109,934,108,933,107,932,106,930,105,927,100,922,96,916,92,912,87,909,84,906,81,905,79,903,79,898,76,896,73,896,73,895,72,890,70,889,63,888,62,888,60,887,59,887,58,886,57,885,55,882,46,875,44,873,43,871,43,871,42,870,42,862,41,858,33,856,28,853,25,851,25,851,23,851,22,850,21,850,20,839,20,829,20,816,21,802,22,802,24,802,26,802,27,801,31,799,33,798,35,798,36,798,40,796,40,793,40,791,40,789,40,787,40,786,40,787,48,788,55,784,55,782,56,780,56,778,56,775,53,772,51,768,53,765,56,761,58,756,61,754,62,752,63,741,58,730,52,716,58,702,65,695,65,694,65,692,66,692,66,691,66,690,67,688,68,687,69,685,69,Q,684,70,682,71,Z]],label:"Sinuiju",shortLabel:"SJ",labelPosition:[58.8,60.5],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"sinuiju",type:"maps"}}})});