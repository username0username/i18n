const resources = {
    ru: {
      title: 'Тест интернационализации',
      articleTitle: 'Заголовок',
      articleText: 'Текст Текст Текст',
    },
    en: {
      title: 'Internationalization test',
      articleTitle: 'Title',
      articleText: 'Text Text Text',
    },
    es: {
      title: 'Prueba de internacionalización',
      articleTitle: 'Título',
      articleText: 'Texto Texto Texto',
    },
  };
  

const language = navigator.language.split('-')[0];
let selectedLanguage = language in resources ? language : 'ru';

function updateContent() {
  document.getElementById('title').textContent = resources[selectedLanguage].title;
  document.getElementById('articleTitle').textContent = resources[selectedLanguage].articleTitle;
  document.getElementById('articleText').textContent = resources[selectedLanguage].articleText;
}

updateContent();

function changeLanguage() {
  selectedLanguage = document.getElementById('languageSelector').value;
  updateContent();
}
