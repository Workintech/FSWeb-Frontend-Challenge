import { createContext, useEffect, useState } from "react";

export const SiteContext = createContext();

const initialDataeng = {
  baslik: {
    hero: "Creative thinker Minimalism lover",
    heroabout:
      "Hi, I’m Almila. I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me.",
    profile: "Profile",
    skills: "Skills",
    projects: "Projects",
    hireme: "Hire Me",
    profile: "Profile",
    aboutme: "About Me",
    birthday: "Birthday",
    city: "City of Residence",
    education: "Education",
    role: "Preference role",
    footer: "Let’s work together on your next product.",
    footerlink: "Personal Blog",
  },
  projects: [
    {
      id: 1,
      head: "Workintech",
      projectsexp:
        "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created  with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to   code and themes possible.",
      img: "workintech",
    },
    {
      id: 2,
      head: "RandomJokes",
      projectsexp:
        "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created  with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to   code and themes possible.",
      img: "randomjokes",
    },
    {
      id: 3,
      head: "Journey",
      projectsexp:
        "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created  with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to   code and themes possible.",

      img: "journey",
    },
  ],
};
const initialDatatr = {
  baslik: {
    hero: "Yaratıcı düşünür Minimalizm aşığı",
    heroabout:
      "Merhaba, ben Almila. Full-stack geliştiriciyim. Harika kullanıcı deneyimlerine sahip sağlam ve ölçeklenebilir ön uç ürünleri hazırlayacak bir Geliştirici arıyorsanız. Haydi el sıkışalım.",
    profile: "Profil",
    skills: "Yetenekler",
    projects: "Projeler",
    hireme: " Beni İşe Al",
    aboutme: "Hakkımda",
    birthday: "Doğum Günü",
    city: "İkametgah Şehri",
    education: "Eğitim Durumu",
    role: "Tercih Ettiği Rol",
    footer: "Bir sonraki ürününüz üzerinde birlikte çalışalım.",
    footerlink: "Kişisel Sayfam",
  },
  projects: [
    {
      id: 1,
      name: "Workintech",
      projectsexp:
        "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created  with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to   code and themes possible.",
      img: "workintech",
    },
    {
      id: 2,
      name: "RandomJokes",
      projectsexp:
        "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created  with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to   code and themes possible.",
      img: "{randomjokes}",
    },
    {
      id: 3,
      name: "Journey",
      projectsexp:
        "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created  with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to   code and themes possible.",
      img: "journey",
    },
  ],
};

export const SiteContextProvider = ({ children }) => {
  const [lang, setLang] = useState("TÜRKÇE");
  const [theme, setTheme] = useState("DARK");
  const [store, setStore] = useState(initialDataeng);
  useEffect(() => {
    if (lang === "ENG") {
      setStore(initialDatatr);
    }
    if (lang === "TÜRKÇE") {
      setStore(initialDataeng);
    }
  }, [lang]);
  return (
    <SiteContext.Provider
      value={{ lang, theme, setLang, setTheme, store, setStore }}
    >
      {children}
    </SiteContext.Provider>
  );
};
