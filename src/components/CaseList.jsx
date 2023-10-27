import classNames from 'classnames';
import cases from '../cases.json';

const CaseList = () => {
  return (
    <ul className='flex gap-8 flex-wrap container mx-auto justify-center'>
      {cases.map((data, i) => {
        return <Case key={i} data={data} />;
      })}
    </ul>
  );
};

const Case = ({ data }) => {
  return (
    <article
      className={classNames(
        'flex flex-col flex-1',
        'py-4 rounded-lg shadow-lg',
        'min-w-[15rem] max-w-[18rem] bg-primary_highlight'
      )}
    >
      <a href={data.url} target='_blank' className='text-white'>
        <img src={data.image} alt={data.title} width='100%' />
        <div className='px-2 py-2'>
          <h2 className='mb-2 text-xl'>{data.title}</h2>
          <p className='leading-5 font-light'>{data.desc}</p>
        </div>
      </a>
    </article>
  );
};

export default CaseList;
