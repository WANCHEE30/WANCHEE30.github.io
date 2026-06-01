// 經銷客戶資料，依地區分類。資料取自 wanchee.com.tw 原站 company.htm~company05.htm。
// delivery=配送, store=門市, website=經銷商網站(有則 ◎ 並可連結)。
export const regions = [
  {
    "key": "north",
    "name": "北部",
    "subtitle": "台北 · 新北 · 基隆 · 桃園(部分)",
    "dealers": [
      {
        "name": "台揚",
        "address": "桃園縣龜山鄉東萬壽路311巷2號",
        "phone": "03-3291111",
        "delivery": true,
        "store": false,
        "website": "http://www.taijye.ebm.com.tw/"
      },
      {
        "name": "永利行",
        "address": "台北市大同區迪化街１段160號",
        "phone": "2557-5838",
        "delivery": true,
        "store": true,
        "website": ""
      },
      {
        "name": "永益",
        "address": "台北市大同區迪化街２段191巷8號",
        "phone": "2597-1314",
        "delivery": true,
        "store": true,
        "website": ""
      },
      {
        "name": "立華行",
        "address": "台北市松山區健康路54號1樓",
        "phone": "2768-2903",
        "delivery": true,
        "store": false,
        "website": ""
      },
      {
        "name": "艾佳中和店",
        "address": "新北市中和區宜安路118巷14號",
        "phone": "02-86608895",
        "delivery": false,
        "store": true,
        "website": "http://www.aigafood.com.tw/"
      },
      {
        "name": "亨奇",
        "address": "台北市北投區明德路271之1號",
        "phone": "2822-1431",
        "delivery": false,
        "store": true,
        "website": "http://shop1586.ecnow.tw/"
      },
      {
        "name": "佛祥",
        "address": "台北市中山區龍江路429巷8號",
        "phone": "2502-1626",
        "delivery": true,
        "store": false,
        "website": "http://www.fosiang.com.tw/"
      },
      {
        "name": "均統",
        "address": "台北市中山區龍江路377巷13號",
        "phone": "2505-6540",
        "delivery": true,
        "store": false,
        "website": ""
      },
      {
        "name": "快樂媽",
        "address": "新北市三重區永福街242號",
        "phone": "8531-1123",
        "delivery": true,
        "store": true,
        "website": "http://www.happy-mother.com.tw/about_us.asp"
      },
      {
        "name": "沐新",
        "address": "新北市板橋區信義路165之1號",
        "phone": "2962-7347",
        "delivery": true,
        "store": true,
        "website": ""
      },
      {
        "name": "佳祐",
        "address": "新北市中和區民享街90巷22號",
        "phone": "8228-2116",
        "delivery": true,
        "store": false,
        "website": ""
      },
      {
        "name": "佳記",
        "address": "新北市中和區連城路224之16號",
        "phone": "2246-1788",
        "delivery": true,
        "store": false,
        "website": "http://www.tarta.com.tw/cubeshop/front/bin/home.phtml"
      },
      {
        "name": "宜芳",
        "address": "台北市士林區社中街99號",
        "phone": "2812-3753",
        "delivery": false,
        "store": true,
        "website": "http://kk14479.bake.hi178.com/CenterPage_Hi178?y_SketchName=Sketch1-1_Hi178"
      },
      {
        "name": "明光",
        "address": "台北市萬華區內江街55巷3號",
        "phone": "2331-4873",
        "delivery": true,
        "store": false,
        "website": "http://mingkuang.cis.justgogo.com/CIS/Defaultv2.aspx"
      },
      {
        "name": "明瑄",
        "address": "台北市內湖區港墘路36號",
        "phone": "8751-9662",
        "delivery": false,
        "store": true,
        "website": "http://homecake.myweb.hinet.net/about.htm"
      },
      {
        "name": "松美",
        "address": "台北市信義區忠孝東路５段790巷62弄9號",
        "phone": "2727-2063",
        "delivery": false,
        "store": true,
        "website": "http://www.songmeei.url.tw/"
      },
      {
        "name": "品順",
        "address": "新北市汐止區汐萬路１段246號",
        "phone": "2649-7388",
        "delivery": true,
        "store": false,
        "website": ""
      },
      {
        "name": "泉通",
        "address": "台北市大同區迪化街１段147號",
        "phone": "2553-9498",
        "delivery": false,
        "store": true,
        "website": ""
      },
      {
        "name": "皇后烘焙",
        "address": "台北市士林區文林路732號",
        "phone": "2835-5511",
        "delivery": false,
        "store": true,
        "website": "http://www.queen-diy.com.tw/"
      },
      {
        "name": "茂元行",
        "address": "台北市中山區民族東路410巷22號(濱江市場)",
        "phone": "2505-5148",
        "delivery": true,
        "store": true,
        "website": ""
      },
      {
        "name": "峰厚",
        "address": "新北市樹林區俊英街219巷34之1號",
        "phone": "8688-5165",
        "delivery": true,
        "store": false,
        "website": ""
      },
      {
        "name": "振農",
        "address": "台北市大同區迪化街１段283號",
        "phone": "2553-6060",
        "delivery": false,
        "store": true,
        "website": ""
      },
      {
        "name": "海中行",
        "address": "台北市大同區民生西路336號",
        "phone": "2558-6697",
        "delivery": true,
        "store": true,
        "website": ""
      },
      {
        "name": "健祥行",
        "address": "台北市大同區環河北路２段213巷13號",
        "phone": "2535-2078",
        "delivery": true,
        "store": false,
        "website": ""
      },
      {
        "name": "國豐",
        "address": "新北市三重區重陽路１段20巷12號",
        "phone": "2983-1715",
        "delivery": true,
        "store": false,
        "website": ""
      },
      {
        "name": "得宏",
        "address": "台北市南港區研究院路１段96號",
        "phone": "2783-4843",
        "delivery": false,
        "store": true,
        "website": ""
      },
      {
        "name": "富盛",
        "address": "基隆市仁愛區曲水街18號",
        "phone": "2524-9255",
        "delivery": true,
        "store": true,
        "website": "http://www.fuhsien.com.tw/Index.asp?ID=17&ID2=1"
      },
      {
        "name": "惠通",
        "address": "台北市大同區迪化街１段175號",
        "phone": "2557-1863",
        "delivery": true,
        "store": true,
        "website": ""
      },
      {
        "name": "棋美",
        "address": "新北市板橋區大觀路３段193號",
        "phone": "2675-3524",
        "delivery": true,
        "store": true,
        "website": ""
      },
      {
        "name": "萊成",
        "address": "新北市汐止市中興路183巷25號",
        "phone": "2694-9292",
        "delivery": true,
        "store": false,
        "website": "http://lightsun.com.tw/tier/"
      },
      {
        "name": "源記",
        "address": "台北市信義區崇德街146巷4號",
        "phone": "2738-7721",
        "delivery": true,
        "store": false,
        "website": ""
      },
      {
        "name": "義興",
        "address": "台北市松山區富錦街574巷2號",
        "phone": "2760-8116",
        "delivery": true,
        "store": true,
        "website": ""
      },
      {
        "name": "聖寶",
        "address": "新北市板橋區觀光街5號",
        "phone": "2952-2332",
        "delivery": true,
        "store": true,
        "website": ""
      },
      {
        "name": "誠成",
        "address": "新北市板橋區復興街105號",
        "phone": "2272-5075",
        "delivery": true,
        "store": false,
        "website": ""
      },
      {
        "name": "達龍雜糧行",
        "address": "台北市中山區龍江路356巷44號",
        "phone": "2502-6178",
        "delivery": true,
        "store": true,
        "website": ""
      },
      {
        "name": "鼎大廚",
        "address": "新北市泰山區中港西路120巷53之1號",
        "phone": "8531-1123",
        "delivery": true,
        "store": false,
        "website": "http://dine-master.myweb.hinet.net/index.htm"
      },
      {
        "name": "彰益",
        "address": "新北市汐止區環河街186巷2弄4號",
        "phone": "2695-0313",
        "delivery": true,
        "store": false,
        "website": ""
      },
      {
        "name": "榮珍",
        "address": "台北市士林區德行東路322號",
        "phone": "8866-2665",
        "delivery": false,
        "store": true,
        "website": ""
      },
      {
        "name": "銘豐",
        "address": "台北市大同區民樂街195號",
        "phone": "2557-9106",
        "delivery": false,
        "store": true,
        "website": ""
      },
      {
        "name": "橙佳坊",
        "address": "台北市南港區玉成街211號1樓",
        "phone": "2786-5709",
        "delivery": false,
        "store": true,
        "website": "http://www.joybaking.com.tw/"
      },
      {
        "name": "點點雜糧",
        "address": "新北市三重區雙園街57巷5號",
        "phone": "",
        "delivery": true,
        "store": false,
        "website": ""
      },
      {
        "name": "豐合",
        "address": "台北市大同區涼州街66號3樓",
        "phone": "2557-1702",
        "delivery": true,
        "store": false,
        "website": ""
      },
      {
        "name": "馥品屋",
        "address": "新北市樹林區大安路173號",
        "phone": "2686-2258",
        "delivery": true,
        "store": true,
        "website": "http://www.fpw.com.tw/home.htm"
      },
      {
        "name": "鐵三角",
        "address": "新北市泰山區中港南路169之9號",
        "phone": "2296-2275",
        "delivery": true,
        "store": false,
        "website": ""
      }
    ]
  },
  {
    "key": "hsinchu",
    "name": "新竹桃園",
    "subtitle": "桃園 · 新竹",
    "dealers": [
      {
        "name": "乙馨",
        "address": "桃園縣平鎮市快速路2段616巷6號",
        "phone": "03-450-1818",
        "delivery": true,
        "store": false,
        "website": ""
      },
      {
        "name": "大榮行",
        "address": "桃園縣桃園市和平路87號",
        "phone": "03-337-6389",
        "delivery": true,
        "store": true,
        "website": ""
      },
      {
        "name": "台益",
        "address": "桃園縣平鎮市新富街8號",
        "phone": "034-598-521",
        "delivery": true,
        "store": false,
        "website": ""
      },
      {
        "name": "台揚",
        "address": "桃園縣龜山鄉東萬壽路311巷2號",
        "phone": "03-3291111",
        "delivery": false,
        "store": true,
        "website": "http://www.taijye.ebm.com.tw/"
      },
      {
        "name": "全國食材",
        "address": "桃園市大有街85號1樓",
        "phone": "03-333-9985",
        "delivery": false,
        "store": true,
        "website": "http://www.givefood.com.tw/"
      },
      {
        "name": "艾佳中歷店",
        "address": "桃園縣中壢市環中東路2段762號",
        "phone": "03-468-4558",
        "delivery": false,
        "store": true,
        "website": "http://www.aigafood.com.tw/"
      },
      {
        "name": "艾佳竹北店",
        "address": "新竹縣竹北市成功八路286號",
        "phone": "03-5505369",
        "delivery": false,
        "store": true,
        "website": "http://www.aigafood.com.tw/"
      },
      {
        "name": "艾佳桃園店",
        "address": "桃園市永安路281號",
        "phone": "03-332-0178",
        "delivery": false,
        "store": true,
        "website": "http://www.aigafood.com.tw/"
      },
      {
        "name": "典佑",
        "address": "新竹市公園路216巷12號之7",
        "phone": "03-561-5965",
        "delivery": true,
        "store": true,
        "website": ""
      },
      {
        "name": "尚津",
        "address": "桃園縣八德市介壽路２段361巷151號",
        "phone": "03-366-1692",
        "delivery": true,
        "store": false,
        "website": ""
      },
      {
        "name": "苗林",
        "address": "苗栗縣苗栗市復興路488之1號",
        "phone": "037-321-131",
        "delivery": true,
        "store": false,
        "website": "http://simzing.myweb.hinet.net/VIOLET.htm"
      },
      {
        "name": "富翔",
        "address": "新竹市海埔路179號",
        "phone": "03-5398878",
        "delivery": true,
        "store": false,
        "website": ""
      },
      {
        "name": "景榮行",
        "address": "桃園縣桃園市福壽街61號",
        "phone": "03-3382638",
        "delivery": true,
        "store": false,
        "website": ""
      },
      {
        "name": "葉記",
        "address": "新竹市鐵道路２段231號",
        "phone": "035-312055",
        "delivery": true,
        "store": false,
        "website": ""
      },
      {
        "name": "福記",
        "address": "新竹縣竹北市中華路692號",
        "phone": "035-552-510",
        "delivery": true,
        "store": true,
        "website": ""
      },
      {
        "name": "橋農",
        "address": "苗栗縣頭份鎮中華路641號 上樓",
        "phone": "037-660-837",
        "delivery": true,
        "store": true,
        "website": ""
      },
      {
        "name": "總和",
        "address": "桃園縣八德市富榮街36巷2號",
        "phone": "03-218-1336",
        "delivery": false,
        "store": false,
        "website": ""
      }
    ]
  },
  {
    "key": "central",
    "name": "中部",
    "subtitle": "苗栗 · 台中 · 彰化 · 南投 · 雲林",
    "dealers": [
      {
        "name": "一海香",
        "address": "台中市西屯區河南路１段92號",
        "phone": "04-23166611",
        "delivery": true,
        "store": true,
        "website": "http://www.yihasi.com.tw/"
      },
      {
        "name": "大春風",
        "address": "台中市南屯區鎮平里新民巷1之8號",
        "phone": "04-24702998",
        "delivery": true,
        "store": false,
        "website": ""
      },
      {
        "name": "台中玉記",
        "address": "台中市向上北路170號",
        "phone": "04-23017576",
        "delivery": true,
        "store": true,
        "website": ""
      },
      {
        "name": "永明",
        "address": "彰化縣和美鎮彰草路２段120之8號",
        "phone": "047-619348",
        "delivery": true,
        "store": false,
        "website": ""
      },
      {
        "name": "永誠彰化店",
        "address": "彰化市三福街195號",
        "phone": "04-7243927",
        "delivery": false,
        "store": true,
        "website": ""
      },
      {
        "name": "永誠彰新店",
        "address": "彰化縣和美鎮彰新路2段202號",
        "phone": "04-7332388",
        "delivery": true,
        "store": true,
        "website": ""
      },
      {
        "name": "永誠精誠店",
        "address": "台中市西區精誠路317號",
        "phone": "04-24727578",
        "delivery": true,
        "store": true,
        "website": "http://www.ycbake.com.tw/"
      },
      {
        "name": "永誠精誠店",
        "address": "台中市西區民生路147號",
        "phone": "04-22249876",
        "delivery": false,
        "store": true,
        "website": ""
      },
      {
        "name": "辰豐",
        "address": "台中市西屯區中清路151之25號",
        "phone": "04-24259869",
        "delivery": true,
        "store": true,
        "website": "http://www.chengfong2005.com.tw/index1.htm"
      },
      {
        "name": "協成",
        "address": "彰化縣和美鎮彰新路３段636巷46弄81號",
        "phone": "047-351767",
        "delivery": true,
        "store": false,
        "website": ""
      },
      {
        "name": "昌勝",
        "address": "台中市益華街6號",
        "phone": "04-2233-6831",
        "delivery": true,
        "store": false,
        "website": "http://www.csfood.com.tw/"
      },
      {
        "name": "昌勝-門市",
        "address": "台中市北區雙十路２段79號",
        "phone": "04-22343000",
        "delivery": false,
        "store": true,
        "website": ""
      },
      {
        "name": "金永誠行",
        "address": "彰化縣員林鎮員水路２段423號",
        "phone": "048-322811",
        "delivery": true,
        "store": true,
        "website": ""
      },
      {
        "name": "昱廣",
        "address": "台中市南屯區大墩一街71號",
        "phone": "04-24750830",
        "delivery": true,
        "store": true,
        "website": ""
      },
      {
        "name": "徐商行",
        "address": "彰化縣埔心鄉中正路１段23號",
        "phone": "048-295046",
        "delivery": true,
        "store": true,
        "website": ""
      },
      {
        "name": "泰豐",
        "address": "台中市東區東英九街149號",
        "phone": "04-22134996",
        "delivery": true,
        "store": true,
        "website": ""
      },
      {
        "name": "益豐",
        "address": "台中市大雅區神林南路53號",
        "phone": "04-25673122",
        "delivery": true,
        "store": true,
        "website": ""
      },
      {
        "name": "新聯美",
        "address": "台中市東區東英十三街40之1號",
        "phone": "04-22117250",
        "delivery": true,
        "store": false,
        "website": ""
      },
      {
        "name": "裕軒台中店",
        "address": "台中市北屯區昌平路二段20號之2",
        "phone": "04-24211905",
        "delivery": false,
        "store": true,
        "website": "http://www.yuhsuan.com/"
      },
      {
        "name": "漢泰",
        "address": "台中市豐原區直興街76號",
        "phone": "04-25228618",
        "delivery": true,
        "store": false,
        "website": ""
      },
      {
        "name": "總信",
        "address": "台中市南區復興路３段109之4號",
        "phone": "04-22202917",
        "delivery": true,
        "store": true,
        "website": "http://www.tzong-hsin.com.tw/"
      },
      {
        "name": "豐榮",
        "address": "台中市豐原區三豐路317號",
        "phone": "04-25227535",
        "delivery": true,
        "store": true,
        "website": ""
      }
    ]
  },
  {
    "key": "south",
    "name": "南部",
    "subtitle": "嘉義 · 台南 · 高雄 · 屏東",
    "dealers": [
      {
        "name": "七海",
        "address": "台南市民權路１段173號",
        "phone": "06-2215267",
        "delivery": true,
        "store": true,
        "website": ""
      },
      {
        "name": "天一",
        "address": "雲林縣斗六市仁義路6號",
        "phone": "05-5328000",
        "delivery": true,
        "store": true,
        "website": ""
      },
      {
        "name": "太麒",
        "address": "雲林縣虎尾鎮埒內里埒內267之3號",
        "phone": "05-6223377",
        "delivery": true,
        "store": false,
        "website": ""
      },
      {
        "name": "世昌",
        "address": "高雄市前鎮區擴建路1之35號",
        "phone": "07-8111587",
        "delivery": true,
        "store": false,
        "website": ""
      },
      {
        "name": "世峰",
        "address": "台南市大興街325巷56號",
        "phone": "06-2502017",
        "delivery": true,
        "store": false,
        "website": ""
      },
      {
        "name": "台南玉記",
        "address": "台南市民權路３段38號",
        "phone": "06-2223927",
        "delivery": true,
        "store": false,
        "website": ""
      },
      {
        "name": "永昌",
        "address": "台南市東區長榮路１段115號",
        "phone": "06-2377115",
        "delivery": true,
        "store": true,
        "website": "http://www.wretch.cc/blog/yongchang123"
      },
      {
        "name": "玉忠記",
        "address": "高雄市六合一路147號",
        "phone": "07-2360333-6",
        "delivery": true,
        "store": true,
        "website": ""
      },
      {
        "name": "旺來昌",
        "address": "高雄市公正路181號",
        "phone": "07-7135345",
        "delivery": false,
        "store": true,
        "website": "http://www.wlcnet.com.tw/"
      },
      {
        "name": "旺來鄉",
        "address": "台南市仁德區中山路797號",
        "phone": "06-2498701",
        "delivery": false,
        "store": true,
        "website": "http://www.wl.com.tw/"
      },
      {
        "name": "旺來興",
        "address": "高雄市鳥松區本館路151號",
        "phone": "07-3702223",
        "delivery": true,
        "store": true,
        "website": "http://www.wlscook.com.tw/index.php"
      },
      {
        "name": "林商號",
        "address": "雲林縣斗六市嘉東南路28之1號",
        "phone": "05-5323280",
        "delivery": true,
        "store": false,
        "website": ""
      },
      {
        "name": "恆寬",
        "address": "高雄市苓雅區至誠路20號",
        "phone": "07-7475201",
        "delivery": true,
        "store": false,
        "website": ""
      },
      {
        "name": "盛泰",
        "address": "高雄市三鳳中街60號",
        "phone": "07-2871607",
        "delivery": true,
        "store": true,
        "website": ""
      },
      {
        "name": "順記",
        "address": "屏東縣屏東市柳州街10之1號",
        "phone": "08-7323955",
        "delivery": true,
        "store": true,
        "website": ""
      },
      {
        "name": "新瑞益",
        "address": "嘉義市仁愛路142號",
        "phone": "05-2865550",
        "delivery": true,
        "store": true,
        "website": "http://www.uni-rui.com/"
      },
      {
        "name": "新鈺成",
        "address": "高雄市前鎮區千富街241巷7號",
        "phone": "07-8114029",
        "delivery": true,
        "store": false,
        "website": "http://www.syc-ych.com.tw/"
      },
      {
        "name": "裕軒-屏東店",
        "address": "屏東市廣東路398號",
        "phone": "08-7374759",
        "delivery": true,
        "store": true,
        "website": "http://www.yuhsuan.com/"
      },
      {
        "name": "裕軒-潮州店",
        "address": "屏東縣潮州鎮太平路473號",
        "phone": "08-7887835",
        "delivery": true,
        "store": true,
        "website": "http://www.yuhsuan.com/"
      },
      {
        "name": "福美珍",
        "address": "嘉義市西榮街135號",
        "phone": "05-2224824",
        "delivery": true,
        "store": true,
        "website": ""
      },
      {
        "name": "銘泉",
        "address": "台南市開安四街24號上樓(河順工業區)",
        "phone": "06-3560969",
        "delivery": true,
        "store": false,
        "website": "http://mealchain.kong.tw/"
      },
      {
        "name": "銘泉-門市",
        "address": "台南市和緯路二段223號",
        "phone": "06-2518007",
        "delivery": false,
        "store": true,
        "website": ""
      },
      {
        "name": "應鎮商行",
        "address": "嘉義市西區世賢路２段287號",
        "phone": "05-2359006",
        "delivery": true,
        "store": true,
        "website": ""
      }
    ]
  },
  {
    "key": "east",
    "name": "東部",
    "subtitle": "宜蘭 · 花蓮 · 台東",
    "dealers": [
      {
        "name": "大麥",
        "address": "花蓮縣吉安鄉自強路369號",
        "phone": "038-578866",
        "delivery": true,
        "store": false,
        "website": ""
      },
      {
        "name": "合興",
        "address": "宜蘭縣五結鄉五結路３段748號",
        "phone": "039-560303",
        "delivery": true,
        "store": true,
        "website": ""
      },
      {
        "name": "益暄行",
        "address": "花蓮縣花蓮市中順街62號",
        "phone": "038-328268",
        "delivery": true,
        "store": true,
        "website": ""
      },
      {
        "name": "華茂",
        "address": "花蓮縣吉安鄉中原路１段133號",
        "phone": "038-539538",
        "delivery": true,
        "store": true,
        "website": ""
      },
      {
        "name": "裕順",
        "address": "宜蘭縣五結鄉五結路３段438號",
        "phone": "039-605500",
        "delivery": true,
        "store": false,
        "website": ""
      },
      {
        "name": "嘉禾",
        "address": "宜蘭縣羅東鎮中華路37之9號",
        "phone": "03-957-1903",
        "delivery": true,
        "store": true,
        "website": ""
      }
    ]
  }
];

export const totalDealers = regions.reduce((a, r) => a + r.dealers.length, 0);
