(function () {
  var language = window.location.pathname.split("/")[1];

  var isLoggedIn = false;

  const depositMoneyLink = () =>
    !isLoggedIn ? "?modal=login" : "?modal=wallet&tab=deposit";

  const withdrawMoneyLink = () =>
    !isLoggedIn ? "?modal=login" : "?modal=wallet&tab=withdraw";

  const isMobile = () => window.innerWidth < 770;

  const getSlotGames = () => [
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-wisdom-of-athena`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/QHij6XwNJYI8vtYWthfFj6JxMcOru5CdnnnOFICG.avif",
    },
    {
      src: `"https://betredi110.com/${language}/casino/games/pragmaticplay-fruit-party-2`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/Wji6qPSBMnL9SovdpZXAtIY9p4eWCIjiagrmOxYZ.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-starlight-princess-1000`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/q6Nmy9YDyiOCOdVD1ruYF9EfBloh6LOdx5okrBFz.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-big-bass-bonanza`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/ncWysw2TQGFV7JclXSvraBfRuw2IlS3Xc47TaFCt.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/hacksaw-wanted-dead-or-a-wild`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/BBYGett6YWkmehO4EfmconeL4bxPVRgczwsV4f0d.png",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-sweet-bonanza-1000`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/dy3y1exXqAstJkCAgmiNmtCjTOd53fiRR8v5hqeW.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/egt-interactive-shining-crown`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/87k5hgsDuGbjmm3o2tL7bRg1Ubl4twobxXECLlbe.webp",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-book-of-fallen`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/EOt4FUPKzQ47EElaXPjmZCF2FZteqcwIj9tF1v60.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-curse-of-the-werewolf-megaways`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/KFkaXzbe7PTssBQcMbDLUoTB7W1G9USQ9YovzOfr.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-gates-of-olympus`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/iwGuLBdSCaXGLlqSgZyfczCuBNioR9abnbjL4HpW.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-big-bass-christmas-bash`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/dKOrrFhs12ZHg8GrBY4TJKVSxXDelokTwkyQW8nC.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-vampy-party`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/36YYqw8TGOHV342MA6sSM2BxPdJKfhPAspe0o93O.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-big-bass-bonanza-reel-action`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/PCIoP6qtposvrzfNMTLBN9zoWQ1rzEmgaGvQneDy.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-sweet-baklava`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/Gg8tuQof12N6yJoh7HIW12yFi9ZwAwOWPLkurfwN.png",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-fruity-treats`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/EyrQKaGBRiOAVZJvtkORFNPVvq7pqHhNYhNKb1xs.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-good-luck-good-fortune`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/KA9ipmrLDF7EXBwejBB8a24gbCfUjbzmNALIvdAK.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-gravity-bonanza`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/YfDBzgJSTJJVHHlSpZFkbl6ttQEmXydlH80oUKVk.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-5-frozen-charms-megaways`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/uHSkFspqwnxSSzeS3DTODWOpE7As8C2tsyio2uPV.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-medusas-stone`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/60SnWNHpFFIy4KVbRkTvm8VAE7ALYGWPGCIRTt3h.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-heart-of-cleopatra`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/LdRa2mDl3vjyO8m5b4Xrx6QGqUf1SwmTzjvabiNk.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-candy-blitz-bombs`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/0CJLPX7nUsSbrFshKq41DUZP1qHZbk077zXaYGr4.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-wheel-ogold"`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/abxzbjznV7kgMJ430ebqL6rh9ponyFMe1aCjmcPH.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-big-bass-hold-spinner-megaways`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/kxPAoHL6weONYPx2AtyYtkhty6mZOcuuGJLqX21s.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-rise-of-pyramids`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/aUexJt3UvTkzLsTPP2eqB86pONa54Qk0PVUjvzvj.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-sugar-rush`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/MojldHUpQY3EzpzYn6Y9H2C6CfoyZsKXRoyRxZJR.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-fruit-party-2"`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/Wji6qPSBMnL9SovdpZXAtIY9p4eWCIjiagrmOxYZ.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-buffalo-king`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/1tktqskfVA6jIaRb4IKJhOxp8z65oWmt41A4Ked7.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/nolimitcity-san-quentin-xways`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/968crLUtx1i741Ux5UQaB6USoeIX2OSF0DDNSG5a.png",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/hacksaw-chaos-crew`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/cC6QIBFZbSziSnHO4S2Vnd6mbqPFz8cyRxFLnTQt.png",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-the-dog-house-megaways`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/p3gbbDfOQNEMLDZsvvZKLJEr611c946Ioa5zdBsF.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/hacksaw-dork-unit`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/QfMGwjSZRE7gkU29bfnbxRtwc88UY0UiMZ7SOyYX.png",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/nolimitcity-tombstone-rip`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/vi7Wi4ksAo0Q1SWKdWbb2JQN3UD1hCGYTTtHayFm.png",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-revenge-of-loki-megaways`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/c47Mu0Tu8itijzJY51XPjE0YthcsturxPVufmh5w.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-wildies`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/wJyYx8KZs4ijlDeTJHlWm7gaKcn7F4aMwnczIBWC.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-devilicious`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/cUJdSD7vhLuTqZY7azlJ4coXybjZq212TwGB4Cbj.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-big-bass-mission-fishin`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/NtQeNzDe8uyunG15rT5k3H6TKHG6hmTAkqJpwRM9.jpg",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-sweet-kingdom`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/QZJ0NUEGPoPFfo1lXpvso1bZiZylGZviPbf8t6q2.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-samurai-code`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/AdACJ1AcOkMWv5eNa83wX9uzmi43kb9izyF5pYVq.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-dynamite-diggin-doug`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/GE7BHRIUYFwZ12jM0VRZ6tmM6hVqRohOWFBbmEK9.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-jackpot-hunter`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/VIDDc0sIiHmxzpp1OgZ340QjiPYp4NlKN1lxZ9ON.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-hot-to-burn-7-deadly-free-spins`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/JT8ZShXESmfjcV0jNcJ1tJx8Fpp09gSgg2BhVKoD.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-mustang-gold-megaways`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/EqigmGLZZ6SJRkbMa4vz0JbL4dWPRm9fP8CbTXuV.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-gem-elevator`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/oNcvAofsaKby58E1cX7iQBCHNKr5RD2VPul794EN.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-bow-of-artemis`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/DUbFurGJ9nhhTIxUnxKX8JuqH36i6fuwIuDCTAzC.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-dragon-gold-88`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/32cYtcN32UOxfO4mgWTet4pPvVqIF8izFHNYc5OF.avif",
    },
  ];

  const getCasinoGames = () => [
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticlive-mega-baccarat`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/j6BmKQh05ST54KJi6CHSsZuPHgouq2W7lXwfhP0s.png",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticlive-one-blackjack-1`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/zUViumeb5yt4j9gWmDGJarAggtNQDFW7EiylYyX2.png",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticlive-vip-blackjack-1`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/K2z2qPXRTurLkLGiaQmKYoGE2TjaYQITU27i792I.png",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/ezugi-turkish-roulette`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/xhXPHQwmLBWEwfoM3oXpnEXgTEg5UrL0Ol0jE9Os.webp",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/netent-european-roulette`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/NVmmiFmGdnKEkJ53CSHE8cEgxFhN0tvL7Qr2ZxkV.png",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticlive-speed-roulette-1`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/GaccTzxzkR6vUZmQy5cfXY9urBx0vSPMaNbI1cUe.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/evolution-infinite-blackjack`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/tJ6juxYMJnYeYgRWfO1y5ebNQFuyDsW3msVMq1dg.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/evolution-first-person-lightning-blackjack`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/guHiFu4IVQfpFErPyNnSSj8BGiLFXo9VvqPWwYyX.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/evolution-lightning-roulette`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/MEU1Af6cv9uA9rOMgVNNOrCQrXczRyOhEvOPiasu.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticlive-mega-roulette`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/Jhn5GMOIURAdpCkzA61rfwvFCiaHehgCERMP6hG1.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/evolution-speed-roulette`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/Eo7vGS5UB5MfXzTCZ2b8TcOAp3gJQvikBEYuTpym.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/evolution-lightning-roulette`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/MEU1Af6cv9uA9rOMgVNNOrCQrXczRyOhEvOPiasu.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticlive-vip-blackjack-6`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/CrwWXNtFZpgER5I23OPIllCCvRD0RcJCdfj8d3Fn.png",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticlive-blackjackx-4`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/xzxEGDgN0QH6bMnb8hlVYti0KGKepmcKTVNgAMJG.png",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticlive-blackjack-48`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/13MuplOuOnMzNyMH6QBL5oMJQMybsEJ9TYV2I7Wo.png",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticlive-blackjack-1`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/gEXVJdXHWh0RFyILLxgdIvDzAl1yTqfvdJx1yhKB.png",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticlive-blackjack-14`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/onbl82oX2F9PbGCdnpMxxxDXqFz9ri4PGOXQNpl7.png",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticlive-speed-blackjack-1`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/WFOwlaJjuIPtBftfhfwviNnVG5zy7ChF6KqzVSgQ.png",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticlive-speed-blackjack-11`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/V7kLgbdPpg07B3mdrmXyxVeN7u9xUwmDf0EusF52.png",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/evolution-speed-vip-blackjack-h`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/yZEqvwLW41eLZxWP7lYilbAdgDJ28Gvug3zud91y.png",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/evolution-lightning-blackjack`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/MHm9snB8jVy362jQTKeIdwWZ1SejsQdXAL2xGs36.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/evolution-first-person-lightning-blackjack`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/guHiFu4IVQfpFErPyNnSSj8BGiLFXo9VvqPWwYyX.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/evolution-blackjack-a`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/thzcbPcaqN4ymeBBdvqeHjw1AbNXdpimJeXr4yR0.png",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticlive-roulette-lobby`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/xN1rae5cYKXHx5dGpfk5r9Ppg79hZEKFqJJRmUWW.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticlive-vip-roulette`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/tpwzjbLJI5zSqHGYMpVmmS23NIdttU1WMSZawpPA.png",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticlive-roulette-3`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/zuZLZKbnFEnt8CHVeaIzaqU77sh6cDqvDoCqEy5d.png",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticlive-speed-roulette-1`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/GaccTzxzkR6vUZmQy5cfXY9urBx0vSPMaNbI1cUe.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticlive-speed-roulette-1`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/GaccTzxzkR6vUZmQy5cfXY9urBx0vSPMaNbI1cUe.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/ezugi-auto-roulette`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/NUnOdi7Y4bD2z11iUNyofuSHZtZ22rYd4b86kGjO.webp",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/ezugi-prestige-auto-roulette`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/2b5ZMblYfmzlRds5OvZpxmtKxf3sWFaYtNrf3eL1.webp",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/ezugi-speed-auto-roulette`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/pvqnHHn8smqfDv3gRmZY2iAEWfmFxUuX7FgXEqL9.webp",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/evolution-xxxtreme-lightning-roulette`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/h8dPPJH94Skot5DgcKDhos7FbTViYVpk1gVsXwMa.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/ezugi-ultimate-sic-bo`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/b8etXVVWF4QNvj3STJpQPGq5NbhxM89CoyaDxlTZ.webp",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/ezugi-ez-baccarat`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/Dz3wnCrnz4Bebm8MdsCkgxBiDH8XQdGyNKjZZnMc.webp",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/ezugi-knockout-baccarat`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/BNk0tjn1vex5n5jPa6CCGo1ORb2IjDFErBi9WTW9.webp",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/ezugi-super-6-baccarat`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/b3pVimuP7zn7PZymWALJhuVbHzuZddk1EuzhU2j6.webp",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/evolution-baccarat`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/xJXLSNziLz8ALoj6p9v2bJAU1XHKxKJ9DFAQzjH4.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/evolution-bac-bo`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/QoBhQ3K0xXp3NASQEyz0WsxuZu9Oh6mB3IePQkgF.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/evolution-super-sic-bo`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/X7RiXa0yqtu7VUrBqW8CaLsse7EvKIjCarMIkN84.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticlive-mega-sic-bo`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/uKMxSjVnpH8YuXjjVCzWVndjUq8DieHtragVJLom.png",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/evolution-peek-baccarat`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/2GZeeBBDiW174VLMAQaKHi4ox5XkWgArLbCMmF1h.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticlive-baccarat-lobby`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/T0z4GsUCOOU9DXvIczMALs3RYInud4GWTB4KVTq5.png",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/evolution-casino-holdem`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/SkpxY3PwLZCjY6P6nBzMEPSnQbriQskzUkSIMe2n.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/evolution-first-person-lightning-blackjack`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/guHiFu4IVQfpFErPyNnSSj8BGiLFXo9VvqPWwYyX.avif",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticlive-roulette-1`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/FnInlYfZZfd4yUZld05M5y6T6BKHqVvy9AqhpeYO.png",
    },
  ];

  const getRTPGames = () => [
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-wisdom-of-athena`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/QHij6XwNJYI8vtYWthfFj6JxMcOru5CdnnnOFICG.avif",
      name: "Wisdom Of Athena",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-fruit-party-2`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/Wji6qPSBMnL9SovdpZXAtIY9p4eWCIjiagrmOxYZ.avif",
      name: "Fruit Party 2",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-starlight-princess-1000`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/q6Nmy9YDyiOCOdVD1ruYF9EfBloh6LOdx5okrBFz.avif",
      name: "Starlight Princess 1000",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-big-bass-bonanza`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/ncWysw2TQGFV7JclXSvraBfRuw2IlS3Xc47TaFCt.avif",
      name: "Big Bass Bonanza",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/hacksaw-wanted-dead-or-a-wild`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/BBYGett6YWkmehO4EfmconeL4bxPVRgczwsV4f0d.png",
      name: "Dead or Wild",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-sweet-bonanza-1000`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/dy3y1exXqAstJkCAgmiNmtCjTOd53fiRR8v5hqeW.avif",
      name: "Sweet Bonanza 1000",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/egt-interactive-shining-crown`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/87k5hgsDuGbjmm3o2tL7bRg1Ubl4twobxXECLlbe.webp",
      name: "Shining Crown",
      provider: "EGT",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-book-of-fallen`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/EOt4FUPKzQ47EElaXPjmZCF2FZteqcwIj9tF1v60.avif",
      name: "Book of Fallen",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-curse-of-the-werewolf-megaways`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/KFkaXzbe7PTssBQcMbDLUoTB7W1G9USQ9YovzOfr.avif",
      name: "Curse of the Werewolf Megaways",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-gates-of-olympus`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/iwGuLBdSCaXGLlqSgZyfczCuBNioR9abnbjL4HpW.avif",
      name: "Gates of Olympus",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-big-bass-christmas-bash`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/dKOrrFhs12ZHg8GrBY4TJKVSxXDelokTwkyQW8nC.avif",
      name: "Big Bass Christmas Bash",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-vampy-party`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/36YYqw8TGOHV342MA6sSM2BxPdJKfhPAspe0o93O.avif",
      name: "Vampy Party",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-big-bass-bonanza-reel-action`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/PCIoP6qtposvrzfNMTLBN9zoWQ1rzEmgaGvQneDy.avif",
      name: "Big Bass Bonanza Reel Action",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-sweet-baklava`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/Gg8tuQof12N6yJoh7HIW12yFi9ZwAwOWPLkurfwN.png",
      name: "Sweet Baklava",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-fruity-treats`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/EyrQKaGBRiOAVZJvtkORFNPVvq7pqHhNYhNKb1xs.avif",
      name: "Fruit Treats",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-good-luck-good-fortune`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/KA9ipmrLDF7EXBwejBB8a24gbCfUjbzmNALIvdAK.avif",
      name: "Good Luck Good Fortune",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-gravity-bonanza`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/YfDBzgJSTJJVHHlSpZFkbl6ttQEmXydlH80oUKVk.avif",
      name: "Gravity Bonanza",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-5-frozen-charms-megaways`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/uHSkFspqwnxSSzeS3DTODWOpE7As8C2tsyio2uPV.avif",
      name: "5 Frozen Charms Megaways",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-medusas-stone`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/60SnWNHpFFIy4KVbRkTvm8VAE7ALYGWPGCIRTt3h.avif",
      name: "Medusa's Stone",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-heart-of-cleopatra`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/LdRa2mDl3vjyO8m5b4Xrx6QGqUf1SwmTzjvabiNk.avif",
      name: "Heart of Cleopatra",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-candy-blitz-bombs`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/0CJLPX7nUsSbrFshKq41DUZP1qHZbk077zXaYGr4.avif",
      name: "Candy Blitz Boms",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-wheel-ogold`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/abxzbjznV7kgMJ430ebqL6rh9ponyFMe1aCjmcPH.avif",
      name: "Wheel O'Gold",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-big-bass-hold-spinner-megaways`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/kxPAoHL6weONYPx2AtyYtkhty6mZOcuuGJLqX21s.avif",
      name: "Big Bass Hold Spinner Megaways",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-rise-of-pyramids`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/aUexJt3UvTkzLsTPP2eqB86pONa54Qk0PVUjvzvj.avif",
      name: "Rise of Pyramids",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-sugar-rush`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/MojldHUpQY3EzpzYn6Y9H2C6CfoyZsKXRoyRxZJR.avif",
      name: "Sugar Rush",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-fruit-party-2`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/Wji6qPSBMnL9SovdpZXAtIY9p4eWCIjiagrmOxYZ.avif",
      name: "Fruit Party 2",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-buffalo-king`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/1tktqskfVA6jIaRb4IKJhOxp8z65oWmt41A4Ked7.avif",
      name: "Buffalo King",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/nolimitcity-san-quentin-xways`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/968crLUtx1i741Ux5UQaB6USoeIX2OSF0DDNSG5a.png",
      name: "San Quentin xWays",
      provider: "Nolimitcity",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/hacksaw-chaos-crew`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/cC6QIBFZbSziSnHO4S2Vnd6mbqPFz8cyRxFLnTQt.png",
      name: "Chaos Crew",
      provider: "Hacksaw Gaming",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-the-dog-house-megaways`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/p3gbbDfOQNEMLDZsvvZKLJEr611c946Ioa5zdBsF.avif",
      name: "The Dog House Megaways",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/hacksaw-dork-unit`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/QfMGwjSZRE7gkU29bfnbxRtwc88UY0UiMZ7SOyYX.png",
      name: "Dork Unit",
      provider: "Hacksaw Gaming",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/nolimitcity-tombstone-rip`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/vi7Wi4ksAo0Q1SWKdWbb2JQN3UD1hCGYTTtHayFm.png",
      name: "Tombstone RIP",
      provider: "Nolimitcity",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-revenge-of-loki-megaways`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/c47Mu0Tu8itijzJY51XPjE0YthcsturxPVufmh5w.avif",
      name: "Revenge of Loki Megaways",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-wildies`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/wJyYx8KZs4ijlDeTJHlWm7gaKcn7F4aMwnczIBWC.avif",
      name: "Wildies",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-devilicious`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/cUJdSD7vhLuTqZY7azlJ4coXybjZq212TwGB4Cbj.avif",
      name: "Devilicious",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-big-bass-mission-fishin`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/NtQeNzDe8uyunG15rT5k3H6TKHG6hmTAkqJpwRM9.jpg",
      name: "Big Bass Mission Fishin",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-sweet-kingdom`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/QZJ0NUEGPoPFfo1lXpvso1bZiZylGZviPbf8t6q2.avif",
      name: "Sweet Kingdom",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-samurai-code`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/AdACJ1AcOkMWv5eNa83wX9uzmi43kb9izyF5pYVq.avif",
      name: "Samurai Code",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-dynamite-diggin-doug`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/GE7BHRIUYFwZ12jM0VRZ6tmM6hVqRohOWFBbmEK9.avif",
      name: "Dynamite Diggin Doug",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-jackpot-hunter`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/VIDDc0sIiHmxzpp1OgZ340QjiPYp4NlKN1lxZ9ON.avif",
      name: "Jacpot Hunter",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-hot-to-burn-7-deadly-free-spins`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/JT8ZShXESmfjcV0jNcJ1tJx8Fpp09gSgg2BhVKoD.avif",
      name: "Hot to Burn 7 Deadly Free Spins",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-mustang-gold-megaways`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/EqigmGLZZ6SJRkbMa4vz0JbL4dWPRm9fP8CbTXuV.avif",
      name: "Mustang Gold Megaways",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-gem-elevator`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/oNcvAofsaKby58E1cX7iQBCHNKr5RD2VPul794EN.avif",
      name: "Gem Elevator",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-bow-of-artemis`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/DUbFurGJ9nhhTIxUnxKX8JuqH36i6fuwIuDCTAzC.avif",
      name: "Bow of Artemis",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/pragmaticplay-dragon-gold-88`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/32cYtcN32UOxfO4mgWTet4pPvVqIF8izFHNYc5OF.avif",
      name: "Dragon Gold 88",
      provider: "PragmaticPlay",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/netent-space-wars`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/6MStcLvijjhuXuP7VN0HiFFMELI525e14eEY41IC.png",
      name: "Space Wars",
      provider: "Netent",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/netent-dead-or-alive-2`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/rZH47pzEDr4OzB3mi4N2cyW7VbowpjKI9ngg0r2V.png",
      name: "Dead Or Alive 2",
      provider: "Netent",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/hacksaw-chaos-crew-ii`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/WBLMhsYevzT8MI1nMCygt8ecrlaAgayFgLZ6TeKh.png",
      name: "Chaos Crew 2",
      provider: "Hacksaw Gaming",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/hacksaw-temple-of-torment`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/XypCtoZrLGpXzg4JGRY7n5Ctc7wM1yICxmnOekT9.png",
      name: "Temple of Torment",
      provider: "Hacksaw Gaming",
    },
    {
      src: `https://betredi110.com/${language}/casino/games/hacksaw-mayan-stackways`,
      image:
        "https://vendor-provider.fra1.digitaloceanspaces.com/ebetlab/gXmqkthvbB1521K/games/ouMNJ0ll0ji34AD78kTB09rCXhab07VdHcTi5tcW.png",
      name: "Mayan Stackways",
      provider: "Hacksaw Gaming",
    },
  ];

  let slot_games = getSlotGames();
  let casino_games = getCasinoGames();
  let rtpsorgu_games = getRTPGames();

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

    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    function gameChooserLogic() {
      let prevSlotCount = -1;
      let prevCasinoCount = -1;

      const shuffledSlotGames = shuffleArray([...slot_games]);
      const suffledCasinoGames = shuffleArray([...casino_games]);

      shuffledSlotGames.forEach((slot_game) => {
        const img = `
    <a class="slot-game-item--chooser" href="${slot_game.src}" target="_blank">
        <img class="slot-game-chooser-item" src="${slot_game.image}" alt="slot game" style="width: 100%; height: 100%; object-fit: cover; display: block;">
    </a>
    `;

        $("#slot-game-chooser-section .game-chooser-hovered-effect").after(img);
      });

      suffledCasinoGames.forEach((casino_game) => {
        const img = `
    <a class="casino-game-item--chooser" disabled="true" href="${casino_game.src}" target="_blank">
        <img class="casino-game-chooser-item" src="${casino_game.image}" alt="casino game" style="width: 100%; height: 100%; object-fit: cover; display: block;">
    </a>
    `;

        $("#casino-game-chooser-section .game-chooser-hovered-effect").after(
          img
        );
      });

      $("#spin-game-btn").click(function () {
        $(this).prop("disabled", true);
        $(".game-chooser-hovered-effect").css("display", "none");

        // * Prevent navigation when slotting
        $("a.slot-game-item--chooser, a.casino-game-item--chooser").addClass(
          "no-click"
        );

        let slot_count;
        do {
          slot_count = Math.floor(Math.random() * slot_games.length);
        } while (slot_count === prevSlotCount || Math.abs(slot_count - prevSlotCount) < 15);
        prevSlotCount = slot_count;

        let casino_count;
        do {
          casino_count = Math.floor(Math.random() * casino_games.length);
        } while (casino_count === prevCasinoCount || Math.abs(casino_count - prevCasinoCount) < 15);
        prevCasinoCount = casino_count;

        $("#slot-game-chooser-section img.slot-game-chooser-item").css(
          "transform",
          `translateY(-${slot_count * 100}%)`
        );

        $("#casino-game-chooser-section img.casino-game-chooser-item").css(
          "transform",
          `translateY(-${casino_count * 100}%)`
        );

        setTimeout(() => {
          $(this).prop("disabled", false);
          $(".game-chooser-hovered-effect").css("display", "flex");

          $(
            "a.slot-game-item--chooser, a.casino-game-item--chooser"
          ).removeClass("no-click");
        }, 2000);
      });
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
              gameChooserLogic();
              // rtpSorgu();
              // rtpSorguLogic();
            }, 500);

            removeHomePageWidgets();
          });

          gameChooserLogic();
          // rtpSorgu();
          // rtpSorguLogic();

          $(document).on("click", "a.no-click", function (e) {
            e.preventDefault();
          });
        });
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
              <a href="https://betredi110.com/${language}/promotion/15-casino-yatirim-bonusu-tr">
                ${
                  isMobile()
                    ? '<img src="https://betrediofficial.github.io/images/mobile-main-slider/15casino.webp" class="slide-image" />'
                    : '<img src="https://betrediofficial.github.io/images/slider/15Casino.webp" class="slide-image" />'
                }
              </a>
            </div>
            <div class="swiper-slide">
              <a href="https://betredi110.com/${language}/promotion/15-spor-yatirim-bonusu-tr">
                ${
                  isMobile()
                    ? '<img src="https://betrediofficial.github.io/images/mobile-main-slider/15spor.webp" class="slide-image" />'
                    : '<img src="https://betrediofficial.github.io/images/slider/15Spor.webp" class="slide-image" />'
                }
              </a>
            </div>
            <div class="swiper-slide">
              <a href="https://betredi110.com/${language}/promotion/30-casino-discount-tr">
                ${
                  isMobile()
                    ? '<img src="https://betrediofficial.github.io/images/mobile-main-slider/30casino.webp" class="slide-image" />'
                    : '<img src="https://betrediofficial.github.io/images/slider/30Discount.webp" class="slide-image" />'
                }
              </a>
            </div>
            <div class="swiper-slide">
              <a href="https://betredi110.com/${language}/promotion/50-slot-yatirim-bonusu-tr">
                ${
                  isMobile()
                    ? '<img src="https://betrediofficial.github.io/images/mobile-main-slider/50slot.webp" class="slide-image" />'
                    : '<img src="https://betrediofficial.github.io/images/slider/50Slot.webp" class="slide-image" />'
                }
              </a>
            </div>
            <div class="swiper-slide">
              <a href="https://betredi110.com/${language}/promotion/100-freespin-deneme-bonusu-trrf">
                ${
                  isMobile()
                    ? '<img src="https://betrediofficial.github.io/images/mobile-main-slider/100freespin.webp" class="slide-image" />'
                    : '<img src="https://betrediofficial.github.io/images/slider/100Freespin.webp" class="slide-image" />'
                }
              </a>
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
      if ($("#mini-games-wrapper").length > 0)
        return $("#mini-games-wrapper").show();

      var miniGamesSection = `
      <div class="manually-added-home-widgets section" id="mini-games-wrapper" style="margin-top: 16px !important; margin-bottom: 16px !important;">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="section__title">
            <svg class="svg-icon">
              <use href="/static/media/sprite.94622980f40d877c6d27eb5b2474fa5a.svg#mini-games" xlink:href="/static/media/sprite.94622980f40d877c6d27eb5b2474fa5a.svg#mini-games">
              </use>
            </svg>
            Mini Oyunlar
          </h2>
        </div>
        <div class="col-12">
          <div class="swiper swiper-initialized swiper-horizontal myMiniGamesSwiper swiper-backface-hidden">
            <div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);">

              <div class="swiper-slide" data-swiper-slide-index="0" style="width: 339px; margin-right: 12px; background: none !important;">
                <a class="mini-game mini-game--carousel mini-game--no-layer" href="https://betredi110.com/${language}/casino/games/ebetlab-crash-originals" style="background: none !important;">
                  <span class="mini-game__img">
                    <img loading="lazy" src="https://betrediofficial.github.io/images/mini-games-v2/crash.webp" alt="">
                  </span>
                </a>
              </div>
  
              <div class="swiper-slide" data-swiper-slide-index="1" style="width: 339px; margin-right: 12px; background: none !important;">
                <a class="mini-game mini-game--carousel mini-game--no-layer" href="https://betredi110.com/${language}/casino/games/ebetlab-dice-originals" style="background: none !important;">
                  <span class="mini-game__img">
                    <img loading="lazy" src="https://betrediofficial.github.io/images/mini-games-v2/dice.webp" alt="">
                  </span>
                </a>
              </div>
  
              <div class="swiper-slide" data-swiper-slide-index="2" style="width: 339px; margin-right: 12px; background: none !important;">
                <a class="mini-game mini-game--carousel mini-game--no-layer" href="https://betredi110.com/${language}/casino/games/ebetlab-mines-originals" style="background: none !important;">
                  <span class="mini-game__img">
                    <img loading="lazy" src="https://betrediofficial.github.io/images/mini-games-v2/mines.webp" alt="">
                  </span>
                </a>
              </div>
  
              <div class="swiper-slide" data-swiper-slide-index="3" style="width: 339px; margin-right: 12px; background: none !important;">
                <a class="mini-game mini-game--carousel mini-game--no-layer" href="https://betredi110.com/${language}/casino/games/ebetlab-plinko-originals" style="background: none !important;">
                  <span class="mini-game__img">
                    <img loading="lazy" src="https://betrediofficial.github.io/images/mini-games-v2/plinko.webp" alt="">
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
      else $("#popular-games-wrapper").eq(0).after(miniGamesSection);
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

    //     function rtpSorguLogic() {
    //       let filteredGames = null;

    //       function getRandomGames(gamesArray, count) {
    //         const shuffled = gamesArray.sort(() => 0.5 - Math.random());
    //         return shuffled.slice(0, count);
    //       }

    //       function getRandomRTP(oldRTP) {
    //         const newRTP = (Math.random() * (99.95 - 96.0) + 96.0).toFixed(2);

    //         return {
    //           value: newRTP,
    //           color: Number(oldRTP) > Number(newRTP) ? "#f82228" : "#008000",
    //         };
    //       }

    //       function renderGames(games) {
    //         const $wrapper = $("#rtp-sorgu-bottom-sheet #rtp-games-wrapper");

    //         $wrapper.fadeOut(150, function () {
    //           $wrapper.empty();

    //           games.forEach(function (game) {
    //             const gameHTML = `
    // <a href=${game.src} target="_blank" class="text-white" style="
    //   display: flex;
    //   align-items: center;
    //   justify-content: space-between;
    //   gap: 10px;
    //   text-decoration: none;
    //   margin-bottom: 24px;
    // ">
    //   <div style="flex: 0 0 auto;">
    //     <img src="${game.image}" width="42" height="42" style="border-radius: 360px" />
    //   </div>

    //   <div style="flex: 1 1 auto; overflow: hidden;">
    //     <strong style="display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-style: normal !important; margin: 0px !important; padding: 0px !important;">
    //       ${game.name}
    //     </strong>
    //     <small style="color: gray; margin: 0px !important; padding: 0px !important;">${game.provider}</small>
    //   </div>
    //   <div style="flex: 0 0 auto; text-align: right; min-width: 50px;">
    //     <small style="color: ${game.textColor} !important">%${game.rtp}</small>
    //   </div>
    // </a>
    //       `;
    //             $wrapper.append(gameHTML);
    //           });

    //           $wrapper.fadeIn(150);
    //         });
    //       }

    //       const randomGames = getRandomGames(rtpsorgu_games, rtpsorgu_games.length);

    //       randomGames.forEach((game) => {
    //         const rtpData = getRandomRTP();

    //         game.rtp = rtpData.value;
    //         game.prevRtp = game.rtp;
    //         game.textColor = rtpData.color;
    //       });

    //       function startRtpLoop() {
    //         randomGames.forEach((game) => {
    //           game.prevRtp = game.rtp;
    //           const rtpData = getRandomRTP(game.prevRtp);
    //           game.rtp = rtpData.value;
    //           game.textColor = rtpData.color;
    //         });

    //         randomGames.sort((a, b) => parseFloat(b.rtp) - parseFloat(a.rtp));

    //         renderGames(filteredGames || randomGames);

    //         const nextDelay = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;
    //         setTimeout(startRtpLoop, nextDelay);
    //       }

    //       $(document).on("click", "#btn-rtp-sorgu", function () {
    //         $("body").addClass("no-scroll");
    //         $("#rtp-sorgu-overlay").css("display", "flex");

    //         setTimeout(function () {
    //           $("#rtp-sorgu-bottom-sheet").css("transform", `translateY(0%)`);
    //         }, 100);
    //       });

    //       $(document).on("click", "#rtp-sorgu-overlay", function (e) {
    //         if (e.target === this) {
    //           $("body").removeClass("no-scroll");
    //           $("#rtp-sorgu-bottom-sheet").css("transform", `translateY(100%)`);

    //           setTimeout(function () {
    //             $("#rtp-sorgu-overlay").css("display", "none");
    //           }, 100);
    //         }
    //       });

    //       $(document).on("click", "#rtpsorgu-close-btn", function () {
    //         $("body").removeClass("no-scroll");
    //         $("#rtp-sorgu-bottom-sheet").css("transform", `translateY(100%)`);

    //         setTimeout(function () {
    //           $("#rtp-sorgu-overlay").css("display", "none");
    //         }, 100);
    //       });

    //       $("#rtp-game-search").on("keyup", function () {
    //         const searchTerm = $(this).val().toLowerCase().trim();

    //         if (searchTerm === "") filteredGames = null;
    //         else
    //           filteredGames = randomGames.filter((game) =>
    //             game.name.toLowerCase().includes(searchTerm)
    //           );

    //         renderGames(filteredGames || randomGames);
    //       });

    //       startRtpLoop();
    //     }

    function rtpSorguLogic() {
      let filteredGames = null;

      function getRandomGames(gamesArray, count) {
        const arrayCopy = [...gamesArray.map((game) => ({ ...game }))]; // Deep Copy (gerçekten bağımsız)
        for (let i = arrayCopy.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
        }
        return arrayCopy.slice(0, count);
      }

      function getRandomRTP(oldRTP) {
        const newRTP = (Math.random() * (99.95 - 96.0) + 96.0).toFixed(2);

        return {
          value: newRTP,
          color: Number(oldRTP) > Number(newRTP) ? "#f82228" : "#008000",
        };
      }

      function renderGames(games) {
        const $wrapper = $("#rtp-sorgu-bottom-sheet #rtp-games-wrapper");
        $wrapper.empty();

        games.forEach(function (game, index) {
          const gameHTML = `
<a href=${game.src} data-id="${index}" target="_blank" class="text-white" style="
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
  gap: 10px; 
  text-decoration: none; 
  margin-bottom: 24px;
">
  <div style="flex: 0 0 auto;">
    <img src="${game.image}" width="42" height="42" style="border-radius: 360px" />
  </div>

  <div style="flex: 1 1 auto; overflow: hidden;">
    <strong style="display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-style: normal !important; margin: 0px !important; padding: 0px !important;">
      ${game.name}
    </strong>
    <small style="color: gray; margin: 0px !important; padding: 0px !important;">${game.provider}</small>
  </div>
  <div style="flex: 0 0 auto; text-align: right; min-width: 50px;">
    <small class="rtp-value" style="color: ${game.textColor} !important">%${game.rtp}</small>
  </div>
</a>
      `;
          $wrapper.append(gameHTML);
        });
      }

      const randomGames = getRandomGames(rtpsorgu_games, rtpsorgu_games.length);

      randomGames.forEach((game) => {
        const rtpData = getRandomRTP();
        game.rtp = rtpData.value;
        game.prevRtp = game.rtp;
        game.textColor = rtpData.color;
      });

      function startRtpLoop() {
        randomGames.forEach((game, index) => {
          game.prevRtp = game.rtp;
          const rtpData = getRandomRTP(game.prevRtp);
          game.rtp = rtpData.value;
          game.textColor = rtpData.color;

          const $gameElement = $(
            `#rtp-sorgu-bottom-sheet #rtp-games-wrapper a[data-id="${index}"]`
          );

          $gameElement
            .find(".rtp-value")
            .text(`%${game.rtp}`)
            .css("color", game.textColor);
        });

        const nextDelay = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;
        setTimeout(startRtpLoop, nextDelay);
      }

      $(document).on("click", "#btn-rtp-sorgu", function () {
        $("body").addClass("no-scroll");
        $("#rtp-sorgu-overlay").css("display", "flex");

        setTimeout(function () {
          $("#rtp-sorgu-bottom-sheet").css("transform", `translateY(0%)`);
        }, 100);
      });

      $(document).on("click", "#rtp-sorgu-overlay", function (e) {
        if (e.target === this) {
          $("body").removeClass("no-scroll");
          $("#rtp-sorgu-bottom-sheet").css("transform", `translateY(100%)`);

          setTimeout(function () {
            $("#rtp-sorgu-overlay").css("display", "none");
          }, 100);
        }
      });

      $(document).on("click", "#rtpsorgu-close-btn", function () {
        $("body").removeClass("no-scroll");
        $("#rtp-sorgu-bottom-sheet").css("transform", `translateY(100%)`);

        setTimeout(function () {
          $("#rtp-sorgu-overlay").css("display", "none");
        }, 100);
      });

      $("#rtp-game-search").on("keyup", function () {
        const searchTerm = $(this).val().toLowerCase().trim();

        if (searchTerm === "") filteredGames = null;
        else
          filteredGames = randomGames.filter((game) =>
            game.name.toLowerCase().includes(searchTerm)
          );

        renderGames(filteredGames || randomGames);
      });

      renderGames(randomGames); // Listeyi ilk açılışta bir kere basıyoruz
      startRtpLoop();
    }

    function rtpSorgu() {
      if ($("#rtp-sorgu-overlay").length) $("#rtp-sorgu-overlay").remove();

      const rtpSorguBottomSheet = `
    <div
      id="rtp-sorgu-overlay"
      style="
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100svh;
        display: none;
        align-items: end;
        justify-content: center;
        z-index: 999999;
      "
    >
      <div
        id="rtp-sorgu-bottom-sheet"
        class="bg-black"
        style="
          width: 100%;
          height: 80svh;
          border: 1px solid #1b1b1b;
          border-radius: 24px 24px 0 0;
          transform: translateY(100%);
          transition: 0.35s all ease;
          padding: 20px 16px;
          overflow-y: scroll;
          position: relative;
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="24"
          height="24"
          viewBox="0,0,256,256"
          style="position: absolute; top: 16px !important; right: 16px !important;"
          id="rtpsorgu-close-btn"
        >
          <g
            fill="#ffffff"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
            style="mix-blend-mode: normal"
          >
            <g transform="scale(5.12,5.12)">
              <path
                d="M7.71875,6.28125l-1.4375,1.4375l17.28125,17.28125l-17.28125,17.28125l1.4375,1.4375l17.28125,-17.28125l17.28125,17.28125l1.4375,-1.4375l-17.28125,-17.28125l17.28125,-17.28125l-1.4375,-1.4375l-17.28125,17.28125z"
              ></path>
            </g>
          </g>
        </svg>
        <div class="d-flex align-items-center justify-content-center">
          <div
            style="
              width: 25%;
              height: 5px;
              background: rgba(255, 255, 255, 0.7);
              border-radius: 360px;
              margin-bottom: 32px;
            "
          ></div>
        </div>
        <div
          class="d-flex align-items-center justify-content-between text-white"
          style="margin-bottom: 24px"
        >
          <h4 style="font-weight: 600; margin-bottom: 0px">
            ${language === "tr" ? "Canlı RTP" : "Live RTP"}
          </h4>
          <a
            href="https://rtpsorgu.com"
            target="_blank"
            style="
              color: #f82228;
              text-decoration: none;
              font-weight: 600;
            "
            >${language === "tr" ? "Tümünü Gör" : "See All"}</a
          >
        </div>
        <div style="position: relative; margin-bottom: 32px">
          <input
            type="text"
            name="rtp-game-search"
            id="rtp-game-search"
            placeholder="Bir oyun ismi arayın"
            style="
              outline: none !important;
              background: none !important;
              color: white;
              border: 1px solid #ffffff40;
              display: block;
              width: 100%;
              padding: 8px 12px;
              box-shadow: none !important;
              border-radius: 24px;
            "
          />
          <div
            style="
              position: absolute;
              top: 50%;
              right: 12px;
              transform: translateY(-50%);
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0,0,256,256"
            >
              <g
                fill="#d6d5d5"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style="mix-blend-mode: normal"
              >
                <g transform="scale(5.12,5.12)">
                  <path
                    d="M21,3c-9.37891,0 -17,7.62109 -17,17c0,9.37891 7.62109,17 17,17c3.71094,0 7.14063,-1.19531 9.9375,-3.21875l13.15625,13.125l2.8125,-2.8125l-13,-13.03125c2.55469,-2.97656 4.09375,-6.83984 4.09375,-11.0625c0,-9.37891 -7.62109,-17 -17,-17zM21,5c8.29688,0 15,6.70313 15,15c0,8.29688 -6.70312,15 -15,15c-8.29687,0 -15,-6.70312 -15,-15c0,-8.29687 6.70313,-15 15,-15z"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div id="rtp-games-wrapper"></div>
      </div>
    </div>
      `;

      $("#body").append(rtpSorguBottomSheet);

      rtpSorguLogic();
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

        if (!is_mobile) slotGames();

        bottomMenuWidget(is_mobile);

        tgPromo();

        if (!is_mobile) casinoGames();

        gameChooser();

        if (is_mobile) rtpSorgu();

        // miniGames();

        // sportsCard();
        //hide default games

        // HIDE
        // !is_mobile && hideDefaultGames(50);
        // !is_mobile && hideDefaultGames(1500);

        insertCustomMiniGamesSlider();
        setTimeout(initCustomMiniGamesSlider, 500);
        otherGames();
      }

      // * GENERAL

      insertCustomSidebarLink();
      injectProvidersMarquee();
      is_mobile && mobileBoxes();

      hideBlogSection();

      customizeSignupModal();
      customizeSigninModal();

      injectExtraText();
      // autoplayMiniSlider();

      slot_games = getSlotGames();
      casino_games = getCasinoGames();

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

        if (
          $sidebarLinks &&
          !$sidebarLinks.classList.contains("custom_links_replaced")
        ) {
          const linksToRemove =
            $sidebarLinks.querySelectorAll(".sidebar__link");
          linksToRemove.forEach((link) => link.remove());

          // --casino for hover
          const newLinksHTML = `
          <a class="sidebar__link sidebar__link--casino" href="https://betredi110.com/${language}/casino/slots" style="background: url('https://betrediofficial.github.io/images/aside-links/slot.png') left center / cover no-repeat;"></a>
          <a class="sidebar__link sidebar__link--casino" href="https://betredi110.com/${language}/casino" style="background: url('https://betrediofficial.github.io/images/aside-links/casino.png') left center / cover no-repeat;"></a>
          `;

          $sidebarLinks.insertAdjacentHTML("beforeend", newLinksHTML);
          $sidebarLinks.classList.add("custom_links_replaced");
        }

        if ($sidebarLinks && !exists) {
          const customDiv = document.createElement("div");
          customDiv.className = "sidebar__links custom_side";
          customDiv.innerHTML = `
        <a class="sidebar__link sidebar__link--casino w-100" href="https://betredi110.com/${language}/promotions"
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

    // function insertCustomSidebarLink() {
    //   const observer = new MutationObserver(() => {

    //     const $sidebarLinks = document.querySelector(
    //       ".sidebar__big .sidebar__links"
    //     );

    //     const exists = document.querySelector(".sidebar__links.custom_side");

    //     if ($sidebarLinks && !exists) {
    //       const customDiv = document.createElement("div");
    //       customDiv.className = "sidebar__links custom_side";
    //       customDiv.innerHTML = `
    //     <a class="sidebar__link sidebar__link--casino w-100" href=${
    //       language === "tr"
    //         ? "d/tr/promotions"
    //         : "d/en/promotions"
    //     }
    //        style="height: 46px; background: url('https://betrediofficial.github.io/images/aside-links/promotions.png') center center / cover no-repeat;">
    //     </a>
    //   `;
    //       $sidebarLinks.parentNode.insertBefore(
    //         customDiv,
    //         $sidebarLinks.nextSibling
    //       );
    //     }
    //   });

    //   observer.observe(document.body, {
    //     childList: true,
    //     subtree: true,
    //   });
    // }

    function injectProvidersMarquee() {
      const container = document.querySelector("#main-slider > .container");
      if (!container || container.querySelector(".custom--section--2")) return;

      const swiperElement = container.querySelector(".swiper");
      if (!swiperElement) return;

      const section = document.createElement("div");

      section.className = "section custom--section--2 custom--section";
      section.innerHTML = `
<div class="container" style="position: relative; max-width: 100% !important; margin-bottom: 20px !important; padding-left: 0px !important; padding-right: 0px !important; padding-top: 0px !important; overflow: hidden !important;">
<div class="providers--marquee--bg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to right, rgba(0, 0, 0, 0.3) 0%, transparent 50%, rgba(0, 0, 0, 0.3) 100%);z-index: 1;pointer-events: none;"></div>
${
  isMobile
    ? `<div class="providers--marquee--bg" style="background: linear-gradient(to right, rgb(0, 0, 0) 0%, #6c0c09 50%, rgb(0, 0, 0) 100%); position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></div>`
    : `<div class="providers--marquee--bg" style="background: linear-gradient(to right, rgba(0, 0, 0, 1) 0%, #7a0603 50%, rgba(0, 0, 0, 1) 100%); position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></div>`
}
<div class="providers--marquee">	
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/pragmaticplay">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/pragmaticplay.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/evolution">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Evolution%20Gaming.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/hacksaw">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/hacksaw.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/egt">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/egt.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/nolimitcity">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/NoLimitCity.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/egt-interactive">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/amusnet.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/playson">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/playson.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/netent">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/netent.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/popiplay">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/popiplay.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/thunderkick">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/thunderkick.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/booming">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/booming.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/redtiger">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Red%20Tiger%20Gaming.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/pragmaticlive">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/pragmatic-live-light.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/bgaming">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/softswiss.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/gameart">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/gameart.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/fantasma">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/fantasma.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/slotmill">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/slotmill.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/1spin4win">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/1spin4win.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/aesexybaccarat">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/AE%20Sexy.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/5men">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/5men.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/novomatic">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/novomatic.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/7mojos">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/7%20mojos.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/alg">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/alg.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/amatic">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/amatic.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/endorphina">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/endorphina.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/pgsoft">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Pocket%20Games%20Soft.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/apollo">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Apollo%20Games.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/asiagaming">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Asia%20Gaming.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/atomic">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/atomic%20slot.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/beefee">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/BeeFee%20Games.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/belatra">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/belatra.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/betsolutions">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Betsolutions.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/bet2tech">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/bet%202%20tech.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/beterlive">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/beterlive.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/betradarvs">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Betradar%20Virtual%20sports.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/betsoft">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/betsoft.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/eagaming">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/ea%20gaming.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/concept">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Concept%20Gaming.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/cq9">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/CQ9.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/ctgaming">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/CT%20Gaming.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/everymatrix">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/everymatrix.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/evoplay">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/evoplay.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/ezugi">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/ezugi.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/fazi">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/fazi.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/fugaso">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/fugaso.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/gamebeat">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/gamebeat.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/gaming7777">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Gaming%207777.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/genii">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Genii.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/givme">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/givme%20games.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/goldenhero">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/golden%20hero.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/habanero">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/habanero.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/hogaming">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/HoGaming.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/hollegames">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/hollegames.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/igrosoft">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Igrosoft.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/irondog">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/irondog.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/jaderabbit">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/jaderabbit.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/jdb">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/JDB.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/kalamba">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/kalamba.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/kiron">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Kiron%20Interactive.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/leander">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Leander.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/leap">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Leap.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/livegames">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Live%20Games.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/lucky">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/lucky.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/luckystreak">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/luckystreak.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/mascotgaming">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/mascot.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/merkurgaming">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/merkur%20gaming.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/mplay">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/m%20play.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/mrslotty">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/mrslotty.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/netgame">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/netgame.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/nucleus">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/nucleus.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/oryx">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/oryx.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/playtech">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Playtech%20slots.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/quickspin">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/quickspin.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/redrake">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Red%20Rake%20Gaming.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/reevo">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/reevo.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/sagaming">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/SA%20Gaming.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/salsa">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Salsa%20technology.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/spinomenal">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/spinomenal.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/spinza">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/spinza.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/spribe">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/spribe.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/swintt">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/swintt.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/tomhornnative">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/tomhorn.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/providersuelab">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/lightuelab.svg" alt="">
				          </a>

				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/turbogames">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/turbogames.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/tvbet">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/tv%20bet.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/vivogaming">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Vivo%20Gaming.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/wizard">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/wazdan.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/worldmatch">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/World%20Match.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/xprogaming">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/XPro%20Gaming.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/yggdrasil">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/yggdrasil.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/zillion">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/zillion.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/ebetlab">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/originals.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/imagine-live">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/imageinelive.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/jiliasia">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Jiliasia.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/royal-gaming">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Royal%20Gaming.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/tada-gaming">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Tada%20Gaming.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/zeus-play">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Zeus%20Play.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/peter-and-sons">
				            <img class="custom--providers--image" src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/game-providers/light/Peter%20And%20Sons.svg" alt="">
				          </a>
				        
				          <a class="custom--providers--link" href="https://betredi110.com/${language}/providers/topspin">
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

  #slot-game-chooser-section a img.slot-game-chooser-item,
  #casino-game-chooser-section a img.casino-game-chooser-item {
    transition: 2s transform ease;
  }

  .game-chooser-hovered-effect {
    transition: 0.35s all ease-out;
  }

  #slot-game-chooser-section:hover .game-chooser-hovered-effect,
  #casino-game-chooser-section:hover .game-chooser-hovered-effect {
    opacity: 1 !important;
  }

  #slot-game-chooser-section:hover .play-btn,
  #casino-game-chooser-section:hover .play-btn {
    transform: scale(0.75);
  }

  #spin-game-btn:hover {
    background: #7b0111 !important;
  }

  #spin-game-btn:disabled {
    opacity: 0.5;
  }

  #spin-game-btn:disabled:hover {
    background: #310204 !important;
  }

  .play-btn {
    transition: 0.35s all ease-out;
  }

  #main__content {
    background: #000 !important;
  }

  @media screen and (max-width: 768px) {
    #game-chooser-wrapper {
      width: 92% !important;
    }

    #slot-game-chooser-section,
    #casino-game-chooser-section {
      width: 50% !important;
    }

    #game-chooser-title-1 {
      font-size: 24px !important;
    }

    #game-chooser-title-2 {
      font-size: 28px !important;
    }

    #game-chooser-title-1,
    #game-chooser-title-2 {
      padding: 0px 12px;
    }

    #main-slider .mySwiper {
      height: 30vh !important;
    }

    #main-slider .swiper-slide a {
      height: 100% !important;
    }
  }
      `;
      document.head.appendChild(style);
    }

    // * BG Image Optimization for all OS
    // ! Don't touch

    //     #main__content {
    //   position: relative;
    //   z-index: 1;
    // }

    // #main__content::before {
    //   content: "";
    //   position: fixed;
    //   top: 0;
    //   left: 0;
    //   height: 100%;
    //   width: 100%;
    //   background: url("https://betrediofficial.github.io/images/betredi_background.png") no-repeat center center;
    //   background-size: cover;
    //   background-repeat: no-repeat;
    //   background-position: center;
    //   z-index: -1;
    //   pointer-events: none;
    // }

    function otherGames() {
      if ($("#digeroyunlari").length > 0) $("#digeroyunlari").remove();

      var newSection = `
<div class="manually-added-home-widgets section" id="digeroyunlari">
  <div class="container otherGames">
    <div class="row">
      <div class="col-12">
        <div class="section__title-wrap"><h2 class="section__title"><svg class="svg-icon"><use href="/static/media/sprite.33143bc5180d8cec7f771b3eedc5187c.svg#top-games"></use></svg>
        EKSTRA OYUNLAR
        </h2><a class="section__view section__view--carousel" href="https://betredi110.com/${language}/casino/group/top-games">Tümünü Görüntüle</a></div>
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
  <a href="https://betredi110.com/${language}/casino/games/pragmaticlive-spaceman">
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
   <a href="https://betredi110.com/${language}/casino/games/betsolutions-zeppelin">  
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
   <a href="https://betredi110.com/${language}/casino/games/pragmaticlive-big-bass-crash">
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

      $("#game-chooser").after(newSection);
    }

    // * Game Chooser

    function gameChooser() {
      if ($("#game-chooser").length > 0) {
        $("#game-chooser").remove();
      }

      const gameChooserSection = `
  <div class="manually-added-home-widgets" id="game-chooser" style="width: 100%; margin: 48px auto">
    <div class="text-white" style="width: 100%; margin: 0 auto;">
      <div style="padding: 128px 0px; background: url('https://betrediofficial.github.io/images/game-chooser-icons/bg.png');">
        <div style="margin-bottom: 42px">
          <h2 class="text-center" id="game-chooser-title-1" style="font-size: 28px; margin-bottom: 4px">
            ${
              language === "tr"
                ? "Ne oynayacağınıza karar veremiyor musunuz?"
                : "Can’t decide what to play?"
            }
          </h2>
          <h2 class="text-center" id="game-chooser-title-2" style="font-size: 32px; font-weight: bold">
            ${
              language === "tr"
                ? "Şansınızı rastgele bir oyunda deneyin!"
                : "Give a random game a shot!"
            }
          </h2>
        </div>
        <div
          class="d-flex align-items-center justify-content-center mx-auto"
          id="game-chooser-wrapper"
          style="
            width: 512px;
            border: 5px solid #7b0111;
            border-radius: 16px;
            overflow-x: hidden;
            overflow-y: hidden;
            margin-bottom: 32px;
            height: 359px;
            background: #7b0111;
            gap: 5px;
          "
        >
          <div
            id="slot-game-chooser-section"
            style="
              position: relative;
              width: 256px;
              height: 359px;
              overflow: hidden;
            "
          >
            <div
              class="game-chooser-hovered-effect"
              style="
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(
                  to top,
                  rgba(231, 31, 38, 0.2) 30%,
                  rgba(0, 0, 0, 0.4) 70%
                );
                pointer-events: none;
                opacity: 0;
                z-index: 1;
              "
            >
              <img class="play-btn" src="https://betrediofficial.github.io/images/game-chooser-icons/play.png" style="z-index: 2" />
            </div>
          </div>
          <div
            id="casino-game-chooser-section"
            style="
              position: relative;
              width: 256px;
              height: 359px;
              overflow: hidden;
            "
          >
            <div
              class="game-chooser-hovered-effect"
              style="
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(
                  to top,
                  rgba(231, 31, 38, 0.2) 30%,
                  rgba(0, 0, 0, 0.4) 70%
                );
                pointer-events: none;
                opacity: 0;
                z-index: 1;
              "
            >
              <img class="play-btn" src="https://betrediofficial.github.io/images/game-chooser-icons/play.png" style="z-index: 2" />
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <button
            type="button"
            id="spin-game-btn"
            class="mx-auto"
            style="
              border: 2px solid #e71f25;
              background: #310204;
              color: #fff;
              padding: 10px 24px;
              border-radius: 8px;
              font-size: 16px;
              font-weight: 500;
              transition: 0.3s;
            "
          >
            <span style="font-weight: 600">${
              language === "tr" ? "ÇEVİR" : "SPIN"
            }</span>
          </button>
        </div>
      </div>
    </div>
  </div>
      `;

      $("#buy-bonus-games-wrapper").after(gameChooserSection);

      gameChooserLogic();
    }

    function mobileBoxes() {
      // if ($("#mobileboxes").length > 0) return $("#mobileboxes").show();

      if ($(".custom--section--2").length > 0)
        $(".custom--section--2").after(`
<div class="manually-added-home-widgets container mt-4 mobile-boxes" id="mobileboxes" style="margin-bottom: 10px;">
  <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-1">
    <a href="https://betredi110.com/${language}/casino/group/live-lobby" class="col-4" style="background: #040404;">
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
    <a href="https://betredi110.com/${language}/casino/group/lobby" class="col-4" style="background: #040404;">
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
    <a href="${depositMoneyLink()}" class="col-4" style="background: #040404;">
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
    <a href="${withdrawMoneyLink()}" class="col-4" style="background: #040404;">
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
    <a class="col-4" style="background: #040404;" href="https://betredi110.com/${language}/promotions?modal=vip&tab=bonus-code">
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
    <a href="https://betredi110.com/${language}/promotions" class="col-4" style="background: #040404;">
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
    <a onClick="$('.lowbar__btn')[$('.lowbar__btn').length -1].click()" class="col-4" style="background: #040404;">
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
    <a href="https://betredi110.com/${language}/trade" target="_blank" class="col-4" style="background: #040404;">
      <div class="box-icon-item">
      <svg class="svg-icon" style="margin: 4px auto !important; width: 26px !important; height: 26px !important;"><use href="/static/media/sprite.4e4e22b3c670750ab1e58c7c8bc8a3c8.svg#chart" xlink:href="/static/media/sprite.4e4e22b3c670750ab1e58c7c8bc8a3c8.svg#chart"></use></svg>
        <span>${language === "tr" ? "Borsa" : "Trade"}</span>
      </div>
    </a>
    <div id="btn-rtp-sorgu" rel="nofollow noopener noreferrer" target="_blank" class="col-4">
      <div class="box-icon-item" style="background: linear-gradient(135deg, #3a0509, #5a0910, #a31624);">
        <img
          src="https://betrediofficial.github.io/images/mobile-view/graph.png"
          width="48"
          height="48"
          class="d-block mx-auto"
        />
        <span>${language === "tr" ? "Şanlı Oyunlar" : "Lucky Games"}</span>
      </div>
    </div>
  </div>
</div>
    `);
    }

    function bottomMenuWidget(isMobile) {
      if ($(".bottomMenuWidgedContainer").length > 0) {
        return $(".bottomMenuWidgedContainer").show();
      }

      var newSection = `
<div class="manually-added-home-widgets bottomMenuWidgedContainer" id="bottomMenuWidgedContainer" style="margin-bottom: 10px;">
  <div class="bottom-menu-widget" style="flex: 1 1 calc(25% - 10px); text-align: center;">
    <a href="https://betredi110.com/${language}/casino/category/exclusive">
      <img src="https://betrediofficial.github.io/images/bottom-menu-widget/games.png" alt="games" class="bottomMenuWidgetImage" >
    </a>
  </div>

  ${
    !isMobile
      ? `<div class="bottom-menu-widget" style="flex: 1 1 calc(25% - 10px); text-align: center;">
    <a href="https://betredi110.com/${language}/casino/group/live-casino">
      <img src="https://betrediofficial.github.io/images/bottom-menu-widget/live_casino.png" alt="livecasino" class="bottomMenuWidgetImage" >
    </a>
  </div>`
      : ``
  }

  <div class="bottom-menu-widget" style="flex: 1 1 calc(25% - 10px); text-align: center;">
    <a href="https://betredi110.com/${language}/sportsbook">
      <img src="https://betrediofficial.github.io/images/bottom-menu-widget/sport.png" alt="sporb" class="bottomMenuWidgetImage" >
    </a>
  </div>
  <div class="bottom-menu-widget" style="flex: 1 1 calc(25% - 10px); text-align: center;">
    <a href="https://betredi110.com/${language}/casino/slots">
      <img src="https://betrediofficial.github.io/images/bottom-menu-widget/slot.png" alt="slotcasino" class="bottomMenuWidgetImage" >
    </a>
  </div>
</div>
    `;

      $("#slotoyunlari").before(newSection);
    }

    function slotGames() {
      if ($("#slotoyunlari").length > 0) return $("#slotoyunlari").show();

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
                          <a href="https://betredi110.com/${language}/casino/slots" class"sdr-item-bc" href="#">
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
                        <a href="https://betredi110.com/${language}/casino/games/pragmaticplay-starlight-princess-1000" class="">
                          <img src="https://betrediofficial.github.io/images/casino-games-new/starlight_princess_1000.png" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                    <div class="casino-game-item-content">
                      <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                        <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                        <a href="https://betredi110.com/${language}/casino/games/pragmaticplay-sweet-bonanza-1000" class="">
                          <img src="https://betrediofficial.github.io/images/casino-games-new/sweet_bonanza_1000.png" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                    <div class="casino-game-item-content">
                      <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                        <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                        <a href="https://betredi110.com/${language}/casino/games/pragmaticplay-wisdom-of-athena" class="">
                          <img src="https://betrediofficial.github.io/images/casino-games-new/wisdom_of_athena.png" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                    <div class="casino-game-item-content">
                      <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                        <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                        <a href="https://betredi110.com/${language}/casino/games/pragmaticplay-big-bass-secrets-of-the-golden-lake" class="">
                          <img src="https://betrediofficial.github.io/images/casino-games-new/big_bass_christmas_bash.png" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                    <div class="casino-game-item-content">
                      <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                        <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                        <a href="https://betredi110.com/${language}/casino/games/hacksaw-wanted-dead-or-a-wild" class="">
                          <img src="https://betrediofficial.github.io/images/casino-games-new/wanted_dead_or_a_wild.png" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                    <div class="casino-game-item-content">
                      <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                        <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                        <a href="https://betredi110.com/${language}/casino/games/pragmaticplay-big-bass-secrets-of-the-golden-lake" class="">
                          <img src="https://betrediofficial.github.io/images/casino-games-new/big_bass_secrets_of_the_golden_lake.png" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                    <div class="casino-game-item-content">
                      <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;"> 
                        <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                        <a href="https://betredi110.com/${language}/casino/games/egt-interactive-shining-crown" class="">
                          <img src="https://betrediofficial.github.io/images/casino-games-new/shining_crown.png" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                    <div class="casino-game-item-content">
                      <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                        <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                        <a href="https://betredi110.com/${language}/casino/games/egt-flaming-hot" class="">
                          <img src="https://betrediofficial.github.io/images/casino-games-new/flaming_hot.png" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                    <div class="casino-game-item-content">
                      <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                        <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                        <a href="https://betredi110.com/${language}/casino/games/pragmaticplay-gates-of-olympus" class="">
                          <img src="https://betrediofficial.github.io/images/casino-games-new/gates_of_olympus.png" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                    <div class="casino-game-item-content">
                      <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                        <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                        <a href="https://betredi110.com/${language}/casino/games/pragmaticplay-wild-west-gold" class="">
                          <img src="https://betrediofficial.github.io/images/casino-games-new/wild_west_gold.png" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                    <div class="casino-game-item-content">
                      <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                        <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                        <a href="https://betredi110.com/${language}/casino/games/pragmaticplay-hand-of-midas-2" class="">
                          <img src="https://betrediofficial.github.io/images/casino-games-new/hand_of_midas_2.png" class="casino-game-image-bc" loading="lazy">
                        </a>
                      </div>
                    </div>
                    <div class="casino-game-item-content">
                      <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                        <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                        <a href="https://betredi110.com/${language}/casino/games/pragmaticplay-ripe-rewards" class="">
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
      if ($("#tgpromo").length > 0) return $("#tgpromo").show();

      var newSection = `
<div class="manually-added-home-widgets section" id="tgpromo" style="margin-bottom: 14px; margin-top: 14px;">
  <div class="container otherGames">
    <a href="https://t.me/betredi" target="_blank">
      <img src="https://betrediofficial.github.io/images/tg-promo/tg_promo_new.webp" alt="Telegram Promo" style="display: block; width: 100%; margin-bottom: 10px;" />
    </a>
    <a href="https://betredi110.com/${language}/promotion/100-freespin-deneme-bonusu-trrf">
    <img src="https://betrediofficial.github.io/images/tg-promo/reditg.gif"
         alt="Telegram Promo GIF"
         style="display: block; width: 100%; margin-bottom: 10px; border: 2px solid #9b000e; border-radius: 10px; max-width: 100% !important;" />
    </a>
    <img src="https://betrediofficial.github.io/images/tg-promo/tg_promo_desc.webp" alt="Kripto Bilgilendirme" style="display: block; width: 100%;" />
  </div>
</div>

`;

      if ($("#slotoyunlari").length > 0) $("#slotoyunlari").after(newSection);
      else $("#mini-slider-wrapper").eq(0).after(newSection);
    }

    function casinoGames() {
      if ($("#casinooyunlari").length > 0) return $("#casinooyunlari").show();

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
                        <a href="https://betredi110.com/${language}/casino/group/live-casino" class="sdr-item-bc">
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
                      <a href="https://betredi110.com/${language}/casino/games/pragmaticlive-blackjack-3">
                        <img src="https://betrediofficial.github.io/images/live-casino-new/black_jack_3.png" class="casino-game-image-bc img-fluid">
                      </a>
                    </div>
                  </div>
                  
                  <div class="casino-game-item-content position-relative" style="overflow: hidden !important;">
                    <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                      <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                      <a href="https://betredi110.com/${language}/casino/games/pragmaticlive-speed-blackjack-1">
                        <img src="https://betrediofficial.github.io/images/live-casino-new/speed_blackjack_1.png" class="casino-game-image-bc img-fluid">
                      </a>
                    </div>
                  </div>

                  <div class="casino-game-item-content position-relative" style="overflow: hidden !important;">
                    <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                      <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                      <a href="https://betredi110.com/${language}/casino/games/pragmaticlive-mega-roulette">
                        <img src="https://betrediofficial.github.io/images/live-casino-new/mega_roulette.png" class="casino-game-image-bc img-fluid">
                      </a>
                    </div>
                  </div>

                  <div class="casino-game-item-content position-relative" style="overflow: hidden !important;">
                    <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                      <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                      <a href="https://betredi110.com/${language}/casino/games/pragmaticlive-baccarat-lobby">
                        <img src="https://betrediofficial.github.io/images/live-casino-new/baccarat_lobby.png" class="casino-game-image-bc img-fluid">
                      </a>
                    </div>
                  </div>

                  <div class="casino-game-item-content position-relative" style="overflow: hidden !important;">
                    <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                      <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                      <a href="https://betredi110.com/${language}/casino/games/evolution-blackjack-vip-20">
                        <img src="https://betrediofficial.github.io/images/live-casino-new/blackjack.png" class="casino-game-image-bc img-fluid">
                      </a>
                    </div>
                  </div>

                  <div class="casino-game-item-content position-relative" style="overflow: hidden !important;">
                    <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                      <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                      <a href="https://betredi110.com/${language}/casino/games/evolution-auto-lightning-roulette">
                        <img src="https://betrediofficial.github.io/images/live-casino-new/lightning_roulette.png" class="casino-game-image-bc img-fluid">
                      </a>
                    </div>
                  </div>

                  <div class="casino-game-item-content position-relative" style="overflow: hidden !important;">
                    <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                      <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                      <a href="https://betredi110.com/${language}/casino/games/pragmaticlive-roulette-lobby">
                        <img src="https://betrediofficial.github.io/images/live-casino-new/roulette_lobby.png" class="casino-game-image-bc img-fluid">
                      </a>
                    </div>
                  </div>

                  <div class="casino-game-item-content position-relative" style="overflow: hidden !important;">
                    <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                      <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                      <a href="https://betredi110.com/${language}/casino/games/evolution-texas-holdem-bonus-poker">
                        <img src="https://betrediofficial.github.io/images/live-casino-new/texas_holdem_bonus_poker.png" class="casino-game-image-bc img-fluid">
                      </a>
                    </div>
                  </div>

                  <div class="casino-game-item-content position-relative" style="overflow: hidden !important;">
                    <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                      <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                      <a href="https://betredi110.com/${language}/casino/games/evolution-first-person-roulette">
                        <img src="https://betrediofficial.github.io/images/live-casino-new/first_person_roulette.png" class="casino-game-image-bc img-fluid">
                      </a>
                    </div>
                  </div>

                  <div class="casino-game-item-content position-relative" style="overflow: hidden !important;">
                    <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                      <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                      <a href="https://betredi110.com/${language}/casino/games/evolution-blackjack-silver-f">
                        <img src="https://betrediofficial.github.io/images/live-casino-new/blackjack_silver.png" class="casino-game-image-bc img-fluid">
                      </a>
                    </div>
                  </div>

                  <div class="casino-game-item-content position-relative" style="overflow: hidden !important;">
                    <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                      <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                      <a href="https://betredi110.com/${language}/casino/games/evolution-golden-wealth-baccarat">
                        <img src="https://betrediofficial.github.io/images/live-casino-new/golden_wealth_baccarat.png" class="casino-game-image-bc img-fluid">
                      </a>
                    </div>
                  </div>

                  <div class="casino-game-item-content position-relative" style="overflow: hidden !important;">
                    <div class="casino-game-item" style="border: 3px solid #9b000e !important; overflow: hidden !important;">
                      <div class="hovered-effect" style="opacity: 0; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.2); z-index: 10; pointer-events: none;"></div>
                      <a href="https://betredi110.com/${language}/casino/games/evolution-speed-vip-blackjack-h">
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
    if ($("#sportscard").length > 0) return $("#sportscard").show();

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
