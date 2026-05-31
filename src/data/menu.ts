export type MenuItem = {
  id: string;
  name: string;
  desc: string;
  price: number;
  image: string;
  badge?: string;
  popular?: boolean;
};

export type MenuCategory = {
  id: string;
  label: string;
  icon: string;
  items: MenuItem[];
};

export const categories: MenuCategory[] = [
  {
    id: 'meals',
    label: 'الوجبات',
    icon: '🍔',
    items: [
      {
        id: 'm1',
        name: 'برجر كلاسيك',
        desc: 'لحم بقري طازج مع جبنة شيدر وخس وطماطم وصوص خاص',
        price: 3500,
        image: 'https://images.pexels.com/photos/10831651/pexels-photo-10831651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        popular: true,
        badge: 'الأكثر مبيعاً',
      },
      {
        id: 'm2',
        name: 'برجر دبل',
        desc: 'طبقتين من اللحم مع جبنة مزدوجة ومخلل وبصل مكرمل',
        price: 5000,
        image: 'https://images.pexels.com/photos/14678998/pexels-photo-14678998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        badge: 'جديد',
      },
      {
        id: 'm3',
        name: 'ساندويتش دجاج',
        desc: 'صدر دجاج مقرمش مع صلصة الثوم والخضروات الطازجة',
        price: 4000,
        image: 'https://images.pexels.com/photos/5446513/pexels-photo-5446513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      {
        id: 'm4',
        name: 'شاورما لحم',
        desc: 'شرائح لحم متبلة مع طحينة ومخلل وبطاطس في خبز عربي',
        price: 3000,
        image: 'https://images.pexels.com/photos/6416559/pexels-photo-6416559.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        popular: true,
      },
      {
        id: 'm5',
        name: 'شاورما دجاج',
        desc: 'دجاج مشوي مع ثوم كريمي وخضار طازجة ملفوفة بعناية',
        price: 2800,
        image: 'https://images.pexels.com/photos/29306506/pexels-photo-29306506.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      {
        id: 'm6',
        name: 'بيتزا مارغريتا',
        desc: 'عجينة رقيقة مع صلصة طماطم وجبنة موزاريلا وريحان طازج',
        price: 6000,
        image: 'https://images.pexels.com/photos/2762938/pexels-photo-2762938.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      {
        id: 'm7',
        name: 'قطع دجاج مقلية',
        desc: 'قطع دجاج مقرمشة ذهبية مع صوص باربكيو وعسل مستردة',
        price: 4500,
        image: 'https://images.pexels.com/photos/14686443/pexels-photo-14686443.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        popular: true,
      },
      {
        id: 'm8',
        name: 'هوت دوج',
        desc: 'نقانق بقري فاخرة مع مستردة وكاتشب وبصل مقرمش',
        price: 2500,
        image: 'https://images.pexels.com/photos/4669301/pexels-photo-4669301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      {
        id: 'm9',
        name: 'بطاطس مقلية',
        desc: 'بطاطس ذهبية مقرمشة مع ملح البحر وتوابل خاصة',
        price: 1500,
        image: 'https://images.pexels.com/photos/5946428/pexels-photo-5946428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      {
        id: 'm10',
        name: 'ناجتس دجاج',
        desc: '8 قطع ناجتس دجاج مقرمشة مع صلصات متنوعة',
        price: 3500,
        image: 'https://images.pexels.com/photos/23106705/pexels-photo-23106705.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
    ],
  },
  {
    id: 'hot',
    label: 'مشروبات ساخنة',
    icon: '☕',
    items: [
      {
        id: 'h1',
        name: 'قهوة تركية',
        desc: 'قهوة تركية أصيلة محضرة على الجمر بنكهة الهيل',
        price: 1000,
        image: 'https://images.pexels.com/photos/8464467/pexels-photo-8464467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        popular: true,
      },
      {
        id: 'h2',
        name: 'كابتشينو',
        desc: 'إسبريسو كريمي مع رغوة الحليب الناعمة ورسمة فنية',
        price: 1500,
        image: 'https://images.pexels.com/photos/28496565/pexels-photo-28496565.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        popular: true,
        badge: 'مميز',
      },
      {
        id: 'h3',
        name: 'لاتيه',
        desc: 'مزيج متوازن من الإسبريسو والحليب المخفوق الدافئ',
        price: 1500,
        image: 'https://images.pexels.com/photos/15801080/pexels-photo-15801080.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      {
        id: 'h4',
        name: 'شوكولاتة ساخنة',
        desc: 'شوكولاتة بلجيكية فاخرة مع كريمة وقطع مارشميلو',
        price: 1800,
        image: 'https://images.pexels.com/photos/5995769/pexels-photo-5995769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      {
        id: 'h5',
        name: 'شاي أحمر',
        desc: 'شاي سيلاني فاخر مقدم مع النعناع الطازج',
        price: 500,
        image: 'https://images.pexels.com/photos/19378972/pexels-photo-19378972.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      {
        id: 'h6',
        name: 'شاي بالحليب',
        desc: 'شاي كرك بتوابل عطرية وحليب مكثف دافئ',
        price: 800,
        image: 'https://images.pexels.com/photos/30742323/pexels-photo-30742323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
    ],
  },
  {
    id: 'cold',
    label: 'مشروبات باردة',
    icon: '🧊',
    items: [
      {
        id: 'c1',
        name: 'عصير برتقال طازج',
        desc: 'برتقال طبيعي معصور طازجاً بدون سكر مضاف',
        price: 2000,
        image: 'https://images.pexels.com/photos/6416553/pexels-photo-6416553.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        popular: true,
      },
      {
        id: 'c2',
        name: 'ليمونادة طازجة',
        desc: 'ليمون طبيعي مع نعناع وثلج مجروش منعش',
        price: 1500,
        image: 'https://images.pexels.com/photos/9584965/pexels-photo-9584965.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        badge: 'منعش',
      },
      {
        id: 'c3',
        name: 'سموذي فواكه',
        desc: 'مزيج فواكه استوائية طازجة مع زبادي وعسل طبيعي',
        price: 2500,
        image: 'https://images.pexels.com/photos/1346342/pexels-photo-1346342.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      {
        id: 'c4',
        name: 'آيس كوفي',
        desc: 'قهوة مثلجة مع حليب كريمي ونكهة الفانيليا',
        price: 1800,
        image: 'https://images.pexels.com/photos/16716138/pexels-photo-16716138.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        popular: true,
      },
      {
        id: 'c5',
        name: 'ميلك شيك',
        desc: 'آيس كريم فانيليا مع حليب مخفوق ونكهة الشوكولاتة',
        price: 2500,
        image: 'https://images.pexels.com/photos/33030217/pexels-photo-33030217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      {
        id: 'c6',
        name: 'مشروب غازي',
        desc: 'مشروب غازي بارد مع ثلج — بيبسي أو كوكاكولا',
        price: 800,
        image: 'https://images.pexels.com/photos/3651045/pexels-photo-3651045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
    ],
  },
];
