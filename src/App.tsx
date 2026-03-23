/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ChevronDown, 
  MapPin, 
  Utensils, 
  Accessibility, 
  Palette, 
  Heart, 
  ShieldCheck, 
  Clock, 
  Gift,
  Phone,
  Sparkles
} from 'lucide-react';

const FadeInWhenVisible = ({ children, delay = 0, className = "", key }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => {
  return (
    <motion.div
      key={key}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ImageSection = ({ src, title, subtitle, description, reverse = false }: { src: string, title: string, subtitle: string, description: string, reverse?: boolean }) => {
  return (
    <section className={`py-24 px-6 sm:px-12 flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 max-w-6xl mx-auto`}>
      <div className="w-full md:w-1/2">
        <FadeInWhenVisible>
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src={src} 
              alt={title} 
              className="w-full h-[300px] sm:h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
          </div>
        </FadeInWhenVisible>
      </div>
      <div className="w-full md:w-1/2 space-y-6">
        <FadeInWhenVisible delay={0.2}>
          <span className="text-hakka-blue font-bold tracking-widest text-sm uppercase">{subtitle}</span>
          <h2 className="serif-title text-3xl sm:text-4xl text-soft-black mt-2 leading-tight">{title}</h2>
          <p className="text-gray-500 leading-loose text-lg mt-6 font-light">
            {description}
          </p>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);

  return (
    <div className="min-h-screen bg-warm-beige selection:bg-hakka-blue/30 overflow-x-hidden">
      {/* Section 1: Hero */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://i.ibb.co/fd4tXd3X/image.jpg" 
            alt="Taiwan Hakka Museum High Res" 
            className="w-full h-full object-cover brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-warm-beige/10 to-warm-beige" />
        </motion.div>
        
        <div className="z-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="mb-8 inline-block"
          >
            <Sparkles className="text-white mx-auto mb-4" size={32} />
            <div className="text-white font-medium tracking-[0.2em] text-sm sm:text-base uppercase drop-shadow-lg space-y-2">
              <p>中華民國珍珠社會福利服務協會</p>
              <p className="tracking-[0.4em]">115年度苗栗縣身心障礙者服務中心(第一區) 家庭支持活動</p>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="serif-title text-5xl sm:text-8xl text-white leading-tight mb-8 drop-shadow-2xl"
          >
            好久，沒有一起<br />
            <span className="text-hakka-blue-light">去旅行了。</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="text-white/90 text-xl sm:text-2xl leading-relaxed max-w-xl mx-auto font-light drop-shadow-lg"
          >
            給自己與家人一個喘息的下午。<br />
            這一次，我們陪您一起 FUN 出門。
          </motion.p>
        </div>

        <motion.div
          style={{ opacity: heroOpacity }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 text-sage-green cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <ChevronDown size={40} strokeWidth={1} />
        </motion.div>
      </section>

      {/* Section 2: Story */}
      <section className="py-32 px-8 sm:px-12 bg-white/40">
        <div className="max-w-2xl mx-auto text-center space-y-20">
          <FadeInWhenVisible>
            <h2 className="text-3xl sm:text-4xl leading-relaxed text-soft-black serif-title">
              「我們知道，出一趟門並不容易。」
            </h2>
          </FadeInWhenVisible>
          
          <div className="space-y-12">
            <FadeInWhenVisible delay={0.3}>
              <div className="text-xl sm:text-2xl leading-loose text-gray-600 font-light space-y-6">
                <p>但外面的陽光很好，風景很美。</p>
                <p>這一次，把擔憂交給我們，您只需要準備好放鬆的心情。</p>
                <p className="text-hakka-blue font-medium">好好跟親朋好友出遊，創造回憶</p>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Section 3: Scenery - The Mood */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <img 
            src="https://i.ibb.co/fd4tXd3X/image.jpg" 
            alt="靜謐山城" 
            className="w-full h-full object-cover brightness-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>
        
        <div className="relative z-10 text-center text-white px-6">
          <FadeInWhenVisible>
            <h2 className="serif-title text-4xl sm:text-6xl leading-tight">
              靜謐山城<br />
              在山與雲之間<br />
              找回內心的平靜
            </h2>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Section 4: Visual Journey - The Museum */}
      <ImageSection 
        src="https://i.ibb.co/Jjk4PxjJ/image.jpg"
        subtitle="第一站：建築與光影的對話"
        title="臺灣客家文化館"
        description="這不只是一座博物館，更是一場視覺的饗宴。隱身於山丘起伏之間，建築師巧妙地運用玻璃與鋼鐵，勾勒出如雲朵般的輕盈曲線。當陽光穿透玻璃帷幕，灑落在平坦寬敞的廊道上，光影隨時光流轉。在這裡，輪椅也能自在穿梭，讓您在靜謐的氛圍中，重新發現生活的美好。"
      />

      {/* Section 5: Visual Journey - The Food */}
      <ImageSection 
        src="https://i.ibb.co/Fkjn9pxf/image.png"
        subtitle="第二站：舌尖上的溫暖記憶"
        title="囍客餐廳的午間盛宴"
        description="旅程的滋味，往往藏在熱騰騰的飯菜裡。我們特別為您安排在館內的囍客餐廳，享用一份充滿土地溫度的客家料理。選用在地當季食材，每一道菜都訴說著客家人的熱情與厚道。在舒適、無障礙的用餐空間裡，與家人共享這份難得的悠閒時光。"
        reverse
      />

      {/* Section 6: Visual Journey - The Activity */}
      <ImageSection 
        src="https://i.ibb.co/6cZ3V0XW/image.png"
        subtitle="第三站：手作一份感動"
        title="文化教育課程：客家食‧當好食"
        description="「當好食」是客家話對美味最真誠的讚美。在專業講師的引領下，我們將一起動手，透過簡單而有趣的環保手作，體會先民惜物、愛物的智慧。這不只是一場課程，更是一次心靈的交流。在歡笑聲中，親手製作一份屬於這趟旅程的獨特紀念，帶回家與親友分享。"
      />

      {/* Section: Friendly Features */}
      <section className="py-32 px-6 sm:px-12 bg-hakka-blue-light/20">
        <div className="max-w-6xl mx-auto">
          <FadeInWhenVisible className="text-center mb-20">
            <h2 className="serif-title text-4xl text-soft-black mb-4">友善設施與關懷</h2>
            <p className="text-gray-500">我們用心，讓每一位家人都能自在同行</p>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInWhenVisible delay={0.1}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                <img src="https://i.ibb.co/0p7GR5B7/image.png" alt="視障友善" className="w-full h-64 object-cover" referrerPolicy="no-referrer" />
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2">視障友善導覽</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">提供專業的導覽服務，透過觸覺與聽覺，讓視障朋友也能深度體驗客家文化之美。</p>
                </div>
              </div>
            </FadeInWhenVisible>
            
            <FadeInWhenVisible delay={0.2}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                <img src="https://i.ibb.co/vvjCVhpy/image.png" alt="輪椅友善" className="w-full h-64 object-cover" referrerPolicy="no-referrer" />
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2">輪椅友善空間</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">全館採用無障礙設計，寬敞的坡道與平坦的地面，讓輪椅使用者與陪伴者都能輕鬆穿梭。</p>
                </div>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.3}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                <img src="https://i.ibb.co/2719Tb5L/image.png" alt="闔家出遊" className="w-full h-64 object-cover" referrerPolicy="no-referrer" />
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2">闔家共融時光</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">無論是長輩、孩童或身障家人，都能在這裡找到適合的角落，享受三代同堂的幸福。</p>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Section 7: Mood Gallery */}
      <section className="py-32 px-6 sm:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInWhenVisible className="text-center mb-20">
            <h2 className="serif-title text-4xl text-soft-black mb-4">捕捉，旅途中的微光</h2>
            <p className="text-gray-400">每一刻，都值得被溫柔對待</p>
          </FadeInWhenVisible>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              { src: "https://i.ibb.co/fd4tXd3X/image.jpg", span: "row-span-2", title: "靜謐山城" },
              { src: "https://i.ibb.co/5hPJS7NL/image.jpg", span: "", title: "手作課程" },
              { src: "https://i.ibb.co/WNTB0PKS/image.png", span: "", title: "親子時光" },
              { src: "https://i.ibb.co/JWphPTY2/image.jpg", span: "row-span-2", title: "在地美食" },
              { src: "https://i.ibb.co/hTzgcB1/image.png", span: "", title: "輪椅友善" },
              { src: "https://i.ibb.co/QF69K5hW/image.png", span: "", title: "闔家出遊" },
            ].map((img, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.1} className={img.span}>
                <div className="group relative h-full overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                    <span className="text-white text-sm font-medium tracking-widest">{img.title}</span>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Transportation */}
      <section className="py-32 px-6 sm:px-12 bg-warm-beige/30">
        <div className="max-w-6xl mx-auto">
          <FadeInWhenVisible className="text-center mb-20">
            <h2 className="serif-title text-4xl text-soft-black mb-4">交通資訊</h2>
            <p className="text-gray-400">便捷的接駁，讓旅程更輕鬆</p>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeInWhenVisible delay={0.1}>
              <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-hakka-blue mb-4">接駁專車資訊</h3>
                <img src="https://i.ibb.co/Z6f14x8X/A.jpg" alt="Transportation Info" className="w-full h-auto object-cover rounded-2xl mb-6" referrerPolicy="no-referrer" />
                <img src="https://i.ibb.co/zHBZMbx3/image.jpg" alt="Architectural Beauty" className="w-full h-48 object-cover rounded-2xl mb-6" referrerPolicy="no-referrer" />
                <p className="text-gray-500 text-sm leading-relaxed">
                  我們提供專屬無障礙接駁服務，從高鐵苗栗站出發，直達臺灣客家文化館。
                  <br /><br />
                  <span className="font-bold text-soft-black">接駁路線：</span>
                  高鐵苗栗站 ↔ 客委會臺灣客家文化館 ↔ 三義木雕博物館
                </p>
              </div>
            </FadeInWhenVisible>
            
            <FadeInWhenVisible delay={0.2}>
              <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-soft-black mb-2">乘車提醒</h4>
                    <p className="text-gray-500 text-sm">請於活動開始前 15 分鐘抵達接駁點，現場將有志工協助登車。</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-soft-black mb-2">無障礙需求</h4>
                    <p className="text-gray-500 text-sm">若需使用輪椅升降設備，請於報名時先行註記，以便安排專屬車位。</p>
                  </div>
                  <div className="pt-4">
                    <button className="w-full py-4 bg-hakka-blue text-white rounded-xl font-bold hover:bg-opacity-90 transition-all">
                      下載詳細班次表
                    </button>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Section 8: Itinerary Timeline */}
      <section className="py-32 px-6 sm:px-12 bg-warm-beige/50">
        <div className="max-w-3xl mx-auto">
          <FadeInWhenVisible className="text-center mb-20">
            <h2 className="serif-title text-4xl text-soft-black mb-4">
              漫遊行程安排
            </h2>
            <p className="text-hakka-blue font-medium tracking-widest">4月29日 星期三</p>
          </FadeInWhenVisible>

          <div className="space-y-16 relative before:absolute before:left-[23px] before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-hakka-blue before:to-sage-green">
            {[
              { time: "11:30", title: "專車接送", desc: "我們安排了專業無障礙交通接送，在約定地點等您，免去交通煩惱。", icon: <Clock size={24} /> },
              { time: "12:00", title: "暖心午餐", desc: "於囍客餐廳享用精緻客家料理簡餐，在舒適的環境中補足能量。", icon: <Utensils size={24} /> },
              { time: "13:00", title: "漫步文化館", desc: "寬敞平坦的無障礙空間，讓輪椅也能輕鬆暢遊。包含導覽解說與自由活動。", icon: <Accessibility size={24} /> },
              { time: "14:30", title: "精彩活動", desc: "參與「客家食‧當好食」手作體驗，感受客家文化的深厚底蘊。", icon: <Palette size={24} /> },
              { time: "16:30", title: "賦歸", desc: "帶著滿滿的回憶與笑容，我們將安全護送您回到溫暖的家。", icon: <MapPin size={24} /> },
            ].map((item, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.15}>
                <div className="flex gap-10 items-start group">
                  <div className="z-10 bg-white border-2 border-hakka-blue text-hakka-blue p-2.5 rounded-full shadow-lg group-hover:bg-hakka-blue group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-4 mb-2">
                      <span className="text-hakka-blue font-black text-lg tracking-tighter font-mono">{item.time}</span>
                      <h3 className="text-2xl font-bold text-soft-black serif-title">{item.title}</h3>
                    </div>
                    <p className="text-gray-500 leading-loose text-lg font-light">{item.desc}</p>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Support */}
      <section className="py-32 px-6 sm:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInWhenVisible className="text-center mb-20">
            <h2 className="serif-title text-4xl text-soft-black mb-6">請放心，我們全程都在</h2>
            <p className="text-gray-400 max-w-md mx-auto">專業的團隊，只為給您最安心的陪伴</p>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {[
              { icon: <Accessibility className="text-hakka-blue" />, title: "♿️ 行前勘查", desc: "所有動線與無障礙廁所，我們都已為您親自確認，確保輪椅通行無阻。" },
              { icon: <Heart className="text-red-300" />, title: "🤝 專業陪同", desc: "社工與志工全程隨行，隨時協助移位、如廁或處理任何突發狀況。" },
              { icon: <ShieldCheck className="text-sage-green" />, title: "🛡️ 彈性無壓", desc: "我們不趕行程，保留充足的緩衝休息時間，累了隨時都能停下歇息。" },
              { icon: <Gift className="text-amber-400" />, title: "🎁 全額補助", desc: "本活動由社會福利計畫全額支持，受邀家庭無需負擔任何費用。" },
            ].map((item, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.1}>
                <div className="p-10 rounded-[2rem] bg-warm-beige/30 border border-black/5 hover:border-hakka-blue/20 hover:bg-white hover:shadow-xl transition-all duration-500 group">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-soft-black mb-4 serif-title">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-lg font-light">{item.desc}</p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: CTA */}
      <section className="relative py-40 px-6 text-center overflow-hidden bg-sage-green/5">
        <motion.div 
          animate={{ 
            rotate: [0, 5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-80 h-80 bg-hakka-blue/10 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            rotate: [0, -5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-sage-green/10 rounded-full blur-3xl" 
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <FadeInWhenVisible>
            <h2 className="serif-title text-3xl sm:text-5xl text-soft-black mb-16 leading-tight">
              4月29日，要不要和我們一起<br />去走走？
            </h2>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.3}>
            <a 
              href="https://reurl.cc/xK5xaz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-hakka-blue text-white px-12 py-6 rounded-full text-xl font-bold shadow-2xl shadow-hakka-blue/40 hover:bg-soft-black hover:-translate-y-2 transition-all duration-500 group"
            >
              <span>👉 點我了解報名資訊與評估</span>
              <Sparkles className="group-hover:animate-pulse" size={20} />
            </a>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.6}>
            <div className="mt-24 space-y-6">
              <div className="flex items-center justify-center gap-3 text-gray-400">
                <div className="w-8 h-px bg-gray-200" />
                <span className="text-sm tracking-[0.2em] uppercase">聯絡我們</span>
                <div className="w-8 h-px bg-gray-200" />
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 text-lg">037-260820 分機 607 李社工</p>
                <p className="text-gray-400 text-sm">苗栗縣身心障礙者服務中心（第一區）</p>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-black/5 text-center bg-white">
        <p className="text-gray-400 text-xs tracking-[0.3em] uppercase mb-4">
          苗栗縣政府 主辦 · 中華民國珍珠社會福利服務協會 承辦
        </p>
        <p className="text-gray-300 text-[10px] tracking-widest">
          本活動由 115 年度苗栗縣身心障礙者服務中心計畫(第一區) 經費支持
        </p>
      </footer>
    </div>
  );
}
