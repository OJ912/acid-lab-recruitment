export interface RecruitmentStep {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  tags: string[];
  icon: 'code' | 'keyboard' | 'cpu' | 'rocket';
}

export interface ImageAsset {
  src: string;
  alt: string;
}
