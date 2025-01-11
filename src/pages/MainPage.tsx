import { useTranslation } from 'react-i18next';
import { Header } from '$/Header';
import { useEffect } from 'react';
import { resources } from '@/common/utils/localization';
import { sleep } from '@/common/utils/sleep';
import { Footer } from '$/Footer';

const MainPage = () => {
  const { t } = useTranslation();
  let toggled = false;

  useEffect(() => {
    if (!toggled) {
      toggled = true;
    } else return;

    nicknameLoop();
  }, []);

  const deletingDelay = 150;
  const writingDelay = 300;
  const stayingDelay = 3000;

  let currentNicknameIndex = 0;
  let step = 1; // 0 - writing, 1 - staying, 2 - deleting
  async function nicknameLoop() {
    const element = document.getElementById('nickname')!;

    // eslint-disable-next-line no-constant-condition
    while (true) {
      let language = window.localStorage.getItem('language');
      if (language == null || language === '') language = 'en';
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const json = resources[language]['translation'];
      const possible = Object.keys(json).filter((s) =>
        s.startsWith('nickname'),
      );
      const maxIndex = possible.length - 1;

      switch (step) {
        case 0: {
          const nickname: string = json[possible[currentNicknameIndex]];
          const writingLength =
            element.innerText === ' ' ? 1 : element.innerText.length + 1;
          if (writingLength === nickname.length) {
            step = 1;
          }
          element.innerText = nickname.substring(0, writingLength);
          await sleep(writingDelay);
          break;
        }
        case 1: {
          step = 2;
          await sleep(stayingDelay);
          break;
        }
        case 2: {
          const deletingLength = element.innerText.length - 1;
          if (deletingLength === 0) {
            step = 0;
            currentNicknameIndex =
              currentNicknameIndex === maxIndex ? 0 : currentNicknameIndex + 1;
            element.innerText = ' ';
          } else {
            element.innerText = element.innerText.substring(0, deletingLength);
          }
          await sleep(deletingDelay);
          break;
        }
      }
    }
  }

  return (
    <>
      <Header />
      <div
        className={
          'mx-auto flex max-w-7xl items-start justify-normal md:items-center md:justify-between p-6 sm:pt-16 pt-6 sm:px-16 px-6'
        }
      >
        <div className={''}>
          {' '}
          {/* Nickname + Stacks */}
          <div className={'text-8xl font-lexend font-semibold text-marquis'}>
            <span id={'nickname'}>Aniby</span>
          </div>
          <div className={'text-3xl md:text-5xl font-inter font-regular py-2'}>
            <a>{t('fullstack_developer')}</a>
            <div className={'-m-4'}>
              <div
                className={
                  'relative mix-blend-darken mx-3 h-6 bg-marquis opacity-50 text-white'
                }
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className={'mx-auto block max-w-7xl sm:px-16 px-6'}>
        <div className={'md:text-2xl text-xl font-inter font-light'}>
          <p>{t('description.1')}</p>
          <br />
          <p>{t('description.2')}</p>
        </div>
        <div className={'text-3xl font-inter font-light pt-16'}>
          <p className={'text-marquis'}>
            <a href={'https://github.com/an1by'}>{t('portfolio.check')}</a>
          </p>
          <p className={'py-4'}>
            <a
              href={'https://an1by.t.me/'}
              className={
                'flex justify-center h-12 items-center w-56 rounded bg-marquis text-white'
              }
            >
              {t('contact')}
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};
// eslint-disable-next-line import/no-default-export
export default MainPage;
