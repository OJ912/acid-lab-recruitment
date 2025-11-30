import { RecruitmentStep, ImageAsset } from './types';

export const IMAGES: ImageAsset[] = [
  { src: "/img/a-3d-rendered-scene-of-a-college-student_wxqJ8RfES-uEUMGW_JlJVg_oHzHHJ5rSSqJKA56nzHS5g.jpeg", alt: "AI Collaboration" },
  { src: "https://image.pollinations.ai/prompt/diverse%20group%20students%20coding%20join%20us%203d%20render?width=1280&height=720&nologo=true", alt: "Join Us" },
  { src: "/img/a-funny-flat-illustration-a-large-muscul_RYVttkpXQcKxZHO54PLdcQ_DKN4IKA5SZ6CV4JMkNZGGA.jpeg", alt: "Python vs C" },
  { src: "https://image.pollinations.ai/prompt/neon%20lab%20recruitment%20sign%20cyberpunk?width=1280&height=720&nologo=true", alt: "Lab Sign" },
  { src: "/img/a-funny-flat-illustration-a-large-muscul_RYVttkpXQcKxZHO54PLdcQ_DKN4IKA5SZ6CV4JMkNZGGA.jpeg", alt: "Learning Python" },
  { src: "https://image.pollinations.ai/prompt/digital%20brain%20schematic%20blue%20neon?width=1280&height=720&nologo=true", alt: "Digital Brain" },
  { src: "/img/an-isometric-3d-illustration-in-a-minima_FlhuG4cHR8OqLx77s120Ag_BNy20SWCR1-QP34gRVV6_w.jpeg", alt: "Python Logic Exam" },
  { src: "/img/a-dynamic-close-up-photograph-of-hands-t_mV6eUB4EQWSGnaRVYDZKCA_bhxTn1hzRaWvGRyIorKj1Q.jpeg", alt: "100 WPM Typing Speed" },
];

export const TIMELINE: RecruitmentStep[] = [
  {
    id: "01",
    title: "预备期",
    subtitle: "本学期期末 / WINTER BREAK",
    icon: "code",
    description: [
      "动作：领取实验室发布的Python统一教程与考试题库。",
      "目标：利用寒假时间自学Python。",
      "理由：Python在自动化办公、爬虫、数学建模及AI开发方面具有极高的实用性，上手快，实战能力强。"
    ],
    tags: ["SELF-STUDY", "PYTHON", "WINTER_ARC"]
  },
  {
    id: "02",
    title: "第一关：Python笔试",
    subtitle: "开学后第4周 / LOGIC CHECK",
    icon: "cpu",
    description: [
      "形式：线下笔试，共三道大题。",
      "标准：85分以上。",
      "重点：不强求单词拼写完全正确，但逻辑必须满分。拒绝眼高手低，学习时必须亲手敲代码。",
      "支持：提供环境部署的线下辅导。"
    ],
    tags: ["EXAM", "LOGIC_FIRST", "OFFLINE"]
  },
  {
    id: "03",
    title: "第二关：打字测试",
    subtitle: "开学后第6周 / CRITICAL NODE",
    icon: "keyboard",
    description: [
      "工具：金山打字通。",
      "内容：中文文稿一篇，英文文稿一篇。",
      "标准：中文 ≥ 50 字/分钟，英文 ≥ 100 词/分钟。",
      "说明：通过此关即被视为实验室的“好苗子”，95%概率成为实验室成员。"
    ],
    tags: ["SPEED", "EFFICIENCY", "KEYBOARD_WARRIOR"]
  },
  {
    id: "04",
    title: "第三关：项目实战",
    subtitle: "开学后第7-10周 / FINAL BOSS",
    icon: "rocket",
    description: [
      "内容：学习HTML+CSS，开发AI聊天机器人。",
      "形式：线下辅导 -> 作品开发 -> 部署上线。",
      "结果：深度体验AI开发，形成闭环。"
    ],
    tags: ["DEV", "AI_AGENT", "DEPLOY"]
  }
];

export const BENEFITS = [
  {
    title: "SKILL ACQUISITION",
    desc: "无论入选与否，你都将掌握Python、盲打、Web基础及AI工具。应对论文与作业的降维打击。"
  },
  {
    title: "AI NATIVE",
    desc: "提前适应“用AI辅助编程”的未来模式。不是死记硬背，而是驾驭算力。"
  },
  {
    title: "CURIOSITY DRIVEN",
    desc: "寻找对技术充满好奇的“好奇宝宝”。享受创造，拒绝无聊。"
  }
];