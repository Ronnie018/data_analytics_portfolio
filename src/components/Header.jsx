import classnames from 'classnames';

const Header = ({ children, subtitle = null }) => {
  return (
    <header class='w-full text-white flex md:justify-end container justify-center sublined'>
      <div
        data-text
        class={classnames(
          'flex flex-col w-max md:mr-10 sm:gap-3 gap-10 md:text-left text-center',
          !subtitle && 'sm:pb-12 pb-20'
        )}
      >
        <h1 class='sm:text-4xl text-3xl'>{children}</h1>
        {subtitle && (
          <p class='text-xl font-light text-primary_subtitle'>{subtitle}</p>
        )}
      </div>
    </header>
  );
};

export default Header;
