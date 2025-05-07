import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

// Article data for reusability
const articles = [
  {
    id: 1,
    image: "/image-3.png",
    title:
      "Apakah Jus Nanas Bisa Menurunkan Kadar Gula? Berikut Penjelasannya…",
    source: "Berita Kesehatan Terkini - Kompas.com",
    url: "https://health.kompas.com/",
    iconSquare: "/icon-square-image-3.svg",
  },
  {
    id: 2,
    image: "/image-4.png",
    title: "Rebusan Daun Kelor untuk Mengobati Apa? Berikut 10 Daftarnya…",
    source: "Berita Kesehatan Terkini - Kompas.com",
    url: "https://health.kompas.com/",
    iconSquare: "/icon-square-image-2.svg",
  },
  {
    id: 3,
    image: "/image-5.png",
    title: "Manfaat Minum Wedang Jahe di Pagi Hari, Termasuk Naikkan Mood",
    source: "Berita Kesehatan Terkini - Kompas.com",
    url: "https://health.kompas.com/",
    iconSquare: "/icon-square-image.svg",
  },
];

// Social media links
const socialMedia = [
  { id: 1, name: "Instagram", icon: "/instagram.svg" },
  { id: 2, name: "Twitter", icon: "/twitter.svg" },
  { id: 3, name: "Facebook", icon: "/facebook.svg" },
  { id: 4, name: "Youtube", icon: "/youtube.svg" },
];

// Navigation items
const navItems = [
  { id: 1, name: "About", href: "#about" },
  { id: 2, name: "Article", href: "#article" },
  { id: 3, name: "Recommendation", href: "#recommendation" },
  { id: 4, name: "Our Product", href: "#product" },
  { id: 5, name: "History", href: "#history" },
];

export const LandingPage = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1728px] h-[2873px] relative">
        {/* Navigation Bar */}
        <header className="fixed w-[1728px] h-[114px] top-0 left-px bg-white z-10">
          <nav className="flex items-center justify-between px-16 h-full">
            <img
              className="w-[197px] h-[76px] bg-blend-multiply"
              alt="SIM.COM Logo"
              src="/black-and-white-aesthetic-minimalist-modern-simple-typography-co.png"
            />

            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="[text-shadow:0px_4px_4px_#00000040] font-['Poppins',Helvetica] font-light text-[#1ba3b2] text-2xl text-center tracking-[0] leading-normal"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <img
                className="w-[61px] h-[61px]"
                alt="Vector"
                src="/vector.svg"
              />
              <img className="w-[61px] h-[61px]" alt="Menu" src="/menu.svg" />
            </div>
          </nav>
          <Separator className="w-full h-1.5 bg-[#1ba3b2] shadow-[0px_4px_4px_#00000040]" />
        </header>

        {/* Hero Section */}
        <section className="relative w-[1483px] h-[769px] top-[185px] left-[163px]">
          <div className="absolute w-[592px] top-[217px] left-0 font-['Poppins',Helvetica] font-medium text-black text-[32px] text-justify tracking-[-0.32px] leading-normal">
            Mulailah Perjalanan Anda Menuju Kesehatan Optimal, Alat Penghitung
            Kalori Cerdas Yang Dirancang Untuk Membantu Anda Mencapai Tujuan
            Kesehatan Anda. Di Sini, Setiap Kalori Terhitung Untuk Masa Depan
            Yang Lebih Sehat.
          </div>

          <div className="absolute w-[1483px] h-[769px] top-0 left-0">
            <h1 className="absolute w-[645px] top-20 left-0 font-['Open_Sans',Helvetica] font-bold text-black text-[40px] tracking-[0] leading-normal">
              MARI HIDUP SEHAT BERSAMA SIM.COM
            </h1>

            <div className="absolute w-[843px] h-[769px] top-0 left-[640px] shadow-[0px_4px_4px_#00000040]">
              <div className="relative w-[575px] h-[618px] top-[76px] left-[134px]">
                <img
                  className="absolute w-[575px] h-[525px] top-[46px] left-0"
                  alt="Blob"
                  src="/blob.svg"
                />

                <img
                  className="absolute w-[485px] h-[77px] top-[541px] left-[46px]"
                  alt="Whites"
                  src="/whites-2.svg"
                />

                <div className="absolute w-[479px] h-[46px] top-[570px] left-[49px]">
                  <div className="relative w-[481px] h-12 -top-px -left-px bg-[#e7eaee] rounded-[240.5px/23.8px]" />
                </div>

                <div className="absolute w-[183px] h-[509px] top-[47px] left-[261px]">
                  <div className="absolute w-[183px] h-[495px] top-0 left-0">
                    <img
                      className="absolute w-12 h-[51px] top-[332px] left-[76px]"
                      alt="Whites"
                      src="/whites-11.svg"
                    />

                    <img
                      className="absolute w-[153px] h-[230px] top-[265px] left-[30px]"
                      alt="Whites"
                      src="/whites.svg"
                    />

                    <img
                      className="absolute w-[15px] h-[226px] top-[268px] left-[30px]"
                      alt="Shadow"
                      src="/shadow-1.svg"
                    />

                    <img
                      className="absolute w-[17px] h-3.5 top-[50px] left-4"
                      alt="Whites"
                      src="/whites-6.svg"
                    />

                    <img
                      className="absolute w-[15px] h-3.5 top-[51px] left-[107px]"
                      alt="Whites"
                      src="/whites-5.svg"
                    />

                    <img
                      className="absolute w-20 h-[104px] top-0 left-7"
                      alt="Whites"
                      src="/whites-7.svg"
                    />

                    <img
                      className="absolute w-[81px] h-7 top-6 left-7"
                      alt="Shadow"
                      src="/shadow.svg"
                    />

                    <img
                      className="absolute w-[138px] h-[164px] top-[108px] left-px"
                      alt="Whites"
                      src="/whites-8.svg"
                    />

                    <img
                      className="absolute w-[67px] h-[138px] top-[114px] left-[72px]"
                      alt="Whites"
                      src="/whites-4.svg"
                    />

                    <img
                      className="absolute w-[72px] h-[156px] top-[100px] left-0"
                      alt="Whites"
                      src="/whites-3.svg"
                    />

                    <div className="absolute w-[49px] h-[9px] top-[70px] left-[45px]">
                      <div className="absolute w-3.5 h-[11px] -top-px left-9 bg-[#ffb61d] rounded-[7.18px/5.61px]" />
                      <div className="absolute w-3.5 h-[11px] -top-px -left-px bg-[#ffb61d] rounded-[7.18px/5.61px]" />
                    </div>
                  </div>

                  <img
                    className="absolute w-3.5 h-3 top-[497px] left-[43px]"
                    alt="Whites"
                    src="/whites-9.svg"
                  />
                </div>

                <img
                  className="absolute w-[485px] h-[618px] top-0 left-[46px]"
                  alt="Stroke"
                  src="/stroke-1.svg"
                />

                <img
                  className="absolute w-[140px] h-[210px] top-[372px] left-[60px]"
                  alt="Whites"
                  src="/whites-1.svg"
                />

                <img
                  className="absolute w-[142px] h-[214px] top-[369px] left-[58px]"
                  alt="Stroke"
                  src="/stroke-2.svg"
                />

                <img
                  className="absolute w-[50px] h-[114px] top-[438px] left-[182px]"
                  alt="Whites"
                  src="/whites-10.svg"
                />

                <img
                  className="absolute w-[157px] h-[116px] top-[388px] left-[67px]"
                  alt="Highlights"
                  src="/highlights.svg"
                />

                <img
                  className="absolute w-[52px] h-[116px] top-[437px] left-[181px]"
                  alt="Stroke"
                  src="/stroke-3.svg"
                />

                <div className="absolute w-[88px] h-[59px] top-[532px] left-[141px] bg-white rounded-[43.84px/29.73px]" />
                <div className="absolute w-[55px] h-[61px] top-[531px] left-[140px] bg-[#e7eaee] rounded-[27.42px/30.73px]" />
                <img
                  className="absolute w-[90px] h-[62px] top-[531px] left-[139px]"
                  alt="Stroke"
                  src="/stroke.svg"
                />
              </div>
            </div>
          </div>

          <Button className="absolute top-[620px] left-0.5 w-[266px] h-[81px] p-0 overflow-hidden">
            <img
              className="relative w-[257px] h-[79px] mt-[-1.00px] ml-[-5.00px]"
              alt="Button"
              src="/button.svg"
            />
          </Button>
        </section>

        {/* First Separator */}
        <Separator className="absolute w-[1349px] top-[1152px] left-[165px] h-1.5 bg-[#1ba3b2] shadow-[0px_4px_4px_#00000040]" />

        {/* First Article Section */}
        <section className="absolute w-[1348px] h-[606px] top-[1173px] left-[165px]">
          <h2 className="absolute w-[645px] top-0 left-[371px] font-['Open_Sans',Helvetica] font-bold text-black text-5xl text-center tracking-[0] leading-normal">
            ARTICLE
          </h2>

          <div className="flex justify-between mt-[89px]">
            {articles.map((article, index) => (
              <Card
                key={article.id}
                className="inline-flex flex-col h-[517px] items-center bg-neutral-colors100 rounded-[9.75px] overflow-hidden border-[1.22px] border-solid border-[#e1e3ec] shadow-[0px_2px_10px_6px_#18203c14]"
              >
                <CardContent className="p-0">
                  <div className="relative w-[430.62px] h-[292.27px] rounded-[9.75px_9.75px_0px_0px] overflow-hidden">
                    <div className="relative w-[431px] h-[292px] bg-neutral-colors300">
                      {index > 0 && (
                        <img
                          className="absolute w-[92px] h-[92px] top-[102px] left-[169px]"
                          alt="Icon square image"
                          src={article.iconSquare}
                        />
                      )}
                      <img
                        className="absolute w-[430px] h-[292px] top-0 left-0 object-cover"
                        alt="Article image"
                        src={article.image}
                      />
                    </div>
                  </div>

                  <div className="relative w-[357px] h-[163px] mt-[41px] mx-auto bg-white">
                    <h3 className="absolute w-[300px] -top-px left-0 font-['Poppins',Helvetica] font-bold text-black text-[24.4px] tracking-[0] leading-[26.8px]">
                      {article.title}
                    </h3>
                    <a
                      className="absolute w-[356px] top-[122px] left-px font-['Poppins',Helvetica] font-normal text-black text-[19.5px] tracking-[0] leading-[26.8px] underline"
                      href={article.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {article.source}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Second Article Section */}
        <section className="absolute top-[1824px] left-[175px] flex justify-between w-[1348px]">
          {articles.map((article, index) => (
            <Card
              key={article.id}
              className="inline-flex flex-col h-[517px] items-center bg-neutral-colors100 rounded-[9.75px] overflow-hidden border-[1.22px] border-solid border-[#e1e3ec] shadow-[0px_2px_10px_6px_#18203c14]"
            >
              <CardContent className="p-0">
                <div className="relative w-[430.62px] h-[292.27px] rounded-[9.75px_9.75px_0px_0px] overflow-hidden">
                  <div className="relative w-[431px] h-[292px] bg-neutral-colors300">
                    {index > 0 && (
                      <img
                        className="absolute w-[92px] h-[92px] top-[102px] left-[169px]"
                        alt="Icon square image"
                        src={article.iconSquare}
                      />
                    )}
                    <img
                      className="absolute w-[430px] h-[292px] top-0 left-0 object-cover"
                      alt="Article image"
                      src={article.image}
                    />
                  </div>
                </div>

                <div className="relative w-[357px] h-[163px] mt-[41px] mx-auto bg-white">
                  <h3 className="absolute w-[300px] -top-px left-0 font-['Poppins',Helvetica] font-bold text-black text-[24.4px] tracking-[0] leading-[26.8px]">
                    {article.title}
                  </h3>
                  <a
                    className="absolute w-[356px] top-[122px] left-px font-['Poppins',Helvetica] font-normal text-black text-[19.5px] tracking-[0] leading-[26.8px] underline"
                    href={article.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {article.source}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Pagination */}
        <div className="absolute w-[456px] top-[2492px] left-[635px] font-['Open_Sans',Helvetica] font-bold text-[#1ba3b2] text-2xl text-center tracking-[3.84px] leading-[24.0px]">
          1&nbsp;&nbsp; 2&nbsp;&nbsp; 3&nbsp;&nbsp; 4&nbsp;&nbsp; 5&nbsp;&nbsp;
          ....
        </div>

        {/* Second Separator */}
        <Separator className="absolute w-[1349px] top-[2685px] left-[188px] h-1.5 bg-[#1ba3b2] shadow-[0px_4px_4px_#00000040]" />

        {/* Footer */}
        <footer className="absolute w-full bottom-0 left-0 pb-8">
          <div className="absolute w-[524px] top-[2742px] left-[586px] font-['Open_Sans',Helvetica] font-normal text-black text-2xl text-center leading-6">
            <span className="font-bold tracking-[0.92px] leading-[24.0px]">
              2024 - PT.Sehat Itu Mahal.
              <br />
            </span>
            <span className="tracking-[0] leading-[24.0px]">
              All right reserved powered by.
              <br />
              www.Sim.com
            </span>
          </div>

          <div className="absolute top-[2750px] right-[140px] flex space-x-4">
            {socialMedia.map((social) => (
              <img
                key={social.id}
                className="w-12 h-12"
                alt={social.name}
                src={social.icon}
              />
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
};
