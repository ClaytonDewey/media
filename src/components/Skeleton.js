import classNames from 'classnames';

function Skeleton({ times, className }) {
  const outerClassNames = classNames(
    className,
    'relative',
    'overflow-hidden',
    'bg-gray-200',
    'mb-2.5'
  );
  const innerClassNames = classNames(
    'animate-shimmer',
    'absolute',
    'inset-0',
    '-translate-x-full',
    'bg-gradient-to-r',
    'from-gray-200',
    'via-white',
    'to-gray-200'
  );
  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div className={outerClassNames} key={i}>
          <div className={innerClassNames} />
        </div>
      );
    });

  return boxes;
}

export default Skeleton;
