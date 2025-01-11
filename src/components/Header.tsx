import logo from '!/logo/black.png';

import { FaTelegram as Telegram } from 'react-icons/fa';
import { BiSolidBriefcase as Portfolio } from 'react-icons/bi';

import { useTranslation } from 'react-i18next';
import { FC } from 'react';

const animatedButton = 'transition duration-300 ease-in-out hover:scale-105';

export const Header: FC = () => {
  const { t } = useTranslation();

  return (
    <header className="bg-white font-inter">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 sm:px-20 px-10"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 font-semibold">
          <a
            href="/"
            className={
              'scale-125 hover:scale-150 flex items-center indent-4 -m-1.5 p-1.5' +
              animatedButton
            }
          >
            <span className="sr-only">Aniby</span>
            <img className="h-8 w-auto inline" src={logo} alt="" />
            {/*<a className={"m-0.5 invisible md:visible"}>Aniby</a>*/}
          </a>
        </div>
        <div className="scale-150 font-medium flex md:gap-x-8 gap-x-4 justify-end">
          <a
            href="https://github.com/an1by"
            className={'text-sm leading-6' + animatedButton}
          >
            <a className={'hidden md:flex'}>{t('portfolio')}</a>
            <Portfolio className={'md:hidden flex h-8 w-auto'} />
          </a>
          <a href="https://an1by.t.me/" className="text-sm leading-6">
            <a
              className={
                'hidden md:flex justify-center h-auto items-center w-32 rounded text-white bg-marquis hover:bg-marquis-darker ' +
                animatedButton
              }
            >
              {t('contact')}
            </a>
            <Telegram className={'md:hidden flex h-8 w-auto'} />
          </a>
        </div>
      </nav>
    </header>
  );
};
