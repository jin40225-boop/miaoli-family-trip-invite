import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  Accessibility,
  ChevronDown,
  Clock,
  Heart,
  MapPin,
  Palette,
  Phone,
  ShieldCheck,
  Sparkles,
  Utensils,
} from 'lucide-react';

type ImageSectionProps = {
  src: string;
  title: string;
  subtitle: string;
  description: string;
  reverse?: boolean;
};

type FeatureCardProps = {
  image: string;
  title: string;
  description: string;
};

type TimelineItemProps = {
  time: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const FadeInWhenVisible = ({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ImageSection = ({
  src,
  title,
  subtitle,
  description,
  reverse = false,
}: ImageSectionProps) => {
  return (
    <section
      className={`py-24 px-6 sm:px-12 flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 max-w-6xl mx-auto`}
    >
      <div className="w-full md:w-1/2">
        <FadeInWhenVisible>
          <div className="relative group overflow-hidden rounded-3xl shadow-2xl shadow-black/10">
            <img
              src={src}
              alt={title}
              className="w-full h-[320px] sm:h-[460px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </div>
        </FadeInWhenVisible>
      </div>
      <div className="w-full md:w-1/2 space-y-6">
        <FadeInWhenVisible delay={0.15}>
          <span className="text-hakka-blue font-bold tracking-[0.18em] text-sm uppercase">{subtitle}</span>
          <h2 className="serif-title text-3xl sm:text-5xl text-soft-black mt-2 leading-tight">{title}</h2>
          <p className="text-gray-500 leading-loose text-lg mt-6 font-light">{description}</p>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

const FeatureCard = ({ image, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
      <img src={image} alt={title} className="w-full h-64 object-cover" loading="lazy" />
      <div className="p-8">
        <h3 className="text-xl font-bold mb-2 text-soft-black">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const TimelineItem = ({ time, title, desc, icon }: TimelineItemProps) => {
  return (
    <FadeInWhenVisible>
      <div className="flex gap-8 items-start group">
        <div className="z-10 bg-white border-2 border-hakka-blue text-hakka-blue p-2.5 rounded-full shadow-lg group-hover:bg-hakka-blue group-hover:text-white transition-all duration-500">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-baseline gap-4 mb-2 flex-wrap">
            <span className="text-hakka-blue font-black text-lg tracking-tight font-mono">{time}</span>
            <h3 className="text-2xl font-bold text-soft-black serif-title">{title}</h3>
          </div>
          <p className="text-gray-500 leading-loose text-lg font-light">{desc}</p>
        </div>
      </div>
    </FadeInWhenVisible>
  );
};

const galleryImages = [
  { src: '/images/hero-museum.jpg', span: 'row-span-2', title: '臺灣客家文化館' },
  { src: '/images/corridor.jpg', span: '', title: '寬敞走廊' },
  { src: '/images/display-scene.jpg', span: '', title: '展示場景' },
  { src: '/images/restaurant-meal.png', span: 'row-span-2', title: '餐食時光' },
  { src: '/images/wheelchair-friendly.jpg', span: '', title: '輪椅友善' },
  { src: '/images/family-outing.jpg', span: '', title: '家庭同行' },
];

const featureCards = [
  {
    image: '/images/transport-a-line.jpg',
    title: '交通銜接更安心',
    description: '活動規劃時會一併考量接送、轉乘與集合方式，降低家庭外出的負擔與不確定感。',
  },
  {
    image: '/images/wheelchair-friendly.jpg',
    title: '輪椅友善空間',
    description: '以平坦動線、寬敞廊道與無障礙設施為重點，讓輪椅使用者與陪伴者更從容地參與整日活動。',
  },
  {
    image: '/images/family-outing.jpg',
    title: '闔家同行也自在',
    description: '從長輩到孩子都能找到舒服的位置與節奏，讓這趟微旅行成為全家共同記得的好經驗。',
  },
];

const supportCards = [
  {
    icon: <Accessibility className="text-hakka-blue" />,
    title: '低門檻參與',
    desc: '以小團制方式安排，不追求趕行程，而是讓每一戶都能在可被支持的節奏中安心參與。',
  },
  {
    icon: <Heart className="text-red-300" />,
    title: '貼近家庭需求',
    desc: '活動前會先了解交通、移位、飲食、用藥與休息等需求，讓行前準備更完整。',
  },
  {
    icon: <ShieldCheck className="text-sage-green" />,
    title: '安全支持機制',
    desc: '現場有人員協助點名、分組、補水與休息安排，必要時也能配合緊急應變流程。',
  },
  {
    icon: <Sparkles className="text-amber-400" />,
    title: '帶回家的好記憶',
    desc: '不只是外出走走，更希望每個家庭都能累積一次被理解、被陪伴的正向經驗。',
  },
];

const itinerary = [
  {
    time: '11:30',
    title: '交通接送出發',
    desc: '由工作人員協助安排接送與銜接，讓家庭能更安心地前往活動地點。',
    icon: <Clock size={24} />,
  },
  {
    time: '12:00',
    title: '集合與午餐',
    desc: '在舒適的用餐空間享用客家風味餐食，讓大家先放鬆、也先補充體力。',
    icon: <Utensils size={24} />,
  },
  {
    time: '13:00',
    title: '相見歡與暖身',
    desc: '由社工與工作人員帶領簡單互動，讓參與家庭彼此認識，也熟悉當日節奏。',
    icon: <Accessibility size={24} />,
  },
  {
    time: '13:40',
    title: '文化館導覽與自由探索',
    desc: '透過館內動線與展示空間，感受建築、光影與客家文化的層次。',
    icon: <MapPin size={24} />,
  },
  {
    time: '14:30',
    title: '文化教育課程',
    desc: '以「客家食．當好食」為主題，透過體驗與對話，認識客家生活智慧。',
    icon: <Palette size={24} />,
  },
  {
    time: '16:30',
    title: '平安返程',
    desc: '活動結束後整理返程，帶著照片、故事與放鬆過的心情回家。',
    icon: <Heart size={24} />,
  },
];

export default function App() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.15]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.04]);

  return (
    <div className="min-h-screen bg-warm-beige selection:bg-hakka-blue/30 overflow-x-hidden">
      <section className="relative h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0 z-0">
          <img
            src="/images/hero-museum.jpg"
            alt="臺灣客家文化館"
            className="w-full h-full object-cover brightness-[0.72]"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-warm-beige" />
        </motion.div>

        <div className="z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1 }}
            className="mb-8 inline-block"
          >
            <Sparkles className="text-white mx-auto mb-4" size={32} />
            <div className="text-white font-medium tracking-[0.2em] text-sm sm:text-base uppercase drop-shadow-lg space-y-2">
              <p>苗栗縣身心障礙者服務中心（第一區）</p>
              <p className="tracking-[0.35em]">115年度 家庭微旅行 FUN出門</p>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            className="serif-title text-5xl sm:text-8xl text-white leading-tight mb-8 drop-shadow-2xl"
          >
            第一場次
            <br />
            <span className="text-hakka-blue-light">客家食．當好食</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            className="text-white/90 text-xl sm:text-2xl leading-relaxed max-w-2xl mx-auto font-light drop-shadow-lg"
          >
            一場適合身障家庭安心參與的小旅行。
            <br />
            從文化館、午餐到體驗活動，讓外出這件事重新變得輕鬆又有期待。
          </motion.p>
        </div>

        <motion.div
          style={{ opacity: heroOpacity }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 text-sage-green cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <ChevronDown size={40} strokeWidth={1} />
        </motion.div>
      </section>

      <section className="py-32 px-8 sm:px-12 bg-white/40">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <FadeInWhenVisible>
            <h2 className="text-3xl sm:text-4xl leading-relaxed text-soft-black serif-title">
              讓「出門」不再是一件太累的事
            </h2>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <div className="text-xl sm:text-2xl leading-loose text-gray-600 font-light space-y-6">
              <p>很多身障家庭並不是不想出門，而是卡在交通、照顧、無障礙動線與臨場不確定性。</p>
              <p>這次我們用小團制、低門檻、可被支持的方式，讓家庭能在被陪伴的狀態下，重新感受一起外出的自在與安心。</p>
              <p className="text-hakka-blue font-medium">不趕行程，不勉強體力，只把重要的體驗好好留住。</p>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div initial={{ scale: 1.15 }} whileInView={{ scale: 1 }} transition={{ duration: 1.6 }} className="absolute inset-0">
          <img src="/images/mood-scenery.jpg" alt="場地氛圍" className="w-full h-full object-cover brightness-90" loading="lazy" />
          <div className="absolute inset-0 bg-black/15" />
        </motion.div>

        <div className="relative z-10 text-center text-white px-6">
          <FadeInWhenVisible>
            <h2 className="serif-title text-4xl sm:text-6xl leading-tight">
              建築、光影、餐食與陪伴
              <br />
              一起構成這趟旅程的溫度
            </h2>
          </FadeInWhenVisible>
        </div>
      </section>

      <ImageSection
        src="/images/museum-detail.jpg"
        subtitle="第一站"
        title="臺灣客家文化館"
        description="場域本身就是這趟旅程的重要體驗。寬敞的動線、明亮的建築語彙與安定的氛圍，讓家庭不必急著追趕，而是能用自己的節奏走走看看、慢慢感受。"
      />

      <ImageSection
        src="/images/restaurant-interior.png"
        subtitle="第二站"
        title="囍客餐廳的午間時光"
        description="用餐不是匆匆填飽肚子，而是整趟活動裡很重要的休息與交流時刻。透過館內舒適的空間與客家風味料理，讓家庭在活動中也能保有放鬆感。"
        reverse
      />

      <ImageSection
        src="/images/activity-workshop.png"
        subtitle="第三站"
        title="文化教育課程：客家食．當好食"
        description="從吃的文化出發，讓參與者透過故事、觀察與互動，認識客家生活智慧。這不只是課程，也是一段能一起參與、一起留下記憶的過程。"
      />

      <section className="py-32 px-6 sm:px-12 bg-hakka-blue-light/20">
        <div className="max-w-6xl mx-auto">
          <FadeInWhenVisible className="text-center mb-20">
            <h2 className="serif-title text-4xl text-soft-black mb-4">友善亮點</h2>
            <p className="text-gray-500">從交通到空間支持，盡量讓每一戶家庭都能安心參與。</p>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureCards.map((item, index) => (
              <FadeInWhenVisible key={item.title} delay={index * 0.1}>
                <FeatureCard image={item.image} title={item.title} description={item.description} />
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 sm:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInWhenVisible className="text-center mb-20">
            <h2 className="serif-title text-4xl text-soft-black mb-4">現場氛圍</h2>
            <p className="text-gray-400">用照片先感受這趟旅程會帶來的畫面與節奏。</p>
          </FadeInWhenVisible>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {galleryImages.map((img, index) => (
              <FadeInWhenVisible key={img.title} delay={index * 0.08} className={img.span}>
                <div className="group relative h-full overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                    <span className="text-white text-sm font-medium tracking-widest">{img.title}</span>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 sm:px-12 bg-warm-beige/30">
        <div className="max-w-6xl mx-auto">
          <FadeInWhenVisible className="text-center mb-20">
            <h2 className="serif-title text-4xl text-soft-black mb-4">交通與集合</h2>
            <p className="text-gray-400">提早把交通資訊說清楚，家長比較能放心評估是否參加。</p>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeInWhenVisible delay={0.1}>
              <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-hakka-blue mb-4">接駁與路線參考</h3>
                <img src="/images/transport-a-line.jpg" alt="交通路線" className="w-full h-auto object-cover rounded-2xl mb-6" loading="lazy" />
                <img src="/images/map.jpg" alt="地圖資訊" className="w-full h-48 object-cover rounded-2xl mb-6" loading="lazy" />
                <p className="text-gray-500 text-sm leading-relaxed">
                  會依實際參與家庭狀況安排集合與交通銜接，盡量降低轉乘壓力。
                  <br />
                  <br />
                  <span className="font-bold text-soft-black">場地位置：</span>
                  臺灣客家文化館，苗栗縣銅鑼鄉銅科南路 6 號。
                </p>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-soft-black mb-2">活動規模</h4>
                    <p className="text-gray-500 text-sm">每場約 3 至 6 戶、約 15 人左右，採小團制更能照顧個別需求。</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-soft-black mb-2">行前確認</h4>
                    <p className="text-gray-500 text-sm">報名後會由社工確認交通、用餐、移位與陪同需求，再安排最適合的參與方式。</p>
                  </div>
                  <div className="pt-4">
                    <a
                      href="https://reurl.cc/xK5xaz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-4 bg-hakka-blue text-white rounded-xl font-bold text-center hover:bg-soft-black transition-all"
                    >
                      查看報名資訊
                    </a>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 sm:px-12 bg-warm-beige/50">
        <div className="max-w-3xl mx-auto">
          <FadeInWhenVisible className="text-center mb-20">
            <h2 className="serif-title text-4xl text-soft-black mb-4">第一場流程</h2>
            <p className="text-hakka-blue font-medium tracking-widest">4 月 29 日</p>
          </FadeInWhenVisible>

          <div className="space-y-16 relative before:absolute before:left-[23px] before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-hakka-blue before:to-sage-green">
            {itinerary.map((item) => (
              <TimelineItem key={item.time + item.title} time={item.time} title={item.title} desc={item.desc} icon={item.icon} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 sm:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInWhenVisible className="text-center mb-20">
            <h2 className="serif-title text-4xl text-soft-black mb-6">支持安排</h2>
            <p className="text-gray-400 max-w-md mx-auto">活動不是只安排景點，而是把家庭真正需要的支持一起放進來。</p>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {supportCards.map((item, index) => (
              <FadeInWhenVisible key={item.title} delay={index * 0.1}>
                <div className="p-10 rounded-[2rem] bg-warm-beige/30 border border-black/5 hover:border-hakka-blue/20 hover:bg-white hover:shadow-xl transition-all duration-500 group">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-soft-black mb-4 serif-title">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-lg font-light">{item.desc}</p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-40 px-6 text-center overflow-hidden bg-sage-green/5">
        <motion.div
          animate={{ rotate: [0, 5, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-20 -right-20 w-80 h-80 bg-hakka-blue/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: [0, -5, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-sage-green/10 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <FadeInWhenVisible>
            <h2 className="serif-title text-3xl sm:text-5xl text-soft-black mb-16 leading-tight">
              如果你也想讓家人
              <br />
              安心地一起出門走走
            </h2>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <a
              href="https://reurl.cc/xK5xaz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-hakka-blue text-white px-12 py-6 rounded-full text-xl font-bold shadow-2xl shadow-hakka-blue/40 hover:bg-soft-black hover:-translate-y-2 transition-all duration-500 group"
            >
              <span>立即查看報名表單</span>
              <Sparkles className="group-hover:animate-pulse" size={20} />
            </a>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.45}>
            <div className="mt-24 space-y-6">
              <div className="flex items-center justify-center gap-3 text-gray-400">
                <div className="w-8 h-px bg-gray-200" />
                <span className="text-sm tracking-[0.2em] uppercase">聯絡資訊</span>
                <div className="w-8 h-px bg-gray-200" />
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 text-lg inline-flex items-center gap-2">
                  <Phone size={18} />
                  037-260820 分機 607 李社工
                </p>
                <p className="text-gray-400 text-sm">苗栗縣身心障礙者服務中心（第一區）</p>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      <footer className="py-16 px-6 border-t border-black/5 text-center bg-white">
        <p className="text-gray-400 text-xs tracking-[0.3em] uppercase mb-4">
          FAMILY MICRO TRIP INVITATION
        </p>
        <p className="text-gray-300 text-[10px] tracking-widest">
          115年度 家庭微旅行 FUN出門 第一場次邀請頁
        </p>
      </footer>
    </div>
  );
}
