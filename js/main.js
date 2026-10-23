// ===================== DISHES =====================
const DISHES = [
  {id:1,name:"Овсянка с ягодами",meal:"завтрак",kcal:320,p:12,f:8,c:52,time:10,cost:1,tags:["овсянка","быстро","сладкое"],diet:["vegetarian","lactose_free"],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Овсяные хлопья",g:60,d:"бакалея",pack:500},{n:"Ягоды",g:80,d:"овощи",pack:200},{n:"Мёд",g:15,d:"бакалея",pack:250}],emoji:"🥣"},
  {id:2,name:"Сырники со сметаной",meal:"завтрак",kcal:380,p:18,f:16,c:40,time:25,cost:2,tags:["творог","жареное"],diet:["vegetarian"],allergens:["лактоза","яйца"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Творог",g:180,d:"молочное",pack:180},{n:"Яйцо",g:50,d:"молочное",pack:10},{n:"Мука",g:30,d:"бакалея",pack:1000},{n:"Сметана",g:30,d:"молочное",pack:300}],emoji:"🧀"},
  {id:3,name:"Омлет с овощами",meal:"завтрак",kcal:290,p:20,f:20,c:8,time:15,cost:1,tags:["яйца","быстро","овощи"],diet:["vegetarian","gluten_free"],allergens:["яйца"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Яйца",g:120,d:"молочное",pack:10},{n:"Помидор",g:80,d:"овощи",pack:1},{n:"Шпинат",g:40,d:"овощи",pack:100},{n:"Масло растительное",g:10,d:"бакалея",pack:1000}],emoji:"🍳"},
  {id:4,name:"Творог с бананом",meal:"завтрак",kcal:280,p:22,f:6,c:35,time:5,cost:1,tags:["творог","быстро","сладкое"],diet:["vegetarian","gluten_free"],allergens:["лактоза"],dislikes:[],kitchen:[],ingredients:[{n:"Творог 5%",g:150,d:"молочное",pack:180},{n:"Банан",g:100,d:"овощи",pack:1}],emoji:"🍌"},
  {id:5,name:"Гречневая каша с молоком",meal:"завтрак",kcal:340,p:12,f:8,c:55,time:20,cost:1,tags:["гречка","каша"],diet:["vegetarian"],allergens:["лактоза"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Гречка",g:70,d:"бакалея",pack:900},{n:"Молоко",g:150,d:"молочное",pack:1000}],emoji:"🌾"},
  {id:6,name:"Яичница с авокадо",meal:"завтрак",kcal:350,p:16,f:28,c:10,time:12,cost:2,tags:["яйца","авокадо","быстро"],diet:["vegetarian","gluten_free"],allergens:["яйца"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Яйца",g:100,d:"молочное",pack:10},{n:"Авокадо",g:80,d:"овощи",pack:1},{n:"Хлеб цельнозерновой",g:30,d:"бакалея",pack:1}],emoji:"🥑"},
  {id:7,name:"Блины с творогом",meal:"завтрак",kcal:420,p:16,f:14,c:58,time:30,cost:2,tags:["блины","творог"],diet:["vegetarian"],allergens:["лактоза","яйца","глютен"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Мука",g:80,d:"бакалея",pack:1000},{n:"Молоко",g:100,d:"молочное",pack:1000},{n:"Яйцо",g:50,d:"молочное",pack:10},{n:"Творог",g:80,d:"молочное",pack:180}],emoji:"🥞"},
  {id:8,name:"Смузи-боул",meal:"завтрак",kcal:310,p:10,f:9,c:48,time:10,cost:2,tags:["смузи","быстро","сладкое","фрукты"],diet:["vegan","lactose_free","gluten_free"],allergens:["орехи"],dislikes:[],kitchen:["блендер"],ingredients:[{n:"Банан",g:100,d:"овощи",pack:1},{n:"Ягоды",g:100,d:"овощи",pack:200},{n:"Овсянка",g:30,d:"бакалея",pack:500},{n:"Миндаль",g:15,d:"бакалея",pack:100}],emoji:"🥤"},
  {id:9,name:"Тост с лососем",meal:"завтрак",kcal:360,p:24,f:16,c:28,time:10,cost:3,tags:["рыба","лосось","быстро"],diet:["lactose_free"],allergens:["рыба","глютен"],dislikes:[],kitchen:[],ingredients:[{n:"Хлеб",g:60,d:"бакалея",pack:1},{n:"Лосось слабосолёный",g:60,d:"мясо",pack:100},{n:"Огурец",g:40,d:"овощи",pack:1}],emoji:"🐟"},
  {id:10,name:"Каша пшённая с тыквой",meal:"завтрак",kcal:300,p:8,f:6,c:54,time:25,cost:1,tags:["каша","тыква","вегетарианское"],diet:["vegan","lactose_free","gluten_free"],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Пшено",g:60,d:"бакалея",pack:900},{n:"Тыква",g:100,d:"овощи",pack:500}],emoji:"🎃"},
  {id:11,name:"Йогурт с гранолой",meal:"завтрак",kcal:330,p:14,f:10,c:45,time:5,cost:2,tags:["йогурт","быстро","сладкое"],diet:["vegetarian"],allergens:["лактоза","глютен"],dislikes:[],kitchen:[],ingredients:[{n:"Йогурт натуральный",g:150,d:"молочное",pack:150},{n:"Гранола",g:40,d:"бакалея",pack:300},{n:"Ягоды",g:50,d:"овощи",pack:200}],emoji:"🥛"},
  {id:12,name:"Яйца пашот с тостами",meal:"завтрак",kcal:340,p:18,f:18,c:26,time:15,cost:2,tags:["яйца","быстро"],diet:["vegetarian"],allergens:["яйца","глютен"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Яйца",g:100,d:"молочное",pack:10},{n:"Хлеб",g:50,d:"бакалея",pack:1},{n:"Шпинат",g:30,d:"овощи",pack:100}],emoji:"🍳"},
  {id:13,name:"Куриная грудка с гречкой",meal:"обед",kcal:450,p:42,f:10,c:45,time:35,cost:2,tags:["курица","гречка","мясо"],diet:["gluten_free","lactose_free"],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Куриная грудка",g:150,d:"мясо",pack:500},{n:"Гречка",g:70,d:"бакалея",pack:900},{n:"Огурец",g:80,d:"овощи",pack:1}],emoji:"🍗"},
  {id:14,name:"Борщ с говядиной",meal:"обед",kcal:380,p:22,f:14,c:35,time:60,cost:2,tags:["суп","говядина","борщ"],diet:[],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Говядина",g:100,d:"мясо",pack:500},{n:"Свёкла",g:80,d:"овощи",pack:1},{n:"Капуста",g:80,d:"овощи",pack:1},{n:"Картофель",g:80,d:"овощи",pack:1},{n:"Сметана",g:20,d:"молочное",pack:300},{n:"Лук",g:30,d:"овощи",pack:1},{n:"Морковь",g:40,d:"овощи",pack:1},{n:"Томатная паста",g:15,d:"бакалея",pack:70}],emoji:"🍲"},
  {id:15,name:"Лосось на пару с рисом",meal:"обед",kcal:480,p:35,f:18,c:40,time:30,cost:3,tags:["рыба","лосось","рис"],diet:["gluten_free","lactose_free"],allergens:["рыба"],dislikes:[],kitchen:["плита","пароварка"],ingredients:[{n:"Лосось",g:150,d:"мясо",pack:300},{n:"Рис",g:70,d:"бакалея",pack:900},{n:"Брокколи",g:100,d:"овощи",pack:400}],emoji:"🐟"},
  {id:16,name:"Индейка с овощами",meal:"обед",kcal:390,p:38,f:12,c:25,time:40,cost:2,tags:["индейка","овощи","мясо"],diet:["gluten_free","lactose_free"],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Индейка",g:150,d:"мясо",pack:500},{n:"Кабачок",g:100,d:"овощи",pack:1},{n:"Перец",g:80,d:"овощи",pack:1},{n:"Морковь",g:50,d:"овощи",pack:1}],emoji:"🦃"},
  {id:17,name:"Чечевичный суп",meal:"обед",kcal:320,p:18,f:8,c:45,time:40,cost:1,tags:["суп","чечевица","бобовые","вегетарианское"],diet:["vegan","lactose_free","gluten_free"],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Чечевица",g:80,d:"бакалея",pack:500},{n:"Морковь",g:60,d:"овощи",pack:1},{n:"Лук",g:40,d:"овощи",pack:1},{n:"Томат",g:50,d:"овощи",pack:1}],emoji:"🥣"},
  {id:18,name:"Говядина с картофелем",meal:"обед",kcal:520,p:36,f:22,c:42,time:55,cost:2,tags:["говядина","картофель","мясо"],diet:["gluten_free","lactose_free"],allergens:[],dislikes:["красное мясо"],kitchen:["плита"],ingredients:[{n:"Говядина",g:150,d:"мясо",pack:500},{n:"Картофель",g:200,d:"овощи",pack:1},{n:"Лук",g:40,d:"овощи",pack:1}],emoji:"🥩"},
  {id:19,name:"Куриный суп с лапшой",meal:"обед",kcal:340,p:24,f:10,c:35,time:45,cost:1,tags:["суп","курица","лапша"],diet:[],allergens:["глютен"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Курица",g:120,d:"мясо",pack:500},{n:"Лапша",g:50,d:"бакалея",pack:400},{n:"Морковь",g:40,d:"овощи",pack:1},{n:"Лук",g:30,d:"овощи",pack:1}],emoji:"🍜"},
  {id:20,name:"Треска с киноа",meal:"обед",kcal:410,p:36,f:10,c:38,time:30,cost:3,tags:["рыба","киноа"],diet:["gluten_free","lactose_free"],allergens:["рыба"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Треска",g:150,d:"мясо",pack:400},{n:"Киноа",g:60,d:"бакалея",pack:400},{n:"Спаржа",g:80,d:"овощи",pack:250}],emoji:"🐟"},
  {id:21,name:"Фасолевый салат с тунцом",meal:"обед",kcal:380,p:32,f:12,c:30,time:15,cost:2,tags:["рыба","бобовые","салат","быстро"],diet:["lactose_free","gluten_free"],allergens:["рыба"],dislikes:[],kitchen:[],ingredients:[{n:"Тунец консерв.",g:100,d:"мясо",pack:150},{n:"Фасоль",g:100,d:"бакалея",pack:400},{n:"Огурец",g:60,d:"овощи",pack:1},{n:"Помидор",g:60,d:"овощи",pack:1}],emoji:"🥗"},
  {id:22,name:"Плов с курицей",meal:"обед",kcal:510,p:28,f:18,c:58,time:50,cost:2,tags:["курица","рис","плов"],diet:["gluten_free","lactose_free"],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Курица",g:120,d:"мясо",pack:500},{n:"Рис",g:80,d:"бакалея",pack:900},{n:"Морковь",g:60,d:"овощи",pack:1},{n:"Лук",g:40,d:"овощи",pack:1}],emoji:"🍚"},
  {id:23,name:"Овощное рагу с тофу",meal:"обед",kcal:300,p:18,f:12,c:28,time:35,cost:2,tags:["тофу","овощи","вегетарианское"],diet:["vegan","lactose_free","gluten_free"],allergens:["соя"],dislikes:["тофу","баклажаны"],kitchen:["плита"],ingredients:[{n:"Тофу",g:120,d:"бакалея",pack:300},{n:"Кабачок",g:100,d:"овощи",pack:1},{n:"Баклажан",g:80,d:"овощи",pack:1},{n:"Перец",g:60,d:"овощи",pack:1}],emoji:"🥬"},
  {id:24,name:"Котлеты куриные с пюре",meal:"обед",kcal:480,p:32,f:20,c:40,time:40,cost:2,tags:["курица","котлеты","картофель"],diet:[],allergens:["яйца","глютен"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Фарш куриный",g:150,d:"мясо",pack:500},{n:"Картофель",g:180,d:"овощи",pack:1},{n:"Яйцо",g:25,d:"молочное",pack:10},{n:"Хлеб",g:20,d:"бакалея",pack:1}],emoji:"🍖"},
  {id:25,name:"Щи из свежей капусты",meal:"обед",kcal:280,p:16,f:10,c:28,time:50,cost:1,tags:["суп","капуста","говядина"],diet:["gluten_free"],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Говядина",g:80,d:"мясо",pack:500},{n:"Капуста",g:120,d:"овощи",pack:1},{n:"Картофель",g:80,d:"овощи",pack:1},{n:"Морковь",g:40,d:"овощи",pack:1},{n:"Лук",g:30,d:"овощи",pack:1}],emoji:"🍲"},
  {id:26,name:"Паста с креветками",meal:"обед",kcal:460,p:28,f:14,c:55,time:25,cost:3,tags:["паста","креветки","морепродукты"],diet:[],allergens:["глютен","морепродукты"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Паста",g:80,d:"бакалея",pack:450},{n:"Креветки",g:100,d:"мясо",pack:300},{n:"Чеснок",g:10,d:"овощи",pack:1},{n:"Помидор",g:60,d:"овощи",pack:1}],emoji:"🍝"},
  {id:27,name:"Голубцы с мясом",meal:"обед",kcal:420,p:26,f:16,c:38,time:60,cost:2,tags:["говядина","капуста","голубцы"],diet:["gluten_free"],allergens:[],dislikes:["красное мясо"],kitchen:["плита"],ingredients:[{n:"Фарш говяжий",g:120,d:"мясо",pack:500},{n:"Капуста",g:150,d:"овощи",pack:1},{n:"Рис",g:40,d:"бакалея",pack:900},{n:"Томатная паста",g:30,d:"бакалея",pack:70},{n:"Лук",g:30,d:"овощи",pack:1}],emoji:"🥬"},
  {id:28,name:"Салат Цезарь с курицей",meal:"обед",kcal:400,p:30,f:22,c:18,time:20,cost:2,tags:["курица","салат","быстро"],diet:[],allergens:["лактоза","яйца","глютен"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Куриная грудка",g:120,d:"мясо",pack:500},{n:"Салат романо",g:80,d:"овощи",pack:1},{n:"Пармезан",g:20,d:"молочное",pack:100},{n:"Сухарики",g:30,d:"бакалея",pack:100}],emoji:"🥗"},
  {id:29,name:"Запечённая курица с брокколи",meal:"ужин",kcal:380,p:40,f:14,c:12,time:40,cost:2,tags:["курица","овощи","запечённое"],diet:["gluten_free","lactose_free"],allergens:[],dislikes:[],kitchen:["духовка"],ingredients:[{n:"Куриная грудка",g:160,d:"мясо",pack:500},{n:"Брокколи",g:150,d:"овощи",pack:400},{n:"Масло оливковое",g:10,d:"бакалея",pack:500}],emoji:"🍗"},
  {id:30,name:"Творожная запеканка",meal:"ужин",kcal:320,p:24,f:10,c:30,time:45,cost:1,tags:["творог","запеканка"],diet:["vegetarian"],allergens:["лактоза","яйца"],dislikes:[],kitchen:["духовка"],ingredients:[{n:"Творог",g:200,d:"молочное",pack:180},{n:"Яйцо",g:50,d:"молочное",pack:10},{n:"Манка",g:20,d:"бакалея",pack:500}],emoji:"🧀"},
  {id:31,name:"Рыба в фольге с овощами",meal:"ужин",kcal:350,p:32,f:14,c:18,time:35,cost:2,tags:["рыба","овощи","запечённое"],diet:["gluten_free","lactose_free"],allergens:["рыба"],dislikes:[],kitchen:["духовка"],ingredients:[{n:"Треска",g:150,d:"мясо",pack:400},{n:"Кабачок",g:100,d:"овощи",pack:1},{n:"Помидор",g:80,d:"овощи",pack:1},{n:"Лимон",g:20,d:"овощи",pack:1}],emoji:"🐟"},
  {id:32,name:"Индейка с салатом",meal:"ужин",kcal:340,p:36,f:12,c:10,time:30,cost:2,tags:["индейка","салат","лёгкое"],diet:["gluten_free","lactose_free"],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Индейка",g:150,d:"мясо",pack:500},{n:"Салат",g:80,d:"овощи",pack:1},{n:"Огурец",g:60,d:"овощи",pack:1},{n:"Помидор",g:60,d:"овощи",pack:1}],emoji:"🦃"},
  {id:33,name:"Омлет с сыром и зеленью",meal:"ужин",kcal:310,p:22,f:22,c:4,time:15,cost:1,tags:["яйца","сыр","быстро"],diet:["vegetarian","gluten_free"],allergens:["яйца","лактоза"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Яйца",g:120,d:"молочное",pack:10},{n:"Сыр",g:40,d:"молочное",pack:200},{n:"Зелень",g:20,d:"овощи",pack:1}],emoji:"🍳"},
  {id:34,name:"Гречка с грибами",meal:"ужин",kcal:360,p:12,f:10,c:55,time:30,cost:1,tags:["гречка","грибы","вегетарианское"],diet:["vegan","lactose_free","gluten_free"],allergens:[],dislikes:["грибы"],kitchen:["плита"],ingredients:[{n:"Гречка",g:80,d:"бакалея",pack:900},{n:"Грибы",g:120,d:"овощи",pack:300},{n:"Лук",g:40,d:"овощи",pack:1}],emoji:"🍄"},
  {id:35,name:"Креветки с овощами",meal:"ужин",kcal:300,p:28,f:10,c:15,time:20,cost:3,tags:["креветки","овощи","быстро"],diet:["gluten_free","lactose_free"],allergens:["морепродукты"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Креветки",g:150,d:"мясо",pack:300},{n:"Цукини",g:100,d:"овощи",pack:1},{n:"Чеснок",g:10,d:"овощи",pack:1}],emoji:"🦐"},
  {id:36,name:"Куриные тефтели с кабачками",meal:"ужин",kcal:370,p:32,f:16,c:18,time:35,cost:2,tags:["курица","тефтели","овощи"],diet:["gluten_free"],allergens:["яйца"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Фарш куриный",g:140,d:"мясо",pack:500},{n:"Кабачок",g:150,d:"овощи",pack:1},{n:"Яйцо",g:25,d:"молочное",pack:10}],emoji:"🍖"},
  {id:37,name:"Тофу-стейк с салатом",meal:"ужин",kcal:280,p:20,f:16,c:12,time:25,cost:2,tags:["тофу","салат","вегетарианское"],diet:["vegan","lactose_free","gluten_free"],allergens:["соя"],dislikes:["тофу"],kitchen:["плита"],ingredients:[{n:"Тофу",g:150,d:"бакалея",pack:300},{n:"Салат",g:80,d:"овощи",pack:1},{n:"Авокадо",g:50,d:"овощи",pack:1}],emoji:"🥬"},
  {id:38,name:"Запечённый лосось",meal:"ужин",kcal:420,p:34,f:26,c:4,time:30,cost:3,tags:["рыба","лосось","запечённое"],diet:["gluten_free","lactose_free"],allergens:["рыба"],dislikes:[],kitchen:["духовка"],ingredients:[{n:"Лосось",g:160,d:"мясо",pack:300},{n:"Лимон",g:20,d:"овощи",pack:1},{n:"Укроп",g:10,d:"овощи",pack:1}],emoji:"🐟"},
  {id:39,name:"Овощной суп-пюре",meal:"ужин",kcal:220,p:6,f:8,c:30,time:30,cost:1,tags:["суп","овощи","лёгкое","вегетарианское"],diet:["vegan","lactose_free","gluten_free"],allergens:[],dislikes:[],kitchen:["плита","блендер"],ingredients:[{n:"Тыква",g:150,d:"овощи",pack:500},{n:"Морковь",g:60,d:"овощи",pack:1},{n:"Картофель",g:80,d:"овощи",pack:1}],emoji:"🥣"},
  {id:40,name:"Говядина тушёная с овощами",meal:"ужин",kcal:400,p:34,f:18,c:20,time:55,cost:2,tags:["говядина","овощи","тушёное"],diet:["gluten_free","lactose_free"],allergens:[],dislikes:["красное мясо"],kitchen:["плита"],ingredients:[{n:"Говядина",g:140,d:"мясо",pack:500},{n:"Морковь",g:60,d:"овощи",pack:1},{n:"Лук",g:40,d:"овощи",pack:1},{n:"Перец",g:60,d:"овощи",pack:1}],emoji:"🥩"},
  {id:41,name:"Яйца всмятку с овощами",meal:"ужин",kcal:260,p:16,f:16,c:10,time:12,cost:1,tags:["яйца","быстро","лёгкое"],diet:["vegetarian","gluten_free"],allergens:["яйца"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Яйца",g:100,d:"молочное",pack:10},{n:"Огурец",g:80,d:"овощи",pack:1},{n:"Помидор",g:80,d:"овощи",pack:1}],emoji:"🥚"},
  {id:42,name:"Курица терияки с рисом",meal:"ужин",kcal:440,p:32,f:12,c:48,time:30,cost:2,tags:["курица","рис","азиатское"],diet:["lactose_free"],allergens:["соя","глютен"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Куриная грудка",g:140,d:"мясо",pack:500},{n:"Рис",g:70,d:"бакалея",pack:900},{n:"Соевый соус",g:15,d:"бакалея",pack:250}],emoji:"🍗"},
  {id:43,name:"Яблоко с миндалём",meal:"перекус",kcal:180,p:4,f:10,c:20,time:2,cost:1,tags:["фрукты","орехи","быстро"],diet:["vegan","lactose_free","gluten_free"],allergens:["орехи"],dislikes:[],kitchen:[],ingredients:[{n:"Яблоко",g:150,d:"овощи",pack:1},{n:"Миндаль",g:20,d:"бакалея",pack:100}],emoji:"🍎"},
  {id:44,name:"Протеиновый батончик",meal:"перекус",kcal:200,p:20,f:8,c:18,time:1,cost:2,tags:["протеин","быстро"],diet:["vegetarian"],allergens:["лактоза","глютен"],dislikes:[],kitchen:[],ingredients:[{n:"Протеиновый батончик",g:50,d:"бакалея",pack:1}],emoji:"🍫"},
  {id:45,name:"Кефир с отрубями",meal:"перекус",kcal:120,p:8,f:2,c:16,time:2,cost:1,tags:["кефир","быстро"],diet:["vegetarian"],allergens:["лактоза"],dislikes:[],kitchen:[],ingredients:[{n:"Кефир",g:200,d:"молочное",pack:900},{n:"Отруби",g:15,d:"бакалея",pack:200}],emoji:"🥛"},
  {id:46,name:"Творог 5% с зеленью",meal:"перекус",kcal:150,p:18,f:5,c:6,time:3,cost:1,tags:["творог","быстро"],diet:["vegetarian","gluten_free"],allergens:["лактоза"],dislikes:[],kitchen:[],ingredients:[{n:"Творог 5%",g:100,d:"молочное",pack:180},{n:"Зелень",g:15,d:"овощи",pack:1}],emoji:"🧀"},
  {id:47,name:"Морковь с хумусом",meal:"перекус",kcal:160,p:6,f:8,c:18,time:5,cost:1,tags:["овощи","хумус","быстро"],diet:["vegan","lactose_free","gluten_free"],allergens:["кунжут"],dislikes:[],kitchen:[],ingredients:[{n:"Морковь",g:100,d:"овощи",pack:1},{n:"Хумус",g:40,d:"бакалея",pack:200}],emoji:"🥕"},
  {id:48,name:"Горсть орехов и сухофрукты",meal:"перекус",kcal:220,p:5,f:14,c:22,time:1,cost:2,tags:["орехи","сухофрукты","быстро"],diet:["vegan","lactose_free","gluten_free"],allergens:["орехи"],dislikes:[],kitchen:[],ingredients:[{n:"Смесь орехов",g:25,d:"бакалея",pack:100},{n:"Сухофрукты",g:30,d:"бакалея",pack:200}],emoji:"🥜"}
,
  {id:49,name:"Овсяноблин с сыром",meal:"завтрак",kcal:310,p:18,f:12,c:32,time:15,cost:1,tags:["яйца","овсянка","быстро"],diet:["vegetarian"],allergens:["яйца","лактоза","глютен"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Овсяные хлопья",g:40,d:"бакалея"},{n:"Яйцо",g:50,d:"молочное"},{n:"Сыр",g:30,d:"молочное"}],emoji:"🥞"},
  {id:50,name:"Рисовая каша на молоке",meal:"завтрак",kcal:290,p:8,f:6,c:52,time:25,cost:1,tags:["рис","каша"],diet:["vegetarian"],allergens:["лактоза"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Рис",g:60,d:"бакалея"},{n:"Молоко",g:200,d:"молочное"}],emoji:"🍚"},
  {id:51,name:"Творожная паста с зеленью",meal:"завтрак",kcal:240,p:20,f:10,c:12,time:8,cost:1,tags:["творог","быстро"],diet:["vegetarian","gluten_free"],allergens:["лактоза"],dislikes:[],kitchen:[],ingredients:[{n:"Творог 5%",g:150,d:"молочное"},{n:"Огурец",g:50,d:"овощи"},{n:"Зелень",g:15,d:"овощи"}],emoji:"🧀"},
  {id:52,name:"Гранола с йогуртом и яблоком",meal:"завтрак",kcal:350,p:12,f:10,c:52,time:5,cost:2,tags:["йогурт","быстро"],diet:["vegetarian"],allergens:["лактоза","глютен"],dislikes:[],kitchen:[],ingredients:[{n:"Йогурт натуральный",g:150,d:"молочное"},{n:"Гранола",g:45,d:"бакалея"},{n:"Яблоко",g:80,d:"овощи"}],emoji:"🍎"},
  {id:53,name:"Куриный стейк с булгуром",meal:"обед",kcal:460,p:40,f:12,c:42,time:35,cost:2,tags:["курица","булгур","мясо"],diet:["lactose_free"],allergens:["глютен"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Куриная грудка",g:160,d:"мясо"},{n:"Булгур",g:70,d:"бакалея"},{n:"Помидор",g:80,d:"овощи"}],emoji:"🍗"},
  {id:54,name:"Суп-пюре из брокколи",meal:"обед",kcal:250,p:12,f:10,c:26,time:30,cost:1,tags:["суп","овощи"],diet:["vegetarian","gluten_free"],allergens:["лактоза"],dislikes:[],kitchen:["плита","блендер"],ingredients:[{n:"Брокколи",g:200,d:"овощи"},{n:"Картофель",g:80,d:"овощи"},{n:"Сливки 10%",g:40,d:"молочное"}],emoji:"🥦"},
  {id:55,name:"Индейка с киноа и овощами",meal:"обед",kcal:420,p:38,f:12,c:36,time:40,cost:3,tags:["индейка","киноа","овощи"],diet:["gluten_free","lactose_free"],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Индейка",g:150,d:"мясо"},{n:"Киноа",g:60,d:"бакалея"},{n:"Перец",g:80,d:"овощи"},{n:"Кабачок",g:80,d:"овощи"}],emoji:"🦃"},
  {id:56,name:"Рассольник с говядиной",meal:"обед",kcal:360,p:20,f:12,c:38,time:55,cost:2,tags:["суп","говядина"],diet:["gluten_free"],allergens:[],dislikes:["красное мясо"],kitchen:["плита"],ingredients:[{n:"Говядина",g:90,d:"мясо"},{n:"Солёные огурцы",g:60,d:"овощи"},{n:"Перловка",g:40,d:"бакалея"},{n:"Картофель",g:80,d:"овощи"},{n:"Лук",g:30,d:"овощи",pack:1},{n:"Морковь",g:30,d:"овощи",pack:1}],emoji:"🍲"},
  {id:57,name:"Рыбные котлеты с рисом",meal:"обед",kcal:430,p:30,f:14,c:45,time:40,cost:2,tags:["рыба","котлеты","рис"],diet:["lactose_free"],allergens:["рыба","яйца","глютен"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Фарш рыбный",g:150,d:"мясо"},{n:"Рис",g:70,d:"бакалея"},{n:"Яйцо",g:25,d:"молочное"},{n:"Хлеб",g:20,d:"бакалея"}],emoji:"🐟"},
  {id:58,name:"Нут с овощами карри",meal:"обед",kcal:380,p:16,f:12,c:52,time:35,cost:1,tags:["бобовые","овощи","вегетарианское"],diet:["vegan","lactose_free","gluten_free"],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Нут",g:120,d:"бакалея"},{n:"Помидор",g:100,d:"овощи"},{n:"Лук",g:40,d:"овощи"},{n:"Морковь",g:50,d:"овощи"}],emoji:"🍛"},
  {id:59,name:"Бефстроганов с гречкой",meal:"обед",kcal:520,p:34,f:22,c:42,time:45,cost:3,tags:["говядина","гречка","мясо"],diet:["gluten_free"],allergens:["лактоза"],dislikes:["красное мясо"],kitchen:["плита"],ingredients:[{n:"Говядина",g:140,d:"мясо"},{n:"Гречка",g:70,d:"бакалея"},{n:"Сметана",g:40,d:"молочное"},{n:"Лук",g:40,d:"овощи"}],emoji:"🥩"},
  {id:60,name:"Куриные крылышки с салатом",meal:"ужин",kcal:410,p:32,f:22,c:12,time:40,cost:2,tags:["курица","салат"],diet:["gluten_free","lactose_free"],allergens:[],dislikes:[],kitchen:["духовка"],ingredients:[{n:"Куриные крылышки",g:200,d:"мясо"},{n:"Салат",g:80,d:"овощи"},{n:"Огурец",g:60,d:"овощи"}],emoji:"🍗"},
  {id:61,name:"Запечённые овощи с фетой",meal:"ужин",kcal:320,p:12,f:18,c:26,time:40,cost:2,tags:["овощи","сыр","вегетарианское"],diet:["vegetarian","gluten_free"],allergens:["лактоза"],dislikes:["баклажаны"],kitchen:["духовка"],ingredients:[{n:"Кабачок",g:120,d:"овощи"},{n:"Перец",g:80,d:"овощи"},{n:"Баклажан",g:80,d:"овощи"},{n:"Сыр фета",g:50,d:"молочное"}],emoji:"🥬"},
  {id:62,name:"Тунец с овощным салатом",meal:"ужин",kcal:300,p:28,f:12,c:14,time:15,cost:2,tags:["рыба","салат","быстро"],diet:["gluten_free","lactose_free"],allergens:["рыба"],dislikes:[],kitchen:[],ingredients:[{n:"Тунец консерв.",g:120,d:"мясо"},{n:"Салат",g:80,d:"овощи"},{n:"Помидор",g:80,d:"овощи"},{n:"Огурец",g:60,d:"овощи"}],emoji:"🥗"},
  {id:63,name:"Куриный суп с рисом",meal:"ужин",kcal:280,p:22,f:8,c:28,time:40,cost:1,tags:["суп","курица","рис"],diet:["gluten_free","lactose_free"],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Курица",g:100,d:"мясо"},{n:"Рис",g:40,d:"бакалея"},{n:"Морковь",g:40,d:"овощи"},{n:"Лук",g:30,d:"овощи"}],emoji:"🍜"},
  {id:64,name:"Свинина тушёная с капустой",meal:"ужин",kcal:440,p:28,f:24,c:22,time:50,cost:2,tags:["свинина","капуста","мясо"],diet:["gluten_free","lactose_free"],allergens:[],dislikes:["свинина"],kitchen:["плита"],ingredients:[{n:"Свинина",g:140,d:"мясо"},{n:"Капуста",g:150,d:"овощи"},{n:"Лук",g:40,d:"овощи"},{n:"Морковь",g:40,d:"овощи"}],emoji:"🥓"},
  {id:65,name:"Омлет-рулет с овощами",meal:"ужин",kcal:290,p:20,f:18,c:10,time:20,cost:1,tags:["яйца","овощи","быстро"],diet:["vegetarian","gluten_free"],allergens:["яйца"],dislikes:[],kitchen:["плита","духовка"],ingredients:[{n:"Яйца",g:120,d:"молочное"},{n:"Шпинат",g:50,d:"овощи"},{n:"Помидор",g:60,d:"овощи"}],emoji:"🍳"},
  {id:66,name:"Творог с мёдом и орехами",meal:"перекус",kcal:260,p:18,f:12,c:20,time:3,cost:2,tags:["творог","орехи","быстро"],diet:["vegetarian","gluten_free"],allergens:["лактоза","орехи"],dislikes:[],kitchen:[],ingredients:[{n:"Творог 5%",g:120,d:"молочное"},{n:"Мёд",g:15,d:"бакалея"},{n:"Грецкий орех",g:20,d:"бакалея"}],emoji:"🍯"},
  {id:67,name:"Банан с арахисовой пастой",meal:"перекус",kcal:250,p:8,f:12,c:30,time:2,cost:1,tags:["фрукты","быстро"],diet:["vegan","lactose_free","gluten_free"],allergens:["арахис"],dislikes:[],kitchen:[],ingredients:[{n:"Банан",g:120,d:"овощи"},{n:"Арахисовая паста",g:25,d:"бакалея"}],emoji:"🍌"},
  {id:68,name:"Овощные палочки с гуакамоле",meal:"перекус",kcal:180,p:4,f:14,c:12,time:10,cost:2,tags:["овощи","авокадо","быстро"],diet:["vegan","lactose_free","gluten_free"],allergens:[],dislikes:[],kitchen:[],ingredients:[{n:"Морковь",g:80,d:"овощи"},{n:"Огурец",g:60,d:"овощи"},{n:"Авокадо",g:70,d:"овощи"}],emoji:"🥑"},
  {id:69,name:"Сырники в духовке",meal:"завтрак",kcal:340,p:20,f:12,c:36,time:30,cost:1,tags:["творог","запечённое"],diet:["vegetarian"],allergens:["лактоза","яйца","глютен"],dislikes:[],kitchen:["духовка"],ingredients:[{n:"Творог",g:180,d:"молочное"},{n:"Яйцо",g:50,d:"молочное"},{n:"Мука",g:25,d:"бакалея"}],emoji:"🧀"},
  {id:70,name:"Перловая каша с грибами",meal:"ужин",kcal:330,p:10,f:8,c:55,time:55,cost:1,tags:["каша","грибы"],diet:["vegan","lactose_free"],allergens:["глютен"],dislikes:["грибы"],kitchen:["плита"],ingredients:[{n:"Перловка",g:70,d:"бакалея"},{n:"Грибы",g:100,d:"овощи"},{n:"Лук",g:40,d:"овощи"}],emoji:"🍄"},
  {id:71,name:"Курица в сливочном соусе",meal:"ужин",kcal:400,p:36,f:18,c:16,time:35,cost:2,tags:["курица","соус"],diet:["gluten_free"],allergens:["лактоза"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Куриная грудка",g:150,d:"мясо"},{n:"Сливки 20%",g:50,d:"молочное"},{n:"Брокколи",g:100,d:"овощи"}],emoji:"🍗"},
  {id:72,name:"Салат с киноа и нутом",meal:"обед",kcal:360,p:14,f:12,c:48,time:20,cost:2,tags:["киноа","бобовые","салат"],diet:["vegan","lactose_free","gluten_free"],allergens:[],dislikes:[],kitchen:[],ingredients:[{n:"Киноа",g:60,d:"бакалея"},{n:"Нут",g:80,d:"бакалея"},{n:"Огурец",g:60,d:"овощи"},{n:"Помидор",g:60,d:"овощи"}],emoji:"🥗"},
{id:73,name:"Каша пшённая с тыквой",meal:"завтрак",kcal:310,p:9,f:7,c:54,time:25,cost:1,tags:["каша","тыква","сладкое"],diet:["vegetarian","lactose_free"],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Пшено",g:60,d:"бакалея",pack:700},{n:"Тыква",g:120,d:"овощи",pack:1},{n:"Мёд",g:15,d:"бакалея",pack:250}],emoji:"🎃"},
  {id:74,name:"Яичница с беконом и томатами",meal:"завтрак",kcal:420,p:22,f:32,c:6,time:12,cost:2,tags:["яйца","бекон","быстро"],diet:[],allergens:["яйца"],dislikes:["свинина"],kitchen:["плита"],ingredients:[{n:"Яйца",g:100,d:"молочное",pack:10},{n:"Бекон",g:40,d:"мясо",pack:200},{n:"Помидор",g:80,d:"овощи",pack:1}],emoji:"🥓"},
  {id:75,name:"Гречневая каша с молоком",meal:"завтрак",kcal:340,p:12,f:10,c:52,time:20,cost:1,tags:["гречка","каша"],diet:["vegetarian"],allergens:["лактоза"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Гречка",g:70,d:"бакалея",pack:900},{n:"Молоко",g:150,d:"молочное",pack:1000}],emoji:"🥣"},
  {id:76,name:"Творожная запеканка",meal:"завтрак",kcal:360,p:22,f:12,c:38,time:40,cost:2,tags:["творог","духовка"],diet:["vegetarian"],allergens:["лактоза","яйца"],dislikes:[],kitchen:["духовка"],ingredients:[{n:"Творог",g:200,d:"молочное",pack:180},{n:"Яйцо",g:50,d:"молочное",pack:10},{n:"Манка",g:30,d:"бакалея",pack:500},{n:"Изюм",g:20,d:"бакалея",pack:200}],emoji:"🍰"},
  {id:77,name:"Сэндвич с индейкой и сыром",meal:"завтрак",kcal:380,p:28,f:14,c:36,time:8,cost:2,tags:["быстро","бутерброд"],diet:[],allergens:["лактоза","глютен"],dislikes:[],kitchen:[],ingredients:[{n:"Хлеб цельнозерновой",g:80,d:"бакалея",pack:400},{n:"Индейка",g:80,d:"мясо",pack:300},{n:"Сыр",g:30,d:"молочное",pack:200},{n:"Огурец",g:40,d:"овощи",pack:1}],emoji:"🥪"},
  {id:78,name:"Шакшука",meal:"завтрак",kcal:310,p:18,f:20,c:14,time:25,cost:2,tags:["яйца","томаты","овощи"],diet:["vegetarian","gluten_free"],allergens:["яйца"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Яйца",g:100,d:"молочное",pack:10},{n:"Помидор",g:200,d:"овощи",pack:1},{n:"Перец болгарский",g:80,d:"овощи",pack:1},{n:"Лук",g:40,d:"овощи",pack:1}],emoji:"🍳"},
  {id:79,name:"Куриный суп с лапшой",meal:"обед",kcal:320,p:28,f:10,c:32,time:45,cost:2,tags:["суп","курица","лапша"],diet:[],allergens:["глютен"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Куриная грудка",g:120,d:"мясо",pack:500},{n:"Лапша",g:50,d:"бакалея",pack:400},{n:"Морковь",g:50,d:"овощи",pack:1},{n:"Лук",g:40,d:"овощи",pack:1}],emoji:"🍜"},
  {id:80,name:"Плов с курицей",meal:"обед",kcal:480,p:28,f:16,c:58,time:50,cost:2,tags:["рис","курица","плов"],diet:[],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Рис",g:80,d:"бакалея",pack:900},{n:"Курица",g:120,d:"мясо",pack:500},{n:"Морковь",g:60,d:"овощи",pack:1},{n:"Лук",g:40,d:"овощи",pack:1}],emoji:"🍚"},
  {id:81,name:"Щи из свежей капусты",meal:"обед",kcal:220,p:14,f:8,c:24,time:50,cost:1,tags:["суп","капуста"],diet:[],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Говядина",g:80,d:"мясо",pack:500},{n:"Капуста",g:150,d:"овощи",pack:1},{n:"Морковь",g:40,d:"овощи",pack:1},{n:"Картофель",g:80,d:"овощи",pack:1},{n:"Лук",g:30,d:"овощи",pack:1}],emoji:"🍲"},
  {id:82,name:"Ризотто с грибами",meal:"обед",kcal:420,p:12,f:14,c:62,time:35,cost:2,tags:["рис","грибы","итальянская"],diet:["vegetarian"],allergens:["лактоза"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Рис",g:80,d:"бакалея",pack:900},{n:"Грибы",g:120,d:"овощи",pack:300},{n:"Лук",g:40,d:"овощи",pack:1},{n:"Сыр пармезан",g:20,d:"молочное",pack:200}],emoji:"🍄"},
  {id:83,name:"Котлеты куриные с пюре",meal:"обед",kcal:450,p:32,f:18,c:40,time:40,cost:2,tags:["котлеты","картофель"],diet:[],allergens:["яйца","глютен"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Фарш куриный",g:150,d:"мясо",pack:500},{n:"Картофель",g:200,d:"овощи",pack:1},{n:"Яйцо",g:25,d:"молочное",pack:10},{n:"Хлеб",g:20,d:"бакалея",pack:400}],emoji:"🍖"},
  {id:84,name:"Салат Цезарь с курицей",meal:"обед",kcal:380,p:30,f:22,c:16,time:20,cost:2,tags:["салат","курица"],diet:[],allergens:["лактоза","глютен","яйца"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Куриная грудка",g:120,d:"мясо",pack:500},{n:"Салат романо",g:80,d:"овощи",pack:150},{n:"Сыр пармезан",g:20,d:"молочное",pack:200},{n:"Сухарики",g:30,d:"бакалея",pack:100}],emoji:"🥗"},
  {id:85,name:"Лазанья мясная",meal:"обед",kcal:520,p:28,f:26,c:46,time:60,cost:3,tags:["паста","мясо","духовка"],diet:[],allergens:["лактоза","глютен","яйца"],dislikes:[],kitchen:["духовка","плита"],ingredients:[{n:"Листы лазаньи",g:80,d:"бакалея",pack:250},{n:"Фарш говяжий",g:120,d:"мясо",pack:500},{n:"Сыр",g:50,d:"молочное",pack:200},{n:"Томатный соус",g:100,d:"бакалея",pack:400}],emoji:"🍝"},
  {id:86,name:"Суп-пюре из брокколи",meal:"обед",kcal:210,p:10,f:12,c:18,time:30,cost:1,tags:["суп","брокколи","лёгкое"],diet:["vegetarian","gluten_free"],allergens:["лактоза"],dislikes:[],kitchen:["плита","блендер"],ingredients:[{n:"Брокколи",g:200,d:"овощи",pack:400},{n:"Картофель",g:80,d:"овощи",pack:1},{n:"Сливки",g:50,d:"молочное",pack:200},{n:"Лук",g:30,d:"овощи",pack:1}],emoji:"🥦"},
  {id:87,name:"Стейк из лосося с овощами",meal:"ужин",kcal:420,p:36,f:26,c:8,time:25,cost:3,tags:["рыба","запечённое"],diet:["gluten_free"],allergens:["рыба"],dislikes:["рыба"],kitchen:["плита"],ingredients:[{n:"Лосось",g:150,d:"мясо",pack:400},{n:"Брокколи",g:100,d:"овощи",pack:400},{n:"Лимон",g:20,d:"овощи",pack:1}],emoji:"🐟"},
  {id:88,name:"Овощное рагу с индейкой",meal:"ужин",kcal:340,p:28,f:12,c:28,time:40,cost:2,tags:["индейка","овощи","рагу"],diet:["gluten_free"],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Индейка",g:120,d:"мясо",pack:500},{n:"Кабачок",g:100,d:"овощи",pack:1},{n:"Перец болгарский",g:80,d:"овощи",pack:1},{n:"Помидор",g:80,d:"овощи",pack:1}],emoji:"🍲"},
  {id:89,name:"Запечённая треска с лимоном",meal:"ужин",kcal:280,p:34,f:10,c:6,time:30,cost:2,tags:["рыба","запечённое","лёгкое"],diet:["gluten_free"],allergens:["рыба"],dislikes:["рыба"],kitchen:["духовка"],ingredients:[{n:"Треска",g:160,d:"мясо",pack:400},{n:"Лимон",g:20,d:"овощи",pack:1},{n:"Брокколи",g:100,d:"овощи",pack:400}],emoji:"🍋"},
  {id:90,name:"Фаршированный перец",meal:"ужин",kcal:380,p:22,f:14,c:42,time:50,cost:2,tags:["перец","фарш","духовка"],diet:[],allergens:[],dislikes:[],kitchen:["духовка","плита"],ingredients:[{n:"Перец болгарский",g:200,d:"овощи",pack:1},{n:"Фарш говяжий",g:100,d:"мясо",pack:500},{n:"Рис",g:40,d:"бакалея",pack:900},{n:"Лук",g:30,d:"овощи",pack:1}],emoji:"🫑"},
  {id:91,name:"Куриные крылышки в духовке",meal:"ужин",kcal:400,p:32,f:26,c:6,time:45,cost:2,tags:["курица","духовка"],diet:["gluten_free"],allergens:[],dislikes:[],kitchen:["духовка"],ingredients:[{n:"Куриные крылышки",g:200,d:"мясо",pack:600},{n:"Чеснок",g:10,d:"овощи",pack:1},{n:"Масло растительное",g:15,d:"бакалея",pack:1000}],emoji:"🍗"},
  {id:92,name:"Омлет-рулет с сыром и зеленью",meal:"ужин",kcal:320,p:22,f:24,c:4,time:15,cost:1,tags:["яйца","сыр","быстро"],diet:["vegetarian","gluten_free"],allergens:["яйца","лактоза"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Яйца",g:120,d:"молочное",pack:10},{n:"Сыр",g:40,d:"молочное",pack:200},{n:"Зелень",g:15,d:"овощи",pack:50}],emoji:"🍳"},
  {id:93,name:"Тушёная капуста с сосисками",meal:"ужин",kcal:360,p:16,f:22,c:24,time:35,cost:1,tags:["капуста","сосиски"],diet:[],allergens:[],dislikes:["свинина"],kitchen:["плита"],ingredients:[{n:"Капуста",g:200,d:"овощи",pack:1},{n:"Сосиски",g:100,d:"мясо",pack:400},{n:"Морковь",g:40,d:"овощи",pack:1},{n:"Лук",g:40,d:"овощи",pack:1}],emoji:"🌭"},
  {id:94,name:"Киноа с овощами и фетой",meal:"ужин",kcal:380,p:14,f:16,c:46,time:25,cost:2,tags:["киноа","овощи","сыр"],diet:["vegetarian","gluten_free"],allergens:["лактоза"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Киноа",g:70,d:"бакалея",pack:400},{n:"Сыр фета",g:40,d:"молочное",pack:200},{n:"Огурец",g:60,d:"овощи",pack:1},{n:"Помидор",g:80,d:"овощи",pack:1}],emoji:"🥗"},
  {id:95,name:"Греческий салат",meal:"перекус",kcal:220,p:8,f:16,c:12,time:10,cost:2,tags:["салат","сыр","овощи"],diet:["vegetarian","gluten_free"],allergens:["лактоза"],dislikes:[],kitchen:[],ingredients:[{n:"Огурец",g:80,d:"овощи",pack:1},{n:"Помидор",g:100,d:"овощи",pack:1},{n:"Сыр фета",g:40,d:"молочное",pack:200},{n:"Маслины",g:30,d:"бакалея",pack:300}],emoji:"🫒"},
  {id:96,name:"Творог с мёдом и орехами",meal:"перекус",kcal:280,p:18,f:14,c:22,time:3,cost:1,tags:["творог","быстро"],diet:["vegetarian","gluten_free"],allergens:["лактоза","орехи"],dislikes:[],kitchen:[],ingredients:[{n:"Творог 5%",g:150,d:"молочное",pack:180},{n:"Мёд",g:20,d:"бакалея",pack:250},{n:"Грецкий орех",g:20,d:"бакалея",pack:200}],emoji:"🍯"},
  {id:97,name:"Яблочные дольки с арахисовой пастой",meal:"перекус",kcal:240,p:8,f:14,c:24,time:3,cost:1,tags:["яблоко","быстро"],diet:["vegetarian","vegan","gluten_free"],allergens:["орехи"],dislikes:[],kitchen:[],ingredients:[{n:"Яблоко",g:150,d:"овощи",pack:1},{n:"Арахисовая паста",g:30,d:"бакалея",pack:350}],emoji:"🍎"},
  {id:98,name:"Хумус с овощными палочками",meal:"перекус",kcal:210,p:8,f:12,c:20,time:5,cost:1,tags:["хумус","овощи","быстро"],diet:["vegetarian","vegan","gluten_free"],allergens:[],dislikes:[],kitchen:[],ingredients:[{n:"Хумус",g:80,d:"бакалея",pack:200},{n:"Морковь",g:60,d:"овощи",pack:1},{n:"Огурец",g:60,d:"овощи",pack:1}],emoji:"🥕"},
  {id:99,name:"Протеиновый коктейль на молоке",meal:"перекус",kcal:260,p:28,f:6,c:24,time:3,cost:2,tags:["протеин","быстро"],diet:["vegetarian","gluten_free"],allergens:["лактоза"],dislikes:[],kitchen:[],ingredients:[{n:"Молоко",g:250,d:"молочное",pack:1000},{n:"Протеиновый порошок",g:30,d:"бакалея",pack:500},{n:"Банан",g:80,d:"овощи",pack:1}],emoji:"🥤"},
  {id:100,name:"Рыбные котлеты с рисом",meal:"обед",kcal:400,p:30,f:14,c:42,time:40,cost:2,tags:["рыба","котлеты","рис"],diet:[],allergens:["рыба","яйца","глютен"],dislikes:["рыба"],kitchen:["плита"],ingredients:[{n:"Фарш рыбный",g:150,d:"мясо",pack:400},{n:"Рис",g:70,d:"бакалея",pack:900},{n:"Яйцо",g:25,d:"молочное",pack:10},{n:"Лук",g:30,d:"овощи",pack:1}],emoji:"🐟"},
  {id:101,name:"Макароны с фрикадельками",meal:"обед",kcal:480,p:26,f:18,c:54,time:35,cost:2,tags:["паста","мясо"],diet:[],allergens:["глютен","яйца"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Макароны",g:90,d:"бакалея",pack:450},{n:"Фарш говяжий",g:120,d:"мясо",pack:500},{n:"Томатный соус",g:80,d:"бакалея",pack:400},{n:"Лук",g:30,d:"овощи",pack:1}],emoji:"🍝"},
  {id:102,name:"Овощной суп минестроне",meal:"обед",kcal:240,p:10,f:8,c:34,time:40,cost:1,tags:["суп","овощи","итальянская"],diet:["vegetarian","vegan"],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Фасоль",g:60,d:"бакалея",pack:400},{n:"Кабачок",g:80,d:"овощи",pack:1},{n:"Морковь",g:50,d:"овощи",pack:1},{n:"Помидор",g:80,d:"овощи",pack:1},{n:"Макароны",g:30,d:"бакалея",pack:450}],emoji:"🥣"},
  {id:103,name:"Курица терияки с рисом",meal:"ужин",kcal:440,p:34,f:12,c:48,time:30,cost:2,tags:["курица","азиатская","рис"],diet:[],allergens:["соя","глютен"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Куриная грудка",g:140,d:"мясо",pack:500},{n:"Рис",g:70,d:"бакалея",pack:900},{n:"Соевый соус",g:20,d:"бакалея",pack:250},{n:"Мёд",g:10,d:"бакалея",pack:250}],emoji:"🍱"},
  {id:104,name:"Запечённые овощи с фетой",meal:"ужин",kcal:300,p:12,f:18,c:24,time:40,cost:2,tags:["овощи","сыр","духовка"],diet:["vegetarian","gluten_free"],allergens:["лактоза"],dislikes:[],kitchen:["духовка"],ingredients:[{n:"Баклажан",g:100,d:"овощи",pack:1},{n:"Кабачок",g:100,d:"овощи",pack:1},{n:"Перец болгарский",g:80,d:"овощи",pack:1},{n:"Сыр фета",g:50,d:"молочное",pack:200}],emoji:"🍆"},
  {id:105,name:"Суп харчо",meal:"обед",kcal:340,p:22,f:14,c:32,time:55,cost:2,tags:["суп","говядина","острое"],diet:[],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Говядина",g:100,d:"мясо",pack:500},{n:"Рис",g:40,d:"бакалея",pack:900},{n:"Томатная паста",g:30,d:"бакалея",pack:250},{n:"Чеснок",g:10,d:"овощи",pack:1},{n:"Лук",g:40,d:"овощи",pack:1}],emoji:"🌶️"},
  {id:106,name:"Блины с творогом",meal:"завтрак",kcal:400,p:16,f:14,c:52,time:30,cost:1,tags:["блины","творог"],diet:["vegetarian"],allergens:["лактоза","яйца","глютен"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Мука",g:60,d:"бакалея",pack:1000},{n:"Молоко",g:120,d:"молочное",pack:1000},{n:"Яйцо",g:50,d:"молочное",pack:10},{n:"Творог",g:80,d:"молочное",pack:180}],emoji:"🥞"},
  {id:107,name:"Салат с тунцом и яйцом",meal:"перекус",kcal:280,p:26,f:16,c:8,time:12,cost:2,tags:["салат","рыба","яйца"],diet:["gluten_free"],allergens:["рыба","яйца"],dislikes:["рыба"],kitchen:[],ingredients:[{n:"Тунец консервированный",g:80,d:"мясо",pack:150},{n:"Яйцо",g:50,d:"молочное",pack:10},{n:"Огурец",g:60,d:"овощи",pack:1},{n:"Салат",g:40,d:"овощи",pack:150}],emoji:"🥗"},
  {id:108,name:"Голубцы ленивые",meal:"ужин",kcal:390,p:24,f:16,c:36,time:40,cost:2,tags:["капуста","фарш"],diet:[],allergens:["яйца"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Фарш говяжий",g:120,d:"мясо",pack:500},{n:"Капуста",g:150,d:"овощи",pack:1},{n:"Рис",g:40,d:"бакалея",pack:900},{n:"Лук",g:40,d:"овощи",pack:1}],emoji:"🥬"},
  {id:109,name:"Тост с авокадо и яйцом пашот",meal:"завтрак",kcal:360,p:16,f:22,c:28,time:15,cost:2,tags:["авокадо","яйца","тост"],diet:["vegetarian"],allergens:["яйца","глютен"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Хлеб цельнозерновой",g:60,d:"бакалея",pack:400},{n:"Авокадо",g:80,d:"овощи",pack:1},{n:"Яйцо",g:50,d:"молочное",pack:10}],emoji:"🥑"},
  {id:110,name:"Чизкейк в стакане без выпечки",meal:"перекус",kcal:320,p:10,f:20,c:28,time:15,cost:2,tags:["десерт","творог"],diet:["vegetarian"],allergens:["лактоза"],dislikes:[],kitchen:[],ingredients:[{n:"Творожный сыр",g:80,d:"молочное",pack:200},{n:"Печенье",g:40,d:"бакалея",pack:300},{n:"Ягоды",g:40,d:"овощи",pack:200}],emoji:"🍰"}
,
  {id:111,name:"Овсянка с яблоком и корицей",meal:"завтрак",kcal:300,p:10,f:7,c:50,time:10,cost:1,tags:["овсянка","яблоко","быстро"],diet:["vegetarian"],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Овсяные хлопья",g:60,d:"бакалея"},{n:"Яблоки",g:100,d:"овощи"},{n:"Мёд",g:10,d:"бакалея"}],emoji:"🍎"},
  {id:112,name:"Яичница глазунья с тостами",meal:"завтрак",kcal:340,p:18,f:20,c:22,time:10,cost:1,tags:["яйца","тост","быстро"],diet:["vegetarian"],allergens:["яйца","глютен"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Яйца",g:100,d:"молочное"},{n:"Хлеб",g:60,d:"бакалея"},{n:"Масло растительное",g:8,d:"бакалея"}],emoji:"🍳"},
  {id:113,name:"Смузи боул с гранолой",meal:"завтрак",kcal:360,p:12,f:10,c:55,time:8,cost:2,tags:["смузи","гранола","быстро"],diet:["vegetarian"],allergens:["лактоза"],dislikes:[],kitchen:["блендер"],ingredients:[{n:"Банан",g:120,d:"овощи"},{n:"Ягоды",g:80,d:"овощи"},{n:"Йогурт натуральный",g:100,d:"молочное"},{n:"Гранола",g:40,d:"бакалея"}],emoji:"🥤"},
  {id:114,name:"Ленивые вареники со сметаной",meal:"завтрак",kcal:420,p:18,f:12,c:55,time:35,cost:2,tags:["творог","вареники"],diet:["vegetarian"],allergens:["лактоза","глютен","яйца"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Творог",g:120,d:"молочное"},{n:"Мука",g:50,d:"бакалея"},{n:"Яйцо",g:25,d:"молочное"},{n:"Сметана",g:30,d:"молочное"}],emoji:"🥟"},
  {id:115,name:"Тыквенная каша с пшеном",meal:"завтрак",kcal:290,p:8,f:6,c:52,time:25,cost:1,tags:["каша","тыква"],diet:["vegetarian","lactose_free"],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Пшено",g:20,d:"бакалея"},{n:"Тыква",g:150,d:"овощи"},{n:"Мёд",g:15,d:"бакалея"}],emoji:"🎃"},
  {id:116,name:"Омлет со шпинатом и фетой",meal:"завтрак",kcal:320,p:20,f:24,c:6,time:15,cost:2,tags:["яйца","шпинат","сыр"],diet:["vegetarian","gluten_free"],allergens:["яйца","лактоза"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Яйца",g:120,d:"молочное"},{n:"Шпинат",g:50,d:"овощи"},{n:"Фета",g:40,d:"молочное"}],emoji:"🥬"},
  {id:117,name:"Бутерброды с авокадо и помидором",meal:"завтрак",kcal:310,p:8,f:18,c:30,time:7,cost:1,tags:["тост","авокадо","быстро"],diet:["vegetarian","vegan"],allergens:["глютен"],dislikes:[],kitchen:[],ingredients:[{n:"Хлеб цельнозерновой",g:70,d:"бакалея"},{n:"Авокадо",g:80,d:"овощи"},{n:"Помидоры",g:60,d:"овощи"}],emoji:"🥑"},
  {id:118,name:"Рисовая каша на молоке",meal:"завтрак",kcal:330,p:9,f:8,c:55,time:25,cost:1,tags:["каша","рис"],diet:["vegetarian"],allergens:["лактоза"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Рис",g:60,d:"бакалея"},{n:"Молоко",g:200,d:"молочное"},{n:"Мёд",g:10,d:"бакалея"}],emoji:"🍚"},
  {id:119,name:"Творожная запеканка с ягодами",meal:"завтрак",kcal:380,p:22,f:14,c:36,time:40,cost:2,tags:["творог","духовка","ягоды"],diet:["vegetarian"],allergens:["лактоза","яйца"],dislikes:[],kitchen:["духовка"],ingredients:[{n:"Творог",g:180,d:"молочное"},{n:"Яйцо",g:50,d:"молочное"},{n:"Ягоды",g:60,d:"овощи"},{n:"Манка",g:25,d:"бакалея"}],emoji:"🫐"},
  {id:120,name:"Яйца всмятку с авокадо",meal:"завтрак",kcal:280,p:16,f:20,c:8,time:12,cost:1,tags:["яйца","авокадо","быстро"],diet:["vegetarian","gluten_free"],allergens:["яйца"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Яйца",g:100,d:"молочное"},{n:"Авокадо",g:70,d:"овощи"}],emoji:"🥚"},
  {id:121,name:"Пшенная каша с изюмом",meal:"завтрак",kcal:310,p:9,f:6,c:56,time:20,cost:1,tags:["каша","пшено"],diet:["vegetarian","lactose_free"],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Пшено",g:70,d:"бакалея"},{n:"Изюм",g:25,d:"бакалея"},{n:"Мёд",g:10,d:"бакалея"}],emoji:"🥣"},
  {id:122,name:"Тост с хумусом и овощами",meal:"завтрак",kcal:290,p:10,f:12,c:36,time:8,cost:1,tags:["тост","хумус","быстро"],diet:["vegetarian","vegan"],allergens:["глютен"],dislikes:[],kitchen:[],ingredients:[{n:"Хлеб цельнозерновой",g:70,d:"бакалея"},{n:"Хумус",g:50,d:"бакалея"},{n:"Огурцы",g:40,d:"овощи"},{n:"Помидоры",g:40,d:"овощи"}],emoji:"🥪"},
  {id:123,name:"Овсяноблин с творогом",meal:"завтрак",kcal:350,p:20,f:12,c:40,time:15,cost:1,tags:["овсянка","творог","блины"],diet:["vegetarian"],allergens:["лактоза","яйца"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Овсяные хлопья",g:50,d:"бакалея"},{n:"Яйцо",g:50,d:"молочное"},{n:"Творог",g:80,d:"молочное"}],emoji:"🥞"},
  {id:124,name:"Гранола с йогуртом и мёдом",meal:"завтрак",kcal:340,p:12,f:12,c:48,time:5,cost:2,tags:["гранола","йогурт","быстро"],diet:["vegetarian"],allergens:["лактоза","орехи"],dislikes:[],kitchen:[],ingredients:[{n:"Гранола",g:50,d:"бакалея"},{n:"Йогурт натуральный",g:150,d:"молочное"},{n:"Мёд",g:15,d:"бакалея"}],emoji:"🍯"},
  {id:125,name:"Омлет с грибами",meal:"завтрак",kcal:300,p:18,f:22,c:8,time:15,cost:1,tags:["яйца","грибы"],diet:["vegetarian","gluten_free"],allergens:["яйца"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Яйца",g:120,d:"молочное"},{n:"Грибы",g:100,d:"овощи"},{n:"Лук репчатый",g:30,d:"овощи"}],emoji:"🍄"},
  {id:126,name:"Куриный бульон с яйцом",meal:"обед",kcal:220,p:22,f:8,c:12,time:35,cost:1,tags:["суп","курица","лёгкое"],diet:[],allergens:["яйца"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Куриная грудка",g:100,d:"мясо"},{n:"Яйцо",g:50,d:"молочное"},{n:"Морковь",g:40,d:"овощи"},{n:"Лук репчатый",g:30,d:"овощи"}],emoji:"🍲"},
  {id:127,name:"Паста болоньезе",meal:"обед",kcal:520,p:28,f:18,c:55,time:40,cost:2,tags:["паста","фарш","мясо"],diet:[],allergens:["глютен"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Макароны",g:90,d:"бакалея"},{n:"Фарш говяжий",g:120,d:"мясо"},{n:"Томатный соус",g:80,d:"бакалея"},{n:"Лук репчатый",g:40,d:"овощи"}],emoji:"🍝"},
  {id:128,name:"Гречка с курицей, луком и морковью",meal:"обед",kcal:450,p:32,f:14,c:48,time:35,cost:2,tags:["гречка","печень"],diet:[],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Гречка",g:80,d:"бакалея"},{n:"Куриная грудка",g:100,d:"мясо"},{n:"Лук репчатый",g:40,d:"овощи"},{n:"Морковь",g:40,d:"овощи"}],emoji:"🍗"},
  {id:129,name:"Овощной суп с курицей",meal:"обед",kcal:280,p:24,f:8,c:28,time:40,cost:1,tags:["суп","курица","овощи"],diet:[],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Куриная грудка",g:100,d:"мясо"},{n:"Картофель",g:80,d:"овощи"},{n:"Морковь",g:50,d:"овощи"},{n:"Кабачки",g:60,d:"овощи"}],emoji:"🥣"},
  {id:130,name:"Рис с овощами и яйцом",meal:"обед",kcal:400,p:14,f:12,c:58,time:25,cost:1,tags:["рис","овощи","яйца"],diet:["vegetarian"],allergens:["яйца"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Рис",g:80,d:"бакалея"},{n:"Яйцо",g:50,d:"молочное"},{n:"Морковь",g:50,d:"овощи"},{n:"Кабачки",g:60,d:"овощи"}],emoji:"🍚"},
  {id:131,name:"Чечевичный суп",meal:"обед",kcal:260,p:16,f:6,c:38,time:35,cost:1,tags:["суп","чечевица","веган"],diet:["vegetarian","vegan","gluten_free"],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Чечевица",g:70,d:"бакалея"},{n:"Морковь",g:50,d:"овощи"},{n:"Лук репчатый",g:40,d:"овощи"},{n:"Томатная паста",g:20,d:"бакалея"}],emoji:"🍲"},
  {id:132,name:"Индейка с гречкой и салатом",meal:"обед",kcal:440,p:36,f:12,c:42,time:30,cost:2,tags:["индейка","гречка","салат"],diet:["gluten_free"],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Индейка",g:130,d:"мясо"},{n:"Гречка",g:70,d:"бакалея"},{n:"Огурцы",g:60,d:"овощи"},{n:"Помидоры",g:60,d:"овощи"}],emoji:"🥗"},
  {id:133,name:"Картофельное рагу с говядиной",meal:"обед",kcal:480,p:28,f:18,c:42,time:50,cost:2,tags:["говядина","картофель","рагу"],diet:["gluten_free"],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Говядина",g:120,d:"мясо"},{n:"Картофель",g:150,d:"овощи"},{n:"Морковь",g:50,d:"овощи"},{n:"Лук репчатый",g:40,d:"овощи"}],emoji:"🥩"},
  {id:134,name:"Салат с курицей и овощами",meal:"обед",kcal:320,p:28,f:14,c:16,time:20,cost:2,tags:["салат","курица"],diet:["gluten_free"],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Куриная грудка",g:120,d:"мясо"},{n:"Салат листовой",g:60,d:"овощи"},{n:"Огурцы",g:50,d:"овощи"},{n:"Помидоры",g:60,d:"овощи"}],emoji:"🥗"},
  {id:135,name:"Плов с говядиной",meal:"обед",kcal:550,p:26,f:18,c:62,time:65,cost:2,tags:["плов","рис","говядина"],diet:[],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Рис",g:90,d:"бакалея"},{n:"Говядина",g:100,d:"мясо"},{n:"Морковь",g:70,d:"овощи"},{n:"Лук репчатый",g:40,d:"овощи"}],emoji:"🍚"},
  {id:136,name:"Суп с фасолью и сосисками",meal:"обед",kcal:340,p:18,f:10,c:42,time:50,cost:1,tags:["суп","горох"],diet:[],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Фасоль",g:60,d:"бакалея"},{n:"Картофель",g:80,d:"овощи"},{n:"Морковь",g:40,d:"овощи"},{n:"Лук репчатый",g:30,d:"овощи"},{n:"Сосиски",g:50,d:"мясо"}],emoji:"🥣"},
  {id:137,name:"Куриные котлеты с овощным гарниром",meal:"обед",kcal:430,p:32,f:16,c:32,time:35,cost:2,tags:["котлеты","курица","овощи"],diet:[],allergens:["яйца","глютен"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Фарш куриный",g:150,d:"мясо"},{n:"Яйцо",g:25,d:"молочное"},{n:"Хлеб",g:20,d:"бакалея"},{n:"Брокколи",g:100,d:"овощи"}],emoji:"🍖"},
  {id:138,name:"Рыбный суп из трески",meal:"обед",kcal:250,p:28,f:6,c:18,time:40,cost:2,tags:["суп","рыба"],diet:["gluten_free"],allergens:["рыба"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Треска",g:120,d:"мясо"},{n:"Картофель",g:80,d:"овощи"},{n:"Морковь",g:40,d:"овощи"},{n:"Лук репчатый",g:30,d:"овощи"}],emoji:"🐟"},
  {id:139,name:"Паста с курицей и сливками",meal:"обед",kcal:510,p:30,f:20,c:48,time:30,cost:2,tags:["паста","курица"],diet:[],allergens:["глютен","лактоза"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Макароны",g:90,d:"бакалея"},{n:"Куриная грудка",g:120,d:"мясо"},{n:"Сливки",g:50,d:"молочное"},{n:"Сыр полутвёрдый",g:20,d:"молочное"}],emoji:"🍝"},
  {id:140,name:"Фасолевый суп",meal:"обед",kcal:270,p:14,f:6,c:40,time:40,cost:1,tags:["суп","фасоль","веган"],diet:["vegetarian","vegan"],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Фасоль",g:80,d:"бакалея"},{n:"Морковь",g:50,d:"овощи"},{n:"Лук репчатый",g:40,d:"овощи"},{n:"Томатная паста",g:20,d:"бакалея"}],emoji:"🍲"},
  {id:141,name:"Гречка с тушёной говядиной",meal:"обед",kcal:470,p:30,f:16,c:45,time:40,cost:2,tags:["гречка","говядина"],diet:["gluten_free"],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Гречка",g:80,d:"бакалея"},{n:"Говядина",g:120,d:"мясо"},{n:"Лук репчатый",g:40,d:"овощи"},{n:"Морковь",g:40,d:"овощи"}],emoji:"🥩"},
  {id:142,name:"Киноа с курицей и овощами",meal:"обед",kcal:420,p:32,f:12,c:42,time:30,cost:2,tags:["киноа","курица","овощи"],diet:["gluten_free"],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Киноа",g:70,d:"бакалея"},{n:"Куриная грудка",g:120,d:"мясо"},{n:"Перец болгарский",g:60,d:"овощи"},{n:"Кабачки",g:60,d:"овощи"}],emoji:"🥗"},
  {id:143,name:"Зелёные щи со шпинатом и яйцом",meal:"обед",kcal:240,p:16,f:10,c:18,time:40,cost:1,tags:["суп","щи","зелень"],diet:[],allergens:["яйца"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Говядина",g:60,d:"мясо"},{n:"Шпинат",g:80,d:"овощи"},{n:"Яйцо",g:50,d:"молочное"},{n:"Картофель",g:60,d:"овощи"}],emoji:"🥬"},
  {id:144,name:"Рис карри с нутом",meal:"обед",kcal:410,p:14,f:10,c:62,time:30,cost:1,tags:["рис","нут","карри","веган"],diet:["vegetarian","vegan","gluten_free"],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Рис",g:80,d:"бакалея"},{n:"Нут",g:80,d:"бакалея"},{n:"Морковь",g:40,d:"овощи"},{n:"Лук репчатый",g:30,d:"овощи"}],emoji:"🍛"},
  {id:145,name:"Салат Нисуаз (упрощённый)",meal:"обед",kcal:360,p:28,f:20,c:12,time:15,cost:2,tags:["салат","рыба","яйца"],diet:["gluten_free"],allergens:["рыба","яйца"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Тунец консервированный",g:80,d:"мясо"},{n:"Яйцо",g:50,d:"молочное"},{n:"Огурцы",g:50,d:"овощи"},{n:"Помидоры",g:60,d:"овощи"},{n:"Салат листовой",g:40,d:"овощи"}],emoji:"🥗"},
  {id:146,name:"Макароны с сыром и зеленью",meal:"обед",kcal:480,p:18,f:18,c:58,time:20,cost:1,tags:["паста","сыр","быстро"],diet:["vegetarian"],allergens:["глютен","лактоза"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Макароны",g:100,d:"бакалея"},{n:"Сыр полутвёрдый",g:50,d:"молочное"},{n:"Зелень",g:15,d:"овощи"}],emoji:"🧀"},
  {id:147,name:"Курица в томатном соусе с рисом",meal:"обед",kcal:460,p:34,f:12,c:48,time:35,cost:2,tags:["курица","рис","томат"],diet:[],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Куриная грудка",g:140,d:"мясо"},{n:"Рис",g:70,d:"бакалея"},{n:"Томатный соус",g:80,d:"бакалея"},{n:"Лук репчатый",g:30,d:"овощи"}],emoji:"🍗"},
  {id:148,name:"Овощное рагу с нутом",meal:"обед",kcal:320,p:14,f:8,c:48,time:35,cost:1,tags:["рагу","нут","овощи","веган"],diet:["vegetarian","vegan","gluten_free"],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Нут",g:80,d:"бакалея"},{n:"Кабачки",g:80,d:"овощи"},{n:"Перец болгарский",g:60,d:"овощи"},{n:"Помидоры",g:80,d:"овощи"}],emoji:"🍲"},
  {id:149,name:"Перловый суп с говядиной",meal:"обед",kcal:310,p:20,f:10,c:32,time:55,cost:1,tags:["суп","перловка","говядина"],diet:[],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Говядина",g:80,d:"мясо"},{n:"Перловка",g:40,d:"бакалея"},{n:"Морковь",g:40,d:"овощи"},{n:"Картофель",g:60,d:"овощи"},{n:"Лук",g:30,d:"овощи",pack:1}],emoji:"🥣"},
  {id:150,name:"Лапша вок с курицей",meal:"обед",kcal:470,p:30,f:14,c:52,time:25,cost:2,tags:["лапша","курица","азиатская"],diet:[],allergens:["глютен","соя"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Лапша",g:80,d:"бакалея"},{n:"Куриная грудка",g:120,d:"мясо"},{n:"Перец болгарский",g:50,d:"овощи"},{n:"Соевый соус",g:15,d:"бакалея"}],emoji:"🍜"},
  {id:151,name:"Запечённая курица с картофелем",meal:"ужин",kcal:480,p:36,f:16,c:42,time:50,cost:2,tags:["курица","картофель","духовка"],diet:["gluten_free"],allergens:[],dislikes:[],kitchen:["духовка"],ingredients:[{n:"Куриная грудка",g:150,d:"мясо"},{n:"Картофель",g:150,d:"овощи"},{n:"Масло растительное",g:10,d:"бакалея"}],emoji:"🍗"},
  {id:152,name:"Рыба в кляре с салатом",meal:"ужин",kcal:420,p:30,f:18,c:28,time:30,cost:2,tags:["рыба","жареное","салат"],diet:[],allergens:["рыба","яйца","глютен"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Треска",g:150,d:"мясо"},{n:"Яйцо",g:25,d:"молочное"},{n:"Мука",g:20,d:"бакалея"},{n:"Салат листовой",g:50,d:"овощи"}],emoji:"🐟"},
  {id:153,name:"Овощи гриль с фетой",meal:"ужин",kcal:310,p:12,f:20,c:22,time:30,cost:2,tags:["овощи","сыр","гриль"],diet:["vegetarian","gluten_free"],allergens:["лактоза"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Кабачки",g:100,d:"овощи"},{n:"Перец болгарский",g:80,d:"овощи"},{n:"Баклажаны",g:80,d:"овощи"},{n:"Фета",g:50,d:"молочное"}],emoji:"🧀"},
  {id:154,name:"Индейка тушёная с капустой",meal:"ужин",kcal:360,p:32,f:12,c:22,time:40,cost:2,tags:["индейка","капуста","тушёное"],diet:["gluten_free"],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Индейка",g:130,d:"мясо"},{n:"Капуста белокочанная",g:150,d:"овощи"},{n:"Морковь",g:40,d:"овощи"},{n:"Лук репчатый",g:30,d:"овощи"}],emoji:"🦃"},
  {id:155,name:"Омлет с сыром на ужин",meal:"ужин",kcal:340,p:22,f:26,c:6,time:15,cost:1,tags:["яйца","сыр","быстро"],diet:["vegetarian","gluten_free"],allergens:["яйца","лактоза"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Яйца",g:120,d:"молочное"},{n:"Сыр полутвёрдый",g:40,d:"молочное"},{n:"Зелень",g:10,d:"овощи"}],emoji:"🍳"},
  {id:156,name:"Креветки с чесноком и рисом",meal:"ужин",kcal:400,p:28,f:12,c:42,time:25,cost:3,tags:["креветки","рис","чеснок"],diet:[],allergens:["морепродукты"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Креветки",g:150,d:"мясо"},{n:"Рис",g:70,d:"бакалея"},{n:"Чеснок",g:10,d:"овощи"},{n:"Масло растительное",g:10,d:"бакалея"}],emoji:"🦐"},
  {id:157,name:"Фаршированные кабачки",meal:"ужин",kcal:380,p:22,f:14,c:36,time:45,cost:2,tags:["кабачки","фарш","духовка"],diet:[],allergens:[],dislikes:[],kitchen:["духовка","плита"],ingredients:[{n:"Кабачки",g:200,d:"овощи"},{n:"Фарш говяжий",g:100,d:"мясо"},{n:"Рис",g:30,d:"бакалея"},{n:"Лук репчатый",g:30,d:"овощи"}],emoji:"🥒"},
  {id:158,name:"Тофу с овощами в соусе",meal:"ужин",kcal:300,p:18,f:14,c:24,time:25,cost:2,tags:["тофу","овощи","веган"],diet:["vegetarian","vegan","gluten_free"],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Тофу",g:150,d:"бакалея"},{n:"Брокколи",g:100,d:"овощи"},{n:"Соевый соус",g:15,d:"бакалея"},{n:"Перец болгарский",g:50,d:"овощи"}],emoji:"🥡"},
  {id:159,name:"Куриные шашлычки с овощами",meal:"ужин",kcal:390,p:34,f:14,c:20,time:35,cost:2,tags:["курица","овощи","духовка"],diet:["gluten_free"],allergens:[],dislikes:[],kitchen:["духовка"],ingredients:[{n:"Куриная грудка",g:150,d:"мясо"},{n:"Перец болгарский",g:80,d:"овощи"},{n:"Кабачки",g:80,d:"овощи"}],emoji:"🍢"},
  {id:160,name:"Творог с зеленью и огурцом",meal:"ужин",kcal:260,p:22,f:12,c:12,time:5,cost:1,tags:["творог","лёгкое","быстро"],diet:["vegetarian","gluten_free"],allergens:["лактоза"],dislikes:[],kitchen:[],ingredients:[{n:"Творог",g:180,d:"молочное"},{n:"Огурцы",g:80,d:"овощи"},{n:"Зелень",g:15,d:"овощи"}],emoji:"🧀"},
  {id:161,name:"Сёмга на подушке из шпината",meal:"ужин",kcal:410,p:34,f:26,c:6,time:25,cost:3,tags:["рыба","шпинат","запечённое"],diet:["gluten_free"],allergens:["рыба"],dislikes:[],kitchen:["духовка"],ingredients:[{n:"Лосось",g:150,d:"мясо"},{n:"Шпинат",g:80,d:"овощи"},{n:"Лимон",g:15,d:"овощи"}],emoji:"🐟"},
  {id:162,name:"Гречка с грибной подливой",meal:"ужин",kcal:380,p:12,f:12,c:54,time:30,cost:1,tags:["гречка","грибы"],diet:["vegetarian"],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Гречка",g:80,d:"бакалея"},{n:"Грибы",g:120,d:"овощи"},{n:"Лук репчатый",g:40,d:"овощи"},{n:"Сметана",g:30,d:"молочное"}],emoji:"🍄"},
  {id:163,name:"Котлеты рыбные с пюре",meal:"ужин",kcal:440,p:28,f:14,c:42,time:40,cost:2,tags:["рыба","котлеты","пюре"],diet:[],allergens:["рыба","яйца","глютен"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Фарш рыбный",g:150,d:"мясо"},{n:"Картофель",g:180,d:"овощи"},{n:"Яйцо",g:25,d:"молочное"},{n:"Лук репчатый",g:30,d:"овощи"}],emoji:"🐟"},
  {id:164,name:"Рататуй с киноа",meal:"ужин",kcal:320,p:10,f:12,c:44,time:40,cost:2,tags:["овощи","киноа","веган","духовка"],diet:["vegetarian","vegan","gluten_free"],allergens:[],dislikes:[],kitchen:[],ingredients:[{n:"Баклажаны",g:80,d:"овощи"},{n:"Кабачки",g:80,d:"овощи"},{n:"Помидоры",g:80,d:"овощи"},{n:"Киноа",g:50,d:"бакалея"}],emoji:"🍆"},
  {id:165,name:"Куриный стейк с брокколи",meal:"ужин",kcal:360,p:38,f:12,c:12,time:25,cost:2,tags:["курица","брокколи","лёгкое"],diet:["gluten_free"],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Куриная грудка",g:160,d:"мясо"},{n:"Брокколи",g:150,d:"овощи"},{n:"Масло растительное",g:8,d:"бакалея"}],emoji:"🥦"},
  {id:166,name:"Яичница с помидорами по-турецки",meal:"ужин",kcal:300,p:16,f:22,c:10,time:15,cost:1,tags:["яйца","помидоры","быстро"],diet:["vegetarian","gluten_free"],allergens:["яйца"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Яйца",g:100,d:"молочное"},{n:"Помидоры",g:150,d:"овощи"},{n:"Перец болгарский",g:50,d:"овощи"},{n:"Лук репчатый",g:30,d:"овощи"}],emoji:"🍳"},
  {id:167,name:"Тушёная фасоль с овощами",meal:"ужин",kcal:310,p:14,f:8,c:46,time:35,cost:1,tags:["фасоль","овощи","веган"],diet:["vegetarian","vegan","gluten_free"],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Фасоль",g:100,d:"бакалея"},{n:"Морковь",g:50,d:"овощи"},{n:"Лук репчатый",g:40,d:"овощи"},{n:"Томатная паста",g:25,d:"бакалея"}],emoji:"🫘"},
  {id:168,name:"Паста с креветками",meal:"ужин",kcal:480,p:28,f:14,c:52,time:25,cost:3,tags:["паста","креветки"],diet:[],allergens:["глютен","морепродукты"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Макароны",g:90,d:"бакалея"},{n:"Креветки",g:120,d:"мясо"},{n:"Чеснок",g:8,d:"овощи"},{n:"Масло растительное",g:10,d:"бакалея"}],emoji:"🦐"},
  {id:169,name:"Говядина с овощами в духовке",meal:"ужин",kcal:450,p:36,f:20,c:18,time:55,cost:3,tags:["говядина","овощи","духовка"],diet:["gluten_free"],allergens:[],dislikes:[],kitchen:["духовка"],ingredients:[{n:"Говядина",g:150,d:"мясо"},{n:"Картофель",g:100,d:"овощи"},{n:"Морковь",g:50,d:"овощи"},{n:"Лук репчатый",g:40,d:"овощи"}],emoji:"🥩"},
  {id:170,name:"Салат с печёной свёклой и фетой",meal:"ужин",kcal:280,p:10,f:18,c:18,time:55,cost:2,tags:["салат","свёкла","сыр"],diet:["vegetarian","gluten_free"],allergens:["лактоза"],dislikes:[],kitchen:["плита","духовка"],ingredients:[{n:"Свёкла",g:120,d:"овощи"},{n:"Фета",g:40,d:"молочное"},{n:"Салат листовой",g:40,d:"овощи"},{n:"Грецкий орех",g:15,d:"бакалея"}],emoji:"🟣"},
  {id:171,name:"Кефир с бананом",meal:"перекус",kcal:180,p:8,f:4,c:28,time:3,cost:1,tags:["кефир","банан","быстро"],diet:["vegetarian","gluten_free"],allergens:["лактоза"],dislikes:[],kitchen:["блендер"],ingredients:[{n:"Кефир",g:250,d:"молочное"},{n:"Банан",g:100,d:"овощи"}],emoji:"🍌"},
  {id:172,name:"Морковь с хумусом",meal:"перекус",kcal:160,p:6,f:8,c:18,time:5,cost:1,tags:["овощи","хумус","быстро"],diet:["vegetarian","vegan","gluten_free"],allergens:[],dislikes:[],kitchen:[],ingredients:[{n:"Морковь",g:100,d:"овощи"},{n:"Хумус",g:50,d:"бакалея"}],emoji:"🥕"},
  {id:173,name:"Тост с арахисовой пастой",meal:"перекус",kcal:280,p:10,f:16,c:28,time:5,cost:1,tags:["тост","арахис","быстро"],diet:["vegetarian","vegan"],allergens:["глютен","орехи"],dislikes:[],kitchen:[],ingredients:[{n:"Хлеб",g:50,d:"бакалея"},{n:"Арахисовая паста",g:30,d:"бакалея"}],emoji:"🥜"},
  {id:174,name:"Йогурт с ягодами",meal:"перекус",kcal:160,p:10,f:4,c:22,time:3,cost:1,tags:["йогурт","ягоды","быстро"],diet:["vegetarian","gluten_free"],allergens:["лактоза"],dislikes:[],kitchen:[],ingredients:[{n:"Йогурт натуральный",g:150,d:"молочное"},{n:"Ягоды",g:60,d:"овощи"}],emoji:"🫐"},
  {id:175,name:"Яблоко с творогом",meal:"перекус",kcal:200,p:12,f:6,c:24,time:3,cost:1,tags:["яблоко","творог","быстро"],diet:["vegetarian","gluten_free"],allergens:["лактоза"],dislikes:[],kitchen:[],ingredients:[{n:"Яблоки",g:150,d:"овощи"},{n:"Творог",g:80,d:"молочное"}],emoji:"🍎"},
  {id:176,name:"Горсть орехов и сухофруктов",meal:"перекус",kcal:250,p:6,f:16,c:22,time:1,cost:1,tags:["орехи","сухофрукты","быстро"],diet:["vegetarian","vegan","gluten_free"],allergens:["орехи"],dislikes:[],kitchen:[],ingredients:[{n:"Смесь орехов",g:30,d:"бакалея"},{n:"Сухофрукты",g:30,d:"бакалея"}],emoji:"🥜"},
  {id:177,name:"Огурец с сыром",meal:"перекус",kcal:140,p:8,f:10,c:6,time:3,cost:1,tags:["огурец","сыр","быстро"],diet:["vegetarian","gluten_free"],allergens:["лактоза"],dislikes:[],kitchen:[],ingredients:[{n:"Огурцы",g:120,d:"овощи"},{n:"Сыр полутвёрдый",g:30,d:"молочное"}],emoji:"🥒"},
  {id:178,name:"Протеиновый коктейль на воде",meal:"перекус",kcal:140,p:25,f:2,c:6,time:3,cost:2,tags:["протеин","быстро"],diet:["gluten_free"],allergens:[],dislikes:[],kitchen:[],ingredients:[{n:"Протеиновый порошок",g:30,d:"бакалея"},{n:"Банан",g:50,d:"овощи"}],emoji:"💪"},
  {id:179,name:"Хлеб с авокадо",meal:"перекус",kcal:220,p:4,f:14,c:22,time:5,cost:1,tags:["авокадо","быстро"],diet:["vegetarian","vegan","gluten_free"],allergens:[],dislikes:[],kitchen:[],ingredients:[{n:"Авокадо",g:70,d:"овощи"},{n:"Хлеб цельнозерновой",g:30,d:"бакалея"}],emoji:"🥑"},
  {id:180,name:"Творожная паста с зеленью",meal:"перекус",kcal:180,p:16,f:10,c:6,time:8,cost:1,tags:["творог","зелень","быстро"],diet:["vegetarian","gluten_free"],allergens:["лактоза"],dislikes:[],kitchen:[],ingredients:[{n:"Творог",g:120,d:"молочное"},{n:"Зелень",g:15,d:"овощи"},{n:"Огурцы",g:40,d:"овощи"}],emoji:"🧀"},
  {id:181,name:"Банан с арахисовой пастой",meal:"перекус",kcal:260,p:8,f:14,c:30,time:2,cost:1,tags:["банан","арахис","быстро"],diet:["vegetarian","vegan","gluten_free"],allergens:["орехи"],dislikes:[],kitchen:[],ingredients:[{n:"Банан",g:120,d:"овощи"},{n:"Арахисовая паста",g:25,d:"бакалея"}],emoji:"🍌"},
  {id:182,name:"Салат из свежих овощей",meal:"перекус",kcal:80,p:2,f:4,c:10,time:7,cost:1,tags:["салат","овощи","быстро"],diet:["vegetarian","vegan","gluten_free"],allergens:[],dislikes:[],kitchen:[],ingredients:[{n:"Огурцы",g:80,d:"овощи"},{n:"Помидоры",g:80,d:"овощи"},{n:"Зелень",g:10,d:"овощи"}],emoji:"🥗"},
  {id:183,name:"Кефир с отрубями",meal:"перекус",kcal:120,p:8,f:2,c:16,time:2,cost:1,tags:["кефир","отруби","быстро"],diet:["vegetarian"],allergens:["лактоза"],dislikes:[],kitchen:[],ingredients:[{n:"Кефир",g:250,d:"молочное"},{n:"Отруби",g:20,d:"бакалея"}],emoji:"🥛"},
  {id:184,name:"Сыр и яблоко",meal:"перекус",kcal:220,p:10,f:12,c:20,time:3,cost:1,tags:["сыр","яблоко","быстро"],diet:["vegetarian","gluten_free"],allergens:["лактоза"],dislikes:[],kitchen:[],ingredients:[{n:"Сыр полутвёрдый",g:40,d:"молочное"},{n:"Яблоки",g:120,d:"овощи"}],emoji:"🧀"},
  {id:185,name:"Хумус с хлебцами",meal:"перекус",kcal:240,p:8,f:12,c:26,time:5,cost:1,tags:["хумус","хлеб","быстро"],diet:["vegetarian","vegan"],allergens:["глютен"],dislikes:[],kitchen:[],ingredients:[{n:"Хумус",g:60,d:"бакалея"},{n:"Хлеб цельнозерновой",g:40,d:"бакалея"}],emoji:"🫓"},
  {id:186,name:"Ягодный смузи на кефире",meal:"перекус",kcal:180,p:10,f:4,c:26,time:5,cost:1,tags:["смузи","ягоды","кефир"],diet:["vegetarian","gluten_free"],allergens:["лактоза"],dislikes:[],kitchen:["блендер"],ingredients:[{n:"Кефир",g:200,d:"молочное"},{n:"Ягоды",g:80,d:"овощи"},{n:"Банан",g:50,d:"овощи"}],emoji:"🥤"},
  {id:187,name:"Варёное яйцо с овощами",meal:"перекус",kcal:160,p:12,f:10,c:4,time:10,cost:1,tags:["яйца","овощи","быстро"],diet:["vegetarian","gluten_free"],allergens:["яйца"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Яйца",g:50,d:"молочное"},{n:"Огурцы",g:60,d:"овощи"},{n:"Помидоры",g:60,d:"овощи"}],emoji:"🥚"},
  {id:188,name:"Творог 5% с мёдом",meal:"перекус",kcal:200,p:16,f:8,c:18,time:2,cost:1,tags:["творог","мёд","быстро"],diet:["vegetarian","gluten_free"],allergens:["лактоза"],dislikes:[],kitchen:[],ingredients:[{n:"Творог",g:150,d:"молочное"},{n:"Мёд",g:20,d:"бакалея"}],emoji:"🍯"},
  {id:189,name:"Ореховый микс",meal:"перекус",kcal:220,p:6,f:18,c:10,time:1,cost:1,tags:["орехи","быстро"],diet:["vegetarian","vegan","gluten_free"],allergens:["орехи"],dislikes:[],kitchen:[],ingredients:[{n:"Смесь орехов",g:35,d:"бакалея"}],emoji:"🥜"},
  {id:190,name:"Галеты с сыром",meal:"перекус",kcal:240,p:10,f:12,c:24,time:5,cost:1,tags:["сыр","быстро"],diet:["vegetarian"],allergens:["лактоза","глютен"],dislikes:[],kitchen:[],ingredients:[{n:"Печенье",g:40,d:"бакалея"},{n:"Сыр полутвёрдый",g:40,d:"молочное"}],emoji:"🍪"},
  {id:191,name:"Борщ вегетарианский",meal:"обед",kcal:220,p:8,f:8,c:32,time:45,cost:1,tags:["суп","борщ","веган"],diet:["vegetarian","vegan"],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Свёкла",g:80,d:"овощи"},{n:"Капуста белокочанная",g:80,d:"овощи"},{n:"Картофель",g:60,d:"овощи"},{n:"Морковь",g:40,d:"овощи"},{n:"Томатная паста",g:15,d:"бакалея"},{n:"Лук",g:30,d:"овощи",pack:1}],emoji:"🍲"},
  {id:192,name:"Куриный стейк с гречкой",meal:"обед",kcal:450,p:38,f:12,c:42,time:35,cost:2,tags:["курица","гречка"],diet:["gluten_free"],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Куриная грудка",g:150,d:"мясо"},{n:"Гречка",g:70,d:"бакалея"},{n:"Огурцы",g:50,d:"овощи"}],emoji:"🍗"},
  {id:193,name:"Омлет с кабачком",meal:"завтрак",kcal:280,p:16,f:18,c:12,time:15,cost:1,tags:["яйца","кабачок","быстро"],diet:["vegetarian","gluten_free"],allergens:["яйца"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Яйца",g:100,d:"молочное"},{n:"Кабачки",g:100,d:"овощи"},{n:"Зелень",g:10,d:"овощи"}],emoji:"🥒"},
  {id:194,name:"Паста песто с курицей",meal:"обед",kcal:500,p:32,f:18,c:48,time:25,cost:2,tags:["паста","курица"],diet:[],allergens:["глютен"],dislikes:[],kitchen:["плита","блендер"],ingredients:[{n:"Макароны",g:90,d:"бакалея"},{n:"Куриная грудка",g:120,d:"мясо"},{n:"Зелень",g:30,d:"овощи"},{n:"Сыр полутвёрдый",g:20,d:"молочное"}],emoji:"🍝"},
  {id:195,name:"Суп-пюре из тыквы",meal:"обед",kcal:200,p:6,f:10,c:24,time:30,cost:1,tags:["суп","тыква","лёгкое"],diet:["vegetarian","gluten_free"],allergens:["лактоза"],dislikes:[],kitchen:["плита","блендер"],ingredients:[{n:"Тыква",g:200,d:"овощи"},{n:"Картофель",g:50,d:"овощи"},{n:"Сливки",g:40,d:"молочное"},{n:"Лук репчатый",g:30,d:"овощи"}],emoji:"🎃"},
  {id:196,name:"Тефтели в томатном соусе с рисом",meal:"обед",kcal:480,p:28,f:16,c:52,time:40,cost:2,tags:["тефтели","рис","фарш"],diet:[],allergens:["яйца"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Фарш говяжий",g:120,d:"мясо"},{n:"Рис",g:70,d:"бакалея"},{n:"Яйцо",g:25,d:"молочное"},{n:"Томатный соус",g:80,d:"бакалея"}],emoji:"🍖"},
  {id:197,name:"Запечённый лосось с картофелем",meal:"ужин",kcal:480,p:34,f:24,c:28,time:38,cost:3,tags:["рыба","картофель","духовка"],diet:["gluten_free"],allergens:["рыба"],dislikes:[],kitchen:["духовка"],ingredients:[{n:"Лосось",g:150,d:"мясо"},{n:"Картофель",g:150,d:"овощи"},{n:"Лимон",g:15,d:"овощи"}],emoji:"🐟"},
  {id:198,name:"Кабачковые оладьи со сметаной",meal:"ужин",kcal:340,p:12,f:16,c:36,time:25,cost:1,tags:["кабачок","оладьи"],diet:["vegetarian"],allergens:["яйца","глютен","лактоза"],dislikes:[],kitchen:["плита"],ingredients:[{n:"Кабачки",g:150,d:"овощи"},{n:"Яйцо",g:50,d:"молочное"},{n:"Мука",g:40,d:"бакалея"},{n:"Сметана",g:30,d:"молочное"}],emoji:"🥞"},
  {id:199,name:"Куриный суп с рисом",meal:"обед",kcal:300,p:24,f:8,c:32,time:40,cost:1,tags:["суп","курица","рис"],diet:[],allergens:[],dislikes:[],kitchen:["плита"],ingredients:[{n:"Куриная грудка",g:100,d:"мясо"},{n:"Рис",g:40,d:"бакалея"},{n:"Морковь",g:40,d:"овощи"},{n:"Лук репчатый",g:30,d:"овощи"}],emoji:"🍜"},
  {id:200,name:"Салат греческий с киноа",meal:"ужин",kcal:340,p:12,f:16,c:36,time:20,cost:2,tags:["салат","киноа","сыр","греческая"],diet:["vegetarian","gluten_free"],allergens:["лактоза"],dislikes:[],kitchen:["плита"],cuisine:"греческая",ingredients:[{n:"Киноа",g:50,d:"бакалея"},{n:"Огурцы",g:60,d:"овощи"},{n:"Помидоры",g:80,d:"овощи"},{n:"Фета",g:40,d:"молочное"},{n:"Маслины",g:20,d:"бакалея"}],emoji:"🫒"}
];

// ===================== EXTRA DISHES (soft integration) =====================
// Popular dishes from expanded world menu, not duplicating core 1–200.
const EXTRA_DISHES = [
  {id:201,name:"Солянка мясная",meal:"обед",kcal:380,p:22,f:18,c:28,time:50,cost:2,tags:["суп","мясо","русская","солёное"],diet:[],allergens:[],dislikes:["красное мясо"],kitchen:["плита"],cuisine:"русская",ingredients:[{n:"Говядина",g:80,d:"мясо",pack:500},{n:"Колбаса варёная",g:40,d:"мясо",pack:300},{n:"Огурцы солёные",g:40,d:"овощи",pack:1},{n:"Лук",g:40,d:"овощи",pack:1},{n:"Томатная паста",g:20,d:"бакалея",pack:1}],emoji:"🍲"},
  {id:202,name:"Уха из красной рыбы",meal:"обед",kcal:320,p:28,f:12,c:18,time:40,cost:3,tags:["суп","рыба","русская"],diet:["gluten_free","lactose_free"],allergens:["рыба"],dislikes:[],kitchen:["плита"],cuisine:"русская",ingredients:[{n:"Лосось",g:120,d:"мясо",pack:300},{n:"Картофель",g:100,d:"овощи",pack:1},{n:"Морковь",g:40,d:"овощи",pack:1},{n:"Лук",g:40,d:"овощи",pack:1}],emoji:"🐟"},
  {id:203,name:"Окрошка на кефире",meal:"обед",kcal:280,p:14,f:10,c:30,time:25,cost:1,tags:["суп","холодное","русская","лето"],diet:["vegetarian"],allergens:["лактоза"],dislikes:[],kitchen:[],cuisine:"русская",ingredients:[{n:"Кефир",g:250,d:"молочное",pack:900},{n:"Картофель",g:80,d:"овощи",pack:1},{n:"Огурец",g:80,d:"овощи",pack:1},{n:"Яйцо",g:50,d:"молочное",pack:10},{n:"Укроп",g:10,d:"овощи",pack:1}],emoji:"🥣"},
  {id:204,name:"Пельмени домашние",meal:"обед",kcal:480,p:24,f:18,c:52,time:35,cost:2,tags:["мясо","тесто","русская","варёное"],diet:[],allergens:["глютен","яйца"],dislikes:["свинина"],kitchen:["плита"],cuisine:"русская",ingredients:[{n:"Пельмени",g:250,d:"бакалея",pack:900},{n:"Сметана",g:30,d:"молочное",pack:300},{n:"Масло сливочное",g:10,d:"молочное",pack:180}],emoji:"🥟"},
  {id:205,name:"Вареники с картошкой",meal:"ужин",kcal:420,p:12,f:14,c:62,time:40,cost:1,tags:["тесто","картофель","украинская","варёное"],diet:["vegetarian"],allergens:["глютен"],dislikes:[],kitchen:["плита"],cuisine:"украинская",ingredients:[{n:"Мука",g:100,d:"бакалея",pack:1000},{n:"Картофель",g:150,d:"овощи",pack:1},{n:"Лук",g:40,d:"овощи",pack:1},{n:"Масло растительное",g:15,d:"бакалея",pack:1000}],emoji:"🥟"},
  {id:206,name:"Драники со сметаной",meal:"ужин",kcal:400,p:10,f:18,c:48,time:30,cost:1,tags:["картофель","жареное","белорусская"],diet:["vegetarian"],allergens:["яйца","лактоза"],dislikes:[],kitchen:["плита"],cuisine:"белорусская",ingredients:[{n:"Картофель",g:250,d:"овощи",pack:1},{n:"Яйцо",g:50,d:"молочное",pack:10},{n:"Мука",g:20,d:"бакалея",pack:1000},{n:"Сметана",g:40,d:"молочное",pack:300}],emoji:"🥞"},
  {id:207,name:"Голубцы тушёные",meal:"обед",kcal:420,p:26,f:16,c:38,time:70,cost:2,tags:["капуста","фарш","русская","тушёное"],diet:[],allergens:[],dislikes:[],kitchen:["плита"],cuisine:"русская",ingredients:[{n:"Капуста белокочанная",g:200,d:"овощи",pack:1},{n:"Фарш куриный",g:120,d:"мясо",pack:500},{n:"Рис",g:40,d:"бакалея",pack:900},{n:"Томатная паста",g:30,d:"бакалея",pack:1},{n:"Сметана",g:30,d:"молочное",pack:300}],emoji:"🥬"},
  {id:208,name:"Винегрет",meal:"перекус",kcal:220,p:4,f:12,c:24,time:30,cost:1,tags:["салат","овощи","русская","холодное"],diet:["vegan","lactose_free","gluten_free"],allergens:[],dislikes:[],kitchen:["плита"],cuisine:"русская",ingredients:[{n:"Свёкла",g:80,d:"овощи",pack:1},{n:"Картофель",g:80,d:"овощи",pack:1},{n:"Морковь",g:40,d:"овощи",pack:1},{n:"Огурцы солёные",g:40,d:"овощи",pack:1},{n:"Масло растительное",g:15,d:"бакалея",pack:1000}],emoji:"🥗"},
  {id:209,name:"Оливье",meal:"перекус",kcal:320,p:12,f:22,c:18,time:35,cost:2,tags:["салат","русская","праздничное"],diet:[],allergens:["яйца"],dislikes:[],kitchen:["плита"],cuisine:"русская",ingredients:[{n:"Картофель",g:80,d:"овощи",pack:1},{n:"Морковь",g:40,d:"овощи",pack:1},{n:"Яйцо",g:50,d:"молочное",pack:10},{n:"Колбаса варёная",g:60,d:"мясо",pack:300},{n:"Горошек зелёный",g:40,d:"бакалея",pack:400},{n:"Майонез",g:30,d:"бакалея",pack:400}],emoji:"🥗"},
  {id:210,name:"Тефтели в сметанном соусе",meal:"ужин",kcal:440,p:30,f:22,c:28,time:45,cost:2,tags:["фарш","сметана","русская"],diet:[],allergens:["лактоза","яйца"],dislikes:[],kitchen:["плита"],cuisine:"русская",ingredients:[{n:"Фарш куриный",g:150,d:"мясо",pack:500},{n:"Рис",g:30,d:"бакалея",pack:900},{n:"Сметана",g:60,d:"молочное",pack:300},{n:"Лук",g:40,d:"овощи",pack:1},{n:"Яйцо",g:25,d:"молочное",pack:10}],emoji:"🍖"},
  {id:211,name:"Спагетти болоньезе",meal:"обед",kcal:520,p:28,f:18,c:58,time:40,cost:2,tags:["паста","фарш","итальянская"],diet:[],allergens:["глютен"],dislikes:["красное мясо"],kitchen:["плита"],cuisine:"итальянская",ingredients:[{n:"Спагетти",g:90,d:"бакалея",pack:450},{n:"Фарш говяжий",g:120,d:"мясо",pack:500},{n:"Помидор",g:150,d:"овощи",pack:1},{n:"Лук",g:40,d:"овощи",pack:1},{n:"Чеснок",g:5,d:"овощи",pack:1}],emoji:"🍝"},
  {id:212,name:"Паста карбонара",meal:"ужин",kcal:560,p:24,f:28,c:50,time:25,cost:2,tags:["паста","бекон","итальянская","быстро"],diet:[],allergens:["глютен","яйца","лактоза"],dislikes:["свинина"],kitchen:["плита"],cuisine:"итальянская",ingredients:[{n:"Спагетти",g:90,d:"бакалея",pack:450},{n:"Бекон",g:60,d:"мясо",pack:200},{n:"Яйцо",g:50,d:"молочное",pack:10},{n:"Сыр пармезан",g:30,d:"молочное",pack:200}],emoji:"🍝"},
  {id:213,name:"Лазанья мясная",meal:"обед",kcal:580,p:32,f:26,c:48,time:70,cost:3,tags:["паста","фарш","итальянская","духовка"],diet:[],allergens:["глютен","лактоза"],dislikes:["красное мясо"],kitchen:["духовка","плита"],cuisine:"итальянская",ingredients:[{n:"Листы лазаньи",g:80,d:"бакалея",pack:250},{n:"Фарш говяжий",g:120,d:"мясо",pack:500},{n:"Сыр",g:60,d:"молочное",pack:200},{n:"Молоко",g:100,d:"молочное",pack:1000},{n:"Томатная паста",g:40,d:"бакалея",pack:1}],emoji:"🍝"},
  {id:214,name:"Рататуй",meal:"ужин",kcal:260,p:6,f:14,c:28,time:50,cost:1,tags:["овощи","французская","запечённое","вегетарианское"],diet:["vegan","lactose_free","gluten_free"],allergens:[],dislikes:[],kitchen:["духовка"],cuisine:"французская",ingredients:[{n:"Баклажан",g:100,d:"овощи",pack:1},{n:"Цукини",g:100,d:"овощи",pack:1},{n:"Помидор",g:120,d:"овощи",pack:1},{n:"Перец болгарский",g:80,d:"овощи",pack:1},{n:"Масло растительное",g:20,d:"бакалея",pack:1000}],emoji:"🍆"},
  {id:215,name:"Луковый суп",meal:"обед",kcal:300,p:12,f:12,c:32,time:45,cost:1,tags:["суп","французская","лук"],diet:["vegetarian"],allergens:["глютен","лактоза"],dislikes:[],kitchen:["плита"],cuisine:"французская",ingredients:[{n:"Лук",g:200,d:"овощи",pack:1},{n:"Хлеб",g:40,d:"бакалея",pack:1},{n:"Сыр",g:40,d:"молочное",pack:200},{n:"Масло сливочное",g:15,d:"молочное",pack:180}],emoji:"🧅"},
  {id:216,name:"Омлет испанский",meal:"завтрак",kcal:380,p:18,f:22,c:24,time:30,cost:1,tags:["яйца","картофель","испанская"],diet:["vegetarian","gluten_free"],allergens:["яйца"],dislikes:[],kitchen:["плита"],cuisine:"испанская",ingredients:[{n:"Яйца",g:120,d:"молочное",pack:10},{n:"Картофель",g:150,d:"овощи",pack:1},{n:"Лук",g:40,d:"овощи",pack:1},{n:"Масло растительное",g:20,d:"бакалея",pack:1000}],emoji:"🍳"},
  {id:217,name:"Греческий салат",meal:"перекус",kcal:280,p:10,f:22,c:12,time:15,cost:2,tags:["салат","греческая","фета","быстро"],diet:["vegetarian","gluten_free"],allergens:["лактоза"],dislikes:[],kitchen:[],cuisine:"греческая",ingredients:[{n:"Огурец",g:80,d:"овощи",pack:1},{n:"Помидор",g:100,d:"овощи",pack:1},{n:"Фета",g:50,d:"молочное",pack:200},{n:"Маслины",g:30,d:"бакалея",pack:300},{n:"Масло растительное",g:15,d:"бакалея",pack:1000}],emoji:"🥗"},
  {id:218,name:"Мусака",meal:"обед",kcal:480,p:26,f:28,c:28,time:70,cost:2,tags:["баклажан","фарш","греческая","духовка"],diet:[],allergens:["лактоза","глютен"],dislikes:["красное мясо"],kitchen:["духовка","плита"],cuisine:"греческая",ingredients:[{n:"Баклажан",g:150,d:"овощи",pack:1},{n:"Фарш говяжий",g:120,d:"мясо",pack:500},{n:"Помидор",g:80,d:"овощи",pack:1},{n:"Сыр",g:40,d:"молочное",pack:200},{n:"Молоко",g:80,d:"молочное",pack:1000}],emoji:"🍆"},
  {id:219,name:"Хачапури по-имеретински",meal:"ужин",kcal:520,p:22,f:26,c:48,time:50,cost:2,tags:["выпечка","сыр","грузинская"],diet:["vegetarian"],allergens:["глютен","лактоза","яйца"],dislikes:[],kitchen:["духовка"],cuisine:"грузинская",ingredients:[{n:"Мука",g:120,d:"бакалея",pack:1000},{n:"Сыр сулугуни",g:120,d:"молочное",pack:300},{n:"Яйцо",g:25,d:"молочное",pack:10},{n:"Масло сливочное",g:20,d:"молочное",pack:180}],emoji:"🧀"},
  {id:220,name:"Харчо",meal:"обед",kcal:400,p:26,f:16,c:36,time:55,cost:2,tags:["суп","говядина","грузинская","острое"],diet:["gluten_free","lactose_free"],allergens:[],dislikes:["красное мясо"],kitchen:["плита"],cuisine:"грузинская",ingredients:[{n:"Говядина",g:120,d:"мясо",pack:500},{n:"Рис",g:40,d:"бакалея",pack:900},{n:"Лук",g:40,d:"овощи",pack:1},{n:"Томатная паста",g:30,d:"бакалея",pack:1},{n:"Чеснок",g:10,d:"овощи",pack:1}],emoji:"🍲"},
  {id:221,name:"Лобио",meal:"ужин",kcal:340,p:16,f:12,c:42,time:40,cost:1,tags:["фасоль","грузинская","вегетарианское"],diet:["vegan","lactose_free","gluten_free"],allergens:[],dislikes:[],kitchen:["плита"],cuisine:"грузинская",ingredients:[{n:"Фасоль красная",g:120,d:"бакалея",pack:400},{n:"Лук",g:50,d:"овощи",pack:1},{n:"Грецкий орех",g:20,d:"бакалея",pack:200},{n:"Кинза",g:10,d:"овощи",pack:1},{n:"Масло растительное",g:15,d:"бакалея",pack:1000}],emoji:"🫘"},
  {id:222,name:"Чахохбили",meal:"обед",kcal:420,p:34,f:22,c:14,time:50,cost:2,tags:["курица","грузинская","тушёное"],diet:["gluten_free","lactose_free"],allergens:[],dislikes:[],kitchen:["плита"],cuisine:"грузинская",ingredients:[{n:"Курица",g:180,d:"мясо",pack:500},{n:"Помидор",g:150,d:"овощи",pack:1},{n:"Лук",g:60,d:"овощи",pack:1},{n:"Перец болгарский",g:60,d:"овощи",pack:1}],emoji:"🍗"},
  {id:223,name:"Плов узбекский",meal:"обед",kcal:560,p:28,f:22,c:60,time:70,cost:2,tags:["рис","мясо","узбекская","плов"],diet:["gluten_free","lactose_free"],allergens:[],dislikes:["красное мясо"],kitchen:["плита"],cuisine:"узбекская",ingredients:[{n:"Рис",g:90,d:"бакалея",pack:900},{n:"Говядина",g:120,d:"мясо",pack:500},{n:"Морковь",g:80,d:"овощи",pack:1},{n:"Лук",g:50,d:"овощи",pack:1},{n:"Масло растительное",g:25,d:"бакалея",pack:1000}],emoji:"🍚"},
  {id:224,name:"Лагман",meal:"обед",kcal:480,p:26,f:14,c:58,time:50,cost:2,tags:["лапша","мясо","узбекская","суп"],diet:[],allergens:["глютен"],dislikes:["красное мясо"],kitchen:["плита"],cuisine:"узбекская",ingredients:[{n:"Лапша",g:90,d:"бакалея",pack:400},{n:"Говядина",g:100,d:"мясо",pack:500},{n:"Перец болгарский",g:60,d:"овощи",pack:1},{n:"Морковь",g:40,d:"овощи",pack:1},{n:"Лук",g:40,d:"овощи",pack:1}],emoji:"🍜"},
  {id:225,name:"Шурпа",meal:"обед",kcal:360,p:28,f:14,c:26,time:60,cost:2,tags:["суп","мясо","узбекская"],diet:["gluten_free","lactose_free"],allergens:[],dislikes:["красное мясо"],kitchen:["плита"],cuisine:"узбекская",ingredients:[{n:"Говядина",g:130,d:"мясо",pack:500},{n:"Картофель",g:100,d:"овощи",pack:1},{n:"Морковь",g:50,d:"овощи",pack:1},{n:"Лук",g:40,d:"овощи",pack:1}],emoji:"🍲"},
  {id:226,name:"Фалафель с овощами",meal:"ужин",kcal:420,p:16,f:18,c:48,time:35,cost:1,tags:["нут","ближний восток","вегетарианское","жареное"],diet:["vegan","lactose_free"],allergens:[],dislikes:[],kitchen:["плита"],cuisine:"ближний восток",ingredients:[{n:"Нут",g:100,d:"бакалея",pack:400},{n:"Лук",g:30,d:"овощи",pack:1},{n:"Петрушка",g:15,d:"овощи",pack:1},{n:"Мука",g:20,d:"бакалея",pack:1000},{n:"Масло растительное",g:25,d:"бакалея",pack:1000}],emoji:"🧆"},
  {id:227,name:"Шаурма с курицей",meal:"ужин",kcal:520,p:32,f:20,c:48,time:30,cost:2,tags:["курица","лаваш","ближний восток"],diet:[],allergens:["глютен"],dislikes:[],kitchen:["плита"],cuisine:"ближний восток",ingredients:[{n:"Куриная грудка",g:140,d:"мясо",pack:500},{n:"Лаваш",g:80,d:"бакалея",pack:1},{n:"Помидор",g:60,d:"овощи",pack:1},{n:"Огурец",g:50,d:"овощи",pack:1},{n:"Капуста белокочанная",g:40,d:"овощи",pack:1}],emoji:"🌯"},
  {id:228,name:"Курица тикка масала",meal:"обед",kcal:480,p:36,f:22,c:28,time:45,cost:2,tags:["курица","индийская","карри","соус"],diet:["gluten_free"],allergens:["лактоза"],dislikes:[],kitchen:["плита"],cuisine:"индийская",ingredients:[{n:"Куриная грудка",g:160,d:"мясо",pack:500},{n:"Йогурт",g:60,d:"молочное",pack:300},{n:"Помидор",g:100,d:"овощи",pack:1},{n:"Лук",g:40,d:"овощи",pack:1},{n:"Рис",g:70,d:"бакалея",pack:900}],emoji:"🍛"},
  {id:229,name:"Дал из чечевицы",meal:"ужин",kcal:340,p:18,f:10,c:44,time:40,cost:1,tags:["чечевица","индийская","суп","вегетарианское"],diet:["vegan","lactose_free","gluten_free"],allergens:[],dislikes:[],kitchen:["плита"],cuisine:"индийская",ingredients:[{n:"Чечевица",g:80,d:"бакалея",pack:500},{n:"Лук",g:40,d:"овощи",pack:1},{n:"Помидор",g:80,d:"овощи",pack:1},{n:"Чеснок",g:8,d:"овощи",pack:1},{n:"Масло растительное",g:15,d:"бакалея",pack:1000}],emoji:"🍲"},
  {id:230,name:"Жареный рис с овощами",meal:"ужин",kcal:400,p:12,f:12,c:62,time:25,cost:1,tags:["рис","овощи","китайская","быстро","вок"],diet:["vegetarian","lactose_free"],allergens:["яйца","соя"],dislikes:[],kitchen:["плита"],cuisine:"китайская",ingredients:[{n:"Рис",g:90,d:"бакалея",pack:900},{n:"Яйцо",g:50,d:"молочное",pack:10},{n:"Морковь",g:40,d:"овощи",pack:1},{n:"Горошек зелёный",g:40,d:"бакалея",pack:400},{n:"Соевый соус",g:15,d:"бакалея",pack:1}],emoji:"🍚"},
  {id:231,name:"Курица кунг-пао",meal:"обед",kcal:440,p:34,f:18,c:28,time:30,cost:2,tags:["курица","китайская","острое","вок"],diet:["lactose_free"],allergens:["арахис","соя"],dislikes:[],kitchen:["плита"],cuisine:"китайская",ingredients:[{n:"Куриная грудка",g:150,d:"мясо",pack:500},{n:"Перец болгарский",g:60,d:"овощи",pack:1},{n:"Арахис",g:20,d:"бакалея",pack:200},{n:"Соевый соус",g:20,d:"бакалея",pack:1},{n:"Рис",g:70,d:"бакалея",pack:900}],emoji:"🍗"},
  {id:232,name:"Мисо-суп",meal:"ужин",kcal:180,p:12,f:6,c:18,time:15,cost:2,tags:["суп","японская","лёгкое","быстро"],diet:["vegetarian","lactose_free"],allergens:["соя"],dislikes:["тофу"],kitchen:["плита"],cuisine:"японская",ingredients:[{n:"Паста мисо",g:25,d:"бакалея",pack:1},{n:"Тофу",g:80,d:"бакалея",pack:300},{n:"Водоросли нори",g:5,d:"бакалея",pack:1},{n:"Зелёный лук",g:15,d:"овощи",pack:1}],emoji:"🍜"},
  {id:233,name:"Омурайс",meal:"завтрак",kcal:420,p:18,f:16,c:50,time:25,cost:1,tags:["рис","яйца","японская"],diet:["vegetarian"],allergens:["яйца"],dislikes:[],kitchen:["плита"],cuisine:"японская",ingredients:[{n:"Рис",g:80,d:"бакалея",pack:900},{n:"Яйца",g:100,d:"молочное",pack:10},{n:"Горошек зелёный",g:30,d:"бакалея",pack:400},{n:"Кетчуп",g:20,d:"бакалея",pack:1}],emoji:"🍚"},
  {id:234,name:"Пибимпап",meal:"обед",kcal:480,p:24,f:16,c:58,time:35,cost:2,tags:["рис","овощи","корейская","яйцо"],diet:[],allergens:["яйца","соя","кунжут"],dislikes:[],kitchen:["плита"],cuisine:"корейская",ingredients:[{n:"Рис",g:90,d:"бакалея",pack:900},{n:"Говядина",g:60,d:"мясо",pack:500},{n:"Шпинат",g:40,d:"овощи",pack:100},{n:"Морковь",g:40,d:"овощи",pack:1},{n:"Яйцо",g:50,d:"молочное",pack:10}],emoji:"🍚"},
  {id:235,name:"Пад тай с курицей",meal:"ужин",kcal:460,p:28,f:14,c:54,time:30,cost:2,tags:["лапша","курица","тайская","вок"],diet:["lactose_free"],allergens:["яйца","арахис","соя"],dislikes:[],kitchen:["плита"],cuisine:"тайская",ingredients:[{n:"Рисовая лапша",g:80,d:"бакалея",pack:400},{n:"Куриная грудка",g:120,d:"мясо",pack:500},{n:"Яйцо",g:50,d:"молочное",pack:10},{n:"Ростки сои",g:40,d:"овощи",pack:1},{n:"Арахис",g:15,d:"бакалея",pack:200}],emoji:"🍜"},
  {id:236,name:"Том ям",meal:"обед",kcal:280,p:18,f:12,c:20,time:35,cost:3,tags:["суп","тайская","острое","креветки"],diet:["gluten_free","lactose_free"],allergens:["морепродукты"],dislikes:[],kitchen:["плита"],cuisine:"тайская",ingredients:[{n:"Креветки",g:100,d:"мясо",pack:300},{n:"Шампиньоны",g:60,d:"овощи",pack:300},{n:"Лимон",g:20,d:"овощи",pack:1},{n:"Кокосовое молоко",g:80,d:"бакалея",pack:400},{n:"Перец чили",g:5,d:"овощи",pack:1}],emoji:"🍲"},
  {id:237,name:"Тако с курицей",meal:"ужин",kcal:440,p:30,f:16,c:42,time:25,cost:2,tags:["курица","мексиканская","лепёшка"],diet:[],allergens:["глютен"],dislikes:[],kitchen:["плита"],cuisine:"мексиканская",ingredients:[{n:"Куриная грудка",g:130,d:"мясо",pack:500},{n:"Тортилья",g:60,d:"бакалея",pack:1},{n:"Помидор",g:60,d:"овощи",pack:1},{n:"Лук",g:30,d:"овощи",pack:1},{n:"Салат",g:30,d:"овощи",pack:1}],emoji:"🌮"},
  {id:238,name:"Чили кон карне",meal:"обед",kcal:420,p:28,f:16,c:36,time:50,cost:2,tags:["фарш","фасоль","мексиканская","острое"],diet:["gluten_free","lactose_free"],allergens:[],dislikes:["красное мясо"],kitchen:["плита"],cuisine:"мексиканская",ingredients:[{n:"Фарш говяжий",g:120,d:"мясо",pack:500},{n:"Фасоль красная",g:80,d:"бакалея",pack:400},{n:"Помидор",g:100,d:"овощи",pack:1},{n:"Лук",g:40,d:"овощи",pack:1},{n:"Перец болгарский",g:50,d:"овощи",pack:1}],emoji:"🌶️"},
  {id:239,name:"Кесадилья с курицей",meal:"перекус",kcal:400,p:28,f:18,c:30,time:20,cost:2,tags:["курица","сыр","мексиканская","быстро"],diet:[],allergens:["глютен","лактоза"],dislikes:[],kitchen:["плита"],cuisine:"мексиканская",ingredients:[{n:"Тортилья",g:60,d:"бакалея",pack:1},{n:"Куриная грудка",g:80,d:"мясо",pack:500},{n:"Сыр",g:50,d:"молочное",pack:200},{n:"Перец болгарский",g:40,d:"овощи",pack:1}],emoji:"🧀"},
  {id:240,name:"Салат Цезарь с курицей",meal:"ужин",kcal:380,p:32,f:20,c:16,time:20,cost:2,tags:["салат","курица","американская"],diet:[],allergens:["глютен","яйца","лактоза"],dislikes:[],kitchen:["плита"],cuisine:"американская",ingredients:[{n:"Куриная грудка",g:120,d:"мясо",pack:500},{n:"Салат",g:80,d:"овощи",pack:1},{n:"Сыр пармезан",g:20,d:"молочное",pack:200},{n:"Хлеб",g:30,d:"бакалея",pack:1},{n:"Яйцо",g:25,d:"молочное",pack:10}],emoji:"🥗"},
  {id:241,name:"Оладьи на кефире",meal:"завтрак",kcal:360,p:12,f:12,c:50,time:25,cost:1,tags:["выпечка","завтрак","русская"],diet:["vegetarian"],allergens:["глютен","яйца","лактоза"],dislikes:[],kitchen:["плита"],cuisine:"русская",ingredients:[{n:"Мука",g:100,d:"бакалея",pack:1000},{n:"Кефир",g:150,d:"молочное",pack:900},{n:"Яйцо",g:50,d:"молочное",pack:10},{n:"Сахар",g:15,d:"бакалея",pack:1}],emoji:"🥞"},
  {id:242,name:"Гречка по-купечески",meal:"ужин",kcal:440,p:22,f:16,c:48,time:40,cost:1,tags:["гречка","фарш","русская"],diet:["gluten_free","lactose_free"],allergens:[],dislikes:[],kitchen:["плита"],cuisine:"русская",ingredients:[{n:"Гречка",g:80,d:"бакалея",pack:900},{n:"Фарш куриный",g:100,d:"мясо",pack:500},{n:"Морковь",g:40,d:"овощи",pack:1},{n:"Лук",g:40,d:"овощи",pack:1}],emoji:"🌾"},
  {id:243,name:"Макароны по-флотски",meal:"ужин",kcal:480,p:26,f:16,c:54,time:25,cost:1,tags:["паста","фарш","быстро","русская"],diet:[],allergens:["глютен"],dislikes:[],kitchen:["плита"],cuisine:"русская",ingredients:[{n:"Макароны",g:90,d:"бакалея",pack:450},{n:"Фарш говяжий",g:120,d:"мясо",pack:500},{n:"Лук",g:50,d:"овощи",pack:1},{n:"Масло растительное",g:15,d:"бакалея",pack:1000}],emoji:"🍝"},
  {id:244,name:"Куриное филе в сметане",meal:"ужин",kcal:400,p:36,f:22,c:10,time:35,cost:2,tags:["курица","сметана","русская"],diet:["gluten_free"],allergens:["лактоза"],dislikes:[],kitchen:["плита"],cuisine:"русская",ingredients:[{n:"Куриная грудка",g:160,d:"мясо",pack:500},{n:"Сметана",g:60,d:"молочное",pack:300},{n:"Лук",g:40,d:"овощи",pack:1},{n:"Чеснок",g:5,d:"овощи",pack:1}],emoji:"🍗"},
  {id:245,name:"Тушёная картошка с мясом",meal:"обед",kcal:460,p:24,f:18,c:46,time:55,cost:1,tags:["картофель","мясо","русская","тушёное"],diet:["gluten_free","lactose_free"],allergens:[],dislikes:["красное мясо"],kitchen:["плита"],cuisine:"русская",ingredients:[{n:"Картофель",g:200,d:"овощи",pack:1},{n:"Говядина",g:100,d:"мясо",pack:500},{n:"Морковь",g:40,d:"овощи",pack:1},{n:"Лук",g:40,d:"овощи",pack:1}],emoji:"🥔"}
];
EXTRA_DISHES.forEach(d => { if (!d.cuisine) d.cuisine = "мировая"; DISHES.push(d); });

const NUTR_PER_100 = {
  "авокадо":[160,2.0,15.0,9.0],
  "апельсин":[47,0.9,0.1,12.0],
  "арахис":[567,26.0,49.0,16.0],
  "баклажан":[24,1.2,0.1,5.0],
  "банан":[89,1.1,0.3,23.0],
  "бананы":[89,1.1,0.3,23.0],
  "бекон":[500,12.0,50.0,0.0],
  "брокколи":[34,2.8,0.4,7.0],
  "булгур":[342,12.0,1.3,76.0],
  "бульон":[15,2.0,0.5,0.5],
  "вода":[0,0.0,0.0,0.0],
  "говядина":[187,26.0,9.0,0.0],
  "горошек":[81,5.0,0.4,14.0],
  "горчица":[162,6.0,11.0,6.0],
  "гранола":[450,10.0,15.0,65.0],
  "грецкий орех":[654,15.0,65.0,14.0],
  "гречка":[330,12.6,3.3,62.0],
  "грибы":[22,3.1,0.3,3.3],
  "груша":[57,0.4,0.1,15.0],
  "гуакамоле":[150,2.0,14.0,8.0],
  "зелень":[30,2.5,0.3,5.0],
  "изюм":[299,3.0,0.5,79.0],
  "индейка":[120,24.0,2.0,0.0],
  "йогурт":[60,4.0,2.0,6.0],
  "йогурт натуральный":[60,5.0,2.0,4.0],
  "кабачок":[17,1.2,0.3,3.0],
  "какао":[228,20.0,14.0,31.0],
  "капуста":[25,1.3,0.1,6.0],
  "капуста белокочанная":[25,1.3,0.1,6.0],
  "капуста пекинская":[16,1.2,0.2,3.0],
  "картофель":[77,2.0,0.1,17.0],
  "кетчуп":[100,1.0,0.1,25.0],
  "кефир":[40,3.0,1.0,4.0],
  "киноа":[368,14.0,6.0,64.0],
  "клубника":[32,0.7,0.3,8.0],
  "колбаса":[250,12.0,22.0,2.0],
  "кофе":[2,0.1,0.0,0.0],
  "креветки":[99,24.0,0.3,0.0],
  "кукуруза":[86,3.3,1.4,19.0],
  "кунжут":[573,18.0,50.0,23.0],
  "куриная грудка":[120,23.0,2.0,0.0],
  "куриное бедро":[185,18.0,11.0,0.0],
  "курица":[165,31.0,3.6,0.0],
  "кускус":[376,13.0,0.6,77.0],
  "лаваш":[275,9.0,1.0,56.0],
  "лапша":[350,12.0,1.5,72.0],
  "лапша удон":[140,4.0,0.5,28.0],
  "лимон":[29,1.1,0.3,9.0],
  "листья салата":[15,1.4,0.2,2.0],
  "лосось":[208,20.0,13.0,0.0],
  "лук":[40,1.1,0.1,9.0],
  "лук репчатый":[40,1.1,0.1,9.0],
  "майонез":[680,1.0,75.0,2.5],
  "макароны":[350,13.0,1.5,71.0],
  "малина":[52,1.2,0.7,12.0],
  "манка":[333,10.0,1.0,73.0],
  "масло оливковое":[884,0.0,100.0,0.0],
  "масло растительное":[884,0.0,100.0,0.0],
  "масло сливочное":[748,0.5,82.0,0.8],
  "мед":[304,0.3,0.0,82.0],
  "миндаль":[579,21.0,50.0,22.0],
  "минтай":[72,16.0,0.9,0.0],
  "молоко":[64,3.2,3.6,4.8],
  "морковь":[41,0.9,0.2,10.0],
  "моцарелла":[280,18.0,22.0,2.0],
  "мука":[342,10.0,1.0,74.0],
  "мука цельнозерновая":[340,13.0,2.2,72.0],
  "мюсли":[370,10.0,6.0,65.0],
  "мёд":[304,0.3,0.0,82.0],
  "нут":[164,8.9,2.6,27.0],
  "овсянка":[370,13.0,7.0,62.0],
  "овсяные хлопья":[370,13.0,7.0,62.0],
  "огурец":[15,0.8,0.1,2.5],
  "огурцы":[15,0.8,0.1,2.5],
  "оливки":[115,0.8,11.0,6.0],
  "орехи":[600,15.0,55.0,15.0],
  "паста":[350,13.0,1.5,71.0],
  "перец":[27,1.3,0.3,5.0],
  "перец болгарский":[27,1.3,0.3,5.0],
  "перец чёрный":[251,10.0,3.0,64.0],
  "перловка":[320,9.3,1.1,74.0],
  "песто":[400,5.0,40.0,6.0],
  "петрушка":[36,3.0,0.3,6.0],
  "подсолнечное масло":[884,0.0,100.0,0.0],
  "помидор":[20,0.9,0.2,3.9],
  "помидоры":[20,0.9,0.2,3.9],
  "пшено":[348,11.5,3.3,69.0],
  "редис":[16,0.7,0.1,3.4],
  "редиска":[16,0.7,0.1,3.4],
  "рикотта":[174,11.0,13.0,3.0],
  "рис":[330,7.0,1.0,74.0],
  "рис бурый":[337,7.5,2.7,73.0],
  "рисовая лапша":[192,3.5,0.5,44.0],
  "руккола":[25,2.6,0.7,3.7],
  "рыба":[120,20.0,4.0,0.0],
  "салат":[15,1.4,0.2,2.0],
  "сахар":[387,0.0,0.0,100.0],
  "свекла":[43,1.6,0.2,10.0],
  "свинина":[242,16.0,21.0,0.0],
  "свёкла":[43,1.6,0.2,10.0],
  "сельдь":[160,18.0,9.0,0.0],
  "семена льна":[534,18.0,42.0,29.0],
  "семена чиа":[486,17.0,31.0,42.0],
  "сливки":[200,2.5,20.0,3.0],
  "сливки 20%":[205,2.8,20.0,3.7],
  "сметана":[160,2.5,15.0,3.0],
  "сметана 15%":[160,2.5,15.0,3.0],
  "соевый соус":[53,8.0,0.0,5.0],
  "соль":[0,0.0,0.0,0.0],
  "сосиски":[260,11.0,23.0,1.5],
  "соус":[80,1.0,5.0,8.0],
  "специи":[20,1.0,0.5,3.0],
  "стручковая фасоль":[31,1.8,0.1,7.0],
  "сухофрукты":[250,3.0,0.5,65.0],
  "сыр":[350,25.0,27.0,0.0],
  "сыр пармезан":[431,38.0,29.0,4.0],
  "сыр твёрдый":[360,26.0,28.0,0.0],
  "сёмга":[208,20.0,13.0,0.0],
  "творог":[120,18.0,5.0,3.0],
  "творог 5%":[121,17.0,5.0,1.8],
  "творожный сыр":[200,8.0,18.0,3.0],
  "томатная паста":[82,4.0,0.5,19.0],
  "томаты черри":[20,0.9,0.2,3.9],
  "тортилья":[300,8.0,7.0,50.0],
  "тофу":[76,8.0,4.8,1.9],
  "треска":[82,18.0,0.7,0.0],
  "тунец":[130,28.0,1.0,0.0],
  "тунец консервированный":[100,20.0,1.0,0.0],
  "тыква":[26,1.0,0.1,7.0],
  "тыквенные семечки":[559,30.0,49.0,11.0],
  "укроп":[40,2.5,0.5,6.0],
  "уксус":[18,0.0,0.0,0.5],
  "фарш":[220,17.0,17.0,0.0],
  "фарш говяжий":[220,17.0,17.0,0.0],
  "фарш индейки":[150,19.0,8.0,0.0],
  "фарш куриный":[143,18.0,8.0,0.0],
  "фасоль":[123,8.0,0.5,21.0],
  "фасоль консервированная":[99,6.7,0.5,14.0],
  "фета":[264,14.0,21.0,4.0],
  "хлеб":[265,9.0,3.2,49.0],
  "хлебцы":[310,10.0,2.0,65.0],
  "хумус":[166,8.0,10.0,14.0],
  "цветная капуста":[30,2.5,0.3,5.0],
  "черника":[44,1.1,0.6,12.0],
  "чеснок":[149,6.5,0.5,30.0],
  "чечевица":[116,9.0,0.4,20.0],
  "шампиньоны":[27,4.3,1.0,1.0],
  "шоколад":[530,6.0,30.0,55.0],
  "шпинат":[23,2.9,0.4,3.6],
  "яблоки":[52,0.3,0.2,14.0],
  "яблоко":[52,0.3,0.2,14.0],
  "ягоды":[40,0.7,0.3,8.0],
  "яйца":[157,13.0,11.0,0.7],
  "яйцо":[157,13.0,11.0,0.7],
  "кабачки":[24,0.6,0.3,4.6],
  "цукини":[17,1.2,0.3,3.1],
  "спаржа":[20,2.2,0.1,3.9],
  "сухарики":[400,12,10,68],
  "протеиновый батончик":[370,30,12,35],
  "отруби":[216,15.5,4.3,26],
  "смесь орехов":[610,18,53,14],
  "куриные крылышки":[220,18,16,0],
  "листы лазаньи":[350,12,1.5,72],
  "маслины":[115,0.8,10.7,6],
  "протеиновый порошок":[380,78,6,6],
  "печенье":[410,8,11,71],
  "фарш рыбный":[110,17,4,1],
};

function nutrKey(name) {
  var n = String(name || '').toLowerCase().trim()
    .replace(/ё/g, 'е')
    .replace(/\s+/g, ' ');
  if (NUTR_PER_100[n]) return n;
  // partial match: longest key contained in name or name in key
  var best = '', bestLen = 0;
  for (var k in NUTR_PER_100) {
    if (n.indexOf(k) >= 0 || k.indexOf(n) >= 0) {
      if (k.length > bestLen) { best = k; bestLen = k.length; }
    }
  }
  if (best) return best;
  // token match
  var tokens = n.split(/[\s,./]+/).filter(Boolean);
  for (var i = 0; i < tokens.length; i++) {
    for (var k2 in NUTR_PER_100) {
      if (k2.indexOf(tokens[i]) >= 0 && tokens[i].length >= 3) {
        if (k2.length > bestLen) { best = k2; bestLen = k2.length; }
      }
    }
  }
  return best || n;
}
function nutrForIng(name) {
  var k = nutrKey(name);
  var v = NUTR_PER_100[k];
  if (v) return { kcal: v[0], p: v[1], f: v[2], c: v[3], key: k };
  // generic fallback by category hints
  if (/масло|oil/.test(k)) return { kcal: 884, p: 0, f: 100, c: 0, key: k };
  if (/сыр/.test(k)) return { kcal: 340, p: 24, f: 26, c: 1, key: k };
  if (/мясо|говяд|свин|куур|куриц|индей|фарш/.test(k)) return { kcal: 180, p: 20, f: 10, c: 0, key: k };
  if (/рыб|лосос|треск|тунец|сельд|минтай|кревет/.test(k)) return { kcal: 120, p: 20, f: 4, c: 0, key: k };
  if (/молоко|кефир|йогурт/.test(k)) return { kcal: 55, p: 3.5, f: 2.5, c: 5, key: k };
  if (/хлеб|лаваш|торт/.test(k)) return { kcal: 270, p: 9, f: 3, c: 50, key: k };
  if (/рис|греч|овсян|паста|макарон|лапш|киноа|булгур|пшен/.test(k)) return { kcal: 340, p: 11, f: 2, c: 70, key: k };
  if (/овощ|капуст|морков|огур|помид|перец|кабач|салат|зелен/.test(k)) return { kcal: 25, p: 1.2, f: 0.2, c: 5, key: k };
  if (/фрукт|яблок|банан|ягод|апельсин/.test(k)) return { kcal: 50, p: 0.5, f: 0.2, c: 12, key: k };
  if (/орех|семен|миндал|арахис/.test(k)) return { kcal: 580, p: 18, f: 50, c: 18, key: k };
  // unknown mild default
  return { kcal: 50, p: 2, f: 1, c: 6, key: k };
}
/** Calculate KBJU for one portion from ingredient grams */
function computeDishKbju(dish) {
  var kcal = 0, p = 0, f = 0, c = 0;
  var detail = [];
  (dish.ingredients || []).forEach(function(ing) {
    var g = Number(ing.g) || 0;
    if (g <= 0) return;
    var n = nutrForIng(ing.n);
    var factor = g / 100;
    var ik = n.kcal * factor;
    var ip = n.p * factor;
    var iff = n.f * factor;
    var ic = n.c * factor;
    kcal += ik; p += ip; f += iff; c += ic;
    detail.push({ n: ing.n, g: g, key: n.key, kcal: ik, p: ip, f: iff, c: ic });
  });
  return {
    kcal: Math.round(kcal),
    p: Math.round(p * 10) / 10,
    f: Math.round(f * 10) / 10,
    c: Math.round(c * 10) / 10,
    detail: detail
  };
}
function applyComputedKbju(dishes) {
  (dishes || []).forEach(function(d) {
    var kb = computeDishKbju(d);
    d.kcal = kb.kcal;
    d.p = Math.round(kb.p);
    d.f = Math.round(kb.f);
    d.c = Math.round(kb.c);
    d.kbjuDetail = kb.detail;
  });
  return dishes;
}

applyComputedKbju(DISHES);



// Auto-attach recipes and visual hues if missing

// Реальные пошаговые рецепты (отдельный справочник)
const RECIPES = {
  1: {prep:3,cook:7,servings:1,steps:["Вскипятите 180 мл воды (или молока) с щепоткой соли.","Всыпьте хлопья (60 г), убавьте огонь и варите 5–7 минут, помешивая, пока каша не загустеет.","Накройте крышкой и дайте постоять 2 минуты.","Переложите в тарелку, добавьте ягоды (80 г) и полейте мёдом (15 г)."],tip:"Для более нежной каши варите на молоке; замороженные ягоды достаточно залить кипятком на минуту."},
  2: {prep:10,cook:15,servings:1,steps:["Творог (180 г) разомните вилкой или протрите через сито; если он влажный, отожмите лишнюю сыворотку.","Добавьте яйцо (50 г), большую часть муки (30 г), щепотку соли и ½ ч. л. сахара. Замесите густое тесто, которое лепится, но не растекается.","Мокрыми руками сформируйте лепёшки толщиной около 1,5 см и обваляйте в оставшейся муке.","Обжаривайте на сковороде с 1 ст. л. масла на среднем огне по 3–4 минуты с каждой стороны до золотистой корочки.","Подавайте со сметаной (30 г)."],tip:"Много муки делает сырники «резиновыми», а влажный творог лучше отжать в сите."},
  3: {prep:5,cook:10,servings:1,steps:["Помидор (80 г) нарежьте небольшими кубиками, шпинат (40 г) промойте и грубо порубите.","Яйца (120 г) взбейте вилкой с щепоткой соли, перцем и 2 ст. л. воды.","Разогрейте масло (10 г) на среднем огне, обжарьте помидор 2 минуты, добавьте шпинат и прогрейте 1 минуту до увядания.","Залейте овощи яйцами, убавьте огонь, накройте крышкой и готовьте 4–5 минут, пока омлет не схватится. Сложите пополам и подайте."],tip:"Шпинат не нужно варить: он дойдёт до готовности за минуту от тепла сковороды."},
  4: {prep:5,cook:0,servings:1,steps:["Банан (100 г) очистите и нарежьте кружочками.","Выложите в миску творог (150 г) и сверху банан; при желании посыпьте корицей."],tip:"Для кремовой текстуры взбейте творог блендером вместе с половиной банана."},
  5: {prep:2,cook:18,servings:1,steps:["Гречку (70 г) переберите и промойте в сите.","Залейте 140 мл воды, посолите, доведите до кипения, убавьте огонь, накройте крышкой и варите 12–15 минут, пока вода не впитается.","Влейте горячее молоко (150 г) и прогрейте 2–3 минуты на слабом огне, не давая сильно кипеть.","Накройте крышкой и дайте постоять 5 минут. При желании добавьте кусочек масла."],tip:"Не помешивайте гречку во время варки, иначе она станет клейкой."},
  6: {prep:4,cook:8,servings:1,steps:["Хлеб (30 г) подсушите в тостере или на сухой сковороде по минуте с каждой стороны.","Авокадо (80 г) разрежьте, выньте косточку, мякоть разомните вилкой с щепоткой соли.","На сковороде с каплей масла разбейте яйца (100 г), накройте крышкой и жарьте 3–4 минуты, пока белок не станет белым, а желток останется жидким.","Намажьте тост авокадо, сверху положите яичницу, посолите и поперчите."],tip:"Каплю лимонного сока в авокадо добавляйте, чтобы мякоть не темнела."},
  7: {prep:10,cook:20,servings:1,steps:["Яйцо (50 г) взбейте с щепоткой соли и 1 ч. л. сахара, влейте молоко (100 г) и 100 мл воды.","Всыпьте муку (80 г), размешайте венчиком до отсутствия комков, добавьте 1 ст. л. масла. Оставьте на 10 минут.","Разогрейте сковороду, слегка смажьте маслом. Наливайте тесто тонким слоем и жарьте по 1–2 минуты с каждой стороны до румяных пятен.","Творог (80 г) разомните вилкой (можно с ложкой сахара или мёда), выложите на блин и сверните конвертом."],tip:"Тесто должно быть как жидкие сливки; если получилось густым, добавьте ложку воды."},
  8: {prep:10,cook:0,servings:1,steps:["Банан (100 г) нарежьте и, если есть время, заранее заморозьте. Ягоды (100 г) возьмите свежие или замороженные.","Взбейте банан и ягоды в блендере до гладкости, добавляя воду или молоко по 1 ст. л., чтобы смесь осталась густой.","Переложите в миску, посыпьте хлопьями (30 г) и рубленым миндалём (15 г).","Ешьте сразу, пока хлопья хрустят."],tip:"Замороженный банан делает смузи густым, как мороженое."},
  9: {prep:8,cook:2,servings:1,steps:["Хлеб (60 г) подсушите в тостере или на сухой сковороде до хруста.","Огурец (40 г) нарежьте тонкими кружками.","Выложите на тост огурец и ломтики слабосолёного лосося (60 г).","Поперчите, по желанию добавьте каплю лимонного сока или зелень."],tip:"Лосось уже солёный, поэтому тост дополнительно не солите."},
  10: {prep:5,cook:20,servings:1,steps:["Пшено (60 г) несколько раз промойте горячей водой. Тыкву (100 г) очистите и нарежьте кубиками по 1 см.","Залейте тыкву 200 мл воды, доведите до кипения и варите 5 минут.","Всыпьте пшено, посолите, накройте крышкой и варите на слабом огне 15 минут, пока вода не впитается.","Снимите с огня, накройте полотенцем на 5–10 минут и подавайте с кусочком масла."],tip:"Горячая вода при промывке убирает горечь пшена."},
  11: {prep:5,cook:0,servings:1,steps:["Выложите йогурт (150 г) в стакан или миску.","Добавьте ягоды (50 г) и сверху насыпьте гранолу (40 г)."],tip:"Гранолу кладите прямо перед едой, чтобы она оставалась хрустящей."},
  12: {prep:5,cook:10,servings:1,steps:["Налейте в неглубокую кастрюлю воды высотой 6–7 см, добавьте 1 ст. л. уксуса и держите на лёгком кипении, без бурных пузырей.","Каждое яйцо (100 г) разбейте в отдельную чашку. Закрутите воду воронкой ложкой, осторожно вылейте яйцо в центр и варите 3 минуты; достаньте шумовкой.","Хлеб (50 г) подсушите. Шпинат (30 г) на 1 минуту прогрейте на сковороде с каплей масла.","Положите на тост шпинат и яйцо пашот, посолите и поперчите."],tip:"Не солите воду для пашот: белок расползётся. Свежие яйца держат форму лучше."},
  13: {prep:8,cook:27,servings:1,steps:["Гречку (70 г) промойте, залейте 140 мл воды, посолите, доведите до кипения, накройте и варите на слабом огне 15 минут. Оставьте под крышкой на 10 минут.","Куриную грудку (150 г) разрежьте вдоль на два тонких пласта, слегка отбейте, посолите и поперчите.","На сковороде с 1 ст. л. масла обжарьте грудку по 5–6 минут с каждой стороны до золотистой корочки; внутри мясо должно быть белым. Дайте отдохнуть 3 минуты.","Огурец (80 г) нарежьте ломтиками и подайте с гречкой и курицей."],tip:"Дайте курице отдохнуть 3 минуты после сковороды: сок останется внутри."},
  14: {prep:15,cook:45,servings:1,steps:["Говядину (100 г) нарежьте кубиками 2–3 см, залейте 600 мл холодной воды, доведите до кипения, снимите пену и варите на слабом огне 30 минут.","Свёклу (80 г) и морковь (40 г) натрите на крупной тёрке, лук (30 г) мелко нарежьте. Обжарьте на 1 ст. л. масла 5 минут, добавьте томатную пасту (15 г), 2 ст. л. бульона и 1 ч. л. уксуса, тушите 3 минуты.","В бульон положите картофель (80 г) брусочками, через 7 минут добавьте тонко нашинкованную капусту (80 г) и варите ещё 7–10 минут.","Добавьте зажарку, соль, перец и лавровый лист, прогрейте 5 минут и выключите. Дайте настояться 10 минут.","Подавайте со сметаной (20 г) и зеленью."],tip:"Ложка уксуса или лимонного сока в зажарке сохраняет яркий цвет свёклы. Борщ вкуснее на следующий день."},
  15: {prep:7,cook:23,servings:1,steps:["Рис (70 г) промойте до прозрачной воды, залейте 140 мл воды, посолите, доведите до кипения и варите под крышкой на слабом огне 12–15 минут. Оставьте под крышкой на 5 минут.","Брокколи (100 г) разберите на соцветия. Лосось (150 г) посолите, поперчите, сбрызните лимонным соком.","Поставьте дуршлаг или пароварку над кипящей водой, выложите лосось и накройте крышкой. Готовьте на пару 10–12 минут, через 5 минут добавьте брокколи.","Подайте рыбу с рисом и брокколи."],tip:"Рыба готова, когда мякоть легко делится на слои и перестаёт быть прозрачной."},
  16: {prep:10,cook:30,servings:1,steps:["Индейку (150 г) нарежьте кусочками 2–3 см, посолите и поперчите. Кабачок (100 г) нарежьте полукружками, перец (80 г) — полосками, морковь (50 г) — тонкими брусочками.","В глубокой сковороде на 1 ст. л. масла обжарьте индейку 5–6 минут до светлой корочки.","Добавьте морковь, через 3 минуты — перец и кабачок, влейте 100 мл воды.","Накройте крышкой и тушите на слабом огне 15 минут до мягких овощей. Посолите по вкусу, посыпьте зеленью."],tip:"Овощи добавляйте по очереди — от самых плотных к нежным, тогда ничего не разварится."},
  17: {prep:10,cook:30,servings:1,steps:["Чечевицу (80 г) промойте. Лук (40 г) мелко нарежьте, морковь (60 г) натрите, томат (50 г) нарежьте кубиками.","В кастрюле на 1 ст. л. масла обжарьте лук с морковью 5 минут, добавьте томат и потушите 3 минуты. Добавьте щепотку зиры или куркумы.","Всыпьте чечевицу, влейте 500 мл горячей воды и доведите до кипения.","Варите на слабом огне 20 минут до мягкости, посолите в конце. Для густоты часть супа пробейте блендером."],tip:"Красная чечевица разваривается за 12–15 минут, зелёная и коричневая — за 25."},
  18: {prep:5,cook:50,servings:1,steps:["Говядину (150 г) нарежьте кубиками 2–3 см, лук (40 г) — полукольцами, картофель (200 г) — крупными дольками.","В кастрюле с толстым дном на 1 ст. л. масла обжарьте говядину 7 минут до корочки, добавьте лук и жарьте ещё 3 минуты.","Влейте 200 мл горячей воды, добавьте соль, перец и лавровый лист. Накройте и тушите на слабом огне 25 минут.","Добавьте картофель, при необходимости долейте воды до половины высоты и тушите ещё 15 минут до мягкости."],tip:"Тушите на слабом огне под крышкой: говядина становится мягкой, если не кипит бурно."},
  19: {prep:10,cook:35,servings:1,steps:["Курицу (120 г) залейте 600 мл холодной воды, доведите до кипения, снимите пену и варите на слабом огне 20 минут.","Добавьте лук (30 г) целой головкой или половинками и морковь (40 г) кружочками, лавровый лист, соль. Варите 10 минут.","Достаньте курицу, разберите на кусочки без костей и верните в кастрюлю.","Всыпьте лапшу (50 г) и варите столько, сколько указано на упаковке (обычно 5–7 минут).","Добавьте перец и зелень, подавайте горячим."],tip:"Бульон снимайте с огня до закипания лапши: она разбухает и впитывает жидкость."},
  20: {prep:8,cook:22,servings:1,steps:["Киноа (60 г) промойте в мелком сите под проточной водой 1–2 минуты. Залейте 120 мл воды, посолите, доведите до кипения и варите под крышкой на слабом огне 12–15 минут. Оставьте под крышкой на 5 минут.","У спаржи (80 г) обрежьте жёсткие концы. Треску (150 г) обсушите, посолите, поперчите, сбрызните лимонным соком.","На сковороде с 1 ст. л. масла обжарьте треску по 3–4 минуты с каждой стороны до непрозрачности; рядом обжарьте спаржу 4–5 минут.","Подайте рыбу с киноа и спаржей."],tip:"Не переваривайте треску: она теряет влагу и становится сухой."},
  21: {prep:15,cook:0,servings:1,steps:["Консервированную фасоль (100 г) промойте под водой и дайте стечь. Из банки с тунцом (100 г) слейте жидкость и разомните рыбу вилкой.","Огурец (60 г) и помидор (60 г) нарежьте кубиками.","Смешайте всё в миске, заправьте 1 ст. л. масла и лимонным соком, посолите, поперчите и добавьте зелень."],tip:"Если используете сухую фасоль, замочите её на ночь и варите 60–90 минут до мягкости."},
  22: {prep:10,cook:40,servings:1,steps:["Рис (80 г) промойте до прозрачной воды и залейте тёплой подсоленной водой на 20–30 минут.","Курицу (120 г) нарежьте кусочками 3–4 см, лук (40 г) — полукольцами, морковь (60 г) — соломкой.","В казане или толстостенной кастрюле разогрейте 2 ст. л. масла, обжарьте курицу 7 минут, добавьте лук, через 3 минуты — морковь и жарьте ещё 5 минут. Добавьте 1 ч. л. зиры, соль и перец.","Влейте 150 мл горячей воды и тушите под крышкой 10 минут.","Слейте воду с риса и выложите его ровным слоем на мясо, не перемешивая. Долейте около 140 мл горячей воды, чтобы она была на 1 см выше риса.","Когда вода выпарится, соберите рис горкой, проткните в нескольких местах, накройте крышкой и держите на минимальном огне 15 минут. Оставьте на 5–10 минут."],tip:"Рис выкладывайте сверху и не перемешивайте до конца варки — зёрна останутся рассыпчатыми."},
  23: {prep:10,cook:25,servings:1,steps:["Тофу (120 г) обсушите бумажным полотенцем и нарежьте кубиками по 2 см. Баклажан (80 г) нарежьте кубиками, посыпьте солью на 10 минут и отожмите; кабачок (100 г) и перец (60 г) нарежьте кубиками.","На сковороде с 1 ст. л. масла обжарьте тофу 6–7 минут до золотистой корочки и переложите на тарелку.","В той же сковороде обжарьте баклажан 5 минут, добавьте кабачок и перец и жарьте 3 минуты.","Влейте 100 мл воды, посолите, поперчите, накройте и тушите 8–10 минут. Верните тофу, прогрейте 2 минуты и добавьте зелень."],tip:"Солёная вода вытягивает горечь баклажана, поэтому не пропускайте этот шаг."},
  24: {prep:15,cook:25,servings:1,steps:["Хлеб (20 г) размочите в 2 ст. л. воды и отожмите. Смешайте фарш (150 г) с хлебом, яйцом (25 г), солью и перцем, хорошо вымесите.","Картофель (180 г) очистите, нарежьте, залейте холодной водой, посолите и варите 15–20 минут до мягкости.","Мокрыми руками сформируйте котлеты. Обжарьте на сковороде с 1 ст. л. масла по 3–4 минуты с каждой стороны, накройте крышкой и доведите до готовности на слабом огне 6–8 минут: внутри не должно быть розового.","Слейте воду с картофеля, разомните толкушкой с кусочком масла и небольшим количеством отвара. Подайте с котлетами."],tip:"Фарш хорошо вымешивайте и слегка отбивайте о миску: котлеты не развалятся."},
  25: {prep:10,cook:40,servings:1,steps:["Говядину (80 г) залейте 600 мл холодной воды, доведите до кипения, снимите пену и варите на слабом огне 30 минут.","Картофель (80 г) нарежьте кубиками, капусту (120 г) — тонкой соломкой, морковь (40 г) натрите, лук (30 г) мелко нарежьте.","Лук и морковь обжарьте на 1 ст. л. масла 5 минут.","В бульон положите картофель, через 7 минут добавьте капусту и варите ещё 10 минут. Добавьте зажарку, лавровый лист, соль и перец, варите 5 минут.","Дайте постоять 10 минут и подавайте с зеленью (по желанию со сметаной)."],tip:"Щи, как и борщ, вкуснее после 10–15 минут настаивания под крышкой."},
  26: {prep:8,cook:17,servings:1,steps:["Доведите до кипения большую кастрюлю подсоленной воды и отварите пасту (80 г) на минуту меньше, чем указано на упаковке. Перед сливом отлейте полстакана отвара.","Креветки (100 г) разморозьте и обсушите. Чеснок (10 г) мелко нарежьте, помидор (60 г) нарежьте кубиками.","На сковороде с 1 ст. л. масла обжарьте чеснок 30 секунд, добавьте креветки и жарьте 2–3 минуты до розового цвета. Переложите на тарелку.","В ту же сковороду выложите помидор, потушите 3 минуты, посолите и поперчите. Верните креветки.","Добавьте пасту и 3–4 ст. л. отвара, перемешайте на огне 1 минуту. Посыпьте зеленью."],tip:"Немного отвара от макарон делает соус шелковистым и помогает ему прилипнуть к пасте."},
  27: {prep:20,cook:40,servings:1,steps:["Рис (40 г) отварите 7 минут в подсоленной воде и промойте. Листья капусты (150 г) отварите в кипятке 3–5 минут до мягкости, срежьте жёсткие жилки.","Лук (30 г) мелко нарежьте. Смешайте фарш (120 г) с рисом, луком, солью и перцем.","На каждый лист выложите начинку и заверните конвертом. Уложите голубцы швом вниз в кастрюлю или утятницу.","Разведите томатную пасту (30 г) в 150 мл воды с щепоткой соли и сахара, залейте голубцы.","Накройте крышкой и тушите на слабом огне 30–35 минут (или запекайте при 180 °C). Подавайте со сметаной и зеленью."],tip:"Чтобы листья легче снимались, кочан можно заморозить на ночь и разморозить."},
  28: {prep:10,cook:10,servings:1,steps:["Куриную грудку (120 г) посолите, поперчите и обжарьте на сковороде с 1 ст. л. масла по 5–6 минут с каждой стороны до готовности. Дайте отдохнуть 3 минуты и нарежьте ломтиками.","Салат (80 г) помойте, обсушите и порвите руками. Пармезан (20 г) нарежьте стружкой.","Смешайте салат с заправкой (1 ст. л. оливкового масла, 1 ч. л. лимонного сока, щепотка соли).","Сверху выложите курицу, сухарики (30 г) и пармезан. Подавайте сразу, пока сухарики хрустят."],tip:"Соус можно сделать за минуту: оливковое масло, лимонный сок, щепотка соли и ложка йогурта."},
  29: {prep:10,cook:30,servings:1,steps:["Разогрейте духовку до 200 °C. Брокколи (150 г) разберите на соцветия.","Грудку (160 г) обсушите, посолите, поперчите и смажьте половиной масла (10 г), посыпьте паприкой.","Брокколи перемешайте с остальным маслом и солью, выложите на противень вместе с курицей.","Запекайте 22–25 минут, пока сок не станет прозрачным. Дайте мясу отдохнуть 5 минут и нарежьте."],tip:"Нарежьте курицу после отдыха, а не сразу — сок не вытечет."},
  30: {prep:10,cook:35,servings:1,steps:["Разогрейте духовку до 180 °C. Творог (200 г) разотрите вилкой или пробейте блендером до отсутствия крупных комочков.","Добавьте яйцо (50 г), манку (20 г), щепотку соли и 1–2 ст. л. сахара по вкусу. Перемешайте и оставьте на 10 минут, чтобы манка набухла.","Форму смажьте маслом и посыпьте манкой. Выложите массу и разровняйте.","Выпекайте 30–35 минут до румяной корочки. Остудите 10 минут и нарежьте."],tip:"Дайте запеканке остыть 10 минут, иначе она развалится при нарезке."},
  31: {prep:10,cook:25,servings:1,steps:["Разогрейте духовку до 200 °C. Кабачок (100 г) нарежьте полукружками, помидор (80 г) — дольками. Треску (150 г) обсушите, посолите и поперчите.","На лист фольги выложите кабачок, сверху рыбу, помидор и ломтик лимона (20 г); сбрызните 1 ч. л. масла.","Заверните фольгу герметичным конвертом, оставив сверху воздух, и положите на противень.","Запекайте 20–25 минут. Раскрывайте конверт осторожно: из него выйдет горячий пар."],tip:"Оставьте в фольге воздушную «подушку»: рыба и овощи запекаются на пару и остаются сочными."},
  32: {prep:10,cook:20,servings:1,steps:["Индейку (150 г) нарежьте на стейки толщиной 1,5–2 см, слегка отбейте, посолите и поперчите.","Обжарьте на сковороде с 1 ст. л. масла по 5–6 минут с каждой стороны, пока сок не станет прозрачным. Дайте отдохнуть 3 минуты.","Салат (80 г) порвите руками, огурец (60 г) и помидор (60 г) нарежьте, заправьте 1 ч. л. масла и лимонным соком.","Нарежьте индейку ломтиками и выложите на салат."],tip:"Индейка быстро пересыхает, поэтому не жарьте её дольше 12 минут суммарно."},
  33: {prep:5,cook:10,servings:1,steps:["Сыр (40 г) натрите на крупной тёрке, зелень (20 г) мелко нарежьте. Яйца (120 г) взбейте с солью, перцем и 2 ст. л. воды.","Разогрейте сковороду с 1 ч. л. масла на среднем огне и влейте яйца.","Когда края схватятся (через 2–3 минуты), посыпьте половину омлета сыром и зеленью и накройте крышкой на 2 минуты.","Сложите омлет пополам и сразу подайте."],tip:"Не пережаривайте омлет: он должен остаться нежным и чуть влажным внутри."},
  34: {prep:8,cook:22,servings:1,steps:["Гречку (80 г) промойте, залейте 160 мл воды, посолите, доведите до кипения, накройте и варите на слабом огне 15 минут. Оставьте под крышкой.","Грибы (120 г) нарежьте пластинками, лук (40 г) — мелкими кубиками.","На сковороде с 1 ст. л. масла обжарьте лук 3 минуты, добавьте грибы и жарьте на сильном огне 8–10 минут, пока не испарится вода и не появится румяная корочка. Посолите и поперчите.","Смешайте гречку с грибами и луком, посыпьте зеленью."],tip:"Не солите грибы в начале жарки: они выпустят воду и будут тушиться, а не жариться."},
  35: {prep:8,cook:12,servings:1,steps:["Цукини (100 г) нарежьте полукружками толщиной 0,5 см, чеснок (10 г) мелко нарежьте. Креветки (150 г) разморозьте и обсушите.","На сильном огне разогрейте сковороду с 1 ст. л. масла и обжарьте цукини 3–4 минуты до лёгкой золотистости. Переложите на тарелку.","Добавьте в сковороду немного масла, обжарьте чеснок 30 секунд, затем креветки: 2–3 минуты до розового цвета.","Верните цукини, посолите, поперчите, прогрейте минуту и подавайте."],tip:"Креветки жарят очень быстро: как только они стали розовыми и свернулись колечком, снимайте."},
  36: {prep:12,cook:23,servings:1,steps:["Половину кабачка (150 г) натрите на мелкой тёрке и отожмите, вторую половину нарежьте кубиками.","Смешайте тёртый кабачок с фаршем (140 г), яйцом (25 г), солью и перцем, вымесите и сформируйте небольшие тефтели.","На дно сковороды с 1 ст. л. масла выложите кубики кабачка, сверху тефтели, влейте 100 мл воды.","Накройте крышкой и тушите на слабом огне 18–20 минут, один раз перевернув тефтели. Внутри не должно остаться розового."],tip:"Кабачок даёт много влаги: тёртую часть всегда отжимайте, иначе тефтели не слепятся."},
  37: {prep:10,cook:15,servings:1,steps:["Тофу (150 г) разрежьте на два пласта толщиной около 1 см, промокните бумажным полотенцем, посолите, поперчите и посыпьте паприкой.","Обжарьте на сковороде с 1 ст. л. масла по 4–5 минут с каждой стороны до золотистой корочки.","Салат (80 г) порвите, авокадо (50 г) нарежьте ломтиками и сбрызните лимонным соком.","Выложите тофу на салат с авокадо."],tip:"Чем лучше вы обсушите тофу, тем лучше он обжарится."},
  38: {prep:10,cook:20,servings:1,steps:["Разогрейте духовку до 200 °C. Лосось (160 г) обсушите, посолите, поперчите, сбрызните соком лимона (20 г) и оставьте на 10 минут.","Укроп (10 г) мелко порубите и посыпьте рыбу, добавьте 1 ч. л. масла.","Выложите кожей вниз на противень с пергаментом. Запекайте 12–15 минут (для полной прожарки — 18).","Подавайте с дольками лимона."],tip:"Лосось готов, когда мякоть светлеет и легко делится на слои, но остаётся сочной."},
  39: {prep:10,cook:20,servings:1,steps:["Тыкву (150 г), морковь (60 г) и картофель (80 г) очистите и нарежьте кубиками по 2 см.","Залейте овощи 400 мл воды, посолите, доведите до кипения и варите на слабом огне 15–20 минут до мягкости.","Слейте часть отвара в отдельную чашку и пробейте овощи блендером до пюре, добавляя отвар до нужной густоты.","Прогрейте 1–2 минуты, поперчите и подайте с каплей масла или семечками."],tip:"Для кремовой текстуры оставьте часть отвара и добавляйте его по ложке при взбивании."},
  40: {prep:10,cook:45,servings:1,steps:["Говядину (140 г) нарежьте кубиками 2–3 см, лук (40 г) — полукольцами, морковь (60 г) — кружками, перец (60 г) — полосками.","В кастрюле с толстым дном на 1 ст. л. масла обжарьте говядину 7 минут до корочки, добавьте лук и морковь и жарьте ещё 5 минут.","Влейте 200 мл горячей воды, добавьте лавровый лист, соль и перец. Накройте и тушите на слабом огне 30 минут.","Добавьте болгарский перец и тушите ещё 10 минут до мягкости мяса."],tip:"Мясо тушите без кипения — тогда оно станет мягким, а не жёстким."},
  41: {prep:5,cook:7,servings:1,steps:["Доведите воду до кипения, аккуратно опустите яйца (100 г) ложкой и варите 6 минут: белок плотный, желток жидкий.","Сразу перенесите яйца в холодную воду на 1–2 минуты, так их легче чистить.","Огурец (80 г) и помидор (80 г) нарежьте дольками, посолите и поперчите.","Очистите яйца и подавайте с овощами."],tip:"Для плотного желтка варите яйца 9 минут."},
  42: {prep:8,cook:22,servings:1,steps:["Рис (70 г) промойте, залейте 140 мл воды, посолите, доведите до кипения и варите под крышкой на слабом огне 12–15 минут. Оставьте на 5 минут.","Для соуса смешайте соевый соус (15 г), 2 ст. л. воды и 1 ч. л. сахара.","Куриную грудку (140 г) нарежьте кусочками 2–3 см и обжарьте на сковороде с 1 ст. л. масла 6–7 минут до золотистого цвета.","Влейте соус и жарьте 1–2 минуты, пока он не загустеет и не покроет мясо.","Подайте курицу с рисом, посыпьте кунжутом или зелёным луком."],tip:"Не давайте соусу сильно кипеть: сахар быстро подгорает, и соус становится горьким."},
  43: {prep:2,cook:0,servings:1,steps:["Яблоко (150 г) вымойте, удалите сердцевину и нарежьте дольками.","Подайте с миндалём (20 г); орехи можно 2 минуты подсушить на сухой сковороде."],tip:"Каплей лимонного сока можно сохранить цвет яблока."},
  44: {prep:1,cook:0,servings:1,steps:["Достаньте батончик (50 г) из упаковки.","Запейте водой или несладким чаем. Лучше есть его после тренировки или между приёмами пищи, а не вместо полноценного обеда."],tip:"Выбирайте батончик с коротким составом и небольшим количеством сахара."},
  45: {prep:2,cook:0,servings:1,steps:["Налейте кефир (200 г) в стакан.","Добавьте отруби (15 г), перемешайте и оставьте на 2–3 минуты, чтобы они набухли."],tip:"Если отруби для вас в новинку, начните с 1 ч. л. и пейте больше воды в течение дня."},
  46: {prep:3,cook:0,servings:1,steps:["Зелень (15 г) вымойте, обсушите и мелко нарежьте.","Смешайте с творогом (100 г), добавьте щепотку соли и перец."],tip:"Подавайте на хлебце или с овощными палочками."},
  47: {prep:5,cook:0,servings:1,steps:["Морковь (100 г) очистите и нарежьте палочками.","Выложите хумус (40 г) в пиалу, сбрызните каплей масла и посыпьте паприкой. Макайте морковь."],tip:"Хумус можно заменить домашним: нут, лимонный сок, кунжутная паста, оливковое масло."},
  48: {prep:1,cook:0,servings:1,steps:["Отмерьте орехи (25 г) и сухофрукты (30 г) и смешайте в небольшой миске.","Ешьте не из общей пачки, чтобы не съесть больше порции."],tip:"Порция в одной горсти — это примерно 50–60 г, больше лучше не брать: продукт очень калорийный."},
  49: {prep:5,cook:10,servings:1,steps:["Хлопья (40 г) залейте 3 ст. л. воды или молока на 3 минуты. Сыр (30 г) натрите.","Добавьте к хлопьям яйцо (50 г) и щепотку соли, перемешайте до однородной массы.","Вылейте на разогретую сковороду с каплей масла, разровняйте и жарьте под крышкой 3 минуты.","Переверните, посыпьте сыром половину блина, готовьте ещё 2 минуты, пока сыр не расплавится, и сложите пополам."],tip:"Хлопья должны размякнуть заранее, иначе блин рассыплется."},
  50: {prep:3,cook:22,servings:1,steps:["Рис (60 г) промойте до прозрачной воды, залейте 120 мл воды и варите 8–10 минут до размягчения.","Влейте горячее молоко (200 г), добавьте щепотку соли и ½ ч. л. сахара. Варите на слабом огне 10–12 минут, помешивая.","Снимите с огня и оставьте под крышкой на 5 минут. Подайте с кусочком масла."],tip:"Рис на молоке легко подгорает: используйте толстое дно и помешивайте."},
  51: {prep:8,cook:0,servings:1,steps:["Огурец (50 г) натрите на мелкой тёрке и слегка отожмите. Зелень (15 г) мелко нарежьте.","Творог (150 г) разомните вилкой, смешайте с огурцом и зеленью, посолите и поперчите. Для мягкости добавьте ложку кефира.","Подайте на хлебце или с овощами."],tip:"Подходит и как закуска на хлебце, и как соус к овощам."},
  52: {prep:5,cook:0,servings:1,steps:["Яблоко (80 г) нарежьте мелкими кубиками или натрите.","Выложите в стакан слоями йогурт (150 г), яблоко и гранолу (45 г), посыпьте корицей."],tip:"Корица хорошо сочетается с яблоком и уменьшает потребность в сахаре."},
  53: {prep:10,cook:25,servings:1,steps:["Булгур (70 г) промойте, залейте 140 мл воды, посолите, доведите до кипения, накройте и варите на слабом огне 12 минут. Оставьте под крышкой на 10 минут.","Куриную грудку (160 г) разрежьте вдоль на пласты толщиной 1,5–2 см, слегка отбейте, посолите и поперчите.","Обжарьте на сковороде с 1 ст. л. масла по 5–6 минут с каждой стороны до готовности. Дайте отдохнуть 3 минуты.","Помидор (80 г) нарежьте кубиками, смешайте с булгуром и зеленью. Подайте со стейком."],tip:"Булгур не нужно варить как рис: он быстро впитывает воду и доходит под крышкой."},
  54: {prep:8,cook:22,servings:1,steps:["Картофель (80 г) нарежьте кубиками, залейте 400 мл воды, посолите и варите 10 минут.","Брокколи (200 г) разберите на соцветия, добавьте к картофелю и варите 7–8 минут до мягкости.","Влейте сливки (40 г) и пробейте блендером до однородного пюре, разбавляя отваром.","Прогрейте минуту, не доводя до кипения. Посолите, поперчите, добавьте щепотку мускатного ореха."],tip:"Не кипятите суп после добавления сливок, чтобы они не свернулись."},
  55: {prep:10,cook:30,servings:1,steps:["Киноа (60 г) промойте, залейте 120 мл воды, посолите и варите под крышкой на слабом огне 12–15 минут. Оставьте на 5 минут.","Индейку (150 г) нарежьте кусочками 2 см, перец (80 г) — полосками, кабачок (80 г) — полукружками.","На сковороде с 1 ст. л. масла обжарьте индейку 5–6 минут, добавьте перец и кабачок и жарьте 6–8 минут. Посолите и поперчите.","Смешайте с киноа и подайте."],tip:"Овощи нужно жарить на сильном огне, но недолго, чтобы они остались упругими."},
  56: {prep:10,cook:45,servings:1,steps:["Перловку (40 г) промойте. Говядину (90 г) залейте 700 мл холодной воды, доведите до кипения, снимите пену, добавьте перловку и варите на слабом огне 30 минут.","Лук (30 г) нарежьте, морковь (30 г) натрите и обжарьте на 1 ст. л. масла 5 минут. Огурцы (60 г) очистите от жёсткой кожицы, нарежьте кубиками, добавьте и тушите 5 минут с 2 ст. л. рассола.","В суп добавьте картофель (80 г) кубиками и варите 10 минут.","Добавьте зажарку, лавровый лист и перец, варите 5 минут. Посолите по вкусу.","Дайте настояться 10 минут, подавайте со сметаной и зеленью."],tip:"Солёные огурцы и рассол уже содержат соль, поэтому суп солите в самом конце."},
  57: {prep:15,cook:25,servings:1,steps:["Рис (70 г) промойте, залейте 140 мл воды, посолите, доведите до кипения и варите под крышкой 12–15 минут. Оставьте на 5 минут.","Хлеб (20 г) размочите в 2 ст. л. воды и отожмите. Смешайте фарш (150 г) с хлебом, яйцом (25 г), солью и перцем.","Сформируйте мокрыми руками котлеты толщиной около 2 см.","Обжарьте на сковороде с 1 ст. л. масла по 3–4 минуты с каждой стороны, затем накройте крышкой и доведите на слабом огне 5 минут.","Подайте с рисом."],tip:"Рыбный фарш более нежный — не делайте котлеты слишком толстыми."},
  58: {prep:10,cook:25,servings:1,steps:["Лук (40 г) мелко нарежьте, морковь (50 г) натрите, помидор (100 г) нарежьте кубиками. Консервированный нут (120 г) промойте и дайте стечь.","На сковороде с 1 ст. л. масла обжарьте лук 3 минуты, добавьте морковь и жарьте ещё 3 минуты.","Добавьте 1–2 ч. л. карри и жарьте 30 секунд. Добавьте помидор и 100 мл воды, тушите 5 минут.","Добавьте нут, посолите и тушите под крышкой 10 минут. Подайте с зеленью."],tip:"Если нут сухой, замочите на ночь и варите 60–90 минут до мягкости."},
  59: {prep:10,cook:35,servings:1,steps:["Гречку (70 г) промойте, залейте 140 мл воды, посолите, доведите до кипения, накройте и варите на слабом огне 15 минут. Оставьте на 10 минут.","Говядину (140 г) нарежьте тонкими брусочками поперёк волокон, лук (40 г) — полукольцами.","Обжарьте говядину порциями на сильном огне с 1 ст. л. масла по 2–3 минуты до корочки и переложите.","В той же сковороде обжарьте лук 4 минуты, верните мясо, влейте 100 мл воды и тушите под крышкой 15 минут.","Добавьте сметану (40 г), посолите, поперчите и прогрейте 3 минуты, не доводя до кипения. Подайте с гречкой."],tip:"Режьте говядину поперёк волокон, и она останется нежной."},
  60: {prep:5,cook:35,servings:1,steps:["Разогрейте духовку до 200 °C. Крылышки (200 г) обсушите бумажным полотенцем, посолите, поперчите, посыпьте паприкой и перемешайте с 1 ст. л. масла.","Выложите в один слой на решётку или противень с пергаментом. Запекайте 30–35 минут, перевернув через 15 минут, до золотистой корочки.","Салат (80 г) порвите, огурец (60 г) нарежьте полукружками, заправьте 1 ч. л. масла и лимонным соком.","Подайте крылышки с салатом."],tip:"Решётка помогает коже стать хрустящей снизу, но можно и на противне, перевернув крылышки."},
  61: {prep:10,cook:30,servings:1,steps:["Разогрейте духовку до 200 °C. Баклажан (80 г), кабачок (120 г) и перец (80 г) нарежьте кусками по 2–3 см.","Смешайте овощи с 1 ст. л. масла, солью, перцем и сушёными травами. Выложите на противень в один слой.","Запекайте 25 минут, один раз перемешав, пока овощи не станут мягкими с румяными краями.","Раскрошите сверху фету (50 г) и верните в духовку на 3–5 минут. Подавайте тёплыми с зеленью."],tip:"Овощи должны лежать в один слой, иначе они будут тушиться, а не запекаться."},
  62: {prep:15,cook:0,servings:1,steps:["Салат (80 г) порвите руками, помидор (80 г) и огурец (60 г) нарежьте крупными кусками.","Слейте жидкость с тунца (120 г) и разомните рыбу вилкой на крупные куски.","Смешайте всё в миске, заправьте 1 ст. л. масла и лимонным соком, посолите и поперчите."],tip:"Если тунец в масле, слейте масло; для лёгкой версии выбирайте тунец в собственном соку."},
  63: {prep:8,cook:32,servings:1,steps:["Курицу (100 г) залейте 600 мл холодной воды, доведите до кипения, снимите пену и варите на слабом огне 15 минут.","Лук (30 г) мелко нарежьте, морковь (40 г) натрите и добавьте в бульон. Варите 5 минут.","Добавьте промытый рис (40 г), соль, лавровый лист и варите 12–15 минут.","Достаньте курицу, разберите на кусочки и верните в суп. Добавьте перец и зелень."],tip:"Рис в бульоне набухает: если суп стоит долго, добавьте воды при разогреве."},
  64: {prep:10,cook:40,servings:1,steps:["Свинину (140 г) нарежьте кубиками 2–3 см, лук (40 г) — полукольцами, морковь (40 г) — соломкой, капусту (150 г) — тонкой соломкой.","Обжарьте свинину на 1 ст. л. масла 7 минут до румяной корочки, добавьте лук с морковью и жарьте ещё 5 минут.","Влейте 100 мл воды, накройте и тушите на слабом огне 15 минут.","Добавьте капусту, соль, перец и лавровый лист и тушите под крышкой 15–20 минут до мягкости."],tip:"Капусту добавляйте во второй половине тушения, чтобы она не превратилась в кашу."},
  65: {prep:8,cook:12,servings:1,steps:["Разогрейте духовку до 180 °C. Яйца (120 г) взбейте с солью, перцем и 2 ст. л. воды.","Вылейте яйца на противень или форму 20×25 см, застеленную смазанным пергаментом. Запекайте 8 минут до схватывания.","Шпинат (50 г) порубите, помидор (60 г) нарежьте мелкими кубиками и посыпьте горячий омлет.","Сверните рулетом с помощью пергамента, оставьте на 2 минуты и нарежьте."],tip:"Пергамент обязательно смажьте, иначе омлет прилипнет и порвётся при скручивании."},
  66: {prep:3,cook:0,servings:1,steps:["Грецкие орехи (20 г) грубо порубите.","Выложите творог (120 г) в миску, полейте мёдом (15 г) и посыпьте орехами."],tip:"Орехи можно слегка подсушить на сухой сковороде — вкус станет ярче."},
  67: {prep:2,cook:0,servings:1,steps:["Банан (120 г) очистите и нарежьте кружочками.","Намажьте кружочки арахисовой пастой (25 г) или выложите пасту на тарелку и макайте в неё банан."],tip:"Выбирайте арахисовую пасту без сахара и пальмового масла."},
  68: {prep:10,cook:0,servings:1,steps:["Морковь (80 г) и огурец (60 г) нарежьте палочками.","Авокадо (70 г) разомните вилкой с щепоткой соли, перцем и несколькими каплями лимонного сока. По желанию добавьте мелко нарезанную зелень.","Подавайте палочки с гуакамоле."],tip:"Лимонный сок в гуакамоле предотвращает потемнение мякоти авокадо."},
  69: {prep:10,cook:20,servings:1,steps:["Разогрейте духовку до 180 °C. Творог (180 г) разомните вилкой, добавьте яйцо (50 г), муку (25 г) (немного оставьте для обваливания), щепотку соли и ½ ч. л. сахара. Замесите густое тесто.","Мокрыми руками сформируйте сырники толщиной 1,5–2 см и обваляйте в оставшейся муке.","Выложите на противень с пергаментом, слегка смазанным маслом.","Запекайте 17–20 минут до золотистой корочки, один раз перевернув. Подайте с ягодами или мёдом."],tip:"Влажное тесто можно слегка подсушить, добавив ещё ложку муки."},
  70: {prep:10,cook:45,servings:1,steps:["Перловку (70 г) промойте. Залейте 250 мл воды, посолите, доведите до кипения, накройте и варите на слабом огне 30–35 минут (без замачивания — 45–50), пока вода не впитается.","Лук (40 г) мелко нарежьте, грибы (100 г) — пластинами.","Обжарьте лук на 1 ст. л. масла 3 минуты, добавьте грибы и жарьте 8–10 минут до румяной корочки. Посолите и поперчите.","Смешайте кашу с грибами и луком, прогрейте 2 минуты под крышкой."],tip:"Если перловку замочить на 1–2 часа или на ночь, она сварится заметно быстрее и будет мягче."},
  71: {prep:8,cook:27,servings:1,steps:["Брокколи (100 г) разберите на соцветия и отварите в подсоленной воде 4–5 минут. Откиньте на дуршлаг.","Грудку (150 г) нарежьте кусочками 2–3 см, посолите, поперчите и обжарьте на 1 ст. л. масла 6–7 минут до золотистой корочки.","Влейте сливки (50 г), убавьте огонь и томите 5 минут, пока соус слегка не загустеет.","Добавьте брокколи, прогрейте 2 минуты. По вкусу добавьте щепотку сушёного чеснока или мускатного ореха."],tip:"Сливки не должны сильно кипеть, иначе соус может разделиться."},
  72: {prep:5,cook:15,servings:1,steps:["Киноа (60 г) промойте, залейте 120 мл воды, посолите и варите под крышкой на слабом огне 12–15 минут. Остудите.","Консервированный нут (80 г) промойте и дайте стечь. Огурец (60 г) и помидор (60 г) нарежьте кубиками.","Смешайте киноа, нут и овощи, заправьте 1 ст. л. масла и лимонным соком, посолите, поперчите и добавьте зелень."],tip:"Салат можно приготовить заранее — он только вкуснее после пропитывания заправкой."},
  73: {prep:5,cook:20,servings:1,steps:["Пшено (60 г) несколько раз промойте горячей водой. Тыкву (120 г) нарежьте кубиками по 1 см.","Залейте тыкву 220 мл воды, доведите до кипения и варите 5 минут.","Всыпьте пшено, посолите и варите под крышкой на слабом огне 15 минут, пока вода не впитается.","Накройте полотенцем на 5–10 минут. Подайте с мёдом (15 г)."],tip:"Тыква даёт каше сладость, поэтому мёда нужно немного."},
  74: {prep:3,cook:9,servings:1,steps:["Бекон (40 г) нарежьте полосками, помидор (80 г) — кружками.","Обжарьте бекон на сухой сковороде 3–4 минуты до румяных краёв. При желании слейте лишний жир.","Добавьте помидор и обжарьте 1–2 минуты. Разбейте яйца (100 г), накройте крышкой и жарьте 3–4 минуты до готовности белка. Поперчите."],tip:"Бекон солёный, поэтому яичницу обычно солить не нужно."},
  75: {prep:2,cook:18,servings:1,steps:["Гречку (70 г) переберите и промойте в сите.","Залейте 140 мл воды, посолите, доведите до кипения, убавьте огонь, накройте крышкой и варите 12–15 минут, пока вода не впитается.","Влейте горячее молоко (150 г) и прогрейте 2–3 минуты на слабом огне, не давая сильно кипеть.","Накройте крышкой и дайте постоять 5 минут. При желании добавьте кусочек масла."],tip:"Не помешивайте гречку во время варки, иначе она станет клейкой."},
  76: {prep:10,cook:30,servings:1,steps:["Разогрейте духовку до 180 °C. Изюм (20 г) залейте кипятком на 10 минут, откиньте и обсушите.","Творог (200 г) разотрите вилкой, добавьте яйцо (50 г), манку (30 г), изюм, щепотку соли и 1–2 ст. л. сахара. Оставьте на 10 минут.","Форму смажьте маслом и посыпьте манкой, выложите массу и разровняйте.","Выпекайте 30 минут до румяной корочки, остудите 10 минут."],tip:"Изюм нужно распарить, иначе он будет жёстким и подгорит."},
  77: {prep:8,cook:0,servings:1,steps:["Хлеб (80 г) при желании подсушите в тостере.","Огурец (40 г) нарежьте тонкими кружками, сыр (30 г) — ломтиками, готовую индейку (80 г) — тонкими слайсами.","Соберите сэндвич: хлеб, сыр, индейка, огурец, хлеб. При желании смажьте горчицей."],tip:"Используйте индейку, приготовленную заранее: отварную или запечённую."},
  78: {prep:8,cook:17,servings:1,steps:["Лук (40 г) мелко нарежьте, перец (80 г) — небольшими кубиками, помидоры (200 г) — кубиками.","В глубокой сковороде на 1 ст. л. масла обжарьте лук 3 минуты, добавьте перец и жарьте ещё 3 минуты.","Добавьте помидоры, 1 ч. л. паприки, ½ ч. л. зиры, соль и перец. Тушите 8–10 минут до густого соуса.","Сделайте в соусе углубления и разбейте в них яйца (100 г). Накройте крышкой и готовьте 4–5 минут, пока белок не схватится, а желток останется жидким."],tip:"Подавайте шакшуку прямо в сковороде, с хлебом, чтобы собирать соус."},
  79: {prep:10,cook:35,servings:1,steps:["Курицу (120 г) залейте 600 мл холодной воды, доведите до кипения, снимите пену и варите на слабом огне 20 минут.","Добавьте лук (40 г) целой головкой или половинками и морковь (50 г) кружочками, лавровый лист, соль. Варите 10 минут.","Достаньте курицу, разберите на кусочки без костей и верните в кастрюлю.","Всыпьте лапшу (50 г) и варите столько, сколько указано на упаковке (обычно 5–7 минут).","Добавьте перец и зелень, подавайте горячим."],tip:"Бульон снимайте с огня до закипания лапши: она разбухает и впитывает жидкость."},
  80: {prep:10,cook:40,servings:1,steps:["Рис (80 г) промойте до прозрачной воды и залейте тёплой подсоленной водой на 20–30 минут.","Курицу (120 г) нарежьте кусочками 3–4 см, лук (40 г) — полукольцами, морковь (60 г) — соломкой.","В казане или толстостенной кастрюле разогрейте 2 ст. л. масла, обжарьте курицу 7 минут, добавьте лук, через 3 минуты — морковь и жарьте ещё 5 минут. Добавьте 1 ч. л. зиры, соль и перец.","Влейте 150 мл горячей воды и тушите под крышкой 10 минут.","Слейте воду с риса и выложите его ровным слоем на мясо, не перемешивая. Долейте около 140 мл горячей воды, чтобы она была на 1 см выше риса.","Когда вода выпарится, соберите рис горкой, проткните в нескольких местах, накройте крышкой и держите на минимальном огне 15 минут. Оставьте на 5–10 минут."],tip:"Рис выкладывайте сверху и не перемешивайте до конца варки — зёрна останутся рассыпчатыми."},
  81: {prep:10,cook:40,servings:1,steps:["Говядину (80 г) залейте 600 мл холодной воды, доведите до кипения, снимите пену и варите на слабом огне 30 минут.","Картофель (80 г) нарежьте кубиками, капусту (150 г) — тонкой соломкой, морковь (40 г) натрите, лук (30 г) мелко нарежьте.","Лук и морковь обжарьте на 1 ст. л. масла 5 минут.","В бульон положите картофель, через 7 минут добавьте капусту и варите ещё 10 минут. Добавьте зажарку, лавровый лист, соль и перец, варите 5 минут.","Дайте постоять 10 минут и подавайте с зеленью (по желанию со сметаной)."],tip:"Щи, как и борщ, вкуснее после 10–15 минут настаивания под крышкой."},
  82: {prep:8,cook:27,servings:1,steps:["Нагрейте 400 мл воды (или бульона) и держите горячей на слабом огне. Лук (40 г) мелко нарежьте, грибы (120 г) — пластинами, пармезан (20 г) натрите.","Обжарьте грибы на 1 ст. л. масла 8 минут до румяной корочки и переложите на тарелку.","В той же сковороде обжарьте лук 3 минуты, добавьте сухой рис (80 г) и жарьте 1–2 минуты, пока края зёрен не станут прозрачными.","Добавляйте горячую воду по половнику, помешивая, и ждите, пока она впитается, прежде чем влить следующую порцию. Так 18–20 минут, пока рис не станет мягким, но чуть упругим в центре.","Верните грибы, посолите, снимите с огня, добавьте пармезан и кусочек масла. Накройте на 2 минуты."],tip:"Рис для ризотто нельзя промывать и нужно добавлять жидкость понемногу: так появится кремовая текстура."},
  83: {prep:15,cook:25,servings:1,steps:["Хлеб (20 г) размочите в 2 ст. л. воды и отожмите. Смешайте фарш (150 г) с хлебом, яйцом (25 г), солью и перцем, хорошо вымесите.","Картофель (200 г) очистите, нарежьте, залейте холодной водой, посолите и варите 15–20 минут до мягкости.","Мокрыми руками сформируйте котлеты. Обжарьте на сковороде с 1 ст. л. масла по 3–4 минуты с каждой стороны, накройте крышкой и доведите до готовности на слабом огне 6–8 минут: внутри не должно быть розового.","Слейте воду с картофеля, разомните толкушкой с кусочком масла и небольшим количеством отвара. Подайте с котлетами."],tip:"Фарш хорошо вымешивайте и слегка отбивайте о миску: котлеты не развалятся."},
  84: {prep:10,cook:10,servings:1,steps:["Куриную грудку (120 г) посолите, поперчите и обжарьте на сковороде с 1 ст. л. масла по 5–6 минут с каждой стороны до готовности. Дайте отдохнуть 3 минуты и нарежьте ломтиками.","Салат (80 г) помойте, обсушите и порвите руками. Пармезан (20 г) нарежьте стружкой.","Смешайте салат с заправкой (1 ст. л. оливкового масла, 1 ч. л. лимонного сока, щепотка соли).","Сверху выложите курицу, сухарики (30 г) и пармезан. Подавайте сразу, пока сухарики хрустят."],tip:"Соус можно сделать за минуту: оливковое масло, лимонный сок, щепотка соли и ложка йогурта."},
  85: {prep:20,cook:40,servings:1,steps:["Разогрейте духовку до 180 °C. Обжарьте фарш (120 г) на 1 ст. л. масла 7–8 минут, разбивая комочки, посолите, поперчите, добавьте орегано.","Влейте томатный соус (100 г) и 50 мл воды, тушите 8 минут до густоты. Сыр (50 г) натрите.","В форму налейте немного соуса, уложите слой листов (80 г), затем слой мясного соуса и немного сыра. Повторите 2–3 слоя, закончите соусом и сыром.","Накройте фольгой и запекайте 25 минут, затем снимите фольгу и держите ещё 10–15 минут до румяной корочки. Дайте постоять."],tip:"Дайте лазанье постоять 10 минут перед нарезкой: слои «схватятся»."},
  86: {prep:8,cook:22,servings:1,steps:["Лук (30 г) мелко нарежьте и обжарьте на 1 ч. л. масла 3 минуты, не давая зарумяниться. Картофель (80 г) нарежьте кубиками.","Добавьте картофель и 400 мл воды, посолите и варите 10 минут. Добавьте брокколи (200 г) и варите ещё 7–8 минут.","Влейте сливки (50 г), пробейте блендером до гладкости и прогрейте, не доводя до кипения."],tip:"Не кипятите суп после добавления сливок."},
  87: {prep:8,cook:17,servings:1,steps:["Лосось (150 г) обсушите, посолите и поперчите. Брокколи (100 г) разберите на соцветия.","На разогретой сковороде с 1 ст. л. масла обжарьте лосось кожей вниз 4–5 минут до хрустящей кожи, переверните и жарьте 3–4 минуты.","Брокколи отварите в подсоленной воде или на пару 4–5 минут.","Подайте с дольками лимона (20 г)."],tip:"Не переворачивайте лосось слишком рано: когда корочка схватится, он сам отойдёт от сковороды."},
  88: {prep:10,cook:30,servings:1,steps:["Индейку (120 г) нарежьте кубиками 2 см, кабачок (100 г) — кубиками, перец (80 г) — полосками, помидор (80 г) — кубиками.","Обжарьте индейку на 1 ст. л. масла 5–6 минут, добавьте перец и кабачок и жарьте 5 минут.","Добавьте помидор, 50 мл воды, соль и перец. Тушите под крышкой 15 минут до мягкости.","Посыпьте зеленью."],tip:"Рагу можно готовить в большем объёме и подавать горячим и холодным."},
  89: {prep:10,cook:20,servings:1,steps:["Разогрейте духовку до 200 °C. Брокколи (100 г) разберите на соцветия, смешайте с 1 ч. л. масла и солью.","Треску (160 г) обсушите, посолите, поперчите, сбрызните лимонным соком (20 г).","Выложите треску и брокколи на противень, на рыбу положите тонкие ломтики лимона.","Запекайте 15–18 минут, пока рыба не станет непрозрачной."],tip:"Рыба готова, когда мякоть стала непрозрачной и легко делится на слои."},
  90: {prep:15,cook:35,servings:1,steps:["Рис (40 г) отварите 7 минут в подсоленной воде до полуготовности и промойте. Лук (30 г) мелко нарежьте.","Перец (200 г) вымойте, срежьте «крышечки» и удалите семена. Смешайте фарш (100 г) с рисом, луком, солью и перцем.","Наполните перцы начинкой, не утрамбовывая сильно. Уложите в кастрюлю или глубокую форму.","Влейте 150 мл воды, накройте крышкой или фольгой и тушите на слабом огне (или запекайте при 180 °C) 30–35 минут до мягкости перца."],tip:"Рис в начинке ещё набухнет, поэтому перцы нужно наполнять неплотно."},
  91: {prep:8,cook:37,servings:1,steps:["Разогрейте духовку до 200 °C. Чеснок (10 г) пропустите через пресс или мелко порубите.","Крылышки (200 г) обсушите, смешайте с маслом (15 г), чесноком, солью, перцем и паприкой.","Выложите в один слой на противень или решётку. Запекайте 35 минут, один раз перевернув, до золотистой корочки."],tip:"Чем лучше вы обсушите крылышки, тем хрустящее будет корочка."},
  92: {prep:5,cook:10,servings:1,steps:["Сыр (40 г) натрите на тёрке, зелень (15 г) мелко нарежьте. Яйца (120 г) взбейте с солью, перцем и 2 ст. л. воды.","Вылейте на разогретую сковороду с каплей масла диаметром около 24 см, накройте крышкой и жарьте 4–5 минут на слабом огне, пока омлет не схватится.","Посыпьте сыром и зеленью, сверните рулетом и подержите под крышкой минуту. Нарежьте."],tip:"Омлет должен быть тонким, чтобы легко сворачиваться."},
  93: {prep:10,cook:25,servings:1,steps:["Капусту (200 г) тонко нашинкуйте, лук (40 г) нарежьте полукольцами, морковь (40 г) натрите, сосиски (100 г) нарежьте кружками.","На сковороде с 1 ст. л. масла обжарьте лук с морковью 5 минут, добавьте сосиски и жарьте 3 минуты.","Добавьте капусту, соль, перец и 100 мл воды. Накройте и тушите на слабом огне 15–20 минут до мягкости.","Подайте с зеленью."],tip:"Не пересушивайте капусту: она должна остаться чуть упругой."},
  94: {prep:8,cook:17,servings:1,steps:["Киноа (70 г) промойте, залейте 140 мл воды, посолите и варите под крышкой на слабом огне 12–15 минут. Оставьте на 5 минут и остудите.","Огурец (60 г) и помидор (80 г) нарежьте кубиками, фету (40 г) — кубиками.","Смешайте всё, заправьте 1 ст. л. масла и лимонным соком, поперчите и добавьте зелень."],tip:"Фета и маслины солёные, поэтому солите салат осторожно или совсем не солите."},
  95: {prep:10,cook:0,servings:1,steps:["Помидор (100 г) нарежьте крупными дольками, огурец (80 г) — полукружками.","Выложите овощи в миску, добавьте маслины (30 г) и фету (40 г) кубиками.","Заправьте 1 ст. л. оливкового масла, добавьте щепотку орегано и перец. Не солите: фета и маслины уже солёные."],tip:"Это классика: не режьте овощи слишком мелко."},
  96: {prep:3,cook:0,servings:1,steps:["Грецкие орехи (20 г) грубо порубите.","Выложите творог (150 г) в миску, полейте мёдом (20 г) и посыпьте орехами."],tip:"Орехи можно слегка подсушить на сухой сковороде — вкус станет ярче."},
  97: {prep:3,cook:0,servings:1,steps:["Яблоко (150 г) вымойте, удалите сердцевину и нарежьте дольками.","Подайте с арахисовой пастой (30 г) для макания."],tip:"Для хруста выбирайте плотные кисло-сладкие яблоки."},
  98: {prep:5,cook:0,servings:1,steps:["Морковь (60 г) и огурец (60 г) нарежьте палочками.","Выложите хумус (80 г) в пиалу, сбрызните каплей масла, посыпьте паприкой. Подавайте с овощами."],tip:"Подойдут любые сырые овощи: сельдерей, болгарский перец, цветная капуста."},
  99: {prep:3,cook:0,servings:1,steps:["Банан (80 г) нарежьте кусочками.","Налейте в блендер молоко (250 г), добавьте протеин (30 г) и банан, взбейте 30–40 секунд до однородности.","Пейте сразу."],tip:"В шейкере сначала наливайте жидкость, потом порошок — так не будет комков."},
  100: {prep:15,cook:25,servings:1,steps:["Рис (70 г) промойте, залейте 140 мл воды, посолите, доведите до кипения и варите под крышкой 12–15 минут. Оставьте на 5 минут.","Лук (30 г) очень мелко нарежьте или натрите. Смешайте фарш (150 г) с луком, яйцом (25 г), солью и перцем.","Сформируйте мокрыми руками котлеты толщиной около 2 см.","Обжарьте на сковороде с 1 ст. л. масла по 3–4 минуты с каждой стороны, затем накройте и доведите на слабом огне 5 минут.","Подайте с рисом."],tip:"Если фарш жидковат, добавьте ложку муки или манки."},
  101: {prep:12,cook:23,servings:1,steps:["Лук (30 г) очень мелко нарежьте. Смешайте фарш (120 г) с половиной лука, солью и перцем, сформируйте фрикадельки размером с грецкий орех.","На сковороде с 1 ст. л. масла обжарьте оставшийся лук 2–3 минуты, добавьте фрикадельки и обжаривайте со всех сторон 5 минут.","Влейте томатный соус (80 г) и 50 мл воды, накройте и тушите на слабом огне 12–15 минут.","Макароны (90 г) отварите в подсоленной воде по инструкции, смешайте с соусом и фрикадельками."],tip:"Фрикадельки держат форму лучше, если фарш хорошо вымесить и не жалеть времени на формовку."},
  102: {prep:10,cook:30,servings:1,steps:["Консервированную фасоль (60 г) промойте. Морковь (50 г), кабачок (80 г) и помидор (80 г) нарежьте кубиками.","В кастрюле на 1 ст. л. масла обжарьте морковь 3 минуты, добавьте помидор и тушите ещё 3 минуты.","Влейте 500 мл горячей воды, посолите, добавьте кабачок, доведите до кипения и варите 10 минут.","Добавьте макароны (30 г) и фасоль, варите 8–10 минут до готовности макарон. Добавьте перец и зелень."],tip:"Пасту лучше варить в супе только если вы съедите его сразу: потом она разбухнет."},
  103: {prep:8,cook:22,servings:1,steps:["Рис (70 г) промойте, залейте 140 мл воды, посолите, доведите до кипения и варите под крышкой на слабом огне 12–15 минут. Оставьте на 5 минут.","Для соуса смешайте соевый соус (20 г), мёд (10 г) и 2 ст. л. воды.","Куриную грудку (140 г) нарежьте кусочками 2–3 см и обжарьте на 1 ст. л. масла 6–7 минут до золотистого цвета.","Влейте соус и жарьте 1–2 минуты, пока он не загустеет и не покроет мясо глазурью.","Подайте курицу с рисом, посыпьте кунжутом или зелёным луком."],tip:"Мёд подгорает быстрее сахара, поэтому не доводите соус до сильного кипения."},
  104: {prep:10,cook:30,servings:1,steps:["Разогрейте духовку до 200 °C. Баклажан (100 г), кабачок (100 г) и перец (80 г) нарежьте кусками по 2–3 см.","Смешайте овощи с 1 ст. л. масла, солью, перцем и сушёными травами. Выложите на противень в один слой.","Запекайте 25 минут, один раз перемешав, пока овощи не станут мягкими с румяными краями.","Раскрошите сверху фету (50 г) и верните в духовку на 3–5 минут. Подавайте тёплыми с зеленью."],tip:"Овощи должны лежать в один слой, иначе они будут тушиться, а не запекаться."},
  105: {prep:10,cook:45,servings:1,steps:["Говядину (100 г) нарежьте кубиками 2–3 см, залейте 600 мл холодной воды, доведите до кипения, снимите пену и варите на слабом огне 30 минут.","Лук (40 г) мелко нарежьте и обжарьте на 1 ст. л. масла 4 минуты, добавьте томатную пасту (30 г) и жарьте ещё 2 минуты.","Добавьте зажарку и промытый рис (40 г) в бульон, варите 12–15 минут.","Чеснок (10 г) измельчите и добавьте в конце вместе с лавровым листом, перцем и зеленью. Выключите и дайте настояться 10 минут."],tip:"Хмели-сунели, кинза и чеснок придают харчо характерный вкус; добавляйте их в самом конце."},
  106: {prep:10,cook:20,servings:1,steps:["Яйцо (50 г) взбейте с щепоткой соли и 1 ч. л. сахара, влейте молоко (120 г) и 100 мл воды.","Всыпьте муку (60 г), размешайте венчиком до отсутствия комков, добавьте 1 ст. л. масла. Оставьте на 10 минут.","Разогрейте сковороду, слегка смажьте маслом. Наливайте тесто тонким слоем и жарьте по 1–2 минуты с каждой стороны до румяных пятен.","Творог (80 г) разомните вилкой (можно с ложкой сахара или мёда), выложите на блин и сверните конвертом."],tip:"Тесто должно быть как жидкие сливки; если получилось густым, добавьте ложку воды."},
  107: {prep:5,cook:7,servings:1,steps:["Поставьте вариться яйцо (50 г) вкрутую: 9–10 минут в кипящей воде. Затем охладите в холодной воде и очистите.","Пока варится яйцо, порвите салат (40 г) и нарежьте огурец (60 г) полукружками. Слейте жидкость с тунца (80 г) и разомните рыбу вилкой.","Смешайте салат, огурец и тунец, сверху положите нарезанное яйцо.","Заправьте каплей масла и лимонным соком, поперчите."],tip:"Для сочного желтка варите яйцо не дольше 9 минут."},
  108: {prep:12,cook:28,servings:1,steps:["Рис (40 г) отварите 7 минут в подсоленной воде и промойте. Капусту (150 г) мелко нашинкуйте, лук (40 г) мелко нарежьте.","Смешайте фарш (120 г) с рисом, капустой, луком, солью и перцем, хорошо вымесите.","Сформируйте котлеты и обжарьте на сковороде с 1 ст. л. масла по 2 минуты с каждой стороны до румяной корочки.","Влейте 150 мл воды, накройте и тушите на слабом огне 20 минут. Подайте со сметаной."],tip:"Рис нужно слегка отварить заранее, иначе он останется жёстким."},
  109: {prep:5,cook:10,servings:1,steps:["Налейте в неглубокую кастрюлю воды высотой 6–7 см, добавьте 1 ст. л. уксуса и держите на лёгком кипении.","Яйцо (50 г) разбейте в чашку, закрутите воду воронкой, влейте яйцо и варите 3 минуты. Достаньте шумовкой.","Хлеб (60 г) подсушите. Авокадо (80 г) разомните с солью и лимонным соком и намажьте на тост.","Сверху положите яйцо пашот, поперчите."],tip:"Яйца для пашот должны быть как можно свежее."},
  110: {prep:15,cook:0,servings:1,steps:["Печенье (40 г) измельчите в крошку скалкой в пакете и выложите на дно стакана.","Творожный сыр (80 г) взбейте венчиком или вилкой до кремовой консистенции. По желанию добавьте ложку йогурта и немного сахара. Выложите на печенье.","Сверху разложите ягоды (40 г). Охладите в холодильнике 15–30 минут перед подачей."],tip:"Без выпечки и желатина десерт получается нежным, но его нужно подавать охлаждённым."},
  111: {prep:3,cook:7,servings:1,steps:["Яблоко (100 г) натрите на крупной тёрке или нарежьте мелкими кубиками.","Вскипятите 180 мл воды (или молока) с щепоткой соли, всыпьте хлопья (60 г) и варите 4–5 минут, помешивая.","Добавьте яблоко и щепотку корицы, прогрейте 1–2 минуты. Подайте с мёдом (10 г)."],tip:"Яблоко можно заменить грушей, а корицу — ванилью."},
  112: {prep:3,cook:7,servings:1,steps:["Разогрейте сковороду на среднем огне, добавьте масло (8 г).","Аккуратно разбейте яйца (100 г) и жарьте 3–4 минуты, пока белок не станет белым, а желток останется жидким.","Хлеб (60 г) подсушите в тостере.","Посолите белок, поперчите и подайте с тостами."],tip:"Для плотного желтка накройте сковороду крышкой на последнюю минуту."},
  113: {prep:8,cook:0,servings:1,steps:["Банан (120 г) нарежьте (лучше замороженный), ягоды (80 г) возьмите свежие или замороженные.","Взбейте в блендере банан, ягоды и йогурт (100 г) до густой гладкой массы.","Переложите в миску, посыпьте гранолой (40 г) и ешьте сразу."],tip:"Замороженные ягоды и банан делают смузи густым и холодным."},
  114: {prep:10,cook:25,servings:1,steps:["Творог (120 г) разотрите вилкой, добавьте яйцо (25 г), муку (50 г) (немного оставьте для посыпки), щепотку соли и 1 ч. л. сахара. Замесите мягкое тесто.","Раскатайте тесто в колбаску толщиной 2 см, посыпая стол мукой, и нарежьте косыми кусочками по 2 см.","Опускайте вареники в кипящую подсоленную воду и варите 2–3 минуты после всплытия. Достаньте шумовкой.","Подавайте со сметаной (30 г)."],tip:"Ленивые вареники нельзя варить на сильном огне: тесто может расползтись."},
  115: {prep:5,cook:20,servings:1,steps:["Пшено (20 г) промойте горячей водой. Тыкву (150 г) нарежьте кубиками по 1 см.","Залейте тыкву 200 мл воды, доведите до кипения и варите 8 минут.","Всыпьте пшено, посолите и варите на слабом огне 10–12 минут, пока крупа не станет мягкой.","Разомните тыкву вилкой прямо в каше, оставьте под крышкой на 5 минут и подавайте с мёдом (15 г)."],tip:"Это скорее тыквенная каша с небольшим количеством пшена: тыква даёт сладость и мягкость."},
  116: {prep:5,cook:10,servings:1,steps:["Шпинат (50 г) промойте и грубо порубите, фету (40 г) раскрошите. Яйца (120 г) взбейте с перцем и 2 ст. л. воды.","На сковороде с каплей масла прогрейте шпинат 1 минуту до увядания.","Залейте яйцами, посыпьте фетой, накройте крышкой и готовьте на слабом огне 4–5 минут."],tip:"Фета солёная, поэтому омлет почти не нужно солить."},
  117: {prep:7,cook:0,servings:1,steps:["Хлеб (70 г) подсушите в тостере или на сухой сковороде.","Авокадо (80 г) разомните вилкой с щепоткой соли, перцем и каплей лимонного сока, намажьте на хлеб.","Помидор (60 г) нарежьте кружочками, выложите сверху и поперчите."],tip:"Для сочности добавьте на помидор каплю оливкового масла."},
  118: {prep:3,cook:22,servings:1,steps:["Рис (60 г) промойте до прозрачной воды, залейте 120 мл воды и варите 8–10 минут до размягчения.","Влейте горячее молоко (200 г), добавьте щепотку соли. Варите на слабом огне 10–12 минут, помешивая.","Снимите с огня и оставьте под крышкой на 5 минут. Подайте с мёдом (10 г)."],tip:"Рис на молоке легко подгорает: используйте толстое дно и помешивайте."},
  119: {prep:10,cook:30,servings:1,steps:["Разогрейте духовку до 180 °C. Творог (180 г) разотрите, добавьте яйцо (50 г), манку (25 г), щепотку соли и 1–2 ст. л. сахара. Оставьте на 10 минут.","Половину ягод (60 г) аккуратно вмешайте в массу.","Выложите массу в смазанную маслом форму, сверху разложите оставшиеся ягоды.","Выпекайте 30 минут до румяной корочки."],tip:"Замороженные ягоды не размораживайте, иначе они пустят сок и запеканка будет влажной."},
  120: {prep:5,cook:7,servings:1,steps:["Яйца (100 г) опустите в кипящую воду и варите 6 минут. Перенесите в холодную воду на 1 минуту и очистите.","Авокадо (70 г) разрежьте, выньте косточку, нарежьте ломтиками, сбрызните лимонным соком.","Подайте яйца с авокадо, посолите и поперчите."],tip:"Яйцо должно быть комнатной температуры, чтобы скорлупа не лопнула."},
  121: {prep:3,cook:17,servings:1,steps:["Пшено (70 г) несколько раз промойте горячей водой. Изюм (25 г) залейте кипятком на 5 минут и откиньте.","Залейте пшено 200 мл воды, посолите, доведите до кипения и варите на слабом огне под крышкой 12–15 минут, пока вода не впитается.","Добавьте изюм, перемешайте и оставьте под крышкой на 5 минут. Подайте с мёдом (10 г)."],tip:"Изюм нужно распарить, иначе он будет жёстким."},
  122: {prep:8,cook:0,servings:1,steps:["Хлеб (70 г) подсушите в тостере.","Огурец (40 г) и помидор (40 г) нарежьте тонкими кружочками.","Намажьте на хлеб хумус (50 г), сверху уложите овощи и посыпьте перцем."],tip:"Подойдут любые овощи: болгарский перец, редис, ростки."},
  123: {prep:5,cook:10,servings:1,steps:["Хлопья (50 г) залейте 3 ст. л. воды на 3 минуты. Добавьте яйцо (50 г) и щепотку соли, перемешайте.","Вылейте массу на разогретую сковороду с каплей масла, разровняйте и жарьте под крышкой 3 минуты. Переверните и жарьте ещё 2 минуты.","Творог (80 г) разомните, выложите на половину блина и сложите пополам."],tip:"Хлопья нужно слегка размочить, тогда блин не рассыплется."},
  124: {prep:5,cook:0,servings:1,steps:["Выложите йогурт (150 г) в миску и полейте мёдом (15 г).","Перед подачей насыпьте сверху гранолу (50 г)."],tip:"Гранолу добавляйте в последний момент, чтобы она не размокла."},
  125: {prep:5,cook:10,servings:1,steps:["Лук (30 г) мелко нарежьте, грибы (100 г) — пластинами.","На сковороде с 1 ч. л. масла обжарьте лук 2 минуты, добавьте грибы и жарьте 5 минут до испарения влаги. Посолите.","Яйца (120 г) взбейте с перцем и 2 ст. л. воды, залейте грибы.","Накройте крышкой и готовьте на слабом огне 3–4 минуты."],tip:"Грибы нельзя солить в начале жарки: они выпускают воду и не зажариваются."},
  126: {prep:5,cook:30,servings:1,steps:["Курицу (100 г) залейте 500 мл холодной воды, доведите до кипения, снимите пену и варите 15 минут. Добавьте целый лук (30 г) и морковь (40 г), посолите и варите ещё 10 минут.","Параллельно сварите яйцо (50 г) вкрутую 9–10 минут, охладите и очистите.","Достаньте курицу и разберите на волокна. Лук можно убрать, морковь нарезать кружками.","Подайте бульон с курицей, морковью и половинками яйца, посыпьте зеленью."],tip:"Яйцо можно сварить заранее — вместе с курицей оно не нужно."},
  127: {prep:8,cook:32,servings:1,steps:["Лук (40 г) мелко нарежьте. Обжарьте на сковороде с 1 ст. л. масла 3 минуты до прозрачности.","Добавьте фарш (120 г) и жарьте 8 минут, разбивая комочки, пока не исчезнет розовый цвет. Посолите, поперчите, добавьте орегано.","Влейте томатный соус (80 г) и 100 мл воды, накройте и тушите на слабом огне 15 минут.","Макароны (90 г) отварите в подсоленной воде по инструкции и смешайте с соусом."],tip:"Чем дольше томится соус, тем он вкуснее: при желании готовьте его заранее."},
  128: {prep:8,cook:27,servings:1,steps:["Гречку (80 г) промойте. Курицу (100 г) нарежьте кусочками 2 см, лук (40 г) — кубиками, морковь (40 г) — соломкой.","На 1 ст. л. масла обжарьте курицу 5 минут, добавьте лук и морковь и жарьте ещё 5 минут.","Добавьте гречку, соль и перец, влейте 180 мл горячей воды, доведите до кипения, накройте и варите на слабом огне 15 минут.","Оставьте под крышкой на 5–10 минут."],tip:"Гречку добавляйте, когда мясо уже почти готово, тогда она не переварится."},
  129: {prep:8,cook:32,servings:1,steps:["Курицу (100 г) залейте 600 мл холодной воды, доведите до кипения, снимите пену и варите 15 минут.","Добавьте картофель (80 г) кубиками и морковь (50 г) кружочками. Варите 10 минут.","Добавьте кабачок (60 г) кубиками, посолите и варите ещё 5 минут.","Достаньте курицу, разберите на волокна и верните в суп. Добавьте зелень и перец."],tip:"Не варите кабачок долго: он разваривается за 5 минут."},
  130: {prep:8,cook:17,servings:1,steps:["Рис (80 г) промойте, залейте 160 мл воды, посолите и варите под крышкой на слабом огне 12–15 минут.","Морковь (50 г) натрите, кабачок (60 г) нарежьте кубиками, обжарьте на 1 ст. л. масла 6–7 минут до мягкости.","Сдвиньте овощи, влейте взбитое яйцо (50 г) и перемешайте до готовности 1–2 минуты.","Смешайте всё с рисом, посолите и поперчите."],tip:"Яйцо вводите в самом конце: оно должно только схватиться."},
  131: {prep:8,cook:27,servings:1,steps:["Чечевицу (70 г) промойте. Лук (40 г) нарежьте, морковь (50 г) натрите.","На 1 ст. л. масла обжарьте лук с морковью 5 минут, добавьте томатную пасту (20 г) и жарьте 2 минуты.","Всыпьте чечевицу, влейте 500 мл горячей воды, варите на слабом огне 20 минут до мягкости. Посолите в конце.","Добавьте зиру или перец, при желании пробейте часть супа блендером."],tip:"Томатная паста должна «обжариться» вместе с овощами, тогда она теряет кислинку."},
  132: {prep:8,cook:22,servings:1,steps:["Гречку (70 г) промойте, залейте 140 мл воды, посолите, доведите до кипения и варите под крышкой 15 минут. Оставьте на 5 минут.","Индейку (130 г) нарежьте стейками толщиной 1,5 см, посолите и поперчите. Обжарьте на 1 ст. л. масла по 5–6 минут с каждой стороны. Дайте отдохнуть 3 минуты.","Огурец (60 г) и помидор (60 г) нарежьте, заправьте каплей масла и лимонным соком. Подайте с индейкой и гречкой."],tip:"Индейку не пережаривайте: тонкие стейки готовы за 10–12 минут."},
  133: {prep:8,cook:42,servings:1,steps:["Говядину (120 г) нарежьте кубиками 2–3 см, лук (40 г) — полукольцами, морковь (50 г) — кружочками, картофель (150 г) — кубиками.","Обжарьте говядину на 1 ст. л. масла 7 минут, добавьте лук с морковью и жарьте ещё 5 минут.","Влейте 200 мл горячей воды, добавьте лавровый лист, соль и перец. Накройте и тушите 25 минут.","Добавьте картофель, при необходимости долейте воды и тушите ещё 12–15 минут до мягкости."],tip:"Картофель кладите во второй половине тушения: он должен остаться целым."},
  134: {prep:8,cook:12,servings:1,steps:["Грудку (120 г) посолите, поперчите и обжарьте на 1 ст. л. масла по 5–6 минут с каждой стороны. Дайте остыть 3 минуты и нарежьте.","Салат (60 г) порвите, огурец (50 г) и помидор (60 г) нарежьте.","Соедините всё в миске, заправьте 1 ст. л. масла и лимонным соком, посолите и поперчите."],tip:"Если курица остынет перед нарезкой, она будет сочнее."},
  135: {prep:10,cook:55,servings:1,steps:["Рис (90 г) промойте до прозрачной воды и залейте тёплой подсоленной водой на 20–30 минут.","Говядину (100 г) нарежьте кубиками 2–3 см, лук (40 г) — полукольцами, морковь (70 г) — соломкой.","В казане разогрейте 2 ст. л. масла, обжарьте говядину 8 минут до румяной корочки, добавьте лук, через 3 минуты — морковь. Жарьте 5 минут. Добавьте 1 ч. л. зиры, соль и перец.","Влейте 200 мл горячей воды и тушите под крышкой на слабом огне 15 минут.","Слейте воду с риса и выложите его ровным слоем на мясо. Долейте горячую воду, чтобы она была на 1 см выше риса (около 160 мл), посолите.","Когда вода выпарится, соберите рис горкой, проткните в нескольких местах и накройте крышкой. Держите на минимальном огне 15 минут и оставьте на 10 минут."],tip:"Рис не перемешивайте до конца варки: так плов получится рассыпчатым."},
  136: {prep:10,cook:40,servings:1,steps:["Лук (30 г) нарежьте, морковь (40 г) натрите, картофель (80 г) — кубиками, сосиски (50 г) — кружками.","В кастрюле на 1 ст. л. масла обжарьте лук с морковью 5 минут, добавьте сосиски на 2 минуты.","Влейте 600 мл воды, добавьте картофель и варите 12 минут.","Добавьте консервированную фасоль (60 г), лавровый лист, соль и перец. Варите 8–10 минут.","Дайте настояться 10 минут."],tip:"Консервированная фасоль уже готова, поэтому она нужна только для прогрева."},
  137: {prep:12,cook:23,servings:1,steps:["Хлеб (20 г) размочите в 2 ст. л. воды и отожмите. Смешайте фарш (150 г), хлеб, яйцо (25 г), соль и перец.","Сформируйте мокрыми руками котлеты. Обжарьте на 1 ст. л. масла по 3–4 минуты с каждой стороны, накройте и доведите на слабом огне 6–8 минут.","Брокколи (100 г) разберите на соцветия и отварите 4–5 минут в подсоленной воде или на пару.","Подайте котлеты с брокколи."],tip:"Брокколи не переваривайте: она должна остаться ярко-зелёной."},
  138: {prep:8,cook:32,servings:1,steps:["Лук (30 г) и морковь (40 г) нарежьте, картофель (80 г) — кубиками. Треску (120 г) нарежьте кусочками 3 см.","Залейте овощи 500 мл воды, добавьте соль и лавровый лист, доведите до кипения и варите 12 минут.","Добавьте треску и варите на слабом огне 8–10 минут, не помешивая энергично.","Добавьте перец и зелень, дайте настояться 5 минут."],tip:"Рыбу добавляйте в конце и не мешайте, чтобы куски остались целыми."},
  139: {prep:8,cook:22,servings:1,steps:["Макароны (90 г) отварите в подсоленной воде на минуту меньше указанного на упаковке. Отлейте полстакана отвара.","Грудку (120 г) нарежьте полосками, посолите, поперчите и обжарьте на 1 ст. л. масла 6–7 минут.","Влейте сливки (50 г), добавьте натёртый сыр (20 г) и 3–4 ст. л. отвара, прогрейте 2–3 минуты на слабом огне до однородного соуса.","Добавьте макароны и перемешайте на огне 1 минуту."],tip:"Отвар от макарон помогает соусу стать гладким и обволакивать пасту."},
  140: {prep:8,cook:32,servings:1,steps:["Лук (40 г) нарежьте, морковь (50 г) натрите. Консервированную фасоль (80 г) промойте.","Обжарьте лук с морковью на 1 ст. л. масла 5 минут, добавьте томатную пасту (20 г) и жарьте 2 минуты.","Влейте 500 мл горячей воды, добавьте лавровый лист и соль, доведите до кипения и варите 10 минут.","Добавьте фасоль и варите ещё 10 минут. Часть супа пробейте блендером."],tip:"Часть супа можно пробить блендером — так он станет гуще без муки и картофеля."},
  141: {prep:5,cook:35,servings:1,steps:["Говядину (120 г) нарежьте тонкими брусочками, лук (40 г) — кубиками, морковь (40 г) — соломкой. Гречку (80 г) промойте.","В кастрюле с толстым дном на 1 ст. л. масла обжарьте говядину 5 минут, добавьте лук и морковь и жарьте 4 минуты.","Влейте 150 мл горячей воды, посолите, накройте и тушите 15 минут.","Добавьте гречку и 160 мл горячей воды, доведите до кипения и варите под крышкой на слабом огне 15 минут. Оставьте на 5–10 минут."],tip:"Режьте говядину тонко, и она быстро станет мягкой."},
  142: {prep:8,cook:22,servings:1,steps:["Киноа (70 г) промойте, залейте 140 мл воды, посолите и варите под крышкой на слабом огне 12–15 минут. Оставьте на 5 минут.","Грудку (120 г) нарежьте кубиками 2 см, перец (60 г) — полосками, кабачок (60 г) — кубиками.","На 1 ст. л. масла обжарьте курицу 6–7 минут, добавьте перец и кабачок и жарьте ещё 6–7 минут. Посолите и поперчите.","Смешайте с киноа."],tip:"Киноа обязательно промывайте: на зёрнах есть горькое защитное покрытие."},
  143: {prep:8,cook:32,servings:1,steps:["Говядину (60 г) залейте 500 мл холодной воды, доведите до кипения, снимите пену и варите 25 минут.","Яйцо (50 г) отварите вкрутую 9–10 минут, охладите и нарежьте.","Картофель (60 г) нарежьте кубиками, добавьте в бульон и варите 10 минут.","Шпинат (80 г) порубите, добавьте в суп вместе с солью и перцем и варите 2–3 минуты.","Подайте с яйцом и зеленью."],tip:"Шпинат закладывайте в самом конце: он должен остаться ярко-зелёным."},
  144: {prep:8,cook:22,servings:1,steps:["Рис (80 г) промойте, залейте 160 мл воды, посолите и варите под крышкой на слабом огне 12–15 минут. Оставьте на 5 минут.","Лук (30 г) нарежьте, морковь (40 г) натрите. Консервированный нут (80 г) промойте и обсушите.","На 1 ст. л. масла обжарьте лук с морковью 5 минут, добавьте 1–2 ч. л. карри и жарьте 30 секунд.","Добавьте нут и 80 мл воды, тушите 8 минут. Смешайте с рисом."],tip:"Карри нужно обжарить в масле 30 секунд — так раскрывается вкус специй."},
  145: {prep:8,cook:7,servings:1,steps:["Яйцо (50 г) отварите вкрутую 9–10 минут, охладите и очистите.","Салат (40 г) порвите, огурец (50 г) нарежьте кружками, помидор (60 г) — дольками. Слейте жидкость с тунца (80 г).","Выложите на тарелку салат, огурец и помидор, сверху — тунец и четвертинки яйца.","Заправьте 1 ст. л. оливкового масла и лимонным соком, поперчите."],tip:"Классический нисуаз делают с анчоусами и оливками, но и упрощённый вариант получается вкусным."},
  146: {prep:5,cook:15,servings:1,steps:["Макароны (100 г) отварите в подсоленной воде по инструкции. Отлейте полстакана отвара и слейте воду.","Сыр (50 г) натрите на мелкой тёрке, зелень (15 г) нарежьте.","Верните макароны в кастрюлю, добавьте сыр и 2–3 ст. л. отвара и перемешивайте 1 минуту, пока сыр не расплавится.","Посыпьте зеленью и перцем."],tip:"Отвар помогает сыру равномерно расплавиться и обволочь макароны."},
  147: {prep:8,cook:27,servings:1,steps:["Рис (70 г) промойте, залейте 140 мл воды, посолите и варите под крышкой на слабом огне 12–15 минут. Оставьте на 5 минут.","Лук (30 г) нарежьте, курицу (140 г) — кусочками 2–3 см. На 1 ст. л. масла обжарьте лук 3 минуты, добавьте курицу и жарьте 5 минут.","Влейте томатный соус (80 г) и 50 мл воды, посолите, поперчите, накройте и тушите 12–15 минут.","Подайте курицу с рисом и зеленью."],tip:"Курица в соусе вкуснее, если дать ей постоять под крышкой 5 минут."},
  148: {prep:10,cook:25,servings:1,steps:["Кабачок (80 г), перец (60 г) и помидор (80 г) нарежьте кубиками. Консервированный нут (80 г) промойте.","На 1 ст. л. масла обжарьте перец 3 минуты, добавьте кабачок и жарьте ещё 3 минуты.","Добавьте помидор и 50 мл воды, соль, перец и паприку. Тушите под крышкой 10 минут.","Добавьте нут, тушите 5 минут и посыпьте зеленью."],tip:"Нут достаточно прогреть: он уже готов, если консервированный."},
  149: {prep:10,cook:45,servings:1,steps:["Перловку (40 г) промойте. Говядину (80 г) залейте 600 мл холодной воды, доведите до кипения, снимите пену, добавьте перловку и варите на слабом огне 30 минут.","Лук (30 г) нарежьте, морковь (40 г) натрите и обжарьте на 1 ст. л. масла 5 минут.","В суп добавьте картофель (60 г) кубиками и варите 10 минут. Затем добавьте зажарку, лавровый лист, соль и перец и варите 5 минут.","Дайте настояться 10 минут и подавайте с зеленью."],tip:"Если перловку замочить на пару часов, суп сварится быстрее."},
  150: {prep:8,cook:17,servings:1,steps:["Лапшу (80 г) отварите по инструкции, откиньте и ополосните холодной водой.","Грудку (120 г) нарежьте тонкими полосками, перец (50 г) — соломкой.","В сильно разогретой сковороде на 1 ст. л. масла жарьте курицу 5–6 минут до золотистого цвета, добавьте перец и жарьте 2–3 минуты.","Добавьте лапшу, соевый соус (15 г) и 2 ст. л. воды. Жарьте 2 минуты, постоянно помешивая."],tip:"Все ингредиенты для вока нужно нарезать заранее: готовится очень быстро."},
  151: {prep:10,cook:40,servings:1,steps:["Разогрейте духовку до 200 °C. Картофель (150 г) нарежьте дольками, смешайте с половиной масла (10 г), солью, перцем и паприкой и выложите на противень.","Запекайте картофель 15 минут.","Грудку (150 г) посолите, поперчите, смажьте оставшимся маслом и положите к картофелю.","Запекайте ещё 22–25 минут, один раз перемешав картофель, до готовности курицы. Дайте мясу отдохнуть 5 минут."],tip:"Курицу нарежьте после 5 минут отдыха, чтобы сок остался внутри."},
  152: {prep:10,cook:20,servings:1,steps:["Треску (150 г) обсушите, нарежьте кусками по 3–4 см, посолите и поперчите.","Для кляра взбейте яйцо (25 г) с мукой (20 г), щепоткой соли и 3 ст. л. холодной воды до консистенции густой сметаны.","Обмакивайте рыбу в кляр и жарьте на сковороде с 2 ст. л. масла на среднем огне по 3–4 минуты с каждой стороны до золотистой корочки. Выложите на бумажное полотенце.","Салат (50 г) порвите, заправьте лимонным соком и каплей масла, подайте с рыбой."],tip:"Кляр должен быть густым, как сметана, иначе он стечёт с рыбы."},
  153: {prep:10,cook:20,servings:1,steps:["Кабачок (100 г) и баклажан (80 г) нарежьте пластинами толщиной 1 см, перец (80 г) — крупными кусками. Смешайте с 1 ст. л. масла, солью и перцем.","Обжаривайте на сильно разогретой сковороде-гриль (или в духовке при 220 °C) по 3–4 минуты с каждой стороны до румяных полосок.","Выложите на блюдо, раскрошите сверху фету (50 г) и посыпьте зеленью."],tip:"Овощи для гриля нужно нарезать пластинами, тогда на них остаются красивые полоски."},
  154: {prep:10,cook:30,servings:1,steps:["Индейку (130 г) нарежьте кубиками 2–3 см, капусту (150 г) — тонкой соломкой, морковь (40 г) натрите, лук (30 г) нарежьте.","На 1 ст. л. масла обжарьте индейку 5–6 минут, добавьте лук и морковь и жарьте 4 минуты.","Добавьте капусту, соль, перец, лавровый лист и 80 мл воды. Накройте и тушите 15–20 минут до мягкости."],tip:"Индейка постная, поэтому тушите её в небольшом количестве воды и не пересушивайте."},
  155: {prep:5,cook:10,servings:1,steps:["Сыр (40 г) натрите на крупной тёрке, зелень (10 г) мелко нарежьте. Яйца (120 г) взбейте с солью, перцем и 2 ст. л. воды.","Разогрейте сковороду с 1 ч. л. масла на среднем огне и влейте яйца.","Когда края схватятся (через 2–3 минуты), посыпьте половину омлета сыром и зеленью и накройте крышкой на 2 минуты.","Сложите омлет пополам и сразу подайте."],tip:"Не пережаривайте омлет: он должен остаться нежным и чуть влажным внутри."},
  156: {prep:8,cook:17,servings:1,steps:["Рис (70 г) промойте, залейте 140 мл воды, посолите и варите под крышкой на слабом огне 12–15 минут. Оставьте на 5 минут.","Креветки (150 г) разморозьте и обсушите, чеснок (10 г) мелко нарежьте.","Разогрейте масло (10 г) в сковороде, прогрейте чеснок 30 секунд, добавьте креветки и жарьте 2–3 минуты до розового цвета. Посолите и поперчите.","Подайте креветки с рисом и зеленью."],tip:"Чеснок нельзя пережаривать: он становится горьким уже через минуту."},
  157: {prep:15,cook:30,servings:1,steps:["Рис (30 г) отварите 7 минут в подсоленной воде. Лук (30 г) мелко нарежьте. Смешайте фарш (100 г) с рисом, луком, солью и перцем.","Кабачок (200 г) разрежьте вдоль пополам, ложкой выберите мякоть, оставив стенки толщиной около 1 см. Мякоть мелко порубите и добавьте в фарш.","Наполните «лодочки» начинкой, уложите в форму и влейте на дно 50 мл воды.","Накройте фольгой и запекайте при 180 °C 25 минут, затем снимите фольгу и запекайте ещё 5–7 минут."],tip:"Мякоть кабачка не выбрасывайте: она делает начинку сочнее."},
  158: {prep:8,cook:17,servings:1,steps:["Тофу (150 г) обсушите и нарежьте кубиками по 2 см. Брокколи (100 г) разберите на соцветия, перец (50 г) нарежьте полосками.","Обжарьте тофу на 1 ст. л. масла 6–7 минут до золотистой корочки и переложите на тарелку.","В той же сковороде обжарьте брокколи и перец 4 минуты, влейте 50 мл воды и тушите 3 минуты под крышкой.","Верните тофу, добавьте соевый соус (15 г) и прогрейте 1–2 минуты. Дополнительно солить не нужно."],tip:"Тофу нужно хорошо обсушить, тогда он покроется золотистой корочкой, а не будет «варёным»."},
  159: {prep:15,cook:20,servings:1,steps:["Грудку (150 г) нарежьте кубиками по 3 см, посолите, поперчите, добавьте паприку и 1 ст. л. масла. Оставьте на 10 минут.","Перец (80 г) и кабачок (80 г) нарежьте крупными кусками.","Нанижите на шпажки курицу, перец и кабачок.","Запекайте при 200 °C 18–20 минут, перевернув через 10 минут (или жарьте на сковороде-гриль по 4–5 минут с каждой стороны)."],tip:"Деревянные шпажки замочите в воде на 20 минут, чтобы они не подгорели."},
  160: {prep:5,cook:0,servings:1,steps:["Огурец (80 г) нарежьте мелкими кубиками, зелень (15 г) мелко нарежьте.","Смешайте с творогом (180 г), добавьте соль и перец."],tip:"Для мягкости можно добавить 1–2 ст. л. кефира."},
  161: {prep:8,cook:17,servings:1,steps:["Разогрейте духовку до 200 °C. Шпинат (80 г) промойте, обсушите и выложите на дно формы, слегка посолите и поперчите.","Лосось (150 г) посолите, поперчите, сбрызните соком лимона (15 г) и положите на шпинат.","Накройте фольгой и запекайте 12–15 минут.","Подавайте с ломтиками лимона."],tip:"Шпинат осядет и пропитается соком рыбы — это самая вкусная часть блюда."},
  162: {prep:8,cook:22,servings:1,steps:["Гречку (80 г) промойте, залейте 160 мл воды, посолите, доведите до кипения и варите под крышкой 15 минут. Оставьте на 5 минут.","Лук (40 г) мелко нарежьте, грибы (120 г) — пластинами.","На 1 ст. л. масла обжарьте лук 3 минуты, добавьте грибы и жарьте 8 минут до испарения влаги. Посолите и поперчите.","Добавьте сметану (30 г) и 2 ст. л. воды, прогрейте 2 минуты на слабом огне. Подайте с гречкой."],tip:"Сметану добавляйте в конце и не кипятите, чтобы она не свернулась."},
  163: {prep:15,cook:25,servings:1,steps:["Картофель (180 г) очистите, нарежьте, залейте холодной водой, посолите и варите 15–20 минут до мягкости.","Лук (30 г) очень мелко нарежьте. Смешайте фарш (150 г) с луком, яйцом (25 г), солью и перцем. Если фарш жидкий, добавьте ложку муки или манки.","Сформируйте мокрыми руками котлеты, обжарьте на 1 ст. л. масла по 3–4 минуты с каждой стороны, затем накройте и доведите на слабом огне 5 минут.","Слейте воду с картофеля, разомните толкушкой с кусочком масла и небольшим количеством отвара. Подайте с котлетами."],tip:"Картофель для пюре сливайте полностью и сразу разминайте горячим."},
  164: {prep:10,cook:30,servings:1,steps:["Киноа (50 г) промойте, залейте 100 мл воды, посолите, варите под крышкой 12–15 минут. Оставьте на 5 минут.","Баклажан (80 г), кабачок (80 г) и помидор (80 г) нарежьте кубиками по 2 см.","На 1 ст. л. масла обжарьте баклажан 5 минут, добавьте кабачок, через 3 минуты — помидор. Посолите, поперчите, добавьте сушёные травы.","Тушите под крышкой 12–15 минут до мягкости. Подайте поверх киноа."],tip:"Это упрощённая версия рататуя: овощи тушатся вместе, а не выкладываются слоями."},
  165: {prep:8,cook:17,servings:1,steps:["Грудку (160 г) разрежьте вдоль на два пласта, слегка отбейте, посолите и поперчите. Брокколи (150 г) разберите на соцветия.","Разогрейте сковороду с маслом (8 г) и обжарьте грудку по 5–6 минут с каждой стороны. Дайте отдохнуть 3 минуты.","Брокколи отварите в подсоленной воде 4–5 минут или приготовьте на пару.","Подайте стейк с брокколи и сбрызните лимонным соком."],tip:"Ровная толщина стейка — залог равномерной прожарки."},
  166: {prep:5,cook:10,servings:1,steps:["Лук (30 г) мелко нарежьте, перец (50 г) и помидоры (150 г) — кубиками.","На 1 ст. л. масла обжарьте лук 2 минуты, добавьте перец и жарьте 2 минуты.","Добавьте помидоры, посолите и тушите 4 минуты до мягкости.","Вбейте яйца (100 г), аккуратно перемешайте и готовьте 2–3 минуты на слабом огне."],tip:"Блюдо похоже на менемен: яйцо должно остаться нежным и слегка влажным."},
  167: {prep:8,cook:27,servings:1,steps:["Лук (40 г) нарежьте, морковь (50 г) натрите. Консервированную фасоль (100 г) промойте.","На 1 ст. л. масла обжарьте лук и морковь 5 минут, добавьте томатную пасту (25 г) и жарьте 2 минуты.","Влейте 100 мл воды, добавьте фасоль, соль, перец, лавровый лист и паприку. Тушите под крышкой 15 минут.","Посыпьте зеленью."],tip:"Тушёная фасоль хороша и горячей, и холодной, а на второй день вкуснее."},
  168: {prep:8,cook:17,servings:1,steps:["Макароны (90 г) отварите в подсоленной воде на минуту меньше, чем указано на упаковке. Отлейте полстакана отвара.","Чеснок (8 г) тонко нарежьте. Креветки (120 г) разморозьте и обсушите.","Разогрейте масло (10 г) в сковороде, прогрейте чеснок 30 секунд, добавьте креветки и жарьте 2–3 минуты до розового цвета. Посолите.","Добавьте макароны и 3–4 ст. л. отвара, перемешайте на огне 1 минуту. Посыпьте зеленью."],tip:"Отвар помогает соусу стать шелковистым."},
  169: {prep:10,cook:45,servings:1,steps:["Разогрейте духовку до 180 °C. Говядину (150 г) нарежьте кусками 3 см и обжарьте на 1 ст. л. масла 5 минут со всех сторон.","Картофель (100 г), морковь (50 г) и лук (40 г) нарежьте крупными кусками.","Выложите мясо и овощи в жаропрочную форму, посолите, поперчите, добавьте лавровый лист и влейте 100 мл воды.","Накройте фольгой и запекайте 40 минут. Снимите фольгу и держите ещё 5 минут до лёгкой румяности."],tip:"Накрытая фольгой форма держит влагу и не даёт мясу пересохнуть."},
  170: {prep:10,cook:45,servings:1,steps:["Разогрейте духовку до 200 °C. Свёклу (120 г) вымойте, заверните в фольгу и запекайте 40–45 минут до мягкости (проверьте ножом).","Остудите свёклу, очистите и нарежьте кубиками или дольками.","Салат (40 г) порвите и выложите на тарелку, сверху положите свёклу, раскрошите фету (40 г) и добавьте грецкие орехи (15 г).","Заправьте 1 ч. л. оливкового масла и лимонным соком. Не солите: фета и так солёная."],tip:"Свёклу можно запечь заранее на несколько дней вперёд, тогда салат соберётся за 10 минут."},
  171: {prep:3,cook:0,servings:1,steps:["Банан (100 г) нарежьте и взбейте блендером с кефиром (250 г) до однородности."],tip:"Для густоты возьмите замороженный банан."},
  172: {prep:5,cook:0,servings:1,steps:["Морковь (100 г) очистите и нарежьте палочками.","Выложите хумус (50 г) в пиалу, сбрызните каплей масла и посыпьте паприкой. Макайте морковь."],tip:"Хумус можно заменить домашним: нут, лимонный сок, кунжутная паста, оливковое масло."},
  173: {prep:5,cook:0,servings:1,steps:["Хлеб (50 г) подсушите в тостере.","Намажьте арахисовой пастой (30 г). По желанию добавьте кружочки банана или щепотку корицы."],tip:"Банан или корица к такому тосту только добавят вкуса."},
  174: {prep:3,cook:0,servings:1,steps:["Выложите йогурт (150 г) в стакан и добавьте ягоды (60 г)."],tip:"Замороженные ягоды предварительно разморозьте."},
  175: {prep:3,cook:0,servings:1,steps:["Яблоко (150 г) нарежьте дольками и удалите сердцевину.","Выложите творог (80 г) в пиалу, посыпьте корицей и подавайте с яблоком."],tip:"Корица добавляет сладость без сахара."},
  176: {prep:1,cook:0,servings:1,steps:["Отмерьте орехи (30 г) и сухофрукты (30 г) и смешайте в небольшой миске.","Ешьте не из общей пачки, чтобы не съесть больше порции."],tip:"Порция в одной горсти — это примерно 50–60 г, больше лучше не брать: продукт очень калорийный."},
  177: {prep:3,cook:0,servings:1,steps:["Огурец (120 г) нарежьте кружками или полосками, сыр (30 г) — ломтиками.","Подайте вместе, добавьте перец."],tip:"Подойдёт любой твёрдый сыр, но следите за порцией: он калорийный."},
  178: {prep:3,cook:0,servings:1,steps:["Банан (50 г) нарежьте.","Налейте в блендер или шейкер 250 мл холодной воды, добавьте протеин (30 г) и банан, взбейте 30 секунд до однородности."],tip:"Если порошок плохо растворяется, добавьте сначала воду, потом порошок."},
  179: {prep:5,cook:0,servings:1,steps:["Хлеб (30 г) подсушите в тостере.","Авокадо (70 г) разомните вилкой с щепоткой соли и перцем и намажьте на хлеб."],tip:"Каплей лимонного сока можно сохранить цвет авокадо."},
  180: {prep:8,cook:0,servings:1,steps:["Огурец (40 г) натрите на мелкой тёрке и слегка отожмите. Зелень (15 г) мелко нарежьте.","Творог (120 г) разомните вилкой, смешайте с огурцом и зеленью, посолите и поперчите. Для мягкости добавьте ложку кефира.","Подайте на хлебце или с овощами."],tip:"Подходит и как закуска на хлебце, и как соус к овощам."},
  181: {prep:2,cook:0,servings:1,steps:["Банан (120 г) очистите и нарежьте кружочками.","Намажьте кружочки арахисовой пастой (25 г) или выложите пасту на тарелку и макайте в неё банан."],tip:"Выбирайте арахисовую пасту без сахара и пальмового масла."},
  182: {prep:7,cook:0,servings:1,steps:["Огурец (80 г) и помидор (80 г) нарежьте ломтиками, зелень (10 г) мелко нарежьте.","Смешайте, заправьте каплей масла и посолите."],tip:"Заправляйте салат прямо перед подачей, иначе овощи пустят сок."},
  183: {prep:2,cook:0,servings:1,steps:["Налейте кефир (250 г) в стакан.","Добавьте отруби (20 г), перемешайте и оставьте на 2–3 минуты, чтобы они набухли."],tip:"Если отруби для вас в новинку, начните с 1 ч. л. и пейте больше воды в течение дня."},
  184: {prep:3,cook:0,servings:1,steps:["Яблоко (120 г) нарежьте дольками, сыр (40 г) — ломтиками.","Подайте вместе."],tip:"Хорошо сочетаются кисло-сладкие яблоки и выдержанный сыр."},
  185: {prep:5,cook:0,servings:1,steps:["Хлеб (40 г) нарежьте полосками и подсушите в тостере или духовке до хруста.","Подайте с хумусом (60 г) для макания."],tip:"Для хрустящих «хлебцов» не пересушивайте хлеб: 3–5 минут достаточно."},
  186: {prep:5,cook:0,servings:1,steps:["Взбейте в блендере кефир (200 г), ягоды (80 г) и банан (50 г) 30–40 секунд до однородности.","Подайте сразу."],tip:"Смузи лучше выпить сразу: ягодные семечки со временем придают горечь."},
  187: {prep:3,cook:7,servings:1,steps:["Яйцо (50 г) опустите в кипящую воду и варите 8–9 минут. Охладите в холодной воде и очистите.","Огурец (60 г) и помидор (60 г) нарежьте, посолите. Подайте с яйцом."],tip:"Яйцо вкрутую сварите заранее — на несколько дней хватит запаса."},
  188: {prep:2,cook:0,servings:1,steps:["Выложите творог (150 г) в миску и полейте мёдом (20 г)."],tip:"Выбирайте мягкий творог, он лучше сочетается с мёдом."},
  189: {prep:1,cook:0,servings:1,steps:["Отмерьте порцию орехов (35 г) и пересыпьте в небольшую миску.","Не ешьте прямо из пачки, чтобы не съесть больше порции."],tip:"Не берите соленые или обжаренные орехи — полезнее сырые или слегка подсушенные."},
  190: {prep:5,cook:0,servings:1,steps:["Нарежьте сыр (40 г) ломтиками и выложите на галеты (40 г).","По желанию добавьте кружок огурца или помидора."],tip:"Подойдёт несладкое галетное печенье."},
  191: {prep:10,cook:35,servings:1,steps:["Свёклу (80 г) и морковь (40 г) натрите, лук (30 г) нарежьте. Обжарьте на 1 ст. л. масла 5 минут, добавьте томатную пасту (15 г), 1 ч. л. уксуса и 2 ст. л. воды, тушите 5 минут.","В 600 мл кипящей подсоленной воды положите картофель (60 г) кубиками и варите 8 минут.","Добавьте тонко нашинкованную капусту (80 г) и варите 7 минут.","Добавьте зажарку, лавровый лист и перец, варите ещё 5 минут. Дайте настояться 10 минут.","Подавайте с зеленью и сметаной."],tip:"Уксус или лимонный сок в зажарке сохраняет яркий цвет свёклы."},
  192: {prep:8,cook:27,servings:1,steps:["Гречку (70 г) промойте, залейте 140 мл воды, посолите, доведите до кипения, накройте и варите на слабом огне 15 минут. Оставьте под крышкой на 10 минут.","Куриную грудку (150 г) разрежьте вдоль на два тонких пласта, слегка отбейте, посолите и поперчите.","На сковороде с 1 ст. л. масла обжарьте грудку по 5–6 минут с каждой стороны до золотистой корочки; внутри мясо должно быть белым. Дайте отдохнуть 3 минуты.","Огурец (50 г) нарежьте ломтиками и подайте с гречкой и курицей."],tip:"Дайте курице отдохнуть 3 минуты после сковороды: сок останется внутри."},
  193: {prep:5,cook:10,servings:1,steps:["Кабачок (100 г) нарежьте тонкими полукружками, зелень (10 г) мелко нарежьте.","На сковороде с 1 ч. л. масла обжарьте кабачок 3–4 минуты до мягкости. Посолите.","Яйца (100 г) взбейте с перцем и 2 ст. л. воды, залейте кабачок и посыпьте зеленью.","Накройте крышкой и готовьте на слабом огне 4–5 минут."],tip:"Кабачок можно натереть и отжать, тогда омлет будет нежнее."},
  194: {prep:8,cook:17,servings:1,steps:["Макароны (90 г) отварите в подсоленной воде по инструкции. Отлейте полстакана отвара.","Для песто взбейте блендером зелень (30 г) (базилик или петрушку), сыр (20 г), 2 ст. л. оливкового масла, 2 ст. л. воды и щепотку соли до пастообразного состояния.","Грудку (120 г) нарежьте полосками, посолите, поперчите и обжарьте на 1 ст. л. масла 6–7 минут.","Смешайте горячую пасту с курицей и песто, разбавляя отваром до нужной консистенции."],tip:"Песто не нагревайте сильно, иначе зелень потемнеет и станет горькой."},
  195: {prep:8,cook:22,servings:1,steps:["Лук (30 г) нарежьте и обжарьте на 1 ч. л. масла 3 минуты. Тыкву (200 г) и картофель (50 г) нарежьте кубиками.","Добавьте овощи, залейте 400 мл воды, посолите и варите 15 минут до мягкости.","Влейте сливки (40 г) и пробейте блендером до гладкости, разбавляя отваром.","Прогрейте, не доводя до кипения, поперчите и добавьте щепотку мускатного ореха."],tip:"Не кипятите суп после добавления сливок."},
  196: {prep:12,cook:28,servings:1,steps:["Рис (70 г) промойте, залейте 140 мл воды, посолите, варите под крышкой на слабом огне 12–15 минут. Оставьте на 5 минут.","Фарш (120 г) смешайте с яйцом (25 г), солью и перцем, вымесите и сформируйте тефтели размером с грецкий орех.","Обжарьте на 1 ст. л. масла 4–5 минут до румяной корочки со всех сторон.","Влейте томатный соус (80 г) и 50 мл воды, накройте и тушите 12–15 минут. Подайте с рисом."],tip:"Тефтели не должны быть слишком крупными, тогда они быстро и равномерно проготовятся."},
  197: {prep:8,cook:30,servings:1,steps:["Разогрейте духовку до 200 °C. Картофель (150 г) нарежьте дольками, посолите, смешайте с 1 ст. л. масла и перцем, выложите на противень и запекайте 15 минут.","Лосось (150 г) посолите, поперчите, сбрызните лимонным соком (15 г).","Выложите лосось к картофелю и запекайте ещё 12–15 минут.","Подавайте с дольками лимона."],tip:"Картофель ставьте в духовку первым: ему нужно в два раза больше времени, чем лососю."},
  198: {prep:8,cook:17,servings:1,steps:["Кабачок (150 г) натрите на мелкой тёрке, посолите, оставьте на 5 минут и отожмите лишнюю жидкость.","Добавьте яйцо (50 г), муку (40 г) и перец, перемешайте до густого теста.","Выкладывайте ложкой на разогретую сковороду с 2 ст. л. масла и жарьте по 2–3 минуты с каждой стороны до золотистого цвета. Промокните бумажным полотенцем.","Подайте со сметаной (30 г) и зеленью."],tip:"Тёртый кабачок обязательно отожмите, иначе оладьи не прожарятся."},
  199: {prep:8,cook:32,servings:1,steps:["Курицу (100 г) залейте 600 мл холодной воды, доведите до кипения, снимите пену и варите на слабом огне 15 минут.","Лук (30 г) мелко нарежьте, морковь (40 г) натрите и добавьте в бульон. Варите 5 минут.","Добавьте промытый рис (40 г), соль, лавровый лист и варите 12–15 минут.","Достаньте курицу, разберите на кусочки и верните в суп. Добавьте перец и зелень."],tip:"Рис в бульоне набухает: если суп стоит долго, добавьте воды при разогреве."},
  200: {prep:5,cook:15,servings:1,steps:["Киноа (50 г) промойте, залейте 100 мл воды, посолите и варите под крышкой на слабом огне 12–15 минут. Остудите.","Огурец (60 г), помидор (80 г) и фету (40 г) нарежьте кубиками, маслины (20 г) — кольцами.","Смешайте всё, заправьте 1 ст. л. оливкового масла, щепоткой орегано и перцем."],tip:"Не солите салат: фета и маслины и так солёные."},

  // —— EXTRA 201–245: подробные рецепты ——
  201: {prep:15,cook:35,servings:1,steps:["Говядину (80 г) нарежьте соломкой, залейте 500 мл воды, доведите до кипения, снимите пену и варите 25 минут.","Лук (40 г) мелко нарежьте, обжарьте на 1 ст. л. масла 3 минуты. Добавьте томатную пасту (20 г) и прогрейте 1 минуту.","Колбасу (40 г) и солёные огурцы (40 г) нарежьте соломкой, добавьте в бульон вместе с зажаркой.","Варите ещё 8–10 минут, посолите по вкусу (учтите солёность огурцов). Дайте настояться 5 минут под крышкой."],tip:"Солянка любит разнообразие копчёностей: можно добавить немного охотничьих колбасок."},
  202: {prep:10,cook:30,servings:1,steps:["В 600 мл воды положите лук (40 г) целиком и морковь (40 г) кружочками, доведите до кипения.","Добавьте картофель (100 г) кубиками, варите 12 минут.","Лосось (120 г) нарежьте крупными кусками, аккуратно опустите в бульон, посолите и варите 8–10 минут на слабом огне.","Достаньте целый лук, добавьте зелень и каплю лимонного сока перед подачей."],tip:"Не дайте ухе сильно кипеть после закладки рыбы — мясо станет сухим."},
  203: {prep:20,cook:15,servings:1,steps:["Картофель (80 г) отварите в мундире 15 минут, остудите и нарежьте кубиками. Яйцо (50 г) сварите вкрутую, очистите и нарежьте.","Огурец (80 г) и зелень нарежьте мелким кубиком.","Смешайте овощи и яйцо, залейте холодным кефиром (250 г), посолите и поперчите.","При желании добавьте немного газированной воды для лёгкости. Подавайте сразу."],tip:"Все ингредиенты и кефир должны быть холодными — иначе окрошка «поплывёт»."},
  204: {prep:5,cook:15,servings:1,steps:["Вскипятите подсоленную воду. Пельмени (250 г) опустите в кипяток, аккуратно перемешайте.","После всплытия варите 5–7 минут (или по инструкции на упаковке).","Слейте воду, заправьте сливочным маслом (10 г).","Подайте со сметаной (30 г) и свежим перцем."],tip:"Не солите воду слишком сильно, если будете есть пельмени со сметаной и уксусом."},
  205: {prep:25,cook:20,servings:1,steps:["Картофель (150 г) отварите, разомните в пюре. Лук (40 г) обжарьте до золотистого цвета и вмешайте в пюре, посолите.","Из муки (100 г), 50 мл воды и щепотки соли замесите крутое тесто, раскатайте и вырежьте круги.","На каждый круг выложите начинку, защипните края полумесяцем.","Варите в подсоленном кипятке 5–7 минут после всплытия. Подайте с обжаренным луком или сметаной."],tip:"Края смачивайте водой — так защип будет плотнее и начинка не вытечет."},
  206: {prep:15,cook:15,servings:1,steps:["Картофель (250 г) очистите и натрите на мелкой тёрке, отожмите лишний сок.","Смешайте с яйцом (50 г), мукой (20 г), солью и перцем.","Выкладывайте ложкой на разогретую сковороду с маслом, жарьте по 3–4 минуты с каждой стороны до румяной корочки.","Подайте со сметаной (40 г)."],tip:"Сок обязательно отожмите: иначе драники будут серыми и развалятся."},
  207: {prep:25,cook:40,servings:1,steps:["Листья капусты (200 г) бланшируйте 3–5 минут в кипятке, срежьте толстые жилки.","Рис (40 г) отварите до полуготовности. Смешайте с фаршем (120 г), солью и перцем.","Заверните начинку в листья конвертом, уложите швом вниз в сотейник.","Залейте разведённой томатной пастой (30 г) и тушите под крышкой 30–35 минут. Подайте со сметаной."],tip:"Слишком толстый кочан: снимайте листья по одному, ошпаривая кочан кипятком."},
  208: {prep:15,cook:30,servings:1,steps:["Свёклу (80 г), картофель (80 г) и морковь (40 г) отварите в мундире до готовности, остудите и очистите.","Нарежьте все овощи и солёные огурцы (40 г) одинаковым мелким кубиком.","Заправьте растительным маслом (15 г), аккуратно перемешайте, посолите по вкусу.","Дайте постоять 10 минут перед подачей."],tip:"Режьте овощи одинаково — так винегрет выглядит аккуратнее и вкуснее."},
  209: {prep:20,cook:25,servings:1,steps:["Картофель (80 г), морковь (40 г) и яйцо (50 г) отварите, остудите, очистите и нарежьте кубиком.","Колбасу (60 г) и огурец (по желанию) нарежьте кубиком, добавьте горошек (40 г).","Заправьте майонезом (30 г), посолите и уберите в холодильник на 20–30 минут."],tip:"Остужайте продукты полностью: тёплый оливье быстро закисает."},
  210: {prep:15,cook:30,servings:1,steps:["Смешайте фарш (150 г) с сырым рисом (30 г), яйцом (25 г), солью и перцем, сформируйте тефтели.","Обжарьте тефтели на масле по 2 минуты со всех сторон до корочки.","Сметану (60 г) разведите 100 мл воды, посолите, залейте тефтели.","Тушите под крышкой на слабом огне 20–25 минут."],tip:"Рис в фарше можно заменить манкой (1 ст. л.) — тефтели будут нежнее."},
  211: {prep:10,cook:30,servings:1,steps:["Лук (40 г) и чеснок (5 г) обжарьте на масле 3 минуты, добавьте фарш (120 г) и жарьте до изменения цвета.","Добавьте нарезанные помидоры (150 г) или томаты в собственном соку, тушите 15 минут, посолите и поперчите.","Спагетти (90 г) отварите в подсоленной воде al dente, слейте.","Смешайте пасту с соусом на сковороде 1 минуту и подайте."],tip:"Немного воды от пасты сделает соус шелковистым."},
  212: {prep:8,cook:15,servings:1,steps:["Спагетти (90 г) отварите al dente, отлейте полстакана воды.","Бекон (60 г) нарежьте полосками и обжарьте до хруста, снимите с огня.","Яйцо (50 г) взбейте с пармезаном (30 г) и перцем.","Смешайте горячую пасту с беконом, снимите с огня и быстро введите яичную смесь, добавив ложку воды от пасты. Подавайте сразу."],tip:"Главное — не греть яйцо на огне, иначе получится скрэмбл."},
  213: {prep:20,cook:45,servings:1,steps:["Обжарьте фарш (120 г) с луком до готовности, добавьте томатную пасту (40 г) и 50 мл воды, тушите 10 минут.","Молоко (100 г) нагрейте, загустите 1 ч. л. муки и щепоткой соли — получится простой бешамель.","В форме чередуйте листы лазаньи (80 г), мясной соус, бешамель и сыр (60 г).","Запекайте при 180 °C 35–40 минут до золотистой корочки. Дайте отдохнуть 10 минут."],tip:"Сухие листы можно не отваривать — соуса и бешамеля достаточно для размягчения."},
  214: {prep:15,cook:40,servings:1,steps:["Баклажан (100 г), цукини (100 г), перец (80 г) и помидор (120 г) нарежьте кружочками одинаковой толщины.","Выложите овощи в форму «по кругу» или слоями, посолите, поперчите, сбрызните маслом (20 г).","Накройте фольгой и запекайте при 180 °C 25 минут, затем без фольги ещё 15 минут.","Подайте тёплым или комнатной температуры."],tip:"Баклажан можно заранее посолить и отжать — уйдёт горечь."},
  215: {prep:10,cook:35,servings:1,steps:["Лук (200 г) тонко нарежьте полукольцами и томите на сливочном масле (15 г) 20–25 минут до карамелизации.","Влейте 400 мл воды или бульона, посолите и варите 10 минут.","Хлеб (40 г) подсушите, натрите сыром (40 г).","Разлейте суп по мискам, сверху гренки с сыром, при возможности загратинируйте под грилем 2–3 минуты."],tip:"Терпение на этапе лука — половина вкуса французского супа."},
  216: {prep:10,cook:20,servings:1,steps:["Картофель (150 г) нарежьте тонкими ломтиками, обсушите. Обжарьте на масле до мягкости и лёгкой корочки, добавьте лук (40 г).","Яйца (120 г) взбейте с солью и перцем, залейте картофель.","Готовьте на слабом огне под крышкой 8–10 минут, до плотной структуры.","Переверните с помощью тарелки и при необходимости подрумяньте вторую сторону 2 минуты."],tip:"Ломтики картофеля должны быть тонкими, иначе середина останется сырой."},
  217: {prep:10,cook:0,servings:1,steps:["Огурец (80 г) и помидор (100 г) нарежьте крупными кусками.","Добавьте фету (50 г) кубиками и маслины (30 г).","Заправьте оливковым маслом (15 г), посыпьте орегано и свежим перцем. Не солите."],tip:"Овощи режьте крупно — это классика греческого салата, а не «оливье»."},
  218: {prep:25,cook:45,servings:1,steps:["Баклажан (150 г) нарежьте пластинами, посолите, обсушите и обжарьте до мягкости.","Фарш (120 г) обжарьте с луком и помидором (80 г) 10–12 минут.","Слоями выложите баклажаны и фарш в форму, сверху залейте молоком (80 г) с сыром (40 г).","Запекайте при 180 °C 30–35 минут."],tip:"Лишнюю горечь баклажанов убирает соль и обсушивание бумажным полотенцем."},
  219: {prep:20,cook:25,servings:1,steps:["Из муки (120 г), 60 мл воды, щепотки соли и ½ яйца замесите мягкое тесто, дайте отдохнуть 15 минут.","Сулугуни (120 г) натрите, смешайте с кусочком масла.","Раскатайте лепёшку, в центр выложите сыр, защипните конверт и снова раскатайте в круг.","Выпекайте при 220 °C 12–15 минут до румяных пузырей. Смажьте маслом."],tip:"Сыр не должен быть слишком влажным — иначе тесто размокнет."},
  220: {prep:15,cook:40,servings:1,steps:["Говядину (120 г) нарежьте кубиками, залейте водой, доведите до кипения и снимите пену.","Добавьте лук (40 г), томатную пасту (30 г) и варите 25 минут.","Всыпьте промытый рис (40 г), чеснок (10 г), соль и хмели-сунели, варите ещё 12–15 минут.","Подайте с зеленью кинзы."],tip:"Харчо должно быть чуть острым и кисловатым — регулируйте томатом и перцем."},
  221: {prep:10,cook:30,servings:1,steps:["Фасоль (120 г) отварите до мягкости (или используйте консервированную, слив жидкость).","Лук (50 г) обжарьте до золотистого, добавьте фасоль и немного воды, тушите 10 минут.","Грецкий орех (20 г) измельчите с чесноком и кинзой, вмешайте в фасоль.","Посолите, поперчите, подайте тёплым или холодным."],tip:"Лобио вкуснее на следующий день — дайте настояться в холодильнике."},
  222: {prep:10,cook:40,servings:1,steps:["Курицу (180 г) нарежьте крупными кусками, обжарьте до румяности.","Добавьте лук (60 г) и перец (60 г), готовьте 5 минут.","Помидоры (150 г) нарежьте, выложите к курице, посолите, добавьте хмели-сунели.","Тушите под крышкой 25–30 минут до мягкости. Подайте с лавашом или рисом."],tip:"Много лука — характерная черта настоящего чахохбили."},
  223: {prep:15,cook:55,servings:1,steps:["Говядину (120 г) обжарьте на сильном огне до корочки, переложите.","В том же масле обжарьте лук (50 г) и морковь (80 г) соломкой 8–10 минут (зирвак).","Верните мясо, залейте горячей водой чуть выше продуктов, тушите 25 минут.","Выложите промытый рис (90 г) ровным слоем, не мешая, долейте воды на 1 см выше риса. Варите без крышки до выкипания, затем 15 минут под крышкой на минимальном огне."],tip:"Плов не мешают ложкой после закладки риса — только слегка встряхивают казан."},
  224: {prep:15,cook:35,servings:1,steps:["Говядину (100 г) нарежьте соломкой и обжарьте до румяности.","Добавьте лук, морковь и перец соломкой, жарьте 7–8 минут.","Влейте 400 мл воды, посолите и тушите 10 минут.","Добавьте лапшу (90 г) и варите до готовности, в конце поперчите и добавьте чеснок."],tip:"Овощи для лагмана режьте длинной соломкой — так текстура «по-домашнему»."},
  225: {prep:15,cook:50,servings:1,steps:["Говядину (130 г) крупными кусками залейте холодной водой, доведите до кипения, снимите пену.","Варите 30 минут на слабом огне.","Добавьте картофель (100 г), морковь (50 г) и лук (40 г) крупными кусками, посолите.","Варите ещё 20 минут. Подайте с зеленью и чёрным перцем."],tip:"Шурпа должна быть наваристой и прозрачной: сильный кипеж сделает бульон мутным."},
  226: {prep:15,cook:20,servings:1,steps:["Нут (100 г) заранее замочите (или возьмите варёный/консервированный) и обсушите.","Измельчите нут с луком, петрушкой, солью и 1 ч. л. муки в пасту.","Сформируйте шарики и обжарьте во фритюре или на сковороде с маслом (25 г) до корочки со всех сторон.","Подайте с овощами или в пите."],tip:"Смесь не должна быть слишком влажной — иначе фалафель развалится на сковороде."},
  227: {prep:15,cook:15,servings:1,steps:["Курицу (140 г) нарежьте полосками, обжарьте со специями до готовности.","Овощи (помидор, огурец, капуста) тонко нашинкуйте.","На лаваш (80 г) выложите курицу и овощи, добавьте соус (йогурт с чесноком или майонез).","Плотно сверните рулетом и при желании слегка подрумяньте на сухой сковороде."],tip:"Не перегружайте начинкой — шаурма должна держаться и есться без «аварий»."},
  228: {prep:15,cook:30,servings:1,steps:["Курицу (160 г) нарежьте, замаринуйте в йогурте (60 г) со специями 15–30 минут.","Обжарьте курицу до румяности, добавьте лук и помидоры (100 г), тушите 15 минут.","Посолите, добавьте щепотку гарам масала или паприки.","Подайте с отварным рисом (70 г)."],tip:"Йогурт в маринаде делает курицу мягкой — не пропускайте этот шаг."},
  229: {prep:10,cook:30,servings:1,steps:["Чечевицу (80 г) промойте, залейте водой 1:3 и варите 20 минут.","Лук, чеснок и помидор обжарьте на масле 5 минут, добавьте к чечевице.","Протушите ещё 8–10 минут, посолите и поперчите.","При желании слегка пробейте толкушкой для кремовости."],tip:"Красная чечевица разваривается быстрее зелёной — следите, чтобы не пригорела."},
  230: {prep:10,cook:15,servings:1,steps:["Рис (90 г) лучше взять вчерашний, остывший.","На сильном огне обжарьте овощи 2–3 минуты, сдвиньте и пожарьте яйцо (50 г) всмятку, размешайте.","Добавьте рис, соевый соус (15 г) и жарьте, постоянно перемешивая, 3–4 минуты.","Подайте сразу, можно с зелёным луком."],tip:"Свежесваренный влажный рис даст кашу — для вока нужен подсохший."},
  231: {prep:15,cook:15,servings:1,steps:["Курицу (150 г) нарежьте кубиками, обжарьте на сильном огне до румяности, переложите.","В воке обжарьте перец (60 г) 2 минуты, верните курицу.","Добавьте соевый соус (20 г), щепотку сахара и арахис (20 г), быстро перемешайте.","Подайте с рисом (70 г)."],tip:"Кунг-пао готовят быстро и на сильном огне — все продукты должны быть заранее нарезаны."},
  232: {prep:5,cook:10,servings:1,steps:["Доведите 350 мл воды почти до кипения (не кипятите сильно).","В миске разведите мисо-пасту (25 г) с небольшим количеством горячей воды до гладкости, влейте в кастрюлю.","Добавьте тофу (80 г) кубиками и прогрейте 2–3 минуты.","Подайте с полосками нори и зелёным луком."],tip:"Кипяток убивает аромат мисо — держите суп на грани кипения."},
  233: {prep:10,cook:15,servings:1,steps:["Остывший рис (80 г) обжарьте с горошком и ложкой кетчупа 2–3 минуты.","Яйца (100 г) взбейте, вылейте на сковороду тонким слоем — получится омлет.","На край омлета выложите рис и сверните рулетом.","Переложите швом вниз, сверху можно полоской кетчупа."],tip:"Омлет должен оставаться чуть влажным, тогда он легко сворачивается."},
  234: {prep:15,cook:20,servings:1,steps:["Рис (90 г) отварите. Говядину (60 г) тонко нарежьте и обжарьте с соевым соусом.","Шпинат (40 г) бланшируйте 30 секунд, морковь (40 г) обжарьте соломкой.","В миске выложите рис, сверху овощи и мясо секторами, добавьте яйцо-глазунью.","Перемешайте всё прямо перед едой с соусом кочуджан или соевым."],tip:"Красота пибимпапа — в аккуратных «секторах» до перемешивания."},
  235: {prep:15,cook:15,servings:1,steps:["Рисовую лапшу (80 г) залейте кипятком на 5–7 минут, слейте.","Курицу (120 г) обжарьте, добавьте яйцо и быстро размешайте.","Выложите лапшу, ростки, соус (соевый + щепотка сахара + лайм/лимон) и арахис.","Жарьте, постоянно перемешивая, 2–3 минуты на сильном огне."],tip:"Не переварите лапшу: она дойдёт на сковороде."},
  236: {prep:10,cook:25,servings:1,steps:["В 400 мл воды положите слайсы грибов, перец чили и доведите до кипения.","Добавьте креветки (100 г) и кокосовое молоко (80 г), варите 5–7 минут.","Влейте лимонный сок (20 г), посолите, при необходимости добавьте щепотку сахара.","Подайте сразу, не давая молоку сильно кипеть."],tip:"Кислота и острота — основа том яма; регулируйте лимон и чили под себя."},
  237: {prep:10,cook:15,servings:1,steps:["Курицу (130 г) обжарьте со специями (паприка, зира) до готовности.","Подогрейте тортильи (60 г) на сухой сковороде.","Соберите тако: курица, помидор, лук, салат.","Подайте сразу, пока лепёшки тёплые."],tip:"Две небольшие тортильи удобнее одной перегруженной."},
  238: {prep:10,cook:40,servings:1,steps:["Фарш (120 г) обжарьте с луком до изменения цвета.","Добавьте перец, помидоры (100 г) и фасоль (80 г), специи чили и паприку.","Влейте 100 мл воды и тушите 25–30 минут до загустения.","Посолите и подайте с рисом или чипсами."],tip:"Чем дольше тушится чили, тем глубже вкус — не торопитесь."},
  239: {prep:8,cook:12,servings:1,steps:["На половину тортильи (60 г) выложите сыр (50 г), курицу (80 г) и перец.","Накройте второй половиной или второй тортильей.","Жарьте на сухой сковороде по 2–3 минуты с каждой стороны до расплавления сыра.","Разрежьте на треугольники."],tip:"Средний огонь: сыр успеет расплавиться, а тортилья не сгорит."},
  240: {prep:10,cook:12,servings:1,steps:["Курицу (120 г) обжарьте до готовности, нарежьте.","Салат (80 г) порвите, заправьте смесью масла и лимонного сока.","Сверху выложите курицу, сухарики из хлеба (30 г) и пармезан (20 г).","Подавайте сразу."],tip:"Сухарики добавьте в последний момент, чтобы не размокли."},
  241: {prep:10,cook:15,servings:1,steps:["Смешайте кефир (150 г), яйцо (50 г), сахар (15 г), щепотку соли и соды.","Всыпьте муку (100 г), замесите густое тесто, дайте постоять 5–10 минут.","Жарьте ложками на среднем огне с маслом по 2–3 минуты с каждой стороны.","Подайте со сметаной или вареньем."],tip:"Соду можно загасить каплей кефира прямо в миске — оладьи будут пышнее."},
  242: {prep:10,cook:30,servings:1,steps:["Фарш (100 г) обжарьте с луком и морковью 8–10 минут.","Добавьте промытую гречку (80 г), залейте 160 мл горячей воды, посолите.","Тушите под крышкой 15–18 минут до впитывания жидкости.","Дайте постоять 5 минут и подайте."],tip:"Гречку не мешайте часто — иначе станет кашей."},
  243: {prep:5,cook:20,servings:1,steps:["Макароны (90 г) отварите до готовности.","Фарш (120 г) обжарьте с луком (50 г) до румяности, посолите и поперчите.","Смешайте с макаронами на сковороде 1–2 минуты.","При желании добавьте ложку томатной пасты."],tip:"Слегка недолёйте воду у макарон — они доберут сок от фарша."},
  244: {prep:8,cook:25,servings:1,steps:["Куриную грудку (160 г) нарежьте эскалопами, отбейте, посолите.","Обжарьте по 3–4 минуты с каждой стороны до румяности.","Добавьте лук, через 2 минуты — сметану (60 г) и 50 мл воды.","Тушите под крышкой 10–12 минут на слабом огне."],tip:"Не кипятите сметану сильно — может расслоиться; держите огонь низким."},
  245: {prep:15,cook:40,servings:1,steps:["Говядину (100 г) обжарьте кубиками до корочки.","Добавьте лук и морковь, готовьте 5 минут.","Выложите картофель (200 г) кубиками, залейте водой почти до покрытия, посолите.","Тушите под крышкой 30–35 минут до мягкости мяса и картофеля."],tip:"Если бульон выкипел раньше, добавьте немного горячей воды, не холодной."},

};

function getRecipe(d) {
  const r = RECIPES[d.id];
  if (r && r.steps) return r;
  if (r && Array.isArray(r)) return {prep: Math.max(3, Math.floor((d.time||20)/3)), cook: d.time||20, servings: 1, steps: r, tip: ''};
  if (d.recipe && d.recipe.length) return {prep: 5, cook: d.time||20, servings: 1, steps: d.recipe, tip: ''};
  return {prep: 5, cook: d.time||20, servings: 1, steps: ['Подготовьте ингредиенты по списку.','Приготовьте блюдо.','Подайте к столу.'], tip: ''};
}

function recipeStepsOnly(d) {
  const r = getRecipe(d);
  return r.steps || [];
}

(function enrichDishes() {
  const HUES = {
    'завтрак': [30, 45, 25],
    'обед': [150, 200, 120],
    'ужин': [260, 280, 220],
    'перекус': [340, 20, 50]
  };
  DISHES.forEach(d => {
    const R = getRecipe(d);
    d.recipe = R.steps;
    d.recipeMeta = R;
    if (d.hue == null) {
      const base = (HUES[d.meal] || [40, 60, 30]);
      d.hue = (base[0] + d.id * 17) % 360;
    }
  });
})();



function ingIcon(name) {
  if (!name) return '🥗';
  const map = {
    "Яйца": "🥚", "Яйцо": "🥚", "Молоко": "🥛", "Творог": "🧀", "Сыр полутвёрдый": "🧀",
    "Сыр": "🧀", "Пармезан": "🧀", "Фета": "🧀", "Сметана": "🥛", "Кефир": "🥛",
    "Йогурт натуральный": "🥛", "Сливки": "🥛", "Творожный сыр": "🧀",
    "Куриная грудка": "🍗", "Куриные крылышки": "🍗", "Фарш куриный": "🍗",
    "Говядина": "🥩", "Фарш говяжий": "🥩", "Свинина": "🥩", "Индейка": "🦃",
    "Лосось": "🐟", "Лосось слабосолёный": "🐟", "Треска": "🐟", "Фарш рыбный": "🐟",
    "Тунец консервированный": "🐟", "Креветки": "🦐", "Бекон": "🥓", "Сосиски": "🌭",
    "Рис": "🍚", "Гречка": "🌾", "Овсяные хлопья": "🥣", "Пшено": "🌾", "Киноа": "🌾",
    "Манка": "🌾", "Мука": "🌾", "Макароны": "🍝", "Лапша": "🍜", "Листы лазаньи": "🍝",
    "Хлеб": "🍞", "Хлеб цельнозерновой": "🍞", "Сухарики": "🍞", "Печенье": "🍪",
    "Помидоры": "🍅", "Огурцы": "🥒", "Морковь": "🥕", "Лук репчатый": "🧅", "Чеснок": "🧄",
    "Картофель": "🥔", "Капуста белокочанная": "🥬", "Брокколи": "🥦", "Кабачки": "🥒",
    "Баклажаны": "🍆", "Перец болгарский": "🫑", "Шпинат": "🥬", "Салат листовой": "🥗",
    "Салат романо": "🥗", "Зелень": "🌿", "Грибы": "🍄", "Тыква": "🎃", "Свёкла": "🟣",
    "Авокадо": "🥑", "Бананы": "🍌", "Яблоки": "🍎", "Ягоды": "🫐", "Лимон": "🍋",
    "Мёд": "🍯", "Масло растительное": "🫒", "Соевый соус": "🫙", "Томатная паста": "🍅",
    "Томатный соус": "🍅", "Нут": "🫘", "Фасоль": "🫘", "Чечевица": "🫘", "Тофу": "🧊",
    "Хумус": "🫘", "Миндаль": "🥜", "Грецкий орех": "🥜", "Смесь орехов": "🥜",
    "Арахисовая паста": "🥜", "Изюм": "🍇", "Сухофрукты": "🍇", "Гранола": "🥣",
    "Маслины": "🫒", "Отруби": "🌾", "Протеиновый порошок": "💪", "Протеиновый батончик": "🍫",
    "Булгур": "🌾", "Перловка": "🌾", "Солёные огурцы": "🥒", "Спаржа": "🌿"
  };
  if (map[name]) return map[name];
  const n = String(name).toLowerCase();
  if (/куриц|индейк|фарш курин|крылыш/.test(n)) return '🍗';
  if (/говяд|свинин|фарш/.test(n)) return '🥩';
  if (/рыб|треск|лосос|тунец|кревет/.test(n)) return '🐟';
  if (/сыр|творог/.test(n)) return '🧀';
  if (/молок|сливк|сметан|кефир|йогурт/.test(n)) return '🥛';
  if (/яйц/.test(n)) return '🥚';
  if (/хлеб|тост|сухар/.test(n)) return '🍞';
  if (/рис|греч|овся|пшен|булгур|киноа|перлов|манк|лапш|паста|мук/.test(n)) return '🌾';
  if (/ягод|банан|яблок|лимон|тыкв/.test(n)) return '🍎';
  if (/помидор|томат/.test(n)) return '🍅';
  if (/огур/.test(n)) return '🥒';
  if (/морков/.test(n)) return '🥕';
  if (/капуст|салат|шпинат|зелен|брокколи/.test(n)) return '🥬';
  if (/орех|миндал|арахис/.test(n)) return '🥜';
  if (/масл/.test(n)) return '🫒';
  if (/картоф/.test(n)) return '🥔';
  if (/гриб/.test(n)) return '🍄';
  return '🥗';
}


// Curated Unsplash food photos (free to use) by category
const FOOD_PHOTOS = {
  // Завтраки
  oatmeal: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=800&h=600&q=80",
  porridge: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=800&h=600&q=80",
  syrniki: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&h=600&q=80",
  omelette: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&h=600&q=80",
  eggs: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=800&h=600&q=80",
  cottage: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&h=600&q=80",
  avocado: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=800&h=600&q=80",
  pancakes: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=800&h=600&q=80",
  smoothie: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=800&h=600&q=80",
  toast_salmon: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&w=800&h=600&q=80",
  yogurt: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&h=600&q=80",
  granola: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=800&h=600&q=80",
  // Супы
  borscht: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&h=600&q=80",
  soup: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&h=600&q=80",
  chicken_soup: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&h=600&q=80",
  // Мясо / птица
  chicken: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&h=600&q=80",
  chicken_plate: "https://images.unsplash.com/photo-1532550907401-a532f99da741?auto=format&fit=crop&w=800&h=600&q=80",
  turkey: "https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?auto=format&fit=crop&w=800&h=600&q=80",
  beef: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=800&h=600&q=80",
  cutlets: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&h=600&q=80",
  meatballs: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&h=600&q=80",
  // Рыба
  salmon: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&h=600&q=80",
  fish: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&h=600&q=80",
  shrimp: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=800&h=600&q=80",
  // Гарниры / крупы
  buckwheat: "https://images.unsplash.com/photo-1612929632978-094f8f6e0a76?auto=format&fit=crop&w=800&h=600&q=80",
  rice: "https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?auto=format&fit=crop&w=800&h=600&q=80",
  plov: "https://images.unsplash.com/photo-1563379091339-03b544987bcb?auto=format&fit=crop&w=800&h=600&q=80",
  pasta: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&h=600&q=80",
  noodles: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&h=600&q=80",
  potato: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&h=600&q=80",
  puree: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&h=600&q=80",
  // Овощи / салаты
  salad: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&h=600&q=80",
  caesar: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=800&h=600&q=80",
  veggies: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&h=600&q=80",
  broccoli: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=800&h=600&q=80",
  cabbage: "https://images.unsplash.com/photo-1604908177453-7462950a6a3c?auto=format&fit=crop&w=800&h=600&q=80",
  mushrooms: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&h=600&q=80",
  // Прочее
  tofu: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&h=600&q=80",
  lentils: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&h=600&q=80",
  beans: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&h=600&q=80",
  casserole: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&h=600&q=80",
  snack: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=800&h=600&q=80",
  apple: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=800&h=600&q=80",
  banana: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&h=600&q=80",
  nuts: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=800&h=600&q=80",
  breakfast: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&h=600&q=80",
  lunch: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&h=600&q=80",
  dinner: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&h=600&q=80",
  default: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&h=600&q=80"
};

function dishPhoto(d) {
  if (!d) return FOOD_PHOTOS.default;
  if (d.img) return d.img;
  // Prefer local image by dish id when present (img/dishes/{id}.jpg)
  if (d.id != null && d.id !== "") {
    return "img/dishes/" + d.id + ".jpg";
  }
  const name = (d.name || "").toLowerCase();
  const tags = ((d.tags || []).join(" ") + " " + (d.meal || "")).toLowerCase();
  const s = name + " " + tags;

  // Более специфичные совпадения — первыми
  if (/сырник/.test(s)) return FOOD_PHOTOS.syrniki;
  if (/запеканк/.test(s)) return FOOD_PHOTOS.casserole;
  if (/цезарь/.test(s)) return FOOD_PHOTOS.caesar;
  if (/борщ/.test(s)) return FOOD_PHOTOS.borscht;
  if (/щи\b|рассольник|солянка/.test(s)) return FOOD_PHOTOS.soup;
  if (/куриный суп|суп с лапш|лапш/.test(s)) return FOOD_PHOTOS.chicken_soup;
  if (/чечевич|чечевиц/.test(s)) return FOOD_PHOTOS.lentils;
  if (/плов/.test(s)) return FOOD_PHOTOS.plov;
  if (/паста|спагетти|макарон/.test(s)) return FOOD_PHOTOS.pasta;
  if (/тост.*лосос|лосос.*тост/.test(s)) return FOOD_PHOTOS.toast_salmon;
  if (/лосос|сёмг|семг/.test(s)) return FOOD_PHOTOS.salmon;
  if (/креветк/.test(s)) return FOOD_PHOTOS.shrimp;
  if (/треск|минтай|тунец|рыб/.test(s)) return FOOD_PHOTOS.fish;
  if (/индейк/.test(s)) return FOOD_PHOTOS.turkey;
  if (/тефтел|фрикадель/.test(s)) return FOOD_PHOTOS.meatballs;
  if (/котлет/.test(s)) return FOOD_PHOTOS.cutlets;
  if (/куриц|куриная|куриный|грудк|крылыш|терияки/.test(s)) return FOOD_PHOTOS.chicken;
  if (/говяд|бефстроганов|тушён/.test(s)) return FOOD_PHOTOS.beef;
  if (/свинин/.test(s)) return FOOD_PHOTOS.beef;
  if (/омлет|яичниц|пашот/.test(s)) return FOOD_PHOTOS.omelette;
  if (/яйц/.test(s)) return FOOD_PHOTOS.eggs;
  if (/овсян|овсяноблин/.test(s)) return FOOD_PHOTOS.oatmeal;
  if (/гречк/.test(s)) return FOOD_PHOTOS.buckwheat;
  if (/пшён|перлов|каш/.test(s)) return FOOD_PHOTOS.porridge;
  if (/рис|киноа|булгур/.test(s)) return FOOD_PHOTOS.rice;
  if (/пюре/.test(s)) return FOOD_PHOTOS.puree;
  if (/картоф/.test(s)) return FOOD_PHOTOS.potato;
  if (/блин/.test(s)) return FOOD_PHOTOS.pancakes;
  if (/смузи/.test(s)) return FOOD_PHOTOS.smoothie;
  if (/гранол/.test(s)) return FOOD_PHOTOS.granola;
  if (/йогурт/.test(s)) return FOOD_PHOTOS.yogurt;
  if (/творог/.test(s)) return FOOD_PHOTOS.cottage;
  if (/авокадо/.test(s)) return FOOD_PHOTOS.avocado;
  if (/салат/.test(s)) return FOOD_PHOTOS.salad;
  if (/тофу/.test(s)) return FOOD_PHOTOS.tofu;
  if (/нут|фасол|бобов/.test(s)) return FOOD_PHOTOS.beans;
  if (/голубц|капуст/.test(s)) return FOOD_PHOTOS.cabbage;
  if (/брокколи/.test(s)) return FOOD_PHOTOS.broccoli;
  if (/гриб/.test(s)) return FOOD_PHOTOS.mushrooms;
  if (/рагу|овощ/.test(s)) return FOOD_PHOTOS.veggies;
  if (/суп/.test(s)) return FOOD_PHOTOS.soup;
  if (/яблок/.test(s)) return FOOD_PHOTOS.apple;
  if (/банан/.test(s)) return FOOD_PHOTOS.banana;
  if (/орех|миндал|арахис/.test(s)) return FOOD_PHOTOS.nuts;
  if (/перекус|батончик|хумус|морков/.test(s)) return FOOD_PHOTOS.snack;
  if ((d.meal || "") === "завтрак") return FOOD_PHOTOS.breakfast;
  if ((d.meal || "") === "ужин") return FOOD_PHOTOS.dinner;
  if ((d.meal || "") === "обед") return FOOD_PHOTOS.lunch;
  return FOOD_PHOTOS.default;
}

function photoHTML(d, cls) {
  const src = dishPhoto(d);
  const grad = dishGradient(d);
  return `<img class="${cls||'dish-img'}" src="${src}" alt="${(d && d.name) ? d.name : 'Блюдо'}" loading="lazy"
    onerror="this.style.display='none';this.nextElementSibling&&(this.nextElementSibling.style.display='flex')" />
    <div class="photo-fallback" style="display:none;background:${grad}">${d.emoji}</div>`;
}

function dishGradient(d) {
  const h = d.hue != null ? d.hue : (d.id * 47) % 360;
  return `linear-gradient(145deg, hsl(${h},55%,48%), hsl(${(h+40)%360},50%,32%))`;
}


// Канонические имена продуктов — чтобы не дублировать в списке покупок
const ING_ALIASES = {
  // яйца
  "яйцо": "Яйца", "яйца": "Яйца",
  // курица
  "куриная грудка": "Куриная грудка", "курица": "Куриная грудка", "куриное филе": "Куриная грудка",
  "куриные крылышки": "Куриные крылышки", "фарш куриный": "Фарш куриный",
  // мясо
  "фарш говяжий": "Фарш говяжий", "говядина": "Говядина", "свинина": "Свинина",
  "индейка": "Индейка", "филе индейки": "Индейка",
  "бекон": "Бекон", "сосиски": "Сосиски",
  // рыба
  "лосось": "Лосось", "лосось слабосолёный": "Лосось слабосолёный",
  "треска": "Треска", "фарш рыбный": "Фарш рыбный",
  "тунец консервированный": "Тунец консервированный", "тунец консерв.": "Тунец консервированный", "тунец": "Тунец консервированный",
  "креветки": "Креветки",
  // молочка
  "творог": "Творог", "творог 5%": "Творог", "творог 9%": "Творог", "творог 0%": "Творог",
  "творожный сыр": "Творожный сыр",
  "сыр": "Сыр полутвёрдый", "сыр полутвёрдый": "Сыр полутвёрдый",
  "сыр пармезан": "Пармезан", "пармезан": "Пармезан",
  "сыр фета": "Фета", "фета": "Фета",
  "молоко": "Молоко", "сметана": "Сметана",
  "сливки": "Сливки", "сливки 10%": "Сливки", "сливки 20%": "Сливки",
  "кефир": "Кефир", "йогурт натуральный": "Йогурт натуральный", "йогурт": "Йогурт натуральный",
  // крупы
  "овсяные хлопья": "Овсяные хлопья", "овсянка": "Овсяные хлопья",
  "гречка": "Гречка", "рис": "Рис", "пшено": "Пшено", "киноа": "Киноа",
  "манка": "Манка", "булгур": "Булгур", "перловка": "Перловка",
  "мука": "Мука", "макароны": "Макароны", "паста": "Макароны", "лапша": "Лапша",
  "листы лазаньи": "Листы лазаньи",
  // хлеб
  "хлеб": "Хлеб", "хлеб цельнозерновой": "Хлеб цельнозерновой",
  "сухарики": "Сухарики", "печенье": "Печенье", "отруби": "Отруби",
  // овощи
  "помидор": "Помидоры", "помидоры": "Помидоры", "томат": "Помидоры",
  "огурец": "Огурцы", "огурцы": "Огурцы", "солёные огурцы": "Солёные огурцы",
  "морковь": "Морковь", "лук": "Лук репчатый", "лук репчатый": "Лук репчатый",
  "чеснок": "Чеснок", "картофель": "Картофель",
  "капуста": "Капуста белокочанная", "капуста белокочанная": "Капуста белокочанная",
  "брокколи": "Брокколи", "кабачок": "Кабачки", "кабачки": "Кабачки", "цукини": "Кабачки",
  "баклажан": "Баклажаны", "баклажаны": "Баклажаны",
  "перец болгарский": "Перец болгарский", "перец": "Перец болгарский",
  "шпинат": "Шпинат", "салат": "Салат листовой", "салат листовой": "Салат листовой",
  "салат романо": "Салат романо", "зелень": "Зелень", "укроп": "Зелень",
  "грибы": "Грибы", "тыква": "Тыква", "свёкла": "Свёкла", "спаржа": "Спаржа",
  // фрукты
  "авокадо": "Авокадо", "банан": "Бананы", "бананы": "Бананы",
  "яблоко": "Яблоки", "яблоки": "Яблоки", "ягоды": "Ягоды", "лимон": "Лимон",
  // бакалея
  "мёд": "Мёд", "масло растительное": "Масло растительное", "масло оливковое": "Масло растительное",
  "оливковое масло": "Масло растительное",
  "соевый соус": "Соевый соус", "томатная паста": "Томатная паста", "томатный соус": "Томатный соус",
  "нут": "Нут", "фасоль": "Фасоль", "чечевица": "Чечевица", "тофу": "Тофу", "хумус": "Хумус",
  "миндаль": "Миндаль", "грецкий орех": "Грецкий орех", "смесь орехов": "Смесь орехов",
  "арахисовая паста": "Арахисовая паста", "изюм": "Изюм", "сухофрукты": "Сухофрукты",
  "гранола": "Гранола", "маслины": "Маслины",
  "протеиновый порошок": "Протеиновый порошок", "протеиновый батончик": "Протеиновый батончик",
  "масло оливковое": "Масло оливковое", "оливковое масло": "Масло оливковое",
  "сливки 10%": "Сливки", "сливки 20%": "Сливки", "сливки": "Сливки",
  "томат": "Помидоры", "помидор": "Помидоры",
  "укроп": "Зелень", "петрушка": "Зелень",
  "цукини": "Кабачки", "цуккини": "Кабачки"
,

  // extra dishes support
  "пельмени": "Пельмени", "пельмени домашние": "Пельмени",
  "колбаса": "Колбаса варёная", "колбаса варёная": "Колбаса варёная", "вареная колбаса": "Колбаса варёная",
  "лаваш": "Лаваш", "тортилья": "Тортилья", "тортильи": "Тортилья",
  "спагетти": "Макароны", "рисовая лапша": "Лапша",
  "сыр сулугуни": "Сыр полутвёрдый", "сулугуни": "Сыр полутвёрдый",
  "паста мисо": "Соевый соус", "мисо": "Соевый соус", "мисо-паста": "Соевый соус",
  "водоросли нори": "Нори", "нори": "Нори",
  "кокосовое молоко": "Кокосовое молоко",
  "арахис": "Грецкий орех", // близкий ориентир по цене орехов
  "майонез": "Сметана",
  "кетчуп": "Томатный соус",
  "зелёный лук": "Зелень", "кинза": "Зелень", "петрушка": "Зелень",
  "ростки сои": "Салат листовой",
  "шампиньоны": "Грибы",
  "перец чили": "Перец болгарский",
  "фасоль красная": "Фасоль",
  "огурцы солёные": "Солёные огурцы",

};



const ING_DEPT = {
  "Яйца": "молочное", "Творог": "молочное", "Творожный сыр": "молочное",
  "Сыр": "молочное", "Сыр полутвёрдый": "молочное", "Пармезан": "молочное", "Фета": "молочное",
  "Молоко": "молочное", "Сметана": "молочное", "Сливки": "молочное",
  "Кефир": "молочное", "Йогурт натуральный": "молочное",
  "Куриная грудка": "мясо", "Куриные крылышки": "мясо", "Фарш куриный": "мясо",
  "Фарш говяжий": "мясо", "Говядина": "мясо", "Индейка": "мясо", "Свинина": "мясо",
  "Лосось": "мясо", "Лосось слабосолёный": "мясо", "Треска": "мясо",
  "Фарш рыбный": "мясо", "Тунец консервированный": "мясо", "Креветки": "мясо",
  "Бекон": "мясо", "Сосиски": "мясо",
  "Помидоры": "овощи", "Огурцы": "овощи", "Морковь": "овощи",
  "Лук репчатый": "овощи", "Чеснок": "овощи", "Картофель": "овощи",
  "Капуста белокочанная": "овощи", "Брокколи": "овощи", "Кабачки": "овощи",
  "Баклажаны": "овощи", "Перец болгарский": "овощи", "Шпинат": "овощи",
  "Салат листовой": "овощи", "Салат романо": "овощи", "Зелень": "овощи",
  "Грибы": "овощи", "Тыква": "овощи", "Авокадо": "овощи", "Свёкла": "овощи",
  "Спаржа": "овощи", "Солёные огурцы": "овощи",
  "Бананы": "овощи", "Яблоки": "овощи", "Ягоды": "овощи", "Лимон": "овощи",
  "Овсяные хлопья": "бакалея", "Гречка": "бакалея", "Рис": "бакалея", "Пшено": "бакалея",
  "Киноа": "бакалея", "Манка": "бакалея", "Булгур": "бакалея", "Перловка": "бакалея",
  "Мука": "бакалея", "Макароны": "бакалея", "Лапша": "бакалея", "Листы лазаньи": "бакалея",
  "Хлеб": "бакалея", "Хлеб цельнозерновой": "бакалея", "Сухарики": "бакалея", "Печенье": "бакалея",
  "Отруби": "бакалея", "Мёд": "бакалея", "Масло растительное": "бакалея",
  "Масло оливковое": "бакалея",
  "Соевый соус": "бакалея", "Томатная паста": "бакалея", "Томатный соус": "бакалея",
  "Нут": "бакалея", "Фасоль": "бакалея", "Чечевица": "бакалея", "Тофу": "бакалея", "Хумус": "бакалея",
  "Миндаль": "бакалея", "Грецкий орех": "бакалея", "Смесь орехов": "бакалея",
  "Арахисовая паста": "бакалея", "Изюм": "бакалея", "Сухофрукты": "бакалея",
  "Гранола": "бакалея", "Маслины": "бакалея",
  "Протеиновый порошок": "бакалея", "Протеиновый батончик": "бакалея",
  "Пельмени": "бакалея", "Колбаса варёная": "мясо", "Лаваш": "бакалея", "Тортилья": "бакалея",
  "Нори": "бакалея", "Кокосовое молоко": "бакалея", "Майонез": "бакалея", "Кетчуп": "бакалея",

};

function normalizeIngName(name) {
  if (!name) return name;
  let key = String(name).trim().toLowerCase().replace(/\s+/g, ' ');
  // strip fat % like "5%", "9%"
  key = key.replace(/\s*\d+\s*%/g, '').trim();
  // unify common endings
  key = key.replace(/ё/g, 'е');
  if (ING_ALIASES[key]) return ING_ALIASES[key];
  // soft match longest key first
  const keys = Object.keys(ING_ALIASES).sort((a,b) => b.length - a.length);
  for (const k of keys) {
    if (key === k || key.startsWith(k + ' ') || key.startsWith(k + ',') || key.startsWith(k + '('))
      return ING_ALIASES[k];
  }
  // singular/plural soft: яйцо/яйца already in map; strip trailing а/ы for lookup
  const stem = key.replace(/(ы|и)$/,'');
  if (ING_ALIASES[stem]) return ING_ALIASES[stem];
  return name.trim().charAt(0).toUpperCase() + name.trim().slice(1);
}

function normalizeIng(ing) {
  const n = normalizeIngName(ing.n);
  const d = ING_DEPT[n] || ing.d || 'прочее';
  return { n, g: ing.g, d, pack: ing.pack };
}

const DEPTS = {
  "овощи": "🥦 Овощи и фрукты",
  "мясо": "🥩 Мясо и рыба",
  "молочное": "🥛 Молочное",
  "бакалея": "🛒 Бакалея",
  "прочее": "📦 Прочее"
};

const COST_RUB = {1: 45, 2: 90, 3: 160}; // approx per base portion


const QUIZ_STEPS = [
  {
    id: "family",
    type: "family",
    name: "Семья",
    title: "Кто будет кушать?",
    hint: "Влияет на размер порций и объём закупки. Готовим сразу на всех."
  },
  {
    id: "adultsParams",
    type: "adultsParams",
    name: "Взрослые",
    title: "Параметры взрослых",
    hint: "Рост, вес, пол и возраст для расчёта калорий каждого."
  },
  {
    id: "kidsParams",
    type: "kidsParams",
    name: "Дети",
    title: "Параметры детей",
    hint: "Возраст и вес — посчитаем норму калорий по возрастной группе."
  },
  {
    id: "store",
    type: "chips",
    name: "Магазин",
    title: "Где обычно покупаешь продукты?",
    hint: "Можно отметить несколько. Цены ориентируем по выбранным.",
    multi: true,
    options: [
      {v:"magnit", l:"Магнит"},
      {v:"pyaterka", l:"Пятёрочка"},
      {v:"lenta", l:"Лента"},
      {v:"dixy", l:"Дикси"},
      {v:"perekrestok", l:"Перекрёсток"},
      {v:"auchan", l:"Ашан"},
      {v:"chizhik", l:"Чижик"},
      {v:"other", l:"Другой / рынок"}
    ]
  },
  {
    id: "budget",
    type: "budget",
    name: "Бюджет",
    title: "Бюджет на неделю",
    hint: "Не будем предлагать то, что не влезет."
  },
  {
    id: "goal",
    type: "options",
    name: "Цель",
    title: "Твоя цель",
    hint: "Как скорректировать калории",
    options: [
      {v:"lose", l:"Похудеть", icon:"📉"},
      {v:"maintain", l:"Поддерживать вес", icon:"⚖️"},
      {v:"gain", l:"Набрать массу", icon:"📈"}
    ]
  },
  {
    id: "activity",
    type: "options",
    name: "Активность",
    title: "Уровень активности",
    hint: "Сколько двигаешься в обычный день",
    options: [
      {v:"1.2", l:"Низкая (сидячая работа)", icon:"🛋️"},
      {v:"1.375", l:"Средняя (1–3 тренировки)", icon:"🚶"},
      {v:"1.55", l:"Высокая (4+ тренировок)", icon:"🏃"}
    ]
  },
  {
    id: "meals",
    type: "options",
    name: "Приёмы",
    title: "Сколько приёмов пищи в день?",
    hint: "Для основного едока. На семью масштабируем порции.",
    options: [
      {v:"3", l:"3 приёма", icon:"🍽️"},
      {v:"4", l:"4 приёма", icon:"🍽️"},
      {v:"5", l:"5 приёмов", icon:"🍽️"}
    ]
  },
  {
    id: "restrictions",
    type: "restrictions",
    name: "Ограничения",
    title: "Аллергии и ограничения",
    hint: "Отметь всё, что не должно попасть в меню."
  },
  {
    id: "kitchen",
    type: "chips",
    name: "Кухня",
    title: "Что есть на кухне?",
    hint: "Рецепты подберём только под то, чем реально готовишь.",
    multi: true,
    options: [
      {v:"плита", l:"🔥 Плита"},
      {v:"духовка", l:"🥧 Духовка"},
      {v:"микроволновка", l:"📟 Микроволновка"},
      {v:"мультиварка", l:"🍲 Мультиварка"},
      {v:"блендер", l:"🥤 Блендер"},
      {v:"пароварка", l:"💨 Пароварка"},
      {v:"аэрогриль", l:"🌀 Аэрогриль"}
    ]
  },
  {
    id: "cookDays",
    type: "options",
    name: "Готовка",
    title: "Как часто стоите у плиты?",
    hint: "От этого зависит меню: когда готовить с запасом, а когда только разогреть",
    options: [
      {v:"7", l:"Готовлю каждый день", icon:"🍳", desc:"Каждый день своя порция, без запаса"},
      {v:"5", l:"Почти каждый день", icon:"📅", desc:"Пн–пт и вс у плиты, сб — только быстрое"},
      {v:"3", l:"Три раза в неделю", icon:"🍲", desc:"Ср, сб, вс: сб на пн–вт, вс на пт, ср на чт"},
      {v:"2", l:"Только в выходные", icon:"🛋️", desc:"Сб — порция на 3 дня (сб+пн–ср), вс — на чт–пт"},
      {v:"1", l:"Один раз в неделю", icon:"🧊", desc:"Воскресенье — порция на все 7 дней"}
    ]
  },
  {
    id: "time",
    type: "options",
    name: "Время",
    title: "Время на готовку в «быстрые» дни",
    hint: "Лимит для блюд без долгой готовки",
    options: [
      {v:"15", l:"До 15 минут", icon:"⚡"},
      {v:"20", l:"До 20 минут", icon:"⏱️"},
      {v:"40", l:"До 40 минут", icon:"🍳"},
      {v:"999", l:"Не важно", icon:"∞"}
    ]
  }
];

const ALLERGENS = [
  {v:"орехи", l:"Орехи", icon:"🥜"},
  {v:"глютен", l:"Глютен", icon:"🌾"},
  {v:"лактоза", l:"Лактоза", icon:"🥛"},
  {v:"арахис", l:"Арахис", icon:"🫘"},
  {v:"морепродукты", l:"Морепродукты", icon:"🦐"},
  {v:"яйца", l:"Яйца", icon:"🥚"},
  {v:"мёд", l:"Мёд", icon:"🍯"},
  {v:"соя", l:"Соя", icon:"🫘"},
  {v:"рыба", l:"Рыба", icon:"🐟"},
  {v:"цитрусовые", l:"Цитрусовые", icon:"🍊"},
  {v:"кунжут", l:"Кунжут", icon:"⚪"}
];

const DISLIKES = [
  {v:"грибы", l:"Грибы", icon:"🍄"},
  {v:"лук", l:"Лук", icon:"🧅"},
  {v:"чеснок", l:"Чеснок", icon:"🧄"},
  {v:"баклажаны", l:"Баклажаны", icon:"🍆"},
  {v:"острое", l:"Острое", icon:"🌶️"},
  {v:"свинина", l:"Свинина", icon:"🥓"},
  {v:"красное мясо", l:"Красное мясо", icon:"🥩"},
  {v:"тофу", l:"Тофу", icon:"🧊"},
  {v:"кофеин", l:"Кофеин", icon:"☕"},
  {v:"сахар", l:"Сахар", icon:"🍬"}
];

// ===================== STATE =====================
const state = {
  quiz: {
    adults: 2,
    kids: false,
    store: [],
    budget: 5600,
    allergens: [],
    dislikes: [],
    kitchen: ["плита", "духовка", "микроволновка"],
    diet: [],
    cookDays: 7
  },
  quizStep: 0,
  likes: {},
  history: [],
  deck: [],
  deckIdx: 0,
  norms: null,
  menu: null,
  shopChecks: {},
  currentDay: 0,
  familyPortions: 1, // multiplier for display/shopping
  replaceCtx: null,
  // Adaptive swiper taste vector (updated on each swipe)
  taste: { tags: {}, cuisine: {}, protein: {}, meal: {}, sample: 0 }
};

// ===================== UTILS =====================
function $(sel) { return document.querySelector(sel); }
function $$(sel) { return Array.from(document.querySelectorAll(sel)); }
function cssEscape(str) {
  try { if (typeof CSS !== 'undefined' && CSS.escape) return CSS.escape(String(str)); } catch (e) {}
  return String(str).replace(/[^a-zA-Z0-9_-]/g, ch => '\\' + ch.charCodeAt(0).toString(16) + ' ');
}
function downloadTextFile(filename, text) {
  try {
    if (typeof navigator !== 'undefined' && navigator.share && /iPhone|iPad|iPod/i.test(navigator.userAgent || '')) {
      var file = null;
      try { file = new File([text], filename, { type: 'text/plain;charset=utf-8' }); } catch (e) {}
      if (file && navigator.canShare && navigator.canShare({ files: [file] })) {
        navigator.share({ files: [file], title: filename }).catch(function () {});
        return true;
      }
      navigator.share({ title: filename, text: text }).catch(function () {});
      return true;
    }
  } catch (e) {}
  try {
    var blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.rel = 'noopener';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { try { a.remove(); URL.revokeObjectURL(url); } catch (e) {} }, 1500);
    return true;
  } catch (e1) {
    try {
      var a2 = document.createElement('a');
      a2.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(text);
      a2.download = filename;
      a2.style.display = 'none';
      document.body.appendChild(a2);
      a2.click();
      setTimeout(function () { try { a2.remove(); } catch (e) {} }, 500);
      return true;
    } catch (e2) {
      return false;
    }
  }
}

function showTextModal(title, text) {
  let overlay = document.getElementById('textExportModal');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'textExportModal';
    overlay.className = 'modal-overlay';
    overlay.innerHTML = '<div class="modal" style="max-height:85vh;display:flex;flex-direction:column">' +
      '<h3 id="textExportTitle" style="margin-bottom:10px"></h3>' +
      '<textarea id="textExportArea" readonly style="width:100%;flex:1;min-height:220px;padding:12px;border-radius:12px;border:1px solid var(--border);background:var(--bg);color:var(--text);font-size:13px;line-height:1.45;resize:vertical"></textarea>' +
      '<div style="display:flex;gap:8px;margin-top:12px">' +
      '<button type="button" class="btn btn-primary" id="textExportCopy" style="flex:1">📋 Копировать</button>' +
      '<button type="button" class="btn btn-secondary" id="textExportClose" style="flex:1">Закрыть</button>' +
      '</div></div>';
    document.body.appendChild(overlay);
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) overlay.classList.remove('open');
    });
  }
  overlay.classList.add('open');
  document.getElementById('textExportTitle').textContent = title;
  var area = document.getElementById('textExportArea');
  area.value = text;
  document.getElementById('textExportClose').onclick = function() { overlay.classList.remove('open'); };
  document.getElementById('textExportCopy').onclick = function() {
    var ok = false;
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(function() {
        var b = document.getElementById('textExportCopy');
        b.textContent = '✓ Скопировано';
        setTimeout(function() { b.textContent = '📋 Копировать'; }, 2000);
      }).catch(function() {
        if (copyTextFallback(text)) {
          var b = document.getElementById('textExportCopy');
          b.textContent = '✓ Скопировано';
          setTimeout(function() { b.textContent = '📋 Копировать'; }, 2000);
        } else {
          area.focus(); area.select();
          alert('Выделите текст и скопируйте вручную');
        }
      });
      return;
    }
    ok = typeof copyTextFallback === 'function' && copyTextFallback(text);
    var b = document.getElementById('textExportCopy');
    if (ok) {
      b.textContent = '✓ Скопировано';
      setTimeout(function() { b.textContent = '📋 Копировать'; }, 2000);
    } else {
      area.focus(); area.select();
      alert('Выделите текст и скопируйте вручную');
    }
  };
  setTimeout(function() { area.focus(); area.select(); }, 120);
}

function showScreen(id) {
  try { $$('.screen').forEach(function(s){ s.classList.remove('active'); }); } catch (e) {}
  var el = document.getElementById('screen-' + id);
  if (el) el.classList.add('active');
  try { window.scrollTo(0, 0); } catch (e) {}
  try { tgBackForScreen(id); } catch (e) {}
  try {
    if (tg && tg.MainButton) {
      if (id === 'welcome') {
        tgMainButton('Собрать рацион', function() {
          var b = document.getElementById('startBtn');
          if (b) b.click();
        });
      } else if (id === 'menu') {
        tgMainButton('Список покупок', function() {
          var b = document.getElementById('btnToShop');
          if (b) b.click();
        });
      } else if (id === 'shop') {
        tgMainButton('Скопировать список', function() {
          try { copyShop(); } catch (e2) {}
        });
      } else {
        tgMainButton(null);
      }
    }
  } catch (e) {}
}

function save() {
  var payload = {
    quiz: state.quiz,
    likes: state.likes,
    norms: state.norms,
    menu: state.menu,
    shopChecks: state.shopChecks,
    familyPortions: state.familyPortions,
    cookPlan: state.cookPlan,
    savedAt: Date.now()
  };
  _memStore = payload;
  try {
    safeSet('ration_v2', JSON.stringify(payload));
  } catch (e) {}
}
function load() {
  try {
    var raw = safeGet('ration_v2');
    var data = null;
    if (raw) {
      data = JSON.parse(raw);
    } else if (_memStore) {
      data = _memStore;
    }
    if (!data || !data.menu || !data.menu.length) return false;
    if (data.quiz) state.quiz = data.quiz;
    if (data.likes) state.likes = data.likes;
    if (data.norms) state.norms = data.norms;
    state.menu = data.menu;
    state.shopChecks = data.shopChecks || {};
    if (data.familyPortions != null) state.familyPortions = data.familyPortions;
    if (data.cookPlan) state.cookPlan = data.cookPlan;
    state.currentDay = 0;
    return true;
  } catch (e) {
    console.warn('load failed', e);
    return false;
  }
}

/** Restore saved menu on app start. Returns true if menu screen shown. */
function restoreSession() {
  try {
    if (!load()) return false;
    if (!state.menu || !state.menu.length) return false;
    try { renderMenu(); } catch (e) {
      console.warn('renderMenu on restore failed', e);
      return false;
    }
    showScreen('menu');
    try {
      var tip = document.querySelector('.ios-tip');
      if (tip) tip.textContent = 'Восстановлено сохранённое меню. Можно открыть список покупок или начать заново.';
    } catch (e2) {}
    return true;
  } catch (e) {
    console.warn('restoreSession', e);
    return false;
  }
}


// ===== Safari / iOS helpers =====
function isIOS() {
  try {
    return /iPad|iPhone|iPod/.test(navigator.userAgent || '')
      || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  } catch (e) { return false; }
}
function isSafari() {
  try {
    var ua = navigator.userAgent || '';
    return /Safari/i.test(ua) && !/Chrome|CriOS|FxiOS|EdgiOS|OPiOS/i.test(ua);
  } catch (e) { return false; }
}
function safariViewportFix() {
  try {
    var setVh = function() {
      var h = window.visualViewport ? window.visualViewport.height : window.innerHeight;
      document.documentElement.style.setProperty('--app-height', h + 'px');
    };
    setVh();
    window.addEventListener('resize', setVh);
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', setVh);
      window.visualViewport.addEventListener('scroll', setVh);
    }
  } catch (e) {}
}
function safariBlurInputs() {
  // Close keyboard when tapping outside
  document.addEventListener('touchend', function(e) {
    var t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT')) return;
    var a = document.activeElement;
    if (a && (a.tagName === 'INPUT' || a.tagName === 'TEXTAREA')) {
      try { a.blur(); } catch (err) {}
    }
  }, { passive: true });
}
function copyTextSafari(text) {
  // iOS Safari clipboard often needs execCommand fallback
  try {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(function(){ return true; }).catch(function(){ return false; });
    }
  } catch (e) {}
  return Promise.resolve(copyTextFallback(text));
}


// ===================== TELEGRAM MINI APP =====================
var tg = null;
function isTelegram() {
  try {
    return !!(window.Telegram && Telegram.WebApp && (
      Telegram.WebApp.initData || Telegram.WebApp.initDataUnsafe || Telegram.WebApp.platform
    ));
  } catch (e) { return false; }
}
function tgInit() {
  try {
    if (!window.Telegram || !Telegram.WebApp) return false;
    tg = Telegram.WebApp;
    tg.ready();
    try { tg.expand(); } catch (e) {}
    try {
      var isMobileTg = /^(ios|android|android_x)$/.test(tg.platform || '');
      var syncFs = function() { document.documentElement.classList.toggle('tg-fullscreen', !!tg.isFullscreen); };
      if (isMobileTg && tg.isVersionAtLeast && tg.isVersionAtLeast('8.0') && typeof tg.requestFullscreen === 'function' && !tg.isFullscreen) {
        tg.requestFullscreen();
      }
      tg.onEvent('fullscreenChanged', syncFs);
      tg.onEvent('fullscreenFailed', syncFs);
      syncFs();
    } catch (e) {}
    try { if (tg.setBottomBarColor) tg.setBottomBarColor('bg_color'); } catch (e) {}
    try { if (typeof tg.disableVerticalSwipes === 'function') tg.disableVerticalSwipes(); } catch (e) {}
    try {
      if (tg.setHeaderColor) tg.setHeaderColor('secondary_bg_color');
      if (tg.setBackgroundColor) tg.setBackgroundColor('bg_color');
    } catch (e) {}
    try {
      var isDark = (tg.colorScheme === 'dark');
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
      document.body.classList.add('tg-miniapp');
      document.documentElement.classList.add('tg-miniapp');
      var p = tg.themeParams || {};
      if (p.bg_color) document.documentElement.style.setProperty('--bg', p.bg_color);
      if (p.secondary_bg_color) document.documentElement.style.setProperty('--bg-card', p.secondary_bg_color);
      if (p.text_color) document.documentElement.style.setProperty('--text', p.text_color);
      if (p.hint_color) document.documentElement.style.setProperty('--text-muted', p.hint_color);
      if (p.button_color) document.documentElement.style.setProperty('--primary', p.button_color);
      if (p.button_text_color) document.documentElement.style.setProperty('--tg-btn-text', p.button_text_color);
    } catch (e) {}
    try {
      tg.onEvent('themeChanged', function() {
        var isDark = tg.colorScheme === 'dark';
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        try { updateThemeBtns(); } catch (e2) {}
      });
    } catch (e) {}
    try { tgBackForScreen(); tgMainButton(); if (tg.SettingsButton) tg.SettingsButton.hide(); } catch (e) {}
    return true;
  } catch (e) {
    console.warn('tgInit', e);
    return false;
  }
}
function tgBackForScreen(screenId) {
  // Нативная кнопка «Назад» Telegram не используется: навигация — кнопками внутри приложения
  try { if (tg && tg.BackButton) tg.BackButton.hide(); } catch (e) {}
}
function tgHaptic(type) {
  try {
    if (!tg || !tg.HapticFeedback) return;
    if (type === 'success') tg.HapticFeedback.notificationOccurred('success');
    else if (type === 'error') tg.HapticFeedback.notificationOccurred('error');
    else if (type === 'light') tg.HapticFeedback.impactOccurred('light');
    else tg.HapticFeedback.selectionChanged();
  } catch (e) {}
}
function tgMainButton() {
  // Нативная нижняя кнопка Telegram не используется: всегда скрыта
  try {
    if (!tg) return;
    if (tg.MainButton) tg.MainButton.hide();
    if (tg.SecondaryButton) tg.SecondaryButton.hide();
  } catch (e) {}
}

/* Safe storage for file:// on iOS */
var _memStore = null;
var _memKV = {};
function safeGet(key) {
  try { return localStorage.getItem(key); } catch (e) { return _memKV[key] != null ? _memKV[key] : null; }
}
function safeSet(key, val) {
  _memKV[key] = String(val);
  try { localStorage.setItem(key, val); } catch (e) {}
}
function safeRemove(key) {
  delete _memKV[key];
  try { localStorage.removeItem(key); } catch (e) {}
}

function themeInit() {
  var t = 'light';
  try {
    t = safeGet('ration_theme') || '';
    if (!t && window.matchMedia) {
      t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
  } catch (e) { t = 'light'; }
  if (t !== 'dark' && t !== 'light') t = 'light';
  document.documentElement.setAttribute('data-theme', t);
  try { updateThemeBtns(); } catch (e) {}
}
function toggleTheme() {
  var cur = document.documentElement.getAttribute('data-theme');
  var next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  safeSet('ration_theme', next);
  try { updateThemeBtns(); } catch (e) {}
}
function updateThemeBtns() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  $$('[data-theme-btn]').forEach(b => b.textContent = isDark ? '☀️' : '🌙');
}

function familySize() {
  const q = state.quiz || {};
  const a = Number(q.adults) || (q.adultsList && q.adultsList.length) || 1;
  const kc = Number(q.kidsCount) || (q.kidsList && q.kidsList.length) || (q.kids ? 1 : 0);
  return a + kc * 0.75;
}

/** Scale for shopping & family recipes: max of headcount and kcal ratio */
function shoppingScale() {
  const q = state.quiz || {};
  const adults = Number(q.adults) || (q.adultsList && q.adultsList.length) || 1;
  const kids = Number(q.kidsCount) || (q.kidsList && q.kidsList.length) || 0;
  // children ~65% of adult portion for shopping volume
  const headScale = adults + kids * 0.65;
  const kcalScale = (state.norms && state.norms.scale) ? Number(state.norms.scale) : 0;
  const fp = Number(state.familyPortions) || 0;
  const s = Math.max(1, headScale, kcalScale, fp);
  return Math.round(s * 100) / 100;
}

function familyServings() {
  return Math.max(1, Math.round(shoppingScale() * 10) / 10);
}


/** Child daily kcal by age (FAO/WHO simplified) + weight adjustment */
function childKcal(age, weight) {
  age = +age || 7;
  let base;
  if (age <= 3) base = 1200;
  else if (age <= 6) base = 1400;
  else if (age <= 9) base = 1600;
  else if (age <= 12) base = 1800;
  else if (age <= 14) base = 2200;
  else base = 2400;
  if (weight && weight > 10) {
    // rough adjust ± relative to typical weight
    const typical = age <= 3 ? 14 : age <= 6 ? 20 : age <= 9 ? 28 : age <= 12 ? 40 : age <= 14 ? 50 : 58;
    base = Math.round(base * (0.7 + 0.3 * (weight / typical)));
  }
  return Math.max(1000, Math.min(3200, base));
}

function adultNorms(person, goal, activity) {
  const w = +person.weight, h = +person.height, a = +person.age;
  const g = person.gender || 'f';
  let bmr = 10 * w + 6.25 * h - 5 * a + (g === 'm' ? 5 : -161);
  let tdee = bmr * parseFloat(activity || '1.375');
  let target = tdee;
  if (goal === 'lose') target *= 0.85;
  if (goal === 'gain') target *= 1.10;
  const minCal = g === 'm' ? 1500 : 1200;
  if (target < minCal) target = minCal;
  const protein = Math.round(w * 1.6);
  const fat = Math.round(target * 0.275 / 9);
  const carbs = Math.round(Math.max(0, target - protein * 4 - fat * 9) / 4);
  return { bmr: Math.round(bmr), tdee: Math.round(tdee), kcal: Math.round(target), p: protein, f: fat, c: carbs };
}

/** Full family daily targets */
function calcFamilyNorms(q) {
  const goal = q.goal || 'maintain';
  const activity = q.activity || '1.375';
  const members = [];
  let totalKcal = 0, totalP = 0, totalF = 0, totalC = 0;

  const adults = q.adultsList || [];
  if (adults.length) {
    adults.forEach((p, i) => {
      const n = adultNorms(p, goal, activity);
      members.push({ type: 'adult', name: 'Взрослый ' + (i + 1), ...n, person: p });
      totalKcal += n.kcal; totalP += n.p; totalF += n.f; totalC += n.c;
    });
  } else {
    // fallback single from quiz fields
    const n = calcNorms(q);
    members.push({ type: 'adult', name: 'Взрослый 1', ...n });
    totalKcal = n.kcal; totalP = n.p; totalF = n.f; totalC = n.c;
  }

  const kids = q.kidsList || [];
  kids.forEach((k, i) => {
    const kcal = childKcal(k.age, k.weight);
    // macros roughly 15% protein, 30% fat
    const p = Math.round(kcal * 0.15 / 4);
    const f = Math.round(kcal * 0.30 / 9);
    const c = Math.round((kcal - p * 4 - f * 9) / 4);
    members.push({ type: 'child', name: 'Ребёнок ' + (i + 1) + ' (' + (k.age || '?') + ' лет)', kcal, p, f, c, person: k });
    totalKcal += kcal; totalP += p; totalF += f; totalC += c;
  });

  const primary = members.find(m => m.type === 'adult') || members[0];
  const scale = primary && primary.kcal ? totalKcal / primary.kcal : familySize();

  return {
    members,
    totalKcal: Math.round(totalKcal),
    totalP: Math.round(totalP),
    totalF: Math.round(totalF),
    totalC: Math.round(totalC),
    primary,
    scale: Math.round(scale * 100) / 100,
    meals: +(q.meals || 3),
    kcal: primary ? primary.kcal : 1800,
    p: primary ? primary.p : 100,
    f: primary ? primary.f : 60,
    c: primary ? primary.c : 200
  };
}

// Средние розничные цены РФ (окт. 2026, ориентир Росстат), ₽ за 100 г (яйца — ₽/шт)
const BASE_PRICES = {
  /* Овощи и фрукты — ₽/100 г */
  "Авокадо": 55, "Баклажаны": 22, "Бананы": 14, "Брокколи": 35,
  "Зелень": 100, "Кабачки": 18, "Капуста белокочанная": 5, "Картофель": 5,
  "Лимон": 25, "Лук репчатый": 5, "Морковь": 5, "Огурцы": 12,
  "Перец болгарский": 30, "Помидоры": 15, "Салат листовой": 40, "Салат романо": 45,
  "Свёкла": 5, "Спаржа": 70, "Тыква": 10, "Цукини": 18, "Чеснок": 35,
  "Шпинат": 60, "Яблоки": 12, "Ягоды": 55,
  /* Мясо и рыба */
  "Бекон": 120, "Говядина": 65, "Индейка": 70, "Креветки": 110,
  "Куриная грудка": 45, "Куриные крылышки": 35, "Лосось": 180,
  "Лосось слабосолёный": 220, "Свинина": 45, "Сосиски": 45,
  "Треска": 75, "Тунец консервированный": 65, "Фарш говяжий": 55,
  "Фарш куриный": 40, "Фарш рыбный": 45,
  /* Молочное (яйца — ₽/шт) */
  "Йогурт натуральный": 18, "Кефир": 8, "Молоко": 9, "Сливки": 25,
  "Сливки 10%": 22, "Сливки 20%": 28, "Сметана": 30, "Сыр полутвёрдый": 80,
  "Пармезан": 120, "Фета": 80, "Творог": 40, "Творожный сыр": 55,
  "Яйца": 12,
  /* Бакалея */
  "Арахисовая паста": 45, "Булгур": 15, "Гранола": 35, "Гречка": 9,
  "Грецкий орех": 150, "Грибы": 35, "Изюм": 30, "Киноа": 40,
  "Лапша": 12, "Макароны": 8, "Манка": 7, "Маслины": 40,
  "Масло оливковое": 55, "Масло растительное": 14, "Мёд": 45,
  "Миндаль": 90, "Мука": 6, "Нут": 14, "Овсяные хлопья": 6,
  "Отруби": 12, "Перловка": 6, "Протеиновый батончик": 90,
  "Протеиновый порошок": 90, "Рис": 10, "Смесь орехов": 85,
  "Соевый соус": 18, "Солёные огурцы": 18, "Сухарики": 28,
  "Сухофрукты": 40, "Томатная паста": 22, "Томатный соус": 18,
  "Тофу": 45, "Фасоль": 12, "Хлеб": 18, "Хлеб цельнозерновой": 23,
  "Хумус": 55, "Чечевица": 14, "Пшено": 8, "Паста": 8, "Овсянка": 6,
  "Пельмени": 35, "Колбаса варёная": 45, "Лаваш": 20, "Тортилья": 25,
  "Нори": 80, "Кокосовое молоко": 25, "Майонез": 28, "Кетчуп": 18,
  "Листы лазаньи": 20, "Спагетти": 8
};


/* Абсолютные цены сетей, ₽/100 г (яйца — ₽/шт). Источники: витрины + рыночный ориентир */
const STORE_PRICES = {
  magnit: {
    "Куриная грудка": 42, "Индейка": 68, "Говядина": 62, "Треска": 70, "Лосось": 165,
    "Яйца": 11, "Творог": 38, "Кефир": 7.5, "Молоко": 8.5, "Йогурт натуральный": 16,
    "Овсяные хлопья": 5.5, "Гречка": 8.5, "Рис": 9, "Булгур": 14, "Макароны": 7.5,
    "Картофель": 4.5, "Морковь": 4.5, "Капуста белокочанная": 4.5, "Брокколи": 33,
    "Кабачки": 16, "Огурцы": 11, "Помидоры": 14, "Лук репчатый": 4.5, "Зелень": 90,
    "Яблоки": 11, "Бананы": 13, "Ягоды": 50, "Грецкий орех": 140, "Масло растительное": 13,
    "Тофу": 42, "Нут": 13, "Чечевица": 13, "Фасоль": 11, "Хлеб": 16, "Сыр полутвёрдый": 75,
    "Хумус": 50, "Фарш куриный": 38, "Бекон": 110, "Шпинат": 55, "Салат листовой": 38,
    "Перец болгарский": 28, "Свёкла": 4.5, "Фета": 75, "Сметана": 28, "Мука": 5.5
  },
  pyaterka: {
    "Куриная грудка": 43, "Индейка": 69, "Говядина": 63, "Треска": 72, "Лосось": 168,
    "Яйца": 11.5, "Творог": 39, "Молоко": 8.8, "Гречка": 8.7, "Рис": 9.2,
    "Картофель": 4.8, "Морковь": 4.8, "Огурцы": 11.5, "Помидоры": 14.5, "Брокколи": 34,
    "Фарш куриный": 39, "Бекон": 115, "Сыр полутвёрдый": 78, "Хлеб": 5.8, "Яйца": 11.5
  },
  dixy: {
    "Куриная грудка": 41, "Индейка": 66, "Лосось": 160, "Яйца": 10.5, "Творог": 37,
    "Рис": 8.8, "Картофель": 4.3, "Помидоры": 13.5, "Огурцы": 10.5, "Фарш куриный": 37,
    "Бекон": 108, "Брокколи": 32, "Сыр полутвёрдый": 74
  },
  chizhik: {
    "Куриная грудка": 39, "Индейка": 64, "Лосось": 155, "Яйца": 10, "Творог": 35,
    "Рис": 8.5, "Картофель": 4, "Помидоры": 13, "Огурцы": 10, "Фарш куриный": 36,
    "Бекон": 105, "Брокколи": 30, "Сыр полутвёрдый": 72, "Гречка": 7.5
  },
  lenta: {
    "Куриная грудка": 47, "Индейка": 74, "Говядина": 68, "Треска": 78, "Лосось": 185,
    "Яйца": 12.5, "Творог": 42, "Молоко": 9.5, "Рис": 10.5, "Картофель": 5.2,
    "Помидоры": 16, "Огурцы": 13, "Брокколи": 37, "Фарш куриный": 42, "Бекон": 125,
    "Сыр полутвёрдый": 85, "Фета": 85, "Шпинат": 65, "Салат листовой": 42
  },
  auchan: {
    "Куриная грудка": 48, "Индейка": 75, "Говядина": 70, "Лосось": 190, "Яйца": 13,
    "Творог": 43, "Рис": 11, "Помидоры": 16.5, "Огурцы": 13.5, "Брокколи": 38,
    "Фарш куриный": 43, "Бекон": 128, "Сыр полутвёрдый": 88, "Фета": 88
  },
  perekrestok: {
    "Куриная грудка": 50, "Индейка": 78, "Говядина": 72, "Треска": 82, "Лосось": 195,
    "Яйца": 13.5, "Творог": 45, "Молоко": 10, "Гречка": 10, "Рис": 11.5,
    "Картофель": 5.5, "Морковь": 5.5, "Огурцы": 14, "Помидоры": 17, "Брокколи": 40,
    "Фарш куриный": 45, "Бекон": 135, "Сыр полутвёрдый": 92, "Фета": 90,
    "Шпинат": 70, "Салат листовой": 45, "Зелень": 110, "Грецкий орех": 160,
    "Хумус": 60, "Сметана": 32, "Хлеб цельнозерновой": 23
  },
  other: {}
};


const STORE_COEFF = {
  /* относительно «среднего рынка» BASE; дискаунтеры ниже, премиум — выше */
  chizhik: 0.88, dixy: 0.92, magnit: 0.95, pyaterka: 0.96,
  lenta: 1.05, auchan: 1.08, perekrestok: 1.12, other: 1.0
};

let LIVE_PRICES = {};
let PRICES_META = { source: 'Цены ориентир. (Магнит/Перекрёсток, окт 2026)', updated: '2026-10-14' };
const STORE_LABELS = { magnit: 'Магнит', pyaterka: 'Пятёрочка', lenta: 'Лента', dixy: 'Дикси', perekrestok: 'Перекрёсток', auchan: 'Ашан', chizhik: 'Чижик', other: 'Другой / рынок' };

function refreshPrices() {
  const stores = (state.quiz && state.quiz.store) || [];
  // Базовые цены (₽/100 г, яйца — ₽/шт) — актуальный ориентир рынка
  LIVE_PRICES = {};
  Object.keys(BASE_PRICES).forEach(k => {
    LIVE_PRICES[k] = BASE_PRICES[k];
  });

  // Если выбраны магазины — усредняем по коэффициентам сети
  let coeff = 1.0;
  if (stores.length) {
    let s = 0;
    stores.forEach(st => { s += (STORE_COEFF[st] || 1); });
    coeff = s / stores.length;
    Object.keys(LIVE_PRICES).forEach(k => {
      LIVE_PRICES[k] = Math.round(LIVE_PRICES[k] * coeff * 100) / 100;
    });
  }

  // Абсолютные оверрайды по сетям (₽/100 г), если магазин выбран один — берём их приоритетно
  if (stores.length === 1 && STORE_PRICES[stores[0]]) {
    const tbl = STORE_PRICES[stores[0]];
    Object.keys(tbl).forEach(k => {
      LIVE_PRICES[k] = tbl[k];
    });
  } else if (stores.length > 1) {
    // среднее по абсолютным таблицам там, где есть данные
    const keys = new Set();
    stores.forEach(st => {
      if (STORE_PRICES[st]) Object.keys(STORE_PRICES[st]).forEach(k => keys.add(k));
    });
    keys.forEach(k => {
      let sum = 0, n = 0;
      stores.forEach(st => {
        if (STORE_PRICES[st] && STORE_PRICES[st][k] != null) {
          sum += STORE_PRICES[st][k];
          n++;
        }
      });
      if (n) LIVE_PRICES[k] = Math.round((sum / n) * 100) / 100;
    });
  }

  // Алиасы для имён ингредиентов из блюд
  const aliases = {
    "Яйцо": "Яйца", "Курица": "Куриная грудка", "Помидор": "Помидоры", "Огурец": "Огурцы",
    "Капуста": "Капуста белокочанная", "Кабачок": "Кабачки", "Лук": "Лук репчатый",
    "Перец": "Перец болгарский", "Салат": "Салат листовой", "Сыр": "Сыр полутвёрдый",
    "Творог 5%": "Творог", "Банан": "Бананы", "Яблоко": "Яблоки", "Паста": "Макароны",
    "Овсянка": "Овсяные хлопья", "Тунец консерв.": "Тунец консервированный",
    "Сыр фета": "Фета", "Сыр пармезан": "Пармезан", "Баклажан": "Баклажаны",
    "Цукини": "Кабачки", "Томат": "Помидоры", "Укроп": "Зелень",
    "Масло оливковое": "Масло оливковое", "Сливки 10%": "Сливки", "Сливки 20%": "Сливки",
    "Помидоры": "Помидоры", "Огурцы": "Огурцы"
  };
  // ensure plural forms exist
  if (LIVE_PRICES["Помидоры"] == null && LIVE_PRICES["Помидоры"] !== 0) {
    /* keep */
  }
  Object.keys(aliases).forEach(a => {
    const can = aliases[a];
    if (LIVE_PRICES[can] != null) LIVE_PRICES[a] = LIVE_PRICES[can];
  });
  // also copy BASE canonical names that might only exist as plurals
  ["Помидоры", "Огурцы", "Бананы", "Яблоки", "Кабачки", "Баклажаны"].forEach(function(pl) {
    if (LIVE_PRICES[pl] == null && BASE_PRICES[pl] != null) LIVE_PRICES[pl] = BASE_PRICES[pl] * coeff;
  });

  const names = stores.map(st => STORE_LABELS[st] || st).join(', ');
  PRICES_META.updated = new Date().toISOString();
  PRICES_META.source = 'Актуальные ориентиры цен РФ (2025–2026)' + (names ? ' · магазины: ' + names : ' · средний рынок');
  state.pricesLoaded = PRICES_META.updated;
  return LIVE_PRICES;
}

/**
 * Онлайн-актуализация цен.
 * 1) Читает prices_live.json (рядом с HTML или по PRICE_FEED_URL) — его пишет parse_prices.py (cron).
 * 2) Кладёт результат в localStorage (кэш 12 ч).
 * 3) Мержит в LIVE_PRICES / BASE_PRICES.
 * Самокат/Vprok из браузера недоступны (CORS/антибот) — парсятся на сервере в JSON.
 */
const PRICE_FEED_URLS = [
  './prices_live.json',
  'prices_live.json',
  (typeof location !== 'undefined' && location.origin ? location.origin + '/prices_live.json' : null)
].filter(Boolean);

const LIVE_KEY_MAP = {
  chicken_breast: 'Куриная грудка',
  turkey: 'Индейка',
  beef: 'Говядина',
  fish_white: 'Треска',
  salmon: 'Лосось',
  eggs: 'Яйца',
  cottage: 'Творог',
  kefir: 'Кефир',
  milk: 'Молоко',
  yogurt: 'Йогурт натуральный',
  oats: 'Овсяные хлопья',
  buckwheat: 'Гречка',
  rice: 'Рис',
  bulgur: 'Булгур',
  pasta: 'Макароны',
  quinoa: 'Киноа',
  potato: 'Картофель',
  carrot: 'Морковь',
  cabbage: 'Капуста белокочанная',
  broccoli: 'Брокколи',
  zucchini: 'Кабачки',
  cucumber: 'Огурцы',
  tomato: 'Помидоры',
  onion: 'Лук репчатый',
  greens: 'Зелень',
  apple: 'Яблоки',
  banana: 'Бананы',
  berries: 'Ягоды',
  nuts: 'Грецкий орех',
  oil: 'Масло растительное',
  tofu: 'Тофу',
  chickpeas: 'Нут',
  lentils: 'Чечевица',
  beans: 'Фасоль',
  bread: 'Хлеб',
  cheese: 'Сыр полутвёрдый',
  hummus: 'Хумус'
};

/** prices_live.json: ₽/кг (яйца ₽/10 шт). В приложении — ₽/100 г (яйца ₽/шт). */
function liveKgToApp(key, priceKg) {
  if (priceKg == null || !isFinite(priceKg) || priceKg <= 0) return null;
  if (key === 'eggs') return Math.round((priceKg / 10) * 100) / 100; // pack of 10 → per egg
  return Math.round((priceKg / 10) * 100) / 100; // ₽/кг → ₽/100г
}

function applyLiveFeed(data) {
  if (!data || typeof data !== 'object') return 0;
  let n = 0;
  const stores = ['Магнит', 'Перекрёсток', 'Самокат', 'Vprok', 'Пятёрочка'];
  // prefer average of available store blocks, else flat map
  const buckets = stores.filter(s => data[s] && typeof data[s] === 'object');
  const merged = {};
  if (buckets.length) {
    const counts = {};
    buckets.forEach(s => {
      Object.keys(data[s]).forEach(k => {
        const v = Number(data[s][k]);
        if (!isFinite(v) || v <= 0) return;
        merged[k] = (merged[k] || 0) + v;
        counts[k] = (counts[k] || 0) + 1;
      });
    });
    Object.keys(merged).forEach(k => { merged[k] = merged[k] / counts[k]; });
  } else {
    Object.keys(data).forEach(k => {
      if (typeof data[k] === 'number') merged[k] = data[k];
    });
  }
  Object.keys(merged).forEach(k => {
    const ru = LIVE_KEY_MAP[k] || k;
    const app = liveKgToApp(k, merged[k]);
    if (app == null) return;
    LIVE_PRICES[ru] = app;
    // soft-update BASE so offline still improves over time
    if (BASE_PRICES[ru] != null) {
      BASE_PRICES[ru] = Math.round((BASE_PRICES[ru] * 0.3 + app * 0.7) * 100) / 100;
    } else {
      BASE_PRICES[ru] = app;
    }
    n++;
  });
  // store-specific tables if present
  if (data['Магнит']) {
    STORE_PRICES.magnit = STORE_PRICES.magnit || {};
    Object.keys(data['Магнит']).forEach(k => {
      const ru = LIVE_KEY_MAP[k];
      const app = liveKgToApp(k, data['Магнит'][k]);
      if (ru && app != null) STORE_PRICES.magnit[ru] = app;
    });
  }
  if (data['Перекрёсток'] || data['Vprok']) {
    const src = data['Перекрёсток'] || data['Vprok'];
    STORE_PRICES.perekrestok = STORE_PRICES.perekrestok || {};
    Object.keys(src).forEach(k => {
      const ru = LIVE_KEY_MAP[k];
      const app = liveKgToApp(k, src[k]);
      if (ru && app != null) STORE_PRICES.perekrestok[ru] = app;
    });
  }
  PRICES_META.updated = data.updated || new Date().toISOString();
  PRICES_META.source = 'Онлайн: ' + (data.sources ? Object.keys(data.sources).join(', ') : 'prices_live.json');
  PRICES_META.liveCount = n;
  try {
    localStorage.setItem('ration_prices_live', JSON.stringify({
      ts: Date.now(),
      updated: PRICES_META.updated,
      source: PRICES_META.source,
      prices: LIVE_PRICES,
      base: BASE_PRICES,
      store: STORE_PRICES
    }));
  } catch (e) {}
  return n;
}

function loadCachedLivePrices() {
  try {
    const raw = localStorage.getItem('ration_prices_live');
    if (!raw) return false;
    const o = JSON.parse(raw);
    if (!o || !o.ts || Date.now() - o.ts > 12 * 3600 * 1000) return false;
    if (o.prices) Object.assign(LIVE_PRICES, o.prices);
    if (o.base) Object.assign(BASE_PRICES, o.base);
    if (o.store) {
      Object.keys(o.store).forEach(st => {
        STORE_PRICES[st] = Object.assign(STORE_PRICES[st] || {}, o.store[st]);
      });
    }
    PRICES_META.updated = o.updated;
    PRICES_META.source = (o.source || 'Кэш') + ' (кэш)';
    return true;
  } catch (e) { return false; }
}

async function fetchJson(url, ms) {
  const ctrl = typeof AbortController !== 'undefined' ? new AbortController() : null;
  const t = setTimeout(function() { try { ctrl && ctrl.abort(); } catch (e) {} }, ms || 6000);
  try {
    const r = await fetch(url, {
      signal: ctrl ? ctrl.signal : undefined,
      cache: 'no-store',
      headers: { 'Accept': 'application/json' }
    });
    clearTimeout(t);
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return await r.json();
  } catch (e) {
    clearTimeout(t);
    throw e;
  }
}

async function refreshPricesLive() {
  // 1) быстрый кэш
  const hadCache = loadCachedLivePrices();
  refreshPrices(); // store coeffs / aliases on top

  // 2) сеть
  let applied = 0;
  for (let i = 0; i < PRICE_FEED_URLS.length; i++) {
    try {
      const data = await fetchJson(PRICE_FEED_URLS[i], 7000);
      applied = applyLiveFeed(data);
      if (applied > 0) {
        refreshPrices(); // re-apply store selection on updated base
        break;
      }
    } catch (e) { /* try next */ }
  }

  if (!applied && !hadCache) {
    PRICES_META.source = 'Встроенная таблица (офлайн). Для онлайн положите prices_live.json рядом с HTML';
  } else if (!applied && hadCache) {
    PRICES_META.source = (PRICES_META.source || 'Кэш') + '';
  }
  return LIVE_PRICES;
}

function priceFor(name, grams) {
  const n = (typeof normalizeIngName === 'function') ? normalizeIngName(name) : name;
  const p100 = LIVE_PRICES[n] || LIVE_PRICES[name] || BASE_PRICES[n] || BASE_PRICES[name] || 18;
  // Eggs stored per piece ≈ 50g
  if (/яйц/i.test(n) || /яйц/i.test(name)) {
    const pcs = Math.max(1, Math.ceil(grams / 50));
    return p100 * pcs;
  }
  return (p100 / 100) * grams;
}



// ===================== CALCULATIONS =====================
function calcNorms(q) {
  const w = +q.weight, h = +q.height, a = +q.age;
  let bmr = 10 * w + 6.25 * h - 5 * a + (q.gender === 'm' ? 5 : -161);
  let tdee = bmr * parseFloat(q.activity);
  let target = tdee;
  if (q.goal === 'lose') target *= 0.85;
  if (q.goal === 'gain') target *= 1.10;
  const minCal = q.gender === 'm' ? 1500 : 1200;
  if (target < minCal) target = minCal;
  const protein = Math.round(w * 1.6);
  const fatKcal = target * 0.275;
  const fat = Math.round(fatKcal / 9);
  const carbKcal = target - protein * 4 - fat * 9;
  const carbs = Math.round(Math.max(0, carbKcal) / 4);
  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    kcal: Math.round(target),
    p: protein,
    f: fat,
    c: carbs,
    meals: +q.meals
  };
}

// ===================== QUIZ =====================
function renderQuiz() {
  const step = QUIZ_STEPS[state.quizStep];
  const total = QUIZ_STEPS.length;
  const progress = (state.quizStep / total) * 100;
  $('#quizProgress').style.width = progress + '%';
  $('#quizStepLabel').textContent = step.name;
  $('#quizStepCount').textContent = (state.quizStep + 1) + ' из ' + total;
  $('#quizStepName').textContent = step.name;

  const c = $('#quizContent');
  let html = `<div class="question-title">${step.title}</div>`;
  if (step.hint) html += `<div class="question-hint">${step.hint}</div>`;

  if (step.type === 'family') {
    const adults = state.quiz.adults || 2;
    const kids = !!state.quiz.kids;
    html += `
      <div class="counter-label">ВЗРОСЛЫЕ</div>
      <div class="counter">
        <button type="button" id="adultsMinus">−</button>
        <span class="val" id="adultsVal">${adults}</span>
        <button type="button" id="adultsPlus">+</button>
      </div>
      <div class="toggle-row">
        <div class="info">
          <strong>Есть дети?</strong>
          <span>Считаем калории для каждого ребёнка</span>
        </div>
        <button type="button" class="toggle ${kids ? 'on' : ''}" id="kidsToggle" aria-label="Есть дети"></button>
      </div>
      <div id="kidsCountWrap" style="display:${kids ? 'block' : 'none'}">
        <div class="counter-label">ДЕТИ</div>
        <div class="counter">
          <button type="button" id="kidsMinus">−</button>
          <span class="val" id="kidsVal">${state.quiz.kidsCount || 1}</span>
          <button type="button" id="kidsPlus">+</button>
        </div>
      </div>
      <div class="family-summary" id="familySummary"></div>
    `;
    c.innerHTML = html;
    updateFamilySummary();
    $('#adultsMinus').onclick = () => {
      state.quiz.adults = Math.max(1, (state.quiz.adults || 2) - 1);
      $('#adultsVal').textContent = state.quiz.adults;
      updateFamilySummary();
    };
    $('#adultsPlus').onclick = () => {
      state.quiz.adults = Math.min(8, (state.quiz.adults || 2) + 1);
      $('#adultsVal').textContent = state.quiz.adults;
      updateFamilySummary();
    };
    $('#kidsToggle').onclick = () => {
      state.quiz.kids = !state.quiz.kids;
      if (state.quiz.kids && !state.quiz.kidsCount) state.quiz.kidsCount = 1;
      if (!state.quiz.kids) state.quiz.kidsCount = 0;
      $('#kidsToggle').classList.toggle('on', state.quiz.kids);
      const wrap = $('#kidsCountWrap');
      if (wrap) wrap.style.display = state.quiz.kids ? 'block' : 'none';
      if ($('#kidsVal')) $('#kidsVal').textContent = state.quiz.kidsCount || 1;
      updateFamilySummary();
    };
    const km = $('#kidsMinus'), kp = $('#kidsPlus');
    if (km) km.onclick = () => {
      state.quiz.kidsCount = Math.max(1, (state.quiz.kidsCount || 1) - 1);
      $('#kidsVal').textContent = state.quiz.kidsCount;
      updateFamilySummary();
    };
    if (kp) kp.onclick = () => {
      state.quiz.kidsCount = Math.min(6, (state.quiz.kidsCount || 1) + 1);
      $('#kidsVal').textContent = state.quiz.kidsCount;
      updateFamilySummary();
    };
    $('#quizNext').disabled = false;
    return;
  }


  if (step.type === 'adultsParams') {
    const n = state.quiz.adults || 1;
    if (!state.quiz.adultsList) state.quiz.adultsList = [];
    while (state.quiz.adultsList.length < n) {
      state.quiz.adultsList.push({ gender: 'f', age: 30, height: 170, weight: 70 });
    }
    state.quiz.adultsList = state.quiz.adultsList.slice(0, n);
    let h = '';
    state.quiz.adultsList.forEach((p, i) => {
      h += `<div class="member-card" data-i="${i}">
        <h4>👤 Взрослый ${i + 1}</h4>
        <div class="row">
          <div class="input-group"><label>Пол</label>
            <select data-f="gender" data-i="${i}">
              <option value="f" ${p.gender==='f'?'selected':''}>Женский</option>
              <option value="m" ${p.gender==='m'?'selected':''}>Мужской</option>
            </select>
          </div>
          <div class="input-group"><label>Возраст</label>
            <input type="number" data-f="age" data-i="${i}" min="18" max="90" value="${p.age||30}">
          </div>
        </div>
        <div class="row">
          <div class="input-group"><label>Рост, см</label>
            <input type="number" data-f="height" data-i="${i}" min="140" max="220" value="${p.height||170}">
          </div>
          <div class="input-group"><label>Вес, кг</label>
            <input type="number" data-f="weight" data-i="${i}" min="40" max="200" value="${p.weight||70}">
          </div>
        </div>
      </div>`;
    });
    c.innerHTML = h;
    c.querySelectorAll('input,select').forEach(el => {
      el.onchange = el.oninput = () => {
        const i = +el.dataset.i, f = el.dataset.f;
        state.quiz.adultsList[i][f] = el.tagName === 'SELECT' ? el.value : +el.value;
      };
    });
    $('#quizNext').disabled = false;
    return;
  }

  if (step.type === 'kidsParams') {
    const kc = state.quiz.kidsCount || 1;
    if (!state.quiz.kidsList) state.quiz.kidsList = [];
    while (state.quiz.kidsList.length < kc) {
      state.quiz.kidsList.push({ age: 7, weight: 25 });
    }
    state.quiz.kidsList = state.quiz.kidsList.slice(0, kc);
    let h = '';
    state.quiz.kidsList.forEach((p, i) => {
      h += `<div class="member-card" data-i="${i}">
        <h4>🧒 Ребёнок ${i + 1}</h4>
        <div class="row">
          <div class="input-group"><label>Возраст, лет</label>
            <input type="number" data-f="age" data-i="${i}" min="1" max="17" value="${p.age||7}">
          </div>
          <div class="input-group"><label>Вес, кг</label>
            <input type="number" data-f="weight" data-i="${i}" min="8" max="100" value="${p.weight||25}">
          </div>
        </div>
      </div>`;
    });
    c.innerHTML = h;
    c.querySelectorAll('input').forEach(el => {
      el.oninput = () => {
        const i = +el.dataset.i, f = el.dataset.f;
        state.quiz.kidsList[i][f] = +el.value;
      };
    });
    $('#quizNext').disabled = false;
    return;
  }

  if (step.type === 'budget') {
    const bud = state.quiz.budget || 5600;
    const per = Math.round(bud / Math.max(1, familySize()));
    const tier = budgetTier();
    html += `
      <div class="budget-display">
        <div class="amount" id="budgetAmount">${bud.toLocaleString('ru-RU')} ₽</div>
        <div class="per" id="budgetPer">~${per.toLocaleString('ru-RU')} ₽ на человека в неделю</div>
        <div id="budgetTierLabel" style="margin-top:10px;font-size:.9rem;font-weight:600;color:var(--primary)">${tier.name}: ${tier.hint}</div>
      </div>
      <input type="range" class="budget-slider" id="budgetSlider" min="2500" max="30000" step="100" value="${bud}">
      <div style="display:flex;justify-content:space-between;font-size:.75rem;color:var(--text-muted);margin-top:6px">
        <span>Эконом</span><span>Стандарт</span><span>Комфорт</span><span>Премиум</span>
      </div>
      <p style="font-size:.8rem;color:var(--text-muted);margin-top:12px;line-height:1.4">
        Ползунок влияет на подбор блюд: при низком бюджете — простые и недорогие позиции,
        при высоком — больше рыбы, морепродуктов и «удобных» блюд.
      </p>`;
    c.innerHTML = html;
    const slider = document.getElementById('budgetSlider');
    const updateBud = () => {
      if (!slider) return;
      state.quiz.budget = +slider.value;
      const p = Math.round(state.quiz.budget / Math.max(1, familySize()));
      const per = p;
      let t;
      if (per < 2800) t = { name: 'Эконом', hint: 'простые блюда, базовые продукты' };
      else if (per < 5000) t = { name: 'Стандарт', hint: 'баланс цены и разнообразия' };
      else if (per < 9000) t = { name: 'Комфорт', hint: 'больше рыбы, сыров, удобных блюд' };
      else t = { name: 'Премиум', hint: 'лосось, креветки, изысканные позиции' };
      const ba = document.getElementById('budgetAmount');
      const bp = document.getElementById('budgetPer');
      const lab = document.getElementById('budgetTierLabel');
      if (ba) ba.textContent = state.quiz.budget.toLocaleString('ru-RU') + ' ₽';
      if (bp) bp.textContent = '~' + p.toLocaleString('ru-RU') + ' ₽ на человека в неделю';
      if (lab) lab.textContent = t.name + ': ' + t.hint;
    };
    if (slider) slider.oninput = updateBud;
    const next = document.getElementById('quizNext');
    if (next) next.disabled = false;
    return;
  }

  if (step.type === 'restrictions') {
    const allergens = state.quiz.allergens || [];
    const dislikes = state.quiz.dislikes || [];
    const diet = state.quiz.diet || [];
    html += `<div class="chip-section"><h4>Аллергии</h4><div class="chips" id="allergenChips">`;
    ALLERGENS.forEach(o => {
      const sel = allergens.includes(o.v) ? 'selected' : '';
      html += `<div class="chip ${sel}" data-group="allergens" data-v="${o.v}">${o.icon} ${o.l}</div>`;
    });
    html += `</div></div>`;
    html += `<div class="chip-section"><h4>Не люблю</h4><div class="chips" id="dislikeChips">`;
    DISLIKES.forEach(o => {
      const sel = dislikes.includes(o.v) ? 'selected' : '';
      html += `<div class="chip ${sel}" data-group="dislikes" data-v="${o.v}">${o.icon} ${o.l}</div>`;
    });
    html += `</div></div>`;
    html += `<div class="chip-section"><h4>Диета</h4><div class="chips" id="dietChips">`;
    [
      {v:"vegetarian", l:"🌱 Вегетарианство"},
      {v:"vegan", l:"🥬 Веганство"},
      {v:"lactose_free", l:"🥛 Без лактозы"},
      {v:"gluten_free", l:"🌾 Без глютена"}
    ].forEach(o => {
      const sel = diet.includes(o.v) ? 'selected' : '';
      html += `<div class="chip ${sel}" data-group="diet" data-v="${o.v}">${o.l}</div>`;
    });
    html += `</div></div>`;
    c.innerHTML = html;
    c.querySelectorAll('.chip').forEach(el => {
      el.onclick = () => {
        const g = el.dataset.group;
        const v = el.dataset.v;
        if (!state.quiz[g]) state.quiz[g] = [];
        const arr = state.quiz[g];
        if (arr.includes(v)) {
          state.quiz[g] = arr.filter(x => x !== v);
          el.classList.remove('selected');
        } else {
          arr.push(v);
          el.classList.add('selected');
        }
      };
    });
    $('#quizNext').disabled = false;
    return;
  }

  if (step.type === 'options') {
    const cls = step.grid ? 'option-grid' : 'options';
    html += `<div class="${cls}">`;
    step.options.forEach(o => {
      const sel = state.quiz[step.id] === o.v ? 'selected' : '';
      const desc = o.desc ? `<span class="opt-desc">${o.desc}</span>` : '';
      html += `<div class="option ${sel}" data-v="${o.v}"><span class="icon">${o.icon||''}</span><span class="opt-text"><span class="opt-label">${o.l}</span>${desc}</span></div>`;
    });
    html += '</div>';
    c.innerHTML = html;
    c.querySelectorAll('.option').forEach(el => {
      el.onclick = () => {
        state.quiz[step.id] = el.dataset.v;
        c.querySelectorAll('.option').forEach(x => x.classList.remove('selected'));
        el.classList.add('selected');
        $('#quizNext').disabled = false;
      };
    });
    $('#quizNext').disabled = !state.quiz[step.id];
    return;
  }

  if (step.type === 'number') {
    html += `<div class="input-group"><input type="number" id="numInput" min="${step.min}" max="${step.max}" placeholder="${step.placeholder}" value="${state.quiz[step.id]||''}" inputmode="numeric"></div>`;
    c.innerHTML = html;
    const inp = $('#numInput');
    const check = () => {
      const v = +inp.value;
      const ok = v >= step.min && v <= step.max;
      if (ok) state.quiz[step.id] = v;
      $('#quizNext').disabled = !ok;
    };
    inp.oninput = check;
    check();
    return;
  }

  if (step.type === 'chips') {
    if (!state.quiz[step.id]) state.quiz[step.id] = step.id === 'kitchen' ? ["плита","духовка","микроволновка"] : [];
    html += '<div class="chips">';
    const selected = state.quiz[step.id] || [];
    step.options.forEach(o => {
      const sel = selected.includes(o.v) ? 'selected' : '';
      html += `<div class="chip ${sel}" data-v="${o.v}">${o.l}</div>`;
    });
    html += '</div>';
    c.innerHTML = html;
    c.querySelectorAll('.chip').forEach(el => {
      el.onclick = () => {
        const arr = state.quiz[step.id] || [];
        const v = el.dataset.v;
        if (arr.includes(v)) {
          state.quiz[step.id] = arr.filter(x => x !== v);
          el.classList.remove('selected');
        } else {
          arr.push(v);
          state.quiz[step.id] = arr;
          el.classList.add('selected');
        }
        // kitchen can be empty? allow at least proceed
        $('#quizNext').disabled = false;
      };
    });
    $('#quizNext').disabled = false;
    return;
  }
}

function updateFamilySummary() {
  const a = state.quiz.adults || 2;
  const k = state.quiz.kids;
  const kc = state.quiz.kidsCount || (k ? 1 : 0);
  const el = $('#familySummary');
  if (!el) return;
  let text = `Семья: ${a} взросл.`;
  if (k && kc) text += ` + ${kc} дет.`;
  text += '. Дальше укажем рост и вес каждого — посчитаем общую норму калорий.';
  el.textContent = text;
  state.familyPortions = a + kc * 0.75;
}

function nextQuiz() {
  const cur = QUIZ_STEPS[state.quizStep];
  // skip kidsParams if no kids
  if (cur && cur.id === 'adultsParams') {
    // ensure adultsList filled from DOM if needed - already in state via handlers
    if (!state.quiz.adultsList || !state.quiz.adultsList.length) {
      const n = state.quiz.adults || 1;
      state.quiz.adultsList = [];
      for (let i = 0; i < n; i++) {
        state.quiz.adultsList.push({
          gender: state.quiz.gender || 'f',
          age: state.quiz.age || 30,
          height: state.quiz.height || 170,
          weight: state.quiz.weight || 70
        });
      }
    }
  }
  if (state.quizStep < QUIZ_STEPS.length - 1) {
    let next = state.quizStep + 1;
    // skip kids params if no children
    while (next < QUIZ_STEPS.length && QUIZ_STEPS[next].id === 'kidsParams' && !state.quiz.kids) {
      next++;
    }
    state.quizStep = next;
    if (state.quizStep >= QUIZ_STEPS.length) {
      finishQuiz();
      return;
    }
    renderQuiz();
  } else {
    finishQuiz();
  }
}
function finishQuiz() {
  // sync primary fields from first adult
  if (state.quiz.adultsList && state.quiz.adultsList[0]) {
    const a0 = state.quiz.adultsList[0];
    state.quiz.gender = a0.gender;
    state.quiz.age = a0.age;
    state.quiz.height = a0.height;
    state.quiz.weight = a0.weight;
  }
  state.norms = calcFamilyNorms(state.quiz);
  state.familyPortions = state.norms.scale;
  if (typeof shoppingScale === "function") state.familyPortions = Math.max(state.familyPortions, shoppingScale());
  refreshPrices();
  try { refreshPricesLive(); } catch (e) {}
  buildDeck();
  showScreen('swiper');
  startSwiper();
}
function prevQuiz() {
  if (state.quizStep > 0) {
    let prev = state.quizStep - 1;
    while (prev > 0 && QUIZ_STEPS[prev].id === 'kidsParams' && !state.quiz.kids) prev--;
    state.quizStep = prev;
    renderQuiz();
  } else {
    showScreen('welcome');
  }
}

// ===================== FILTER & SWIPER =====================

function budgetTier() {
  const q = state.quiz || {};
  const per = (Number(q.budget) || 5600) / Math.max(1, familySize());
  // per person per week, RUB
  if (per < 2800) return { maxCost: 1, prefer: 1, name: 'Эконом', per: Math.round(per), hint: 'простые блюда, базовые продукты' };
  if (per < 5000) return { maxCost: 2, prefer: 1, name: 'Стандарт', per: Math.round(per), hint: 'баланс цены и разнообразия' };
  if (per < 9000) return { maxCost: 3, prefer: 2, name: 'Комфорт', per: Math.round(per), hint: 'больше рыбы, сыров, удобных блюд' };
  return { maxCost: 3, prefer: 3, name: 'Премиум', per: Math.round(per), hint: 'лосось, креветки, изысканные позиции' };
}

function filterDishes() {
  const q = state.quiz;
  const diet = q.diet || [];
  const allergens = q.allergens || [];
  const dislikes = q.dislikes || [];
  const kitchen = q.kitchen || [];
  const maxTime = +q.time || 999;
  const tier = budgetTier();
  const maxCost = tier.maxCost;

  return DISHES.filter(d => {
    if (d.time > maxTime) return false;
    if (d.cost > maxCost) return false;
    if (diet.includes('vegan') && !d.diet.includes('vegan')) return false;
    if (diet.includes('vegetarian') && !d.diet.includes('vegetarian') && !d.diet.includes('vegan')) return false;
    if (diet.includes('lactose_free') && !d.diet.includes('lactose_free')) return false;
    if (diet.includes('gluten_free') && !d.diet.includes('gluten_free')) return false;
    // allergens
    for (const a of allergens) {
      if (d.allergens.includes(a)) return false;
      if (a === 'рыба' && (d.tags.includes('рыба') || d.tags.includes('лосось'))) return false;
      if (a === 'морепродукты' && d.tags.includes('морепродукты')) return false;
      if (a === 'глютен' && !d.diet.includes('gluten_free') && d.allergens.includes('глютен')) return false;
    }
    // dislikes
    for (const dl of dislikes) {
      if (d.dislikes.includes(dl)) return false;
      if (dl === 'свинина' && d.tags.includes('свинина')) return false;
      if (dl === 'красное мясо' && (d.tags.includes('говядина') || d.name.includes('Говядина'))) return false;
      if (dl === 'грибы' && d.tags.includes('грибы')) return false;
      if (dl === 'тофу' && d.tags.includes('тофу')) return false;
    }
    // kitchen: if dish needs specific tools, check
    if (d.kitchen && d.kitchen.length) {
      const need = d.kitchen.filter(k => k !== 'плита'); // плита almost always assumed if empty kitchen
      if (kitchen.length && need.length) {
        const hasAny = need.some(k => kitchen.includes(k)) || kitchen.includes('плита');
        // allow if has at least one required or general stove
        if (!hasAny && !kitchen.includes('плита') && !kitchen.includes('духовка')) {
          // strict: skip dishes that only work in oven if no oven
          if (need.includes('духовка') && !kitchen.includes('духовка') && !kitchen.includes('аэрогриль')) return false;
          if (need.includes('блендер') && !kitchen.includes('блендер')) return false;
        }
      }
    }
    return true;
  });
}

function proteinKey(d) {
  const s = (d.name + ' ' + (d.tags || []).join(' ')).toLowerCase();
  if (/лос[оа]с|треск|рыб|тунц|семг/.test(s)) return 'рыба';
  if (/кревет|морепродукт/.test(s)) return 'морепродукты';
  if (/говяд|бефстроган|гуляш/.test(s)) return 'говядина';
  if (/свин|бекон|колбас/.test(s)) return 'свинина';
  if (/индейк/.test(s)) return 'индейка';
  if (/куриц|грудк|крыл/.test(s)) return 'курица';
  if (/фарш/.test(s)) return 'фарш';
  if (/тофу|нут|чечевиц|фасол|бобов/.test(s)) return 'бобовые';
  if (/яйц|омлет|яичниц/.test(s)) return 'яйца';
  if (/творог|сырник|сыр\b/.test(s)) return 'молочное';
  return 'другое';
}

function dishCuisine(d) {
  return d.cuisine || (d.tags || []).find(t => /ская|ский|русск|итальян|грузин|азиат|япон|китай|коре|тайск|индий|мексик|франц|гречес|узбек/.test(t)) || 'мировая';
}

function bumpTaste(map, key, delta) {
  if (!key) return;
  map[key] = (map[key] || 0) + delta;
}

function updateTasteFromDish(d, val) {
  if (!state.taste) state.taste = { tags: {}, cuisine: {}, protein: {}, meal: {}, sample: 0 };
  const t = state.taste;
  t.sample = (t.sample || 0) + 1;
  const w = val; // -1 no, 1 yes, 2 super
  (d.tags || []).forEach(tag => bumpTaste(t.tags, tag, w));
  bumpTaste(t.cuisine, dishCuisine(d), w * 1.4);
  bumpTaste(t.protein, proteinKey(d), w * 1.3);
  bumpTaste(t.meal, d.meal, w * 0.6);
}

function tasteScore(d) {
  if (!state.taste || !state.taste.sample) return Math.random() * 4;
  const t = state.taste;
  let s = 0;
  (d.tags || []).forEach(tag => { s += (t.tags[tag] || 0) * 0.9; });
  s += (t.cuisine[dishCuisine(d)] || 0) * 1.6;
  s += (t.protein[proteinKey(d)] || 0) * 1.4;
  s += (t.meal[d.meal] || 0) * 0.5;
  // explore: slight noise so deck is not stuck
  s += (Math.random() - 0.5) * 2.5;
  return s;
}

function buildDeck() {
  const filtered = filterDishes();
  // Rank by current taste (empty at start → mild random)
  const ranked = filtered.slice().sort((a, b) => tasteScore(b) - tasteScore(a));
  const byMeal = {завтрак:[], обед:[], ужин:[], перекус:[]};
  ranked.forEach(d => { if (byMeal[d.meal]) byMeal[d.meal].push(d); });

  // Interleave meals but keep taste order within each meal
  let deck = [];
  const maxLen = Math.max(...Object.values(byMeal).map(a => a.length), 1);
  for (let i = 0; i < maxLen; i++) {
    ['завтрак','обед','ужин','перекус'].forEach(m => {
      if (byMeal[m][i]) deck.push(byMeal[m][i]);
    });
  }
  // First cards: more exploration diversity; later: stronger preference
  state.deck = deck.slice(0, 24);
  state.deckIdx = 0;
  state.history = [];
}

/** After a swipe, reorder the *remaining* deck toward current taste */
function adaptDeckAfterSwipe() {
  if (!state.deck || state.deckIdx >= state.deck.length - 1) return;
  if (!state.taste || state.taste.sample < 2) return; // need a couple signals
  const head = state.deck.slice(0, state.deckIdx + 1);
  const rest = state.deck.slice(state.deckIdx + 1);
  // Keep meal variety: re-sort rest by taste but soft-cap same cuisine streak
  rest.sort((a, b) => tasteScore(b) - tasteScore(a));
  const out = [];
  let lastCui = head.length ? dishCuisine(head[head.length - 1]) : '';
  const pool = rest.slice();
  while (pool.length) {
    let idx = 0;
    // Prefer not repeating same cuisine 3+ times in a row when alternatives exist
    for (let i = 0; i < pool.length; i++) {
      const c = dishCuisine(pool[i]);
      if (c !== lastCui || pool.length < 3) { idx = i; break; }
    }
    const pick = pool.splice(idx, 1)[0];
    out.push(pick);
    lastCui = dishCuisine(pick);
  }
  state.deck = head.concat(out);
}


function startSwiper() {
  if (!state.taste || !state.taste.sample) {
    state.taste = { tags: {}, cuisine: {}, protein: {}, meal: {}, sample: 0 };
  }
  renderSwiperCard();
  updateSwiperUI();
}

function renderSwiperCard() {
  const stack = $('#swiperStack');
  stack.querySelectorAll('.dish-card').forEach(c => c.remove());
  if (state.deckIdx >= state.deck.length) {
    finishSwipe();
    return;
  }
  const d = state.deck[state.deckIdx];
  const card = document.createElement('div');
  card.className = 'dish-card';
  card.innerHTML = `
    <div class="photo">
      ${photoHTML(d, 'dish-img')}
      <div class="photo-overlay"></div>
      <span class="time-badge">⏱ ${d.time} мин</span>
    </div>
    <div class="body">
      <h3>${d.name}</h3>
      <div class="macros">
        <span>${d.kcal} ккал</span>
        <span>Б ${d.p}г · Ж ${d.f}г · У ${d.c}г</span>
      </div>
      <div class="tags">${d.tags.slice(0,4).map(t=>`<span class="tag">${t}</span>`).join('')}</div>
    </div>
  `;
  stack.appendChild(card);
  setupCardDrag(card);
}

function setupCardDrag(card) {
  let startX=0, startY=0, curX=0, curY=0, dragging=false;
  const onStart = (e) => {
    dragging = true;
    card.classList.add('dragging');
    const pt = e.touches ? e.touches[0] : e;
    startX = pt.clientX; startY = pt.clientY;
  };
  const onMove = (e) => {
    if (!dragging) return;
    e.preventDefault();
    const pt = e.touches ? e.touches[0] : e;
    curX = pt.clientX - startX;
    curY = pt.clientY - startY;
    const rot = curX * 0.08;
    card.style.transform = `translate(${curX}px,${curY}px) rotate(${rot}deg)`;
    const absX = Math.abs(curX), absY = Math.abs(curY);
    $('#hintLeft').style.opacity = curX < -40 ? Math.min(1, absX/120) : 0;
    $('#hintRight').style.opacity = curX > 40 ? Math.min(1, absX/120) : 0;
    $('#hintUp').style.opacity = curY < -60 && absY > absX ? Math.min(1, absY/120) : 0;
  };
  const onEnd = () => {
    if (!dragging) return;
    dragging = false;
    card.classList.remove('dragging');
    const absX = Math.abs(curX), absY = Math.abs(curY);
    if (curY < -100 && absY > absX) swipe('super');
    else if (curX > 100) swipe('yes');
    else if (curX < -100) swipe('no');
    else {
      card.style.transform = '';
      $('#hintLeft').style.opacity = 0;
      $('#hintRight').style.opacity = 0;
      $('#hintUp').style.opacity = 0;
    }
    curX = curY = 0;
  };
  card.addEventListener('pointerdown', onStart);
  window.addEventListener('pointermove', onMove);
  window.addEventListener('pointerup', onEnd);
  window.addEventListener('pointercancel', onEnd);
}

function swipe(dir) {
  try { tgHaptic(dir === 'super' ? 'success' : 'light'); } catch (e) {}
  const d = state.deck[state.deckIdx];
  if (!d) return;
  let val = dir === 'yes' ? 1 : dir === 'super' ? 2 : -1;
  state.likes[d.id] = val;
  updateTasteFromDish(d, val);
  state.history.push({id: d.id, val, idx: state.deckIdx});
  adaptDeckAfterSwipe();
  state.deckIdx++;
  const card = $('#swiperStack .dish-card');
  if (card) {
    const tx = dir === 'no' ? -400 : 400;
    const ty = dir === 'super' ? -400 : 0;
    card.style.transition = 'transform .3s ease, opacity .3s';
    card.style.transform = `translate(${tx}px,${ty}px) rotate(${tx*0.1}deg)`;
    card.style.opacity = '0';
    setTimeout(() => { renderSwiperCard(); updateSwiperUI(); }, 280);
  }
  $('#hintLeft').style.opacity = 0;
  $('#hintRight').style.opacity = 0;
  $('#hintUp').style.opacity = 0;
}

function undoSwipe() {
  if (!state.history.length) return;
  const last = state.history.pop();
  const d = DISHES.find(x => x.id == last.id);
  if (d && last.val) updateTasteFromDish(d, -last.val);
  delete state.likes[last.id];
  state.deckIdx = last.idx;
  renderSwiperCard();
  updateSwiperUI();
}

function updateSwiperUI() {
  const total = state.deck.length;
  const done = state.deckIdx;
  $('#swiperProgress').textContent = `${done} из ${total}`;
  if (done >= total) finishSwipe();
}

function finishSwipe() {
  showScreen('loading');
  runLoadingSequence();
}

function runLoadingSequence() {
  const steps = $$('#loadSteps .load-step');
  steps.forEach(s => { s.classList.remove('done','active'); s.querySelector('.dot').textContent = ''; });
  let i = 0;
  const tick = async () => {
    if (i > 0) {
      steps[i-1].classList.remove('active');
      steps[i-1].classList.add('done');
      steps[i-1].querySelector('.dot').textContent = '✓';
    }
    if (i < steps.length) {
      steps[i].classList.add('active');
      // step 1 = prices
      if (i === 1) {
        try { await refreshPricesLive(); } catch (e) {}
        try { refreshPrices(); } catch (e) {}
      }
      i++;
      setTimeout(tick, i === 2 ? 400 : 550);
    } else {
      generateMenu();
      save();
      renderMenu();
      setTimeout(() => showScreen('menu'), 300);
    }
  };
  setTimeout(tick, 200);
}

// ===================== MENU GENERATOR =====================
function dishScore(d) {
  let s = state.likes[d.id] || 0;
  Object.entries(state.likes).forEach(([id, val]) => {
    const liked = DISHES.find(x => x.id == id);
    if (!liked) return;
    liked.tags.forEach(t => {
      if (d.tags.includes(t)) s += val * 0.25;
    });
    // cuisine / protein affinity from explicit likes
    if (dishCuisine(liked) === dishCuisine(d)) s += val * 0.35;
    if (proteinKey(liked) === proteinKey(d)) s += val * 0.3;
  });
  // Continuous taste vector from swipes
  s += tasteScore(d) * 0.85;
  // Budget preference: cheaper or pricier dishes depending on slider
  try {
    const tier = budgetTier();
    if (d.cost === tier.prefer) s += 18;
    if (d.cost < tier.prefer) s += (tier.name === 'Эконом' ? 12 : 4);
    if (d.cost > tier.prefer) s += (tier.name === 'Премиум' || tier.name === 'Комфорт' ? 10 : -12);
    if (tier.name === 'Эконом' && d.cost >= 2) s -= 20;
    if (tier.name === 'Премиум' && d.cost === 3) s += 22;
  } catch (e) {}
  return s;
}

function generateMenu() {
  const norms = state.norms;
  const mealsPerDay = norms.meals;
  const mealTypes = mealsPerDay === 3 ? ['завтрак','обед','ужин'] :
                    mealsPerDay === 4 ? ['завтрак','обед','перекус','ужин'] :
                    ['завтрак','перекус','обед','перекус','ужин'];

  let candidates = filterDishes().filter(d => (state.likes[d.id] || 0) >= 0);
  if (candidates.length < 14) candidates = filterDishes().filter(d => (state.likes[d.id] || 0) > -1);
  if (candidates.length < 10) candidates = filterDishes();

  // ---- Dietitian taxonomy ----
  const proteinFamily = (d) => {
    const s = (d.name + ' ' + (d.tags || []).join(' ')).toLowerCase();
    if (/лосос|треск|рыб|тунц|креветк|фарш рыб/.test(s)) return 'рыба';
    if (/говяд|бефстроганов|фарш говяж/.test(s)) return 'говядина';
    if (/индейк/.test(s)) return 'индейка';
    if (/куриц|крылыш|тефтел|котлет курин|терияки|фарш курин|цезарь/.test(s)) return 'курица';
    if (/свин|бекон|сосиск/.test(s)) return 'свинина';
    if (/яйц|омлет|яичн|пашот|шакшук/.test(s)) return 'яйца';
    if (/творог|сырник|запеканк/.test(s)) return 'творог';
    if (/тофу|нут|чечевиц|фасол|хумус|бобов|минестроне/.test(s)) return 'бобовые';
    return 'прочее';
  };
  const cookMethod = (d) => {
    const s = (d.name + ' ' + (d.tags || []).join(' ') + ' ' + (d.kitchen || []).join(' ')).toLowerCase();
    if (/запеч|духов/.test(s)) return 'духовка';
    if (/суп|борщ|щи|харчо|рассольник|бульон|минестроне/.test(s)) return 'суп';
    if (/салат/.test(s)) return 'салат';
    if (/каш|пюре|варё/.test(s)) return 'варка';
    if (/жар|котлет|стейк|крылыш|яичн/.test(s)) return 'жарка';
    if (/тушён|рагу|плов|голубц/.test(s)) return 'тушение';
    return 'другое';
  };
  const carbBase = (d) => {
    const s = (d.name + ' ' + (d.ingredients || []).map(i => i.n).join(' ')).toLowerCase();
    if (/гречк/.test(s)) return 'гречка';
    if (/рис|плов|ризотт/.test(s)) return 'рис';
    if (/картоф|пюре/.test(s)) return 'картофель';
    if (/макарон|паста|лапш|лазань/.test(s)) return 'паста';
    if (/овсян|пшён|перлов|булгур|киноа|манк/.test(s)) return 'крупа';
    if (/хлеб|тост|сэндвич/.test(s)) return 'хлеб';
    return 'нет';
  };
  const isLight = (d) => d.kcal <= 320 || (d.tags || []).includes('лёгкое');
  const isHeavy = (d) => d.kcal >= 450;
  const hasVeg = (d) => {
    const s = (d.name + ' ' + (d.tags || []).join(' ')).toLowerCase();
    if (/овощ|салат|брокколи|кабач|перец|шпинат|капуст|томат|помидор|морков|зелен|рагу/.test(s)) return true;
    return (d.ingredients || []).some(i => {
      const n = (i.n || '').toLowerCase();
      return (i.d === 'овощи') && !/банан|яблок|ягод|лимон|авокадо|сухофрукт/.test(n);
    });
  };

  // Weekly targets (dietitian):
  // - рыба ≥ 2 раза
  // - бобовые ≥ 1
  // - суп 2–3 раза на обед
  // - курица ≤ 3
  // - один и тот же белок не чаще 1 раза в день
  // - ужин легче обеда
  // - чередование гарниров
  // - блюдо не повторяется в неделю (кроме крошечного пула)

  const scoreDiet = (d, ctx) => {
    let s = dishScore(d);
    const pf = proteinFamily(d);
    const cm = cookMethod(d);
    const cb = carbBase(d);

    if ((ctx.usedIds[d.id] || 0) === 0) s += 50;
    else s -= 100 * (ctx.usedIds[d.id] || 0);

    // protein diversity
    const pw = ctx.proteinWeek[pf] || 0;
    if (pw === 0) s += 30;
    else if (pw >= 3) s -= 40;
    if (pf === 'рыба' && (ctx.proteinWeek['рыба'] || 0) < 2) s += 35;
    if (pf === 'бобовые' && (ctx.proteinWeek['бобовые'] || 0) < 1) s += 28;
    if (pf === 'курица' && (ctx.proteinWeek['курица'] || 0) >= 3) s -= 45;
    if (ctx.dayProteins.has(pf) && pf !== 'прочее') s -= 60;

    // methods
    if (ctx.dayMethods.has(cm)) s -= 25;
    if (cm === 'суп' && d.meal === 'обед' && (ctx.soupWeek || 0) < 2) s += 22;
    if (cm === 'суп' && (ctx.soupWeek || 0) >= 3) s -= 20;

    // carbs rotation
    if (cb !== 'нет') {
      if ((ctx.carbWeek[cb] || 0) === 0) s += 12;
      if ((ctx.carbWeek[cb] || 0) >= 3) s -= 18;
      if (ctx.dayCarbs.has(cb)) s -= 15;
    }

    if (hasVeg(d)) s += 15;
    if (ctx.prevHeavy && isHeavy(d)) s -= 35;
    if (d.meal === 'ужин' && isLight(d)) s += 18;
    if (d.meal === 'ужин' && isHeavy(d)) s -= 15;
    if (d.meal === 'завтрак' && d.time <= 15) s += 10;
    if (d.meal === 'обед' && isHeavy(d) && hasVeg(d)) s += 8;

    // late week: push underused proteins
    if (ctx.dayIndex >= 4) {
      if (pf === 'рыба' && (ctx.proteinWeek['рыба'] || 0) < 2) s += 40;
      if (pf === 'бобовые' && (ctx.proteinWeek['бобовые'] || 0) < 1) s += 30;
    }
    return s;
  };

  const usedIds = {};
  const proteinWeek = {};
  const carbWeek = {};
  let soupWeek = 0;
  const menu = [];

  const mealShare = {
    'завтрак': 0.25,
    'обед': 0.35,
    'ужин': 0.28,
    'перекус': 0.12
  };

  for (let day = 0; day < 7; day++) {
    const dayMeals = [];
    const dayProteins = new Set();
    const dayMethods = new Set();
    const dayCarbs = new Set();
    let prevHeavy = false;

    for (const mt of mealTypes) {
      const pool = candidates.filter(d => d.meal === mt);
      const pool2 = pool.length ? pool : candidates;
      const ctx = {
        usedIds, proteinWeek, carbWeek, dayProteins, dayMethods, dayCarbs,
        prevHeavy, soupWeek, dayIndex: day
      };

      let share = mealShare[mt] || (1 / mealTypes.length);
      if (mt === 'перекус') {
        const snackCount = mealTypes.filter(x => x === 'перекус').length;
        share = 0.12 / Math.max(1, snackCount);
      }
      const ideal = norms.kcal * share;

      let best = null, bestS = -Infinity;
      for (const d of pool2) {
        const maxUse = pool2.length < 6 ? 2 : 1;
        if ((usedIds[d.id] || 0) >= maxUse) continue;
        const pf = proteinFamily(d);
        if (dayProteins.has(pf) && pf !== 'прочее' && mt !== 'перекус') continue;
        // hard limit chicken
        if (pf === 'курица' && (proteinWeek['курица'] || 0) >= 3 && mt !== 'перекус') continue;

        let portion = d.kcal > 0 ? Math.max(0.7, Math.min(1.35, ideal / d.kcal)) : 1;
        const sc = scoreDiet(d, ctx) - Math.abs(d.kcal * portion - ideal) / 35;
        if (sc > bestS) {
          bestS = sc;
          best = { dish: d, portion, pf, cm: cookMethod(d), cb: carbBase(d) };
        }
      }

      if (!best) {
        for (const d of pool2) {
          if ((usedIds[d.id] || 0) >= 2) continue;
          let portion = d.kcal > 0 ? Math.max(0.7, Math.min(1.35, ideal / d.kcal)) : 1;
          const sc = dishScore(d) - Math.abs(d.kcal * portion - ideal) / 50;
          if (sc > bestS) {
            bestS = sc;
            best = { dish: d, portion, pf: proteinFamily(d), cm: cookMethod(d), cb: carbBase(d) };
          }
        }
      }
      if (!best && pool2.length) {
        const d = pool2[day % pool2.length];
        best = { dish: d, portion: 1, pf: proteinFamily(d), cm: cookMethod(d), cb: carbBase(d) };
      }
      if (!best) continue;

      usedIds[best.dish.id] = (usedIds[best.dish.id] || 0) + 1;
      proteinWeek[best.pf] = (proteinWeek[best.pf] || 0) + 1;
      if (best.cb && best.cb !== 'нет') carbWeek[best.cb] = (carbWeek[best.cb] || 0) + 1;
      if (best.cm === 'суп') soupWeek++;
      dayProteins.add(best.pf);
      dayMethods.add(best.cm);
      if (best.cb !== 'нет') dayCarbs.add(best.cb);
      prevHeavy = isHeavy(best.dish);

      dayMeals.push({ meal: mt, dish: best.dish, portion: Math.round(best.portion * 100) / 100 });
    }

    // Scale day to family daily target (per-person norms.kcal is base; total handled in shop scale)
    const dayKcal = dayMeals.reduce((s, m) => s + m.dish.kcal * m.portion, 0);
    const target = norms.kcal;
    if (dayKcal > 0 && Math.abs(dayKcal - target) > 80) {
      const factor = Math.max(0.75, Math.min(1.3, target / dayKcal));
      dayMeals.forEach(m => { m.portion = Math.round(m.portion * factor * 100) / 100; });
    }

    menu.push({ day, meals: dayMeals, totals: calcDayTotals(dayMeals) });
  }


// ===================== COOK PLAN (batch / quick / reheat) =====================
/** Day roles: 0=Пн ... 6=Вс. batch = полная готовка, quick = быстрое, reheat = разогрев */
function getDayRoles(freq) {
  const f = Math.max(1, Math.min(7, Number(freq) || 7));
  // Пн=0 Вт=1 Ср=2 Чт=3 Пт=4 Сб=5 Вс=6
  // roles + who feeds whom (batch day index -> list of reheat day indices)
  if (f >= 7) {
    return { roles: ['batch','batch','batch','batch','batch','batch','batch'], feeds: {} };
  }
  if (f >= 5) {
    // Готовка Пн–Пт и Вс; Сб — быстрое. Разогрева почти нет.
    return { roles: ['batch','batch','batch','batch','batch','quick','batch'], feeds: {} };
  }
  if (f >= 3) {
    // Готовка: Ср, Сб, Вс
    // Ср (2) → Чт (3)
    // Сб (5) → Пн (0), Вт (1)
    // Вс (6) → Пт (4)
    // Пн/Вт/Пт — разогрев; быстрых нет чтобы порции считались честно
    return {
      roles: ['reheat','reheat','batch','reheat','reheat','batch','batch'],
      feeds: { 2: [3], 5: [0, 1], 6: [4] }
    };
  }
  if (f >= 2) {
    // Только выходные: Сб + Вс
    // Сб (5) → Пн, Вт, Ср  (готовка в субботу на 3 дня недели)
    // Вс (6) → Чт, Пт
    return {
      roles: ['reheat','reheat','reheat','reheat','reheat','batch','batch'],
      feeds: { 5: [0, 1, 2], 6: [3, 4] }
    };
  }
  // Один раз — воскресенье на всю неделю
  // Вс (6) → Пн…Сб
  return {
    roles: ['reheat','reheat','reheat','reheat','reheat','reheat','batch'],
    feeds: { 6: [0, 1, 2, 3, 4, 5] }
  };
}

function dayRoleLabel(role) {
  if (role === 'batch') return 'Готовка';
  if (role === 'reheat') return 'Разогрев';
  if (role === 'quick') return 'Быстрое';
  return '';
}

function isQuickDish(d) {
  if (!d) return false;
  if (d.time <= 20) return true;
  const s = (d.name + ' ' + (d.tags || []).join(' ')).toLowerCase();
  return /салат|тост|смузи|йогурт|творог|перекус|сэндвич|яйц|омлет|яичн/.test(s);
}

function isBatchFriendly(d) {
  if (!d) return false;
  const s = (d.name + ' ' + (d.tags || []).join(' ')).toLowerCase();
  return /суп|борщ|щи|каш|плов|тушён|запеч|рагу|лазань|голубц|котлет|фарш|куриц|говяд|рыб|гречк|рис/.test(s)
    || d.time >= 25;
}

function applyCookPlan(menu) {
  const freq = Number((state.quiz && state.quiz.cookDays) || 7);
  const plan = getDayRoles(freq);
  const roles = plan.roles || plan;
  const feeds = plan.feeds || {};
  const maxQuick = +(state.quiz && state.quiz.time) || 20;
  const candidates = (typeof filterDishes === 'function') ? filterDishes() : DISHES;
  const dayNames = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];

  // Reverse map: reheat day -> source batch day
  const sourceOf = {};
  Object.keys(feeds).forEach(function(bi) {
    (feeds[bi] || []).forEach(function(ri) {
      sourceOf[ri] = +bi;
    });
  });

  menu.forEach(function(day, di) {
    day.role = roles[di] || 'batch';
    day.roleLabel = dayRoleLabel(day.role);
  });

  if (freq >= 7) {
    state.cookPlan = { freq: freq, roles: roles, feeds: feeds };
    return menu;
  }

  // 1) Batch days: portion = 1 + number of days this batch feeds
  menu.forEach(function(day, di) {
    if (day.role !== 'batch') return;
    const fed = feeds[di] || [];
    const cover = 1 + fed.length; // today + all reheat days
    day.batchCover = cover;
    day.feedsDays = fed.map(function(i) { return dayNames[i]; });
    day.feedsLabel = fed.length
      ? ('на ' + cover + ' дн.: ' + dayNames[di] + ' + ' + fed.map(function(i) { return dayNames[i]; }).join(', '))
      : ('на 1 день (' + dayNames[di] + ')');

    (day.meals || []).forEach(function(m) {
      if (m.meal === 'завтрак' || m.meal === 'перекус') return;
      // portion stays daily for display/КБЖУ; coversDays scales shopping & recipe volume
      const base = Number(m.portion) || 1;
      m.portion = Math.round(base * 100) / 100;
      m.batchCook = true;
      m.coversDays = cover;
      m.feedsLabel = day.feedsLabel;
    });
  });

  // 2) Reheat days: lunch/dinner from assigned batch source, no extra shopping
  menu.forEach(function(day, di) {
    if (day.role !== 'reheat') return;
    const bi = sourceOf[di];
    if (bi == null || !menu[bi]) return;
    const src = menu[bi];
    day.fromBatch = bi;
    day.fromBatchName = dayNames[bi];
    day.meals = (day.meals || []).map(function(m) {
      if (m.meal === 'завтрак' || m.meal === 'перекус') return m;
      const srcMeal = (src.meals || []).find(function(x) { return x.meal === m.meal; })
        || (src.meals || []).find(function(x) { return x.meal === 'ужин'; })
        || (src.meals || []).find(function(x) { return x.meal === 'обед'; });
      if (!srcMeal || !srcMeal.dish) return m;
      return {
        meal: m.meal,
        dish: srcMeal.dish,
        portion: Number(srcMeal.portion) || 1,
        leftover: true,
        fromDay: bi,
        note: 'Разогрев с ' + dayNames[bi]
      };
    });
  });

  // 3) Quick days: short dishes only
  menu.forEach(function(day, di) {
    if (day.role !== 'quick') return;
    const used = {};
    menu.forEach(function(dd) {
      (dd.meals || []).forEach(function(m) {
        if (m.dish) used[m.dish.id] = (used[m.dish.id] || 0) + 1;
      });
    });
    day.meals = (day.meals || []).map(function(m) {
      if (m.meal === 'перекус') return m;
      if (m.dish && m.dish.time <= maxQuick) return Object.assign({}, m, { quick: true, note: 'Быстрое' });
      var pool = candidates.filter(function(d) {
        return d.meal === m.meal && d.time <= maxQuick && (state.likes[d.id] || 0) >= 0;
      });
      if (!pool.length) pool = candidates.filter(function(d) { return d.meal === m.meal && d.time <= 25; });
      if (!pool.length) pool = candidates.filter(function(d) { return d.time <= 20; });
      pool.sort(function(a, b) { return (used[a.id] || 0) - (used[b.id] || 0) || a.time - b.time; });
      var pick = pool[0] || m.dish;
      if (pick) used[pick.id] = (used[pick.id] || 0) + 1;
      return { meal: m.meal, dish: pick, portion: m.portion || 1, quick: true, note: 'Быстрое' };
    });
  });

  menu.forEach(function(day) {
    if (typeof calcDayTotals === 'function') day.totals = calcDayTotals(day.meals || []);
  });

  state.cookPlan = { freq: freq, roles: roles, feeds: feeds, sourceOf: sourceOf };
  return menu;
}


  state.menu = applyCookPlan(menu);
  state.currentDay = 0;
  state.shopChecks = {};
}

function calcDayTotals(meals) {
  let k=0,p=0,f=0,c=0;
  meals.forEach(m => {
    k += m.dish.kcal * m.portion;
    p += m.dish.p * m.portion;
    f += m.dish.f * m.portion;
    c += m.dish.c * m.portion;
  });
  return {kcal: Math.round(k), p: Math.round(p), f: Math.round(f), c: Math.round(c)};
}

function estimateWeekCost() {
  if (!state.menu || !state.menu.length) return 0;
  try { if (!Object.keys(LIVE_PRICES || {}).length) refreshPrices(); } catch (e) {}
  const scale = (typeof shoppingScale === 'function') ? shoppingScale() : ((state.norms && state.norms.scale) || state.familyPortions || 1);
  // Считаем так же, как список покупок: разогретые остатки не покупаются повторно,
  // граммы суммируются по продукту и только потом переводятся в рубли
  const grams = {};
  try {
    state.menu.forEach(day => {
      (day.meals || []).forEach(m => {
        if (!m || !m.dish || !Array.isArray(m.dish.ingredients) || m.leftover) return;
        const portion = Number(m.portion) || 1;
        const cover = (Number(m.coversDays) > 1) ? Number(m.coversDays) : 1;
        m.dish.ingredients.forEach(raw => {
          if (!raw || raw.n == null) return;
          try {
            const ing = normalizeIng(raw);
            grams[ing.n] = (grams[ing.n] || 0) + Math.round(Number(ing.g || raw.g || 0) * portion * cover * scale);
          } catch (e) {}
        });
      });
    });
  } catch (e) {}
  let sum = 0;
  Object.keys(grams).forEach(k => { sum += priceFor(k, grams[k]); });
  return Math.round(sum);
}

// ===================== RENDER MENU =====================
function renderMenu() {
  const n = state.norms;
  const weekCost = estimateWeekCost();
  const budget = state.quiz.budget || 0;
  const costNote = budget ? (weekCost <= budget ? 'в рамках бюджета' : 'чуть выше бюджета') : '';
  const famKcal = n.totalKcal || n.kcal;
  $('#menuSummary').innerHTML = `
    <h2>Норма на всю семью в день</h2>
    <div class="big">${famKcal} ккал</div>
    <div class="sub">Б ${n.totalP || n.p} г · Ж ${n.totalF || n.f} г · У ${n.totalC || n.c} г · масштаб ×${n.scale || 1}</div>
    <div class="cost-line">
      <span>Ориентир покупок на неделю</span>
      <strong>~${weekCost.toLocaleString('ru-RU')} ₽</strong>
    </div>
    ${budget ? `<div class="sub" style="margin-top:4px;opacity:.85">${costNote} · бюджет ${budget.toLocaleString('ru-RU')} ₽</div>` : ''}
  `;
  const box = $('#familyKcalBox');
  if (box && n.members) {
    box.innerHTML = n.members.map(m =>
      `<div style="display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid var(--border)">
        <span>${m.name}</span><strong>${m.kcal} ккал</strong>
      </div>`
    ).join('') + `<div style="display:flex;justify-content:space-between;padding-top:8px;font-weight:700">
      <span>Итого семья</span><span class="big" style="font-size:1.1rem">${famKcal} ккал</span>
    </div>`;
  }

  const scale = (state.norms && state.norms.scale) || 1;
  const adults = state.quiz.adults || 1;
  const kc = state.quiz.kidsCount || 0;
  if ($('#portionsBar')) {
    $('#portionsBar').innerHTML = `
      <span>Порции закупки ×${scale}</span>
      <span style="color:var(--text-muted);font-size:.85rem">${adults} взр.${kc ? ' + ' + kc + ' дет.' : ''}</span>
    `;
  }

  const tabs = $('#dayTabs');
  const days = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];
  tabs.innerHTML = days.map((d,i) => {
    const role = (state.menu[i] && state.menu[i].role) || '';
    const mark = role === 'batch' ? '🍳' : role === 'reheat' ? '♻️' : role === 'quick' ? '⚡' : '';
    return `<div class="day-tab ${i===state.currentDay?'active':''}" data-day="${i}" title="${(state.menu[i]&&state.menu[i].roleLabel)||''}">${d}${mark?'<small style="display:block;font-size:.65rem;opacity:.85">'+mark+'</small>':''}</div>`;
  }).join('');
  tabs.querySelectorAll('.day-tab').forEach(t => {
    t.onclick = () => { state.currentDay = +t.dataset.day; renderMenu(); };
  });

  // Cook plan banner
  let planEl = document.getElementById('cookPlanBanner');
  if (!planEl) {
    planEl = document.createElement('div');
    planEl.id = 'cookPlanBanner';
    planEl.style.cssText = 'font-size:.82rem;padding:10px 12px;border-radius:12px;background:color-mix(in srgb,var(--primary) 12%,transparent);margin-bottom:12px;line-height:1.4';
    const tabsEl = document.getElementById('dayTabs');
    if (tabsEl && tabsEl.parentNode) tabsEl.parentNode.insertBefore(planEl, tabsEl);
  }
  const freq = Number((state.quiz && state.quiz.cookDays) || 7);
  const day = state.menu[state.currentDay];
  const role = day && day.role;
  if (freq >= 7) {
    planEl.innerHTML = '🍳 Режим: <strong>готовка каждый день</strong> — всё свежее';
  } else {
    let roleTxt;
    if (role === 'batch') {
      const fl = day.feedsLabel || (day.batchCover > 1 ? ('порция ×' + day.batchCover) : 'на сегодня');
      roleTxt = 'сегодня <strong>готовка</strong> — ' + fl;
    } else if (role === 'reheat') {
      roleTxt = 'сегодня <strong>разогрев</strong>' + (day.fromBatchName ? (' блюд с <strong>' + day.fromBatchName + '</strong>') : '') + ' — без новой готовки';
    } else {
      roleTxt = 'сегодня <strong>быстрое меню</strong> — до 15–20 минут у плиты';
    }
    planEl.innerHTML = '📋 Режим: <strong>' + freq + ' дн. готовки/нед.</strong> · ' + roleTxt +
      '<br><span style="opacity:.8">🍳 готовка · ⚡ быстрое · ♻️ разогрев</span>';
  }

  
  const t = day.totals;
  $('#dayMacros').innerHTML = `
    <div class="m"><div class="val">${t.kcal}</div><div class="lbl">ккал</div></div>
    <div class="m"><div class="val">${t.p}г</div><div class="lbl">белки</div></div>
    <div class="m"><div class="val">${t.f}г</div><div class="lbl">жиры</div></div>
    <div class="m"><div class="val">${t.c}г</div><div class="lbl">углеводы</div></div>
  `;

  const mealsEl = $('#dayMeals');
  mealsEl.innerHTML = day.meals.map((m, idx) => {
    const src = dishPhoto(m.dish);
    return `
    <div class="meal-block">
      <div class="meal-label">${m.meal}${m.leftover ? ' · разогрев' + (m.note ? ' (' + m.note.replace('Разогрев с ','с ') + ')' : '') : (m.quick ? ' · быстрое' : (m.batchCook && m.coversDays > 1 ? ' · запас ×' + m.coversDays + ' дн.' + (m.feedsLabel ? ' (' + m.feedsLabel + ')' : '') : ''))}${!m.leftover && scale > 1.15 ? ` · закупка ×${scale}` : ''}</div>
      <div class="meal-item">
        <img class="meal-thumb" src="${src}" alt="Фото блюда" loading="lazy"
          onerror="this.outerHTML='<div class=meal-thumb-fallback>${m.dish.emoji}</div>'" />
        <div class="info">
          <h4 data-recipe="${m.dish.id}" data-portion="${m.portion||1}" data-cover="${m.coversDays||0}" data-leftover="${m.leftover?1:0}" data-feeds="${(m.feedsLabel||'').replace(/"/g,'')}" data-note="${(m.note||'').replace(/"/g,'')}">${m.leftover ? '♻️ ' : (m.quick ? '⚡ ' : '')}${m.dish.name}</h4>
          <div class="meta">${Math.round(m.dish.kcal*(m.portion||1))} ккал · Б ${Math.round(m.dish.p*(m.portion||1))} · Ж ${Math.round(m.dish.f*(m.portion||1))} · У ${Math.round(m.dish.c*(m.portion||1))} · ${m.dish.time} мин${m.coversDays>1?' · готовка ×'+m.coversDays+' дн.':''}</div>
          <button type="button" class="recipe-btn" data-recipe="${m.dish.id}" data-portion="${m.portion||1}" data-cover="${m.coversDays||0}" data-leftover="${m.leftover?1:0}" data-feeds="${(m.feedsLabel||'').replace(/"/g,'')}" data-note="${(m.note||'').replace(/"/g,'')}">Рецепт →</button>
        </div>
        <button class="replace-btn" data-idx="${idx}">Заменить</button>
      </div>
    </div>`;
  }).join('');
  mealsEl.querySelectorAll('.replace-btn').forEach(btn => {
    btn.onclick = () => openReplace(+btn.dataset.idx);
  });
  function ctxFromEl(el) {
    return {
      portion: parseFloat(el.getAttribute('data-portion') || '1') || 1,
      coversDays: parseFloat(el.getAttribute('data-cover') || '0') || 0,
      leftover: el.getAttribute('data-leftover') === '1',
      feedsLabel: el.getAttribute('data-feeds') || '',
      note: el.getAttribute('data-note') || ''
    };
  }
  mealsEl.querySelectorAll('[data-recipe]').forEach(el => {
    el.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = el.getAttribute('data-recipe');
      openRecipe(Number(id) || id, ctxFromEl(el));
    };
  });
}

function openRecipe(dishId, mealCtx) {
  try {
    const d = DISHES.find(x => x.id == dishId || x.id === Number(dishId));
    if (!d) { alert('Рецепт не найден'); return; }
    const ctx = mealCtx || {};
    const R = (typeof getRecipe === 'function' ? getRecipe(d) : null) || {};
    let steps = R.steps || d.recipe || ['Подготовьте ингредиенты.', 'Приготовьте блюдо.', 'Подайте к столу.'];
    if (!Array.isArray(steps)) steps = [String(steps)];
    const prep = R.prep != null ? R.prep : Math.max(3, Math.floor((d.time || 20) / 3));
    const cook = R.cook != null ? R.cook : (d.time || 20);
    const total = prep + cook;
    const tip = R.tip || '';
    const family = (typeof familyServings === 'function') ? familyServings() : 1;

    let mult, servNote;
    if (ctx.leftover) {
      mult = family;
      servNote = 'разогрев, семья ×' + family;
    } else if (Number(ctx.coversDays) > 1) {
      const cover = Number(ctx.coversDays);
      mult = Math.round(family * cover * 100) / 100;
      servNote = 'семья ×' + family + ' × ' + cover + ' дн. = ×' + mult
        + (ctx.feedsLabel ? ' (' + ctx.feedsLabel + ')' : '');
    } else if (ctx.portion && Number(ctx.portion) > 1.05) {
      mult = Math.round(family * Number(ctx.portion) * 100) / 100;
      servNote = 'семья ×' + family + ' · порция ×' + Number(ctx.portion) + ' = ×' + mult;
    } else {
      mult = family;
      servNote = mult > 1.05 ? ('семья ×' + mult) : '1 порция';
    }

    const ingsHtml = (d.ingredients || []).map(function(ing) {
      const n = (typeof normalizeIngName === 'function') ? normalizeIngName(ing.n) : ing.n;
      let icon = '🥗';
      try { if (typeof ingIcon === 'function') icon = ingIcon(n) || '🥗'; } catch (e) {}
      const g1 = Number(ing.g) || 0;
      const gN = Math.round(g1 * mult);
      const label = mult > 1.05 ? (gN + ' г <span style="opacity:.65;font-weight:400">(' + g1 + '×' + mult + ')</span>') : (g1 + ' г');
      return '<span class="ing-chip"><span class="dot"></span>' + icon + ' ' + n + ' — <strong>' + label + '</strong></span>';
    }).join('');

    const scaledSteps = steps.map(function(s) {
      if (mult <= 1.05) return s;
      return String(s)
        .replace(/(\d+)\s*г(?![а-яёa-z])/gi, function(_, num) { return Math.round(Number(num) * mult) + ' г'; })
        .replace(/(\d+)\s*мл(?![а-яёa-z])/gi, function(_, num) { return Math.round(Number(num) * mult) + ' мл'; });
    });

    const body = document.getElementById('recipeBody');
    const modal = document.getElementById('recipeModal');
    if (!body || !modal) { alert('Окно рецепта недоступно'); return; }

    var banner = '';
    if (ctx.leftover) {
      banner = '<div style="margin-bottom:12px;padding:10px 12px;border-radius:10px;background:color-mix(in srgb,#f59e0b 15%,transparent);font-size:.88rem">♻️ <strong>Разогрев</strong>'
        + (ctx.note ? (': ' + ctx.note) : '')
        + '. Готовить заново не нужно.</div>';
    } else if (Number(ctx.coversDays) > 1) {
      banner = '<div style="margin-bottom:12px;padding:10px 12px;border-radius:10px;background:color-mix(in srgb,var(--primary) 12%,transparent);font-size:.88rem">🍳 Готовка <strong>с запасом на '
        + ctx.coversDays + ' дн.</strong>'
        + (ctx.feedsLabel ? (' — ' + ctx.feedsLabel) : '')
        + '. Граммовки уже умножены на семью и запас.</div>';
    }

    
    // KBJU from ingredients (scaled)
    var kb = (typeof computeDishKbju === 'function') ? computeDishKbju(d) : { detail: [], kcal: d.kcal, p: d.p, f: d.f, c: d.c };
    var kbjuRows = (kb.detail || []).map(function(row) {
      return '<div style="display:flex;justify-content:space-between;gap:8px;font-size:.8rem;padding:4px 0;border-bottom:1px solid var(--border)">'
        + '<span>' + row.n + ' <span style="opacity:.65">' + Math.round(row.g * mult) + ' г</span></span>'
        + '<span style="white-space:nowrap;color:var(--text-muted)">' + Math.round(row.kcal * mult) + ' ккал · Б ' + Math.round(row.p * mult) + ' · Ж ' + Math.round(row.f * mult) + ' · У ' + Math.round(row.c * mult) + '</span>'
        + '</div>';
    }).join('');
    var kbjuBox = '<div class="recipe-kbju" style="margin:14px 0;padding:12px 14px;background:color-mix(in srgb,var(--primary) 8%,transparent);border-radius:12px">'
      + '<h4 style="font-size:.85rem;margin:0 0 8px;text-transform:uppercase;letter-spacing:.04em;color:var(--text-muted)">КБЖУ по продуктам</h4>'
      + kbjuRows
      + '<div style="display:flex;justify-content:space-between;margin-top:8px;font-weight:700;font-size:.9rem">'
      + '<span>Итого на ' + servNote + '</span>'
      + '<span>' + Math.round((kb.kcal || d.kcal) * mult) + ' ккал · Б ' + Math.round((kb.p || d.p) * mult) + ' · Ж ' + Math.round((kb.f || d.f) * mult) + ' · У ' + Math.round((kb.c || d.c) * mult) + '</span>'
      + '</div>'
      + '<div style="font-size:.72rem;color:var(--text-muted);margin-top:6px">Расчёт по справочным значениям на 100 г продукта и граммовкам в рецепте</div>'
      + '</div>';

body.innerHTML = banner +
      '<div class="recipe-hero" style="background:' + dishGradient(d) + '">' +
        '<img src="' + dishPhoto(d) + '" alt="Фото блюда" loading="lazy" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'" />' +
        '<div class="hero-fallback" style="display:none">' + (d.emoji || '') + '</div></div>' +
      '<h3 style="margin-bottom:8px">' + d.name + '</h3>' +
      '<div class="recipe-meta">' +
        '<span>⏱ ' + total + ' мин</span><span>🔪 ' + prep + ' подг.</span><span>🔥 ' + cook + ' гот.</span>' +
        '<span>' + Math.round(d.kcal * mult) + ' ккал</span>' +
        '<span>Б ' + Math.round(d.p * mult) + ' · Ж ' + Math.round(d.f * mult) + ' · У ' + Math.round(d.c * mult) + '</span>' +
        '<span style="background:color-mix(in srgb,var(--primary) 18%,transparent);color:var(--primary-dark);font-weight:600">' + servNote + '</span>' +
      '</div>' +
      '<div class="recipe-ings"><h4>Ингредиенты (' + servNote + ')</h4>' + ingsHtml + '</div>' + kbjuBox +
      '<h4 style="font-size:.85rem;color:var(--text-muted);margin:16px 0 8px;text-transform:uppercase;letter-spacing:.04em">Пошагово</h4>' +
      '<ol class="recipe-steps">' + scaledSteps.map(function(s) { return '<li>' + s + '</li>'; }).join('') + '</ol>' +
      (tip ? ('<div style="margin-top:12px;padding:12px 14px;background:color-mix(in srgb,var(--primary) 10%,transparent);border-radius:12px;font-size:.88rem"><strong>💡 Совет:</strong> ' + tip + '</div>') : '');

    modal.dataset.dishId = d.id;
    const oneBtn = document.getElementById('btnExportOneRecipe');
    if (oneBtn) {
      oneBtn.onclick = function() {
        const lines = [d.name, servNote,
          'Подготовка ' + prep + ' мин · Готовка ' + cook + ' мин · ~' + total + ' мин',
          Math.round(d.kcal * mult) + ' ккал · Б ' + Math.round(d.p * mult) + ' · Ж ' + Math.round(d.f * mult) + ' · У ' + Math.round(d.c * mult),
          '', 'Ингредиенты:',
          ...(d.ingredients || []).map(function(ing) {
            const n = (typeof normalizeIngName === 'function') ? normalizeIngName(ing.n) : ing.n;
            return '  • ' + n + ' — ' + Math.round((Number(ing.g) || 0) * mult) + ' г';
          }),
          '', 'Приготовление:',
          ...scaledSteps.map(function(s, i) { return '  ' + (i + 1) + '. ' + s; })
        ];
        const text = lines.join('\n');
        downloadTextFile((d.name || 'recept') + '.txt', text);
        showTextModal(d.name, text);
      };
    }
    modal.classList.add('open');
  } catch (err) {
    console.error('openRecipe', err);
    alert('Не удалось открыть рецепт: ' + (err && err.message ? err.message : err));
  }
}

function openReplace(mealIdx) {
  const day = state.menu[state.currentDay];
  const current = day.meals[mealIdx];
  state.replaceCtx = {day: state.currentDay, mealIdx};
  const mt = current.meal;
  const candidates = filterDishes()
    .filter(d => d.meal === mt && d.id !== current.dish.id)
    .filter(d => (state.likes[d.id]||0) >= 0)
    .sort((a,b) => Math.abs(a.kcal - current.dish.kcal) - Math.abs(b.kcal - current.dish.kcal))
    .slice(0, 5);
  const list = $('#altList');
  if (!candidates.length) {
    list.innerHTML = '<p class="empty">Нет подходящих альтернатив</p>';
  } else {
    list.innerHTML = candidates.map(d => `
      <div class="alt-item" data-id="${d.id}">
        <img src="${dishPhoto(d)}" alt="Фото блюда" loading="lazy"
          onerror="this.outerHTML='<div style=\'width:56px;height:56px;border-radius:12px;background:${dishGradient(d)};display:flex;align-items:center;justify-content:center;font-size:1.6rem\'>${d.emoji}</div>'" />
        <div style="flex:1">
          <strong>${d.name}</strong><br>
          <span style="font-size:0.85rem;color:var(--text-muted)">${d.kcal} ккал · Б ${d.p} · ${d.time} мин</span>
        </div>
      </div>
    `).join('');
    list.querySelectorAll('.alt-item').forEach(el => {
      el.onclick = () => {
        const dish = DISHES.find(x => x.id == el.dataset.id);
        day.meals[mealIdx].dish = dish;
        day.meals[mealIdx].portion = 1;
        day.totals = calcDayTotals(day.meals);
        state.menu[state.currentDay] = day;
        save();
        closeModal();
        renderMenu();
      };
    });
  }
  $('#replaceModal').classList.add('open');
}
function closeModal() { $('#replaceModal').classList.remove('open'); }

// ===================== SHOPPING =====================
function roundToPack(grams, pack) {
  if (!pack || pack <= 1) {
    if (grams >= 1000) return Math.ceil(grams / 100) / 10 + ' кг';
    return Math.ceil(grams / 10) * 10 + ' г';
  }
  // pack is units in package (e.g. 10 eggs, 1000 ml milk)
  if (pack >= 100) {
    // treat as grams in package
    const packs = Math.ceil(grams / pack);
    if (pack >= 900) return packs + ' уп. (~' + pack + ' г)';
    return packs + ' уп.';
  }
  // count items
  const items = Math.ceil(grams / (pack === 10 ? 50 : pack)); // eggs ~50g
  if (pack === 10) return Math.ceil(grams / 50) + ' шт.';
  return Math.max(1, Math.ceil(grams / 100)) + ' уп.';
}

function renderShop() {
  if (!state.shopChecks || typeof state.shopChecks !== 'object') state.shopChecks = {};
  const listEl = document.getElementById('shopList');
  const totalEl = document.getElementById('shopTotal');
  const noteEl = document.getElementById('priceNote');

  if (!state.menu || !state.menu.length) {
    if (listEl) listEl.innerHTML = '<p class="empty">Сначала соберите меню на неделю</p>';
    if (totalEl) totalEl.innerHTML = '';
    return;
  }

  try { if (typeof LIVE_PRICES === 'undefined' || !LIVE_PRICES || !Object.keys(LIVE_PRICES).length) refreshPrices(); } catch (e) {}

  const scale = (typeof shoppingScale === 'function') ? shoppingScale() : ((state.norms && state.norms.scale) || state.familyPortions || 1);
  const items = {};

  try {
    state.menu.forEach(function(day) {
      (day.meals || []).forEach(function(m) {
        if (!m || !m.dish || !Array.isArray(m.dish.ingredients)) return;
        if (m.leftover) return; // already counted on batch cook day
        const portion = Number(m.portion) || 1;
        const cover = (Number(m.coversDays) > 1) ? Number(m.coversDays) : 1;
        m.dish.ingredients.forEach(function(raw) {
          if (!raw || raw.n == null) return;
          try {
            const ing = normalizeIng(raw);
            const key = ing.n || String(raw.n);
            if (!items[key]) items[key] = { n: key, g: 0, d: ing.d || raw.d || 'прочее', pack: raw.pack };
            items[key].g += Math.round(Number(ing.g || raw.g || 0) * portion * cover * scale);
            if (typeof ING_DEPT !== 'undefined' && ING_DEPT[key]) items[key].d = ING_DEPT[key];
          } catch (e) {}
        });
      });
    });
  } catch (e) { console.error('shop aggregate', e); }

  const groups = {};
  Object.keys(items).forEach(function(k) {
    const it = items[k];
    let dept = it.d;
    if (typeof DEPTS !== 'undefined' && !(dept in DEPTS)) dept = 'прочее';
    if (!dept) dept = 'прочее';
    if (!groups[dept]) groups[dept] = [];
    groups[dept].push(it);
  });

  let weekCost = 0;
  try { weekCost = estimateWeekCost(); } catch (e) {}
  // Recompute cost with same scale for consistency
  try {
    weekCost = 0;
    Object.keys(items).forEach(function(k) {
      const it = items[k];
      if (typeof priceFor === 'function') weekCost += priceFor(it.n, it.g);
    });
    weekCost = Math.round(weekCost);
  } catch (e) {}

  if (totalEl) {
    totalEl.innerHTML = '<span>Ориентир на семью (×' + scale + ')</span><strong>~' + weekCost.toLocaleString('ru-RU') + ' ₽</strong>';
  }
  if (noteEl) {
    const adults = (state.quiz && state.quiz.adults) || 1;
    const kids = (state.quiz && state.quiz.kidsCount) || 0;
    const src = (typeof PRICES_META !== 'undefined' && PRICES_META.source) ? PRICES_META.source : 'ориентир';
    const when = (typeof PRICES_META !== 'undefined' && PRICES_META.updated)
      ? new Date(PRICES_META.updated).toLocaleString('ru-RU', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })
      : '';
    noteEl.textContent = src + (when ? ' · ' + when : '') + ' · ' + adults + ' взр.' + (kids ? (' + ' + kids + ' реб.') : '') + ' · закупка ×' + scale;
  }

  const order = ['овощи', 'мясо', 'молочное', 'бакалея', 'прочее'];
  let htmlStr = '';
  let totalItems = 0;
  order.forEach(function(dept) {
    if (!groups[dept] || !groups[dept].length) return;
    const title = (typeof DEPTS !== 'undefined' && DEPTS[dept]) ? DEPTS[dept] : dept;
    htmlStr += '<div class="shop-section" data-dept="' + dept + '">';
    htmlStr += '<h3>' + title + ' <button type="button" class="mark-all" data-dept="' + dept + '">Отметить всё</button></h3>';
    groups[dept].sort(function(a, b) { return String(a.n).localeCompare(String(b.n), 'ru'); }).forEach(function(it) {
      totalItems++;
      const checked = state.shopChecks[it.n] ? 'checked' : '';
      let qty;
      if (/яйц/i.test(it.n)) qty = Math.ceil(it.g / 50) + ' шт.';
      else if (it.g >= 1000) qty = (it.g / 1000).toFixed(1).replace('.0', '') + ' кг';
      else qty = (Math.max(10, Math.ceil(it.g / 10) * 10)) + ' г';
      let icon = '🥗'; try { if (typeof ingIcon === 'function') icon = ingIcon(it.n) || '🥗'; } catch (e) {}
      const id = 'shop-' + cssEscape(it.n);
      const safeName = String(it.n).replace(/&/g,'&amp;').replace(/"/g, '&quot;').replace(/</g,'&lt;');
      htmlStr += '<div class="shop-item ' + checked + '">';
      htmlStr += '<input type="checkbox" id="' + id + '" ' + (checked ? 'checked' : '') + ' data-n="' + safeName + '">';
      htmlStr += '<span class="prod-icon">' + icon + '</span>';
      htmlStr += '<label for="' + id + '">' + safeName + '</label>';
      htmlStr += '<span class="qty">' + qty + '</span>';
      htmlStr += '</div>';
    });
    htmlStr += '</div>';
  });

  if (listEl) {
    if (!htmlStr) {
      listEl.innerHTML = '<p class="empty">Список пуст — в блюдах нет ингредиентов</p>';
    } else {
      listEl.innerHTML = '<p style="font-size:.8rem;color:var(--text-muted);margin-bottom:8px">Позиций: ' + totalItems + ' · коэффициент семьи ×' + scale + '</p>' + htmlStr;
    }
    listEl.querySelectorAll('input[type=checkbox]').forEach(function(cb) {
      cb.onchange = function() {
        if (!state.shopChecks) state.shopChecks = {};
        state.shopChecks[cb.getAttribute('data-n')] = cb.checked;
        const row = cb.closest('.shop-item');
        if (row) row.classList.toggle('checked', cb.checked);
        save();
      };
    });
    listEl.querySelectorAll('.mark-all').forEach(function(btn) {
      btn.onclick = function() {
        const sec = btn.closest('.shop-section');
        if (!sec) return;
        sec.querySelectorAll('input[type=checkbox]').forEach(function(cb) {
          cb.checked = true;
          if (!state.shopChecks) state.shopChecks = {};
          state.shopChecks[cb.getAttribute('data-n')] = true;
          const row = cb.closest('.shop-item');
          if (row) row.classList.add('checked');
        });
        save();
      };
    });
  }
}





function buildShopText() {
  const lines = [
    'Список покупок — Рацион на неделю',
    'Формат для заметок: отметьте - [ ] → - [x]',
    ''
  ];
  const list = $('#shopList');
  let fromDom = false;
  if (list && list.querySelectorAll('.shop-item').length) {
    fromDom = true;
    list.querySelectorAll('.shop-section').forEach(sec => {
      const h3 = sec.querySelector('h3');
      let title = '';
      if (h3) {
        title = Array.from(h3.childNodes)
          .filter(n => n.nodeType === 3)
          .map(n => n.textContent.trim())
          .join(' ')
          .trim() || (h3.textContent || '').replace('Отметить всё', '').trim();
      }
      if (title) lines.push('## ' + title);
      sec.querySelectorAll('.shop-item').forEach(item => {
        const name = (item.querySelector('label') || {}).textContent || '';
        const qty = (item.querySelector('.qty') || {}).textContent || '';
        const done = item.classList.contains('checked') || (item.querySelector('input') || {}).checked ? '✓' : '☐';
        if (name) lines.push(done + ' ' + name + ' — ' + qty);
      });
      lines.push('');
    });
  }
  if (!fromDom && state.menu && state.menu.length) {
    // build from menu state
    const scale = (typeof shoppingScale === 'function') ? shoppingScale() : ((state.norms && state.norms.scale) || state.familyPortions || 1);
    const items = {};
    state.menu.forEach(day => {
      (day.meals || []).forEach(m => {
        if (!m || !m.dish || !m.dish.ingredients) return;
        if (m.leftover) return;
        const portion = Number(m.portion) || 1;
        const cover = (Number(m.coversDays) > 1) ? Number(m.coversDays) : 1;
        m.dish.ingredients.forEach(raw => {
          const ing = normalizeIng(raw);
          if (!items[ing.n]) items[ing.n] = {n: ing.n, g: 0, d: ing.d};
          items[ing.n].g += Math.round(Number(ing.g || 0) * portion * cover * scale);
        });
      });
    });
    const order = ['овощи','мясо','молочное','бакалея','прочее'];
    const groups = {};
    Object.values(items).forEach(it => {
      const dept = (it.d in DEPTS) ? it.d : 'прочее';
      if (!groups[dept]) groups[dept] = [];
      groups[dept].push(it);
    });
    order.forEach(dept => {
      if (!groups[dept]) return;
      lines.push('## ' + (DEPTS[dept] || dept));
      groups[dept].sort((a,b) => a.n.localeCompare(b.n)).forEach(it => {
        let qty;
        if (/яйц/i.test(it.n)) qty = Math.ceil(it.g / 50) + ' шт.';
        else if (it.g >= 1000) qty = (it.g / 1000).toFixed(1).replace('.0','') + ' кг';
        else qty = Math.ceil(it.g / 10) * 10 + ' г';
        const box = (state.shopChecks && state.shopChecks[it.n]) ? '- [x]' : '- [ ]';
        lines.push(box + ' ' + it.n + ' — ' + qty);
      });
      lines.push('');
    });
  }
  if (lines.length <= 2) lines.push('Список пуст');
  return lines.join('\n');
}

function copyTextFallback(text) {
  try {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.setAttribute('contenteditable', 'true');
    // iOS Safari needs element in viewport and not opacity:0 sometimes
    ta.style.cssText = 'position:fixed;top:50%;left:50%;width:1px;height:1px;padding:0;margin:0;border:0;opacity:0.01;z-index:-1;';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    ta.setSelectionRange(0, text.length);
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
    try { document.body.removeChild(ta); } catch (e) {}
    return ok;
  } catch (e) {
    return false;
  }
}

async function copyShop() {
  try {
    renderShop();
  } catch (e) {}
  const text = buildShopText();
  if (!text || text.indexOf('Список пуст') >= 0 || text.split('\n').length < 4) {
    // rebuild from state if DOM empty
  }
  const btn = $('#btnCopyShop');
  let ok = false;
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      ok = true;
    }
  } catch (e) { ok = false; }
  if (!ok && typeof copyTextFallback === 'function') ok = copyTextFallback(text);
  if (!ok) {
    try {
      if (navigator.share && /iPhone|iPad|iPod/i.test(navigator.userAgent || '')) {
        await navigator.share({ title: 'Список покупок', text: text });
        ok = true;
      }
    } catch (e) {}
  }
  if (ok) {
    if (btn) {
      const prev = btn.textContent;
      btn.textContent = '✓ Готово';
      setTimeout(() => { btn.textContent = prev || '📋 Копировать список'; }, 2000);
    }
  } else {
    showTextModal('Список покупок', text);
  }
}

function printShop() {
  try { renderShop(); } catch (e) {}
  const text = buildShopText();
  const cost = (typeof estimateWeekCost === 'function') ? estimateWeekCost() : 0;
  const w = window.open('', '_blank');
  if (!w) {
    showTextModal('Список покупок (печать)', text);
    return;
  }
  const listHtml = ($('#shopList') && $('#shopList').innerHTML) || '';
  w.document.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>Список покупок</title>' +
    '<style>body{font-family:system-ui,sans-serif;padding:20px;max-width:480px;margin:0 auto;color:#1c1917}' +
    'h1{font-size:1.25rem}h3{margin-top:18px;border-bottom:1px solid #ddd;padding-bottom:6px;font-size:1rem}' +
    '.shop-item{padding:8px 0;display:flex;align-items:center;gap:8px;border-bottom:1px solid #f0f0f0}' +
    '.shop-item label{flex:1}.qty{font-weight:600}.mark-all,input{display:none}</style></head><body>' +
    '<h1>Список покупок</h1><p>Рацион на неделю · ~' + Number(cost).toLocaleString('ru-RU') + ' ₽</p>' +
    listHtml + '</body></html>');
  w.document.close();
  setTimeout(function() { try { w.print(); } catch (e) {} }, 300);
}

function exportRecipes() {
  if (!state.menu || !state.menu.length) {
    alert('Сначала соберите меню на неделю');
    return;
  }
  const dayNames = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
  const family = (typeof familyServings === 'function') ? familyServings() : 1;
  const lines = [
    'Рецепты на неделю — Рацион',
    '========================',
    'Семья: ×' + family + ' порц.',
    'Режим готовки: ' + ((state.quiz && state.quiz.cookDays) || 7) + ' дн./нед.',
    ''
  ];

  state.menu.forEach(function(day, di) {
    const role = day.roleLabel || day.role || '';
    lines.push('════════════════════════════════');
    lines.push(dayNames[di] + (role ? (' — ' + role) : ''));
    if (day.feedsLabel) lines.push('Запас: ' + day.feedsLabel);
    if (day.fromBatchName) lines.push('Разогрев блюд с: ' + day.fromBatchName);
    lines.push('--------------------------------');

    (day.meals || []).forEach(function(m) {
      const d = m.dish;
      if (!d) return;

      if (m.leftover) {
        lines.push('');
        lines.push('♻️ ' + m.meal.toUpperCase() + ': ' + d.name);
        lines.push('   Разогрев' + (m.note ? (' (' + m.note + ')') : '') + ' — готовить не нужно.');
        lines.push('   Порция на разогрев: семья ×' + family);
        return;
      }

      const cover = Number(m.coversDays) > 0 ? Number(m.coversDays) : 1;
      // Total cook amount = family * cover (batch) — menu portion is per-person*cover
      const mult = Math.round(family * cover * 100) / 100;
      const R = (typeof getRecipe === 'function') ? getRecipe(d) : { steps: d.recipe || [], prep: 5, cook: d.time || 20 };
      const steps = Array.isArray(R) ? R : (R.steps || []);
      const prep = (R && R.prep) || 5;
      const cook = (R && R.cook) || d.time || 20;

      lines.push('');
      lines.push((d.emoji || '🍽') + ' ' + m.meal.toUpperCase() + ': ' + d.name);
      if (cover > 1) {
        lines.push('   🍳 Готовка с запасом на ' + cover + ' дн.' + (m.feedsLabel ? (' (' + m.feedsLabel + ')') : ''));
      }
      lines.push('   Время: подг. ' + prep + ' + гот. ' + cook + ' ≈ ' + (prep + cook) + ' мин');
      lines.push('   КБЖУ на весь объём: ' + Math.round(d.kcal * mult) + ' ккал · Б ' + Math.round(d.p * mult) + ' · Ж ' + Math.round(d.f * mult) + ' · У ' + Math.round(d.c * mult));
      lines.push('   Объём: семья ×' + family + (cover > 1 ? (' × ' + cover + ' дн. = ×' + mult) : ''));
      lines.push('   Ингредиенты:');
      (d.ingredients || []).forEach(function(ing) {
        const n = (typeof normalizeIngName === 'function') ? normalizeIngName(ing.n) : ing.n;
        lines.push('     • ' + n + ' — ' + Math.round((Number(ing.g) || 0) * mult) + ' г');
      });
      lines.push('   Приготовление:');
      steps.forEach(function(s, i) {
        var step = String(s);
        if (mult > 1.05) {
          step = step
            .replace(/(\d+)\s*г(?![а-яёa-z])/gi, function(_, num) { return Math.round(Number(num) * mult) + ' г'; })
            .replace(/(\d+)\s*мл(?![а-яёa-z])/gi, function(_, num) { return Math.round(Number(num) * mult) + ' мл'; });
        }
        lines.push('     ' + (i + 1) + '. ' + step);
      });
      if (R && R.tip) lines.push('   Совет: ' + R.tip);
    });
    lines.push('');
  });

  const text = lines.join('\n');
  const ok = downloadTextFile('recepty-na-nedelyu.txt', text);
  showTextModal(ok ? 'Рецепты на неделю (файл скачан)' : 'Рецепты на неделю', text);
}


function exportShopFile() {
  try { renderShop(); } catch (e) {}
  const text = buildShopText();
  const ok = downloadTextFile('spisok-pokupok.txt', text);
  if (!ok) showTextModal('Список покупок', text);
  else showTextModal('Список покупок (также скачан файл)', text);
}


function init() {
  themeInit();
  try { $$('[data-theme-btn]').forEach(function(b){ b.onclick = toggleTheme; }); } catch (e) {}

  function on(id, fn) {
    var el = document.getElementById(id) || $(id.charAt(0) === '#' ? id : null);
    if (!el && id.indexOf('#') !== 0) el = document.getElementById(id);
    if (!el) el = document.querySelector('#' + id);
    if (el) el.onclick = fn;
  }

  on('startBtn', function() {
    state.quiz = {
      adults: 2, kids: false, kidsCount: 0, store: [], budget: 5600,
      allergens: [], dislikes: [], kitchen: ['плита','духовка','микроволновка'], diet: [], cookDays: 7,
      adultsList: [], kidsList: []
    };
    try { refreshPrices(); } catch (e) {}
    try { refreshPricesLive(); } catch (e) {}
    state.quizStep = 0;
    state.likes = {};
    state.history = [];
    showScreen('quiz');
    renderQuiz();
  });

  on('quizNext', nextQuiz);
  on('quizBack', prevQuiz);
  on('btnYes', function(){ swipe('yes'); });
  on('btnNo', function(){ swipe('no'); });
  on('btnSuper', function(){ swipe('super'); });
  on('btnUndo', undoSwipe);
  on('btnFinishSwipe', finishSwipe);
  on('btnToShop', function() {
    try { renderShop(); } catch (e) { console.error('renderShop', e); }
    showScreen('shop');
  });
  on('shopBack', function(){ showScreen('menu'); });
on('swiperBack', function(){ showScreen('quiz'); });
  on('btnCopyShop', function(){ try { copyShop(); } catch(e){ alert(e.message); } });
  on('btnPrintShop', printShop);
  on('btnDownloadShop', exportShopFile);
  on('btnExportRecipes', exportRecipes);
  on('btnRestart', function() {
    if (confirm('Начать заново? Текущее меню будет удалено.')) {
      safeRemove('ration_v2');
      _memStore = null;
      state.quiz = {};
      state.likes = {};
      state.history = [];
      state.deck = [];
      state.deckIdx = 0;
      state.menu = null;
      state.norms = null;
      state.shopChecks = {};
      state.cookPlan = null;
      state.taste = { tags: {}, cuisine: {}, protein: {}, meal: {}, sample: 0 };
      state.currentDay = 0;
      showScreen('welcome');
    }
  });
  on('closeModal', closeModal);
  on('closeRecipe', function() {
    var m = document.getElementById('recipeModal');
    if (m) m.classList.remove('open');
  });
  var recipeModal = document.getElementById('recipeModal');
  if (recipeModal) recipeModal.onclick = function(e) { if (e.target === recipeModal) recipeModal.classList.remove('open'); };
  var replaceModal = document.getElementById('replaceModal');
  if (replaceModal) replaceModal.onclick = function(e) { if (e.target === replaceModal) closeModal(); };

  document.addEventListener('keydown', function(e) {
    var sw = document.getElementById('screen-swiper');
    if (!sw || !sw.classList.contains('active')) return;
    if (e.key === 'ArrowRight') swipe('yes');
    if (e.key === 'ArrowLeft') swipe('no');
    if (e.key === 'ArrowUp') swipe('super');
    if (e.key === 'z' && e.ctrlKey) undoSwipe();
  });

  // Restore previous menu if user already built one
  try {
    if (restoreSession()) {
      // Already on menu screen
    }
  } catch (eRest) {
    console.warn(eRest);
  }
}

function boot() {
  try { tgInit(); } catch (e) { console.warn(e); }
  try { safariViewportFix(); } catch (e) {}
  try { safariBlurInputs(); } catch (e) {}
  try {
    if (isIOS()) document.documentElement.classList.add('is-ios');
    if (isSafari()) document.documentElement.classList.add('is-safari');
  } catch (e) {}
  try {
    init();
    try {
      if (isTelegram()) {
        var tip = document.querySelector('.ios-tip');
        if (tip) tip.textContent = 'Открыто в Telegram. Меню сохраняется на устройстве и откроется при следующем входе.';
        tgBackForScreen('welcome');
        try {
          tgMainButton('Собрать рацион', function() {
            var b = document.getElementById('startBtn');
            if (b) b.click();
          });
        } catch (e4) {}
      }
    } catch (e) {}
  } catch (e) {
    console.error('init error', e);
    try {
      var b = document.getElementById('startBtn');
      if (b) b.onclick = function() {
        try { init(); } catch (e2) { alert('Ошибка запуска: ' + (e2 && e2.message ? e2.message : e2)); }
      };
    } catch (e3) {}
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
