import classNames from 'classnames';

const ContactItem = ({ primary = false, href, icon, children }) => {
  return (
    <li
      class={classNames(
        primary ? 'hover:text-primary_subtitle' : 'hover:text-[#9cedff]',
        'flex items-center gap-3'
      )}
    >
      <img src={icon} class='w-8' alt={'icone de ' + icon} />
      <a href={href} target='_blank'>
        {children}
      </a>
    </li>
  );
};

export default ContactItem;
