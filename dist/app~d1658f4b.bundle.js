(()=>{"use strict";var n,A={756:(n,A,r)=>{r.d(A,{Z:()=>p});var e=r(537),t=r.n(e),i=r(645),a=r.n(i),o=r(667),d=r.n(o),E=new URL(r(541),r.b),l=a()(t()),s=d()(E);l.push([n.id,"* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody, html {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 12px;\n  color: #424242;\n}\n\n\n/*\n * Header\n *\n */\n\n.skip-anchor {\n  position: absolute;\n  top: -40px; \n  background: #9b0e11;\n  color: white;\n  padding: 12px;\n}\n\n.skip-anchor:focus{\n  top: 0;\n}\n\n.header {\n  min-height: 56px;\n  transition: min-height 0.3s;\n}\n\n.header__inner {\n  width: 100%;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.header__title {\n  font-weight: 500;\n  font-size: 4em;\n  margin: 0.10em 0.30em;\n  display: inline-block;\n  color: red;\n}\n\n.header__menu {\n  font-size: 30px;\n  margin: 10px auto;\n  display: block;\n  width: 44px;\n}\n.fa{\n  font-size: 44px;\n  width: 44px;\n}\n\n.header__menu > span {\n  font-size: 44px;\n}\n\n\n/*\n * Top level navigation\n */\n\n.nav {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n}\n\n.nav__list {\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n\n.nav__item {\n  box-sizing: border-box;\n  display: inline-block;\n  width: 20%;\n  text-align: center;\n  line-height: 24px;\n  text-transform: uppercase;\n  margin-bottom: 30px;\n}\n\n.nav a {\n  display: inline-block;\n  padding: 1.2rem;\n  font-size: 1rem;\n  text-decoration: none;\n  color: #000000;\n}\n\n.nav a:hover {\n  text-decoration: underline;\n  color: #000;\n}\n\n\n/*\n * Jumbotron\n */\n\n.hero {\n  display: flex;\n  align-items: center;\n  min-height: 380px;\n  width: 100%;\n  text-align: center;\n  background: url("+s+") fixed;\n  background-position: center;\n  /* opacity: 60%; */\n  background-size: cover;\n}\n\n.hero__inner {\n  margin: 0 auto;\n  max-width: 600px;\n}\n\n.hero__title {\n  padding: 0 1rem;\n  color: white;\n  font-weight: 500;\n  font-size: 36px;\n  background-color: red;\n}\n\n.hero__tagline {\n  background-color: red;\n  color: #fff;\n  margin-top: 16px;\n  font-size: 18px;\n  font-weight: 300;\n}\n\n\n/*\n * main\n */\n\nmain {\n  width: 100%;\n  margin: 0 auto;\n}\n\n/*\n * content\n */\n\n.content {\n  padding: 32px;\n}\n\n/*\n * latest\n */\n\n.explore {\n  width: 100%;\n  margin: 60px auto;\n  text-align: center;\n  padding: 0 32px;\n}\n\n.explore__label {\n  font-size: 25px;\n  font-weight: lighter;\n}\n\n.explore__label::after {\n  content: '';\n  margin-top: 16px;\n  display: block;\n  border-bottom: 14px solid #eeeeee;\n}\n\n/*\n * Restaurant\n */\n\n.restaurants {\n  margin: 32px auto auto;\n  text-align: left;\n}\n\n/*\n * Restaurant item\n */\n\n .restaurant-item {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  width: 100%;\n  border-radius: 5px;\n  overflow: hidden;\n}\n\n.restaurant-item__content {\n  padding: 0 16px 16px 16px;\n}\n\n.restaurant-item__toDetail {\n  text-decoration: none;\n  color: #000;\n}\n\n.restaurant-item__thumbnail {\n  width: 100%;\n  object-fit: cover;\n  height: 250px;\n}\n\n.restaurant-item__title {\n  padding: 16px 16px 0 16px;\n  font-weight: 500;\n  font-size: 22px;\n  transition: 0.3s opacity;\n}\n\n.restaurant-item__title:hover {\n  opacity: 0.5;\n}\n\n.restaurant-item__city{\n  font-size: 16px;\n  opacity: 0.8;\n}\n\n.restaurant-item__title a {\n  font-size: 30px;\n  text-decoration: none;\n  color: inherit;\n}\n\n.restaurant-item__description {\n  overflow: hidden;\n  margin-top: 16px;\n  font-size: 17px;\n  line-height: 1.5em;\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  -webkit-box-orient: vertical;\n}\n\n/*\n * Detail\n */\n\n .restaurant {\n  padding: 0 10px;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 800px;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 20px 18px;\n}\n \n.restaurant__poster {\n  width: 100%;\n  max-width: 400px;\n  height: 350px;\n}\n \n.restaurant .restaurant__info h4 {\n  margin: 8px 0;\n}\n\n.detail-menu {\n  display:grid;\n}\n\n.detail-food, .detail-drink{\n  padding: 10px 0;\n}\n\n.detail-food ul li, .detail-drink ul li{\n  list-style-type: none;\n}\n\n.detail-review-item{\n  margin: 10px 0;\n  padding-top : 10px;\n  border-top: 10px solid #eeeeee;\n}\n\n.review-name {\n  font-weight: bold;\n}\n\n.review-date {\n  font-weight: lighter;\n}\n\n.review-body{\n  font-size: rem;\n}\n\n\n/*\n  Like\n*/\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: red;\n  \n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n  \n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\n\n/* \n * Review\n */\n\n.review {\n  width: 400px;\n  overflow:auto;\n}\n\n/*\n * footer\n */\n\nfooter {\n  background-color: #000000;\n  padding: 2em;\n  width: 100%;\n  text-align: center;\n}\n\nfooter ul {\n  margin: 0 auto;\n  display: inline-block;\n}\n\nfooter li {\n  display: inline-block;\n  margin: 0 1em;\n  font-size: 16px;\n  color: #fff\n}\n\n\n","",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,WAAW;EACX,YAAY;AACd;;AAEA;EACE,oCAAoC;EACpC,eAAe;EACf,cAAc;AAChB;;;AAGA;;;EAGE;;AAEF;EACE,kBAAkB;EAClB,UAAU;EACV,mBAAmB;EACnB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,MAAM;AACR;;AAEA;EACE,gBAAgB;EAChB,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,qBAAqB;EACrB,qBAAqB;EACrB,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,WAAW;AACb;AACA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;;AAGA;;EAEE;;AAEF;EACE,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,UAAU;EACV,SAAS;AACX;;AAEA;EACE,sBAAsB;EACtB,qBAAqB;EACrB,UAAU;EACV,kBAAkB;EAClB,iBAAiB;EACjB,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,eAAe;EACf,eAAe;EACf,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,0BAA0B;EAC1B,WAAW;AACb;;;AAGA;;EAEE;;AAEF;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,WAAW;EACX,kBAAkB;EAClB,yDAAgE;EAChE,2BAA2B;EAC3B,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,gBAAgB;EAChB,eAAe;EACf,gBAAgB;AAClB;;;AAGA;;EAEE;;AAEF;EACE,WAAW;EACX,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,cAAc;EACd,iCAAiC;AACnC;;AAEA;;EAEE;;AAEF;EACE,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;;EAEE;;CAED;EACC,0CAA0C;EAC1C,WAAW;EACX,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;EACrB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,gBAAgB;EAChB,eAAe;EACf,wBAAwB;AAC1B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,eAAe;EACf,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,oBAAoB;EACpB,qBAAqB;EACrB,4BAA4B;AAC9B;;AAEA;;EAEE;;CAED;EACC,eAAe;EACf,cAAc;EACd,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,0BAA0B;EAC1B,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,8BAA8B;AAChC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,cAAc;AAChB;;;AAGA;;CAEC;AACD;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,qBAAqB;;EAErB,eAAe;EACf,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,SAAS;;EAET,eAAe;EACf,YAAY;EACZ,eAAe;AACjB;;;AAGA;;EAEE;;AAEF;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,yBAAyB;EACzB,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,eAAe;EACf;AACF",sourcesContent:["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody, html {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 12px;\n  color: #424242;\n}\n\n\n/*\n * Header\n *\n */\n\n.skip-anchor {\n  position: absolute;\n  top: -40px; \n  background: #9b0e11;\n  color: white;\n  padding: 12px;\n}\n\n.skip-anchor:focus{\n  top: 0;\n}\n\n.header {\n  min-height: 56px;\n  transition: min-height 0.3s;\n}\n\n.header__inner {\n  width: 100%;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.header__title {\n  font-weight: 500;\n  font-size: 4em;\n  margin: 0.10em 0.30em;\n  display: inline-block;\n  color: red;\n}\n\n.header__menu {\n  font-size: 30px;\n  margin: 10px auto;\n  display: block;\n  width: 44px;\n}\n.fa{\n  font-size: 44px;\n  width: 44px;\n}\n\n.header__menu > span {\n  font-size: 44px;\n}\n\n\n/*\n * Top level navigation\n */\n\n.nav {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n}\n\n.nav__list {\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n\n.nav__item {\n  box-sizing: border-box;\n  display: inline-block;\n  width: 20%;\n  text-align: center;\n  line-height: 24px;\n  text-transform: uppercase;\n  margin-bottom: 30px;\n}\n\n.nav a {\n  display: inline-block;\n  padding: 1.2rem;\n  font-size: 1rem;\n  text-decoration: none;\n  color: #000000;\n}\n\n.nav a:hover {\n  text-decoration: underline;\n  color: #000;\n}\n\n\n/*\n * Jumbotron\n */\n\n.hero {\n  display: flex;\n  align-items: center;\n  min-height: 380px;\n  width: 100%;\n  text-align: center;\n  background: url('../public/images/heros/hero-image_2.jpg') fixed;\n  background-position: center;\n  /* opacity: 60%; */\n  background-size: cover;\n}\n\n.hero__inner {\n  margin: 0 auto;\n  max-width: 600px;\n}\n\n.hero__title {\n  padding: 0 1rem;\n  color: white;\n  font-weight: 500;\n  font-size: 36px;\n  background-color: red;\n}\n\n.hero__tagline {\n  background-color: red;\n  color: #fff;\n  margin-top: 16px;\n  font-size: 18px;\n  font-weight: 300;\n}\n\n\n/*\n * main\n */\n\nmain {\n  width: 100%;\n  margin: 0 auto;\n}\n\n/*\n * content\n */\n\n.content {\n  padding: 32px;\n}\n\n/*\n * latest\n */\n\n.explore {\n  width: 100%;\n  margin: 60px auto;\n  text-align: center;\n  padding: 0 32px;\n}\n\n.explore__label {\n  font-size: 25px;\n  font-weight: lighter;\n}\n\n.explore__label::after {\n  content: '';\n  margin-top: 16px;\n  display: block;\n  border-bottom: 14px solid #eeeeee;\n}\n\n/*\n * Restaurant\n */\n\n.restaurants {\n  margin: 32px auto auto;\n  text-align: left;\n}\n\n/*\n * Restaurant item\n */\n\n .restaurant-item {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  width: 100%;\n  border-radius: 5px;\n  overflow: hidden;\n}\n\n.restaurant-item__content {\n  padding: 0 16px 16px 16px;\n}\n\n.restaurant-item__toDetail {\n  text-decoration: none;\n  color: #000;\n}\n\n.restaurant-item__thumbnail {\n  width: 100%;\n  object-fit: cover;\n  height: 250px;\n}\n\n.restaurant-item__title {\n  padding: 16px 16px 0 16px;\n  font-weight: 500;\n  font-size: 22px;\n  transition: 0.3s opacity;\n}\n\n.restaurant-item__title:hover {\n  opacity: 0.5;\n}\n\n.restaurant-item__city{\n  font-size: 16px;\n  opacity: 0.8;\n}\n\n.restaurant-item__title a {\n  font-size: 30px;\n  text-decoration: none;\n  color: inherit;\n}\n\n.restaurant-item__description {\n  overflow: hidden;\n  margin-top: 16px;\n  font-size: 17px;\n  line-height: 1.5em;\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  -webkit-box-orient: vertical;\n}\n\n/*\n * Detail\n */\n\n .restaurant {\n  padding: 0 10px;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 800px;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 20px 18px;\n}\n \n.restaurant__poster {\n  width: 100%;\n  max-width: 400px;\n  height: 350px;\n}\n \n.restaurant .restaurant__info h4 {\n  margin: 8px 0;\n}\n\n.detail-menu {\n  display:grid;\n}\n\n.detail-food, .detail-drink{\n  padding: 10px 0;\n}\n\n.detail-food ul li, .detail-drink ul li{\n  list-style-type: none;\n}\n\n.detail-review-item{\n  margin: 10px 0;\n  padding-top : 10px;\n  border-top: 10px solid #eeeeee;\n}\n\n.review-name {\n  font-weight: bold;\n}\n\n.review-date {\n  font-weight: lighter;\n}\n\n.review-body{\n  font-size: rem;\n}\n\n\n/*\n  Like\n*/\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: red;\n  \n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n  \n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\n\n/* \n * Review\n */\n\n.review {\n  width: 400px;\n  overflow:auto;\n}\n\n/*\n * footer\n */\n\nfooter {\n  background-color: #000000;\n  padding: 2em;\n  width: 100%;\n  text-align: center;\n}\n\nfooter ul {\n  margin: 0 auto;\n  display: inline-block;\n}\n\nfooter li {\n  display: inline-block;\n  margin: 0 1em;\n  font-size: 16px;\n  color: #fff\n}\n\n\n"],sourceRoot:""}]);const p=l},948:(n,A,r)=>{r.d(A,{Z:()=>o});var e=r(537),t=r.n(e),i=r(645),a=r.n(i)()(t());a.push([n.id,".restaurants {\r\n  display: grid;\r\n  grid-row-gap: 20px;\r\n}\r\n\r\n@media screen and (min-width: 650px) {\r\n  .restaurants {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n \r\n  .restaurant {\r\n    grid-template-columns: auto 1fr;\r\n  }\r\n \r\n  .restaurant .restaurant__title, .detail-menu, .review{\r\n    grid-column-start: 1;\r\n    grid-column-end: 3;\r\n  }\r\n \r\n  .restaurant .restaurant__overview {\r\n    grid-column-start: 1;\r\n    grid-column-end: 3;\r\n  }\r\n\r\n  .detail-food{\r\n    grid-column-start: 1;\r\n  }\r\n\r\n  .detail-drink {\r\n    grid-column-start:2;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@media screen and (min-width: 700px) {\r\n  .cafes {\r\n      display: grid;\r\n      grid-template-columns: 1fr 1fr;\r\n      grid-column-gap: 10px;\r\n  }\r\n  .cafe-item__title{\r\n    font-size: 21px;\r\n  }\r\n  \r\n}\r\n\r\n@media screen and (min-width: 900px) {\r\n  .headline {\r\n      display: grid;\r\n      grid-template-columns: 1fr 1fr;\r\n  }\r\n\r\n  .restaurants {\r\n      display: grid;\r\n      grid-template-columns: 1fr 1fr 1fr;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n  main {\r\n      max-width: 100%;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 500px) {\r\n  .header__menu {\r\n      display: none;\r\n  }\r\n}\r\n\r\n\r\n@media screen and (max-width: 499px) {\r\n  .explore{\r\n    padding: 0 50px;\r\n  }\r\n  .nav {\r\n      z-index: 10;\r\n      background-color: #fff;\r\n      width: 90%;\r\n      position: absolute;\r\n\r\n      /* This trasform moves the drawer off canvas. */\r\n      left: -100%;\r\n\r\n      /* Optionally, we animate the drawer. */\r\n      transition: all 0.3s ease;\r\n  }\r\n\r\n  .open {\r\n    left:0;\r\n  }\r\n\r\n  .nav__item {\r\n      display: list-item;\r\n      border-bottom: 2px solid #E0E0E0;\r\n      width: 100%;\r\n      text-align: left;\r\n  }\r\n  .nav a {\r\n    font-size: 14px;\r\n  }\r\n\r\n  .restaurant__overview, .restaurant__info, .review {\r\n    width: 90%;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 800px) {\r\n  .nav__list {\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n  }\r\n}\r\n\r\n","",{version:3,sources:["webpack://./src/styles/responsive.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE;IACE,8BAA8B;EAChC;;EAEA;IACE,+BAA+B;EACjC;;EAEA;IACE,oBAAoB;IACpB,kBAAkB;EACpB;;EAEA;IACE,oBAAoB;IACpB,kBAAkB;EACpB;;EAEA;IACE,oBAAoB;EACtB;;EAEA;IACE,mBAAmB;EACrB;AACF;;;;;;;;AAQA;EACE;MACI,aAAa;MACb,8BAA8B;MAC9B,qBAAqB;EACzB;EACA;IACE,eAAe;EACjB;;AAEF;;AAEA;EACE;MACI,aAAa;MACb,8BAA8B;EAClC;;EAEA;MACI,aAAa;MACb,kCAAkC;EACtC;;AAEF;;AAEA;EACE;MACI,eAAe;EACnB;AACF;;AAEA;EACE;MACI,aAAa;EACjB;AACF;;;AAGA;EACE;IACE,eAAe;EACjB;EACA;MACI,WAAW;MACX,sBAAsB;MACtB,UAAU;MACV,kBAAkB;;MAElB,+CAA+C;MAC/C,WAAW;;MAEX,uCAAuC;MACvC,yBAAyB;EAC7B;;EAEA;IACE,MAAM;EACR;;EAEA;MACI,kBAAkB;MAClB,gCAAgC;MAChC,WAAW;MACX,gBAAgB;EACpB;EACA;IACE,eAAe;EACjB;;EAEA;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,gBAAgB;IAChB,cAAc;EAChB;AACF",sourcesContent:[".restaurants {\r\n  display: grid;\r\n  grid-row-gap: 20px;\r\n}\r\n\r\n@media screen and (min-width: 650px) {\r\n  .restaurants {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n \r\n  .restaurant {\r\n    grid-template-columns: auto 1fr;\r\n  }\r\n \r\n  .restaurant .restaurant__title, .detail-menu, .review{\r\n    grid-column-start: 1;\r\n    grid-column-end: 3;\r\n  }\r\n \r\n  .restaurant .restaurant__overview {\r\n    grid-column-start: 1;\r\n    grid-column-end: 3;\r\n  }\r\n\r\n  .detail-food{\r\n    grid-column-start: 1;\r\n  }\r\n\r\n  .detail-drink {\r\n    grid-column-start:2;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@media screen and (min-width: 700px) {\r\n  .cafes {\r\n      display: grid;\r\n      grid-template-columns: 1fr 1fr;\r\n      grid-column-gap: 10px;\r\n  }\r\n  .cafe-item__title{\r\n    font-size: 21px;\r\n  }\r\n  \r\n}\r\n\r\n@media screen and (min-width: 900px) {\r\n  .headline {\r\n      display: grid;\r\n      grid-template-columns: 1fr 1fr;\r\n  }\r\n\r\n  .restaurants {\r\n      display: grid;\r\n      grid-template-columns: 1fr 1fr 1fr;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n  main {\r\n      max-width: 100%;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 500px) {\r\n  .header__menu {\r\n      display: none;\r\n  }\r\n}\r\n\r\n\r\n@media screen and (max-width: 499px) {\r\n  .explore{\r\n    padding: 0 50px;\r\n  }\r\n  .nav {\r\n      z-index: 10;\r\n      background-color: #fff;\r\n      width: 90%;\r\n      position: absolute;\r\n\r\n      /* This trasform moves the drawer off canvas. */\r\n      left: -100%;\r\n\r\n      /* Optionally, we animate the drawer. */\r\n      transition: all 0.3s ease;\r\n  }\r\n\r\n  .open {\r\n    left:0;\r\n  }\r\n\r\n  .nav__item {\r\n      display: list-item;\r\n      border-bottom: 2px solid #E0E0E0;\r\n      width: 100%;\r\n      text-align: left;\r\n  }\r\n  .nav a {\r\n    font-size: 14px;\r\n  }\r\n\r\n  .restaurant__overview, .restaurant__info, .review {\r\n    width: 90%;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 800px) {\r\n  .nav__list {\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n  }\r\n}\r\n\r\n"],sourceRoot:""}]);const o=a},46:(n,A,r)=>{var e=r(379),t=r.n(e),i=r(795),a=r.n(i),o=r(569),d=r.n(o),E=r(565),l=r.n(E),s=r(216),p=r.n(s),C=r(589),B=r.n(C),g=r(756),c={};c.styleTagTransform=B(),c.setAttributes=l(),c.insert=d().bind(null,"head"),c.domAPI=a(),c.insertStyleElement=p(),t()(g.Z,c),g.Z&&g.Z.locals&&g.Z.locals},362:(n,A,r)=>{var e=r(379),t=r.n(e),i=r(795),a=r.n(i),o=r(569),d=r.n(o),E=r(565),l=r.n(E),s=r(216),p=r.n(s),C=r(589),B=r.n(C),g=r(948),c={};c.styleTagTransform=B(),c.setAttributes=l(),c.insert=d().bind(null,"head"),c.domAPI=a(),c.insertStyleElement=p(),t()(g.Z,c),g.Z&&g.Z.locals&&g.Z.locals}},r={};function e(n){var t=r[n];if(void 0!==t)return t.exports;var i=r[n]={id:n,exports:{}};return A[n](i,i.exports,e),i.exports}e.m=A,n=[],e.O=(A,r,t,i)=>{if(!r){var a=1/0;for(l=0;l<n.length;l++){for(var[r,t,i]=n[l],o=!0,d=0;d<r.length;d++)(!1&i||a>=i)&&Object.keys(e.O).every((n=>e.O[n](r[d])))?r.splice(d--,1):(o=!1,i<a&&(a=i));if(o){n.splice(l--,1);var E=t();void 0!==E&&(A=E)}}return A}i=i||0;for(var l=n.length;l>0&&n[l-1][2]>i;l--)n[l]=n[l-1];n[l]=[r,t,i]},e.n=n=>{var A=n&&n.__esModule?()=>n.default:()=>n;return e.d(A,{a:A}),A},e.d=(n,A)=>{for(var r in A)e.o(A,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:A[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,A)=>Object.prototype.hasOwnProperty.call(n,A),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var A=e.g.document;if(!n&&A&&(A.currentScript&&(n=A.currentScript.src),!n)){var r=A.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),(()=>{e.b=document.baseURI||self.location.href;var n={954:0};e.O.j=A=>0===n[A];var A=(A,r)=>{var t,i,[a,o,d]=r,E=0;if(a.some((A=>0!==n[A]))){for(t in o)e.o(o,t)&&(e.m[t]=o[t]);if(d)var l=d(e)}for(A&&A(r);E<a.length;E++)i=a[E],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(l)},r=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];r.forEach(A.bind(null,0)),r.push=A.bind(null,r.push.bind(r))})(),e.nc=void 0;var t=e.O(void 0,[666,582,193,337,268],(()=>e(253)));t=e.O(t)})();
//# sourceMappingURL=app~d1658f4b.bundle.js.map