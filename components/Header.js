import headerStyles from '../styles/Header.module.css';

export default function Header() {
  //   const x = 2;
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> News
      </h1>
      <p className={headerStyles.description}>
        Keep up to date with the latest web dev news
      </p>
      {/* Injetando css direto no componente, e usando condicional dentro do css */}
      {/* <h1 className="title">
        <span>WebDev</span> News
      </h1> */}
      {/* <style jsx>
        {`
          .title {
            color: ${x > 3 ? 'red' : 'blue'};
          }
        `}
      </style> */}
    </div>
  );
}
