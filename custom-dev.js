(function () {
  var language = window.location.pathname.split("/")[1];

  var isLoggedIn = false;

  const depositMoneyLink = () =>
    !isLoggedIn ? "?modal=login" : "?modal=wallet&tab=deposit";

  const withdrawMoneyLink = () =>
    !isLoggedIn ? "?modal=login" : "?modal=wallet&tab=withdraw";

  const isMobile = () => window.innerWidth < 770;

  const SVGS = {
    tvIcon: `
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.66699 16.6666V7.49998C1.66699 7.05795 1.84259 6.63403 2.15515 6.32147C2.46771 6.00891 2.89163 5.83331 3.33366 5.83331H16.667C17.109 5.83331 17.5329 6.00891 17.8455 6.32147C18.1581 6.63403 18.3337 7.05795 18.3337 7.49998V16.6666C18.3337 17.1087 18.1581 17.5326 17.8455 17.8452C17.5329 18.1577 17.109 18.3333 16.667 18.3333H3.33366C2.89163 18.3333 2.46771 18.1577 2.15515 17.8452C1.84259 17.5326 1.66699 17.1087 1.66699 16.6666Z" stroke="url(#paint0_linear_92_74)" stroke-width="1.5"/>
<path d="M7.08398 2.08331L10.0007 4.99998L12.9173 2.08331" stroke="url(#paint1_linear_92_74)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_92_74" x1="10.0003" y1="5.83331" x2="10.0003" y2="18.3333" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#999999"/>
</linearGradient>
<linearGradient id="paint1_linear_92_74" x1="10.0007" y1="2.08331" x2="10.0007" y2="4.99998" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#999999"/>
</linearGradient>
</defs>
</svg>
`,
    moneyIcon: `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.375 4.5V1.875C12.375 1.64294 12.2828 1.42038 12.1187 1.25628C11.9546 1.09219 11.7321 1 11.5 1H2.75C2.28587 1 1.84075 1.18437 1.51256 1.51256C1.18437 1.84075 1 2.28587 1 2.75M1 2.75C1 3.21413 1.18437 3.65925 1.51256 3.98744C1.84075 4.31563 2.28587 4.5 2.75 4.5H13.25C13.4821 4.5 13.7046 4.59219 13.8687 4.75628C14.0328 4.92038 14.125 5.14294 14.125 5.375V8M1 2.75V13.25C1 13.7141 1.18437 14.1592 1.51256 14.4874C1.84075 14.8156 2.28587 15 2.75 15H13.25C13.4821 15 13.7046 14.9078 13.8687 14.7437C14.0328 14.5796 14.125 14.3571 14.125 14.125V11.5" stroke="url(#paint0_linear_92_69)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 8V11.5H11.5C11.0359 11.5 10.5908 11.3156 10.2626 10.9874C9.93437 10.6592 9.75 10.2141 9.75 9.75C9.75 9.28587 9.93437 8.84075 10.2626 8.51256C10.5908 8.18437 11.0359 8 11.5 8H15Z" stroke="url(#paint1_linear_92_69)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_92_69" x1="7.5625" y1="1" x2="7.5625" y2="15" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#999999"/>
</linearGradient>
<linearGradient id="paint1_linear_92_69" x1="12.375" y1="8" x2="12.375" y2="11.5" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#999999"/>
</linearGradient>
</defs>
</svg>
`,
    callIcon: `
<svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.88267 0C8.38493 0 6.94853 0.594976 5.88947 1.65404C4.83041 2.7131 4.23543 4.1495 4.23543 5.64724C4.23543 7.14498 4.83041 8.58138 5.88947 9.64044C6.94853 10.6995 8.38493 11.2945 9.88267 11.2945C11.3804 11.2945 12.8168 10.6995 13.8759 9.64044C14.9349 8.58138 15.5299 7.14498 15.5299 5.64724C15.5299 4.1495 14.9349 2.7131 13.8759 1.65404C12.8168 0.594976 11.3804 0 9.88267 0ZM2.83633 12.7063C2.46446 12.7046 2.09592 12.7764 1.75187 12.9176C1.40783 13.0587 1.09505 13.2664 0.831507 13.5288C0.567962 13.7912 0.358839 14.103 0.216144 14.4464C0.0734504 14.7898 -3.76511e-06 15.158 1.44748e-10 15.5299C1.44748e-10 17.9173 1.17604 19.7173 3.01422 20.8906C4.82416 22.044 7.26376 22.589 9.88267 22.589C10.3872 22.589 10.8841 22.5687 11.3735 22.5283C11.2606 22.0392 11.268 21.5301 11.3948 21.0445C11.5217 20.5589 11.7644 20.1113 12.102 19.7399L12.8715 18.883C13.2216 18.4948 13.6695 18.2077 14.1683 18.0515C14.6672 17.8953 15.1988 17.8758 15.7078 17.9949L16.8161 18.2575C17.3497 17.817 17.673 17.2975 17.8213 16.6749L17.09 15.9605C16.7086 15.5877 16.4444 15.1115 16.3298 14.5906C16.2151 14.0697 16.2551 13.5267 16.4448 13.0282L16.5662 12.7063H2.83633ZM17.7662 13.528L18.1658 12.4691C18.53 11.5077 19.6651 11.0333 20.6223 11.4413L21.1701 11.6757C21.8379 11.9609 22.3899 12.4776 22.5071 13.1722C23.1523 17.0194 19.8133 22.4916 15.9704 23.8878C15.2758 24.1391 14.5261 23.9443 13.9303 23.5405L13.4418 23.2087C13.2413 23.0737 13.0724 22.8967 12.9469 22.69C12.8214 22.4833 12.7422 22.2519 12.7149 22.0116C12.6875 21.7714 12.7125 21.528 12.7883 21.2984C12.8641 21.0688 12.9888 20.8584 13.1538 20.6816L13.9233 19.8246C14.104 19.6256 14.3346 19.4784 14.5912 19.3982C14.8478 19.3181 15.1212 19.3079 15.3831 19.3686L17.1126 19.7781C18.4839 18.9216 19.219 17.7168 19.3178 16.1638L18.0782 14.9511C17.8931 14.7701 17.7649 14.539 17.7095 14.2862C17.654 14.0333 17.6738 13.7698 17.7662 13.528Z" fill="url(#paint0_linear_92_66)"/>
<defs>
<linearGradient id="paint0_linear_92_66" x1="11.2937" y1="0" x2="11.2937" y2="24" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#999999"/>
</linearGradient>
</defs>
</svg>
`,
    twitterIcon: `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_92_60" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
<path d="M0 0H24V24H0V0Z" fill="white"/>
</mask>
<g mask="url(#mask0_92_60)">
<path d="M18.9 1.125H22.5806L14.5406 10.3376L24 22.8759H16.5943L10.7897 15.273L4.15543 22.8759H0.471429L9.07029 13.0187L0 1.12671H7.59429L12.8331 8.07471L18.9 1.125ZM17.6057 20.6679H19.6457L6.48 3.21814H4.29257L17.6057 20.6679Z" fill="url(#paint0_linear_92_60)"/>
</g>
<defs>
<linearGradient id="paint0_linear_92_60" x1="12" y1="1.125" x2="12" y2="22.8759" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#999999"/>
</linearGradient>
</defs>
</svg>
`,
    telegramIcon: `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM17.568 8.16C17.388 10.056 16.608 14.664 16.212 16.788C16.044 17.688 15.708 17.988 15.396 18.024C14.7 18.084 14.172 17.568 13.5 17.124C12.444 16.428 11.844 15.996 10.824 15.324C9.636 14.544 10.404 14.112 11.088 13.416C11.268 13.236 14.34 10.44 14.4 10.188C14.4083 10.1498 14.4072 10.1102 14.3968 10.0726C14.3863 10.0349 14.3668 10.0004 14.34 9.972C14.268 9.912 14.172 9.936 14.088 9.948C13.98 9.972 12.3 11.088 9.024 13.296C8.544 13.62 8.112 13.788 7.728 13.776C7.296 13.764 6.48 13.536 5.868 13.332C5.112 13.092 4.524 12.96 4.572 12.54C4.596 12.324 4.896 12.108 5.46 11.88C8.964 10.356 11.292 9.348 12.456 8.868C15.792 7.476 16.476 7.236 16.932 7.236C17.028 7.236 17.256 7.26 17.4 7.38C17.52 7.476 17.556 7.608 17.568 7.704C17.556 7.776 17.58 7.992 17.568 8.16Z" fill="url(#paint0_linear_92_58)"/>
<defs>
<linearGradient id="paint0_linear_92_58" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#999999"/>
</linearGradient>
</defs>
</svg>
`,
    whatsappIcon: `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.0498 4.90999C18.1329 3.9841 17.0408 3.24996 15.8373 2.75036C14.6338 2.25075 13.3429 1.99568 12.0398 1.99999C6.5798 1.99999 2.1298 6.44999 2.1298 11.91C2.1298 13.66 2.5898 15.36 3.4498 16.86L2.0498 22L7.2998 20.62C8.7498 21.41 10.3798 21.83 12.0398 21.83C17.4998 21.83 21.9498 17.38 21.9498 11.92C21.9498 9.26999 20.9198 6.77999 19.0498 4.90999ZM12.0398 20.15C10.5598 20.15 9.1098 19.75 7.8398 19L7.5398 18.82L4.4198 19.64L5.2498 16.6L5.0498 16.29C4.22735 14.9771 3.79073 13.4593 3.7898 11.91C3.7898 7.36999 7.4898 3.66999 12.0298 3.66999C14.2298 3.66999 16.2998 4.52999 17.8498 6.08999C18.6174 6.85386 19.2257 7.76254 19.6394 8.76332C20.0531 9.76411 20.264 10.8371 20.2598 11.92C20.2798 16.46 16.5798 20.15 12.0398 20.15ZM16.5598 13.99C16.3098 13.87 15.0898 13.27 14.8698 13.18C14.6398 13.1 14.4798 13.06 14.3098 13.3C14.1398 13.55 13.6698 14.11 13.5298 14.27C13.3898 14.44 13.2398 14.46 12.9898 14.33C12.7398 14.21 11.9398 13.94 10.9998 13.1C10.2598 12.44 9.7698 11.63 9.6198 11.38C9.4798 11.13 9.5998 11 9.7298 10.87C9.8398 10.76 9.9798 10.58 10.0998 10.44C10.2198 10.3 10.2698 10.19 10.3498 10.03C10.4298 9.85999 10.3898 9.71999 10.3298 9.59999C10.2698 9.47999 9.7698 8.25999 9.5698 7.75999C9.3698 7.27999 9.1598 7.33999 9.0098 7.32999H8.5298C8.3598 7.32999 8.0998 7.38999 7.8698 7.63999C7.6498 7.88999 7.0098 8.48999 7.0098 9.70999C7.0098 10.93 7.89981 12.11 8.0198 12.27C8.1398 12.44 9.7698 14.94 12.2498 16.01C12.8398 16.27 13.2998 16.42 13.6598 16.53C14.2498 16.72 14.7898 16.69 15.2198 16.63C15.6998 16.56 16.6898 16.03 16.8898 15.45C17.0998 14.87 17.0998 14.38 17.0298 14.27C16.9598 14.16 16.8098 14.11 16.5598 13.99Z" fill="url(#paint0_linear_92_55)"/>
<defs>
<linearGradient id="paint0_linear_92_55" x1="11.9998" y1="1.99994" x2="11.9998" y2="22" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#999999"/>
</linearGradient>
</defs>
</svg>
`,
  };

  try {
    if (typeof jQuery === "undefined") {
      var jqueryScript = document.createElement("script");
      jqueryScript.src = "https://code.jquery.com/jquery-3.6.0.min.js";
      document.head.appendChild(jqueryScript);
    }

    if (typeof Swiper === "undefined") {
      var swiperScript = document.createElement("script");
      swiperScript.src =
        "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js";
      document.head.appendChild(swiperScript);

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css";
      document.head.appendChild(link);

      // css
    }

    // Wait for DOM and both libraries to be ready
    const wait = setInterval(() => {
      if (
        typeof jQuery !== "undefined" &&
        typeof Swiper !== "undefined" &&
        document.readyState === "complete"
      ) {
        clearInterval(wait);

        $(document).ready(function () {
          initialize();

          const originalPushState = history.pushState;
          history.pushState = function (state) {
            originalPushState.apply(history, arguments);

            setTimeout(() => {
              initialize();
            }, 500);
            removeHomePageWidgets();
          };

          $(window).on("popstate", function () {
            setTimeout(() => {
              initialize();
            }, 500);
            removeHomePageWidgets();
          });
        });

        // ! No needed.
        // $(document).on("click", "#telegram-button", function (e) {
        //   e.preventDefault();
        //   window.open("https://t.me/betredi", "_blank");
        // });

        // $(document).on("click", 'a[href$="/promotions"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/promotions"
        //       : "https://betredi109.com/en/promotions";
        // });

        // $(document).on("click", 'a[href$="/tournaments"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/tournaments"
        //       : "https://betredi109.com/en/tournaments";
        // });

        // $(document).on("click", 'a[href*="/settings"]', function (e) {
        //   e.preventDefault();
        //   // window.location.assign(
        //   //   language === "tr"
        //   //     ? "https://betredi109.com/tr/settings?tab=general"
        //   //     : "https://betredi109.com/en/settings?tab=general"
        //   // );
        //   if (language === "tr")
        //     window.location.href = "https://betredi109.com/tr/settings";
        //   if (language === "en")
        //     window.location.href = "https://betredi109.com/en/settings";
        //   // window.location.href = "https://betredi109.com/tr/settings";
        // });

        // $(document).on("click", 'a[href$="/transactions"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/transactions"
        //       : "https://betredi109.com/en/transactions";
        // });

        // $(document).on("click", 'a[href$="/affiliate"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/affiliate"
        //       : "https://betredi109.com/en/affiliate";
        // });

        // $(document).on("click", 'a[href$="/policy"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/policy"
        //       : "https://betredi109.com/en/policy";
        // });

        // $(document).on("click", 'a[href$="/casino/slots"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/casino/slots"
        //       : "https://betredi109.com/en/casino/slots";
        // });

        // $(document).on("click", 'a[href$="/live-casino"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/live-casino"
        //       : "https://betredi109.com/en/live-casino";
        // });

        // $(document).on("click", 'a[href$="/sportsbook"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/sportsbook"
        //       : "https://betredi109.com/en/sportsbook";
        // });

        // $(document).on(
        //   "click",
        //   'a[href$="/casino/category/exclusive"]',
        //   function (e) {
        //     e.preventDefault();
        //     window.location.href =
        //       language === "tr"
        //         ? "https://betredi109.com/tr/casino/category/exclusive"
        //         : "https://betredi109.com/en/casino/category/exclusive";
        //   }
        // );

        // $(document).on(
        //   "click",
        //   'a[href$="/casino/virtual_sports"]',
        //   function (e) {
        //     e.preventDefault();
        //     window.location.href =
        //       language === "tr"
        //         ? "https://betredi109.com/tr/casino/virtual_sports"
        //         : "https://betredi109.com/en/casino/virtual_sports";
        //   }
        // );

        // $(document).on("click", 'a[href$="/vip"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/vip"
        //       : "https://betredi109.com/en/vip";
        // });

        // $(document).on("click", 'a[href$="/casino"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/casino"
        //       : "https://betredi109.com/en/casino";
        // });

        // $(document).on("click", 'a[href$="/e-sport"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/e-sport"
        //       : "https://betredi109.com/en/e-sport";
        // });

        // $(document).on("click", 'a[href$="/favorites"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/favorites"
        //       : "https://betredi109.com/en/favorites";
        // });

        // $(document).on("click", 'a[href$="/trade"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/trade"
        //       : "https://betredi109.com/en/trade";
        // });

        // $(document).on("click", 'a[href$="/providers"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers"
        //       : "https://betredi109.com/en/providers";
        // });

        // $(document).on(
        //   "click",
        //   'a[href$="/providers/pragmaticplay"]',
        //   function (e) {
        //     e.preventDefault();
        //     window.location.href =
        //       language === "tr"
        //         ? "https://betredi109.com/tr/providers/pragmaticplay"
        //         : "https://betredi109.com/en/providers/pragmaticplay";
        //   }
        // );

        // $(document).on(
        //   "click",
        //   'a[href$="/providers/evolution"]',
        //   function (e) {
        //     e.preventDefault();
        //     window.location.href =
        //       language === "tr"
        //         ? "https://betredi109.com/tr/providers/evolution"
        //         : "https://betredi109.com/en/providers/evolution";
        //   }
        // );

        // $(document).on("click", 'a[href$="/providers/hacksaw"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/hacksaw"
        //       : "https://betredi109.com/en/providers/hacksaw";
        // });

        // $(document).on("click", 'a[href$="/providers/egt"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/egt"
        //       : "https://betredi109.com/en/providers/egt";
        // });

        // $(document).on(
        //   "click",
        //   'a[href$="/providers/nolimitcity"]',
        //   function (e) {
        //     e.preventDefault();
        //     window.location.href =
        //       language === "tr"
        //         ? "https://betredi109.com/tr/providers/nolimitcity"
        //         : "https://betredi109.com/en/providers/nolimitcity";
        //   }
        // );

        // $(document).on("click", 'a[href$="/providers/egt"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/egt"
        //       : "https://betredi109.com/en/providers/egt";
        // });

        // $(document).on("click", 'a[href$="/providers/playson"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/playson"
        //       : "https://betredi109.com/en/providers/playson";
        // });

        // $(document).on("click", 'a[href$="/providers/netent"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/netent"
        //       : "https://betredi109.com/en/providers/netent";
        // });

        // $(document).on("click", 'a[href$="/providers/popiplay"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/popiplay"
        //       : "https://betredi109.com/en/providers/popiplay";
        // });

        // $(document).on(
        //   "click",
        //   'a[href$="/providers/thunderkick"]',
        //   function (e) {
        //     e.preventDefault();
        //     window.location.href =
        //       language === "tr"
        //         ? "https://betredi109.com/tr/providers/thunderkick"
        //         : "https://betredi109.com/en/providers/thunderkick";
        //   }
        // );

        // $(document).on("click", 'a[href$="/providers/booming"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/booming"
        //       : "https://betredi109.com/en/providers/booming";
        // });

        // $(document).on("click", 'a[href$="/providers/redtiger"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/redtiger"
        //       : "https://betredi109.com/en/providers/redtiger";
        // });

        // $(document).on(
        //   "click",
        //   'a[href$="/providers/pragmaticlive"]',
        //   function (e) {
        //     e.preventDefault();
        //     window.location.href =
        //       language === "tr"
        //         ? "https://betredi109.com/tr/providers/pragmaticlive"
        //         : "https://betredi109.com/en/providers/pragmaticlive";
        //   }
        // );

        // $(document).on("click", 'a[href$="/providers/bgaming"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/bgaming"
        //       : "https://betredi109.com/en/providers/bgaming";
        // });

        // $(document).on("click", 'a[href$="/providers/gameart"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/gameart"
        //       : "https://betredi109.com/en/providers/gameart";
        // });

        // $(document).on("click", 'a[href$="/providers/fantasma"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/fantasma"
        //       : "https://betredi109.com/en/providers/fantasma";
        // });

        // $(document).on("click", 'a[href$="/providers/slotmill"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/slotmill"
        //       : "https://betredi109.com/en/providers/slotmill";
        // });

        // $(document).on(
        //   "click",
        //   'a[href$="/providers/1spin4win"]',
        //   function (e) {
        //     e.preventDefault();
        //     window.location.href =
        //       language === "tr"
        //         ? "https://betredi109.com/tr/providers/1spin4win"
        //         : "https://betredi109.com/en/providers/1spin4win";
        //   }
        // );

        // $(document).on(
        //   "click",
        //   'a[href$="/providers/aesexybaccarat"]',
        //   function (e) {
        //     e.preventDefault();
        //     window.location.href =
        //       language === "tr"
        //         ? "https://betredi109.com/tr/providers/aesexybaccarat"
        //         : "https://betredi109.com/en/providers/aesexybaccarat";
        //   }
        // );

        // $(document).on("click", 'a[href$="/providers/5men"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/5men"
        //       : "https://betredi109.com/en/providers/5men";
        // });

        // $(document).on(
        //   "click",
        //   'a[href$="/providers/novomatic"]',
        //   function (e) {
        //     e.preventDefault();
        //     window.location.href =
        //       language === "tr"
        //         ? "https://betredi109.com/tr/providers/novomatic"
        //         : "https://betredi109.com/en/providers/novomatic";
        //   }
        // );

        // $(document).on("click", 'a[href$="/providers/7mojos"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/7mojos"
        //       : "https://betredi109.com/en/providers/7mojos";
        // });

        // $(document).on("click", 'a[href$="/providers/alg"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/alg"
        //       : "https://betredi109.com/en/providers/alg";
        // });

        // $(document).on("click", 'a[href$="/providers/amatic"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/amatic"
        //       : "https://betredi109.com/en/providers/amatic";
        // });

        // $(document).on(
        //   "click",
        //   'a[href$="/providers/endorphina"]',
        //   function (e) {
        //     e.preventDefault();
        //     window.location.href =
        //       language === "tr"
        //         ? "https://betredi109.com/tr/providers/endorphina"
        //         : "https://betredi109.com/en/providers/endorphina";
        //   }
        // );

        // $(document).on("click", 'a[href$="/providers/pgsoft"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/pgsoft"
        //       : "https://betredi109.com/en/providers/pgsoft";
        // });

        // $(document).on("click", 'a[href$="/providers/apollo"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/apollo"
        //       : "https://betredi109.com/en/providers/apollo";
        // });

        // $(document).on(
        //   "click",
        //   'a[href$="/providers/asiagaming"]',
        //   function (e) {
        //     e.preventDefault();
        //     window.location.href =
        //       language === "tr"
        //         ? "https://betredi109.com/tr/providers/asiagaming"
        //         : "https://betredi109.com/en/providers/asiagaming";
        //   }
        // );

        // $(document).on("click", 'a[href$="/providers/atomic"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/atomic"
        //       : "https://betredi109.com/en/providers/atomic";
        // });

        // $(document).on("click", 'a[href$="/providers/beefee"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/beefee"
        //       : "https://betredi109.com/en/providers/beefee";
        // });

        // $(document).on("click", 'a[href$="/providers/belatra"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/belatra"
        //       : "https://betredi109.com/en/providers/belatra";
        // });

        // $(document).on(
        //   "click",
        //   'a[href$="/providers/betsolutions"]',
        //   function (e) {
        //     e.preventDefault();
        //     window.location.href =
        //       language === "tr"
        //         ? "https://betredi109.com/tr/providers/betsolutions"
        //         : "https://betredi109.com/en/providers/betsolutions";
        //   }
        // );

        // $(document).on("click", 'a[href$="/providers/bet2tech"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/bet2tech"
        //       : "https://betredi109.com/en/providers/bet2tech";
        // });

        // $(document).on(
        //   "click",
        //   'a[href$="/providers/beterlive"]',
        //   function (e) {
        //     e.preventDefault();
        //     window.location.href =
        //       language === "tr"
        //         ? "https://betredi109.com/tr/providers/beterlive"
        //         : "https://betredi109.com/en/providers/beterlive";
        //   }
        // );

        // $(document).on(
        //   "click",
        //   'a[href$="/providers/betradarvs"]',
        //   function (e) {
        //     e.preventDefault();
        //     window.location.href =
        //       language === "tr"
        //         ? "https://betredi109.com/tr/providers/betradarvs"
        //         : "https://betredi109.com/en/providers/betradarvs";
        //   }
        // );

        // $(document).on("click", 'a[href$="/providers/betsoft"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/betsoft"
        //       : "https://betredi109.com/en/providers/betsoft";
        // });

        // $(document).on("click", 'a[href$="/providers/eagaming"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/eagaming"
        //       : "https://betredi109.com/en/providers/eagaming";
        // });

        // $(document).on("click", 'a[href$="/providers/concept"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/concept"
        //       : "https://betredi109.com/en/providers/concept";
        // });

        // $(document).on("click", 'a[href$="/providers/cq9"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/cq9"
        //       : "https://betredi109.com/en/providers/cq9";
        // });

        // $(document).on("click", 'a[href$="/providers/ctgaming"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/ctgaming"
        //       : "https://betredi109.com/en/providers/ctgaming";
        // });

        // $(document).on(
        //   "click",
        //   'a[href$="/providers/everymatrix"]',
        //   function (e) {
        //     e.preventDefault();
        //     window.location.href =
        //       language === "tr"
        //         ? "https://betredi109.com/tr/providers/everymatrix"
        //         : "https://betredi109.com/en/providers/everymatrix";
        //   }
        // );

        // $(document).on("click", 'a[href$="/providers/evoplay"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/evoplay"
        //       : "https://betredi109.com/en/providers/evoplay";
        // });

        // $(document).on("click", 'a[href$="/providers/ezugi"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/ezugi"
        //       : "https://betredi109.com/en/providers/ezugi";
        // });

        // $(document).on("click", 'a[href$="/providers/fazi"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/fazi"
        //       : "https://betredi109.com/en/providers/fazi";
        // });

        // $(document).on("click", 'a[href$="/providers/fugaso"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/fugaso"
        //       : "https://betredi109.com/en/providers/fugaso";
        // });

        // $(document).on("click", 'a[href$="/providers/gamebeat"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/gamebeat"
        //       : "https://betredi109.com/en/providers/gamebeat";
        // });

        // $(document).on(
        //   "click",
        //   'a[href$="/providers/gaming7777"]',
        //   function (e) {
        //     e.preventDefault();
        //     window.location.href =
        //       language === "tr"
        //         ? "https://betredi109.com/tr/providers/gaming7777"
        //         : "https://betredi109.com/en/providers/gaming7777";
        //   }
        // );

        // $(document).on("click", 'a[href$="/providers/genii"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/genii"
        //       : "https://betredi109.com/en/providers/genii";
        // });

        // $(document).on("click", 'a[href$="/providers/givme"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/givme"
        //       : "https://betredi109.com/en/providers/givme";
        // });

        // $(document).on(
        //   "click",
        //   'a[href$="/providers/goldenhero"]',
        //   function (e) {
        //     e.preventDefault();
        //     window.location.href =
        //       language === "tr"
        //         ? "https://betredi109.com/tr/providers/goldenhero"
        //         : "https://betredi109.com/en/providers/goldenhero";
        //   }
        // );

        // $(document).on("click", 'a[href$="/providers/habanero"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/habanero"
        //       : "https://betredi109.com/en/providers/habanero";
        // });

        // $(document).on("click", 'a[href$="/providers/hogaming"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/hogaming"
        //       : "https://betredi109.com/en/providers/hogaming";
        // });

        // $(document).on(
        //   "click",
        //   'a[href$="/providers/hollegames"]',
        //   function (e) {
        //     e.preventDefault();
        //     window.location.href =
        //       language === "tr"
        //         ? "https://betredi109.com/tr/providers/hollegames"
        //         : "https://betredi109.com/en/providers/hollegames";
        //   }
        // );

        // $(document).on("click", 'a[href$="/providers/igrosoft"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/igrosoft"
        //       : "https://betredi109.com/en/providers/igrosoft";
        // });

        // $(document).on("click", 'a[href$="/providers/irondog"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/irondog"
        //       : "https://betredi109.com/en/providers/irondog";
        // });

        // $(document).on(
        //   "click",
        //   'a[href$="/providers/jaderabbit"]',
        //   function (e) {
        //     e.preventDefault();
        //     window.location.href =
        //       language === "tr"
        //         ? "https://betredi109.com/tr/providers/jaderabbit"
        //         : "https://betredi109.com/en/providers/jaderabbit";
        //   }
        // );

        // $(document).on("click", 'a[href$="/providers/jdb"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/jdb"
        //       : "https://betredi109.com/en/providers/jdb";
        // });

        // $(document).on("click", 'a[href$="/providers/kalamba"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/kalamba"
        //       : "https://betredi109.com/en/providers/kalamba";
        // });

        // $(document).on("click", 'a[href$="/providers/kiron"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/kiron"
        //       : "https://betredi109.com/en/providers/kiron";
        // });

        // $(document).on("click", 'a[href$="/providers/leander"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/leander"
        //       : "https://betredi109.com/en/providers/leander";
        // });

        // $(document).on("click", 'a[href$="/providers/leap"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/leap"
        //       : "https://betredi109.com/en/providers/leap";
        // });

        // $(document).on(
        //   "click",
        //   'a[href$="/providers/livegames"]',
        //   function (e) {
        //     e.preventDefault();
        //     window.location.href =
        //       language === "tr"
        //         ? "https://betredi109.com/tr/providers/livegames"
        //         : "https://betredi109.com/en/providers/livegames";
        //   }
        // );

        // $(document).on("click", 'a[href$="/providers/lucky"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/lucky"
        //       : "https://betredi109.com/en/providers/lucky";
        // });

        // $(document).on(
        //   "click",
        //   'a[href$="/providers/luckystreak"]',
        //   function (e) {
        //     e.preventDefault();
        //     window.location.href =
        //       language === "tr"
        //         ? "https://betredi109.com/tr/providers/luckystreak"
        //         : "https://betredi109.com/en/providers/luckystreak";
        //   }
        // );

        // $(document).on(
        //   "click",
        //   'a[href$="/providers/mascotgaming"]',
        //   function (e) {
        //     e.preventDefault();
        //     window.location.href =
        //       language === "tr"
        //         ? "https://betredi109.com/tr/providers/mascotgaming"
        //         : "https://betredi109.com/en/providers/mascotgaming";
        //   }
        // );

        // $(document).on(
        //   "click",
        //   'a[href$="/providers/merkurgaming"]',
        //   function (e) {
        //     e.preventDefault();
        //     window.location.href =
        //       language === "tr"
        //         ? "https://betredi109.com/tr/providers/merkurgaming"
        //         : "https://betredi109.com/en/providers/merkurgaming";
        //   }
        // );

        // $(document).on("click", 'a[href$="/providers/mplay"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/mplay"
        //       : "https://betredi109.com/en/providers/mplay";
        // });

        // $(document).on("click", 'a[href$="/providers/mrslotty"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/mrslotty"
        //       : "https://betredi109.com/en/providers/mrslotty";
        // });

        // $(document).on("click", 'a[href$="/providers/netgame"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/netgame"
        //       : "https://betredi109.com/en/providers/netgame";
        // });

        // $(document).on("click", 'a[href$="/providers/nucleus"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/nucleus"
        //       : "https://betredi109.com/en/providers/nucleus";
        // });

        // $(document).on("click", 'a[href$="/providers/oryx"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/oryx"
        //       : "https://betredi109.com/en/providers/oryx";
        // });

        // $(document).on("click", 'a[href$="/providers/playtech"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/playtech"
        //       : "https://betredi109.com/en/providers/playtech";
        // });

        // $(document).on(
        //   "click",
        //   'a[href$="/providers/quickspin"]',
        //   function (e) {
        //     e.preventDefault();
        //     window.location.href =
        //       language === "tr"
        //         ? "https://betredi109.com/tr/providers/quickspin"
        //         : "https://betredi109.com/en/providers/quickspin";
        //   }
        // );

        // $(document).on("click", 'a[href$="/providers/redrake"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/redrake"
        //       : "https://betredi109.com/en/providers/redrake";
        // });

        // $(document).on("click", 'a[href$="/providers/reevo"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/reevo"
        //       : "https://betredi109.com/en/providers/reevo";
        // });

        // $(document).on("click", 'a[href$="/providers/sagaming"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/sagaming"
        //       : "https://betredi109.com/en/providers/sagaming";
        // });

        // $(document).on("click", 'a[href$="/providers/salsa"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/salsa"
        //       : "https://betredi109.com/en/providers/salsa";
        // });

        // $(document).on(
        //   "click",
        //   'a[href$="/providers/spinomenal"]',
        //   function (e) {
        //     e.preventDefault();
        //     window.location.href =
        //       language === "tr"
        //         ? "https://betredi109.com/tr/providers/spinomenal"
        //         : "https://betredi109.com/en/providers/spinomenal";
        //   }
        // );

        // $(document).on("click", 'a[href$="/providers/spinza"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/spinza"
        //       : "https://betredi109.com/en/providers/spinza";
        // });

        // $(document).on("click", 'a[href$="/providers/spribe"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/spribe"
        //       : "https://betredi109.com/en/providers/spribe";
        // });

        // $(document).on("click", 'a[href$="/providers/swintt"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/swintt"
        //       : "https://betredi109.com/en/providers/swintt";
        // });

        // $(document).on(
        //   "click",
        //   'a[href$="/providers/tomhornnative"]',
        //   function (e) {
        //     e.preventDefault();
        //     window.location.href =
        //       language === "tr"
        //         ? "https://betredi109.com/tr/providers/tomhornnative"
        //         : "https://betredi109.com/en/providers/tomhornnative";
        //   }
        // );

        // $(document).on(
        //   "click",
        //   'a[href$="/providers/turbogames"]',
        //   function (e) {
        //     e.preventDefault();
        //     window.location.href =
        //       language === "tr"
        //         ? "https://betredi109.com/tr/providers/turbogames"
        //         : "https://betredi109.com/en/providers/turbogames";
        //   }
        // );

        // $(document).on("click", 'a[href$="/providers/tvbet"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/tvbet"
        //       : "https://betredi109.com/en/providers/tvbet";
        // });

        // $(document).on(
        //   "click",
        //   'a[href$="/providers/vivogaming"]',
        //   function (e) {
        //     e.preventDefault();
        //     window.location.href =
        //       language === "tr"
        //         ? "https://betredi109.com/tr/providers/vivogaming"
        //         : "https://betredi109.com/en/providers/vivogaming";
        //   }
        // );

        // $(document).on("click", 'a[href$="/providers/wizard"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/wizard"
        //       : "https://betredi109.com/en/providers/wizard";
        // });

        // $(document).on(
        //   "click",
        //   'a[href$="/providers/worldmatch"]',
        //   function (e) {
        //     e.preventDefault();
        //     window.location.href =
        //       language === "tr"
        //         ? "https://betredi109.com/tr/providers/worldmatch"
        //         : "https://betredi109.com/en/providers/worldmatch";
        //   }
        // );

        // $(document).on(
        //   "click",
        //   'a[href$="/providers/xprogaming"]',
        //   function (e) {
        //     e.preventDefault();
        //     window.location.href =
        //       language === "tr"
        //         ? "https://betredi109.com/tr/providers/xprogaming"
        //         : "https://betredi109.com/en/providers/xprogaming";
        //   }
        // );

        // $(document).on(
        //   "click",
        //   'a[href$="/providers/yggdrasil"]',
        //   function (e) {
        //     e.preventDefault();
        //     window.location.href =
        //       language === "tr"
        //         ? "https://betredi109.com/tr/providers/yggdrasil"
        //         : "https://betredi109.com/en/providers/yggdrasil";
        //   }
        // );

        // $(document).on("click", 'a[href$="/providers/zillion"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/zillion"
        //       : "https://betredi109.com/en/providers/zillion";
        // });

        // $(document).on("click", 'a[href$="/providers/ebetlab"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/ebetlab"
        //       : "https://betredi109.com/en/providers/ebetlab";
        // });

        // $(document).on("click", 'a[href$="/providers/imagine"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/imagine"
        //       : "https://betredi109.com/en/providers/imagine";
        // });

        // $(document).on("click", 'a[href$="/providers/jiliasia"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/jiliasia"
        //       : "https://betredi109.com/en/providers/jiliasia";
        // });

        // $(document).on("click", 'a[href$="/providers/royal"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/royal"
        //       : "https://betredi109.com/en/providers/royal";
        // });

        // $(document).on("click", 'a[href$="/providers/tada"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/tada"
        //       : "https://betredi109.com/en/providers/tada";
        // });

        // $(document).on("click", 'a[href$="/providers/zeus"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/zeus"
        //       : "https://betredi109.com/en/providers/zeus";
        // });

        // $(document).on("click", 'a[href$="/providers/peter"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/peter"
        //       : "https://betredi109.com/en/providers/peter";
        // });

        // $(document).on("click", 'a[href$="/providers/topspin"]', function (e) {
        //   e.preventDefault();
        //   window.location.href =
        //     language === "tr"
        //       ? "https://betredi109.com/tr/providers/topspin"
        //       : "https://betredi109.com/en/providers/topspin";
        // });
      }
    }, 300);

    function isHomePageCheck() {
      const path = window.location.pathname;
      const splitPath = path.split("/");
      return !splitPath[2] || splitPath[2] === "";
    }

    function removeHomePageWidgets() {
      if (!isHomePageCheck()) {
        $(".manually-added-home-widgets").hide();
      }
    }

    function removeOriginalMainSlider() {
      const firstSection = document.querySelector("#main__content .section");
      if (firstSection && firstSection.id === "main-slider") {
        console.log("Removing original #main-slider...");
        firstSection.style.display = "none";
      }
    }

    function insertCustomMainSlider() {
      const sliderHTML = `
    <div class="manually-added-home-widgets section pt-24" id="main-slider">
      <div class="container">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="https://betredi109.com/tr/promotion/15-casino-yatirim-bonusu-tr"><img src="https://betrediofficial.github.io/images/slider/15Casino.webp" class="slide-image" /></a>
            </div>
            <div class="swiper-slide">
              <a href="https://betredi109.com/tr/promotion/15-spor-yatirim-bonusu-tr"><img src="https://betrediofficial.github.io/images/slider/15Spor.webp" class="slide-image" /></a>
            </div>
            <div class="swiper-slide">
              <a href="https://betredi109.com/tr/promotion/30-casino-discount-tr"><img src="https://betrediofficial.github.io/images/slider/30Discount.webp" class="slide-image" /></a>
            </div>
            <div class="swiper-slide">
              <a href="https://betredi109.com/tr/promotion/50-slot-yatirim-bonusu-tr"><img src="https://betrediofficial.github.io/images/slider/50Slot.webp" class="slide-image" /></a>
            </div>
            <div class="swiper-slide">
              <a href="https://betredi109.com/tr/promotion/100-freespin-deneme-bonusu-trrf"><img src="https://betrediofficial.github.io/images/slider/100Freespin.webp" class="slide-image" /></a>
            </div>
            <div class="swiper-slide">
              <a href="https://betredi109.com/tr/promotion/100-slot-iade-bonusu-rt"><img src="https://betrediofficial.github.io/images/slider/100Slotiade.webp" class="slide-image" /></a>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
  `;

      const mainContent = document.querySelector("#main__content");
      if (mainContent) {
        mainContent.insertAdjacentHTML("afterbegin", sliderHTML);
        console.log("Custom slider inserted.");
      }
    }

    function initCustomSlider() {
      const swiperEl = document.querySelector("#main-slider .swiper");
      if (!swiperEl || typeof Swiper !== "function") return;

      window.myMainSlider = new Swiper(swiperEl, {
        loop: true,
        slidesPerView: 1,
        centeredSlides: false,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        pagination: {
          el: "#main-slider .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: "#main-slider .swiper-button-next",
          prevEl: "#main-slider .swiper-button-prev",
        },
        effect: "slide",
        speed: 600,
      });
    }

    function insertCustomMiniGamesSlider() {
      if ($("#mini-games-wrapper").length > 0) return;

      var miniGamesSection = `
     <div class="manually-added-home-widgets section" id="mini-games-wrapper" style="margin-top: 16px !important; margin-bottom: 16px !important;">
   <div class="container">
     <div class="row">
       <div class="col-12">
         <h2 class="section__title">
           <svg class="svg-icon">
             <use href="/static/media/sprite.1cea5f3c17045e69440504bcd887b333.svg#mini-games" 
                  xlink:href="/static/media/sprite.1cea5f3c17045e69440504bcd887b333.svg#mini-games">
             </use>
           </svg>
           Mini Oyunlar
         </h2>
       </div>
 
       <div class="col-12">
         <div class="swiper swiper-initialized swiper-horizontal myMiniGamesSwiper swiper-backface-hidden">
           <div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);">
 
             <div class="swiper-slide" data-swiper-slide-index="0" style="width: 339px; margin-right: 12px; background: none !important;">
               <a class="mini-game mini-game--carousel mini-game--no-layer" href="/tr/casino/games/ebetlab-crash-originals" style="background: none !important;">
                 <span class="mini-game__img">
                   <img loading="lazy" src="https://betrediofficial.github.io/images/mini-games-v2/crash_v2.webp" alt="">
                 </span>
               </a>
             </div>
 
             <div class="swiper-slide" data-swiper-slide-index="1" style="width: 339px; margin-right: 12px; background: none !important;">
               <a class="mini-game mini-game--carousel mini-game--no-layer" href="/tr/casino/games/ebetlab-dice-originals" style="background: none !important;">
                 <span class="mini-game__img">
                   <img loading="lazy" src="https://betrediofficial.github.io/images/mini-games-v2/dice_v2.webp" alt="">
                 </span>
               </a>
             </div>
 
             <div class="swiper-slide" data-swiper-slide-index="2" style="width: 339px; margin-right: 12px; background: none !important;">
               <a class="mini-game mini-game--carousel mini-game--no-layer" href="/tr/casino/games/ebetlab-mines-originals" style="background: none !important;">
                 <span class="mini-game__img">
                   <img loading="lazy" src="https://betrediofficial.github.io/images/mini-games-v2/mines_v2.webp" alt="">
                 </span>
               </a>
             </div>
 
             <div class="swiper-slide" data-swiper-slide-index="3" style="width: 339px; margin-right: 12px; background: none !important;">
               <a class="mini-game mini-game--carousel mini-game--no-layer" href="/tr/casino/games/ebetlab-plinko-originals" style="background: none !important;">
                 <span class="mini-game__img">
                   <img loading="lazy" src="https://betrediofficial.github.io/images/mini-games-v2/plinko_v2.webp" alt="">
                 </span>
               </a>
             </div>
 
           </div>
         </div>
       </div>
 
     </div>
   </div>
 </div>
 
 `;

      if ($("#casinooyunlari").length > 0)
        $("#casinooyunlari").after(miniGamesSection);
      else $("#tgpromo").eq(0).after(miniGamesSection);
    }

    function initCustomMiniGamesSlider() {
      const swiperEl = document.querySelector(
        "#mini-games-wrapper .myMiniGamesSwiper"
      );

      if (!swiperEl || typeof Swiper !== "function") return;

      window.myMiniGamesSwiper = new Swiper(swiperEl, {
        slidesPerView: "auto",
        freeMode: false,
        // centeredSlides: true,
        grabCursor: true,
      });
    }

    function autoplayMiniSlider() {
      const swiperEl = document.querySelector("#mini-slider-wrapper .swiper");

      if (!swiperEl || typeof Swiper !== "function") return;

      const slidesPerViewValue = window.innerWidth <= 768 ? 1 : 3;

      window.swiper = new Swiper(swiperEl, {
        slidesPerView: slidesPerViewValue,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      });
    }

    function initialize() {
      removeOriginalMainSlider();

      insertCustomMainSlider();
      setTimeout(initCustomSlider, 500);

      isLoggedIn = $(".header__signin").length > 0 ? false : true;
      language = window.location.pathname.split("/")[1];

      const isHomePage = isHomePageCheck();
      const is_mobile = isMobile();

      headerButtons(isHomePage);

      if (!isHomePage) {
        removeHomePageWidgets();
      } else {
        mobileSignInText();
        bottomMenuWidget(is_mobile);
        otherGames();

        if (!is_mobile) slotGames();

        tgPromo();

        if (!is_mobile) casinoGames();

        // miniGames();

        // sportsCard();
        //hide default games

        // HIDE
        // !is_mobile && hideDefaultGames(50);
        // !is_mobile && hideDefaultGames(1500);
      }

      insertCustomSidebarLink();
      injectProvidersMarquee();

      is_mobile && mobileBoxes();

      insertCustomMiniGamesSlider();
      setTimeout(initCustomMiniGamesSlider, 500);

      hideBlogSection();

      customizeSignupModal();
      customizeSigninModal();

      injectExtraText();
      autoplayMiniSlider();

      if ($(".form__btn span").text().trim() === "Send Request") {
        $(".form__btn span").text("Talep Gönder");
      }
    }

    customCSS();

    function customizeSignupModal() {
      const imgUrl =
        "https://betrediofficial.github.io/images/modal-banners/modal_story.webp";

      const observer = new MutationObserver(() => {
        const $modal = $("#signup-modal");
        const $content = $modal.find(".modal__content").first();

        if (
          $modal.is(":visible") &&
          $content.length &&
          $content.find(".modal__sign-img").length === 0
        ) {
          // Inject the image on the left
          const $signImg = $(`
        <div class="modal__sign-img" style="width: 40%;">
          <img src="${imgUrl}" style="width: 100%; height: 100%;" alt="Betredi Banner" />
        </div>
      `);

          // Grab modal__head and modal__form
          const $head = $content.find(".modal__head");
          const $form = $content.find(".modal__form");

          // Wrap them in a right__col div
          const $rightCol = $(
            '<div class="right__col" style="float: right; width: 58%;"></div>'
          );
          $rightCol.append($head).append($form);

          // Clear content and insert both sides
          $content.prepend($signImg);
          $signImg.after($rightCol); // add right_col after image
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }

    function customizeSigninModal() {
      const imgUrl =
        "https://betrediofficial.github.io/images/modal-banners/modal_story.webp";

      const observer = new MutationObserver(() => {
        const $modal = $("#signin-modal");
        const $content = $modal.find(".modal__content").first();

        if (
          $modal.is(":visible") &&
          $content.length &&
          $content.find(".modal__sign-img").length === 0
        ) {
          // Inject the image on the left
          const $signImg = $(`
        <div class="modal__sign-img" style="width: 40%;">
          <img src="${imgUrl}" style="width: 100%; height: 100%;" alt="Betredi Banner" />
        </div>
      `);

          // Grab modal__head and modal__form
          const $head = $content.find(".modal__head");
          const $form = $content.find(".modal__form");

          // Wrap them in a right__col div
          const $rightCol = $(
            '<div class="right__col" style="float: right; width: 58%;"></div>'
          );
          $rightCol.append($head).append($form);

          // Clear content and insert both sides
          $content.prepend($signImg);
          $signImg.after($rightCol); // add right_col after image
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }

    function insertCustomSidebarLink() {
      const observer = new MutationObserver(() => {
        const $sidebarLinks = document.querySelector(
          ".sidebar__big .sidebar__links"
        );

        const exists = document.querySelector(".sidebar__links.custom_side");

        if ($sidebarLinks && !exists) {
          const customDiv = document.createElement("div");
          customDiv.className = "sidebar__links custom_side";
          customDiv.innerHTML = `
        <a class="sidebar__link sidebar__link--casino w-100" href=${
          language === "tr"
            ? "https://betredi109.com/tr/promotions"
            : "https://betredi109.com/en/promotions"
        }
           style="height: 46px; background: url('https://betrediofficial.github.io/images/aside-links/promotions.png') center center / cover no-repeat;">
        </a>
      `;
          $sidebarLinks.parentNode.insertBefore(
            customDiv,
            $sidebarLinks.nextSibling
          );
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }

    function injectProvidersMarquee() {
      const container = document.querySelector("#main-slider > .container");
      if (!container || container.querySelector(".custom--section--2")) return;

      const swiperElement = container.querySelector(".swiper");
      if (!swiperElement) return;

      const section = document.createElement("div");

      section.className = "section custom--section--2 custom--section";
      section.innerHTML = `
<div class="container" style="position: relative; max-width: 100% !important; margin-bottom: 20px !important; padding-left: 0px !important; padding-right: 0px !important; padding-top: 0px !important; overflow: hidden !important;">
  <div class="providers--marquee--bg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, #730812 50%, rgba(0, 0, 0, 0) 100%);"></div>
    <div class="providers--marquee--overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; background: linear-gradient(to right, rgba(0, 0, 0, 0.75) 0%, rgba(106, 6, 15, 0) 50%, rgba(0, 0, 0, 0.75) 100%); z-index: 1;"></div>
<div class="providers--marquee">	
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/pragmaticplay">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/pragmaticplay.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/evolution">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Evolution%20Gaming.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/hacksaw">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/hacksaw.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/egt">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/egt.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/nolimitcity">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/NoLimitCity.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/egt-interactive">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/amusnet.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/playson">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/playson.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/netent">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/netent.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/popiplay">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/popiplay.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/thunderkick">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/thunderkick.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/booming">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/booming.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/redtiger">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Red%20Tiger%20Gaming.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/pragmaticlive">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/pragmatic-live-light.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/bgaming">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/softswiss.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/gameart">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/gameart.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/fantasma">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/fantasma.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/slotmill">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/slotmill.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/1spin4win">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/1spin4win.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/aesexybaccarat">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/AE%20Sexy.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/5men">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/5men.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/novomatic">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/novomatic.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/7mojos">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/7%20mojos.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/alg">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/alg.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/amatic">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/amatic.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/endorphina">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/endorphina.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/pgsoft">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Pocket%20Games%20Soft.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/apollo">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Apollo%20Games.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/asiagaming">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Asia%20Gaming.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/atomic">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/atomic%20slot.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/beefee">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/BeeFee%20Games.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/belatra">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/belatra.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/betsolutions">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Betsolutions.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/bet2tech">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/bet%202%20tech.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/beterlive">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/beterlive.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/betradarvs">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Betradar%20Virtual%20sports.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/betsoft">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/betsoft.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/eagaming">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/ea%20gaming.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/concept">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Concept%20Gaming.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/cq9">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/CQ9.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/ctgaming">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/CT%20Gaming.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/everymatrix">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/everymatrix.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/evoplay">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/evoplay.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/ezugi">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/ezugi.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/fazi">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/fazi.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/fugaso">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/fugaso.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/gamebeat">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/gamebeat.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/gaming7777">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Gaming%207777.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/genii">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Genii.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/givme">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/givme%20games.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/goldenhero">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/golden%20hero.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/habanero">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/habanero.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/hogaming">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/HoGaming.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/hollegames">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/hollegames.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/igrosoft">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Igrosoft.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/irondog">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/irondog.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/jaderabbit">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/jaderabbit.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/jdb">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/JDB.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/kalamba">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/kalamba.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/kiron">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Kiron%20Interactive.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/leander">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Leander.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/leap">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Leap.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/livegames">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Live%20Games.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/lucky">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/lucky.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/luckystreak">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/luckystreak.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/mascotgaming">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/mascot.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/merkurgaming">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/merkur%20gaming.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/mplay">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/m%20play.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/mrslotty">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/mrslotty.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/netgame">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/netgame.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/nucleus">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/nucleus.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/oryx">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/oryx.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/playtech">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Playtech%20slots.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/quickspin">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/quickspin.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/redrake">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Red%20Rake%20Gaming.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/reevo">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/reevo.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/sagaming">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/SA%20Gaming.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/salsa">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Salsa%20technology.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/spinomenal">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/spinomenal.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/spinza">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/spinza.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/spribe">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/spribe.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/swintt">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/swintt.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/tomhornnative">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/tomhorn.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="/providersuelab">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/lightuelab.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/turbogames">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/turbogames.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/tvbet">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/tv%20bet.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/vivogaming">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Vivo%20Gaming.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/wizard">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/wazdan.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/worldmatch">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/World%20Match.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/xprogaming">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/XPro%20Gaming.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/yggdrasil">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/yggdrasil.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/zillion">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/zillion.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/ebetlab">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/originals.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/imagine-live">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/imageinelive.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/jiliasia">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Jiliasia.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/royal-gaming">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Royal%20Gaming.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/tada-gaming">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Tada%20Gaming.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/zeus-play">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Zeus%20Play.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/peter-and-sons">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Peter%20And%20Sons.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi109.com/tr/providers/topspin">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/topspin.svg" alt="">
				          </a>    
			</div>
    </div>
      `;

      swiperElement.insertAdjacentElement("afterend", section);

      // Eğer içinde .marquee-content varsa kopyala
      // const marquee = section.querySelector(".providers--marquee");
      // if (marquee) {
      //   const clone = marquee.cloneNode(true);
      //   marquee.parentElement.appendChild(clone);
      // }
    }

    function injectExtraText() {
      const observer = new MutationObserver(() => {
        const $targetContainer = $(
          "#collapse2-benefits .settings__container .settings__text"
        ).parent();

        if (
          $targetContainer.length &&
          $targetContainer.find(".extra-info-text").length === 0
        ) {
          const $newText = $(`
 
        <p class="extra-info-text" style="margin: 8px 0; color: #e31f25; font-size:18px;">
 
          ${
            language === "tr"
              ? "* Talep edilmediği sürece bu alan zorunlu değildir."
              : "This field is not mandatory unless requested."
          }
 
        </p>
 
      `);

          $targetContainer.prepend($newText);
        }
      });

      observer.observe(document.body, {
        childList: true,

        subtree: true,
      });
    }

    function customCSS() {
      const style = document.createElement("style");

      style.innerHTML = `
  .games-horiz-scroll {
    display: grid !important;
    grid-template-columns: repeat(6, 1fr) !important;
    grid-template-rows: repeat(2, auto) !important;
    gap: 12px !important;
    padding: 10px 0 !important;
  }

  .casino-game-item-content {
    width: 100% !important;
    align-items: center;
  }

  .casino-game-item {
    width: 100% !important;
    aspect-ratio: 1 / 1.5 !important;
    height: 100% !important;
    overflow: hidden !important;
    border-radius: 14px !important;
    background-color: #000 !important;
  }

  .casino-game-item img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    display: block !important;
    transition: 0.3s all ease !important;
  }

  .casino-game-item:hover img {
    transform: scale(1.03) !important;
  }

  .casino-game-item:hover .hovered-effect {
    opacity: 1 !important;
  }

  #main-slider .swiper-wrapper {
  transform: translate3d(0, 0, 0);
  width: 100% !important;
  height: 100% !important;
  box-sizing: content-box !important;
}


      `;
      document.head.appendChild(style);
    }

    //     .main__content {
    //   background: url("https://betrediofficial.github.io/images/bg.jpeg") no-repeat center center !important;
    //   background-size: cover !important;
    // }

    function otherGames() {
      if ($("#digeroyunlari").length > 0) return;

      var newSection = `
<div class="manually-added-home-widgets section" id="digeroyunlari">
  <div class="container otherGames">
    <div class="row">
      <div class="col-12">
        <div class="section__title-wrap"><h2 class="section__title"><svg class="svg-icon"><use href="/static/media/sprite.33143bc5180d8cec7f771b3eedc5187c.svg#top-games"></use></svg>
        EKSTRA OYUNLAR
        </h2><a class="section__view section__view--carousel" href="/casino/group/top-games">Tümünü Görüntüle</a></div>
      </div>
<div class="col-12">
  <div class="otherGamesComponent" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;">
    
<div class="otherGamesComponentLayout extra-game" style="position: relative; cursor: pointer; border: 2px solid #9b000e; overflow: hidden; border-radius: 16px !important;">
  <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.1); z-index: 10; pointer-events: none;"></div>
  <a href="casino/games/spribe-aviator">
    <img
      src="https://betrediofficial.github.io/images/extra-games/aviator_new.webp"
      alt="games"
      class="otherGamesComponentLayoutImg extra-games"
      style="width: 100%; height: 100%; object-fit: cover; display: block;"
    />
  </a>
</div>


<div class="otherGamesComponentLayout extra-game" style="position: relative; cursor: pointer; border: 2px solid #9b000e; overflow: hidden; border-radius: 16px !important;">
  <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.1); z-index: 10; pointer-events: none;"></div>
  <a href="casino/games/pragmaticlive-spaceman">
    <img
      src="https://betrediofficial.github.io/images/extra-games/spaceman_new.webp"
      alt="maconcesi"
      class="otherGamesComponentLayoutImg extra-games"
      style="width: 100%; height: 100%; object-fit: cover; display: block;"
    />
  </a>
</div>


<div class="otherGamesComponentLayout extra-game" style="position: relative; cursor: pointer; border: 2px solid #9b000e; overflow: hidden; border-radius: 16px !important;">
  <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.1); z-index: 10; pointer-events: none;"></div>
  <a href="casino/games/betsolutions-zeppelin?modal=register">
    <img
      src="https://betrediofficial.github.io/images/extra-games/zeppelin_new.webp"
      alt="sporb"
      class="otherGamesComponentLayoutImg"
      style="width: 100%; height: 100%; object-fit: cover; display: block;"
    />
  </a>
</div>


<div class="otherGamesComponentLayout extra-game" style="position: relative; cursor: pointer; border: 2px solid #9b000e; overflow: hidden; border-radius: 16px !important;">
  <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.1); z-index: 10; pointer-events: none;"></div>
  <a href="casino/games/pragmaticlive-big-bass-crash">
    <img
      src="https://betrediofficial.github.io/images/extra-games/big_bass_crash_new.webp"
      alt="slotcasino"
      class="otherGamesComponentLayoutImg"
      style="width: 100%; height: 100%; object-fit: cover; display: block;"
    />
  </a>
</div>


  </div>
</div>

    </div>
  </div>
</div>

        `;

      $(".section--first").eq(1).before(newSection);
    }

    function mobileBoxes() {
      if ($("#mobileboxes").length > 0) return;

      if ($(".custom--section--2").length > 0)
        $(".custom--section--2").after(`
<div class="manually-added-home-widgets container mt-4 mobile-boxes" id="mobileboxes" style="margin-bottom: 10px;">
  <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-1">
    <a href="casino/group/live-lobby" class="col-4">
      <div class="box-icon-item">
        <img
          src="https://betrediofficial.github.io/images/mobile-view/live_casino.png"
          width="48"
          height="48"
          class="d-block mx-auto"
        />
        <span>${language === "tr" ? "Canlı Casino" : "Live Casino"}</span>
      </div>
    </a>
    <a href="casino/group/lobby" class="col-4">
      <div class="box-icon-item">
        <img
          src="https://betrediofficial.github.io/images/mobile-view/sloticon.png"
          width="48"
          height="48"
          class="d-block mx-auto"
        />
        <span>Slot</span>
      </div>
    </a>
    <a href="${depositMoneyLink()}" class="col-4">
      <div class="box-icon-item">
        <img
          src="https://betrediofficial.github.io/images/mobile-view/deposit.png"
            width="48"
            height="48"
            class="d-block mx-auto"
        />
        <span>${language === "tr" ? "Para Yatır" : "Deposit"}</span>
      </div>
    </a>
    <a href="${withdrawMoneyLink()}" class="col-4">
      <div class="box-icon-item">
        <img
          src="https://betrediofficial.github.io/images/mobile-view/withdraw.png"
          width="48"
          height="48"
          class="d-block mx-auto"
        />
        <span>${language === "tr" ? "Para Çek" : "Withdraw"}</span>
      </div>
    </a>
    <a class="col-4" href="promotions?modal=vip&tab=bonus-code">
      <div class="box-icon-item">
        <img
          src="https://betrediofficial.github.io/images/mobile-view/bonus.png"
          width="48"
          height="48"
          class="d-block mx-auto"
        />
        <span>${language === "tr" ? "Bonus Talep" : "Claim Bonus"}</span>
      </div>
    </a>
    <a href="promotions" class="col-4">
      <div class="box-icon-item">
        <img
          src="https://betrediofficial.github.io/images/mobile-view/promotion.png"
          width="48"
          height="48"
          class="d-block mx-auto"
        />
        <span>${language === "tr" ? "Promosyonlar" : "Promotions"}</span>
      </div>
    </a>
    <a onClick="$('.lowbar__btn')[$('.lowbar__btn').length -1].click()" class="col-4">
      <div class="box-icon-item">
        <img
          src="https://betrediofficial.github.io/images/mobile-view/support.png"
          width="48"
          height="48"
          class="d-block mx-auto"
        />
        <span>${language === "tr" ? "Canlı Destek" : "Live Support"}</span>
      </div>
    </a>
    <a href="${
      language === "tr"
        ? "https://betredi109.com/tr/trade"
        : "https://betredi109.com/en/trade"
    }" target="_blank" class="col-4">
      <div class="box-icon-item">
      <svg class="svg-icon" style="margin: 0 auto 4px auto; width: 26px !important; height: 26px !important;"><use href="/static/media/sprite.1cea5f3c17045e69440504bcd887b333.svg#chart" xlink:href="/static/media/sprite.1cea5f3c17045e69440504bcd887b333.svg#chart"></use></svg>
        <span>${language === "tr" ? "Borsa" : "Trade"}</span>
      </div>
    </a>
    <a href="javascript:void(0)" onClick="alert('🔴 Çok yakında sadece Betredi de!')" class="col-4">
      <div class="box-icon-item" style="background: linear-gradient(135deg, #3a0509, #5a0910, #a31624);">
        <img
          src="https://betrediofficial.github.io/images/mobile-view/graph.png"
          width="48"
          height="48"
          class="d-block mx-auto"
        />
        <span>${language === "tr" ? "RTP Sorgu" : "RTP Query"}</span>
      </div>
    </a>
  </div>
</div>
    `);
    }

    function bottomMenuWidget(isMobile) {
      if ($("#bottomMenuWidgedContainer").length > 0) return;
      $(".section:first").append(`
<div class="manually-added-home-widgets bottomMenuWidgedContainer" id="bottomMenuWidgedContainer" style="margin-bottom: 10px;">
  <div class="bottom-menu-widget" style="flex: 1 1 calc(25% - 10px); text-align: center;">
    <a href="casino/category/exclusive">
      <img src="https://betrediofficial.github.io/images/bottom-menu-widget/games.png" alt="games" class="bottomMenuWidgetImage" >
    </a>
  </div>

  ${
    !isMobile
      ? `<div class="bottom-menu-widget" style="flex: 1 1 calc(25% - 10px); text-align: center;">
    <a href="casino/group/live-casino">
      <img src="https://betrediofficial.github.io/images/bottom-menu-widget/live_casino.png" alt="livecasino" class="bottomMenuWidgetImage" >
    </a>
  </div>`
      : ``
  }

  <div class="bottom-menu-widget" style="flex: 1 1 calc(25% - 10px); text-align: center;">
    <a href="sportsbook">
      <img src="https://betrediofficial.github.io/images/bottom-menu-widget/sport.png" alt="sporb" class="bottomMenuWidgetImage" >
    </a>
  </div>
  <div class="bottom-menu-widget" style="flex: 1 1 calc(25% - 10px); text-align: center;">
    <a href="casino/slots">
      <img src="https://betrediofficial.github.io/images/bottom-menu-widget/slot.png" alt="slotcasino" class="bottomMenuWidgetImage" >
    </a>
  </div>
</div>
    `);
    }

    function slotGames() {
      if ($("#slotoyunlari").length > 0) return;

      let title = language === "tr" ? "SLOT CASİNO" : "SLOT CASINO";

      var newSection = `
     <div class="manually-added-home-widgets section" id="slotoyunlari" style="margin-bottom: 14px;">
  <div class="container otherGames">
    <div class="row">
      <div class="col-12">
        <div class="section__title-wrap">
          <h2 class="section__title" style="font-size: 30px; font-family: 'Rajdhani-SemiBold', serif;">
            ${title}
          </h2>
        </div>
      </div>
      <div class="col-12">
        <div class="hm-row-bc has-game has-slider section__carousel" style="grid-template-columns: 3fr 12fr;">
          <div class="pb-component-wrapper">
            <div class="slider-bc">
                <div class="carousel" style="height: 100% !important;">
                  <div class="carousel-viewport" style="height: 100% !important;">
                    <div class="carousel-container" style="transform: translate3d(0%, 0px, 0px); height: 100% !important;">
                      <div class="carousel-slide active-slide" style="width: 100%; height: 100%;">
                        <div class="sdr-item-holder-bc">
                          <a href="casino/slots" class"sdr-item-bc" href="#">
                            <img src="https://betrediofficial.github.io/images/slot-casino-banner/slot_casino.webp" loading="lazy" class="sdr-image-bc">
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
            <div class="pb-component-wrapper">
              <div class="games-content">
                <div class="games-horiz">
                  <div class="games-horiz-scroll" style="grid-template-rows: auto auto;">
                    <div class="casino-game-item-content">
                      <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                        <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                        <a href="casino/games/pragmaticplay-starlight-princess-1000" class="">
                          <img src="https://betrediofficial.github.io/images/casino-games-new/starlight_princess_1000.png" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                    <div class="casino-game-item-content">
                      <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                        <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                        <a href="casino/games/pragmaticplay-sweet-bonanza-1000" class="">
                          <img src="https://betrediofficial.github.io/images/casino-games-new/sweet_bonanza_1000.png" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                    <div class="casino-game-item-content">
                      <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                        <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                        <a href="casino/games/pragmaticplay-wisdom-of-athena" class="">
                          <img src="https://betrediofficial.github.io/images/casino-games-new/wisdom_of_athena.png" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                    <div class="casino-game-item-content">
                      <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                        <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                        <a href="casino/games/pragmaticplay-big-bass-secrets-of-the-golden-lake" class="">
                          <img src="https://betrediofficial.github.io/images/casino-games-new/big_bass_christmas_bash.png" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                    <div class="casino-game-item-content">
                      <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                        <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                        <a href="casino/games/hacksaw-wanted-dead-or-a-wild" class="">
                          <img src="https://betrediofficial.github.io/images/casino-games-new/wanted_dead_or_a_wild.png" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                    <div class="casino-game-item-content">
                      <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                        <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                        <a href="casino/games/pragmaticplay-big-bass-secrets-of-the-golden-lake" class="">
                          <img src="https://betrediofficial.github.io/images/casino-games-new/big_bass_secrets_of_the_golden_lake.png" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                    <div class="casino-game-item-content">
                      <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;"> 
                        <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                        <a href="casino/games/egt-interactive-shining-crown" class="">
                          <img src="https://betrediofficial.github.io/images/casino-games-new/shining_crown.png" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                    <div class="casino-game-item-content">
                      <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                        <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                        <a href="casino/games/egt-flaming-hot" class="">
                          <img src="https://betrediofficial.github.io/images/casino-games-new/flaming_hot.png" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                    <div class="casino-game-item-content">
                      <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                        <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                        <a href="casino/games/pragmaticplay-gates-of-olympus" class="">
                          <img src="https://betrediofficial.github.io/images/casino-games-new/gates_of_olympus.png" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                    <div class="casino-game-item-content">
                      <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                        <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                        <a href="casino/games/pragmaticplay-wild-west-gold" class="">
                          <img src="https://betrediofficial.github.io/images/casino-games-new/wild_west_gold.png" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                    <div class="casino-game-item-content">
                      <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                        <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                        <a href="casino/games/pragmaticplay-hand-of-midas-2" class="">
                          <img src="https://betrediofficial.github.io/images/casino-games-new/hand_of_midas_2.png" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                    <div class="casino-game-item-content">
                      <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                        <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                        <a href="casino/games/pragmaticplay-ripe-rewards" class="">
                          <img src="https://betrediofficial.github.io/images/casino-games-new/ripe_rewards.png" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>
`;

      $(".section--first").eq(0).before(newSection);
      const removed = $(".section--first").eq(0);
      if (removed.length) removed.hide();
    }

    function tgPromo() {
      if ($("#tgpromo").length > 0) return;

      var newSection = `
<div class="manually-added-home-widgets section" id="tgpromo" style="margin-bottom: 14px; margin-top: 14px;">
  <div class="container otherGames">
    <a href="https://t.me/betredi" target="_blank">
      <img src="https://betrediofficial.github.io/images/tg-promo/tg_promo_new.webp" alt="Telegram Promo" style="display: block; width: 100%; margin-bottom: 10px;" />
    </a>
    <a href=${
      language === "tr"
        ? "https://betredi109.com/tr/promotion/100-freespin-deneme-bonusu-trrf"
        : "https://betredi109.com/en/promotion/100-freespin-deneme-bonusu-trrf"
    }>
    <img src="https://betrediofficial.github.io/images/tg-promo/reditg.gif"
         alt="Telegram Promo GIF"
         style="display: block; width: 100%; margin-bottom: 10px; border: 2px solid #9b000e; border-radius: 10px; max-width: 100% !important;" />
    </a>
    <img src="https://betrediofficial.github.io/images/tg-promo/tg_promo_desc.webp" alt="Kripto Bilgilendirme" style="display: block; width: 100%;" />
  </div>
</div>

`;

      if ($("#slotoyunlari").length > 0) $("#slotoyunlari").after(newSection);
      else $("#bottomMenuWidgedContainer").eq(0).after(newSection);
    }

    function casinoGames() {
      if ($("#casinooyunlari").length > 0) return;

      let title = language === "tr" ? "CANLI CASİNO" : "LIVE CASINO";

      var newSection = `
<div class="manually-added-home-widgets section" id="casinooyunlari" style="margin-bottom: 10px;">
  <div class="container otherGames">
    <div class="row">
      <div class="col-12">
        <div class="section__title-wrap">
          <h2 class="section__title" style="font-size: 30px; font-family: 'Rajdhani-SemiBold', serif; margin-bottom: 10px;">
            ${title}
          </h2>
        </div>
      </div>
      <div class="col-12">
        <div class="hm-row-bc has-game has-slider" style="display: grid; grid-template-columns: 3fr 12fr;">
          <div class="pb-component-wrapper">
            <div class="slider-bc">
              <div class="carousel" style="height: 100% !important;">
                <div class="carousel-viewport" style="height: 100% !important;">
                  <div class="carousel-container" style="transform: translate3d(0%, 0px, 0px); height: 100% !important;">
                    <div class="carousel-slide active-slide" style="width: 100%; height: 100%; !important">
                      <div class="sdr-item-holder-bc">
                        <a href="casino/group/live-casino" class="sdr-item-bc">
                          <img src="https://betrediofficial.github.io/images/live-casino-banner/live_casino.webp" loading="lazy" class="sdr-image-bc">
                        </a>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </div>
          <div class="pb-component-wrapper">
            <div class="games-content">
              <div class="games-horiz">
                <div class="games-horiz-scroll">
                  
                  <div class="casino-game-item-content position-relative" style="overflow: hidden !important;">
                    <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                      <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                      <a href="casino/games/pragmaticlive-blackjack-3">
                        <img src="https://betrediofficial.github.io/images/live-casino-new/black_jack_3.png" class="casino-game-image-bc img-fluid">
                      </a>
                    </div>
                  </div>
                  
                  <div class="casino-game-item-content position-relative" style="overflow: hidden !important;">
                    <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                      <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                      <a href="casino/games/pragmaticlive-speed-blackjack-1">
                        <img src="https://betrediofficial.github.io/images/live-casino-new/speed_blackjack_1.png" class="casino-game-image-bc img-fluid">
                      </a>
                    </div>
                  </div>

                  <div class="casino-game-item-content position-relative" style="overflow: hidden !important;">
                    <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                      <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                      <a href="casino/games/pragmaticlive-mega-roulette">
                        <img src="https://betrediofficial.github.io/images/live-casino-new/mega_roulette.png" class="casino-game-image-bc img-fluid">
                      </a>
                    </div>
                  </div>

                  <div class="casino-game-item-content position-relative" style="overflow: hidden !important;">
                    <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                      <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                      <a href="casino/games/pragmaticlive-baccarat-lobby">
                        <img src="https://betrediofficial.github.io/images/live-casino-new/baccarat_lobby.png" class="casino-game-image-bc img-fluid">
                      </a>
                    </div>
                  </div>

                  <div class="casino-game-item-content position-relative" style="overflow: hidden !important;">
                    <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                      <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                      <a href="casino/games/evolution-blackjack-vip-20">
                        <img src="https://betrediofficial.github.io/images/live-casino-new/blackjack.png" class="casino-game-image-bc img-fluid">
                      </a>
                    </div>
                  </div>

                  <div class="casino-game-item-content position-relative" style="overflow: hidden !important;">
                    <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                      <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                      <a href="casino/games/evolution-auto-lightning-roulette">
                        <img src="https://betrediofficial.github.io/images/live-casino-new/lightning_roulette.png" class="casino-game-image-bc img-fluid">
                      </a>
                    </div>
                  </div>

                  <div class="casino-game-item-content position-relative" style="overflow: hidden !important;">
                    <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                      <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                      <a href="casino/games/pragmaticlive-roulette-lobby">
                        <img src="https://betrediofficial.github.io/images/live-casino-new/roulette_lobby.png" class="casino-game-image-bc img-fluid">
                      </a>
                    </div>
                  </div>

                  <div class="casino-game-item-content position-relative" style="overflow: hidden !important;">
                    <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                      <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                      <a href="casino/games/evolution-texas-holdem-bonus-poker">
                        <img src="https://betrediofficial.github.io/images/live-casino-new/texas_holdem_bonus_poker.png" class="casino-game-image-bc img-fluid">
                      </a>
                    </div>
                  </div>

                  <div class="casino-game-item-content position-relative" style="overflow: hidden !important;">
                    <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                      <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                      <a href="casino/games/evolution-first-person-roulette">
                        <img src="https://betrediofficial.github.io/images/live-casino-new/first_person_roulette.png" class="casino-game-image-bc img-fluid">
                      </a>
                    </div>
                  </div>

                  <div class="casino-game-item-content position-relative" style="overflow: hidden !important;">
                    <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                      <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                      <a href="casino/games/evolution-blackjack-silver-f">
                        <img src="https://betrediofficial.github.io/images/live-casino-new/blackjack_silver.png" class="casino-game-image-bc img-fluid">
                      </a>
                    </div>
                  </div>

                  <div class="casino-game-item-content position-relative" style="overflow: hidden !important;">
                    <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                      <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                      <a href="casino/games/evolution-golden-wealth-baccarat">
                        <img src="https://betrediofficial.github.io/images/live-casino-new/golden_wealth_baccarat.png" class="casino-game-image-bc img-fluid">
                      </a>
                    </div>
                  </div>

                  <div class="casino-game-item-content position-relative" style="overflow: hidden !important;">
                    <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                      <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                      <a href="casino/games/evolution-speed-vip-blackjack-h">
                        <img src="https://betrediofficial.github.io/images/live-casino-new/speed_vi_blackjack.png" class="casino-game-image-bc img-fluid">
                      </a>
                    </div>
                  </div>

                </div> <!-- games-horiz-scroll -->
              </div> <!-- games-horiz -->
            </div> <!-- games-content -->
          </div> <!-- pb-component-wrapper -->
        </div> <!-- hm-row-bc -->
      </div> <!-- col-12 -->
    </div> <!-- row -->
  </div> <!-- container -->
</div> <!-- manually-added-home-widgets -->
`;

      $("#tgpromo").after(newSection);
    }
  } catch (e) {
    alert("hata");
    console.log(e);
  }

  //   function sportsCard() {
  //     if ($("#sportscard").length > 0) return;

  //     var newSection = `
  //       <div class="container manually-added-home-widgets" style="margin-top: 16px !important; margin-bottom: 16px !important;">
  //   <div class="row row-cols-3 row-cols-xl-6 g-4 text-center">
  //     <div class="col">
  //       <div class="sport-card" style="position: relative; border: 2px solid #9B000E; border-top-right-radius: 24px; border-bottom-left-radius: 24px; overflow: hidden; cursor: pointer;">
  //         <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.1); z-index: 10; pointer-events: none;"></div>
  //         <a href="/sportsbook">
  //           <img src="https://betrediofficial.github.io/images/sports/futbol_new.png" alt="Futbol" style="width: 100%; aspect-ratio: 3/4; object-fit: cover;">
  //         </a>
  //       </div>
  //     </div>
  //     <div class="col">
  //       <div class="sport-card" style="position: relative; border: 2px solid #9B000E; border-top-right-radius: 24px; border-bottom-left-radius: 24px; overflow: hidden; cursor: pointer;">
  //         <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.1); z-index: 10; pointer-events: none;"></div>
  //         <a href="/sportsbook">
  //           <img src="https://betrediofficial.github.io/images/sports/basketbol_new.png" alt="Basketbol" style="width: 100%; aspect-ratio: 3/4; object-fit: cover;">
  //         </a>
  //       </div>
  //     </div>
  //     <div class="col">
  //       <div class="sport-card" style="position: relative; border: 2px solid #9B000E; border-top-right-radius: 24px; border-bottom-left-radius: 24px; overflow: hidden; cursor: pointer;">
  //         <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.1); z-index: 10; pointer-events: none;"></div>
  //         <a href="/sportsbook">
  //           <img src="https://betrediofficial.github.io/images/sports/voleybol_new.png" alt="Voleybol" style="width: 100%; aspect-ratio: 3/4; object-fit: cover;">
  //         </a>
  //       </div>
  //     </div>
  //     <div class="col">
  //       <div class="sport-card" style="position: relative; border: 2px solid #9B000E; border-top-right-radius: 24px; border-bottom-left-radius: 24px; overflow: hidden; cursor: pointer;">
  //         <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.1); z-index: 10; pointer-events: none;"></div>
  //         <a href="/sportsbook">
  //           <img src="https://betrediofficial.github.io/images/sports/mma_new.png" alt="MMA" style="width: 100%; aspect-ratio: 3/4; object-fit: cover;">
  //         </a>
  //       </div>
  //     </div>
  //     <div class="col">
  //       <div class="sport-card" style="position: relative; border: 2px solid #9B000E; border-top-right-radius: 24px; border-bottom-left-radius: 24px; overflow: hidden; cursor: pointer;">
  //         <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.1); z-index: 10; pointer-events: none;"></div>
  //         <a href="/sportsbook">
  //           <img src="https://betrediofficial.github.io/images/sports/tennis_new.png" alt="Tenis" style="width: 100%; aspect-ratio: 3/4; object-fit: cover;">
  //         </a>
  //       </div>
  //     </div>
  //     <div class="col">
  //       <div class="sport-card" style="position: relative; border: 2px solid #9B000E; border-top-right-radius: 24px; border-bottom-left-radius: 24px; overflow: hidden; cursor: pointer;">
  //         <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.1); z-index: 10; pointer-events: none;"></div>
  //         <a href="/sportsbook">
  //           <img src="https://betrediofficial.github.io/images/sports/cycling_new.png" alt="Cycling" style="width: 100%; aspect-ratio: 3/4; object-fit: cover;">
  //         </a>
  //       </div>
  //     </div>
  //   </div>
  // </div>

  // `;

  //     // if ($("#casinooyunlari").length > 0)
  //     $("#casinooyunlari").after(newSection);
  //     // else $("#tgpromo").eq(0).after(newSection);
  //   }

  function sportsCard() {
    if ($("#sportscard").length > 0) return;

    var newSection = `
      <div class="container manually-added-home-widgets" style="margin-top: 16px !important; margin-bottom: 16px !important;">
  <div class="row row-cols-3 row-cols-xl-6 g-4 text-center">
    <div class="col">
      <div class="sport-card" style="position: relative; border: 2px solid #9B000E; border-top-right-radius: 24px; border-bottom-left-radius: 24px; overflow: hidden; cursor: pointer;">
        <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.1); z-index: 10; pointer-events: none;"></div>
        <a href="/sportsbook">
          <img src="https://betrediofficial.github.io/images/sports/futbol_new.png" alt="Futbol" style="width: 100%; aspect-ratio: 3/4; object-fit: cover;">
        </a>
      </div>
    </div>
    <div class="col">
      <div class="sport-card" style="position: relative; border: 2px solid #9B000E; border-top-right-radius: 24px; border-bottom-left-radius: 24px; overflow: hidden; cursor: pointer;">
        <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.1); z-index: 10; pointer-events: none;"></div>
        <a href="/sportsbook">
          <img src="https://betrediofficial.github.io/images/sports/basketbol_new.png" alt="Basketbol" style="width: 100%; aspect-ratio: 3/4; object-fit: cover;">
        </a>
      </div>
    </div>
    <div class="col">
      <div class="sport-card" style="position: relative; border: 2px solid #9B000E; border-top-right-radius: 24px; border-bottom-left-radius: 24px; overflow: hidden; cursor: pointer;">
        <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.1); z-index: 10; pointer-events: none;"></div>
        <a href="/sportsbook">
          <img src="https://betrediofficial.github.io/images/sports/voleybol_new.png" alt="Voleybol" style="width: 100%; aspect-ratio: 3/4; object-fit: cover;">
        </a>
      </div>
    </div>
    <div class="col">
      <div class="sport-card" style="position: relative; border: 2px solid #9B000E; border-top-right-radius: 24px; border-bottom-left-radius: 24px; overflow: hidden; cursor: pointer;">
        <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.1); z-index: 10; pointer-events: none;"></div>
        <a href="/sportsbook">
          <img src="https://betrediofficial.github.io/images/sports/mma_new.png" alt="MMA" style="width: 100%; aspect-ratio: 3/4; object-fit: cover;">
        </a>
      </div>
    </div>
    <div class="col">
      <div class="sport-card" style="position: relative; border: 2px solid #9B000E; border-top-right-radius: 24px; border-bottom-left-radius: 24px; overflow: hidden; cursor: pointer;">
        <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.1); z-index: 10; pointer-events: none;"></div>
        <a href="/sportsbook">
          <img src="https://betrediofficial.github.io/images/sports/tennis_new.png" alt="Tenis" style="width: 100%; aspect-ratio: 3/4; object-fit: cover;">
        </a>
      </div>
    </div>
    <div class="col">
      <div class="sport-card" style="position: relative; border: 2px solid #9B000E; border-top-right-radius: 24px; border-bottom-left-radius: 24px; overflow: hidden; cursor: pointer;">
        <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.1); z-index: 10; pointer-events: none;"></div>
        <a href="/sportsbook">
          <img src="https://betrediofficial.github.io/images/sports/cycling_new.png" alt="Cycling" style="width: 100%; aspect-ratio: 3/4; object-fit: cover;">
        </a>
      </div>
    </div>
  </div>
</div>

`;

    // if ($("#casinooyunlari").length > 0)
    $("#casinooyunlari").after(newSection);
    // else $("#tgpromo").eq(0).after(newSection);
  }

  function hideDefaultGames(ms) {
    let popularGames = language === "tr" ? "Popüler Oyunlar" : "Popular Games";
    let liveCasino = language === "tr" ? "Canlı Casino" : "Live Casino";

    setTimeout(() => {
      if ($(`h2:contains("${popularGames}")`).length === 0) {
        $(".section").eq(7).hide();
        $(".section").eq(8).hide();
      }
    }, ms - 100);

    setTimeout(() => {
      $(`div:contains('${popularGames}')`).eq(8).hide();
      $(`div:contains('${liveCasino}')`).eq(7).hide();
    }, ms);
  }

  function headerButtons(isHomePage) {
    if ($(".manual-buttons").length === 0) {
      $(".header__actions").prepend(`
<span class="manual-buttons" id="web-header-buttons">
<div class="buttonsContainer">
   <div class="button-section" style="align-items: center;">
      <a href="https://redisportv.com/" target="_blank" class="manual-redi-button" style="border-radius: 4px; border: none; font-size: 12px; height: 32px;">
      <span style="margin-right: 6px;margin-top: -4px; font-size: .4rem;">
      
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.66699 16.6666V7.49998C1.66699 7.05795 1.84259 6.63403 2.15515 6.32147C2.46771 6.00891 2.89163 5.83331 3.33366 5.83331H16.667C17.109 5.83331 17.5329 6.00891 17.8455 6.32147C18.1581 6.63403 18.3337 7.05795 18.3337 7.49998V16.6666C18.3337 17.1087 18.1581 17.5326 17.8455 17.8452C17.5329 18.1577 17.109 18.3333 16.667 18.3333H3.33366C2.89163 18.3333 2.46771 18.1577 2.15515 17.8452C1.84259 17.5326 1.66699 17.1087 1.66699 16.6666Z" stroke="url(#paint0_linear_92_74)" stroke-width="1.5"></path>
<path d="M7.08398 2.08331L10.0007 4.99998L12.9173 2.08331" stroke="url(#paint1_linear_92_74)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<defs>
<linearGradient id="paint0_linear_92_74" x1="10.0003" y1="5.83331" x2="10.0003" y2="18.3333" gradientUnits="userSpaceOnUse">
<stop stop-color="white"></stop>
<stop offset="1" stop-color="#999999"></stop>
</linearGradient>
<linearGradient id="paint1_linear_92_74" x1="10.0007" y1="2.08331" x2="10.0007" y2="4.99998" gradientUnits="userSpaceOnUse">
<stop stop-color="white"></stop>
<stop offset="1" stop-color="#999999"></stop>
</linearGradient>
</defs>
</svg>

      </span>
      REDI LIVE
      </a>
      <a href=${depositMoneyLink()} class="manual-redi-button" style="border-radius: 4px; border: none; font-size: 12px; height: 32px;">
      <span style="margin-right: 6px;margin-top: 0px;">
      
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.375 4.5V1.875C12.375 1.64294 12.2828 1.42038 12.1187 1.25628C11.9546 1.09219 11.7321 1 11.5 1H2.75C2.28587 1 1.84075 1.18437 1.51256 1.51256C1.18437 1.84075 1 2.28587 1 2.75M1 2.75C1 3.21413 1.18437 3.65925 1.51256 3.98744C1.84075 4.31563 2.28587 4.5 2.75 4.5H13.25C13.4821 4.5 13.7046 4.59219 13.8687 4.75628C14.0328 4.92038 14.125 5.14294 14.125 5.375V8M1 2.75V13.25C1 13.7141 1.18437 14.1592 1.51256 14.4874C1.84075 14.8156 2.28587 15 2.75 15H13.25C13.4821 15 13.7046 14.9078 13.8687 14.7437C14.0328 14.5796 14.125 14.3571 14.125 14.125V11.5" stroke="url(#paint0_linear_92_69)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M15 8V11.5H11.5C11.0359 11.5 10.5908 11.3156 10.2626 10.9874C9.93437 10.6592 9.75 10.2141 9.75 9.75C9.75 9.28587 9.93437 8.84075 10.2626 8.51256C10.5908 8.18437 11.0359 8 11.5 8H15Z" stroke="url(#paint1_linear_92_69)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<defs>
<linearGradient id="paint0_linear_92_69" x1="7.5625" y1="1" x2="7.5625" y2="15" gradientUnits="userSpaceOnUse">
<stop stop-color="white"></stop>
<stop offset="1" stop-color="#999999"></stop>
</linearGradient>
<linearGradient id="paint1_linear_92_69" x1="12.375" y1="8" x2="12.375" y2="11.5" gradientUnits="userSpaceOnUse">
<stop stop-color="white"></stop>
<stop offset="1" stop-color="#999999"></stop>
</linearGradient>
</defs>
</svg>

      </span>
      Para Yatır
      </a>
   </div>
   
      <div class="button-section" style="align-items: center; justify-items: center;">
         <a href="https://betredicontact.com/" target="_blank" class="manual-redi-button" style="min-width: 32px !important; max-width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; border-radius: 4px; border: none;">
         <span>
         
<svg width="18" height="18" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.88267 0C8.38493 0 6.94853 0.594976 5.88947 1.65404C4.83041 2.7131 4.23543 4.1495 4.23543 5.64724C4.23543 7.14498 4.83041 8.58138 5.88947 9.64044C6.94853 10.6995 8.38493 11.2945 9.88267 11.2945C11.3804 11.2945 12.8168 10.6995 13.8759 9.64044C14.9349 8.58138 15.5299 7.14498 15.5299 5.64724C15.5299 4.1495 14.9349 2.7131 13.8759 1.65404C12.8168 0.594976 11.3804 0 9.88267 0ZM2.83633 12.7063C2.46446 12.7046 2.09592 12.7764 1.75187 12.9176C1.40783 13.0587 1.09505 13.2664 0.831507 13.5288C0.567962 13.7912 0.358839 14.103 0.216144 14.4464C0.0734504 14.7898 -3.76511e-06 15.158 1.44748e-10 15.5299C1.44748e-10 17.9173 1.17604 19.7173 3.01422 20.8906C4.82416 22.044 7.26376 22.589 9.88267 22.589C10.3872 22.589 10.8841 22.5687 11.3735 22.5283C11.2606 22.0392 11.268 21.5301 11.3948 21.0445C11.5217 20.5589 11.7644 20.1113 12.102 19.7399L12.8715 18.883C13.2216 18.4948 13.6695 18.2077 14.1683 18.0515C14.6672 17.8953 15.1988 17.8758 15.7078 17.9949L16.8161 18.2575C17.3497 17.817 17.673 17.2975 17.8213 16.6749L17.09 15.9605C16.7086 15.5877 16.4444 15.1115 16.3298 14.5906C16.2151 14.0697 16.2551 13.5267 16.4448 13.0282L16.5662 12.7063H2.83633ZM17.7662 13.528L18.1658 12.4691C18.53 11.5077 19.6651 11.0333 20.6223 11.4413L21.1701 11.6757C21.8379 11.9609 22.3899 12.4776 22.5071 13.1722C23.1523 17.0194 19.8133 22.4916 15.9704 23.8878C15.2758 24.1391 14.5261 23.9443 13.9303 23.5405L13.4418 23.2087C13.2413 23.0737 13.0724 22.8967 12.9469 22.69C12.8214 22.4833 12.7422 22.2519 12.7149 22.0116C12.6875 21.7714 12.7125 21.528 12.7883 21.2984C12.8641 21.0688 12.9888 20.8584 13.1538 20.6816L13.9233 19.8246C14.104 19.6256 14.3346 19.4784 14.5912 19.3982C14.8478 19.3181 15.1212 19.3079 15.3831 19.3686L17.1126 19.7781C18.4839 18.9216 19.219 17.7168 19.3178 16.1638L18.0782 14.9511C17.8931 14.7701 17.7649 14.539 17.7095 14.2862C17.654 14.0333 17.6738 13.7698 17.7662 13.528Z" fill="url(#paint0_linear_92_66)"></path>
<defs>
<linearGradient id="paint0_linear_92_66" x1="11.2937" y1="0" x2="11.2937" y2="24" gradientUnits="userSpaceOnUse">
<stop stop-color="white"></stop>
<stop offset="1" stop-color="#999999"></stop>
</linearGradient>
</defs>
</svg>

         </span>
         </a>
      </div>
      <div class="button-section" style="align-items: center;">
         <a href="https://x.com/betrediofficial" target="_blank" class="manual-redi-button" style="min-width: 32px !important; max-width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; border-radius: 4px; border: none;">
         <span>
         
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_92_60" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
<path d="M0 0H24V24H0V0Z" fill="white"></path>
</mask>
<g mask="url(#mask0_92_60)">
<path d="M18.9 1.125H22.5806L14.5406 10.3376L24 22.8759H16.5943L10.7897 15.273L4.15543 22.8759H0.471429L9.07029 13.0187L0 1.12671H7.59429L12.8331 8.07471L18.9 1.125ZM17.6057 20.6679H19.6457L6.48 3.21814H4.29257L17.6057 20.6679Z" fill="url(#paint0_linear_92_60)"></path>
</g>
<defs>
<linearGradient id="paint0_linear_92_60" x1="12" y1="1.125" x2="12" y2="22.8759" gradientUnits="userSpaceOnUse">
<stop stop-color="white"></stop>
<stop offset="1" stop-color="#999999"></stop>
</linearGradient>
</defs>
</svg>

         </span>
         </a>
         <a href="https://t.me/betredi" target="_blank" class="manual-redi-button" style="min-width: 32px !important; max-width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; border-radius: 4px; border: none;">
         <span>
         
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM17.568 8.16C17.388 10.056 16.608 14.664 16.212 16.788C16.044 17.688 15.708 17.988 15.396 18.024C14.7 18.084 14.172 17.568 13.5 17.124C12.444 16.428 11.844 15.996 10.824 15.324C9.636 14.544 10.404 14.112 11.088 13.416C11.268 13.236 14.34 10.44 14.4 10.188C14.4083 10.1498 14.4072 10.1102 14.3968 10.0726C14.3863 10.0349 14.3668 10.0004 14.34 9.972C14.268 9.912 14.172 9.936 14.088 9.948C13.98 9.972 12.3 11.088 9.024 13.296C8.544 13.62 8.112 13.788 7.728 13.776C7.296 13.764 6.48 13.536 5.868 13.332C5.112 13.092 4.524 12.96 4.572 12.54C4.596 12.324 4.896 12.108 5.46 11.88C8.964 10.356 11.292 9.348 12.456 8.868C15.792 7.476 16.476 7.236 16.932 7.236C17.028 7.236 17.256 7.26 17.4 7.38C17.52 7.476 17.556 7.608 17.568 7.704C17.556 7.776 17.58 7.992 17.568 8.16Z" fill="url(#paint0_linear_92_58)"></path>
<defs>
<linearGradient id="paint0_linear_92_58" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
<stop stop-color="white"></stop>
<stop offset="1" stop-color="#999999"></stop>
</linearGradient>
</defs>
</svg>

         </span>
         </a>
         <a href="https://wa.me/37254588167" target="_blank" class="manual-redi-button" style="min-width: 32px !important; max-width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; border-radius: 4px; border: none;">
         <span>
         
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.0498 4.90999C18.1329 3.9841 17.0408 3.24996 15.8373 2.75036C14.6338 2.25075 13.3429 1.99568 12.0398 1.99999C6.5798 1.99999 2.1298 6.44999 2.1298 11.91C2.1298 13.66 2.5898 15.36 3.4498 16.86L2.0498 22L7.2998 20.62C8.7498 21.41 10.3798 21.83 12.0398 21.83C17.4998 21.83 21.9498 17.38 21.9498 11.92C21.9498 9.26999 20.9198 6.77999 19.0498 4.90999ZM12.0398 20.15C10.5598 20.15 9.1098 19.75 7.8398 19L7.5398 18.82L4.4198 19.64L5.2498 16.6L5.0498 16.29C4.22735 14.9771 3.79073 13.4593 3.7898 11.91C3.7898 7.36999 7.4898 3.66999 12.0298 3.66999C14.2298 3.66999 16.2998 4.52999 17.8498 6.08999C18.6174 6.85386 19.2257 7.76254 19.6394 8.76332C20.0531 9.76411 20.264 10.8371 20.2598 11.92C20.2798 16.46 16.5798 20.15 12.0398 20.15ZM16.5598 13.99C16.3098 13.87 15.0898 13.27 14.8698 13.18C14.6398 13.1 14.4798 13.06 14.3098 13.3C14.1398 13.55 13.6698 14.11 13.5298 14.27C13.3898 14.44 13.2398 14.46 12.9898 14.33C12.7398 14.21 11.9398 13.94 10.9998 13.1C10.2598 12.44 9.7698 11.63 9.6198 11.38C9.4798 11.13 9.5998 11 9.7298 10.87C9.8398 10.76 9.9798 10.58 10.0998 10.44C10.2198 10.3 10.2698 10.19 10.3498 10.03C10.4298 9.85999 10.3898 9.71999 10.3298 9.59999C10.2698 9.47999 9.7698 8.25999 9.5698 7.75999C9.3698 7.27999 9.1598 7.33999 9.0098 7.32999H8.5298C8.3598 7.32999 8.0998 7.38999 7.8698 7.63999C7.6498 7.88999 7.0098 8.48999 7.0098 9.70999C7.0098 10.93 7.89981 12.11 8.0198 12.27C8.1398 12.44 9.7698 14.94 12.2498 16.01C12.8398 16.27 13.2998 16.42 13.6598 16.53C14.2498 16.72 14.7898 16.69 15.2198 16.63C15.6998 16.56 16.6898 16.03 16.8898 15.45C17.0998 14.87 17.0998 14.38 17.0298 14.27C16.9598 14.16 16.8098 14.11 16.5598 13.99Z" fill="url(#paint0_linear_92_55)"></path>
<defs>
<linearGradient id="paint0_linear_92_55" x1="11.9998" y1="1.99994" x2="11.9998" y2="22" gradientUnits="userSpaceOnUse">
<stop stop-color="white"></stop>
<stop offset="1" stop-color="#999999"></stop>
</linearGradient>
</defs>
</svg>

         </span>
         </a>
      </div>
         <div>
       
 <div class="sidebar__lang">
      <a class="sidebar__lang-btn" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="height: 32px;">
      <div class="svg-icon" onclick="window.location='/tr'">
         <img src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/languages/svg/turkey.svg" alt=".">
      </div>
       <div class="svg-icon" onclick="window.location='/en'">
         <img src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/languages/svg/united-kingdom.svg" alt=".">
      </div>
   </a>
</div>
  
       </div>

    </div>
</span>
    `);
    }

    if ($("#mobile-header-buttons").length === 0 && isHomePage) {
      $("header .container").append(`
    <div class="row" id="mobile-header-buttons">

      <div class="col-1">
          <a href="https://redisportv.com/" target="_blank" class="manual-redi-button">
            <span>
            ${SVGS.tvIcon}
            </span>
         </a>
      </div>

        <div class="col-1">
          <a href="https://x.com/betrediofficial"  target="_blank" class="manual-redi-button">
            <span>
            ${SVGS.twitterIcon}
            </span>
         </a>
      </div>


        <div class="col-1">
          <a href="https://t.me/betredi" target="_blank" class="manual-redi-button">
            <span>
            ${SVGS.telegramIcon}
            </span>
         </a>
      </div>

       <div class="col-1">
          <a href="https://wa.me/37254588167" class="manual-redi-button" target="_blank">
            <span>
            ${SVGS.whatsappIcon}
            </span>
         </a>
      </div>

      ${languageSelectMobile()}

    </div>
    `);
    }
  }

  function hideBlogSection() {
    $("li:contains('Blog')").hide();
  }

  function languageSelectWeb() {
    return `
 <div class="sidebar__lang">
      <a class="sidebar__lang-btn" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      <div class="svg-icon" onClick="window.location='/tr'">
         <img src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/languages/svg/turkey.svg" alt=".">
      </div>
       <div class="svg-icon" onClick="window.location='/en'">
         <img src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/languages/svg/united-kingdom.svg" alt=".">
      </div>
   </a>
</div>
  `;
  }

  function languageSelectMobile() {
    return `
 <div class="col-1">
   <div href="" class="manual-redi-button" style="
      width: 79px;
      justify-content: space-between;
      ">
      <div class="svg-icon" onClick="window.location='/tr'" style="
         ">
         <img src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/languages/svg/turkey.svg" alt=".">
      </div>
      <div onClick="window.location='/en'" class="svg-icon">
         <img src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/languages/svg/united-kingdom.svg" alt=".">
      </div>
   </div>
</div>
  `;
  }

  function mobileSignInText() {
    $(".header__signin").html(`
    <h1 style="
    color: #FFF;
    font-size: 16px;
    margin-top: 10px;
">${language === "tr" ? "GİRİŞ" : "LOGIN"}</h1>`);
  }
})();
